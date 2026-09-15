// ============================================
// EQRA — Faith & Logic Book Page & Reader
// Supporting Paradoxical Sajid 1 & 2
// Dual Modes: Interactive Digital Reader + Original PDF Viewer
// ============================================

import { t, getLang } from '../i18n.js';
import { getFaithLogicBook, getFaithLogicChapter } from '../data/faithLogicData.js';
import { 
  Icon3DLogic, 
  Icon3DBookSajid1, 
  Icon3DBookSajid2, 
  Icon3DSearch, 
  Icon3DBookmark 
} from '../components/Icons3D.js';

export function renderFaithLogicBookPage(params = {}) {
  const lang = getLang();
  const isBn = lang === 'bn';
  const bookId = params.book || 'sajid-1';
  const chapterId = params.chapter || null;

  const book = getFaithLogicBook(bookId);
  if (!book) {
    return `
      <div class="page" style="text-align: center; padding: var(--space-16);">
        <h2>${isBn ? 'বইটি খুঁজে পাওয়া যায়নি' : 'Book Not Found'}</h2>
        <p><a href="#/${lang}/faith-and-logic" class="btn-primary" style="margin-top: var(--space-4);">${isBn ? 'ইসলাম ও যুক্তি সূচিতে ফিরুন' : 'Back to Faith & Logic'}</a></p>
      </div>
    `;
  }

  // Active chapter
  const activeChapter = chapterId 
    ? (book.chapters.find(c => c.id === chapterId) || book.chapters[0])
    : book.chapters[0];

  const currentChIndex = book.chapters.findIndex(c => c.id === activeChapter.id);
  const prevChapter = currentChIndex > 0 ? book.chapters[currentChIndex - 1] : null;
  const nextChapter = currentChIndex < book.chapters.length - 1 ? book.chapters[currentChIndex + 1] : null;

  // Check URL query for mode
  const hash = window.location.hash;
  const initialMode = hash.includes('mode=pdf') ? 'pdf' : 'digital';

  const isSajid1 = book.id === 'sajid-1';
  const bookIcon = isSajid1 ? Icon3DBookSajid1 : Icon3DBookSajid2;

  return `
    <div class="page faith-book-page">
      <!-- Breadcrumb Navigation -->
      <nav class="breadcrumb-nav" style="display: flex; align-items: center; gap: 8px; font-size: var(--text-xs); color: var(--color-text-muted); margin-bottom: var(--space-4);">
        <a href="#/${lang}/" style="color: inherit; text-decoration: none;">${t('navHome')}</a>
        <span>›</span>
        <a href="#/${lang}/faith-and-logic" style="color: inherit; text-decoration: none;">${isBn ? 'ইসলাম ও যুক্তি' : 'Faith & Logic'}</a>
        <span>›</span>
        <span style="color: var(--color-text-primary); font-weight: 600;">${isBn ? book.titleBangla : book.titleEnglish}</span>
        ${chapterId ? `<span>›</span> <span style="color: var(--color-quran);">${isBn ? activeChapter.titleBangla : activeChapter.titleEnglish}</span>` : ''}
      </nav>

      <!-- Book Header Banner -->
      <div class="card" style="display: flex; flex-direction: row; gap: var(--space-6); align-items: center; flex-wrap: wrap; margin-bottom: var(--space-6); background: linear-gradient(135deg, var(--color-surface) 0%, rgba(5, 150, 105, 0.05) 100%);">
        <!-- 3D Mini Mockup -->
        <div style="flex-shrink: 0;">
          <div class="book-3d-mockup" style="width: 110px; height: 160px; background: ${book.coverGradient}; padding: 10px;">
            <div class="book-spine-sheen"></div>
            <div class="book-gold-ribbon" style="height: 24px; width: 10px; right: 10px;"></div>
            <div style="position: relative; z-index: 2; text-align: center;">
              <div style="width: 32px; height: 32px; margin: 0 auto 4px;">${bookIcon}</div>
              <div style="font-size: 11px; font-weight: 800; line-height: 1.2;">${book.titleBangla}</div>
              <div style="font-size: 8px; opacity: 0.8; margin-top: 2px;">${book.author}</div>
            </div>
            <div style="position: relative; z-index: 2; font-size: 8px; text-align: center; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 4px;">
              ${book.publisher}
            </div>
          </div>
        </div>

        <!-- Book Meta -->
        <div style="flex: 1; min-width: 260px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: var(--space-1); flex-wrap: wrap;">
            <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; background: ${book.coverColor}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">
              PART ${book.number}
            </span>
            <span style="font-size: var(--text-xs); color: #F59E0B; font-weight: 700;">★ ${book.rating} (${book.readerCount} ${isBn ? 'পাঠক' : 'readers'})</span>
          </div>

          <h1 style="font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2); line-height: 1.2;">
            ${isBn ? book.titleBangla : book.titleEnglish}
          </h1>

          <p style="font-size: var(--text-xs); font-style: italic; color: var(--color-quran-dark); margin-bottom: var(--space-3); font-weight: 600;">
            "${isBn ? book.taglineBangla : book.taglineEnglish}"
          </p>

          <div style="display: flex; gap: var(--space-4); flex-wrap: wrap; font-size: var(--text-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">
            <div><strong>${isBn ? 'লেখক:' : 'Author:'}</strong> ${book.author}</div>
            <div><strong>${isBn ? 'প্রকাশনী:' : 'Publisher:'}</strong> ${book.publisher}</div>
            <div><strong>${isBn ? 'পৃষ্ঠা:' : 'Pages:'}</strong> ${book.totalPages}</div>
            <div><strong>${isBn ? 'অধ্যায়:' : 'Chapters:'}</strong> ${book.totalChapters}</div>
          </div>

          <!-- Dual Mode Switcher & Download -->
          <div style="display: flex; gap: var(--space-3); align-items: center; flex-wrap: wrap;">
            <div class="reader-mode-tabs" role="tablist">
              <button class="reader-mode-tab ${initialMode === 'digital' ? 'active' : ''}" id="tab-btn-digital" data-mode="digital">
                <span>📖</span>
                <span>${isBn ? 'ডিজিটাল রিডার' : 'Digital Reader'}</span>
              </button>
              <button class="reader-mode-tab ${initialMode === 'pdf' ? 'active' : ''}" id="tab-btn-pdf" data-mode="pdf">
                <span>📄</span>
                <span>${isBn ? 'অরিজিনাল PDF ভিউয়ার' : 'Original PDF'}</span>
              </button>
            </div>

            <a href="${book.pdfUrl}" download="${book.id}.pdf" class="btn-ghost" style="font-size: var(--text-xs); padding: 6px 14px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--color-border);" title="${isBn ? 'সম্পূর্ণ বইয়ের PDF ডাউনলোড করুন' : 'Download Full Book PDF'}">
              <span>📥</span>
              <span>${isBn ? 'PDF ডাউনলোড' : 'Download PDF'}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- MAIN CONTENT: DUAL VIEW CONTAINER -->
      <div id="view-digital-mode" style="${initialMode === 'digital' ? 'display: block;' : 'display: none;'}">
        <div style="display: grid; grid-template-columns: 280px 1fr; gap: var(--space-6); align-items: start;">
          
          <!-- Chapter Navigation Sidebar -->
          <aside class="card" style="padding: var(--space-4); max-height: 80vh; overflow-y: auto; position: sticky; top: 80px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3); padding-bottom: var(--space-2); border-bottom: 1px solid var(--color-border-light);">
              <h3 style="font-size: var(--text-sm); font-weight: 700; color: var(--color-text-primary);">
                📑 ${isBn ? 'অধ্যায় সূচিপত্র' : 'Chapters Index'}
              </h3>
              <span style="font-size: 11px; color: var(--color-text-muted);">${book.totalChapters} ${isBn ? 'টি' : ''}</span>
            </div>

            <div style="margin-bottom: var(--space-3);">
              <input type="text" id="chapter-quick-filter" placeholder="${isBn ? 'অধ্যায় খুঁজুন...' : 'Filter chapters...'}" style="width: 100%; padding: 6px 10px; font-size: 12px; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-bg-alt); color: var(--color-text-primary);" />
            </div>

            <ul id="chapters-list" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 3px;">
              ${book.chapters.map(ch => {
                const isActive = ch.id === activeChapter.id;
                return `
                  <li>
                    <a href="#/${lang}/faith-and-logic/${book.id}/${ch.id}" class="chapter-nav-item ${isActive ? 'active' : ''}" data-title="${(ch.titleBangla + ' ' + ch.titleEnglish).toLowerCase()}" style="display: flex; align-items: flex-start; gap: 8px; padding: 8px 10px; border-radius: var(--radius-md); text-decoration: none; font-size: var(--text-xs); color: ${isActive ? 'var(--color-quran-dark)' : 'var(--color-text-secondary)'}; background: ${isActive ? 'var(--color-quran-bg)' : 'transparent'}; font-weight: ${isActive ? '700' : '500'}; transition: all var(--transition-fast);">
                      <span style="color: ${isActive ? 'var(--color-quran)' : 'var(--color-text-muted)'}; font-weight: 700; min-width: 18px;">#${ch.number}</span>
                      <span style="flex: 1; line-height: 1.4;">${isBn ? ch.titleBangla : ch.titleEnglish}</span>
                    </a>
                  </li>
                `;
              }).join('')}
            </ul>
          </aside>

          <!-- Active Chapter Reader Content -->
          <article class="card" style="padding: var(--space-8); min-height: 70vh;">
            <!-- Chapter Header Bar -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-4); padding-bottom: var(--space-4); border-bottom: 1px solid var(--color-border-light); flex-wrap: wrap; gap: var(--space-3);">
              <div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: var(--space-2);">
                  <span style="font-size: 11px; font-weight: 800; background: var(--color-quran-bg); color: var(--color-quran-dark); padding: 3px 10px; border-radius: var(--radius-full);">
                    ${isBn ? `অধ্যায় #${activeChapter.number}` : `Chapter #${activeChapter.number}`}
                  </span>
                  <span style="font-size: 11px; color: var(--color-text-muted);">⏱️ ${activeChapter.readTimeMinutes} ${isBn ? 'মিনিট পঠন' : 'min read'}</span>
                  <span style="font-size: 11px; color: var(--color-text-muted);">📄 ${isBn ? `বইয়ের পৃষ্ঠা: ${activeChapter.page}` : `Book Page: ${activeChapter.page}`}</span>
                </div>

                <h2 style="font-size: clamp(1.4rem, 2.5vw, 1.85rem); font-weight: 800; color: var(--color-text-primary); line-height: 1.3;">
                  ${isBn ? activeChapter.titleBangla : activeChapter.titleEnglish}
                </h2>
              </div>

              <!-- Reader Font Controls -->
              <div style="display: inline-flex; align-items: center; gap: 4px; background: var(--color-bg-alt); padding: 2px 6px; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                <button id="font-dec-btn" class="btn-ghost" style="padding: 4px 8px; font-size: 12px; font-weight: 700;" title="Decrease Font">A-</button>
                <span id="font-size-label" style="font-size: 11px; font-weight: 600; min-width: 36px; text-align: center;">100%</span>
                <button id="font-inc-btn" class="btn-ghost" style="padding: 4px 8px; font-size: 12px; font-weight: 700;" title="Increase Font">A+</button>
              </div>
            </div>

            <!-- Chapter Summary -->
            <div style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7; margin-bottom: var(--space-6); background: rgba(5, 150, 105, 0.04); padding: var(--space-4) var(--space-5); border-radius: var(--radius-lg); border-left: 4px solid var(--color-quran);">
              <strong>${isBn ? 'অধ্যায়ের প্রেক্ষাপট:' : 'Context & Background:'}</strong> ${activeChapter.summary}
            </div>

            <!-- Debater's Logic Matrix Box (The "Amazing" Factor) -->
            ${activeChapter.logicMatrix ? `
              <div class="logic-matrix-card">
                <div class="logic-matrix-title">
                  <span>⚖️</span>
                  <span>${isBn ? 'যুক্তির সারসংক্ষেপ — লজিক ম্যাট্রিক্স (Logic Matrix)' : 'Debater\'s Logic Matrix Summary'}</span>
                </div>

                <!-- Allegation / Doubt -->
                <div class="logic-item">
                  <div class="logic-badge-question">
                    <span>❓</span> <span>${isBn ? 'সংশয় / অভিযোগ (The Allegation):' : 'The Allegation / Doubt:'}</span>
                  </div>
                  <div class="logic-text" style="color: #991B1B; font-weight: 500; margin-top: 4px;">
                    ${activeChapter.logicMatrix.allegation}
                  </div>
                </div>

                <!-- Core Argument -->
                <div class="logic-item">
                  <div class="logic-badge-answer">
                    <span>💡</span> <span>${isBn ? 'সাজিদের মূল যুক্তি (Core Argument):' : 'Sajid\'s Rational Argument:'}</span>
                  </div>
                  <div class="logic-text" style="color: var(--color-text-primary); font-weight: 600; margin-top: 4px;">
                    ${activeChapter.logicMatrix.coreArgument}
                  </div>
                </div>

                <!-- Evidence -->
                <div class="logic-item">
                  <div class="logic-badge-evidence">
                    <span>📜</span> <span>${isBn ? 'দলিল ও তথ্যসূত্র (Evidence & References):' : 'Quranic & Scientific Evidence:'}</span>
                  </div>
                  <div class="logic-text" style="color: #3730A3; font-style: italic; margin-top: 4px;">
                    ${activeChapter.logicMatrix.evidence}
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- Story Narrative Dialogue -->
            <div id="chapter-reader-body" style="font-size: 1.05rem; line-height: 1.9; color: var(--color-text-primary); margin-bottom: var(--space-8);">
              <h4 style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-3); display: flex; align-items: center; gap: 8px;">
                <span>💬</span> <span>${isBn ? 'মূল কথোপকথন ও যুক্তিখণ্ডন' : 'Dialogue & Rational Discourse'}</span>
              </h4>

              <div style="background: var(--color-bg-alt); padding: var(--space-6); border-radius: var(--radius-xl); border: 1px solid var(--color-border); font-family: var(--font-bengali, inherit); white-space: pre-line; line-height: 2;">
                ${activeChapter.dialogueSample || activeChapter.quote}
              </div>

              <!-- Memorable Quote -->
              <blockquote style="margin: var(--space-6) 0; padding: var(--space-4) var(--space-6); border-left: 4px solid var(--color-quran); background: var(--color-surface); font-style: italic; font-size: var(--text-base); color: var(--color-text-primary); border-radius: 0 var(--radius-lg) var(--radius-lg) 0; box-shadow: var(--shadow-xs);">
                "${activeChapter.quote}"
              </blockquote>
            </div>

            <!-- Next & Previous Chapter Navigation -->
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: var(--space-6); border-top: 1px solid var(--color-border); gap: var(--space-4); flex-wrap: wrap;">
              ${prevChapter ? `
                <a href="#/${lang}/faith-and-logic/${book.id}/${prevChapter.id}" class="btn-secondary" style="font-size: var(--text-xs); text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                  <span>←</span>
                  <span>${isBn ? 'পূর্ববর্তী অধ্যায়' : 'Previous Chapter'}</span>
                </a>
              ` : `<div></div>`}

              <a href="#/${lang}/faith-and-logic/${book.id}?mode=pdf" class="btn-ghost" style="font-size: var(--text-xs); text-decoration: none; border: 1px solid var(--color-border);">
                📄 ${isBn ? 'এই অধ্যায়টি PDF-এ দেখুন' : 'View in PDF'}
              </a>

              ${nextChapter ? `
                <a href="#/${lang}/faith-and-logic/${book.id}/${nextChapter.id}" class="btn-primary" style="font-size: var(--text-xs); text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                  <span>${isBn ? 'পরবর্তী অধ্যায়' : 'Next Chapter'}</span>
                  <span>→</span>
                </a>
              ` : `<div></div>`}
            </div>
          </article>
        </div>
      </div>

      <!-- MAIN CONTENT: ORIGINAL PDF VIEWER CONTAINER -->
      <div id="view-pdf-mode" style="${initialMode === 'pdf' ? 'display: block;' : 'display: none;'}">
        <div class="card" style="padding: var(--space-4); margin-bottom: var(--space-6);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-4); flex-wrap: wrap; gap: var(--space-2);">
            <div>
              <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); display: flex; align-items: center; gap: 8px;">
                <span>📄</span>
                <span>${isBn ? `${book.titleBangla} — অরিজিনাল PDF ভিউয়ার` : `${book.titleEnglish} — Original PDF`}</span>
              </h3>
              <p style="font-size: var(--text-xs); color: var(--color-text-muted);">
                ${isBn ? 'বইটির সম্পূর্ণ মূল স্ক্যানকৃত বা মুদ্রিত পৃষ্ঠা এখানে ব্রাউজারেই সরাসরি পড়ুন' : 'Read the complete original publication directly inside your browser'}
              </p>
            </div>

            <div style="display: flex; gap: var(--space-2);">
              <a href="${book.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size: var(--text-xs); padding: 8px 14px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                <span>↗️</span>
                <span>${isBn ? 'নতুন ট্যাবে খুলুন' : 'Open in New Tab'}</span>
              </a>
              <a href="${book.pdfUrl}" download="${book.id}.pdf" class="btn-primary" style="font-size: var(--text-xs); padding: 8px 14px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                <span>📥</span>
                <span>${isBn ? 'ডাউনলোড PDF' : 'Download PDF'}</span>
              </a>
            </div>
          </div>

          <!-- Embedded PDF Iframe -->
          <div style="position: relative; width: 100%; border-radius: var(--radius-xl); overflow: hidden; background: #27272A;">
            <iframe 
              id="book-pdf-iframe" 
              src="${book.pdfUrl}#toolbar=1&navpanes=1" 
              class="pdf-viewer-frame" 
              title="${book.titleBangla}">
            </iframe>
          </div>

          <!-- PDF Fallback Note -->
          <div style="margin-top: var(--space-4); font-size: var(--text-xs); color: var(--color-text-muted); text-align: center;">
            ${isBn 
              ? 'যদি আপনার ব্রাউজারে PDF ফ্রেমটি সরাসরি লোড না হয়, তবে উপরের "নতুন ট্যাবে খুলুন" বা "ডাউনলোড PDF" বাটনে ক্লিক করুন।' 
              : 'If your browser does not render PDF frames inline, click "Open in New Tab" or "Download PDF" above.'}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function bindFaithLogicBookEvents() {
  const digitalView = document.getElementById('view-digital-mode');
  const pdfView = document.getElementById('view-pdf-mode');
  const tabDigital = document.getElementById('tab-btn-digital');
  const tabPdf = document.getElementById('tab-btn-pdf');

  // Mode switching
  function setMode(mode) {
    if (mode === 'pdf') {
      if (digitalView) digitalView.style.display = 'none';
      if (pdfView) pdfView.style.display = 'block';
      tabDigital?.classList.remove('active');
      tabPdf?.classList.add('active');
    } else {
      if (digitalView) digitalView.style.display = 'block';
      if (pdfView) pdfView.style.display = 'none';
      tabPdf?.classList.remove('active');
      tabDigital?.classList.add('active');
    }
  }

  tabDigital?.addEventListener('click', () => setMode('digital'));
  tabPdf?.addEventListener('click', () => setMode('pdf'));

  // Font Size Adjuster in Digital Reader
  let currentZoom = 100;
  const readerBody = document.getElementById('chapter-reader-body');
  const zoomLabel = document.getElementById('font-size-label');
  const decBtn = document.getElementById('font-dec-btn');
  const incBtn = document.getElementById('font-inc-btn');

  decBtn?.addEventListener('click', () => {
    if (currentZoom > 80) {
      currentZoom -= 10;
      applyZoom();
    }
  });

  incBtn?.addEventListener('click', () => {
    if (currentZoom < 160) {
      currentZoom += 10;
      applyZoom();
    }
  });

  function applyZoom() {
    if (readerBody) {
      readerBody.style.fontSize = `${(currentZoom / 100) * 1.05}rem`;
    }
    if (zoomLabel) {
      zoomLabel.textContent = `${currentZoom}%`;
    }
  }

  // Sidebar chapter filter
  const filterInput = document.getElementById('chapter-quick-filter');
  const chaptersList = document.getElementById('chapters-list');

  filterInput?.addEventListener('input', () => {
    const q = (filterInput.value || '').trim().toLowerCase();
    if (!chaptersList) return;

    chaptersList.querySelectorAll('li').forEach(li => {
      const a = li.querySelector('a');
      const title = a?.getAttribute('data-title') || '';
      if (!q || title.includes(q)) {
        li.style.display = 'block';
      } else {
        li.style.display = 'none';
      }
    });
  });
}
