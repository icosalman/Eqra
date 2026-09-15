// ============================================
// EQRA — 'পড়ো' (Poro) Book Showcase & Hub
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { 
  PORO_CHAPTERS, 
  PORO_LIFE_GUIDELINES, 
  PORO_SCIENCE_EXHIBITS, 
  PORO_METAPHORS,
  PORO_BOOK_METADATA,
  getChapterStartPage
} from '../data/poroBookData.js';
import { 
  Icon3DPoro, 
  Icon3DSparkle, 
  Icon3DScience, 
  Icon3DQuran, 
  Icon3DMetaphor, 
  Icon3DSearch, 
  Icon3DTime, 
  Icon3DDocument,
  Icon3DBookmark
} from '../components/Icons3D.js';
import { formatColorCodedQuran, bindTajweedInteractions } from '../utils/quranColors.js';

export function renderPoroIndexPage() {
  const lang = getLang();

  updateMeta({
    title: lang === 'bn' ? 'পড়ো — কুরআন অনুধাবন ও তাফসীর গ্রন্থ নির্যাস | EQRA' : 'Poro — Quranic Reflection & Tafsir Masterwork | EQRA',
    description: lang === 'bn' 
      ? 'কুরআন বোঝার শ্রেষ্ঠ সহায়ক "পড়ো" বইয়ের পূর্ণাঙ্গ ডিজিটাল সংস্করণ। সূরা ফাতিহার গভীর রহস্য, কুরআনের ৪৪টি জীবনবিধান, বিজ্ঞান ও আল-কুরআন।' 
      : 'Comprehensive digital edition of "Poro" — A deep companion to understanding the Quran, Tafsir, Life Guidelines, and Science in the Light of Revelation.',
    canonicalPath: `#/${lang}/poro`
  });

  return `
    <div class="page poro-page">
      <div class="container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${t('navPoro')}</span>
        </nav>

        <!-- Hero Showcase Banner (Exact replica of attached design) -->
        <section class="poro-hero animate-fade-in-up">
          <div class="poro-hero-badge">
            <span>📘</span>
            <span>${lang === 'bn' ? 'বিশেষ প্রদর্শনী ও অধ্যয়ন • সরোবর প্রকাশন (Shorobor Prokashon)' : 'Special Exhibition & Study • Shorobor Prokashon'}</span>
          </div>

          <div class="poro-hero-arabic font-indopak">
            ${formatColorCodedQuran('اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ')}
          </div>

          <h1 class="poro-hero-title">
            ${lang === 'bn' ? 'পড়ো' : 'PORO'}
          </h1>
          
          <div class="poro-hero-tagline">
            ${lang === 'bn' ? 'কুরআন নিয়ে আধুনিক মানুষের বৈজ্ঞানিক ও যৌক্তিক ভাবনার সংকলন' : 'A compilation of modern scientific and rational reflections on the Quran'}
          </div>

          <p class="poro-hero-desc">
            ${lang === 'bn' 
              ? 'এটি কোনো তাফসীর নয়। আধুনিক যুগের মানুষের জন্য কুরআনের আয়াতগুলোকে বৈজ্ঞানিক ও যৌক্তিক দৃষ্টিকোণ থেকে দেখা এবং সমসাময়িক প্রশ্ন, দ্বন্দ্ব ও ঘটনাগুলোর ওপর প্রাসঙ্গিক আলোচনা।' 
              : 'This is not a traditional Tafsir. It explores Quranic verses from contemporary scientific and rational perspectives, addressing modern dilemmas, questions, and realities.'}
          </p>

          <!-- Book Statistics Row (4 White Cards) -->
          <div class="poro-stats-row">
            <div class="poro-stat-card">
              <div class="poro-stat-num">১৮</div>
              <div class="poro-stat-label">${lang === 'bn' ? 'মূল অধ্যায়' : 'Chapters'}</div>
            </div>
            <div class="poro-stat-card">
              <div class="poro-stat-num">৪৪+</div>
              <div class="poro-stat-label">${lang === 'bn' ? 'জীবনবিধান' : 'Life Codes'}</div>
            </div>
            <div class="poro-stat-card">
              <div class="poro-stat-num">১৯</div>
              <div class="poro-stat-label">${lang === 'bn' ? 'প্রামাণ্য তাফসীর' : 'Tafsir Sources'}</div>
            </div>
            <div class="poro-stat-card">
              <div class="poro-stat-num">১৮৪</div>
              <div class="poro-stat-label">${lang === 'bn' ? 'পৃষ্ঠার নির্যাস' : 'Pages'}</div>
            </div>
          </div>

          <div class="poro-hero-actions">
            <a href="#/${lang}/poro/ch-1" class="poro-btn-green">
              <span>📖</span>
              <span>${lang === 'bn' ? 'পড়া শুরু করুন' : 'Start Reading'}</span>
            </a>
            <a href="${PORO_BOOK_METADATA.rokomariUrl}" target="_blank" rel="noopener noreferrer" class="poro-btn-white" style="text-decoration: none; border-color: #059669; color: #059669; font-weight: 700;">
              <span>🛒</span>
              <span>${lang === 'bn' ? 'অফিসিয়াল বই সংগ্রহ (রকমারি)' : 'Order on Rokomari'}</span>
              <span>↗️</span>
            </a>
            <button type="button" class="poro-btn-white" id="btn-poro-book-info">
              <span>ℹ️</span>
              <span>${lang === 'bn' ? 'বইয়ের পরিচিতি' : 'Book Info'}</span>
            </button>
          </div>
        </section>

        <!-- Interactive Tabs Navigation with 3D Icons -->
        <div class="poro-tabs-nav-wrap">
          <div class="poro-tabs-nav" id="poro-tabs-nav">
            <button class="poro-tab-btn active" data-tab="chapters">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DPoro}</span> <span>${lang === 'bn' ? 'সূচিপত্র ও অধ্যায়' : 'Chapters'}</span>
            </button>
            <button class="poro-tab-btn" data-tab="acquisition">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DBookmark}</span> <span>${lang === 'bn' ? 'বই পরিচিতি ও সংগ্রহ' : 'Book Info & Order'}</span>
            </button>
            <button class="poro-tab-btn" data-tab="lifecode">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DSparkle}</span> <span>${lang === 'bn' ? 'কুরআনের জীবনবিধান' : 'Life Guidelines'}</span>
            </button>
            <button class="poro-tab-btn" data-tab="science">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DScience}</span> <span>${lang === 'bn' ? 'বিজ্ঞান ও যুক্তি' : 'Science & Wonders'}</span>
            </button>
            <button class="poro-tab-btn" data-tab="fatiha">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DQuran}</span> <span>${lang === 'bn' ? 'সূরা ফাতিহার রহস্য' : 'Surah Fatiha'}</span>
            </button>
            <button class="poro-tab-btn" data-tab="metaphors">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DMetaphor}</span> <span>${lang === 'bn' ? 'অবিস্মরণীয় উপমা' : 'Iconic Metaphors'}</span>
            </button>
          </div>
        </div>

        <!-- TAB 1: Chapters Directory -->
        <div class="poro-tab-pane active" id="tab-chapters">
          <div class="poro-search-filter-bar">
            <div class="search-bar" style="width: 100%; max-width: 500px;">
              <span class="search-icon">🔍</span>
              <input type="text" id="poro-chapter-search" class="search-input" placeholder="${lang === 'bn' ? 'অধ্যায় বা বিষয় খুঁজুন (যেমন: বিজ্ঞান, ফাতিহা, মৃত্যু, রিযক)...' : 'Search chapters (e.g. Science, Fatihah, Death)...'}" />
            </div>
            <div style="font-size: var(--text-sm); color: var(--color-text-muted); align-self: center;">
              ${lang === 'bn' ? `সর্বমোট ${PORO_CHAPTERS.length}টি পরিচ্ছেদ` : `Total ${PORO_CHAPTERS.length} sections`}
            </div>
          </div>

          <div class="poro-chapters-grid" id="poro-chapters-container">
            ${renderChaptersCards(PORO_CHAPTERS, lang)}
          </div>
        </div>

        <!-- TAB: Official Book Showcase & Acquisition -->
        <div class="poro-tab-pane" id="tab-acquisition">
          <div class="poro-pane-header">
            <h2 class="section-title">${lang === 'bn' ? '‘পড়ো’ — গ্রন্থ পরিচিতি, প্রকাশনা ও সংগ্রহশালা' : '"Poro" — Publication Details & Acquisition'}</h2>
            <p class="section-subtitle">${lang === 'bn' ? 'সরোবর প্রকাশন কর্তৃক প্রকাশিত মূল মুদ্রিত বইয়ের বিবরণ, শারঈ সম্পাদকমণ্ডলী ও অফিসিয়াল কপি সংগ্রহ' : 'Official publication details by Shorobor Prokashon, Sharia editorial board, and authentic order links.'}</p>
          </div>

          <div class="card" style="padding: var(--space-6); margin-bottom: var(--space-6); background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl);">
            <!-- Top Spotlight Row -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-6); flex-wrap: wrap; gap: var(--space-4);">
              <div>
                <div style="display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; color: #0284C7; background: rgba(2, 132, 199, 0.1); padding: 4px 12px; border-radius: var(--radius-full); margin-bottom: 8px;">
                  <span>📘</span>
                  <span>${lang === 'bn' ? 'সরোবর প্রকাশন (Shorobor Prokashon) • মেধা ও স্বত্বাধিকার সুরক্ষিত' : 'Shorobor Prokashon • Intellectual Property Protected'}</span>
                </div>
                <h3 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: 6px;">
                  ${PORO_BOOK_METADATA.title} — ${PORO_BOOK_METADATA.subtitle}
                </h3>
                <p style="font-size: var(--text-sm); color: var(--color-text-secondary); max-width: 680px; line-height: 1.6;">
                  ${PORO_BOOK_METADATA.coreMission}
                </p>
              </div>

              <div style="display: flex; gap: var(--space-3); flex-wrap: wrap;">
                <a href="${PORO_BOOK_METADATA.rokomariUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: var(--text-sm); padding: 10px 22px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #059669 0%, #047857 100%); border: none; font-weight: 700; box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);">
                  <span>🛒</span>
                  <span>${lang === 'bn' ? 'রকমারি থেকে অর্ডার করুন' : 'Order on Rokomari'}</span>
                  <span>↗️</span>
                </a>
                <a href="${PORO_BOOK_METADATA.shoroborUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: var(--text-sm); padding: 10px 16px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                  <span>🌐</span>
                  <span>${lang === 'bn' ? 'সরোবর ওয়েবসাইট' : 'Shorobor Website'}</span>
                  <span>↗️</span>
                </a>
              </div>
            </div>

            <!-- Details 3-Column Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
              <!-- Book Specs Card -->
              <div style="background: var(--color-bg-alt); padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--color-border-light);">
                <h4 style="font-size: var(--text-sm); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-3); display: flex; align-items: center; gap: 6px;">
                  <span>📋</span> <span>${lang === 'bn' ? 'গ্রন্থের তথ্যাবলী' : 'Book Details'}</span>
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; font-size: var(--text-xs);">
                  <li style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-light); padding-bottom: 4px;">
                    <span style="color: var(--color-text-muted);">${lang === 'bn' ? 'সংকলন:' : 'Compilation:'}</span>
                    <span style="font-weight: 700; color: var(--color-text-primary);">${PORO_BOOK_METADATA.author}</span>
                  </li>
                  <li style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-light); padding-bottom: 4px;">
                    <span style="color: var(--color-text-muted);">${lang === 'bn' ? 'সম্পাদনা:' : 'Editor:'}</span>
                    <span style="font-weight: 700; color: var(--color-text-primary);">${PORO_BOOK_METADATA.editor}</span>
                  </li>
                  <li style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-light); padding-bottom: 4px;">
                    <span style="color: var(--color-text-muted);">${lang === 'bn' ? 'প্রকাশনী:' : 'Publisher:'}</span>
                    <span style="font-weight: 700; color: var(--color-text-primary);">${PORO_BOOK_METADATA.publisher}</span>
                  </li>
                  <li style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-light); padding-bottom: 4px;">
                    <span style="color: var(--color-text-muted);">ISBN:</span>
                    <span style="font-weight: 700; color: var(--color-text-primary); font-family: monospace;">${PORO_BOOK_METADATA.isbn}</span>
                  </li>
                  <li style="display: flex; justify-content: space-between;">
                    <span style="color: var(--color-text-muted);">${lang === 'bn' ? 'মুদ্রিত পৃষ্ঠা:' : 'Total Pages:'}</span>
                    <span style="font-weight: 700; color: var(--color-text-primary);">${PORO_BOOK_METADATA.totalPages} ${lang === 'bn' ? 'পৃষ্ঠা' : 'pages'}</span>
                  </li>
                </ul>
              </div>

              <!-- Sharia Editors Card -->
              <div style="background: var(--color-bg-alt); padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--color-border-light);">
                <h4 style="font-size: var(--text-sm); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-3); display: flex; align-items: center; gap: 6px;">
                  <span>🎓</span> <span>${lang === 'bn' ? 'শারঈ সম্পাদকমণ্ডলী' : 'Sharia Editorial Board'}</span>
                </h4>
                <div style="display: flex; flex-direction: column; gap: 10px; font-size: var(--text-xs); color: var(--color-text-secondary); line-height: 1.5;">
                  ${PORO_BOOK_METADATA.shariaEditors.map(ed => `
                    <div style="background: var(--color-surface); padding: 8px 10px; border-radius: var(--radius-md); border-left: 3px solid #0284C7;">
                      ${ed}
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Why Own the Book Card -->
              <div style="background: var(--color-bg-alt); padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--color-border-light);">
                <h4 style="font-size: var(--text-sm); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-3); display: flex; align-items: center; gap: 6px;">
                  <span>✨</span> <span>${lang === 'bn' ? 'কেন মূল বইটি সংগ্রহ করবেন?' : 'Why Own the Original?'}</span>
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; font-size: var(--text-xs); color: var(--color-text-secondary); line-height: 1.5;">
                  <li style="display: flex; gap: 6px;">
                    <span style="color: #059669;">✔</span>
                    <span>${lang === 'bn' ? '১৯টি প্রামাণ্য তাফসীর গ্রন্থের সমন্বয়ে রচিত মূল গ্রন্থের প্রতিটি পৃষ্ঠার পূর্ণ স্বাদ।' : 'Access full footnotes and references from 19 authentic classical Tafsirs.'}</span>
                  </li>
                  <li style="display: flex; gap: 6px;">
                    <span style="color: #059669;">✔</span>
                    <span>${lang === 'bn' ? 'কুরআনের আয়াতকে আধুনিক বিজ্ঞানের সাথে মেলাতে সরোবর প্রকাশনীর প্রমিত মুদ্রণ।' : 'High-quality print, elegant typography, and lasting companion for family.'}</span>
                  </li>
                  <li style="display: flex; gap: 6px;">
                    <span style="color: #059669;">✔</span>
                    <span>${lang === 'bn' ? 'লেখক ও প্রকাশকদের ন্যায্য অধিকার সংরক্ষণ এবং ভালো কাজের প্রসারে সহায়তা।' : 'Support Islamic authors and independent publishers ethically and financially.'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Copyright & Ethics Box -->
            <div style="background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-radius: var(--radius-lg); padding: var(--space-4) var(--space-5);">
              <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #0284C7; margin-bottom: 6px; font-size: var(--text-sm);">
                <span>⚖️</span>
                <span>${lang === 'bn' ? 'কপিরাইট ও নৈতিক স্বত্বাধিকার নোটিশ' : 'Copyright & Publishing Ethics Statement'}</span>
              </div>
              <p style="font-size: var(--text-xs); color: var(--color-text-secondary); line-height: 1.7; margin: 0;">
                ${lang === 'bn' ? PORO_BOOK_METADATA.copyrightNoticeBangla : PORO_BOOK_METADATA.copyrightNoticeEnglish}
                <br />
                ${lang === 'bn' 
                  ? 'ইক্বরা (Eqra) প্ল্যাটফর্মে আমরা কোনো পাইরেটেড কপি বিতরণ করি না। এখানে কেবল কুরআনের ভাবনার সারসংক্ষেপ, ৪৪টি জীবনবিধান ও শিক্ষণীয় পয়েন্ট উন্মুক্ত অধ্যয়নের জন্য পরিবেশিত হয়েছে।'
                  : 'Eqra does not distribute pirated copies. We provide chapter study notes, life guidelines, and reflection points to encourage Quranic pondering.'}
              </p>
            </div>
          </div>
        </div>

        <!-- TAB 2: Life Guidelines (জীবনবিধান) -->
        <div class="poro-tab-pane" id="tab-lifecode">
          <div class="poro-pane-header">
            <h2 class="section-title">${lang === 'bn' ? 'দৈনন্দিন জীবনে কুরআনের ৪৪টি ব্যবহারিক গাইডলাইন' : '44 Daily Practical Life Guidelines from the Quran'}</h2>
            <p class="section-subtitle">${lang === 'bn' ? 'অধ্যায় ১ (পৃষ্ঠা ১০-১৪) থেকে সংকলিত কথা বলা, সামাজিক আচরণ, নৈতিকতা ও পরিবারের অকাট্য বিধান' : 'Curated practical commandments from Chapter 1 regarding communication, manners, integrity, and family.'}</p>
          </div>

          <!-- Category Filter Chips -->
          <div class="poro-chips-row" id="lifecode-filters">
            <button class="btn btn-sm btn-secondary active" data-filter="all">${lang === 'bn' ? 'সবগুলো (৪৪)' : 'All (44)'}</button>
            <button class="btn btn-sm btn-secondary" data-filter="speech">🗣️ ${lang === 'bn' ? 'কথা বলা' : 'Speech'}</button>
            <button class="btn btn-sm btn-secondary" data-filter="manner">🚶 ${lang === 'bn' ? 'ব্যবহার ও চালচলন' : 'Manners'}</button>
            <button class="btn btn-sm btn-secondary" data-filter="ethics">⚖️ ${lang === 'bn' ? 'নৈতিকতা ও সততা' : 'Ethics'}</button>
            <button class="btn btn-sm btn-secondary" data-filter="family">🏡 ${lang === 'bn' ? 'পরিবার ও আত্মীয়তা' : 'Family'}</button>
          </div>

          <div class="poro-guidelines-grid" id="lifecode-container">
            ${renderLifeGuidelines(PORO_LIFE_GUIDELINES, lang)}
          </div>
        </div>

        <!-- TAB 3: Science & Rational Wonders -->
        <div class="poro-tab-pane" id="tab-science">
          <div class="poro-pane-header">
            <h2 class="section-title">${lang === 'bn' ? 'কুরআন ও আধুনিক বিজ্ঞানের বিস্ময়কর মেলবন্ধন' : 'The Quran & Modern Scientific Realities'}</h2>
            <p class="section-subtitle">${lang === 'bn' ? 'বইটিতে উপস্থাপিত মহাবিশ্ব, বায়োলজি ও চিকিৎসাবিজ্ঞানের অকাট্য বৈজ্ঞানিক তথ্য ও রেফারেন্স' : 'Groundbreaking insights on cosmic fine-tuning, biology, and genetics.'}</p>
          </div>

          <div class="poro-science-grid">
            ${renderScienceExhibits(PORO_SCIENCE_EXHIBITS, lang)}
          </div>
        </div>

        <!-- TAB 4: Surah Fatiha Linguistic Secrets -->
        <div class="poro-tab-pane" id="tab-fatiha">
          <div class="poro-pane-header">
            <h2 class="section-title">${lang === 'bn' ? 'সূরা ফাতিহা: আমরা যা শিখিনি (গভীর ভাষাতাত্ত্বিক বিশ্লেষণ)' : 'Surah Al-Fatihah: Linguistic & Psychological Depth'}</h2>
            <p class="section-subtitle">${lang === 'bn' ? 'অধ্যায় ২ (পৃষ্ঠা ১৫-৩৩) এর সারসংক্ষেপ—শব্দের ওজন, মনোবিজ্ঞান ও স্রষ্টার মহিমা' : 'Linguistic progression, vocabulary nuance, and psychological benefits of gratitude.'}</p>
          </div>

          <div class="poro-fatiha-showcase">
            <div class="fatiha-feature-card">
              <div class="fatiha-card-icon">💎</div>
              <h3>${lang === 'bn' ? '‘হামদ’ বনাম মাদহ্, সানা ও শুকর' : 'Why "Hamd" Over Other Praise Words?'}</h3>
              <p>${lang === 'bn' 
                ? 'আরবীতে প্রশংসার জন্য মাদহ্ (মাটির সৌন্দর্যও মাদহ্ হতে পারে), সানা (গুণগান) এবং শুকর (শুধু উপকারের বিনিময়ে ধন্যবাদ) শব্দ রয়েছে। কিন্তু ‘হামদ’ হলো নিখাদ মুগ্ধতা ও ভালোবাসাসহ সম্মানপ্রদর্শন। আল্লাহকে শুধু শুকর (ধন্যবাদ) দিলে তাঁর অনুগ্রহকে খাটো করা হতো; কারণ তিনি আমাদের শুধু এক গ্লাস পানি দেননি, বরং সমগ্র মেঘমালা, সমুদ্র ও পানিচক্র সাজিয়ে রেখেছেন।' 
                : 'Arabic has multiple words for praise, but "Hamd" uniquely combines profound gratitude with awe, adoration, and love for a conscious benefactor.'}</p>
            </div>

            <div class="fatiha-feature-card">
              <div class="fatiha-card-icon">🧠</div>
              <h3>${lang === 'bn' ? 'কৃতজ্ঞতার মনস্তাত্ত্বিক অলৌকিকতা (Positive Psychology)' : 'The Neuroscience of Gratitude'}</h3>
              <p>${lang === 'bn'
                ? '২০০৩ সালে ২,৬১৬ জনের ওপর গবেষণায় দেখা গেছে, কৃতজ্ঞ মানুষের বিষণ্ণতা, হতাশা ও ড্রাগ আসক্তির ঝুঁকি বহুগুণ কম। নিয়মিত আলহামদুলিল্লাহ পাঠে হীনমন্যতা ৭৬% পর্যন্ত দূর হয় এবং ঘুমের জটিল ব্যাধি (Sleep Disorder) দূর হয়ে মানসিক রোগ প্রতিরোধ ক্ষমতা বাড়ে।'
                : 'Psychological studies (Linley & Joseph, 2003; Wood & Atkins, 2009) prove that practicing genuine gratitude directly relieves depression, reduces clinical insomnia, and elevates immune response by 76%.'}</p>
            </div>

            <div class="fatiha-feature-card">
              <div class="fatiha-card-icon">⚖️</div>
              <h3>${lang === 'bn' ? 'আর-রহমান বনাম আর-রহীম' : 'Ar-Rahman vs. Ar-Raheem'}</h3>
              <p>${lang === 'bn'
                ? 'দুটোই ‘রাহমা’ (মায়ের গর্ভাশয়) থেকে উৎপন্ন। ‘আর-রহমান’ এর শেষে তানবীন ও টান এই মুহূর্তে সমগ্র সৃষ্টির ওপর তাঁর প্রচণ্ড ও সর্বব্যাপী দয়া নির্দেশ করে (মুহূর্তের দয়া)। আর ‘আর-রহীম’ পরকালে মুমিনদের জন্য তাঁর চিরস্থায়ী ও নিরবচ্ছিন্ন কৃপাকে বোঝায়।'
                : 'Both stem from "Rahmah" (the protective womb). "Ar-Rahman" conveys explosive, overwhelming mercy encompassing every atom right now, while "Ar-Raheem" assures constant, enduring mercy for eternity.'}</p>
            </div>

            <div class="fatiha-feature-card">
              <div class="fatiha-card-icon">📈</div>
              <h3>${lang === 'bn' ? 'শব্দভার ও ব্যাকরণিক ছন্দ' : 'Grammatical Symphony & Word Weights'}</h3>
              <p>${lang === 'bn'
                ? 'সূরা ফাতিহার প্রথম চারটি আয়াত বিশেষ্যবাচক বাক্য (স্রষ্টার পরিচয়), এবং পরের আয়াতগুলো ক্রিয়াবাচক (আমাদের দাসত্ব ও প্রার্থনা)। ইয়্যাকা না‘বুদু থেকে ক্রমাগত শব্দের উচ্চারণ ও গুরুত্ব ভারী হতে থাকে: (২ শব্দ → ২ শব্দ → ৩ শব্দ → ৪ শব্দ: গাইরিল মাগদূবি আলাইহিম ওয়ালাদ্দোয়াল্লীন)।'
                : 'The surah begins with static noun clauses declaring divine majesty, then pivots dynamically into active verb supplications, while the phonetic weight of words escalates steadily.'}</p>
            </div>
          </div>
        </div>

        <!-- TAB 5: Iconic Metaphors -->
        <div class="poro-tab-pane" id="tab-metaphors">
          <div class="poro-pane-header">
            <h2 class="section-title">${lang === 'bn' ? 'বইটির অবিস্মরণীয় রূপক ও চিন্তাশীল গল্পসমূহ' : 'Iconic Metaphors That Transform Your Perspective'}</h2>
            <p class="section-subtitle">${lang === 'bn' ? 'জটিল দার্শনিক ও আধ্যাত্মিক সত্যকে দৈনন্দিন জীবনের জীবন্ত রূপকে ফুটিয়ে তোলার কৌশল' : 'Powerful analogies from contemporary life explaining timeless Quranic concepts.'}</p>
          </div>

          <div class="poro-metaphors-grid">
            ${renderMetaphors(PORO_METAPHORS, lang)}
          </div>
        </div>

      </div>
    </div>
  `;
}

// Sub-renderers
function renderChaptersCards(chapters, lang) {
  return chapters.map(ch => `
    <a href="#/${lang}/poro/${ch.id}" class="poro-chapter-card" data-title="${ch.titleBangla} ${ch.titleEnglish}" style="text-decoration: none; color: inherit; display: flex;">
      <div class="poro-ch-top">
        <span class="poro-ch-badge">
          ${ch.number === 0 ? (lang === 'bn' ? 'ভূমিকা' : 'Intro') : (ch.number === 20 ? (lang === 'bn' ? 'উপসংহার' : 'Outro') : `${lang === 'bn' ? 'অধ্যায়' : 'Chapter'} ${ch.number}`)}
        </span>
        <span class="poro-ch-time" style="display: inline-flex; align-items: center; gap: 4px;">
          <span class="icon-3d-wrap" style="width: 14px; height: 14px;">${Icon3DTime}</span>
          <span>${ch.readTimeMinutes} ${lang === 'bn' ? 'মিনিট' : 'min'}</span>
        </span>
      </div>

      <h3 class="poro-ch-title">
        ${lang === 'bn' ? ch.titleBangla : ch.titleEnglish}
      </h3>

      <p class="poro-ch-summary">
        ${ch.summary}
      </p>

      <div class="poro-ch-quote">
        “${ch.keyQuote}”
      </div>

      <div class="poro-ch-footer">
        <span class="poro-ch-pages" style="display: inline-flex; align-items: center; gap: 4px;">
          <span class="icon-3d-wrap" style="width: 14px; height: 14px;">${Icon3DDocument}</span>
          <span>${lang === 'bn' ? `পৃষ্ঠা ${ch.pages}` : `Pages ${ch.pages}`}</span>
        </span>
        <div style="display: flex; gap: 6px; align-items: center;">
          <span class="btn btn-primary btn-sm">
            <span>${lang === 'bn' ? 'অধ্যায় পড়ুন' : 'Read'}</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </a>
  `).join('');
}

function renderLifeGuidelines(guidelines, lang) {
  return guidelines.map((item, idx) => `
    <div class="poro-guideline-card" data-cat="${item.category}">
      <div class="poro-gl-header">
        <span class="poro-gl-num">#${idx + 1}</span>
        <span class="poro-gl-cat">${item.categoryBangla}</span>
      </div>
      <div class="poro-gl-text">
        ${lang === 'bn' ? item.textBangla : item.textEnglish}
      </div>
      <div class="poro-gl-ref">
        📖 ${item.reference}
      </div>
    </div>
  `).join('');
}

function renderScienceExhibits(exhibits, lang) {
  return exhibits.map(ex => `
    <div class="poro-science-card">
      <div class="poro-sci-icon">${ex.icon}</div>
      <h3 class="poro-sci-title">${lang === 'bn' ? ex.titleBangla : ex.titleEnglish}</h3>
      <div class="poro-sci-summary">${lang === 'bn' ? ex.summaryBangla : ex.titleEnglish}</div>
      <div class="poro-sci-body">
        <pre class="poro-sci-details">${ex.detailsBangla}</pre>
      </div>
      <div class="poro-sci-citation">
        <span>📚 রেফারেন্স:</span> ${ex.citation}
      </div>
    </div>
  `).join('');
}

function renderMetaphors(metaphors, lang) {
  return metaphors.map(m => `
    <div class="poro-metaphor-card">
      <div class="poro-meta-badge">💡 ${m.concept}</div>
      <h3 class="poro-meta-title">${m.title}</h3>
      <p class="poro-meta-desc">${m.description}</p>
    </div>
  `).join('');
}

export function bindPoroIndexEvents() {
  // Tab Switching
  const tabBtns = document.querySelectorAll('.poro-tab-btn');
  const tabPanes = document.querySelectorAll('.poro-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetTab = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(`tab-${targetTab}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Chapter Search Filter
  const searchInput = document.getElementById('poro-chapter-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.poro-chapter-card');
      cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(q)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }


  // Explicit Chapter Cards Click Navigation
  document.querySelectorAll('.poro-chapter-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-chapter-pdf-direct')) return;
      const href = card.getAttribute('href');
      if (href) {
        window.location.hash = href.replace(/^#/, '');
      }
    });
  });

  // Life Guidelines Category Filters
  const filterBtns = document.querySelectorAll('#lifecode-filters button');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const items = document.querySelectorAll('.poro-guideline-card');
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-cat') === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Book Info Modal
  const bookInfoBtn = document.getElementById('btn-poro-book-info');
  if (bookInfoBtn) {
    bookInfoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const existing = document.getElementById('poro-info-modal');
      if (existing) existing.remove();

      const lang = getLang();
      const modal = document.createElement('div');
      modal.id = 'poro-info-modal';
      modal.className = 'modal-backdrop active';
      modal.innerHTML = `
        <div class="modal-card animate-scale-up" style="max-width: 620px;">
          <div class="modal-header">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 1.6rem;">📘</span>
              <div>
                <h3 style="font-size: var(--text-lg); font-weight: 800; margin: 0; color: var(--color-text-primary); line-height: 1.2;">
                  ${lang === 'bn' ? 'বই পরিচিতি — পড়ো' : 'About the Book — PORO'}
                </h3>
                <div style="font-size: 11px; color: var(--color-text-muted);">
                  ${lang === 'bn' ? 'সরোবর প্রকাশন • প্রথম প্রকাশ: ১৪৩৭ হিজরি' : 'Shorobor Prokashon • 1st Edition: 1437 AH'}
                </div>
              </div>
            </div>
            <button class="modal-close" id="close-poro-info-modal" aria-label="Close">✕</button>
          </div>
          <div class="modal-body" style="line-height: 1.7; font-size: var(--text-sm); color: var(--color-text-secondary);">
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 8px 14px; margin-bottom: var(--space-4); background: var(--color-bg-alt); padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--color-border-light); font-size: var(--text-xs);">
              <strong>${lang === 'bn' ? 'সংকলন:' : 'Author:'}</strong> <span>${lang === 'bn' ? 'ওমর আল জাবির (Omar Al Zabir)' : 'Omar Al Zabir'}</span>
              <strong>${lang === 'bn' ? 'সম্পাদনা:' : 'Editor:'}</strong> <span>${lang === 'bn' ? 'শরীফ আবু হায়াত অপু' : 'Sharif Abu Hayat Opu'}</span>
              <strong>${lang === 'bn' ? 'শারঈ সম্পাদনা:' : 'Sharia Review:'}</strong> <span>${lang === 'bn' ? 'ড. আবু বকর মুহাম্মাদ যাকারিয়া (মদীনা বিশ্ববিদ্যালয়) ও সানাউল্লাহ নজির আহমদ (দারুল উলুম দেওবন্দ)' : 'Dr. Abu Bakr Muhammad Zakaria & Sanaullah Nazir Ahmad'}</span>
              <strong>${lang === 'bn' ? 'প্রকাশক ও পরিবেশক:' : 'Publisher:'}</strong> <span>${lang === 'bn' ? 'সরোবর প্রকাশন (www.shorobor.org)' : 'Shorobor Prokashon'}</span>
              <strong>${lang === 'bn' ? 'প্রচ্ছদ শিল্পী:' : 'Cover Artist:'}</strong> <span>${lang === 'bn' ? 'সানজিদা সিদ্দিকি কথা' : 'Sanjida Siddiqui Kotha'}</span>
              <strong>${lang === 'bn' ? 'আইএসবিএন (ISBN):' : 'ISBN:'}</strong> <span style="font-family: monospace; font-weight: 700; color: var(--color-poro);">978-984-92223-0-9</span>
              <strong>${lang === 'bn' ? 'বইয়ের কলেবর:' : 'Volume:'}</strong> <span>${lang === 'bn' ? '১৯টি অধ্যায় + ভূমিকা ও উপসংহার (১৮৪ পৃষ্ঠা)' : '19 Chapters + Preface & Epilogue (184 Pages)'}</span>
            </div>

            <div style="background: rgba(2, 132, 199, 0.06); border-left: 4px solid var(--color-poro); padding: var(--space-3) var(--space-4); border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: var(--space-4); font-style: italic; color: var(--color-text-primary); font-size: var(--text-xs);">
              ${lang === 'bn'
                ? '“এটি কোনো তাফসীর নয়। আধুনিক যুগের মানুষের জন্য কুরআনের আয়াতগুলোকে বৈজ্ঞানিক এবং যৌক্তিক দৃষ্টিকোণ থেকে দেখা এবং সমসাময়িক প্রশ্ন, দ্বন্দ্ব এবং ঘটনাগুলোর ওপর প্রাসঙ্গিক আলোচনা।”'
                : '"This is not a traditional Tafsir. It explores Quranic verses from contemporary scientific and rational perspectives, addressing modern dilemmas, questions, and realities."'}
            </div>

            <p style="margin-bottom: var(--space-3);">
              ${lang === 'bn' 
                ? 'বইটিতে বাইয়িনাহ ইন্সটিটিউট (নোমান আলী খান), মুহাম্মাদ আসাদ, মাওলানা মওদূদী, মুফতী শাফী উসমানী, সাইয়্যেদ কুতুব এবং প্রাচীন মুফাসসিরীনদের মোট ১৯টি প্রামাণ্য তাফসীর গ্রন্থের আলোকে আধুনিক সংশয়, বিজ্ঞান ও জীবনবিধানের বিশ্লেষণ তুলে ধরা হয়েছে।' 
                : 'The book synthesizes insights from 19 prominent classical and contemporary Tafsir sources to address modern skepticism, science, and life guidelines.'}
            </p>
          </div>
          <div class="modal-footer">
            <a href="${PORO_BOOK_METADATA.rokomariUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #059669 0%, #047857 100%); border: none;">
              <span>🛒</span> <span>${lang === 'bn' ? 'রকমারি থেকে অর্ডার করুন' : 'Order on Rokomari'}</span> <span>↗️</span>
            </a>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-modal-open-acquisition" style="display: inline-flex; align-items: center; gap: 6px;">
              <span>📘</span> <span>${lang === 'bn' ? 'বই পরিচিতি ও বিবরণ' : 'Book Details'}</span>
            </button>
            <a href="#/${lang}/poro/ch-1" class="btn btn-secondary btn-sm" id="btn-modal-read-now" style="display: inline-flex; align-items: center; gap: 6px;">
              <span>📖</span> <span>${lang === 'bn' ? 'ডিজিটাল অধ্যায় পড়া শুরু করুন' : 'Start Reading'}</span>
            </a>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 250);
      };

      modal.querySelector('#close-poro-info-modal')?.addEventListener('click', closeModal);
      modal.querySelector('#btn-modal-read-now')?.addEventListener('click', closeModal);

      modal.querySelector('#btn-modal-open-acquisition')?.addEventListener('click', () => {
        closeModal();
        const acqTabBtn = document.querySelector('.poro-tab-btn[data-tab="acquisition"]');
        if (acqTabBtn) {
          acqTabBtn.click();
          const tabNav = document.getElementById('poro-tabs-nav');
          if (tabNav) tabNav.scrollIntoView({ behavior: 'smooth' });
        }
      });

      modal.addEventListener('click', (ev) => {
        if (ev.target === modal) closeModal();
      });

      const onKeyDown = (ev) => {
        if (ev.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', onKeyDown);
        }
      };
      document.addEventListener('keydown', onKeyDown);
    });
  }

  // Bind interactive Tajweed rule tooltips on Poro page
  bindTajweedInteractions(document.getElementById('poro-page') || document);
}
