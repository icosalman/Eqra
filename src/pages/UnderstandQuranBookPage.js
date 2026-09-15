// ============================================
// EQRA — Understand Quran Vocabulary Book Reader
// Interactive Digital Vocabulary Reader & Quizzes
// Strict Bilingual Separation: Pure Bengali in 'bn', Authentic English in 'en'
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { 
  UNDERSTAND_QURAN_METADATA, 
  BOOK_1_LISTS, 
  BOOK_2_LISTS, 
  UNDERSTAND_QURAN_QUIZZES 
} from '../data/understandQuranData.js';
import { 
  Icon3DVocab, 
  Icon3DPercentPie, 
  Icon3DSearch, 
  Icon3DCopy, 
  Icon3DTime 
} from '../components/Icons3D.js';
import { formatColorCodedQuran, bindTajweedInteractions } from '../utils/quranColors.js';

export function renderUnderstandQuranBookPage(params = {}) {
  const lang = getLang();
  const isBn = lang === 'bn';
  const bookKey = params.book || 'book-1';
  const listId = params.list || null;

  const meta = UNDERSTAND_QURAN_METADATA;
  const book = meta.books[bookKey] || meta.books['book-1'];
  const allLists = book.id === 'book-1' ? BOOK_1_LISTS : BOOK_2_LISTS;

  // Active list
  const activeList = listId 
    ? (allLists.find(l => l.id === listId) || allLists[0])
    : allLists[0];

  const currentListIdx = allLists.findIndex(l => l.id === activeList.id);
  const prevList = currentListIdx > 0 ? allLists[currentListIdx - 1] : null;
  const nextList = currentListIdx < allLists.length - 1 ? allLists[currentListIdx + 1] : null;


  const bookTitle = isBn ? book.titleBn : book.titleEn;
  const listTitle = isBn ? activeList.titleBn : activeList.titleEn;

  updateMeta({
    title: `${listTitle} — ${bookTitle} | EQRA`,
    description: isBn ? activeList.descriptionBn : activeList.descriptionEn,
    canonicalPath: `#/${lang}/understand-quran/${book.id}`
  });

  return `
    <div class="page understand-book-page">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <a href="#/${lang}/understand-quran">${isBn ? 'কুরআনের ৫০%-৬৫% শব্দ শিক্ষা' : 'Understand Quran'}</a>
          <span class="breadcrumbs-separator">/</span>
          <span style="font-weight: 600;">${bookTitle}</span>
          ${listId ? `<span class="breadcrumbs-separator">/</span><span class="breadcrumbs-current">${listTitle}</span>` : ''}
        </nav>

        <!-- Book Header Banner -->
        <div class="card" style="display: flex; gap: var(--space-6); align-items: center; flex-wrap: wrap; margin-bottom: var(--space-6); background: linear-gradient(135deg, var(--color-surface) 0%, rgba(2, 132, 199, 0.05) 100%); border: 1px solid var(--color-border); border-radius: var(--radius-2xl);">
          <!-- 3D Book Graphic -->
          <div style="flex-shrink: 0;">
            <div class="book-3d-mockup" style="width: 110px; height: 160px; background: ${book.coverGradient}; padding: 10px; border-radius: 6px; box-shadow: 0 8px 20px rgba(0,0,0,0.25); position: relative;">
              <div class="book-spine-sheen"></div>
              <div style="position: relative; z-index: 2; text-align: center; color: #FFFFFF;">
                <div style="font-size: 18px; margin-bottom: 2px;">📖</div>
                <div style="font-size: 10px; font-weight: 900; line-height: 1.2;">${book.targetPercent} QURAN</div>
                <div style="font-size: 8px; opacity: 0.85; margin-top: 4px;">${book.author}</div>
              </div>
              <div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; font-size: 8px; color: rgba(255,255,255,0.7); border-top: 1px solid rgba(255,255,255,0.2); padding-top: 4px;">
                Arabic 101
              </div>
            </div>
          </div>

          <!-- Book Metadata & Dual Mode Switcher -->
          <div style="flex: 1; min-width: 260px;">
            <div style="display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-1); flex-wrap: wrap;">
              <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; background: ${book.coverColor}; color: #FFFFFF; padding: 2px 8px; border-radius: 4px;">
                ${isBn ? `খণ্ড ${book.number}` : `BOOK ${book.number}`}
              </span>
              <span style="font-size: var(--text-xs); color: #0284C7; font-weight: 700;">
                ★ ${book.targetPercent} ${isBn ? 'কুরআনিক শব্দভাণ্ডার' : 'Quran Vocabulary'}
              </span>
              <span style="font-size: var(--text-xs); color: var(--color-text-muted);">
                • ${book.totalPages} ${isBn ? 'পৃষ্ঠা' : 'pages'}
              </span>
            </div>

            <h1 style="font-size: clamp(1.4rem, 3vw, 1.85rem); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2); line-height: 1.25;">
              ${bookTitle}
            </h1>

            <p style="font-size: var(--text-xs); font-style: italic; color: var(--color-text-secondary); margin-bottom: var(--space-3);">
              "${isBn ? book.subtitleBn : book.subtitleEn}"
            </p>

            <div style="display: flex; gap: var(--space-4); flex-wrap: wrap; font-size: var(--text-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">
              <div><strong>${isBn ? 'লেখক:' : 'Author:'}</strong> ${isBn ? book.authorBn : book.author}</div>
              <div><strong>${isBn ? 'প্রকাশনী:' : 'Publisher:'}</strong> ${book.publisher}</div>
              <div><strong>${isBn ? 'সংস্করণ:' : 'Edition:'}</strong> ${book.edition}</div>
            </div>

            <!-- Course Links & Actions -->
            <div style="display: flex; gap: var(--space-3); align-items: center; flex-wrap: wrap;">
              <a href="${book.youtubePlaylist}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size: var(--text-xs); display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--color-border); text-decoration: none;">
                <span>▶️</span>
                <span>${isBn ? 'অফিসিয়াল ভিডিও ক্লাস (Arabic 101)' : 'Official Video Class'}</span>
                <span>↗️</span>
              </a>
              <a href="#/${lang}/understand-quran" class="btn-ghost" style="font-size: var(--text-xs); padding: 6px 14px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--color-border);">
                <span>←</span>
                <span>${isBn ? 'সকল তালিকা' : 'All Lists'}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- DIGITAL READER MODE -->
        <div id="vocab-view-digital">
          <div style="display: grid; grid-template-columns: 280px 1fr; gap: var(--space-6); align-items: start;">
            
            <!-- Sidebar: Lists Navigation -->
            <aside class="card" style="padding: var(--space-4); max-height: 80vh; overflow-y: auto; position: sticky; top: 80px; border: 1px solid var(--color-border); border-radius: var(--radius-xl);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3); padding-bottom: var(--space-2); border-bottom: 1px solid var(--color-border);">
                <h3 style="font-size: var(--text-sm); font-weight: 700; color: var(--color-text-primary); margin: 0;">
                  📑 ${isBn ? 'অধ্যায় সূচিপত্র' : 'Course Lists'}
                </h3>
                <span style="font-size: 11px; color: var(--color-text-muted);">${allLists.length} ${isBn ? 'টি' : 'Lists'}</span>
              </div>

              <!-- Quick Filter -->
              <div style="margin-bottom: var(--space-3);">
                <input type="text" id="vocab-list-search" placeholder="${isBn ? 'অধ্যায় খুঁজুন...' : 'Filter lists...'}" style="width: 100%; padding: 6px 10px; font-size: 12px; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-surface-hover); color: var(--color-text-primary);" />
              </div>

              <nav style="display: flex; flex-direction: column; gap: 4px;" id="vocab-lists-nav">
                ${allLists.map(lst => {
                  const isActive = lst.id === activeList.id;
                  const title = isBn ? lst.titleBn : lst.titleEn;
                  return `
                    <a href="#/${lang}/understand-quran/${book.id}/${lst.id}" class="chapter-nav-item ${isActive ? 'active' : ''}" style="display: block; padding: 8px 10px; font-size: 12px; border-radius: var(--radius-md); text-decoration: none; color: ${isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)'}; background: ${isActive ? 'rgba(2, 132, 199, 0.08)' : 'transparent'}; font-weight: ${isActive ? '700' : '500'}; line-height: 1.4;">
                      ${title}
                    </a>
                  `;
                }).join('')}
              </nav>

              <!-- Switch Book Link -->
              <div style="margin-top: var(--space-4); padding-top: var(--space-3); border-top: 1px solid var(--color-border); text-align: center;">
                <a href="#/${lang}/understand-quran/${book.id === 'book-1' ? 'book-2' : 'book-1'}" style="font-size: 11px; color: #0284C7; font-weight: 700; text-decoration: none;">
                  ${book.id === 'book-1' 
                    ? (isBn ? '২য় খণ্ডে যান (৬৫% শব্দ) →' : 'Switch to Book 2 (65%) →')
                    : (isBn ? '← ১ম খণ্ডে যান (৫০% শব্দ)' : '← Switch to Book 1 (50%)')}
                </a>
              </div>
            </aside>

            <!-- Main Content Area: Active List -->
            <article>
              <!-- List Header -->
              <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); margin-bottom: var(--space-6);">
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-2);">
                  <span style="font-size: 11px; font-weight: 800; color: #0284C7; background: rgba(2, 132, 199, 0.1); padding: 2px 8px; border-radius: 999px;">
                    ${isBn ? `অধ্যায় ${activeList.listNumber}` : `LIST ${activeList.listNumber}`}
                  </span>
                  ${activeList.videoUrl ? `
                    <a href="${activeList.videoUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 11px; color: #EF4444; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
                      <span>▶</span> <span>${isBn ? 'ভিডিও ক্লাস দেখুন' : 'Watch Video Lesson'}</span>
                    </a>
                  ` : ''}
                </div>

                <h2 style="font-size: var(--text-2xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
                  ${listTitle}
                </h2>

                <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                  ${isBn ? activeList.descriptionBn : activeList.descriptionEn}
                </p>
              </div>

              <!-- Content Display: Word Cards Grid or Addendum Table -->
              ${activeList.combinations ? renderAddendumTable(activeList, lang) : renderWordCardsGrid(activeList, lang)}

              <!-- Interactive Quiz Widget -->
              ${renderQuizWidget(book.id, lang)}

              <!-- Prev / Next Navigation Footer -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-8); padding-top: var(--space-6); border-top: 1px solid var(--color-border); flex-wrap: wrap; gap: var(--space-3);">
                ${prevList ? `
                  <a href="#/${lang}/understand-quran/${book.id}/${prevList.id}" class="btn btn-secondary" style="font-size: var(--text-sm);">
                    ← ${isBn ? prevList.titleBn : prevList.titleEn}
                  </a>
                ` : `<div></div>`}

                <a href="#/${lang}/understand-quran" class="btn btn-secondary btn-sm" style="font-size: var(--text-xs);">
                  ${isBn ? 'কুরআন ৫০% সূচিপত্র' : 'Understand Quran Hub'}
                </a>

                ${nextList ? `
                  <a href="#/${lang}/understand-quran/${book.id}/${nextList.id}" class="btn btn-primary" style="font-size: var(--text-sm); background: #0284C7; border: none;">
                    ${isBn ? nextList.titleBn : nextList.titleEn} →
                  </a>
                ` : `<div></div>`}
              </div>
            </article>

          </div>
        </div>


      </div>
    </div>
  `;
}

// Render Word Cards Grid
function renderWordCardsGrid(list, lang) {
  const isBn = lang === 'bn';
  const words = list.words || [];

  return `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-4);">
      ${words.map((w, idx) => {
        const meaning = isBn ? w.meaningBn : w.meaningEn;
        const gender = isBn ? w.genderBn : w.genderEn;

        return `
          <div class="vocab-card">
            <div>
              <div class="vocab-card-header">
                <span style="font-size: 11px; font-weight: 700; color: var(--color-text-muted);">
                  #${idx + 1} ${gender ? `• ${gender}` : ''}
                </span>
                ${w.frequency ? `
                  <span class="vocab-freq-badge" title="${isBn ? 'কুরআনে পুনরাবৃত্তি সংখ্যা' : 'Frequency count in the Quran'}">
                    ${w.frequency} ${isBn ? 'বার' : 'times'}
                  </span>
                ` : ''}
              </div>

              <!-- Arabic Word in Indo-Pak Font & Color Coded Tajweed -->
              <div class="vocab-card-arabic-box">
                <div class="vocab-card-arabic" dir="rtl">
                  ${formatColorCodedQuran(w.arabic)}
                </div>
                <div style="font-size: var(--text-xs); font-style: italic; color: var(--color-text-secondary); margin-top: 4px;">
                  ${w.transliteration}
                </div>
              </div>

              <!-- Meaning -->
              <div style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-2); text-align: center;">
                ${meaning}
              </div>

              <!-- Quranic Example -->
              ${w.example ? `
                <div class="vocab-ayah-box">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 10px; font-weight: 700; color: #0284C7;">
                      📖 ${isBn ? w.example.surahNameBn : w.example.surahNameEn} (${w.example.surah}:${w.example.ayah})
                    </span>
                    <a href="#/${lang}/quran/${w.example.surah}#${w.example.ayah}" style="font-size: 10px; color: var(--color-primary); text-decoration: none; font-weight: 600;">
                      ${isBn ? 'কুরআনে দেখুন →' : 'View in Surah →'}
                    </a>
                  </div>
                  <div class="font-indopak" dir="rtl" style="font-size: 1.15rem; line-height: 1.8; color: var(--color-text-primary); text-align: right; margin-bottom: 4px;">
                    ${formatColorCodedQuran(w.example.arabic)}
                  </div>
                  <div style="font-size: 11px; color: var(--color-text-secondary); line-height: 1.4;">
                    ${isBn ? w.example.translationBn : w.example.translationEn}
                  </div>
                </div>
              ` : ''}
            </div>

            <!-- Action footer -->
            <div style="margin-top: var(--space-3); padding-top: var(--space-2); border-top: 1px dashed var(--color-border); display: flex; justify-content: flex-end;">
              <button class="btn-ghost vocab-copy-btn" data-copy="${w.arabic} — ${meaning}" title="${isBn ? 'শব্দ কপি করুন' : 'Copy word'}" style="font-size: 11px; padding: 2px 6px;">
                <span class="icon-3d-wrap" style="width: 14px; height: 14px;">${Icon3DCopy}</span>
                <span>${isBn ? 'কপি' : 'Copy'}</span>
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Render Addendum Table for 'Maa'
function renderAddendumTable(list, lang) {
  const isBn = lang === 'bn';
  const combos = list.combinations || [];

  return `
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); overflow: hidden; margin-bottom: var(--space-6);">
      <div style="padding: var(--space-4); background: var(--color-surface-hover); border-bottom: 1px solid var(--color-border); font-weight: 700; font-size: var(--text-sm); color: var(--color-text-primary);">
        ${isBn ? "কুরআনে 'মা' (مَا)-এর সংযুক্ত রূপসমূহের তালিকা" : "Attached Combinations of Mā (مَا) in the Quran"}
      </div>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: var(--text-sm); text-align: left;">
          <thead>
            <tr style="background: var(--color-surface-hover); border-bottom: 1px solid var(--color-border);">
              <th style="padding: 10px 14px; color: var(--color-text-secondary);">${isBn ? 'আরবি রূপ' : 'Arabic'}</th>
              <th style="padding: 10px 14px; color: var(--color-text-secondary);">${isBn ? 'উচ্চারণ' : 'Transliteration'}</th>
              <th style="padding: 10px 14px; color: var(--color-text-secondary);">${isBn ? 'গঠন সূত্র' : 'Combination Formula'}</th>
              <th style="padding: 10px 14px; color: var(--color-text-secondary);">${isBn ? 'অর্থ' : 'Meaning'}</th>
              <th style="padding: 10px 14px; color: var(--color-text-secondary);">${isBn ? 'কুরআনের উদাহরণ' : 'Quranic Example'}</th>
            </tr>
          </thead>
          <tbody>
            ${combos.map((c, i) => `
              <tr style="border-bottom: 1px solid var(--color-border); background: ${i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)'};">
                <td style="padding: 10px 14px; font-family: var(--font-indopak); font-size: 1.3rem; font-weight: 700; color: #0284C7;" dir="rtl">
                  ${formatColorCodedQuran(c.arabic)}
                </td>
                <td style="padding: 10px 14px; font-style: italic; color: var(--color-text-secondary);">${c.transliteration}</td>
                <td style="padding: 10px 14px; font-weight: 600; color: var(--color-text-primary);" dir="rtl">${c.formula}</td>
                <td style="padding: 10px 14px; font-weight: 600; color: var(--color-text-primary);">${isBn ? c.meaningBn : c.meaningEn}</td>
                <td style="padding: 10px 14px;">
                  <div class="font-indopak" dir="rtl" style="font-size: 1.1rem; color: var(--color-text-primary); margin-bottom: 2px;">
                    ${formatColorCodedQuran(c.exampleArabic)}
                  </div>
                  <div style="font-size: 11px; color: var(--color-text-muted);">
                    ${isBn ? c.exampleTranslationBn : c.exampleTranslationEn}
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Render Interactive Quiz Widget
function renderQuizWidget(bookId, lang) {
  const isBn = lang === 'bn';
  const quizzes = UNDERSTAND_QURAN_QUIZZES[bookId] || [];
  if (quizzes.length === 0) return '';

  return `
    <div class="vocab-quiz-box">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: var(--space-3);">
        <span style="font-size: 20px;">🧠</span>
        <h3 style="font-size: var(--text-lg); font-weight: 800; color: var(--color-text-primary); margin: 0;">
          ${isBn ? 'আত্মযাচাই কুইজ' : 'Self-Testing Quiz Checkpoint'}
        </h3>
      </div>
      <p style="font-size: var(--text-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">
        ${isBn ? 'সঠিক উত্তরে ক্লিক করে যাচাই করুন আপনি বিষয়টি আয়ত্ত করতে পেরেছেন কি না:' : 'Click the correct option to verify your understanding:'}
      </p>

      <div style="display: flex; flex-direction: column; gap: var(--space-4);">
        ${quizzes.map((q, qIdx) => {
          const question = isBn ? q.questionBn : q.questionEn;
          const options = isBn ? q.optionsBn : q.optionsEn;

          return `
            <div class="card" style="padding: var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-surface-hover);">
              <div style="font-weight: 700; font-size: var(--text-sm); color: var(--color-text-primary); margin-bottom: var(--space-3);">
                ${qIdx + 1}. ${question}
              </div>
              <div class="vocab-quiz-options" data-correct="${q.correctIndex}">
                ${options.map((opt, optIdx) => `
                  <button class="vocab-quiz-option" data-opt-index="${optIdx}">
                    <span>${opt}</span>
                  </button>
                `).join('')}
              </div>
              <div class="vocab-quiz-feedback" style="margin-top: 8px; font-size: 12px; font-weight: 600; display: none;"></div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

export function bindUnderstandQuranBookEvents() {
  bindTajweedInteractions();


  // Sidebar list search
  const listSearch = document.getElementById('vocab-list-search');
  if (listSearch) {
    listSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll('#vocab-lists-nav .chapter-nav-item');
      items.forEach(it => {
        const txt = it.innerText.toLowerCase();
        it.style.display = txt.includes(q) ? 'block' : 'none';
      });
    });
  }

  // Copy word button
  const copyBtns = document.querySelectorAll('.vocab-copy-btn');
  copyBtns.forEach(b => {
    b.addEventListener('click', async () => {
      const txt = b.getAttribute('data-copy');
      if (txt) {
        try {
          await navigator.clipboard.writeText(txt);
          const isBnLang = getLang() === 'bn';
          b.innerHTML = `<span style="color: #059669;">✓ ${isBnLang ? 'কপি হয়েছে!' : 'Copied!'}</span>`;
          setTimeout(() => { b.innerHTML = orig; }, 1600);
        } catch (err) {
          console.error('Clipboard copy error', err);
        }
      }
    });
  });

  // Quiz buttons
  const quizBoxes = document.querySelectorAll('.vocab-quiz-options');
  quizBoxes.forEach(box => {
    const correctIdx = parseInt(box.getAttribute('data-correct'), 10);
    const feedback = box.nextElementSibling;
    const options = box.querySelectorAll('.vocab-quiz-option');

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        const chosen = parseInt(opt.getAttribute('data-opt-index'), 10);
        options.forEach(o => {
          o.disabled = true;
          o.classList.remove('correct', 'incorrect');
        });

        if (chosen === correctIdx) {
          opt.classList.add('correct');
          if (feedback) {
            feedback.style.display = 'block';
            feedback.style.color = '#059669';
            feedback.innerText = '✓ ' + (getLang() === 'bn' ? 'সঠিক উত্তর! মাশাআল্লাহ।' : 'Correct answer! Well done.');
          }
        } else {
          opt.classList.add('incorrect');
          options[correctIdx].classList.add('correct');
          if (feedback) {
            feedback.style.display = 'block';
            feedback.style.color = '#DC2626';
            feedback.innerText = '✖ ' + (getLang() === 'bn' ? 'সঠিক নয়। সঠিক উত্তরটি সবুজ চিহ্নিত করা হয়েছে।' : 'Incorrect. The correct option is highlighted in green.');
          }
        }
      });
    });
  });
}
