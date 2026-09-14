// ============================================
// EQRA — 'পড়ো' (Poro) Chapter Reader
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { PORO_CHAPTERS, PORO_BOOK_METADATA } from '../data/poroBookData.js';
import { formatColorCodedQuran } from '../utils/quranColors.js';

export function renderPoroChapterPage(params) {
  const lang = getLang();
  const chapterId = params.chapter || 'ch-1';
  const chapterIndex = PORO_CHAPTERS.findIndex(c => c.id === chapterId);
  const chapter = PORO_CHAPTERS[chapterIndex] || PORO_CHAPTERS[1];

  const prevChapter = chapterIndex > 0 ? PORO_CHAPTERS[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < PORO_CHAPTERS.length - 1 ? PORO_CHAPTERS[chapterIndex + 1] : null;

  updateMeta({
    title: `${chapter.titleBangla} — পড়ো | EQRA`,
    description: chapter.summary,
    canonicalPath: `#/${lang}/poro/${chapter.id}`
  });

  return `
    <div class="page poro-reader-page" id="poro-reader-container">
      <div class="container" style="max-width: 860px;">
        <!-- Top Breadcrumbs & Back Bar -->
        <div class="reader-top-bar">
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

        <!-- Chapter Main Article -->
        <article class="poro-reader-article" id="poro-article-content">
          <!-- Chapter Metadata Header -->
          <header class="poro-article-header">
            <div class="poro-ch-badge" style="display: inline-block; margin-bottom: var(--space-3);">
              ${chapter.number === 0 ? (lang === 'bn' ? 'ভূমিকা' : 'Preface') : (chapter.number === 19 ? (lang === 'bn' ? 'উপসংহার' : 'Epilogue') : `${lang === 'bn' ? 'অধ্যায়' : 'Chapter'} ${chapter.number}`)}
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
              <div class="ayah-arabic" style="font-size: var(--text-2xl); line-height: 2; margin-bottom: var(--space-4);">
                ${formatColorCodedQuran(chapter.keyAyah.arabic)}
              </div>
              <div class="poro-ayah-trans">
                “${chapter.keyAyah.translation}”
              </div>
            </div>
          ` : ''}

          <!-- Core Chapter Sections -->
          <div class="poro-sections-flow">
            ${chapter.sections.map((sec, idx) => `
              <div class="poro-section-block" id="sec-${idx}">
                ${sec.heading ? `<h2 class="poro-sec-heading">${sec.heading}</h2>` : ''}
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
        </article>
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
  let currentFontSize = 18; // default px
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
}
