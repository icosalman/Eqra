// ============================================
// EQRA — Surah Reader Page
// Full Surah Reading, Audio Recitation, Translations
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta, breadcrumbSchema, setStructuredData } from '../utils/seo.js';
import { getSurah, getSurahMeta } from '../services/quranService.js';
import { renderAyahCard, bindAyahCardEvents } from '../components/AyahCard.js';
import { audioPlayer } from '../components/AudioPlayer.js';
import { getSettings, saveSettings } from '../utils/storage.js';

export async function renderSurahPage(params) {
  const lang = getLang();
  const surahIdentifier = params.surah || 1;
  const meta = getSurahMeta(surahIdentifier);

  if (!meta) {
    return `
      <div class="page">
        <div class="container" style="text-align: center; padding: var(--space-16) 0;">
          <h2>${t('notFound')}</h2>
          <a href="#/${lang}/quran" class="btn btn-primary" style="margin-top: var(--space-4);">${t('goBack')}</a>
        </div>
      </div>
    `;
  }

  updateMeta({
    title: `${lang === 'bn' ? meta.banglaName : meta.englishName} (${meta.name}) — অর্থ ও অনুবাদ | EQRA`,
    description: `${meta.englishName} (${meta.banglaName}) — ${meta.ayahs} ${t('ayahPlural')}, ${meta.type}। আরবি টেক্সট, বাংলা ও ইংরেজি অনুবাদ এবং অডিও তিলাওয়াত।`,
    canonicalPath: `#/${lang}/quran/${meta.number}`
  });

  setStructuredData(breadcrumbSchema([
    { name: t('navHome'), url: `#/${lang}/` },
    { name: t('navQuran'), url: `#/${lang}/quran` },
    { name: lang === 'bn' ? meta.banglaName : meta.englishName, url: `#/${lang}/quran/${meta.number}` }
  ]));

  const settings = getSettings();
  const displayMode = settings.displayMode || 'all';

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

        <!-- Surah Header Card -->
        <header class="card animate-fade-in" style="text-align: center; padding: var(--space-8); margin-bottom: var(--space-6); background: linear-gradient(180deg, var(--color-surface), var(--color-quran-bg));">
          <span class="section-badge badge-quran" style="margin-bottom: var(--space-3);">
            ${lang === 'bn' ? meta.banglaType : meta.type} • ${meta.ayahs} ${t('ayahPlural')} • ${t('juzWord')} ${meta.juz}
          </span>
          <h1 class="hero-title-arabic" style="margin-bottom: var(--space-1); font-size: var(--text-4xl);">
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
            <button class="btn btn-primary" id="play-full-surah-btn">
              <span>🔊</span>
              <span>${lang === 'bn' ? 'সম্পূর্ণ সূরা শুনুন' : 'Listen to Full Surah'}</span>
            </button>
            <a href="#/${lang}/quran" class="btn btn-secondary">
              <span>📑</span>
              <span>${lang === 'bn' ? 'সূরার তালিকা' : 'Surah List'}</span>
            </a>
          </div>
        </header>

        <!-- Reading Controls Toolbar -->
        <div style="position: sticky; top: var(--header-height); z-index: var(--z-sticky); background: var(--color-surface); padding: var(--space-3) var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--color-border); margin-bottom: var(--space-6); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-3); box-shadow: var(--shadow-sm);">
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

        <!-- Bismillah Header (except Surah 9 At-Tawbah) -->
        ${meta.number !== 9 ? `
          <div style="text-align: center; padding: var(--space-6) 0 var(--space-8); border-bottom: 1px solid var(--color-border-light);">
            <div style="font-family: var(--font-arabic); font-size: var(--text-3xl); color: var(--color-quran); line-height: 2;">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
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

          <a href="#/${lang}/quran" class="btn btn-ghost">
            <span>📖</span>
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
    </div>
  `;
}

export async function bindSurahPageEvents(params) {
  const surahIdentifier = params.surah || 1;
  const container = document.getElementById('ayahs-list-container');
  const surahData = await getSurah(surahIdentifier);

  let currentDisplayMode = getSettings().displayMode || 'all';

  function renderList() {
    if (!surahData || !surahData.ayahs || surahData.ayahs.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: var(--space-8);">${t('error')}</div>`;
      return;
    }

    container.innerHTML = surahData.ayahs.map(a => renderAyahCard(a, surahData, currentDisplayMode)).join('');
    bindAyahCardEvents(container);
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

  // Font size adjustment
  const fontDecBtn = document.getElementById('font-dec-btn');
  const fontResetBtn = document.getElementById('font-reset-btn');
  const fontIncBtn = document.getElementById('font-inc-btn');

  let currentFontSizeLevel = 0; // -1, 0, 1, 2
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
}
