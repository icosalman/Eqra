// ============================================
// EQRA — Saved Bookmarks Page
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { getBookmarks, toggleBookmark } from '../utils/storage.js';
import { Icon3DBookmark } from '../components/Icons3D.js';

export function renderBookmarksPage() {
  const lang = getLang();
  const bookmarks = getBookmarks();

  updateMeta({
    title: lang === 'bn' ? 'সংরক্ষিত আয়াত ও দোয়া | EQRA' : 'Saved Verses & Duas | EQRA',
    description: lang === 'bn' ? 'আপনার সংরক্ষিত প্রিয় কুরআনের আয়াত এবং দোয়া।' : 'Your saved Quran verses and supplications.',
    canonicalPath: `#/${lang}/bookmarks`
  });

  return `
    <div class="page">
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
            <span>${lang === 'bn' ? 'ব্যক্তিগত সংগ্রহ' : 'My Collection'}</span>
          </span>
          <h1 style="font-size: var(--text-4xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${lang === 'bn' ? 'সংরক্ষিত আয়াত ও দোয়া' : 'Saved Bookmarks'}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary);">
            ${lang === 'bn' ? `মোট ${bookmarks.length}টি প্রিয় অংশ সংরক্ষিত আছে` : `You have ${bookmarks.length} saved items`}
          </p>
        </header>

        <div id="bookmarks-list" style="display: flex; flex-direction: column; gap: var(--space-4);">
          ${bookmarks.length === 0 ? `
            <div class="card" style="text-align: center; padding: var(--space-12);">
              <div style="display: flex; justify-content: center; margin-bottom: var(--space-4);">
                <span class="icon-3d-wrap" style="width: 52px; height: 52px;">${Icon3DBookmark}</span>
              </div>
              <h2 style="font-size: var(--text-xl); font-weight: 700; margin-bottom: var(--space-2);">
                ${lang === 'bn' ? 'এখনো কোনো আয়াত বা দোয়া সংরক্ষণ করা হয়নি' : 'No Bookmarks Saved Yet'}
              </h2>
              <p style="font-size: var(--text-sm); color: var(--color-text-muted); margin-bottom: var(--space-6);">
                ${lang === 'bn' ? 'কুরআন পড়ার সময় যেকোনো আয়াত বা দোয়ার পাশে থাকা তারা (★) চিহ্নে ক্লিক করে সহজেই সংরক্ষণ করতে পারেন।' : 'Click the star icon next to any verse or dua while reading to save it here for quick access.'}
              </p>
              <a href="#/${lang}/quran" class="btn btn-primary">
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
                <div class="ayah-arabic" style="font-size: var(--quran-size-sm); margin-bottom: var(--space-3);">
                  ${item.arabic}
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
}
