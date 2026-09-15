// ============================================
// EQRA — Faith & Logic (ইসলাম ও যুক্তি) Hub Page
// Featuring 'প্যারাডক্সিক্যাল সাজিদ ১' & 'প্যারাডক্সিক্যাল সাজিদ ২'
// ============================================

import { t, getLang } from '../i18n.js';
import { getFaithLogicBooks, searchFaithLogic } from '../data/faithLogicData.js';
import { 
  Icon3DLogic, 
  Icon3DBookSajid1, 
  Icon3DBookSajid2, 
  Icon3DSearch,
  Icon3DBookmark 
} from '../components/Icons3D.js';

export function renderFaithLogicIndex() {
  const lang = getLang();
  const books = getFaithLogicBooks();
  const isBn = lang === 'bn';

  return `
    <div class="page faith-logic-page">
      <!-- Hero Banner -->
      <section class="faith-logic-hero">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(5, 150, 105, 0.1); color: var(--color-quran-dark); padding: 6px 16px; border-radius: var(--radius-full); font-size: var(--text-xs); font-weight: 700; margin-bottom: var(--space-4);">
          <span style="font-size: 16px;">⚖️</span>
          <span>${isBn ? 'বুদ্ধিবৃত্তিক ইসলামী জ্ঞানতত্ত্ব ও দর্শন' : 'Intellectual Islamic Epistemology & Logic'}</span>
        </div>

        <div style="display: flex; justify-content: center; margin-bottom: var(--space-3);">
          <div style="width: 72px; height: 72px; filter: drop-shadow(0 10px 15px rgba(5,150,105,0.3));">
            ${Icon3DLogic}
          </div>
        </div>

        <h1 class="font-bold" style="font-size: clamp(1.8rem, 4vw, 2.75rem); color: var(--color-text-primary); margin-bottom: var(--space-3); line-height: 1.2;">
          ${isBn ? 'ইসলাম ও যুক্তি' : 'Faith & Logic'}
        </h1>
        <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 680px; margin: 0 auto var(--space-6); line-height: 1.6;">
          ${isBn 
            ? 'নাস্তিকতা, সংশয়বাদ ও আধুনিক প্রশ্নের বিপরীতে কুরআন, সুন্নাহ ও বিজ্ঞানসম্মত অকাট্য যুক্তির এক অনন্য বুদ্ধিবৃত্তিক সম্মিলন। লেখক আরিফ আজাদের যুগান্তকারী দুই সৃষ্টি।' 
            : 'A profound intellectual response to atheism, agnosticism, and modern skepticism grounded in Quranic wisdom, sound philosophy, and modern science.'}
        </p>

        <!-- Stats Bar -->
        <div style="display: flex; justify-content: center; gap: var(--space-6); flex-wrap: wrap; margin-bottom: var(--space-4);">
          <div style="display: flex; align-items: center; gap: 8px; font-size: var(--text-sm); font-weight: 600; color: var(--color-text-muted);">
            <span style="font-size: 18px;">📚</span>
            <span>${isBn ? '২টি মাস্টারপিস বই' : '2 Masterpiece Books'}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; font-size: var(--text-sm); font-weight: 600; color: var(--color-text-muted);">
            <span style="font-size: 18px;">🧠</span>
            <span>${isBn ? '৩৯টি বুদ্ধিবৃত্তিক অধ্যায়' : '39 Logic Chapters'}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; font-size: var(--text-sm); font-weight: 600; color: var(--color-text-muted);">
            <span style="font-size: 18px;">✨</span>
            <span>${isBn ? 'ডিজিটাল অধ্যায় ও যুক্তি বিশ্লেষণ' : 'Digital Chapters & Logic'}</span>
          </div>
        </div>
      </section>

      <!-- 3D Book Showcases Grid -->
      <section style="margin-bottom: var(--space-12);">
        <div style="text-align: center; margin-bottom: var(--space-8);">
          <h2 style="font-size: var(--text-2xl); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${isBn ? 'নির্বাচিত গ্রন্থাবলি' : 'Featured Masterpieces'}
          </h2>
          <p style="color: var(--color-text-muted); font-size: var(--text-sm);">
            ${isBn ? 'পছন্দের বইটি নির্বাচন করে অধ্যায়ভিত্তিক বুদ্ধিবৃত্তিক যুক্তি ও বিশ্লেষণ উপভোগ করুন' : 'Select a book to explore chapters with structured logic matrices and summaries'}
          </p>
        </div>

        <div class="faith-books-grid">
          ${books.map(book => {
            const isSajid1 = book.id === 'sajid-1';
            const bookIcon = isSajid1 ? Icon3DBookSajid1 : Icon3DBookSajid2;
            const topChapters = book.chapters.slice(0, 4);

            return `
              <div class="book-3d-card" id="card-${book.id}">
                <!-- 3D Perspective Cover Mockup -->
                <div class="book-cover-container">
                  <div class="book-3d-mockup" style="background: ${book.coverGradient};">
                    <div class="book-spine-sheen"></div>
                    <div class="book-gold-ribbon"></div>

                    <div style="position: relative; z-index: 2;">
                      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; background: rgba(255,255,255,0.18); padding: 2px 8px; border-radius: 4px; backdrop-filter: blur(4px);">
                          PART ${book.number}
                        </span>
                        <span style="font-size: 11px; font-weight: 700; color: #FDE047;">★ ${book.rating}</span>
                      </div>
                      <div style="margin-top: var(--space-4); text-align: center;">
                        <div style="width: 48px; height: 48px; margin: 0 auto var(--space-2);">${bookIcon}</div>
                        <h3 style="font-size: 1.15rem; font-weight: 800; line-height: 1.3; color: #FFFFFF; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                          ${book.titleBangla}
                        </h3>
                        <div style="font-size: 10px; opacity: 0.85; margin-top: 2px; letter-spacing: 0.03em;">
                          ${book.titleEnglish}
                        </div>
                      </div>
                    </div>

                    <div style="position: relative; z-index: 2; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 8px; text-align: center;">
                      <div style="font-size: 11px; font-weight: 600; color: #F3F4F6;">${book.author}</div>
                      <div style="font-size: 9px; opacity: 0.75;">${book.publisher}</div>
                    </div>
                  </div>
                </div>

                <!-- Book Info & Actions -->
                <div style="flex: 1; display: flex; flex-direction: column;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2);">
                    <h3 style="font-size: var(--text-xl); font-weight: 700; color: var(--color-text-primary);">
                      ${isBn ? book.titleBangla : book.titleEnglish}
                    </h3>
                    <span style="font-size: var(--text-xs); font-weight: 700; color: var(--color-quran); background: var(--color-quran-bg); padding: 3px 10px; border-radius: var(--radius-full);">
                      ${isBn ? `${book.totalChapters}টি অধ্যায়` : `${book.totalChapters} Chapters`}
                    </span>
                  </div>

                  <p style="font-size: var(--text-xs); font-style: italic; color: var(--color-text-muted); margin-bottom: var(--space-3);">
                    "${isBn ? book.taglineBangla : book.taglineEnglish}"
                  </p>

                  <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; margin-bottom: var(--space-4); flex: 1;">
                    ${isBn ? book.descriptionBangla : book.descriptionEnglish}
                  </p>

                  <!-- Key Chapters Quick List -->
                  <div style="background: var(--color-bg-alt); border-radius: var(--radius-lg); padding: var(--space-3) var(--space-4); margin-bottom: var(--space-5);">
                    <div style="font-size: 11px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; margin-bottom: 6px;">
                      ${isBn ? 'জনপ্রিয় আলোচিত অধ্যায়সমূহ:' : 'Popular Debate Chapters:'}
                    </div>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px;">
                      ${topChapters.map(ch => `
                        <li>
                          <a href="#/${lang}/faith-and-logic/${book.id}/${ch.id}" style="font-size: var(--text-xs); color: var(--color-text-primary); text-decoration: none; display: flex; align-items: center; gap: 6px; padding: 2px 0;">
                            <span style="color: var(--color-quran); font-weight: 700;">#${ch.number}</span>
                            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${isBn ? ch.titleBangla : ch.titleEnglish}</span>
                          </a>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <!-- Action Buttons -->
                  <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
                    <a href="#/${lang}/faith-and-logic/${book.id}" class="btn-primary" style="flex: 1; text-align: center; text-decoration: none; font-size: var(--text-xs); padding: 10px 14px; display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
                      <span>📖</span>
                      <span>${isBn ? 'ডিজিটাল অধ্যায় রিডার' : 'Digital Reader'}</span>
                    </a>
                    <a href="${book.rokomariUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="flex: 1; text-align: center; text-decoration: none; font-size: var(--text-xs); padding: 10px 14px; display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
                      <span>🛒</span>
                      <span>${isBn ? 'রকমারি থেকে কিনুন' : 'Buy Original'}</span>
                    </a>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Interactive Search & Live Filter Section -->
      <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-2xl); padding: var(--space-8); margin-bottom: var(--space-12); box-shadow: var(--shadow-sm);">
        <div style="text-align: center; max-width: 600px; margin: 0 auto var(--space-6);">
          <h2 style="font-size: var(--text-xl); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            🔍 ${isBn ? 'যুক্তিশাস্ত্র ও অধ্যায় অনুসন্ধান' : 'Search Debates & Logic Chapters'}
          </h2>
          <p style="font-size: var(--text-xs); color: var(--color-text-muted);">
            ${isBn ? 'সংশয়বাদ, নাস্তিকতা, বিজ্ঞান বা দর্শনের যেকোনো বিষয় দিয়ে সার্চ করুন' : 'Search by topic, allegation, philosophical question, or keywords'}
          </p>
        </div>

        <!-- Search Bar -->
        <div class="search-bar" style="max-width: 580px; margin: 0 auto var(--space-6);">
          <span class="search-icon">${Icon3DSearch}</span>
          <input type="text" id="faith-search-input" class="search-input" placeholder="${isBn ? 'বিষয় দিয়ে খুঁজুন (উদাঃ তাকদির, বিজ্ঞান, নারী, ডারউইনিজম, বিগ ব্যাং)...' : 'Search by topic (e.g. Free will, Darwinism, Science, Women)...'}" autocomplete="off" />
        </div>

        <!-- Filter Chips -->
        <div class="poro-chips-row" id="faith-category-chips">
          <button class="filter-chip active" data-cat="all">${isBn ? 'সমস্ত অধ্যায়' : 'All Topics'}</button>
          <button class="filter-chip" data-cat="science">${isBn ? 'বিজ্ঞান ও সৃষ্টিতত্ত্ব' : 'Science & Cosmology'}</button>
          <button class="filter-chip" data-cat="philosophy">${isBn ? 'দর্শন ও জ্ঞানতত্ত্ব' : 'Philosophy & Destiny'}</button>
          <button class="filter-chip" data-cat="theology">${isBn ? 'স্রষ্টার অস্তিত্ব ও ঈমান' : 'Existence of God'}</button>
          <button class="filter-chip" data-cat="women">${isBn ? 'নারী মর্যাদা' : 'Women in Islam'}</button>
          <button class="filter-chip" data-cat="comparative-religion">${isBn ? 'ধর্মতত্ত্ব ও ইতিহাস' : 'Comparative Religion'}</button>
        </div>

        <!-- Results Grid Container -->
        <div id="faith-search-results" class="poro-guidelines-grid" style="margin-top: var(--space-6);">
          <!-- Dynamic cards rendered by JS -->
        </div>
      </section>

      <!-- Why Read Logic Section -->
      <section style="text-align: center; padding: var(--space-8); background: linear-gradient(135deg, rgba(5,150,105,0.04) 0%, rgba(30,58,138,0.04) 100%); border-radius: var(--radius-2xl); border: 1px solid var(--color-border);">
        <h3 style="font-size: var(--text-lg); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-2);">
          ${isBn ? 'যুক্তির কষ্টিপাথরে সত্যের সন্ধান' : 'Seeking Truth on the Touchstone of Logic'}
        </h3>
        <p style="font-size: var(--text-sm); color: var(--color-text-secondary); max-width: 700px; margin: 0 auto var(--space-4); line-height: 1.6;">
          ${isBn
            ? 'কুরআনুল কারীম বহু স্থানে মানুষকে চিন্তা-গবেষণা ও বিবেক প্রয়োগের আহ্বান জানিয়েছে। "প্যারাডক্সিক্যাল সাজিদ" তরুণ প্রজন্মের কাছে ইসলামকে যুক্তি, শালীনতা ও পরম মমতায় উপস্থাপন করার এক অনন্য দৃষ্টান্ত স্থাপন করেছে।'
            : 'The Holy Quran repeatedly urges mankind to ponder, reflect, and apply sound intellect. Paradoxical Sajid stands as a premier bridge connecting contemporary scientific skepticism with sublime faith.'}
        </p>
        <div style="font-size: var(--text-xs); font-style: italic; color: var(--color-quran-dark); font-weight: 600;">
          ${isBn ? '— "তবে কি তারা কুরআন নিয়ে গভীর চিন্তা-গবেষণা করে না?" (সূরা মুহাম্মদ: ২৪)' : '— "Do they not then reflect deeply upon the Quran?" (Surah Muhammad: 24)'}
        </div>
      </section>
    </div>
  `;
}

export function bindFaithLogicIndexEvents() {
  const lang = getLang();
  const isBn = lang === 'bn';
  const books = getFaithLogicBooks();
  const searchInput = document.getElementById('faith-search-input');
  const chipsContainer = document.getElementById('faith-category-chips');
  const resultsBox = document.getElementById('faith-search-results');

  // Collect all chapters across both books
  const allChapters = [];
  books.forEach(b => {
    b.chapters.forEach(ch => {
      allChapters.push({
        ...ch,
        bookId: b.id,
        bookTitle: isBn ? b.titleBangla : b.titleEnglish,
        bookCoverColor: b.coverColor
      });
    });
  });

  let activeCategory = 'all';

  function renderChapterCards(chapters) {
    if (!resultsBox) return;

    if (chapters.length === 0) {
      resultsBox.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-12); color: var(--color-text-muted);">
          <div style="font-size: 32px; margin-bottom: var(--space-2);">🔍</div>
          <div style="font-weight: 600;">${isBn ? 'কোনো অধ্যায় খুঁজে পাওয়া যায়নি' : 'No chapters found matching your query'}</div>
          <div style="font-size: var(--text-xs); margin-top: 4px;">${isBn ? 'ভিন্ন শব্দ দিয়ে আবার চেষ্টা করুন' : 'Try searching with another keyword'}</div>
        </div>
      `;
      return;
    }

    resultsBox.innerHTML = chapters.map(ch => {
      const isSajid1 = ch.bookId === 'sajid-1';
      return `
        <div class="poro-guideline-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2);">
              <span style="font-size: 10px; font-weight: 700; background: ${isSajid1 ? 'rgba(153, 27, 27, 0.1)' : 'rgba(6, 95, 70, 0.1)'}; color: ${ch.bookCoverColor}; padding: 2px 8px; border-radius: var(--radius-full);">
                ${isSajid1 ? (isBn ? 'সাজিদ ১' : 'Sajid 1') : (isBn ? 'সাজিদ ২' : 'Sajid 2')} • #${ch.number}
              </span>
              <span style="font-size: 11px; color: var(--color-text-muted);">⏱️ ${ch.readTimeMinutes} ${isBn ? 'মিনিট' : 'min'}</span>
            </div>

            <h4 style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-2); line-height: 1.4;">
              ${isBn ? ch.titleBangla : ch.titleEnglish}
            </h4>

            <p style="font-size: var(--text-xs); color: var(--color-text-secondary); line-height: 1.5; margin-bottom: var(--space-3);">
              ${ch.summary}
            </p>

            ${ch.logicMatrix ? `
              <div style="background: var(--color-bg-alt); border-radius: var(--radius-md); padding: 8px 10px; margin-bottom: var(--space-3); font-size: 11px;">
                <div style="color: #DC2626; font-weight: 700; margin-bottom: 2px;">
                  ❓ ${isBn ? 'সংশয়:' : 'Doubt:'} <span style="font-weight: 400; color: var(--color-text-secondary);">${ch.logicMatrix.allegation.substring(0, 75)}...</span>
                </div>
                <div style="color: #059669; font-weight: 700;">
                  💡 ${isBn ? 'যুক্তি:' : 'Logic:'} <span style="font-weight: 400; color: var(--color-text-secondary);">${ch.logicMatrix.coreArgument.substring(0, 85)}...</span>
                </div>
              </div>
            ` : ''}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: var(--space-3); border-top: 1px solid var(--color-border-light);">
            <a href="#/${lang}/faith-and-logic/${ch.bookId}/${ch.id}" style="font-size: var(--text-xs); font-weight: 700; color: var(--color-quran); text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
              <span>${isBn ? 'সম্পূর্ণ অধ্যায় পড়ুন' : 'Read Chapter'}</span>
              <span>→</span>
            </a>
            <span style="font-size: 11px; color: var(--color-text-muted);">
              📖 ${isBn ? `পৃষ্ঠা ${ch.page}` : `Page ${ch.page}`}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  function filterAndDisplay() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    let filtered = allChapters;

    // Filter by Category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(ch => ch.category === activeCategory);
    }

    // Filter by search query
    if (query) {
      filtered = filtered.filter(ch => {
        const titleMatch = (ch.titleBangla || '').toLowerCase().includes(query) || (ch.titleEnglish || '').toLowerCase().includes(query);
        const summaryMatch = (ch.summary || '').toLowerCase().includes(query);
        const allegationMatch = ch.logicMatrix?.allegation?.toLowerCase().includes(query);
        const argumentMatch = ch.logicMatrix?.coreArgument?.toLowerCase().includes(query);
        return titleMatch || summaryMatch || allegationMatch || argumentMatch;
      });
    }

    renderChapterCards(filtered);
  }

  // Bind Search Input
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterAndDisplay();
    });
  }

  // Bind Category Chips
  if (chipsContainer) {
    chipsContainer.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        chipsContainer.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-cat') || 'all';
        filterAndDisplay();
      });
    });
  }

  // Initial render
  filterAndDisplay();
}
