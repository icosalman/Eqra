// ============================================
// EQRA — Hadith Book Page
// Read complete chapters of Sahih Bukhari & Muslim
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta, breadcrumbSchema, setStructuredData } from '../utils/seo.js';
import { getHadithBook, getBookMeta, getHadithBooks } from '../services/hadithService.js';
import { toggleBookmark, isBookmarked } from '../utils/storage.js';

export async function renderHadithBookPage(params) {
  const lang = getLang();
  const collection = (params.collection || 'bukhari').toLowerCase();
  const bookNum = parseInt(params.book || 1, 10);

  const collTitleBn = collection === 'muslim' ? 'সহীহ মুসলিম' : 'সহীহ আল-বুখারী';
  const collTitleEn = collection === 'muslim' ? 'Sahih Muslim' : 'Sahih al-Bukhari';
  const bookMeta = getBookMeta(collection, bookNum) || { nameBn: `অধ্যায় ${bookNum}`, nameEn: `Book ${bookNum}`, count: '' };

  const allBooks = getHadithBooks(collection);
  const prevBook = bookNum > 1 ? bookNum - 1 : null;
  const nextBook = bookNum < allBooks.length ? bookNum + 1 : null;

  updateMeta({
    title: `${collTitleBn} — ${lang === 'bn' ? bookMeta.nameBn : bookMeta.nameEn} (অধ্যায় ${bookNum}) | EQRA`,
    description: `${collTitleEn} Book ${bookNum}: ${bookMeta.nameEn} — আরবি, বাংলা ও ইংরেজি অনুবাদসহ হাদিস পাঠ।`,
    canonicalPath: `#/${lang}/hadith/${collection}/${bookNum}`
  });

  setStructuredData(breadcrumbSchema([
    { name: t('navHome'), url: `#/${lang}/` },
    { name: t('navHadith'), url: `#/${lang}/hadith` },
    { name: `${collTitleBn} - ${bookMeta.nameBn}`, url: `#/${lang}/hadith/${collection}/${bookNum}` }
  ]));

  return `
    <div class="page">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <a href="#/${lang}/hadith">${t('navHadith')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${collTitleBn} : ${lang === 'bn' ? bookMeta.nameBn : bookMeta.nameEn}</span>
        </nav>

        <!-- Book Header -->
        <header class="card section-card-hadith animate-fade-in" style="padding: var(--space-8); margin-bottom: var(--space-6); text-align: center; background: linear-gradient(180deg, var(--color-surface), var(--color-hadith-bg));">
          <span class="tag" style="background: var(--color-hadith-bg); color: var(--color-hadith); border-color: var(--color-hadith-light); margin-bottom: var(--space-2);">
            ${collTitleBn} • ${lang === 'bn' ? `অধ্যায় ${bookNum}` : `Book ${bookNum}`}
          </span>
          <h1 style="font-size: var(--text-3xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${lang === 'bn' ? bookMeta.nameBn : bookMeta.nameEn}
          </h1>
          <div style="font-size: var(--text-sm); color: var(--color-text-muted);">
            ${bookMeta.nameEn} • ${bookMeta.count ? `${bookMeta.count} ${lang === 'bn' ? 'টি হাদিস' : 'Hadiths'}` : ''}
          </div>
        </header>

        <!-- Hadiths List Container -->
        <div id="hadith-book-list-container" style="display: flex; flex-direction: column; gap: var(--space-6);">
          <div style="text-align: center; padding: var(--space-12);">
            <div class="skeleton skeleton-title" style="margin: 0 auto var(--space-4);"></div>
            <div class="skeleton skeleton-arabic" style="margin: 0 auto var(--space-4);"></div>
            <div class="skeleton skeleton-text"></div>
            <p style="margin-top: var(--space-4); color: var(--color-text-muted); font-size: var(--text-sm);">
              ${lang === 'bn' ? 'হাদিসসমূহ লোড হচ্ছে...' : 'Loading authentic hadiths...'}
            </p>
          </div>
        </div>

        <!-- Navigation Footer (Previous / Next Book) -->
        <nav style="display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-12); padding-top: var(--space-6); border-top: 1px solid var(--color-border);" aria-label="Book Navigation">
          ${prevBook ? `
            <a href="#/${lang}/hadith/${collection}/${prevBook}" class="btn btn-secondary">
              <span>←</span>
              <span>${lang === 'bn' ? 'পূর্ববর্তী অধ্যায়' : 'Previous Book'}</span>
            </a>
          ` : '<div></div>'}

          <a href="#/${lang}/hadith" class="btn btn-ghost">
            <span>📜</span>
            <span>${lang === 'bn' ? 'অধ্যায় তালিকা' : 'Books List'}</span>
          </a>

          ${nextBook ? `
            <a href="#/${lang}/hadith/${collection}/${nextBook}" class="btn btn-primary" style="background: var(--color-hadith);">
              <span>${lang === 'bn' ? 'পরবর্তী অধ্যায়' : 'Next Book'}</span>
              <span>→</span>
            </a>
          ` : '<div></div>'}
        </nav>
      </div>
    </div>
  `;
}

export async function bindHadithBookEvents(params) {
  const collection = (params.collection || 'bukhari').toLowerCase();
  const bookNum = parseInt(params.book || 1, 10);
  const container = document.getElementById('hadith-book-list-container');
  const lang = getLang();

  const data = await getHadithBook(collection, bookNum);

  if (!data || !data.hadiths || data.hadiths.length === 0) {
    container.innerHTML = `
      <div class="card" style="text-align: center; padding: var(--space-8);">
        <p style="color: var(--color-text-muted);">${t('error')}</p>
        <a href="#/${lang}/hadith" class="btn btn-secondary" style="margin-top: var(--space-4);">${t('goBack')}</a>
      </div>
    `;
    return;
  }

  container.innerHTML = data.hadiths.map(h => {
    const bookmarkId = `hadith_${collection}_${h.hadithNumber}`;
    const bookmarked = isBookmarked(bookmarkId);

    return `
      <article class="card hadith-card" id="hadith-${h.hadithNumber}">
        <div class="section-header" style="margin-bottom: var(--space-3);">
          <div class="hadith-card-source">
            <span>📜</span>
            <span>${h.reference}</span>
          </div>

          <div style="display: flex; align-items: center; gap: var(--space-2);">
            <button class="ayah-action-btn copy-hadith-btn" 
              data-copy="${h.arabic ? `${h.arabic}\n\n` : ''}${h.bangla}\n\n— [${h.reference}]" 
              title="${t('copy')}">
              📋
            </button>
            <button class="ayah-action-btn bookmark-hadith-btn ${bookmarked ? 'active' : ''}" 
              data-id="${bookmarkId}"
              data-title="${h.reference}"
              data-arabic="${encodeURIComponent(h.arabic || '')}"
              data-bangla="${encodeURIComponent(h.bangla || '')}"
              data-english="${encodeURIComponent(h.english || '')}"
              title="${t('bookmark')}"
              style="${bookmarked ? 'color: var(--color-hadith);' : ''}">
              ${bookmarked ? '★' : '☆'}
            </button>
          </div>
        </div>

        ${h.arabic ? `
          <div style="font-family: var(--font-arabic); font-size: var(--text-lg); line-height: 2; color: var(--color-arabic); direction: rtl; text-align: right; margin-bottom: var(--space-4); padding: var(--space-2) 0; border-bottom: 1px dashed var(--color-border-light);">
            ${h.arabic}
          </div>
        ` : ''}

        <div style="display: flex; flex-direction: column; gap: var(--space-3);">
          <div class="ayah-translation-bn" style="border-left-color: var(--color-hadith-light); font-size: var(--text-base);">
            ${h.bangla}
          </div>
          ${h.english ? `
            <div class="ayah-translation-en" style="font-size: var(--text-sm);">
              ${h.english}
            </div>
          ` : ''}
        </div>
      </article>
    `;
  }).join('');

  // Copy Buttons
  container.querySelectorAll('.copy-hadith-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = '✓';
        setTimeout(() => { btn.textContent = original; }, 1500);
      }
    });
  });

  // Bookmark Buttons
  container.querySelectorAll('.bookmark-hadith-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = {
        id,
        type: 'hadith',
        title: btn.getAttribute('data-title'),
        arabic: decodeURIComponent(btn.getAttribute('data-arabic')),
        bangla: decodeURIComponent(btn.getAttribute('data-bangla')),
        english: decodeURIComponent(btn.getAttribute('data-english'))
      };

      const added = toggleBookmark(item);
      btn.textContent = added ? '★' : '☆';
      btn.style.color = added ? 'var(--color-hadith)' : '';
    });
  });
}
