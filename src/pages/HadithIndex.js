// ============================================
// EQRA — Hadith Section Directory
// Full Sahih al-Bukhari (97 Books) & Sahih Muslim (56 Books)
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { BUKHARI_BOOKS, MUSLIM_BOOKS } from '../data/hadithBooksMetadata.js';
import { HADITHS_DATA } from '../data/hadiths.js';

export function renderHadithIndexPage() {
  const lang = getLang();

  updateMeta({
    title: lang === 'bn' ? 'সহীহ হাদিস সমগ্র — পূর্ণাঙ্গ বুখারী ও মুসলিম | EQRA' : 'Complete Hadith Collection — Bukhari & Muslim | EQRA',
    description: lang === 'bn' 
      ? 'পূর্ণাঙ্গ সহীহ আল-বুখারী (৯৭টি কিতাব) এবং সহীহ মুসলিম (৫৬টি কিতাব)। অধ্যায়ভিত্তিক সহীহ হাদিস পাঠ, আরবি ও বাংলা অনুবাদ।' 
      : 'Complete Sahih al-Bukhari (97 Books) and Sahih Muslim (56 Books) chapters with Arabic, English and Bengali translations.',
    canonicalPath: `#/${lang}/hadith`
  });

  return `
    <div class="page">
      <div class="container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${t('navHadith')}</span>
        </nav>

        <!-- Section Header -->
        <header style="margin-bottom: var(--space-8); text-align: center;">
          <span class="section-badge badge-hadith" style="margin-bottom: var(--space-3);">
            📜 ${lang === 'bn' ? 'বিশুদ্ধ সুন্নাহর পূর্ণাঙ্গ ভাণ্ডার' : 'Complete Authentic Sunnah'}
          </span>
          <h1 style="font-size: var(--text-4xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${t('hadithTitle')}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 650px; margin: 0 auto;">
            ${lang === 'bn' 
              ? 'পূর্ণাঙ্গ সহীহ আল-বুখারী (৯৭টি অধ্যায়) ও সহীহ মুসলিম (৫৬টি অধ্যায়)—প্রতিটি কিতাবের মূল আরবি, বাংলা ও ইংরেজি অনুবাদ।' 
              : 'Complete collection of Sahih al-Bukhari (97 Books) and Sahih Muslim (56 Books) with Arabic, Bengali, and English texts.'}
          </p>
        </header>

        <!-- Filter & Search Controls -->
        <div style="display: flex; flex-wrap: wrap; gap: var(--space-4); align-items: center; justify-content: space-between; margin-bottom: var(--space-6); background: var(--color-surface); padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
          <!-- Search input -->
          <div class="search-bar" style="max-width: 380px;">
            <span class="search-icon">🔍</span>
            <input type="text" id="hadith-search-input" class="search-input" placeholder="${lang === 'bn' ? 'অধ্যায়ের নাম দিয়ে খুঁজুন (যেমন: ঈমান, সালাত)...' : 'Filter by book name (e.g., Faith, Prayer)...'}" />
          </div>

          <!-- Collection Tabs -->
          <div class="display-toggle" role="tablist">
            <button class="display-toggle-btn active" data-collection="bukhari">
              ${lang === 'bn' ? 'সহীহ বুখারী (৯৭টি কিতাব)' : 'Sahih Bukhari (97 Books)'}
            </button>
            <button class="display-toggle-btn" data-collection="muslim">
              ${lang === 'bn' ? 'সহীহ মুসলিম (৫৬টি কিতাব)' : 'Sahih Muslim (56 Books)'}
            </button>
            <button class="display-toggle-btn" data-collection="featured">
              ${lang === 'bn' ? 'নির্বাচিত হাদিস' : 'Featured Hadith'}
            </button>
          </div>
        </div>

        <!-- Books Grid Container -->
        <div id="hadith-content-container">
          ${renderBooksGrid(BUKHARI_BOOKS, 'bukhari', lang)}
        </div>
      </div>
    </div>
  `;
}

function renderBooksGrid(books, collection, lang) {
  const collNameBn = collection === 'muslim' ? 'সহীহ মুসলিম' : 'সহীহ বুখারী';
  const collNameEn = collection === 'muslim' ? 'Sahih Muslim' : 'Sahih Bukhari';

  return `
    <div class="grid-3 stagger">
      ${books.map(b => `
        <a href="#/${lang}/hadith/${collection}/${b.book}" class="card hadith-card" style="display: flex; flex-direction: column; justify-content: space-between; transition: all var(--transition-base);">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-2);">
              <span class="tag" style="background: var(--color-hadith-bg); color: var(--color-hadith); border-color: var(--color-hadith-light);">
                ${lang === 'bn' ? `অধ্যায় ${b.book}` : `Book ${b.book}`}
              </span>
              ${b.count ? `<span style="font-size: var(--text-xs); color: var(--color-text-muted);">${b.count} ${lang === 'bn' ? 'হাদিস' : 'hadiths'}</span>` : ''}
            </div>

            <h3 style="font-size: var(--text-lg); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-1);">
              ${lang === 'bn' ? b.nameBn : b.nameEn}
            </h3>
            <div style="font-size: var(--text-xs); color: var(--color-text-muted);">
              ${b.nameEn}
            </div>
          </div>

          <div style="margin-top: var(--space-4); display: flex; align-items: center; justify-content: space-between; font-size: var(--text-xs); color: var(--color-hadith); font-weight: 600; border-top: 1px solid var(--color-border-light); padding-top: var(--space-2);">
            <span>${collNameBn}</span>
            <span>${lang === 'bn' ? 'হাদিস পড়ুন →' : 'Read Chapter →'}</span>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

function renderFeaturedHadiths(lang) {
  return `
    <div class="stagger" style="display: flex; flex-direction: column; gap: var(--space-6); max-width: 800px; margin: 0 auto;">
      ${HADITHS_DATA.map(h => `
        <article class="card hadith-card">
          <div class="section-header" style="margin-bottom: var(--space-3);">
            <div class="hadith-card-source">
              <span>📜</span>
              <span>${h.reference}</span>
              <span class="tag" style="background: var(--color-hadith-bg); color: var(--color-hadith); border-color: var(--color-hadith-light);">
                ${lang === 'bn' ? h.gradeBangla : h.grade}
              </span>
            </div>
          </div>

          <div style="font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${lang === 'bn' ? h.narratorBangla : h.narratorEnglish}
          </div>

          <div style="font-family: var(--font-arabic); font-size: var(--text-lg); line-height: 2; color: var(--color-arabic); direction: rtl; text-align: right; margin-bottom: var(--space-4); padding: var(--space-2) 0; border-bottom: 1px dashed var(--color-border-light);">
            ${h.arabic}
          </div>

          <div style="display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-4);">
            <div class="ayah-translation-bn">${h.bangla}</div>
            <div class="ayah-translation-en">${h.english}</div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

export function bindHadithEvents() {
  const filterBtns = document.querySelectorAll('[data-collection]');
  const container = document.getElementById('hadith-content-container');
  const searchInput = document.getElementById('hadith-search-input');
  const lang = getLang();

  let activeCollection = 'bukhari';
  let searchTerm = '';

  function updateView() {
    if (activeCollection === 'featured') {
      container.innerHTML = renderFeaturedHadiths(lang);
      return;
    }

    const fullList = activeCollection === 'muslim' ? MUSLIM_BOOKS : BUKHARI_BOOKS;
    let filtered = fullList;

    if (searchTerm) {
      const q = searchTerm.toLowerCase().trim();
      filtered = fullList.filter(b => 
        String(b.book) === q ||
        b.nameBn.toLowerCase().includes(q) ||
        b.nameEn.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: var(--space-12); color: var(--color-text-muted);">
          ${t('searchNoResults')}
        </div>
      `;
      return;
    }

    container.innerHTML = renderBooksGrid(filtered, activeCollection, lang);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCollection = btn.getAttribute('data-collection');
      updateView();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      updateView();
    });
  }
}
