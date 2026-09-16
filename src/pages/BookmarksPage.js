// ============================================
// EQRA — Saved Bookmarks & Reading Progress Page
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { getBookmarks, toggleBookmark, getAllProgress } from '../utils/storage.js';
import { getSurahMeta } from '../services/quranService.js';
import { formatColorCodedQuran, bindTajweedInteractions } from '../utils/quranColors.js';
import { Icon3DBookmark } from '../components/Icons3D.js';

export function renderBookmarksPage() {
  const lang = getLang();
  const bookmarks = getBookmarks();
  const progressMap = getAllProgress();
  const progressList = Object.keys(progressMap)
    .map(key => {
      const prog = progressMap[key];
      const meta = getSurahMeta(prog.surah);
      return meta ? { ...prog, meta } : null;
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));

  updateMeta({
    title: lang === 'bn' ? 'সংরক্ষিত আয়াত ও পড়ার অগ্রগতি | EQRA' : 'Saved Verses & Reading Progress | EQRA',
    description: lang === 'bn' ? 'আপনার সংরক্ষিত প্রিয় কুরআনের আয়াত, দোয়া এবং পড়ার অগ্রগতি।' : 'Your saved Quran verses, supplications, and reading progress.',
    canonicalPath: `#/${lang}/bookmarks`
  });

  return `
    <div class="page" id="bookmarks-page">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${lang === 'bn' ? 'সংরক্ষিত' : 'Bookmarks'}</span>
        </nav>

        <header style="margin-bottom: var(--space-8); text-align: center;">
          <span class="section-badge badge-quran" style="margin-bottom: var(--space-3); display: inline-flex; align-items: center; gap: 6px;">
            <span class="icon-3d-wrap" style="width: 20px; height: 20px;">${Icon3DBookmark}</span>
            <span>${lang === 'bn' ? 'ব্যক্তিগত সংগ্রহ ও অগ্রগতি' : 'My Collection & Progress'}</span>
          </span>
          <h1 style="font-size: var(--text-4xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${lang === 'bn' ? 'সংরক্ষিত আয়াত ও পড়ার অগ্রগতি' : 'Bookmarks & Reading Progress'}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary);">
            ${lang === 'bn' ? `মোট ${progressList.length}টি সূরায় পড়ার অগ্রগতি এবং ${bookmarks.length}টি প্রিয় অংশ সংরক্ষিত` : `${progressList.length} reading progress bookmarks and ${bookmarks.length} saved items`}
          </p>
        </header>

        <!-- Section 1: Reading Progress (Surah Progress Trackers) -->
        ${progressList.length > 0 ? `
          <section style="margin-bottom: var(--space-10);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: var(--space-4);">
              <span style="font-size: 1.3rem;">🔖</span>
              <h2 style="font-size: var(--text-xl); font-weight: 700; color: var(--color-text-primary); margin: 0;">
                ${lang === 'bn' ? 'পড়ার অগ্রগতি (Surah Progress)' : 'Reading Progress (Surah Progress)'}
              </h2>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4);">
              ${progressList.map(item => `
                <div class="card" style="padding: var(--space-5); border: 1px solid var(--color-border); border-left: 4px solid var(--color-quran); background: var(--color-surface); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-2);">
                    <div>
                      <div style="font-size: var(--text-lg); font-weight: 700; color: var(--color-text-primary);">
                        ${lang === 'bn' ? item.meta.banglaName : item.meta.englishName}
                      </div>
                      <div style="font-size: var(--text-xs); color: var(--color-text-muted);">
                        ${item.meta.name} • ${item.meta.ayahs} ${t('ayahPlural')}
                      </div>
                    </div>
                    <span class="badge" style="background: var(--color-quran-bg); color: var(--color-quran); font-weight: 700; font-size: var(--text-xs); padding: 4px 8px; border-radius: var(--radius-full);">
                      ${item.percent}%
                    </span>
                  </div>

                  <!-- Progress Bar -->
                  <div style="width: 100%; height: 6px; background: var(--color-bg-alt); border-radius: 999px; overflow: hidden; margin: var(--space-3) 0 var(--space-2);">
                    <div style="width: ${item.percent}%; height: 100%; background: linear-gradient(90deg, var(--color-quran), #0284c7); border-radius: 999px;"></div>
                  </div>

                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: var(--text-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">
                    <span>${lang === 'bn' ? `সর্বশেষ পড়া: আয়াত ${item.ayah}` : `Last read: Ayah ${item.ayah}`}</span>
                    <span>${lang === 'bn' ? `মোট আয়াত: ${item.meta.ayahs}` : `Total: ${item.meta.ayahs}`}</span>
                  </div>

                  <a href="#/${lang}/quran/${item.surah}" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center; display: inline-flex; align-items: center; gap: 6px;">
                    <span>📖</span>
                    <span>${lang === 'bn' ? `পড়া চালিয়ে যান (আয়াত ${item.ayah})` : `Resume Reading (Ayah ${item.ayah})`}</span>
                  </a>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Section 2: Favorite Verses & Duas -->
        <section>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: var(--space-4);">
            <span style="font-size: 1.3rem;">★</span>
            <h2 style="font-size: var(--text-xl); font-weight: 700; color: var(--color-text-primary); margin: 0;">
              ${lang === 'bn' ? 'প্রিয় আয়াত ও দোয়া (Favorite Verses)' : 'Favorite Verses & Duas'}
            </h2>
          </div>

          <div id="bookmarks-list" style="display: flex; flex-direction: column; gap: var(--space-4);">
            ${bookmarks.length === 0 ? `
              <div class="card" style="text-align: center; padding: var(--space-10);">
                <div style="display: flex; justify-content: center; margin-bottom: var(--space-4);">
                  <span class="icon-3d-wrap" style="width: 48px; height: 48px;">${Icon3DBookmark}</span>
                </div>
                <h3 style="font-size: var(--text-lg); font-weight: 700; margin-bottom: var(--space-2);">
                  ${lang === 'bn' ? 'কোনো প্রিয় আয়াত সংরক্ষিত নেই' : 'No Favorite Verses Saved'}
                </h3>
                <p style="font-size: var(--text-sm); color: var(--color-text-muted); margin-bottom: var(--space-4);">
                  ${lang === 'bn' ? 'কুরআন পড়ার সময় যেকোনো আয়াত বা দোয়ার পাশে থাকা তারা (★) চিহ্নে ক্লিক করে সহজেই সংরক্ষণ করতে পারেন।' : 'Click the star icon next to any verse or dua while reading to save it here.'}
                </p>
                <a href="#/${lang}/quran" class="btn btn-secondary btn-sm">
                  ${t('heroCTA')}
                </a>
              </div>
            ` : bookmarks.map(item => `
              <article class="card section-card-quran" style="padding: var(--space-6);">
                <div class="section-header" style="margin-bottom: var(--space-3);">
                  <div style="font-weight: 700; color: var(--color-quran);">
                    ${item.title || 'পবিত্র আয়াত'}
                  </div>
                  <button class="btn-ghost remove-bookmark-btn" data-id="${item.id}" title="${lang === 'bn' ? 'মুছে ফেলুন' : 'Remove'}" style="color: var(--color-error);">
                    ✕
                  </button>
                </div>

                ${item.arabic ? `
                  <div class="ayah-arabic font-indopak" style="font-size: var(--quran-size-sm); margin-bottom: var(--space-3);">
                    ${formatColorCodedQuran(item.arabic)}
                  </div>
                ` : ''}

                <div style="display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4);">
                  ${item.bangla ? `<div class="ayah-translation-bn">${item.bangla}</div>` : ''}
                  ${item.english ? `<div class="ayah-translation-en">${item.english}</div>` : ''}
                </div>

                <div style="display: flex; justify-content: flex-end;">
                  ${item.surah ? `
                    <a href="#/${lang}/quran/${item.surah}" class="btn btn-ghost btn-sm" style="color: var(--color-quran); font-weight: 600;">
                      ${lang === 'bn' ? 'সূরায় যান →' : 'Go to Surah →'}
                    </a>
                  ` : ''}
                </div>
              </article>
            `).join('')}
          </div>
        </section>
      </div>
    </div>
  `;
}

export function bindBookmarksEvents() {
  document.querySelectorAll('.remove-bookmark-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      toggleBookmark({ id });
      window.location.reload();
    });
  });

  // Bind interactive Tajweed rule tooltips on saved bookmarks
  bindTajweedInteractions(document.getElementById('bookmarks-page') || document);
}
