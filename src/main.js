// ============================================
// EQRA — Main Application Entry Point
// ============================================

import './styles/index.css';
import { router } from './router.js';
import { initLang, getLang, setLang } from './i18n.js';
import { renderHeader, bindHeaderEvents } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { audioPlayer } from './components/AudioPlayer.js';

// Page components
import { renderHomePage, bindHomeEvents } from './pages/Home.js';
import { renderQuranIndexPage, bindQuranIndexEvents } from './pages/QuranIndex.js';
import { renderSurahPage, bindSurahPageEvents } from './pages/SurahPage.js';
import { renderHadithIndexPage, bindHadithEvents } from './pages/HadithIndex.js';
import { renderHadithBookPage, bindHadithBookEvents } from './pages/HadithBookPage.js';
import { renderDuaIndexPage, bindDuaEvents } from './pages/DuaIndex.js';
import { renderPoroIndexPage, bindPoroIndexEvents } from './pages/PoroIndex.js';
import { renderPoroChapterPage, bindPoroChapterEvents } from './pages/PoroChapter.js';
import { renderBookmarksPage, bindBookmarksEvents } from './pages/BookmarksPage.js';
import { renderAboutPage } from './pages/About.js';
import { renderFaithLogicIndex, bindFaithLogicIndexEvents } from './pages/FaithLogicIndex.js';
import { renderFaithLogicBookPage, bindFaithLogicBookEvents } from './pages/FaithLogicBookPage.js';
import { renderUmrahIndexPage, bindUmrahIndexEvents } from './pages/UmrahIndex.js';
import { renderUmrahSubPage, bindUmrahSubPageEvents } from './pages/UmrahPage.js';
import { renderUnderstandQuranIndex, bindUnderstandQuranIndexEvents } from './pages/UnderstandQuranIndex.js';
import { renderUnderstandQuranBookPage, bindUnderstandQuranBookEvents } from './pages/UnderstandQuranBookPage.js';

// Initialize Theme
const savedTheme = localStorage.getItem('eqra-theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Initialize App Shell Structure
const app = document.querySelector('#app');
app.innerHTML = `
  <div id="header-root"></div>
  <main id="content-root" role="main"></main>
  <div id="footer-root"></div>
  <div id="audio-player-root"></div>
`;

// Mount Audio Player once
audioPlayer.mount(document.getElementById('audio-player-root'));

// Helper to update shell & render page
async function loadPage(renderFn, bindFn, params = {}, query = {}) {
  const contentRoot = document.getElementById('content-root');
  const headerRoot = document.getElementById('header-root');
  const footerRoot = document.getElementById('footer-root');

  // Check language from URL
  if (params.lang && (params.lang === 'bn' || params.lang === 'en')) {
    setLang(params.lang);
  }

  // Update Header & Footer
  headerRoot.innerHTML = renderHeader();
  bindHeaderEvents();
  footerRoot.innerHTML = renderFooter();

  // Render Page Content
  const html = await renderFn(params, query);
  contentRoot.innerHTML = html;

  if (bindFn) {
    await bindFn(params, query);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hide initial loader if visible
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.classList.add('hidden');
  }
}

// Router Before Hook: Sync Language
router.before((path) => {
  const match = path.match(/^\/(bn|en)(\/|$)/);
  if (match) {
    setLang(match[1]);
  } else if (!window.location.hash || window.location.hash === '#' || window.location.hash === '#/') {
    const defaultLang = localStorage.getItem('eqra-lang') || 'bn';
    window.location.hash = `/${defaultLang}/`;
    return false;
  }
});

// Register Routes
router
  // Home
  .on('/:lang', (params, query) => loadPage(renderHomePage, bindHomeEvents, params, query))
  .on('/:lang/', (params, query) => loadPage(renderHomePage, bindHomeEvents, params, query))

  // Quran Index (114 Surahs)
  .on('/:lang/quran', (params, query) => loadPage(renderQuranIndexPage, bindQuranIndexEvents, params, query))

  // Surah Reader
  .on('/:lang/quran/:surah', (params, query) => loadPage(renderSurahPage, bindSurahPageEvents, params, query))

  // Hadith Index
  .on('/:lang/hadith', (params, query) => loadPage(renderHadithIndexPage, bindHadithEvents, params, query))

  // Hadith Book Reader (Bukhari 97 books & Muslim 56 books)
  .on('/:lang/hadith/:collection/:book', (params, query) => loadPage(renderHadithBookPage, bindHadithBookEvents, params, query))

  // Dua
  .on('/:lang/dua', (params, query) => loadPage(renderDuaIndexPage, bindDuaEvents, params, query))

  // Poro Book Hub & Chapters
  .on('/:lang/poro', (params, query) => loadPage(renderPoroIndexPage, bindPoroIndexEvents, params, query))
  .on('/:lang/poro/:chapter', (params, query) => loadPage(renderPoroChapterPage, bindPoroChapterEvents, params, query))

  // Bookmarks
  .on('/:lang/bookmarks', (params, query) => loadPage(renderBookmarksPage, bindBookmarksEvents, params, query))

  // About
  .on('/:lang/about', (params, query) => loadPage(renderAboutPage, null, params, query))

  // Faith & Logic (ইসলাম ও যুক্তি)
  .on('/:lang/faith-and-logic', (params, query) => loadPage(renderFaithLogicIndex, bindFaithLogicIndexEvents, params, query))
  .on('/:lang/faith-and-logic/:book', (params, query) => loadPage(renderFaithLogicBookPage, bindFaithLogicBookEvents, params, query))
  .on('/:lang/faith-and-logic/:book/:chapter', (params, query) => loadPage(renderFaithLogicBookPage, bindFaithLogicBookEvents, params, query))

  // Umrah Portal (Digital Umrah Guide & Hub)
  .on('/:lang/umrah', (params, query) => loadPage(renderUmrahIndexPage, bindUmrahIndexEvents, params, query))
  .on('/:lang/umrah/', (params, query) => loadPage(renderUmrahIndexPage, bindUmrahIndexEvents, params, query))
  .on('/:lang/umrah/:section', (params, query) => loadPage(
    (p) => renderUmrahSubPage(p.section),
    (p) => bindUmrahSubPageEvents(p.section),
    params,
    query
  ))

  // Understand Quran 50% & 65% (Arabic 101)
  .on('/:lang/understand-quran', (params, query) => loadPage(renderUnderstandQuranIndex, bindUnderstandQuranIndexEvents, params, query))
  .on('/:lang/understand-quran/', (params, query) => loadPage(renderUnderstandQuranIndex, bindUnderstandQuranIndexEvents, params, query))
  .on('/:lang/understand-quran/:book', (params, query) => loadPage(renderUnderstandQuranBookPage, bindUnderstandQuranBookEvents, params, query))
  .on('/:lang/understand-quran/:book/:list', (params, query) => loadPage(renderUnderstandQuranBookPage, bindUnderstandQuranBookEvents, params, query))

  // 404 Fallback
  .on('*', () => {
    const lang = getLang();
    window.location.hash = `/${lang}/`;
  });

// Handle initial load
const hash = window.location.hash;
if (!hash || hash === '#' || hash === '#/') {
  const lang = localStorage.getItem('eqra-lang') || 'bn';
  window.location.hash = `/${lang}/`;
} else {
  router.resolve();
}
