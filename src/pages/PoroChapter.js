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

        <!-- Dual Mode Switcher Bar -->
        <div class="card" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6); padding: 8px 14px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); flex-wrap: wrap; gap: 8px;">
          <div class="reader-mode-tabs" role="tablist">
            <button type="button" class="reader-mode-tab ${initialMode === 'digital' ? 'active' : ''}" id="poro-tab-digital">
              <span>📖</span>
              <span>${lang === 'bn' ? 'ডিজিটাল রিডার' : 'Digital Reader'}</span>
            </button>
            <button type="button" class="reader-mode-tab ${initialMode === 'pdf' ? 'active' : ''}" id="poro-tab-pdf">
              <span>📄</span>
              <span>${lang === 'bn' ? `মূল মুদ্রিত PDF (পৃষ্ঠা ${chapter.pages})` : `Original PDF (p. ${chapter.pages})`}</span>
            </button>
          </div>

          <div style="display: flex; gap: 6px; align-items: center;">
            <a href="/books/poro.pdf#page=${startPage}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" style="border: 1px solid var(--color-border); font-size: 11px; padding: 4px 10px;">
              <span>↗️</span> <span>${lang === 'bn' ? 'নতুন ট্যাবে PDF' : 'New Tab'}</span>
            </a>
            <a href="/books/poro.pdf" download="poro.pdf" class="btn btn-secondary btn-sm" style="font-size: 11px; padding: 4px 10px;">
              <span>📥</span> <span>${lang === 'bn' ? 'ডাউনলোড' : 'Download'}</span>
            </a>
          </div>
        </div>

        <!-- MODE 1: DIGITAL CHAPTER ARTICLE -->
        <div id="poro-digital-view" style="${initialMode === 'digital' ? 'display: block;' : 'display: none;'}">
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
          </article>
        </div>

        <!-- MODE 2: ORIGINAL BOOK SCAN PDF EMBED -->
        <div id="poro-pdf-view" style="${initialMode === 'pdf' ? 'display: block;' : 'display: none;'}">
          <div class="card" style="padding: var(--space-4); margin-bottom: var(--space-6); background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3); flex-wrap: wrap; gap: 8px;">
              <div>
                <div style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); display: flex; align-items: center; gap: 8px;">
                  <span>📄</span> <span>${chapter.titleBangla}</span>
                  <span style="font-size: 11px; font-weight: 600; color: var(--color-quran); background: var(--color-quran-bg); padding: 2px 8px; border-radius: var(--radius-full);">
                    পৃষ্ঠা ${chapter.pages}
                  </span>
                </div>
                <div style="font-size: 11px; color: var(--color-text-muted); margin-top: 2px;">
                  ১৮৪ পৃষ্ঠার মূল মুদ্রিত বই • সরোবর প্রকাশন (সংকলন: ওমর আল জাবির)
                </div>
              </div>

              <div style="display: flex; gap: 6px;">
                <a href="/books/poro.pdf#page=${startPage}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
                  <span>↗️</span> <span>${lang === 'bn' ? 'নতুন ট্যাবে খুলুন' : 'Open in New Tab'}</span>
                </a>
                <a href="/books/poro.pdf" download="poro.pdf" class="btn btn-sm btn-primary">
                  <span>📥</span> <span>${lang === 'bn' ? 'সম্পূর্ণ বই ডাউনলোড' : 'Download Book'}</span>
                </a>
              </div>
            </div>

            <!-- Responsive PDF Iframe Container -->
            <div style="position: relative; width: 100%; border-radius: var(--radius-xl); overflow: hidden; background: #27272A; box-shadow: var(--shadow-lg);">
              <iframe 
                id="poro-chapter-iframe" 
                src="/books/poro.pdf#page=${startPage}&toolbar=1&navpanes=1" 
                class="pdf-viewer-frame" 
                style="width: 100%; height: 85vh; border: none;" 
                title="${chapter.titleBangla}">
              </iframe>
            </div>

            <!-- Fallback note -->
            <div style="margin-top: var(--space-3); font-size: 11px; color: var(--color-text-muted); text-align: center;">
              ${lang === 'bn' 
                ? 'যদি ব্রাউজারে ফ্রেম লোড হতে সমস্যা হয়, তবে ওপরের "নতুন ট্যাবে খুলুন" বাটনে ক্লিক করে সরাসরি PDF ওপেন করুন।' 
                : 'If your browser does not embed PDF preview, click "Open in New Tab" above.'}
            </div>

            <!-- Chapter Navigation in PDF Mode -->
            <nav class="poro-ch-nav-footer" style="margin-top: var(--space-6);">
              ${prevChapter ? `
                <a href="#/${lang}/poro/${prevChapter.id}?mode=pdf" class="poro-nav-prev-card">
                  <span class="nav-dir">← ${lang === 'bn' ? 'পূর্ববর্তী অধ্যায় (PDF)' : 'Previous Chapter'}</span>
                  <span class="nav-title">${lang === 'bn' ? prevChapter.titleBangla : prevChapter.titleEnglish}</span>
                </a>
              ` : '<div style="flex:1;"></div>'}

              <div class="poro-nav-center">
                <a href="#/${lang}/poro" class="btn btn-secondary btn-sm">
                  <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DPoro}</span>
                  <span>${lang === 'bn' ? 'সূচিপত্র' : 'All Chapters'}</span>
                </a>
              </div>

              ${nextChapter ? `
                <a href="#/${lang}/poro/${nextChapter.id}?mode=pdf" class="poro-nav-next-card">
                  <span class="nav-dir">${lang === 'bn' ? 'পরবর্তী অধ্যায় (PDF)' : 'Next Chapter'} →</span>
                  <span class="nav-title">${lang === 'bn' ? nextChapter.titleBangla : nextChapter.titleEnglish}</span>
                </a>
              ` : '<div style="flex:1;"></div>'}
            </nav>
          </div>
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

  // Dual Mode Switcher
  const digitalTab = document.getElementById('poro-tab-digital');
  const pdfTab = document.getElementById('poro-tab-pdf');
  const digitalView = document.getElementById('poro-digital-view');
  const pdfView = document.getElementById('poro-pdf-view');

  digitalTab?.addEventListener('click', () => {
    digitalTab.classList.add('active');
    pdfTab?.classList.remove('active');
    if (digitalView) digitalView.style.display = 'block';
    if (pdfView) pdfView.style.display = 'none';
  });

  pdfTab?.addEventListener('click', () => {
    pdfTab.classList.add('active');
    digitalTab?.classList.remove('active');
    if (digitalView) digitalView.style.display = 'none';
    if (pdfView) pdfView.style.display = 'block';
  });

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
