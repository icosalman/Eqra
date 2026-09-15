// ============================================
// EQRA — Quran Index (114 Surahs Directory)
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { SURAHS_METADATA } from '../data/quranMetadata.js';
import { renderSurah3DBadge, Icon3DSearch } from '../components/Icons3D.js';

export function renderQuranIndexPage() {
  const lang = getLang();

  updateMeta({
    title: lang === 'bn' ? 'আল-কুরআন — ১১৪টি সূরার তালিকা ও অনুবাদ | EQRA' : 'Al-Quran — 114 Surahs Index & Translations | EQRA',
    description: lang === 'bn' 
      ? 'পবিত্র কুরআনের ১১৪টি সূরার সম্পূর্ণ তালিকা, মাক্কী ও মাদানী বিভাজন, আয়াত সংখ্যা ও অডিও তিলাওয়াত।' 
      : 'Complete index of all 114 Surahs with Meccan & Medinan classifications, verse counts, and translations.',
    canonicalPath: `#/${lang}/quran`
  });

  return `
    <div class="page">
      <div class="container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${t('navQuran')}</span>
        </nav>

        <!-- Page Header -->
        <div style="margin-bottom: var(--space-8); text-align: center;">
          <h1 style="font-size: var(--text-4xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${t('quranTitle')}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
            ${t('quranSubtitle')}
          </p>
        </div>

        <!-- Filter & Search Bar -->
        <div style="display: flex; flex-wrap: wrap; gap: var(--space-4); align-items: center; justify-content: space-between; margin-bottom: var(--space-6); background: var(--color-surface); padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
          <!-- Live Filter Input -->
          <div class="search-bar" style="max-width: 360px;">
            <span class="search-icon">${Icon3DSearch}</span>
            <input type="text" id="quran-search-input" class="search-input" placeholder="${lang === 'bn' ? 'সূরা নাম বা নম্বর দিয়ে খুঁজুন...' : 'Search by Surah name or number...'}" />
          </div>

          <!-- Filter Tabs -->
          <div class="display-toggle" role="tablist">
            <button class="display-toggle-btn active" data-filter="all" role="tab">
              ${lang === 'bn' ? 'সকল (১১৪)' : 'All (114)'}
            </button>
            <button class="display-toggle-btn" data-filter="Meccan" role="tab">
              ${lang === 'bn' ? 'মাক্কী (৮৬)' : 'Meccan (86)'}
            </button>
            <button class="display-toggle-btn" data-filter="Medinan" role="tab">
              ${lang === 'bn' ? 'মাদানী (২৮)' : 'Medinan (28)'}
            </button>
          </div>
        </div>

        <!-- Surahs Grid -->
        <div class="grid-auto stagger" id="surahs-grid-container">
          ${renderSurahCards(SURAHS_METADATA, lang)}
        </div>
      </div>
    </div>
  `;
}

function renderSurahCards(list, lang) {
  if (list.length === 0) {
    return `
      <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-12); color: var(--color-text-muted);">
        ${t('searchNoResults')}
      </div>
    `;
  }

  return list.map(s => `
    <a href="#/${lang}/quran/${s.number}" class="surah-card" data-number="${s.number}" data-type="${s.type || s.revelationType}">
      ${renderSurah3DBadge(s.number)}
      <div class="surah-info">
        <div class="surah-name-local" style="font-weight: 600; font-size: var(--text-base);">
          ${lang === 'bn' ? s.banglaName : s.englishName}
        </div>
        <div class="surah-meta">
          <span class="tag" style="padding: 1px 6px; font-size: 10px; margin-right: 4px;">
            ${lang === 'bn' ? s.banglaType : s.type}
          </span>
          <span>${lang === 'bn' ? s.banglaMeaning : s.englishMeaning}</span>
        </div>
      </div>
      <div style="text-align: right; flex-shrink: 0;">
        <div class="surah-name-arabic font-indopak">${s.name}</div>
        <div class="surah-ayah-count">${s.ayahs} ${t('ayahPlural')}</div>
      </div>
    </a>
  `).join('');
}

export function bindQuranIndexEvents() {
  const input = document.getElementById('quran-search-input');
  const container = document.getElementById('surahs-grid-container');
  const filterBtns = document.querySelectorAll('[data-filter]');

  let activeFilter = 'all';
  let searchTerm = '';

  function applyFilters() {
    let filtered = SURAHS_METADATA;

    if (activeFilter !== 'all') {
      const target = activeFilter.toLowerCase();
      filtered = filtered.filter(s => 
        (s.type && s.type.toLowerCase() === target) || 
        (s.revelationType && s.revelationType.toLowerCase() === target)
      );
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(s => {
        return (
          String(s.number) === q ||
          s.banglaName.toLowerCase().includes(q) ||
          s.englishName.toLowerCase().includes(q) ||
          s.name.includes(q) ||
          s.banglaMeaning.toLowerCase().includes(q) ||
          s.englishMeaning.toLowerCase().includes(q)
        );
      });
    }

    container.innerHTML = renderSurahCards(filtered, getLang());
  }

  if (input) {
    input.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      applyFilters();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      applyFilters();
    });
  });
}
