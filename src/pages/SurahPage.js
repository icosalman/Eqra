// ============================================
// EQRA — Surah Reader Page
// Full Surah Reading, Audio Recitation, Translations
// Color-Coded Tajweed with Indo-Pak Font Support
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta, breadcrumbSchema, setStructuredData } from '../utils/seo.js';
import { getSurah, getSurahMeta } from '../services/quranService.js';
import { renderAyahCard, bindAyahCardEvents } from '../components/AyahCard.js';
import { getSettings, saveSettings } from '../utils/storage.js';
import { audioPlayer } from '../components/AudioPlayer.js';
import { formatColorCodedQuran, renderTajweedLegend, renderTajweedModal } from '../utils/quranColors.js';
import { 
  renderSurah3DBadge, 
  Icon3DAudio, 
  Icon3DQuran 
} from '../components/Icons3D.js';

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
  const quranFont = settings.quranFont || 'indopak'; // Default to Indo-Pak font
  const tajweedEnabled = settings.tajweedEnabled !== false; // Default to true

  const fontClass = quranFont === 'uthmani' 
    ? 'font-uthmani' 
    : quranFont === 'nastaliq' 
      ? 'font-nastaliq' 
      : 'font-indopak';

  // Surah navigation prev/next
  const prevNum = meta.number > 1 ? meta.number - 1 : null;
  const nextNum = meta.number < 114 ? meta.number + 1 : null;

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
          <h1 class="hero-title-arabic ${fontClass}" style="margin-bottom: var(--space-1); font-size: var(--text-4xl);">
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
            <div id="bismillah-heading" class="ayah-arabic ${fontClass}" style="font-size: var(--text-3xl); line-height: 2; margin-bottom: 0; padding: 0;">
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
  const surahData = await getSurah(surahIdentifier);

  const settings = getSettings();
  let currentDisplayMode = settings.displayMode || 'all';
  let currentFont = settings.quranFont || 'indopak';
  let isTajweedEnabled = settings.tajweedEnabled !== false;

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
    bindAyahCardEvents(container);

    // Update Bismillah font & tajweed
    const bismillahEl = document.getElementById('bismillah-heading');
    if (bismillahEl) {
      bismillahEl.className = `ayah-arabic font-${currentFont}`;
      const bismText = currentFont === 'indopak' ? 'بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ' : 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ';
      bismillahEl.innerHTML = isTajweedEnabled 
        ? formatColorCodedQuran(bismText) 
        : bismText;
    }
  }

  renderList();

  // Play full Surah continuous audio
  const playFullBtn = document.getElementById('play-full-surah-btn');
  if (playFullBtn && surahData?.ayahs?.length > 0) {
    playFullBtn.addEventListener('click', () => {
      const playlist = surahData.ayahs.map(a => ({
        audio: a.audio,
        title: `${getLang() === 'bn' ? surahData.banglaName : surahData.englishName} : ${t('ayahWord')} ${a.numberInSurah}`,
        subtitle: 'মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)'
      }));
      audioPlayer.playPlaylist(playlist, 0);
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

  let currentFontSizeLevel = 1; // 0, 1, 2, 3
  const fontSizes = ['1.5rem', '1.875rem', '2.25rem', '2.75rem'];

  if (fontIncBtn) {
    fontIncBtn.addEventListener('click', () => {
      if (currentFontSizeLevel < fontSizes.length - 1) {
        currentFontSizeLevel++;
        applyFontSize();
      }
    });
  }

  if (fontDecBtn) {
    fontDecBtn.addEventListener('click', () => {
      if (currentFontSizeLevel > 0) {
        currentFontSizeLevel--;
        applyFontSize();
      }
    });
  }

  if (fontResetBtn) {
    fontResetBtn.addEventListener('click', () => {
      currentFontSizeLevel = 1;
      applyFontSize();
    });
  }

  function applyFontSize() {
    const arabicElements = document.querySelectorAll('.ayah-arabic');
    arabicElements.forEach(el => {
      el.style.fontSize = fontSizes[currentFontSizeLevel];
    });
  }

  // Tajweed Legend Bar Dropdown Toggle
  const legendToggle = document.getElementById('toggle-tajweed-legend');
  const legendDropdown = document.getElementById('tajweed-legend-dropdown');
  if (legendToggle && legendDropdown) {
    legendToggle.addEventListener('click', (e) => {
      // Don't toggle dropdown if guide button was clicked
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

  // Interactive Legend Pills — click a pill to briefly highlight matching rules in the text
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

  // Tajweed Educational Modal opening & closing
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
}
