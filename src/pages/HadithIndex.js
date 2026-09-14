// ============================================
// EQRA — Hadith Section
// Sahih al-Bukhari & Sahih Muslim
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { HADITHS_DATA } from '../data/hadiths.js';

export function renderHadithIndexPage() {
  const lang = getLang();

  updateMeta({
    title: lang === 'bn' ? 'সহীহ হাদিস সমগ্র — বুখারী ও মুসলিম | EQRA' : 'Authentic Hadith Collection — Bukhari & Muslim | EQRA',
    description: lang === 'bn' 
      ? 'সহীহ আল-বুখারী ও সহীহ মুসলিম থেকে সংকলিত বিশুদ্ধ হাদিস সমগ্র। আরবি, বাংলা ও ইংরেজি অনুবাদ এবং নির্ভরযোগ্য সনদ ও মান।' 
      : 'Authentic Sahih al-Bukhari and Sahih Muslim hadiths with Arabic, Bangla and English translations.',
    canonicalPath: `#/${lang}/hadith`
  });

  return `
    <div class="page">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${t('navHadith')}</span>
        </nav>

        <!-- Section Header -->
        <header style="margin-bottom: var(--space-8); text-align: center;">
          <span class="section-badge badge-hadith" style="margin-bottom: var(--space-3);">
            📜 ${lang === 'bn' ? 'বিশুদ্ধ সুন্নাহর প্রজ্ঞা' : 'Authentic Traditions'}
          </span>
          <h1 style="font-size: var(--text-4xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${t('hadithTitle')}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
            ${t('hadithSubtitle')}
          </p>
        </header>

        <!-- Filter Tabs -->
        <div style="display: flex; justify-content: center; margin-bottom: var(--space-8);">
          <div class="display-toggle" role="tablist">
            <button class="display-toggle-btn active" data-hadith-filter="all">
              ${lang === 'bn' ? 'সকল হাদিস' : 'All Hadith'}
            </button>
            <button class="display-toggle-btn" data-hadith-filter="Sahih al-Bukhari">
              ${lang === 'bn' ? 'সহীহ বুখারী' : 'Bukhari'}
            </button>
            <button class="display-toggle-btn" data-hadith-filter="Sahih Muslim">
              ${lang === 'bn' ? 'সহীহ মুসলিম' : 'Muslim'}
            </button>
          </div>
        </div>

        <!-- Hadith List -->
        <div id="hadith-cards-list" class="stagger" style="display: flex; flex-direction: column; gap: var(--space-6);">
          ${renderHadithCards(HADITHS_DATA, lang)}
        </div>
      </div>
    </div>
  `;
}

function renderHadithCards(list, lang) {
  return list.map(h => `
    <article class="card hadith-card" data-collection="${h.collection}">
      <div class="section-header" style="margin-bottom: var(--space-3);">
        <div class="hadith-card-source">
          <span>📜</span>
          <span>${h.reference}</span>
          <span class="tag" style="background: var(--color-hadith-bg); color: var(--color-hadith); border-color: var(--color-hadith-light);">
            ${lang === 'bn' ? h.gradeBangla : h.grade}
          </span>
        </div>

        <div style="display: flex; gap: var(--space-2);">
          <button class="btn-ghost copy-hadith-btn" 
            data-copy="${h.arabic}\n\n${h.bangla}\n\n${h.english}\n— [${h.reference}]" 
            title="${t('copy')}" 
            style="font-size: var(--text-sm);">
            📋
          </button>
        </div>
      </div>

      <!-- Narrator -->
      <div style="font-size: var(--text-sm); font-weight: 600; color: var(--color-text-primary); margin-bottom: var(--space-2);">
        ${lang === 'bn' ? h.narratorBangla : h.narratorEnglish}
      </div>

      <!-- Arabic -->
      <div style="font-family: var(--font-arabic); font-size: var(--text-lg); line-height: 2; color: var(--color-arabic); direction: rtl; text-align: right; margin-bottom: var(--space-4); padding: var(--space-2) 0; border-bottom: 1px dashed var(--color-border-light);">
        ${h.arabic}
      </div>

      <!-- Translations -->
      <div style="display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-4);">
        <div class="ayah-translation-bn">
          ${h.bangla}
        </div>
        <div class="ayah-translation-en">
          ${h.english}
        </div>
      </div>

      <!-- Tags -->
      <div class="topic-card-tags">
        ${h.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

export function bindHadithEvents() {
  const filterBtns = document.querySelectorAll('[data-hadith-filter]');
  const listContainer = document.getElementById('hadith-cards-list');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.getAttribute('data-hadith-filter');

      const filtered = val === 'all' 
        ? HADITHS_DATA 
        : HADITHS_DATA.filter(h => h.collection === val);

      listContainer.innerHTML = renderHadithCards(filtered, getLang());
      bindCopyButtons();
    });
  });

  function bindCopyButtons() {
    document.querySelectorAll('.copy-hadith-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const text = btn.getAttribute('data-copy');
        if (text) {
          await navigator.clipboard.writeText(text);
          btn.textContent = '✓';
          setTimeout(() => { btn.textContent = '📋'; }, 1500);
        }
      });
    });
  }

  bindCopyButtons();
}
