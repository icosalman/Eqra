// ============================================
// EQRA — Surah Reader Page
// Full Surah Reading, Word-by-Word Audio Recitation, Translations
// Color-Coded Tajweed with Indo-Pak Font Support & Reading Progress Bookmark
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta, breadcrumbSchema, setStructuredData } from '../utils/seo.js';
import { getSurah, getSurahMeta, getSurahRecitation } from '../services/quranService.js';
import { renderAyahCard, bindAyahCardEvents } from '../components/AyahCard.js';
import { getSettings, saveSettings, getSurahProgress } from '../utils/storage.js';
import { audioPlayer } from '../components/AudioPlayer.js';
import { formatColorCodedQuran, renderTajweedLegend, renderTajweedModal } from '../utils/quranColors.js';
import { 
  renderSurah3DBadge, 
  Icon3DAudio, 
  Icon3DQuran,
  Icon3DFlame 
} from '../components/Icons3D.js';
import { getGoalProgressSummary, recordAyahRead } from '../services/quranGoalService.js';
import { openReadingGoalModal } from '../components/ReadingGoalModal.js';

export function renderSurahPage(params) {
  const lang = getLang();
  const surahNum = parseInt(params.surah || 1, 10);
  const meta = getSurahMeta(surahNum);

  if (!meta) {
    return `
      <div class="page">
        <div class="container" style="text-align: center; padding: var(--space-16);">
          <h1>${t('error')}</h1>
          <p style="color: var(--color-text-secondary); margin-top: var(--space-2);">Surah not found</p>
          <a href="#/${lang}/quran" class="btn btn-primary" style="margin-top: var(--space-4);">${t('goBack')}</a>
        </div>
      </div>
    `;
  }

  updateMeta({
    title: `${lang === 'bn' ? meta.banglaName : meta.englishName} (${meta.name}) — তাজবীদসহ কুরআন | EQRA`,
    description: `সূরা ${meta.banglaName} (${meta.englishName}): ${meta.ayahs} আয়াত, ${meta.banglaMeaning}। ইন্দো-পাক নূরানী ফন্ট এবং কালার-কোডেড তাজবীদসহ বিশুদ্ধ তিলাওয়াত।`,
    canonicalPath: `#/${lang}/quran/${meta.number}`
  });

  setStructuredData(breadcrumbSchema([
    { name: t('navHome'), url: `#/${lang}/` },
    { name: t('navQuran'), url: `#/${lang}/quran` },
    { name: lang === 'bn' ? meta.banglaName : meta.englishName, url: `#/${lang}/quran/${meta.number}` }
  ]));

  const settings = getSettings();
  const displayMode = settings.displayMode || 'all';
  const quranFont = settings.quranFont || 'indopak';
  const tajweedEnabled = settings.tajweedEnabled !== false;

  const fontClass = quranFont === 'uthmani' 
    ? 'font-uthmani' 
    : quranFont === 'nastaliq' 
      ? 'font-nastaliq' 
      : 'font-indopak';

  // Surah navigation prev/next
  const prevNum = meta.number > 1 ? meta.number - 1 : null;
  const nextNum = meta.number < 114 ? meta.number + 1 : null;

  // Retrieve existing reading progress & daily goal
  const progress = getSurahProgress(meta.number);
  const goalSummary = getGoalProgressSummary();

  return `
    <div class="page" id="surah-reader-page" data-surah="${meta.number}">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <a href="#/${lang}/quran">${t('navQuran')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${lang === 'bn' ? meta.banglaName : meta.englishName}</span>
        </nav>

        <!-- Surah Header Card with 3D Medallion -->
        <header class="card animate-fade-in" style="text-align: center; padding: var(--space-8); margin-bottom: var(--space-6); background: linear-gradient(180deg, var(--color-surface), var(--color-quran-bg));">
          <div style="display: flex; justify-content: center; margin-bottom: var(--space-4);">
            ${renderSurah3DBadge(meta.number, 58)}
          </div>
          <span class="section-badge badge-quran" style="margin-bottom: var(--space-3);">
            ${lang === 'bn' ? meta.banglaType : meta.type} • ${meta.ayahs} ${t('ayahPlural')} • ${t('juzWord')} ${meta.juz}
          </span>
          <h1 class="hero-title-arabic ${fontClass}" style="margin: 0 auto var(--space-1); font-size: var(--text-4xl); text-align: center; width: 100%;">
            ${meta.name}
          </h1>
          <div style="font-size: var(--text-2xl); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-1);">
            ${lang === 'bn' ? meta.banglaName : meta.englishName}
          </div>
          <div style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-6);">
            ${lang === 'bn' ? `অর্থ: ${meta.banglaMeaning}` : `Meaning: ${meta.englishMeaning}`}
          </div>

          <!-- Actions: Listen to Whole Surah -->
          <div style="display: flex; align-items: center; justify-content: center; gap: var(--space-3); flex-wrap: wrap;">
            <button class="btn btn-primary" id="play-full-surah-btn" style="display: inline-flex; align-items: center; gap: 8px;">
              <span class="icon-3d-wrap" style="width: 20px; height: 20px;">${Icon3DAudio}</span>
              <span>${lang === 'bn' ? 'সম্পূর্ণ সূরা শুনুন' : 'Listen to Full Surah'}</span>
            </button>
            <a href="#/${lang}/quran" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
              <span class="icon-3d-wrap" style="width: 20px; height: 20px;">${Icon3DQuran}</span>
              <span>${lang === 'bn' ? 'সূরার তালিকা' : 'Surah List'}</span>
            </a>
          </div>
        </header>

        <!-- Reading Progress & Goal Banner -->
        <div class="surah-reading-progress-card card" id="surah-progress-banner" style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-3) var(--space-5); margin-bottom: var(--space-4); background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); flex-wrap: wrap; gap: var(--space-3);">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.3rem;">🔖</span>
            <div>
              <div style="font-size: var(--text-xs); color: var(--color-text-muted); font-weight: 600; text-transform: uppercase;">
                ${lang === 'bn' ? 'পড়ার অগ্রগতি' : 'Reading Progress'}
              </div>
              <div id="toolbar-progress-text" style="font-size: var(--text-sm); font-weight: 700; color: var(--color-quran);">
                ${progress 
                  ? (lang === 'bn' ? `আয়াত ${progress.ayah} / ${meta.ayahs} (${progress.percent}%)` : `Ayah ${progress.ayah} / ${meta.ayahs} (${progress.percent}%)`)
                  : (lang === 'bn' ? `আয়াত ১ / ${meta.ayahs} (০%)` : `Ayah 1 / ${meta.ayahs} (0%)`)}
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <!-- Goal Status Pill -->
            <button class="btn btn-sm btn-ghost surah-reader-goal-btn" id="surah-reader-goal-btn" title="${lang === 'bn' ? 'কুরআন রিডিং গোল ও স্ট্রিক' : 'Quran Reading Goal & Streak'}" style="color: var(--color-text-primary); font-weight: 600; display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--color-border); border-radius: var(--radius-full); padding: 4px 10px; background: var(--color-bg);">
              <span class="icon-3d-wrap" style="width: 16px; height: 16px;">${Icon3DFlame}</span>
              <span id="surah-reader-goal-text">${goalSummary.current}/${goalSummary.target} ${lang === 'bn' ? 'আয়াত' : 'ayahs'} (${goalSummary.percent}%)</span>
              <span style="font-size: 10px; background: ${goalSummary.isCompleted ? 'var(--color-primary)' : 'var(--color-border)'}; color: ${goalSummary.isCompleted ? '#fff' : 'var(--color-text-secondary)'}; padding: 1px 6px; border-radius: 10px;">${goalSummary.isCompleted ? '✓' : (lang === 'bn' ? 'লক্ষ্য' : 'Goal')}</span>
            </button>

            <button class="btn btn-sm btn-ghost" id="jump-to-saved-ayah-btn" data-ayah="${progress ? progress.ayah : 1}" style="color: var(--color-quran); font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
              <span>📍</span>
              <span>${progress ? (lang === 'bn' ? `আয়াত ${progress.ayah}-এ যান` : `Jump to Ayah ${progress.ayah}`) : (lang === 'bn' ? 'শুরু থেকে পড়ুন' : 'Read from Start')}</span>
            </button>
          </div>
        </div>

        <!-- Reading Controls Toolbar -->
        <div style="position: sticky; top: var(--header-height); z-index: var(--z-sticky); background: var(--color-surface); padding: var(--space-3) var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--color-border); margin-bottom: var(--space-6); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-3); box-shadow: var(--shadow-sm);">
          
          <!-- Font Selection Controls (IndoPak / Nastaliq / Uthmani) -->
          <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
            <span style="font-size: 11px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">
              ${t('fontFamilyLabel')}:
            </span>
            <div class="font-selector-wrap" role="group" aria-label="Font Selection">
              <button class="font-selector-btn ${quranFont === 'indopak' ? 'active' : ''}" data-font="indopak" title="${lang === 'bn' ? 'নূরানী ও ১৫ লাইনের হাফেজী ইন্ডো-পাক ফন্ট' : 'Indo-Pak / Hafezi script font'}">
                ${t('fontIndoPak')}
              </button>
              <button class="font-selector-btn ${quranFont === 'nastaliq' ? 'active' : ''}" data-font="nastaliq" title="${lang === 'bn' ? 'নাসতালীক লিপির ফন্ট' : 'Nastaliq font'}">
                ${t('fontNastaliq')}
              </button>
              <button class="font-selector-btn ${quranFont === 'uthmani' ? 'active' : ''}" data-font="uthmani" title="${lang === 'bn' ? 'উসমানী মাদানী ফন্ট' : 'Uthmani font'}">
                ${t('fontUthmani')}
              </button>
            </div>

            <!-- Tajweed Toggle Button -->
            <button class="tajweed-toggle-btn ${tajweedEnabled ? 'active' : ''}" id="tajweed-toggle-btn" title="${lang === 'bn' ? 'তাজবীদ কালার অন / অফ' : 'Toggle Tajweed Colors'}">
              <span>🎨</span>
              <span>${t('tajweedColor')}</span>
            </button>
          </div>

          <!-- Display Mode & Font Size Adjuster -->
          <div style="display: flex; align-items: center; gap: var(--space-3); flex-wrap: wrap;">
            <!-- Display Mode Switcher -->
            <div class="display-toggle" role="group" aria-label="Display Mode">
              <button class="display-toggle-btn ${displayMode === 'all' ? 'active' : ''}" data-mode="all">
                ${t('displayAll')}
              </button>
              <button class="display-toggle-btn ${displayMode === 'arabic-bn' ? 'active' : ''}" data-mode="arabic-bn">
                ${t('displayArabicBn')}
              </button>
              <button class="display-toggle-btn ${displayMode === 'arabic-en' ? 'active' : ''}" data-mode="arabic-en">
                ${t('displayArabicEn')}
              </button>
              <button class="display-toggle-btn ${displayMode === 'arabic-only' ? 'active' : ''}" data-mode="arabic-only">
                ${t('displayArabicOnly')}
              </button>
            </div>

            <!-- Font Size Adjuster -->
            <div class="font-controls" title="${lang === 'bn' ? 'হরফের আকার পরিবর্তন' : 'Adjust Font Size'}">
              <button class="font-control-btn" id="font-dec-btn" aria-label="Decrease Font Size">A-</button>
              <button class="font-control-btn" id="font-reset-btn" aria-label="Reset Font Size">A</button>
              <button class="font-control-btn" id="font-inc-btn" aria-label="Increase Font Size">A+</button>
            </div>
          </div>
        </div>

        <!-- Color-Coded Tajweed Guide Bar -->
        ${renderTajweedLegend(lang)}

        <!-- Bismillah Header (except Surah 9 At-Tawbah) -->
        ${meta.number !== 9 ? `
          <div style="text-align: center; padding: var(--space-6) 0 var(--space-8); border-bottom: 1px solid var(--color-border-light);">
            <div id="bismillah-heading" class="ayah-arabic ${fontClass}" dir="rtl" lang="ar" style="font-size: var(--text-3xl); line-height: 2; margin-bottom: 0; padding: 0; text-align: center;">
              ${tajweedEnabled 
                ? formatColorCodedQuran(quranFont === 'indopak' ? 'بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ' : 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ') 
                : (quranFont === 'indopak' ? 'بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ' : 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ')}
            </div>
            <div style="font-size: var(--text-xs); color: var(--color-text-muted); margin-top: var(--space-1);">
              ${lang === 'bn' ? 'পরম করুণাময় অতি দয়ালু আল্লাহর নামে শুরু' : 'In the name of Allah, the Entirely Merciful, the Especially Merciful'}
            </div>
          </div>
        ` : ''}

        <!-- Ayahs Container -->
        <div id="ayahs-list-container">
          <div style="text-align: center; padding: var(--space-12);">
            <div class="skeleton skeleton-title" style="margin: 0 auto var(--space-4);"></div>
            <div class="skeleton skeleton-arabic" style="margin: 0 auto var(--space-4);"></div>
            <div class="skeleton skeleton-text"></div>
          </div>
        </div>

        <!-- Bottom Pagination (Previous / Next Surah) -->
        <nav style="display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-12); padding-top: var(--space-6); border-top: 1px solid var(--color-border);" aria-label="Surah Navigation">
          ${prevNum ? `
            <a href="#/${lang}/quran/${prevNum}" class="btn btn-secondary">
              <span>←</span>
              <span>${lang === 'bn' ? 'পূর্ববর্তী সূরা' : 'Previous Surah'}</span>
            </a>
          ` : '<div></div>'}

          <a href="#/${lang}/quran" class="btn btn-ghost" style="display: inline-flex; align-items: center; gap: 6px;">
            <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DQuran}</span>
            <span>${lang === 'bn' ? 'সূচিপত্র' : 'Index'}</span>
          </a>

          ${nextNum ? `
            <a href="#/${lang}/quran/${nextNum}" class="btn btn-primary">
              <span>${lang === 'bn' ? 'পরবর্তী সূরা' : 'Next Surah'}</span>
              <span>→</span>
            </a>
          ` : '<div></div>'}
        </nav>
      </div>

      <!-- Tajweed Rules Educational Modal -->
      ${renderTajweedModal(lang)}
    </div>
  `;
}

export async function bindSurahPageEvents(params) {
  const surahIdentifier = params.surah || 1;
  const container = document.getElementById('ayahs-list-container');
  
  // Parallel fetch: Surah verses + Quran.com chapter recitation with word timestamps
  const [surahData, recitationData] = await Promise.all([
    getSurah(surahIdentifier),
    getSurahRecitation(surahIdentifier)
  ]);

  const settings = getSettings();
  let currentDisplayMode = settings.displayMode || 'all';
  let currentFont = settings.quranFont || 'indopak';
  let isTajweedEnabled = settings.tajweedEnabled !== false;

  // Arabic Quran Font Scale — Default is large and comfortable
  const fontSizes = ['2.0rem', '2.45rem', '2.95rem', '3.5rem'];
  let currentFontSizeLevel = typeof settings.quranFontSizeLevel === 'number' ? settings.quranFontSizeLevel : 1;

  function applyFontSize() {
    const arabicElements = document.querySelectorAll('.ayah-arabic');
    const baseSize = fontSizes[currentFontSizeLevel] || '2.45rem';
    arabicElements.forEach(el => {
      if (el.classList.contains('font-nastaliq')) {
        el.style.fontSize = `calc(${baseSize} * 1.08)`;
      } else {
        el.style.fontSize = baseSize;
      }
    });
  }

  function renderList() {
    if (!surahData || !surahData.ayahs || surahData.ayahs.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: var(--space-8);">${t('error')}</div>`;
      return;
    }

    const options = {
      font: currentFont,
      tajweed: isTajweedEnabled
    };

    container.innerHTML = surahData.ayahs.map(a => renderAyahCard(a, surahData, currentDisplayMode, options)).join('');
    bindAyahCardEvents(container, recitationData);

    // Update Bismillah font & tajweed
    const bismillahEl = document.getElementById('bismillah-heading');
    if (bismillahEl) {
      bismillahEl.className = `ayah-arabic font-${currentFont}`;
      bismillahEl.setAttribute('dir', 'rtl');
      bismillahEl.setAttribute('lang', 'ar');
      const bismText = currentFont === 'indopak' ? 'بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ' : 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ';
      bismillahEl.innerHTML = isTajweedEnabled 
        ? formatColorCodedQuran(bismText) 
        : bismText;
    }

    // Always apply the large font size to all newly rendered Ayahs
    applyFontSize();
  }

  renderList();

  // Play full Surah with word-by-word timestamps & auto-advancement
  const playFullBtn = document.getElementById('play-full-surah-btn');
  if (playFullBtn && surahData?.ayahs?.length > 0) {
    playFullBtn.addEventListener('click', () => {
      if (recitationData && recitationData.timestamps) {
        audioPlayer.playSurahWithSync({
          surahNumber: surahData.number,
          surahName: getLang() === 'bn' ? surahData.banglaName : surahData.englishName,
          audioUrl: recitationData.audioUrl,
          timestamps: recitationData.timestamps,
          startAyah: 1,
          totalAyahs: surahData.ayahs.length
        });
      } else {
        // Fallback playlist
        const playlist = surahData.ayahs.map(a => ({
          surah: surahData.number,
          ayah: a.numberInSurah,
          audio: a.audio,
          title: `${getLang() === 'bn' ? surahData.banglaName : surahData.englishName} : ${t('ayahWord')} ${a.numberInSurah}`,
          subtitle: 'মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)'
        }));
        audioPlayer.playPlaylist(playlist, 0);
      }
    });
  }

  // ============================================
  // Audio Synchronization: Word Highlight & Auto-scroll
  // ============================================

  let lastActiveAyah = null;

  const handleActiveAyahChange = (e) => {
    const { surah, ayah } = e.detail;
    if (parseInt(surah, 10) !== surahData.number) return;

    if (lastActiveAyah !== ayah) {
      lastActiveAyah = ayah;

      // 1. Remove previous card highlight
      container.querySelectorAll('.ayah-card.active-reciting').forEach(c => {
        c.classList.remove('active-reciting');
      });

      // 2. Add to active ayah card
      const activeCard = document.getElementById(`ayah-${ayah}`);
      if (activeCard) {
        activeCard.classList.add('active-reciting');

        // 3. Smooth Auto-scroll to center the reciting Ayah
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleActiveWordChange = (e) => {
    const { surah, ayah, wordIdx } = e.detail;
    if (parseInt(surah, 10) !== surahData.number) return;

    // Clear previous active word highlights in the container
    container.querySelectorAll('.quran-word.active-word').forEach(el => {
      el.classList.remove('active-word');
    });

    if (ayah && wordIdx) {
      const card = document.getElementById(`ayah-${ayah}`);
      if (card) {
        const wordEl = card.querySelector(`.quran-word[data-word-idx="${wordIdx}"]`);
        if (wordEl) {
          wordEl.classList.add('active-word');
        }
      }
    }
  };

  const handleAudioStopped = () => {
    container.querySelectorAll('.quran-word.active-word').forEach(el => el.classList.remove('active-word'));
    container.querySelectorAll('.ayah-card.active-reciting').forEach(el => el.classList.remove('active-reciting'));
    lastActiveAyah = null;
  };

  // Remove existing listeners if any
  window.removeEventListener('eqra:active-ayah-change', window.__eqraAyahHandler);
  window.removeEventListener('eqra:active-word-change', window.__eqraWordHandler);
  window.removeEventListener('eqra:audio-stopped', window.__eqraAudioStopHandler);

  window.__eqraAyahHandler = handleActiveAyahChange;
  window.__eqraWordHandler = handleActiveWordChange;
  window.__eqraAudioStopHandler = handleAudioStopped;

  window.addEventListener('eqra:active-ayah-change', handleActiveAyahChange);
  window.addEventListener('eqra:active-word-change', handleActiveWordChange);
  window.addEventListener('eqra:audio-stopped', handleAudioStopped);

  // ============================================
  // Reading Progress & Bookmark Listeners
  // ============================================

  const handleProgressUpdated = (e) => {
    const prog = e.detail;
    if (prog && prog.surah === surahData.number) {
      const textEl = document.getElementById('toolbar-progress-text');
      if (textEl) {
        textEl.textContent = getLang() === 'bn'
          ? `আয়াত ${prog.ayah} / ${surahData.ayahs.length} (${prog.percent}%)`
          : `Ayah ${prog.ayah} / ${surahData.ayahs.length} (${prog.percent}%)`;
      }
      const jumpBtn = document.getElementById('jump-to-saved-ayah-btn');
      if (jumpBtn) {
        jumpBtn.setAttribute('data-ayah', prog.ayah);
        const span = jumpBtn.querySelector('span:last-child');
        if (span) {
          span.textContent = getLang() === 'bn' ? `আয়াত ${prog.ayah}-এ যান` : `Jump to Ayah ${prog.ayah}`;
        }
      }
    }
  };

  window.removeEventListener('eqra:progress-updated', window.__eqraProgressHandler);
  window.__eqraProgressHandler = handleProgressUpdated;
  window.addEventListener('eqra:progress-updated', handleProgressUpdated);

  // Jump to saved Ayah button
  const jumpBtn = document.getElementById('jump-to-saved-ayah-btn');
  if (jumpBtn) {
    jumpBtn.addEventListener('click', () => {
      const targetAyah = jumpBtn.getAttribute('data-ayah') || 1;
      const targetCard = document.getElementById(`ayah-${targetAyah}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('active-reciting');
        setTimeout(() => targetCard.classList.remove('active-reciting'), 2500);
      }
    });
  }

  // Display mode switcher
  document.querySelectorAll('.display-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.display-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDisplayMode = btn.getAttribute('data-mode');
      saveSettings({ displayMode: currentDisplayMode });
      renderList();
    });
  });

  // Font Selector switcher (IndoPak / Nastaliq / Uthmani)
  document.querySelectorAll('.font-selector-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.font-selector-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFont = btn.getAttribute('data-font');
      saveSettings({ quranFont: currentFont });
      renderList();
    });
  });

  // Tajweed Color Toggle button
  const tajweedBtn = document.getElementById('tajweed-toggle-btn');
  if (tajweedBtn) {
    tajweedBtn.addEventListener('click', () => {
      isTajweedEnabled = !isTajweedEnabled;
      tajweedBtn.classList.toggle('active', isTajweedEnabled);
      saveSettings({ tajweedEnabled: isTajweedEnabled });
      renderList();
    });
  }

  // Font size adjustment
  const fontDecBtn = document.getElementById('font-dec-btn');
  const fontResetBtn = document.getElementById('font-reset-btn');
  const fontIncBtn = document.getElementById('font-inc-btn');

  if (fontIncBtn) {
    fontIncBtn.addEventListener('click', () => {
      if (currentFontSizeLevel < fontSizes.length - 1) {
        currentFontSizeLevel++;
        saveSettings({ quranFontSizeLevel: currentFontSizeLevel });
        applyFontSize();
      }
    });
  }

  if (fontDecBtn) {
    fontDecBtn.addEventListener('click', () => {
      if (currentFontSizeLevel > 0) {
        currentFontSizeLevel--;
        saveSettings({ quranFontSizeLevel: currentFontSizeLevel });
        applyFontSize();
      }
    });
  }

  if (fontResetBtn) {
    fontResetBtn.addEventListener('click', () => {
      currentFontSizeLevel = 1;
      saveSettings({ quranFontSizeLevel: currentFontSizeLevel });
      applyFontSize();
    });
  }

  // Tajweed Legend Bar Dropdown Toggle
  const legendToggle = document.getElementById('toggle-tajweed-legend');
  const legendDropdown = document.getElementById('tajweed-legend-dropdown');
  if (legendToggle && legendDropdown) {
    legendToggle.addEventListener('click', (e) => {
      if (e.target.closest('#open-tajweed-guide-btn')) return;

      const isVisible = legendDropdown.style.display !== 'none';
      legendDropdown.style.display = isVisible ? 'none' : 'flex';
      const hint = legendToggle.querySelector('.tajweed-legend-hint span:last-child');
      if (hint) {
        hint.textContent = isVisible 
          ? (getLang() === 'bn' ? 'কালার চার্ট ▾' : 'Color Chart ▾') 
          : (getLang() === 'bn' ? 'বন্ধ করুন ▴' : 'Close ▴');
      }
    });
  }

  // Interactive Legend Pills
  document.querySelectorAll('.tajweed-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const rule = pill.getAttribute('data-rule');
      if (!rule) return;
      const matchingSpans = container.querySelectorAll(`.tajweed-rule[data-rule="${rule}"]`);
      matchingSpans.forEach(s => {
        s.style.outline = '2px solid currentColor';
        s.style.borderRadius = '3px';
        s.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
      });
      setTimeout(() => {
        matchingSpans.forEach(s => {
          s.style.outline = '';
          s.style.borderRadius = '';
          s.style.backgroundColor = '';
        });
      }, 2000);
    });
  });

  // Tajweed Educational Modal
  const guideBtn = document.getElementById('open-tajweed-guide-btn');
  const modalOverlay = document.getElementById('tajweed-guide-modal');
  const closeModalBtn = document.getElementById('close-tajweed-modal-btn');

  if (guideBtn && modalOverlay) {
    guideBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      modalOverlay.classList.add('open');
    });
  }

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
      }
    });
  }

  // Reading Goal Modal Trigger in Surah Reader Banner
  const surahGoalBtn = document.getElementById('surah-reader-goal-btn');
  if (surahGoalBtn) {
    surahGoalBtn.addEventListener('click', () => {
      openReadingGoalModal();
    });
  }

  // Live update the goal badge in Surah Banner
  const updateSurahGoalBadge = () => {
    const s = getGoalProgressSummary();
    const txt = document.getElementById('surah-reader-goal-text');
    if (txt) {
      txt.textContent = `${s.current}/${s.target} ${getLang() === 'bn' ? 'আয়াত' : 'ayahs'} (${s.percent}%)`;
    }
  };
  window.addEventListener('eqra:goal-progress-updated', updateSurahGoalBadge);

  // Auto-track reading when user scrolls and pauses on Ayahs
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const ayahCard = entry.target;
          const aNum = ayahCard.getAttribute('data-ayah');
          if (aNum && surahNum) {
            recordAyahRead(surahNum, aNum);
          }
        }
      });
    }, { threshold: 0.5 });

    container.querySelectorAll('.ayah-card').forEach(card => {
      observer.observe(card);
    });
  }
}
