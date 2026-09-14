// ============================================
// EQRA — Topics Index Page
// Topical Index of Quran & Sunnah
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { TOPICS_DATA } from '../data/topics.js';

export function renderTopicsIndexPage() {
  const lang = getLang();

  updateMeta({
    title: lang === 'bn' ? 'বিষয়ভিত্তিক কুরআন ও জ্ঞান সমগ্র | EQRA' : 'Topical Quran Knowledge Graph | EQRA',
    description: lang === 'bn' 
      ? 'জীবন ঘনিষ্ঠ বিভিন্ন বিষয়ে পবিত্র কুরআন ও হাদিসের প্রজ্ঞাপূর্ণ নির্দেশনা। সবর, শোকর, পিতা-মাতা, তাওবাহ ও আধ্যাত্মিকতা।' 
      : 'Quran-centered knowledge topics covering faith, perseverance, family, parents, repentance and ethics.',
    canonicalPath: `#/${lang}/topics`
  });

  return `
    <div class="page">
      <div class="container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${t('navTopics')}</span>
        </nav>

        <!-- Page Header -->
        <header style="margin-bottom: var(--space-8); text-align: center;">
          <span class="section-badge badge-topic" style="margin-bottom: var(--space-3);">
            💡 ${lang === 'bn' ? 'কুরআনভিত্তিক জীবন দর্শন' : 'Thematic Reflections'}
          </span>
          <h1 style="font-size: var(--text-4xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${t('topicsTitle')}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
            ${t('topicsSubtitle')}
          </p>
        </header>

        <!-- Topics Grid -->
        <div class="grid-2 stagger">
          ${TOPICS_DATA.map(tp => `
            <a href="#/${lang}/topics/${tp.slug}" class="card section-card-topic" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                  <span class="tag">${lang === 'bn' ? tp.categoryBangla : tp.categoryEnglish}</span>
                  <span style="font-size: var(--text-xs); color: var(--color-text-muted);">${tp.ayahCount} ${t('ayahPlural')}</span>
                </div>

                <h2 style="font-size: var(--text-2xl); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-3);">
                  ${lang === 'bn' ? tp.titleBangla : tp.titleEnglish}
                </h2>

                <p style="font-size: var(--text-base); color: var(--color-text-secondary); line-height: 1.8; margin-bottom: var(--space-4);">
                  ${lang === 'bn' ? tp.summaryBangla : tp.summaryEnglish}
                </p>

                <!-- Key Ayah Snippet -->
                <div style="background: var(--color-bg-alt); padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); border-left: 3px solid var(--color-topic); margin-bottom: var(--space-4);">
                  <div style="font-family: var(--font-arabic); font-size: var(--text-base); color: var(--color-arabic); text-align: right; direction: rtl; margin-bottom: var(--space-1);">
                    ${tp.keyAyah.arabic}
                  </div>
                  <div style="font-size: var(--text-xs); color: var(--color-text-muted);">
                    ${tp.keyAyah.reference}
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; justify-content: flex-end; color: var(--color-topic); font-weight: 600; font-size: var(--text-sm);">
                <span>${lang === 'bn' ? 'বিস্তারিত অধ্যায়ন করুন' : 'Explore Topic'}</span>
                <span style="margin-left: 4px;">→</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
