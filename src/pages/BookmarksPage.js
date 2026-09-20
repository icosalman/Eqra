// ============================================
// EQRA — Saved Bookmarks & Pinned Verses Page
// Inspired by GreenTech Al-Quran (Distinct 📌 Pin vs 🔖 Bookmark)
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { getBookmarks, toggleBookmark, getAllProgress, removeSurahProgress } from '../utils/storage.js';
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

  // Determine initial active tab from URL query params (e.g. ?tab=pinned or ?tab=bookmarks)
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const activeTab = urlParams.get('tab') === 'bookmarks' ? 'bookmarks' : (progressList.length > 0 ? 'pinned' : 'bookmarks');

  updateMeta({
    title: lang === 'bn' ? 'সংরক্ষিত বুকমার্ক ও পিন করা আয়াত | EQRA' : 'Saved Bookmarks & Pinned Verses | EQRA',
    description: lang === 'bn' ? 'আপনার পিন করা সর্বশেষ পড়ার স্থান এবং সংরক্ষিত প্রিয় কুরআনের আয়াত।' : 'Your pinned reading progress and saved favorite Quran verses.',
    canonicalPath: `#/${lang}/bookmarks`
  });

  return `
    <div class="page" id="bookmarks-page">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${lang === 'bn' ? 'সংরক্ষিত' : 'Saved'}</span>
        </nav>

        <header style="margin-bottom: var(--space-6); text-align: center;">
          <span class="section-badge badge-quran" style="margin-bottom: var(--space-3); display: inline-flex; align-items: center; gap: 6px;">
            <span class="icon-3d-wrap" style="width: 20px; height: 20px;">${Icon3DBookmark}</span>
            <span>${lang === 'bn' ? 'ব্যক্তিগত সংগ্রহশালা' : 'My Collection'}</span>
          </span>
          <h1 style="font-size: var(--text-4xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${lang === 'bn' ? 'বুকমার্ক ও পিন করা আয়াত' : 'Bookmarks & Pinned Verses'}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
            ${lang === 'bn' 
              ? 'গ্রিনটেক আল-কুরআনের মতো এখানে আপনার সর্বশেষ পড়ার স্থান (পিন 📌) এবং প্রিয় আয়াতসমূহ (বুকমার্ক 🔖) আলাদাভাবে সংরক্ষিত থাকে।' 
              : 'Keep track of your last read positions (Pinned 📌) and favorite verses (Bookmarks 🔖) separately.'}
          </p>
        </header>

        <!-- Two Distinct Tabs: Pinned 📌 vs Bookmarks 🔖 -->
        <div class="bookmarks-tabs-nav" style="display: flex; justify-content: center; gap: var(--space-2); margin-bottom: var(--space-8); border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-3);">
          <button class="bookmarks-tab-btn ${activeTab === 'pinned' ? 'active' : ''}" data-tab="pinned" id="tab-btn-pinned" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; font-weight: 700; border-radius: var(--radius-full); border: 1px solid ${activeTab === 'pinned' ? 'var(--color-quran)' : 'var(--color-border)'}; background: ${activeTab === 'pinned' ? 'var(--color-quran-bg)' : 'var(--color-surface)'}; color: ${activeTab === 'pinned' ? 'var(--color-quran)' : 'var(--color-text-secondary)'}; cursor: pointer; transition: all 0.2s ease;">
            <span style="font-size: 1.1rem;">📌</span>
            <span>${lang === 'bn' ? 'সর্বশেষ পড়ার স্থান / পিন' : 'Pinned / Last Read'}</span>
            <span class="badge" style="background: ${activeTab === 'pinned' ? 'var(--color-quran)' : 'var(--color-border)'}; color: #fff; border-radius: 999px; padding: 1px 7px; font-size: 11px;">
              ${progressList.length}
            </span>
          </button>

          <button class="bookmarks-tab-btn ${activeTab === 'bookmarks' ? 'active' : ''}" data-tab="bookmarks" id="tab-btn-bookmarks" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; font-weight: 700; border-radius: var(--radius-full); border: 1px solid ${activeTab === 'bookmarks' ? 'var(--color-quran)' : 'var(--color-border)'}; background: ${activeTab === 'bookmarks' ? 'var(--color-quran-bg)' : 'var(--color-surface)'}; color: ${activeTab === 'bookmarks' ? 'var(--color-quran)' : 'var(--color-text-secondary)'}; cursor: pointer; transition: all 0.2s ease;">
            <span style="font-size: 1.1rem;">🔖</span>
            <span>${lang === 'bn' ? 'সংরক্ষিত প্রিয় আয়াত' : 'Saved Bookmarks'}</span>
            <span class="badge" style="background: ${activeTab === 'bookmarks' ? 'var(--color-quran)' : 'var(--color-border)'}; color: #fff; border-radius: 999px; padding: 1px 7px; font-size: 11px;">
              ${bookmarks.length}
            </span>
          </button>
        </div>

        <!-- TAB 1: PINNED / LAST READ (📌) -->
        <div class="bookmarks-tab-pane" id="pane-pinned" style="display: ${activeTab === 'pinned' ? 'block' : 'none'};">
          ${progressList.length === 0 ? `
            <div class="card" style="text-align: center; padding: var(--space-10); border: 1px dashed var(--color-border); border-radius: var(--radius-xl); background: var(--color-surface);">
              <div style="font-size: 3rem; margin-bottom: var(--space-3);">📌</div>
              <h3 style="font-size: var(--text-lg); font-weight: 700; margin-bottom: var(--space-2);">
                ${lang === 'bn' ? 'এখনো কোনো সূরা পিন করা হয়নি' : 'No Pinned Verses Yet'}
              </h3>
              <p style="font-size: var(--text-sm); color: var(--color-text-muted); max-width: 440px; margin: 0 auto var(--space-5);">
                ${lang === 'bn' 
                  ? 'কুরআন পড়ার সময় যেকোনো আয়াতের পাশে থাকা 📌 পিন বাটনে ক্লিক করলে তা আপনার সর্বশেষ পড়ার স্থান হিসেবে এখানে সংরক্ষিত থাকবে।' 
                  : 'While reading, click the 📌 pin icon on any ayah to mark where you left off.'}
              </p>
              <a href="#/${lang}/quran" class="btn btn-primary btn-sm">
                ${lang === 'bn' ? 'কুরআন তিলাওয়াত শুরু করুন' : 'Start Reading Quran'}
              </a>
            </div>
          ` : `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-4);">
              ${progressList.map(item => `
                <div class="card pinned-card" id="pinned-card-${item.surah}" style="padding: var(--space-5); border: 1px solid var(--color-border); border-left: 4px solid var(--color-quran); background: var(--color-surface); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); position: relative;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-2);">
                    <div>
                      <div style="display: flex; align-items: center; gap: 6px;">
                        <span style="font-size: 1.1rem;">📌</span>
                        <span style="font-size: var(--text-lg); font-weight: 700; color: var(--color-text-primary);">
                          ${lang === 'bn' ? item.meta.banglaName : item.meta.englishName}
                        </span>
                      </div>
                      <div style="font-size: var(--text-xs); color: var(--color-text-muted); margin-top: 2px;">
                        ${item.meta.name} • ${item.meta.ayahs} ${t('ayahPlural')}
                      </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span class="badge" style="background: var(--color-quran-bg); color: var(--color-quran); font-weight: 700; font-size: var(--text-xs); padding: 4px 8px; border-radius: var(--radius-full);">
                        ${item.percent}%
                      </span>
                      <button class="unpin-btn" data-surah="${item.surah}" title="${lang === 'bn' ? 'পিন মুছে ফেলুন' : 'Remove Pin'}" style="background: none; border: none; color: var(--color-text-muted); cursor: pointer; padding: 4px 6px; font-size: 14px; border-radius: 4px; transition: color 0.2s ease;">
                        ✕
                      </button>
                    </div>
                  </div>

                  <!-- Progress Bar -->
                  <div style="width: 100%; height: 6px; background: var(--color-bg-alt); border-radius: 999px; overflow: hidden; margin: var(--space-3) 0 var(--space-2);">
                    <div style="width: ${item.percent}%; height: 100%; background: linear-gradient(90deg, var(--color-quran), #0284c7); border-radius: 999px;"></div>
                  </div>

                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: var(--text-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">
                    <span>${lang === 'bn' ? `সর্বশেষ পিন: আয়াত ${item.ayah}` : `Last read: Ayah ${item.ayah}`}</span>
                    <span>${lang === 'bn' ? `মোট: ${item.meta.ayahs} আয়াত` : `Total: ${item.meta.ayahs}`}</span>
                  </div>

                  <a href="#/${lang}/quran/${item.surah}#ayah-${item.ayah}" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center; display: inline-flex; align-items: center; gap: 8px;">
                    <span>📖</span>
                    <span>${lang === 'bn' ? `পড়া চালিয়ে যান (আয়াত ${item.ayah})` : `Resume Reading (Ayah ${item.ayah})`}</span>
                  </a>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- TAB 2: BOOKMARKS (🔖) -->
        <div class="bookmarks-tab-pane" id="pane-bookmarks" style="display: ${activeTab === 'bookmarks' ? 'block' : 'none'};">
          ${bookmarks.length === 0 ? `
            <div class="card" style="text-align: center; padding: var(--space-10); border: 1px dashed var(--color-border); border-radius: var(--radius-xl); background: var(--color-surface);">
              <div style="font-size: 3rem; margin-bottom: var(--space-3);">🔖</div>
              <h3 style="font-size: var(--text-lg); font-weight: 700; margin-bottom: var(--space-2);">
                ${lang === 'bn' ? 'কোনো প্রিয় আয়াত বুকমার্কে সংরক্ষিত নেই' : 'No Bookmarks Saved Yet'}
              </h3>
              <p style="font-size: var(--text-sm); color: var(--color-text-muted); max-width: 440px; margin: 0 auto var(--space-5);">
                ${lang === 'bn' 
                  ? 'কুরআন পড়ার সময় যেকোনো আয়াতের পাশে থাকা 🔖 বুকমার্ক বাটন চাপলে তা আপনার প্রিয় সংগ্রহের তালিকায় জমা হবে।' 
                  : 'Click the 🔖 bookmark ribbon on any verse to save it into your personal library.'}
              </p>
              <a href="#/${lang}/quran" class="btn btn-secondary btn-sm">
                ${lang === 'bn' ? 'কুরআন তিলাওয়াত করুন' : 'Explore Quran'}
              </a>
            </div>
          ` : `
            <div id="bookmarks-list" style="display: flex; flex-direction: column; gap: var(--space-4);">
              ${bookmarks.map(item => `
                <article class="card section-card-quran bookmark-item-card" id="bookmark-card-${item.id}" style="padding: var(--space-6); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-surface); box-shadow: var(--shadow-sm);">
                  <div class="section-header" style="margin-bottom: var(--space-3); display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 1.15rem;">🔖</span>
                      <span style="font-weight: 700; color: var(--color-quran); font-size: var(--text-base);">
                        ${item.title || (lang === 'bn' ? 'পবিত্র আয়াত' : 'Holy Verse')}
                      </span>
                    </div>
                    <button class="remove-bookmark-btn" data-id="${item.id}" title="${lang === 'bn' ? 'বুকমার্ক মুছুন' : 'Remove Bookmark'}" style="background: none; border: 1px solid var(--color-border); border-radius: 999px; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; color: var(--color-error); cursor: pointer; transition: all 0.2s ease;">
                      ✕
                    </button>
                  </div>

                  ${item.arabic ? `
                    <div class="ayah-arabic font-indopak" dir="rtl" lang="ar" style="font-size: var(--quran-size-md, 2.35rem); line-height: 2.3; margin-bottom: var(--space-4); text-align: right;">
                      ${formatColorCodedQuran(item.arabic)}
                    </div>
                  ` : ''}

                  <div style="display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4);">
                    ${item.bangla ? `<div class="ayah-translation-bn" style="color: var(--color-text-primary); font-size: var(--text-base); line-height: 1.7;">${item.bangla}</div>` : ''}
                    ${item.english ? `<div class="ayah-translation-en" style="color: var(--color-text-secondary); font-size: var(--text-sm); line-height: 1.6;">${item.english}</div>` : ''}
                  </div>

                  <div style="display: flex; justify-content: flex-end; align-items: center; gap: var(--space-3); border-top: 1px solid var(--color-border-light); padding-top: var(--space-3);">
                    ${item.surah ? `
                      <a href="#/${lang}/quran/${item.surah}${item.ayah ? `#ayah-${item.ayah}` : ''}" class="btn btn-ghost btn-sm" style="color: var(--color-quran); font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
                        <span>📖</span>
                        <span>${lang === 'bn' ? 'সূরায় পূর্ণ প্রসঙ্গ দেখুন →' : 'View Full Context in Surah →'}</span>
                      </a>
                    ` : ''}
                  </div>
                </article>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

export function bindBookmarksEvents() {
  // Tab Switching (Pinned 📌 vs Bookmarks 🔖)
  const tabBtnPinned = document.getElementById('tab-btn-pinned');
  const tabBtnBookmarks = document.getElementById('tab-btn-bookmarks');
  const panePinned = document.getElementById('pane-pinned');
  const paneBookmarks = document.getElementById('pane-bookmarks');

  function switchTab(target) {
    if (target === 'pinned') {
      if (panePinned) panePinned.style.display = 'block';
      if (paneBookmarks) paneBookmarks.style.display = 'none';

      if (tabBtnPinned) {
        tabBtnPinned.style.border = '1px solid var(--color-quran)';
        tabBtnPinned.style.background = 'var(--color-quran-bg)';
        tabBtnPinned.style.color = 'var(--color-quran)';
      }
      if (tabBtnBookmarks) {
        tabBtnBookmarks.style.border = '1px solid var(--color-border)';
        tabBtnBookmarks.style.background = 'var(--color-surface)';
        tabBtnBookmarks.style.color = 'var(--color-text-secondary)';
      }
    } else {
      if (panePinned) panePinned.style.display = 'none';
      if (paneBookmarks) paneBookmarks.style.display = 'block';

      if (tabBtnBookmarks) {
        tabBtnBookmarks.style.border = '1px solid var(--color-quran)';
        tabBtnBookmarks.style.background = 'var(--color-quran-bg)';
        tabBtnBookmarks.style.color = 'var(--color-quran)';
      }
      if (tabBtnPinned) {
        tabBtnPinned.style.border = '1px solid var(--color-border)';
        tabBtnPinned.style.background = 'var(--color-surface)';
        tabBtnPinned.style.color = 'var(--color-text-secondary)';
      }
    }
  }

  if (tabBtnPinned && tabBtnBookmarks) {
    tabBtnPinned.addEventListener('click', () => switchTab('pinned'));
    tabBtnBookmarks.addEventListener('click', () => switchTab('bookmarks'));
  }

  // Remove bookmark without full page reload
  document.querySelectorAll('.remove-bookmark-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      toggleBookmark({ id });
      const card = document.getElementById(`bookmark-card-${id}`);
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(-8px)';
        card.style.transition = 'all 0.25s ease';
        setTimeout(() => card.remove(), 250);
      }
    });
  });

  // Unpin Surah without full page reload
  document.querySelectorAll('.unpin-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const surahNum = btn.getAttribute('data-surah');
      removeSurahProgress(surahNum);
      const card = document.getElementById(`pinned-card-${surahNum}`);
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(-8px)';
        card.style.transition = 'all 0.25s ease';
        setTimeout(() => card.remove(), 250);
      }
    });
  });

  // Bind interactive Tajweed rule tooltips on saved bookmarks
  bindTajweedInteractions(document.getElementById('bookmarks-page') || document);
}
