// ============================================
// EQRA — Topic Detail Page
// Deep Thematic Exploration with Ayahs & Hadith
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { TOPICS_DATA } from '../data/topics.js';
import { SURAHS_METADATA } from '../data/quranMetadata.js';

export function renderTopicDetailPage(params) {
  const lang = getLang();
  const slug = params.topic || 'patience';
  const topic = TOPICS_DATA.find(tp => tp.slug === slug) || TOPICS_DATA[0];

  updateMeta({
    title: `${lang === 'bn' ? topic.titleBangla : topic.titleEnglish} — বিষয়ভিত্তিক কুরআন ও হাদিস | EQRA`,
    description: lang === 'bn' ? topic.summaryBangla : topic.summaryEnglish,
    canonicalPath: `#/${lang}/topics/${topic.slug}`
  });

  const relatedSurahObjects = (topic.relatedSurahs || []).map(num => SURAHS_METADATA.find(s => s.number === num)).filter(Boolean);

  return `
    <div class="page">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <a href="#/${lang}/topics">${t('navTopics')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${lang === 'bn' ? topic.titleBangla : topic.titleEnglish}</span>
        </nav>

        <!-- Topic Header -->
        <header class="card section-card-topic animate-fade-in" style="margin-bottom: var(--space-8); padding: var(--space-8);">
          <span class="tag" style="margin-bottom: var(--space-3);">
            ${lang === 'bn' ? topic.categoryBangla : topic.categoryEnglish}
          </span>
          <h1 style="font-size: var(--text-3xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-3);">
            ${lang === 'bn' ? topic.titleBangla : topic.titleEnglish}
          </h1>
          <p style="font-size: var(--text-lg); color: var(--color-text-secondary); line-height: 1.8;">
            ${lang === 'bn' ? topic.summaryBangla : topic.summaryEnglish}
          </p>
        </header>

        <!-- Central Key Ayah -->
        <section class="section" style="padding-top: 0;">
          <div style="font-size: var(--text-sm); font-weight: 700; color: var(--color-quran); text-transform: uppercase; margin-bottom: var(--space-3);">
            📖 ${lang === 'bn' ? 'মূল কুরআনীয় নির্দেশনা' : 'Central Quranic Directive'}
          </div>

          <div class="card section-card-quran" style="padding: var(--space-6);">
            <div class="ayah-arabic" style="font-size: var(--quran-size-md); border-bottom: 1px dashed var(--color-border); padding-bottom: var(--space-4);">
              ${topic.keyAyah.arabic}
            </div>
            <div class="ayah-translation-bn" style="font-size: var(--text-base); margin-top: var(--space-3);">
              ${topic.keyAyah.bangla}
            </div>
            <div class="ayah-translation-en" style="font-size: var(--text-sm); margin-top: var(--space-2);">
              ${topic.keyAyah.english}
            </div>
            <div style="margin-top: var(--space-4); font-size: var(--text-xs); color: var(--color-text-muted); text-align: right;">
              ${topic.keyAyah.reference}
            </div>
          </div>
        </section>

        <!-- Key Reflections -->
        ${topic.reflectionsBangla ? `
          <section class="section" style="padding-top: 0;">
            <h2 style="font-size: var(--text-xl); font-weight: 700; margin-bottom: var(--space-4);">
              💡 ${lang === 'bn' ? 'চিন্তা ও আত্মোপলব্ধি' : 'Key Reflections'}
            </h2>
            <div style="display: flex; flex-direction: column; gap: var(--space-3);">
              ${topic.reflectionsBangla.map(ref => `
                <div class="card" style="padding: var(--space-4); border-left: 3px solid var(--color-topic);">
                  <p style="font-size: var(--text-base); color: var(--color-text-secondary); line-height: 1.7;">
                    ${ref}
                  </p>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Related Surahs -->
        ${relatedSurahObjects.length > 0 ? `
          <section class="section" style="padding-top: 0;">
            <h2 style="font-size: var(--text-xl); font-weight: 700; margin-bottom: var(--space-4);">
              📚 ${lang === 'bn' ? 'সম্পর্কিত সূরাসমূহ' : 'Related Surahs'}
            </h2>
            <div class="grid-2">
              ${relatedSurahObjects.map(s => `
                <a href="#/${lang}/quran/${s.number}" class="surah-card">
                  <div class="surah-number">${s.number}</div>
                  <div class="surah-info">
                    <div style="font-weight: 600;">${lang === 'bn' ? s.banglaName : s.englishName}</div>
                    <div class="surah-meta">${s.ayahs} ${t('ayahPlural')}</div>
                  </div>
                  <div class="surah-name-arabic">${s.name}</div>
                </a>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <div style="text-align: center; margin-top: var(--space-8);">
          <a href="#/${lang}/topics" class="btn btn-secondary">
            ← ${lang === 'bn' ? 'অন্যান্য বিষয়সমূহ দেখুন' : 'View Other Topics'}
          </a>
        </div>
      </div>
    </div>
  `;
}
