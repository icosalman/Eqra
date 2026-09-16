// ============================================
// EQRA — Intelligent Islamic Search Modal Component
// Direct Ayah Resolver + Thematic Topics + Surahs + Hadith + Duas + In-Search Audio Player
// ============================================

import { t, getLang } from '../i18n.js';
import { 
  searchAllIslamic, 
  parseAyahQuery, 
  fetchSpecificAyah, 
  searchOnlineQuranAyahs 
} from '../services/islamicSearchService.js';
import { audioPlayer } from './AudioPlayer.js';
import { renderSurah3DBadge, Icon3DSearch, Icon3DPoro } from './Icons3D.js';

let activeCategory = 'all'; // 'all', 'topics', 'ayahs', 'surahs', 'hadith', 'duas'
let currentPlayingAudioUrl = null;
let currentPlayingBtn = null;

// Popular Islamic Search Tags
const POPULAR_TAGS = [
  { labelBn: '⚖️ নারীদের সম্পত্তি ও অধিকার', labelEn: "⚖️ Women's Property", query: 'narider islamer sompotti' },
  { labelBn: '🛡️ পুরুষদের হিসাব ও দায়িত্ব', labelEn: "🛡️ Men's Duties & Account", query: 'purushder hisheb' },
  { labelBn: '⚖️ ভালো ও মন্দ কাজের হিসাব', labelEn: '⚖️ Good vs Evil Deeds', query: 'valo mondo' },
  { labelBn: '🕋 সালাত (নামাজ)', labelEn: '🕋 Salah / Prayer', query: 'namaj' },
  { labelBn: '🌙 রোজা (সিয়াম)', labelEn: '🌙 Fasting (Roza/Sawm)', query: 'roza' },
  { labelBn: '💰 যাকাত ও সাদাকাহ', labelEn: '💰 Zakat / Charity', query: 'jakat' },
  { labelBn: '🕋 হজ ও উমরাহ', labelEn: '🕋 Hajj & Umrah', query: 'hazz' },
  { labelBn: '🤲 ক্ষমা ও তওবা', labelEn: '🤲 Forgiveness & Tawbah', query: 'তওবা' },
  { labelBn: '🌸 মানসিক শান্তি', labelEn: '🌸 Inner Peace', query: 'মানসিক শান্তি' },
  { labelBn: '💰 রিজিক ও বরকত', labelEn: '💰 Rizq & Wealth', query: 'রিজিক' },
  { labelBn: '👨‍👩‍👧 পিতা-মাতার অধিকার', labelEn: '👨‍👩‍👧 Parents Rights', query: 'পিতা মাতা' },
  { labelBn: '🛡️ রোগ ও শিফা', labelEn: '🛡️ Healing & Shifa', query: 'রোগ' },
  { labelBn: '💎 জান্নাত ও আখিরাত', labelEn: '💎 Jannah (Paradise)', query: 'জান্নাত' },
  { labelBn: '👑 আয়াতুল কুরসি', labelEn: '👑 Ayatul Kursi', query: 'আয়াতুল কুরসি' },
  { labelBn: '💍 দাম্পত্য জীবন', labelEn: '💍 Marriage & Family', query: 'দাম্পত্য' },
  { labelBn: '📖 সূরা আল-বাকারা ২৫৫', labelEn: '📖 Baqarah 255', query: '2:255' }
];

/**
 * Renders the Search Modal HTML markup
 */
export function renderSearchModal() {
  const lang = getLang();

  return `
    <!-- Global Intelligent Search Modal -->
    <div id="search-modal" class="eqra-search-modal-backdrop hidden" role="dialog" aria-modal="true" aria-labelledby="modal-search-title">
      <div class="eqra-search-dialog card animate-fade-in-up">
        
        <!-- Modal Header -->
        <div class="eqra-search-header">
          <div class="eqra-search-title-wrap">
            <span class="eqra-search-header-icon">${Icon3DSearch}</span>
            <div>
              <h2 id="modal-search-title" class="eqra-search-title">
                ${lang === 'bn' ? 'কুরআন ও হাদিস অনুসন্ধান' : 'Search Quran & Hadith'}
              </h2>
              <p class="eqra-search-subtitle">
                ${lang === 'bn' 
                  ? 'সূরা, আয়াত (যেমন: ২:২৫৫, বাকারা ২৫৫), হাদিস কিংবা যে-কোনো ইসলামিক বিষয়' 
                  : 'Surah, Ayah (e.g. 2:255), Hadith or any Islamic topic'}
              </p>
            </div>
          </div>
          <button id="close-search-btn" class="btn-ghost eqra-search-close-btn" aria-label="Close search (Esc)">✕</button>
        </div>

        <!-- Search Input Bar -->
        <div class="eqra-search-input-box">
          <span class="eqra-search-input-icon">${Icon3DSearch}</span>
          <input 
            type="text" 
            id="modal-search-input" 
            class="eqra-search-input" 
            placeholder="${lang === 'bn' ? 'কী খুঁজতে চান? লিখুন (যেমন: ২:২৫৫, নামাজ, রিজিক, তওবা, ক্ষমা)...' : 'Type Surah, Ayah (e.g. 2:255), Hadith, Prayer, Rizq...'}" 
            autocomplete="off" 
            spellcheck="false"
          />
          <button id="search-clear-btn" class="eqra-search-clear-btn hidden" aria-label="Clear search">✕</button>
          <div class="eqra-search-kbd-hint"><kbd>Esc</kbd></div>
        </div>

        <!-- Filter Pills Tabs -->
        <div class="eqra-search-filter-tabs" role="tablist">
          <button class="eqra-filter-tab active" data-category="all">
            <span>🌐</span> <span>${lang === 'bn' ? 'সব' : 'All'}</span>
          </button>
          <button class="eqra-filter-tab" data-category="topics">
            <span>💡</span> <span>${lang === 'bn' ? 'বিষয়ভিত্তিক সমাধান' : 'Thematic Guidance'}</span>
          </button>
          <button class="eqra-filter-tab" data-category="ayahs">
            <span>📖</span> <span>${lang === 'bn' ? 'আয়াত' : 'Ayahs'}</span>
          </button>
          <button class="eqra-filter-tab" data-category="surahs">
            <span>📜</span> <span>${lang === 'bn' ? 'সূরা' : 'Surahs'}</span>
          </button>
          <button class="eqra-filter-tab" data-category="hadith">
            <span>📚</span> <span>${lang === 'bn' ? 'হাদিস' : 'Hadiths'}</span>
          </button>
          <button class="eqra-filter-tab" data-category="duas">
            <span>🤲</span> <span>${lang === 'bn' ? 'দোয়া ও আমল' : 'Duas'}</span>
          </button>
        </div>

        <!-- Results / Popular Suggestions Container -->
        <div id="search-results-box" class="eqra-search-body">
          <!-- Populated dynamically -->
          ${renderDefaultPopularTags(lang)}
        </div>

        <!-- Search Footer Status -->
        <div class="eqra-search-footer">
          <div class="eqra-search-footer-shortcuts">
            <span><kbd>↑</kbd> <kbd>↓</kbd> ${lang === 'bn' ? 'ন্যাভিগেশন' : 'Navigate'}</span>
            <span><kbd>↵</kbd> ${lang === 'bn' ? 'সিলেক্ট' : 'Select'}</span>
            <span><kbd>Esc</kbd> ${lang === 'bn' ? 'বন্ধ' : 'Close'}</span>
          </div>
          <div id="search-count-badge" class="eqra-search-count-badge">
            ${lang === 'bn' ? 'সর্বাধুনিক কুরআন ও হাদিস ইঞ্জিন' : 'Advanced Islamic Knowledge Engine'}
          </div>
        </div>

      </div>
    </div>

    <!-- Toast Notification for Copy -->
    <div id="eqra-toast" class="eqra-toast hidden" role="status" aria-live="polite">
      <span class="eqra-toast-icon">✓</span>
      <span id="eqra-toast-msg">${lang === 'bn' ? 'সফলভাবে কপি করা হয়েছে!' : 'Copied to clipboard!'}</span>
    </div>
  `;
}

/**
 * Default view when search box is empty
 */
function renderDefaultPopularTags(lang) {
  return `
    <div class="eqra-search-empty-state animate-fade-in">
      <div class="eqra-popular-title">
        <span>✨</span> <span>${lang === 'bn' ? 'জনপ্রিয় অনুসন্ধান বিষয়সমূহ' : 'Popular Search Topics'}</span>
      </div>
      <div class="eqra-popular-tags-grid">
        ${POPULAR_TAGS.map(tag => `
          <button class="eqra-popular-tag-btn" data-query="${tag.query}">
            ${lang === 'bn' ? tag.labelBn : tag.labelEn}
          </button>
        `).join('')}
      </div>

      <div class="eqra-search-tips-box">
        <div class="eqra-tips-title">💡 ${lang === 'bn' ? 'অনুসন্ধান সহায়িকা (Tips)' : 'Search Tips'}</div>
        <ul class="eqra-tips-list">
          <li><strong>${lang === 'bn' ? 'নির্দিষ্ট আয়াত:' : 'Specific Ayah:'}</strong> <code>2:255</code>, <code>৩৬:১</code>, <code>বাকারা ২৫৫</code>, <code>সূরা কাহফ ১০</code></li>
          <li><strong>${lang === 'bn' ? 'বিখ্যাত আয়াত:' : 'Famous Verses:'}</strong> <code>আয়াতুল কুরসি</code>, <code>আমানার রাসুল</code>, <code>দোয়া ইউনুস</code></li>
          <li><strong>${lang === 'bn' ? 'জীবনের বিষয়ভিত্তিক সমাধান:' : 'Life Topics:'}</strong> <code>মানসিক শান্তি</code>, <code>রিজিক</code>, <code>রোগমুক্তি</code>, <code>ক্ষমা</code>, <code>পিতা-মাতা</code></li>
          <li><strong>${lang === 'bn' ? 'হাদিস ও দোয়া:' : 'Hadith & Duas:'}</strong> <code>বুখারী ১</code>, <code>নিয়ত</code>, <code>সাইয়্যিদুল ইস্তিগফার</code>, <code>রব্বানা দোয়া</code></li>
        </ul>
      </div>
    </div>
  `;
}

/**
 * Show a sleek floating toast notification
 */
export function showToast(message) {
  const toast = document.getElementById('eqra-toast');
  const msgEl = document.getElementById('eqra-toast-msg');
  if (!toast) return;

  if (msgEl && message) {
    msgEl.textContent = message;
  }
  toast.classList.remove('hidden');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2200);
}

/**
 * Copies text to user's clipboard and triggers toast
 */
export async function copyToClipboard(text, notifyMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(notifyMessage || (getLang() === 'bn' ? 'ক্লিপবোর্ডে কপি করা হয়েছে!' : 'Copied to clipboard!'));
  } catch (err) {
    console.warn('Clipboard write failed:', err);
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(notifyMessage || (getLang() === 'bn' ? 'ক্লিপবোর্ডে কপি করা হয়েছে!' : 'Copied to clipboard!'));
  }
}

/**
 * Open the Search Modal with optional initial query
 */
export function openGlobalSearch(initialQuery = '') {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('modal-search-input');
  if (!modal) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (input) {
    if (initialQuery) {
      input.value = initialQuery;
      triggerLiveSearch(initialQuery);
    }
    setTimeout(() => input.focus(), 100);
  }
}

/**
 * Close the Search Modal
 */
export function closeGlobalSearch() {
  const modal = document.getElementById('search-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

/**
 * Binds all search modal event listeners
 */
export function bindSearchModalEvents() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('modal-search-input');
  const closeBtn = document.getElementById('close-search-btn');
  const clearBtn = document.getElementById('search-clear-btn');
  const resultsBox = document.getElementById('search-results-box');
  const countBadge = document.getElementById('search-count-badge');

  if (!modal || !input) return;

  // Close actions
  if (closeBtn) {
    closeBtn.addEventListener('click', closeGlobalSearch);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeGlobalSearch();
    }
  });

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.add('hidden');
      input.focus();
      resultsBox.innerHTML = renderDefaultPopularTags(getLang());
      bindTagPillsClick();
      if (countBadge) {
        countBadge.textContent = getLang() === 'bn' ? 'সর্বাধুনিক কুরআন ও হাদিস ইঞ্জিন' : 'Advanced Islamic Knowledge Engine';
      }
    });
  }

  // Filter tabs
  document.querySelectorAll('.eqra-filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.eqra-filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category') || 'all';

      const val = input.value.trim();
      if (val) {
        triggerLiveSearch(val);
      }
    });
  });

  // Popular tag chips
  bindTagPillsClick();

  // Debounced input handler
  let debounceTimer;
  input.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (clearBtn) {
      if (val.length > 0) clearBtn.classList.remove('hidden');
      else clearBtn.classList.add('hidden');
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      triggerLiveSearch(val);
    }, 180);
  });

  // Global Keyboard shortcut: Ctrl+K or Cmd+K to open, Esc to close
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openGlobalSearch();
    } else if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeGlobalSearch();
    }
  });
}

function bindTagPillsClick() {
  document.querySelectorAll('.eqra-popular-tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-query');
      const input = document.getElementById('modal-search-input');
      const clearBtn = document.getElementById('search-clear-btn');
      if (input && q) {
        input.value = q;
        if (clearBtn) clearBtn.classList.remove('hidden');
        triggerLiveSearch(q);
      }
    });
  });
}

/**
 * Triggers unified search and renders results
 */
async function triggerLiveSearch(rawQuery) {
  const container = document.getElementById('search-results-box');
  const countBadge = document.getElementById('search-count-badge');
  const lang = getLang();

  if (!rawQuery || rawQuery.trim().length < 2) {
    if (container) {
      container.innerHTML = renderDefaultPopularTags(lang);
      bindTagPillsClick();
    }
    if (countBadge) {
      countBadge.textContent = lang === 'bn' ? 'সর্বাধুনিক কুরআন ও হাদিস ইঞ্জিন' : 'Advanced Islamic Knowledge Engine';
    }
    return;
  }

  // 1. Check direct Ayah parsing
  const directParsed = parseAyahQuery(rawQuery);

  // 2. Perform instant multi-source search
  const results = searchAllIslamic(rawQuery, lang);

  // Render initial synchronous results (instant zero latency)
  renderSearchResultsUI(results, directParsed, container, countBadge, rawQuery, lang);

  // 3. Fetch direct Ayah if detected & not loaded
  if (directParsed) {
    const ayahCardBox = document.getElementById('direct-ayah-card-container');
    if (ayahCardBox) {
      ayahCardBox.innerHTML = `
        <div class="eqra-loading-snippet">
          <div class="skeleton-pulse"></div>
          <span>${lang === 'bn' ? 'আয়াত বিস্তারিত প্রস্তুত হচ্ছে...' : 'Loading complete Ayah details...'}</span>
        </div>
      `;
      try {
        const fullAyah = await fetchSpecificAyah(directParsed.surahNumber, directParsed.ayahNumber);
        if (fullAyah && ayahCardBox) {
          ayahCardBox.innerHTML = renderDirectAyahCard(fullAyah, lang);
          bindAyahActionEvents(ayahCardBox);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }

  // 4. If query is a general text query, fetch live online Quran search in background
  if (!directParsed && rawQuery.length >= 3) {
    const onlineBox = document.getElementById('online-quran-results-container');
    if (onlineBox) {
      onlineBox.innerHTML = `
        <div class="eqra-online-searching-indicator">
          <span class="pulse-dot"></span>
          <span>${lang === 'bn' ? 'সম্পূর্ণ কুরআন থেকে লাইভ অনুসন্ধান চলছে...' : 'Searching live across 6,236 Quranic verses...'}</span>
        </div>
      `;

      try {
        const onlineAyahs = await searchOnlineQuranAyahs(rawQuery, lang);
        if (onlineBox) {
          if (onlineAyahs && onlineAyahs.length > 0) {
            onlineBox.innerHTML = renderOnlineQuranMatches(onlineAyahs, lang);
            bindAyahActionEvents(onlineBox);
          } else {
            onlineBox.innerHTML = '';
          }
        }
      } catch (e) {
        if (onlineBox) onlineBox.innerHTML = '';
      }
    }
  }
}

/**
 * Builds the UI for all search results
 */
function renderSearchResultsUI(results, directParsed, container, countBadge, query, lang) {
  const { directAnswer, topics, surahs, hadiths, hadithBooks, duas, poroChapters } = results;

  let totalMatches = (directParsed ? 1 : 0) + (directAnswer ? 1 : 0) + topics.length + surahs.length + hadiths.length + hadithBooks.length + duas.length + poroChapters.length;

  if (countBadge) {
    countBadge.innerHTML = lang === 'bn' 
      ? `<span>${totalMatches}টি সমাধান ও ফলাফল পাওয়া গেছে</span>` 
      : `<span>Found ${totalMatches} answers & results</span>`;
  }

  if (totalMatches === 0) {
    container.innerHTML = `
      <div class="eqra-no-results animate-fade-in">
        <div class="no-res-icon">🔍</div>
        <div class="no-res-title">
          ${lang === 'bn' ? `"${query}" এর জন্য কোনো ফলাফল পাওয়া যায়নি` : `No results found for "${query}"`}
        </div>
        <p class="no-res-desc">
          ${lang === 'bn' 
            ? 'বানান সঠিক আছে কিনা যাচাই করুন অথবা নিচের জনপ্রিয় কোনো বিষয়ে ক্লিক করুন।' 
            : 'Please check your spelling or choose from the popular topics below.'}
        </p>
        <div style="margin-top: var(--space-4);">
          ${renderDefaultPopularTags(lang)}
        </div>
      </div>
    `;
    bindTagPillsClick();
    return;
  }

  let html = '';

  // 0. DIRECT ISLAMIC ANSWER / HERO GUIDANCE CARD
  if (directAnswer && !directParsed && (activeCategory === 'all' || activeCategory === 'topics')) {
    html += renderDirectIslamicAnswerHero(directAnswer, lang);
  }

  // 1. DIRECT AYAH MATCH
  if (directParsed && (activeCategory === 'all' || activeCategory === 'ayahs')) {
    html += `
      <div class="eqra-results-section animate-fade-in">
        <div class="eqra-section-header-pill">
          <span class="section-icon">📖</span>
          <span class="section-text">${lang === 'bn' ? 'সরাসরি আয়াত সনাক্ত' : 'Direct Ayah Match'}</span>
          <span class="section-badge-live">${directParsed.displayNameBn}</span>
        </div>
        <div id="direct-ayah-card-container">
          <div class="eqra-loading-snippet">
            <div class="skeleton-pulse"></div>
            <span>${lang === 'bn' ? 'আয়াত বিস্তারিত প্রস্তুত হচ্ছে...' : 'Loading complete Ayah details...'}</span>
          </div>
        </div>
      </div>
    `;
  }

  // 2. ISLAMIC THEMATIC GUIDANCE (Quran + Hadith + Actionable Dua)
  const remainingTopics = directAnswer ? topics.filter(t => t.id !== directAnswer.topicId) : topics;
  if (remainingTopics.length > 0 && (activeCategory === 'all' || activeCategory === 'topics')) {
    html += `
      <div class="eqra-results-section animate-fade-in">
        <div class="eqra-section-header-pill">
          <span class="section-icon">💡</span>
          <span class="section-text">${lang === 'bn' ? 'সম্পর্কিত অন্যান্য বিষয়ভিত্তিক সমাধান' : 'Related Islamic Topics'}</span>
          <span class="section-count">(${remainingTopics.length})</span>
        </div>
        <div class="eqra-thematic-topics-list">
          ${remainingTopics.map(t => renderThematicTopicCard(t, lang)).join('')}
        </div>
      </div>
    `;
  }

  // 3. SURAHS
  if (surahs.length > 0 && (activeCategory === 'all' || activeCategory === 'surahs')) {
    html += `
      <div class="eqra-results-section animate-fade-in">
        <div class="eqra-section-header-pill">
          <span class="section-icon">📜</span>
          <span class="section-text">${lang === 'bn' ? 'পবিত্র কুরআন — সূরা' : 'Surahs of Quran'}</span>
          <span class="section-count">(${surahs.length})</span>
        </div>
        <div class="eqra-surahs-grid">
          ${surahs.map(s => `
            <a href="#/${lang}/quran/${s.number}" class="card surah-card search-item-link">
              ${renderSurah3DBadge(s.number, 40)}
              <div class="surah-info">
                <div class="surah-title">${lang === 'bn' ? s.banglaName : s.englishName}</div>
                <div class="surah-meta">
                  ${lang === 'bn' ? s.banglaMeaning : s.englishMeaning} • ${s.ayahs} ${lang === 'bn' ? 'আয়াত' : 'Ayahs'} • ${lang === 'bn' ? s.banglaType : s.type}
                </div>
              </div>
              <div class="surah-name-arabic">${s.name}</div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 4. AUTHENTIC HADITHS
  if ((hadiths.length > 0 || hadithBooks.length > 0) && (activeCategory === 'all' || activeCategory === 'hadith')) {
    html += `
      <div class="eqra-results-section animate-fade-in">
        <div class="eqra-section-header-pill">
          <span class="section-icon">📚</span>
          <span class="section-text">${lang === 'bn' ? 'বিশুদ্ধ হাদিস সমগ্র' : 'Authentic Hadiths'}</span>
          <span class="section-count">(${hadiths.length + hadithBooks.length})</span>
        </div>
        
        ${hadithBooks.length > 0 ? `
          <div class="eqra-hadith-books-chips">
            ${hadithBooks.map(b => `
              <a href="#/${lang}/hadith/${b.collection}/${b.book}" class="eqra-hadith-book-pill search-item-link">
                <span>📖</span> <span>${b.collection === 'muslim' ? 'সহীহ মুসলিম' : 'সহীহ বুখারী'}: ${lang === 'bn' ? b.nameBn : b.nameEn} (অধ্যায় ${b.book})</span>
              </a>
            `).join('')}
          </div>
        ` : ''}

        <div class="eqra-hadiths-list">
          ${hadiths.map(h => renderHadithCard(h, lang)).join('')}
        </div>
      </div>
    `;
  }

  // 5. DUAS
  if (duas.length > 0 && (activeCategory === 'all' || activeCategory === 'duas')) {
    html += `
      <div class="eqra-results-section animate-fade-in">
        <div class="eqra-section-header-pill">
          <span class="section-icon">🤲</span>
          <span class="section-text">${lang === 'bn' ? 'কুরআন ও হাদিসের দোয়া' : 'Supplications & Duas'}</span>
          <span class="section-count">(${duas.length})</span>
        </div>
        <div class="eqra-duas-list">
          ${duas.map(d => renderDuaCard(d, lang)).join('')}
        </div>
      </div>
    `;
  }

  // 6. PORO BOOK CHAPTERS
  if (poroChapters.length > 0 && activeCategory === 'all') {
    html += `
      <div class="eqra-results-section animate-fade-in">
        <div class="eqra-section-header-pill">
          <span class="section-icon">${Icon3DPoro}</span>
          <span class="section-text">${lang === 'bn' ? 'পড়ো বইয়ের অধ্যায়' : 'Poro Chapters'}</span>
          <span class="section-count">(${poroChapters.length})</span>
        </div>
        <div class="eqra-poro-list">
          ${poroChapters.map(c => `
            <a href="#/${lang}/poro/${c.id}" class="card search-item-link eqra-poro-card">
              <div class="eqra-poro-title">${lang === 'bn' ? c.titleBangla : c.titleEnglish}</div>
              <div class="eqra-poro-summary">${c.summary}</div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Container for Async Online Quran Search Matches
  if (!directParsed && (activeCategory === 'all' || activeCategory === 'ayahs')) {
    html += `<div id="online-quran-results-container"></div>`;
  }

  container.innerHTML = html;

  // Bind close on item navigation
  container.querySelectorAll('.search-item-link').forEach(link => {
    link.addEventListener('click', () => {
      closeGlobalSearch();
    });
  });

  // Bind audio playback & copy buttons
  bindAyahActionEvents(container);
}

/**
 * Renders a rich Direct Ayah Card with tajweed, audio, and copy action
 */
function renderDirectAyahCard(ayah, lang) {
  const citation = `${ayah.surahNameBn} [${ayah.surahNumber}:${ayah.ayahNumber}]`;
  const copyContent = `${ayah.arabic}\n\n${ayah.bangla}\n\n— ${citation}`;

  return `
    <div class="card eqra-featured-ayah-card animate-fade-in">
      <div class="eqra-ayah-header">
        <div class="eqra-ayah-badge">
          <span class="badge-dot"></span>
          <span>${ayah.surahNameBn} • ${lang === 'bn' ? `আয়াত ${ayah.ayahNumber}` : `Ayah ${ayah.ayahNumber}`}</span>
        </div>

        <div class="eqra-ayah-actions">
          <button class="eqra-action-btn copy-ayah-btn" data-copy="${encodeURIComponent(copyContent)}" title="${lang === 'bn' ? 'আয়াত কপি করুন' : 'Copy Ayah'}">
            📋 <span>${lang === 'bn' ? 'কপি' : 'Copy'}</span>
          </button>
          <button class="eqra-action-btn play-ayah-btn" data-audio="${ayah.audio}" data-title="${citation}" title="${lang === 'bn' ? 'তিলাওয়াত শুনুন' : 'Play Recitation'}">
            ▶ <span>${lang === 'bn' ? 'শুনুন' : 'Listen'}</span>
          </button>
        </div>
      </div>

      <!-- Arabic Calligraphy -->
      <div class="eqra-ayah-arabic font-indopak" dir="rtl" lang="ar">
        ${ayah.arabic}
      </div>

      <!-- Bengali Translation -->
      <div class="eqra-ayah-bangla">
        <strong>${lang === 'bn' ? 'অনুবাদ:' : 'Translation:'}</strong> ${ayah.bangla}
      </div>

      ${ayah.english ? `
        <div class="eqra-ayah-english">
          ${ayah.english}
        </div>
      ` : ''}

      <!-- Direct Reader Link -->
      <div class="eqra-ayah-footer">
        <a href="#/${lang}/quran/${ayah.surahNumber}" class="btn btn-primary btn-sm search-item-link">
          <span>${lang === 'bn' ? 'সম্পূর্ণ সূরা পড়ুন' : 'Read Complete Surah'}</span> <span>→</span>
        </a>
      </div>
    </div>
  `;
}

/**
 * Renders an Authoritative Direct Islamic Answer Hero Card
 * displaying the exact Quranic proofs, Sahih Hadiths, and practical guidance
 */
function renderDirectIslamicAnswerHero(answer, lang) {
  const ayah = answer.primaryAyah;
  const hadith = answer.primaryHadith;
  const dua = answer.dua;
  const guidance = answer.practicalGuidance;

  const copyHeroContent = `[${lang === 'bn' ? 'ইসলামিক দিকনির্দেশনা ও সমাধান' : 'Islamic Guidance'}]\n\n${answer.titleBn}\n${answer.summaryBn}\n\n${ayah ? 'কুরআনের দলিল:\n' + ayah.arabic + '\n' + ayah.bangla + ' (' + ayah.surahNameBn + ' ' + ayah.ayahNumber + ')\n\n' : ''}${hadith ? 'হাদিসের দলিল:\n' + hadith.arabic + '\n' + hadith.bangla + ' (' + hadith.reference + ')\n\n' : ''}${dua ? 'দোয়া:\n' + dua.arabic + '\n' + dua.bangla : ''}`;

  return `
    <div class="eqra-results-section animate-fade-in-up">
      <div class="card eqra-direct-answer-hero">
        
        <!-- Top Verified Badge -->
        <div class="direct-hero-badge-wrap">
          <span class="direct-hero-badge">
            <span class="pulse-dot"></span>
            <span>${lang === 'bn' ? 'কুরআন ও হাদিসভিত্তিক প্রত্যক্ষ সমাধান' : 'Direct Quran & Hadith Answer'}</span>
          </span>
          <span class="direct-hero-category">${answer.categoryBn}</span>
          <button class="eqra-action-btn copy-snippet-btn direct-hero-copy-btn" data-copy="${encodeURIComponent(copyHeroContent)}" title="${lang === 'bn' ? 'সম্পূর্ণ উত্তরটি কপি করুন' : 'Copy Full Answer'}">
            📋 <span>${lang === 'bn' ? 'উত্তর কপি' : 'Copy Answer'}</span>
          </button>
        </div>

        <!-- Title & Icon -->
        <div class="direct-hero-header">
          <span class="direct-hero-icon">${answer.icon}</span>
          <div class="direct-hero-title-group">
            <h3 class="direct-hero-title">${lang === 'bn' ? answer.titleBn : answer.titleEn}</h3>
            <p class="direct-hero-summary">${lang === 'bn' ? answer.summaryBn : answer.summaryEn}</p>
          </div>
        </div>

        <!-- Primary Quranic Proof -->
        ${ayah ? `
          <div class="direct-proof-box direct-quran-box">
            <div class="direct-proof-label">
              <span class="proof-tag-icon">📖</span>
              <span class="proof-tag-text">${lang === 'bn' ? 'পবিত্র কুরআনের অকাট্য দলিল' : 'Direct Quranic Evidence'}</span>
              <span class="proof-citation">${ayah.surahNameBn} [${ayah.surahNumber}:${ayah.ayahNumber}]</span>
              <div class="direct-proof-actions">
                <button class="eqra-mini-action copy-snippet-btn" data-copy="${encodeURIComponent(ayah.arabic + '\n\n' + ayah.bangla + '\n\n— ' + ayah.surahNameBn + ' [' + ayah.surahNumber + ':' + ayah.ayahNumber + ']')}" title="${lang === 'bn' ? 'আয়াত কপি করুন' : 'Copy Ayah'}">📋</button>
                ${ayah.audio ? `
                  <button class="eqra-mini-action play-snippet-btn" data-audio="${ayah.audio}" data-title="${ayah.surahNameBn} [${ayah.surahNumber}:${ayah.ayahNumber}]" title="${lang === 'bn' ? 'তেলাওয়াত শুনুন' : 'Listen'}">▶</button>
                ` : ''}
              </div>
            </div>
            <div class="direct-proof-arabic font-indopak" dir="rtl" lang="ar">${ayah.arabic}</div>
            <div class="direct-proof-bangla">
              <strong>${lang === 'bn' ? 'অনুবাদ:' : 'Translation:'}</strong> ${ayah.bangla}
            </div>
            ${ayah.english ? `
              <div class="direct-proof-english">${ayah.english}</div>
            ` : ''}
            <div class="direct-proof-footer">
              <a href="#/${lang}/quran/${ayah.surahNumber}" class="snippet-link search-item-link">
                ${lang === 'bn' ? 'সম্পূর্ণ সূরা ও তাফসির পড়ুন' : 'View Complete Surah'} →
              </a>
            </div>
          </div>
        ` : ''}

        <!-- Primary Sahih Hadith Proof -->
        ${hadith ? `
          <div class="direct-proof-box direct-hadith-box">
            <div class="direct-proof-label">
              <span class="proof-tag-icon">📚</span>
              <span class="proof-tag-text">${lang === 'bn' ? 'রাসূলুল্লাহ (ﷺ)-এর সুন্নাহ ও বিশুদ্ধ হাদিস' : 'Authentic Hadith Evidence'}</span>
              <span class="proof-citation">${hadith.collectionBn} (${hadith.hadithNumber}) • <strong style="color: var(--color-hadith);">${hadith.gradeBn || 'সহীহ'}</strong></span>
              <button class="eqra-mini-action copy-snippet-btn" data-copy="${encodeURIComponent((hadith.narratorBn ? hadith.narratorBn + ':\n' : '') + hadith.arabic + '\n\n' + hadith.bangla + '\n\n— ' + hadith.reference)}" title="${lang === 'bn' ? 'হাদিস কপি করুন' : 'Copy Hadith'}">📋</button>
            </div>
            ${hadith.narratorBn ? `<div class="direct-hadith-narrator">${hadith.narratorBn}:</div>` : ''}
            <div class="direct-proof-arabic font-indopak" dir="rtl" lang="ar">${hadith.arabic}</div>
            <div class="direct-proof-bangla">${hadith.bangla}</div>
            <div class="direct-hadith-ref">রেফারেন্স: ${hadith.reference || hadith.collectionBn}</div>
          </div>
        ` : ''}

        <!-- Practical Guidance & Actionable Dua -->
        ${guidance || dua ? `
          <div class="direct-guidance-box">
            ${guidance ? `
              <div class="guidance-text">
                <span class="guidance-icon">🌿</span>
                <div class="guidance-body">
                  <strong>${lang === 'bn' ? 'বাস্তব জীবনের আমল ও করণীয়:' : 'Actionable Guidance:'}</strong>
                  <p>${guidance}</p>
                </div>
              </div>
            ` : ''}

            ${dua ? `
              <div class="guidance-dua-snippet">
                <div class="dua-snippet-header">
                  <span>🤲 ${dua.titleBn}</span>
                  <button class="eqra-mini-action copy-snippet-btn" data-copy="${encodeURIComponent(dua.arabic + '\n\n' + dua.bangla + '\n\n— ' + dua.reference)}" title="Copy Dua">📋</button>
                </div>
                <div class="dua-snippet-arabic font-indopak" dir="rtl" lang="ar">${dua.arabic}</div>
                ${dua.transliteration ? `<div class="dua-snippet-translit">${dua.transliteration}</div>` : ''}
                <div class="dua-snippet-bangla">${dua.bangla}</div>
                <div class="dua-snippet-ref">${dua.reference}</div>
              </div>
            ` : ''}
          </div>
        ` : ''}

      </div>
    </div>
  `;
}

/**
 * Renders a Thematic Guidance Card
 */
function renderThematicTopicCard(topic, lang) {
  const primaryAyah = topic.quranAyahs && topic.quranAyahs[0];
  const primaryHadith = topic.hadiths && topic.hadiths[0];
  const dua = topic.actionableDua;

  return `
    <div class="card eqra-thematic-card animate-fade-in">
      <div class="eqra-thematic-header">
        <div class="eqra-thematic-title-wrap">
          <span class="eqra-thematic-icon">${topic.icon}</span>
          <div>
            <h3 class="eqra-thematic-title">${lang === 'bn' ? topic.titleBn : topic.titleEn}</h3>
            <span class="eqra-category-pill">${topic.categoryBn}</span>
          </div>
        </div>
      </div>

      <p class="eqra-thematic-summary">
        ${lang === 'bn' ? topic.summaryBn : topic.summaryEn}
      </p>

      <!-- Associated Quran Verse -->
      ${primaryAyah ? `
        <div class="eqra-thematic-snippet eqra-snippet-quran">
          <div class="snippet-tag">
            <span>📖</span> <span>${primaryAyah.surahNameBn} (${primaryAyah.surahNumber}:${primaryAyah.ayahNumber})</span>
            <button class="eqra-mini-action copy-snippet-btn" data-copy="${encodeURIComponent(primaryAyah.arabic + '\n' + primaryAyah.bangla + '\n— ' + primaryAyah.surahNameBn)}" title="Copy">📋</button>
            ${primaryAyah.audio ? `
              <button class="eqra-mini-action play-snippet-btn" data-audio="${primaryAyah.audio}" data-title="${primaryAyah.surahNameBn} ${primaryAyah.ayahNumber}" title="Listen">▶</button>
            ` : ''}
          </div>
          <div class="snippet-arabic font-indopak" dir="rtl" lang="ar">${primaryAyah.arabic}</div>
          <div class="snippet-bangla">${primaryAyah.bangla}</div>
          <div class="snippet-action-row">
            <a href="#/${lang}/quran/${primaryAyah.surahNumber}" class="snippet-link search-item-link">
              ${lang === 'bn' ? 'সূরায় দেখুন' : 'View in Surah'} →
            </a>
          </div>
        </div>
      ` : ''}

      <!-- Associated Hadith -->
      ${primaryHadith ? `
        <div class="eqra-thematic-snippet eqra-snippet-hadith">
          <div class="snippet-tag">
            <span>📚</span> <span>${primaryHadith.collectionBn}, হাদিস নং ${primaryHadith.hadithNumber} • <strong style="color: var(--color-hadith);">${primaryHadith.gradeBn}</strong></span>
            <button class="eqra-mini-action copy-snippet-btn" data-copy="${encodeURIComponent(primaryHadith.arabic + '\n' + primaryHadith.bangla + '\n— ' + primaryHadith.reference)}" title="Copy">📋</button>
          </div>
          <div class="snippet-narrator">${primaryHadith.narratorBn}:</div>
          <div class="snippet-arabic font-indopak" dir="rtl" lang="ar">${primaryHadith.arabic}</div>
          <div class="snippet-bangla">${primaryHadith.bangla}</div>
        </div>
      ` : ''}

      <!-- Actionable Dua -->
      ${dua ? `
        <div class="eqra-thematic-snippet eqra-snippet-dua">
          <div class="snippet-tag">
            <span>🤲</span> <span>${dua.titleBn}</span>
            <button class="eqra-mini-action copy-snippet-btn" data-copy="${encodeURIComponent(dua.arabic + '\n' + dua.bangla + '\n— ' + dua.reference)}" title="Copy">📋</button>
          </div>
          <div class="snippet-arabic font-indopak" dir="rtl" lang="ar">${dua.arabic}</div>
          ${dua.transliteration ? `<div class="snippet-translit">${dua.transliteration}</div>` : ''}
          <div class="snippet-bangla">${dua.bangla}</div>
          <div class="snippet-ref">সূত্র: ${dua.reference}</div>
        </div>
      ` : ''}

      ${topic.practicalGuidance ? `
        <div class="eqra-thematic-advice">
          <strong>🌿 ${lang === 'bn' ? 'বাস্তব জীবনের আমল:' : 'Actionable Guidance:'}</strong> ${topic.practicalGuidance}
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Renders an Authentic Hadith Card
 */
function renderHadithCard(hadith, lang) {
  const citation = hadith.reference || `${hadith.banglaCollection}, নং ${hadith.hadithNumber}`;
  const copyContent = `${hadith.arabic}\n\n${hadith.bangla}\n\n— ${citation}`;

  return `
    <div class="card eqra-hadith-card animate-fade-in">
      <div class="eqra-hadith-card-header">
        <div class="hadith-badge-wrap">
          <span class="hadith-col-badge">${hadith.banglaCollection || hadith.collection}</span>
          ${hadith.gradeBangla ? `<span class="hadith-grade-badge">${hadith.gradeBangla}</span>` : ''}
        </div>
        <button class="eqra-action-btn copy-hadith-btn" data-copy="${encodeURIComponent(copyContent)}" title="Copy Hadith">
          📋 <span>${lang === 'bn' ? 'কপি' : 'Copy'}</span>
        </button>
      </div>

      ${hadith.narratorBangla ? `
        <div class="eqra-hadith-narrator">${hadith.narratorBangla}:</div>
      ` : ''}

      <div class="eqra-hadith-arabic font-indopak" dir="rtl" lang="ar">
        ${hadith.arabic}
      </div>

      <div class="eqra-hadith-bangla">
        ${hadith.bangla}
      </div>

      <div class="eqra-hadith-footer">
        <span class="hadith-ref-text">📖 ${citation}</span>
      </div>
    </div>
  `;
}

/**
 * Renders a Dua Card
 */
function renderDuaCard(dua, lang) {
  const copyContent = `${dua.arabic}\n\n${dua.bangla}\n\n— ${dua.reference}`;

  return `
    <div class="card eqra-dua-card animate-fade-in">
      <div class="eqra-dua-header">
        <div class="dua-title">${lang === 'bn' ? dua.titleBangla : dua.titleEnglish}</div>
        <button class="eqra-action-btn copy-dua-btn" data-copy="${encodeURIComponent(copyContent)}" title="Copy Dua">
          📋 <span>${lang === 'bn' ? 'কপি' : 'Copy'}</span>
        </button>
      </div>

      <div class="eqra-dua-arabic font-indopak" dir="rtl" lang="ar">
        ${dua.arabic}
      </div>

      ${dua.transliteration ? `<div class="eqra-dua-translit">${dua.transliteration}</div>` : ''}

      <div class="eqra-dua-bangla">
        ${lang === 'bn' ? dua.bangla : dua.english}
      </div>

      <div class="eqra-dua-footer">
        <span class="dua-ref-text">📿 ${dua.reference}</span>
        <a href="#/${lang}/dua" class="dua-nav-link search-item-link">${lang === 'bn' ? 'দোয়া তালিকায় দেখুন' : 'View all Duas'} →</a>
      </div>
    </div>
  `;
}

/**
 * Renders Online Quran Search matches
 */
function renderOnlineQuranMatches(matches, lang) {
  return `
    <div class="eqra-results-section animate-fade-in">
      <div class="eqra-section-header-pill">
        <span class="section-icon">🌐</span>
        <span class="section-text">${lang === 'bn' ? 'কুরআনের অন্যান্য আয়াতসমূহ (অনলাইন অনুসন্ধান)' : 'Other Quran Verses (Live Search)'}</span>
        <span class="section-count">(${matches.length})</span>
      </div>

      <div class="eqra-online-ayahs-list">
        ${matches.map(m => `
          <div class="card eqra-online-ayah-card">
            <div class="online-ayah-header">
              <span class="online-surah-tag">${m.surahNameBn} (${m.surahNumber}:${m.ayahNumber})</span>
              <div class="online-ayah-btns">
                <button class="eqra-mini-action copy-snippet-btn" data-copy="${encodeURIComponent(m.text + '\n— ' + m.surahNameBn + ' [' + m.surahNumber + ':' + m.ayahNumber + ']')}" title="Copy">📋</button>
                <button class="eqra-mini-action play-snippet-btn" data-audio="${m.audio}" data-title="${m.surahNameBn} ${m.ayahNumber}" title="Listen">▶</button>
              </div>
            </div>
            <div class="online-ayah-text">${m.text}</div>
            <div class="online-ayah-footer">
              <a href="#/${lang}/quran/${m.surahNumber}" class="snippet-link search-item-link">
                ${lang === 'bn' ? 'সূরাটিতে যান' : 'Go to Surah'} →
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Attaches audio playback and clipboard copying event listeners
 */
function bindAyahActionEvents(container) {
  if (!container) return;

  // Copy Buttons
  container.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const raw = btn.getAttribute('data-copy');
      if (raw) {
        copyToClipboard(decodeURIComponent(raw));
      }
    });
  });

  // Audio Playback Buttons
  container.querySelectorAll('[data-audio]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const audioUrl = btn.getAttribute('data-audio');
      const title = btn.getAttribute('data-title') || 'কুরআন তিলাওয়াত';

      if (!audioUrl) return;

      if (currentPlayingAudioUrl === audioUrl && audioPlayer.isPlaying) {
        audioPlayer.pause();
        btn.classList.remove('playing');
        btn.innerHTML = btn.classList.contains('play-ayah-btn') 
          ? `▶ <span>${getLang() === 'bn' ? 'শুনুন' : 'Listen'}</span>` 
          : '▶';
        currentPlayingAudioUrl = null;
        currentPlayingBtn = null;
      } else {
        if (currentPlayingBtn) {
          currentPlayingBtn.classList.remove('playing');
          currentPlayingBtn.innerHTML = currentPlayingBtn.classList.contains('play-ayah-btn') 
            ? `▶ <span>${getLang() === 'bn' ? 'শুনুন' : 'Listen'}</span>` 
            : '▶';
        }

        audioPlayer.playTrack({
          audio: audioUrl,
          title: title,
          subtitle: 'মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)'
        });

        btn.classList.add('playing');
        btn.innerHTML = btn.classList.contains('play-ayah-btn') 
          ? `⏸ <span>${getLang() === 'bn' ? 'থামান' : 'Pause'}</span>` 
          : '⏸';
        currentPlayingAudioUrl = audioUrl;
        currentPlayingBtn = btn;
      }
    });
  });
}

export default {
  renderSearchModal,
  bindSearchModalEvents,
  openGlobalSearch,
  closeGlobalSearch,
  showToast,
  copyToClipboard
};
