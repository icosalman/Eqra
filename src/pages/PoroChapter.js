// ============================================
// EQRA — 'পড়ো' (Poro) Chapter Reader
// Dual Modes: Interactive Digital Reader + Original Book PDF
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { PORO_CHAPTERS, PORO_BOOK_METADATA, getChapterStartPage } from '../data/poroBookData.js';
import { formatColorCodedQuran, bindTajweedInteractions } from '../utils/quranColors.js';
import { Icon3DReflection, Icon3DPoro, Icon3DDocument } from '../components/Icons3D.js';

export function renderPoroChapterPage(params) {
  const lang = getLang();
  const rawId = String(params.chapter || 'ch-1').toLowerCase().trim();
  const chapterIndex = PORO_CHAPTERS.findIndex(c => 
    c.id.toLowerCase() === rawId || 
    String(c.number) === rawId || 
    c.id.toLowerCase() === `ch-${rawId}`
  );
  const safeIndex = chapterIndex >= 0 ? chapterIndex : 1;
  const chapter = PORO_CHAPTERS[safeIndex];

  const prevChapter = safeIndex > 0 ? PORO_CHAPTERS[safeIndex - 1] : null;
  const nextChapter = safeIndex < PORO_CHAPTERS.length - 1 ? PORO_CHAPTERS[safeIndex + 1] : null;

  const startPage = getChapterStartPage(chapter);

  // Check URL query parameter or hash for PDF mode
  const isPdfMode = window.location.hash.includes('mode=pdf');
  const initialMode = isPdfMode ? 'pdf' : 'digital';

  updateMeta({
    title: `${chapter.titleBangla} — পড়ো | EQRA`,
    description: chapter.summary,
    canonicalPath: `#/${lang}/poro/${chapter.id}`
  });

  return `
    <div class="page poro-reader-page" id="poro-reader-container">
      <div class="container" style="max-width: 900px;">
        <!-- Top Breadcrumbs & Back Bar -->
        <div class="reader-top-bar" style="margin-bottom: var(--space-4);">
          <a href="#/${lang}/poro" class="btn btn-ghost btn-sm">
            <span>←</span> <span>${lang === 'bn' ? 'বইয়ের সূচিপত্রে ফিরুন' : 'Back to Book Index'}</span>
          </a>

          <!-- Reader Customization Controls -->
          <div class="reader-controls">
            <!-- Theme: Light, Sepia, Dark -->
            <div class="reader-theme-toggle">
              <button class="reader-theme-btn active" data-reader-theme="default" title="Normal Theme">☀️</button>
              <button class="reader-theme-btn" data-reader-theme="sepia" title="Warm Sepia">📜</button>
              <button class="reader-theme-btn" data-reader-theme="night" title="Night Mode">🌙</button>
            </div>

            <!-- Font Size -->
            <div class="reader-font-controls">
              <button id="font-decrease-btn" class="reader-ctrl-btn" title="Decrease Font">A-</button>
              <button id="font-reset-btn" class="reader-ctrl-btn" title="Reset Font">A</button>
              <button id="font-increase-btn" class="reader-ctrl-btn" title="Increase Font">A+</button>
            </div>
          </div>
        </div>

        <!-- Chapter Top Bar & Acquisition Link -->
        <div class="card" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6); padding: 10px 16px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: var(--text-xs); color: var(--color-text-secondary); flex-wrap: wrap;">
            <span style="background: rgba(2, 132, 199, 0.1); color: #0284C7; font-weight: 700; padding: 3px 8px; border-radius: var(--radius-full);">
              ${lang === 'bn' ? `মূল বইয়ের পৃষ্ঠা: ${chapter.pages}` : `Book Pages: ${chapter.pages}`}
            </span>
            <span>•</span>
            <span>${lang === 'bn' ? 'সরোবর প্রকাশন (সংকলন: ওমর আল জাবির)' : 'Shorobor Prokashon (Omar Al Zabir)'}</span>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            <a href="${PORO_BOOK_METADATA.rokomariUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" style="font-size: 11px; padding: 6px 14px; display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #059669 0%, #047857 100%); border: none; font-weight: 700;">
              <span>🛒</span> <span>${lang === 'bn' ? 'রকমারি থেকে মূল বই সংগ্রহ' : 'Order Book on Rokomari'}</span> <span>↗️</span>
            </a>
            <a href="#/${lang}/poro" class="btn btn-secondary btn-sm" style="font-size: 11px; padding: 6px 12px; display: inline-flex; align-items: center; gap: 4px;">
              <span>📑</span> <span>${lang === 'bn' ? 'সকল অধ্যায়' : 'All Chapters'}</span>
            </a>
          </div>
        </div>

        <!-- DIGITAL CHAPTER ARTICLE -->
        <div id="poro-digital-view">
          <article class="poro-reader-article" id="poro-article-content">
            <!-- Chapter Metadata Header -->
            <header class="poro-article-header">
              <div class="poro-ch-badge" style="display: inline-block; margin-bottom: var(--space-3);">
                ${chapter.number === 0 ? (lang === 'bn' ? 'ভূমিকা' : 'Preface') : (chapter.number === 20 ? (lang === 'bn' ? 'উপসংহার' : 'Epilogue') : `${lang === 'bn' ? 'অধ্যায়' : 'Chapter'} ${chapter.number}`)}
              </div>

              <h1 class="poro-article-title">
                ${lang === 'bn' ? chapter.titleBangla : chapter.titleEnglish}
              </h1>

              <div class="poro-article-meta-row">
                <span>⏱️ ${chapter.readTimeMinutes} ${lang === 'bn' ? 'মিনিট পড়ার সময়' : 'min read'}</span>
                <span>•</span>
                <span>📄 ${lang === 'bn' ? `পৃষ্ঠা ${chapter.pages}` : `Pages ${chapter.pages}`}</span>
                <span>•</span>
                <span>✍️ ${PORO_BOOK_METADATA.author}</span>
              </div>
            </header>

            <!-- Key Quranic Ayah (if present) -->
            ${chapter.keyAyah ? `
              <div class="poro-featured-ayah-box">
                <div class="ayah-arabic font-indopak" style="font-size: var(--text-2xl); line-height: 2; margin-bottom: var(--space-4);">
                  ${formatColorCodedQuran(chapter.keyAyah.arabic)}
                </div>
                <div class="poro-ayah-trans">
                  “${chapter.keyAyah.translation}”
                </div>
              </div>
            ` : ''}

            <!-- Key Pullquote matching book design -->
            ${chapter.keyQuote ? `
              <div class="poro-ch-pullquote">
                <span class="poro-quote-mark">“</span>
                <p class="poro-quote-text">${chapter.keyQuote}</p>
              </div>
            ` : ''}

            <!-- Lead Summary -->
            ${chapter.summary ? `
              <p class="poro-paragraph-lead">
                ${chapter.summary}
              </p>
            ` : ''}

            <!-- Core Chapter Sections -->
            <div class="poro-sections-flow">
              ${chapter.sections.map((sec, idx) => `
                <div class="poro-section-block" id="sec-${idx}">
                  ${sec.heading ? `<h2 class="poro-sec-heading poro-section-h2">${sec.heading}</h2>` : ''}
                  <div class="poro-sec-body">
                    ${formatContentParagraphs(sec.content)}
                  </div>

                  ${sec.bullets ? `
                    <ul class="poro-bullets-list">
                      ${sec.bullets.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                  ` : ''}
                </div>
              `).join('')}
            </div>

            <!-- Reflection Box: চিন্তার খোরাক -->
            ${chapter.reflection ? `
              <div class="poro-reflection-box">
                <div class="poro-refl-header" style="display: flex; align-items: center; gap: 8px;">
                  <span class="icon-3d-wrap" style="width: 24px; height: 24px;">${Icon3DReflection}</span>
                  <span class="poro-refl-title">${lang === 'bn' ? 'চিন্তার খোরাক (ব্যক্তিগত আত্মসমালোচনা)' : 'Self-Reflection Takeaway'}</span>
                </div>
                <p class="poro-refl-text">
                  ${chapter.reflection}
                </p>
              </div>
            ` : ''}

            <!-- Chapter Navigation Footer -->
            <nav class="poro-ch-nav-footer">
              ${prevChapter ? `
                <a href="#/${lang}/poro/${prevChapter.id}" class="poro-nav-prev-card">
                  <span class="nav-dir">← ${lang === 'bn' ? 'পূর্ববর্তী অধ্যায়' : 'Previous Chapter'}</span>
                  <span class="nav-title">${lang === 'bn' ? prevChapter.titleBangla : prevChapter.titleEnglish}</span>
                </a>
              ` : '<div style="flex:1;"></div>'}

              <div class="poro-nav-center">
                <a href="#/${lang}/poro" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px;">
                  <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DPoro}</span>
                  <span>${lang === 'bn' ? 'সূচিপত্র' : 'All Chapters'}</span>
                </a>
              </div>

              ${nextChapter ? `
                <a href="#/${lang}/poro/${nextChapter.id}" class="poro-nav-next-card">
                  <span class="nav-dir">${lang === 'bn' ? 'পরবর্তী অধ্যায়' : 'Next Chapter'} →</span>
                  <span class="nav-title">${lang === 'bn' ? nextChapter.titleBangla : nextChapter.titleEnglish}</span>
                </a>
              ` : '<div style="flex:1;"></div>'}
            </nav>

            <!-- Official Acquisition Banner at chapter end -->
            <div class="card" style="margin-top: var(--space-8); padding: var(--space-5); background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-radius: var(--radius-xl); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-4);">
              <div style="flex: 1; min-width: 250px;">
                <div style="font-size: 11px; font-weight: 700; color: #0284C7; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                  <span>📘</span> <span>${lang === 'bn' ? 'সরোবর প্রকাশন • কপিরাইট ও স্বত্বাধিকার সুরক্ষিত' : 'Shorobor Prokashon • Copyright Protected'}</span>
                </div>
                <div style="font-size: var(--text-sm); font-weight: 700; color: var(--color-text-primary); margin-bottom: 2px;">
                  ${lang === 'bn' ? `‘পড়ো’ মূল বইয়ের পৃষ্ঠা ${chapter.pages} এর সারসংক্ষেপ ও বিশ্লেষণ` : `Essence of Poro Original Pages ${chapter.pages}`}
                </div>
                <p style="font-size: var(--text-xs); color: var(--color-text-secondary); margin: 0; line-height: 1.5;">
                  ${lang === 'bn' 
                    ? '১৯টি প্রামাণ্য তাফসীরের বিশদ তথ্যসূত্র ও পূর্ণাঙ্গ পাঠের জন্য মূল মুদ্রিত কপি সংগ্রহ করার অনুরোধ করা হচ্ছে।' 
                    : 'To read the complete text and citations from 19 authentic classical Tafsirs, please acquire the original printed book.'}
                </p>
              </div>
              <div style="display: flex; gap: 8px;">
                <a href="${PORO_BOOK_METADATA.rokomariUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="background: linear-gradient(135deg, #059669 0%, #047857 100%); border: none; font-weight: 700; padding: 8px 16px; display: inline-flex; align-items: center; gap: 6px;">
                  <span>🛒</span> <span>${lang === 'bn' ? 'রকমারি থেকে অর্ডার করুন' : 'Order on Rokomari'}</span> <span>↗️</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  `;
}

function formatContentParagraphs(text) {
  if (!text) return '';
  return text
    .split('\n\n')
    .map(p => `<p class="poro-p">${p.replace(/\n/g, '<br/>')}</p>`)
    .join('');
}

export function bindPoroChapterEvents() {
  const container = document.getElementById('poro-reader-container');
  const article = document.getElementById('poro-article-content');

  // Font Size Controls
  let currentFontSize = 18;
  const fontDecreaseBtn = document.getElementById('font-decrease-btn');
  const fontResetBtn = document.getElementById('font-reset-btn');
  const fontIncreaseBtn = document.getElementById('font-increase-btn');

  if (fontDecreaseBtn && article) {
    fontDecreaseBtn.addEventListener('click', () => {
      if (currentFontSize > 14) {
        currentFontSize -= 2;
        article.style.fontSize = `${currentFontSize}px`;
      }
    });
  }

  if (fontResetBtn && article) {
    fontResetBtn.addEventListener('click', () => {
      currentFontSize = 18;
      article.style.fontSize = '';
    });
  }

  if (fontIncreaseBtn && article) {
    fontIncreaseBtn.addEventListener('click', () => {
      if (currentFontSize < 28) {
        currentFontSize += 2;
        article.style.fontSize = `${currentFontSize}px`;
      }
    });
  }

  // Reading Theme Controls
  const themeBtns = document.querySelectorAll('.reader-theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const theme = btn.getAttribute('data-reader-theme');
      if (container) {
        container.classList.remove('theme-sepia', 'theme-night');
        if (theme === 'sepia') container.classList.add('theme-sepia');
        if (theme === 'night') container.classList.add('theme-night');
      }
    });
  });

  // Bind interactive Tajweed rule tooltips on Poro chapter
  bindTajweedInteractions(document.getElementById('poro-chapter-page') || document);
}
