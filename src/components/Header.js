// ============================================
// EQRA — Global Header & Navigation Component
// ============================================

import { t, getLang, setLang } from '../i18n.js';
import { router } from '../router.js';
import { searchAll } from '../services/quranService.js';
import { 
  renderSurah3DBadge,
  Icon3DHome, 
  Icon3DQuran, 
  Icon3DHadith, 
  Icon3DDua, 
  Icon3DPoro, 
  Icon3DSearch, 
  Icon3DMoon, 
  Icon3DSun, 
  Icon3DAbout,
  Icon3DLogic,
  Icon3DBookSajid1,
  Icon3DBookSajid2,
  Icon3DUmrah,
  Icon3DVocab,
  Icon3DPercentPie
} from './Icons3D.js';

export function renderHeader() {
  const lang = getLang();
  const currentPath = window.location.hash || `/#/${lang}/`;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  return `
    <header class="header">
      <div class="header-inner">
        <!-- Brand Logo -->
        <a href="#/${lang}/" class="header-logo" aria-label="EQRA Home">
          <span class="header-logo-text">EQRA</span>
          <span class="header-logo-arabic">ٱقْرَأْ</span>
        </a>

        <!-- Desktop Navigation with 3D Icons -->
        <nav class="nav" aria-label="Main Navigation">
          <a href="#/${lang}/" class="nav-link ${currentPath === `#/${lang}/` || currentPath === `#/${lang}` ? 'active' : ''}">
            <span class="nav-link-icon-3d">${Icon3DHome}</span>
            <span>${t('navHome')}</span>
          </a>
          <a href="#/${lang}/quran" class="nav-link ${currentPath.includes('/quran') ? 'active' : ''}">
            <span class="nav-link-icon-3d">${Icon3DQuran}</span>
            <span>${t('navQuran')}</span>
          </a>
          <a href="#/${lang}/hadith" class="nav-link ${currentPath.includes('/hadith') ? 'active' : ''}">
            <span class="nav-link-icon-3d">${Icon3DHadith}</span>
            <span>${t('navHadith')}</span>
          </a>
          <a href="#/${lang}/dua" class="nav-link ${currentPath.includes('/dua') ? 'active' : ''}">
            <span class="nav-link-icon-3d">${Icon3DDua}</span>
            <span>${t('navDua')}</span>
          </a>
          <a href="#/${lang}/poro" class="nav-link ${currentPath.includes('/poro') ? 'active' : ''}">
            <span class="nav-link-icon-3d">${Icon3DPoro}</span>
            <span>${t('navPoro')}</span>
            <span class="poro-nav-badge">NEW</span>
          </a>
          <!-- Islam & Logic (Faith & Logic) Dropdown -->
          <div class="nav-item-dropdown ${currentPath.includes('/faith-and-logic') ? 'active' : ''}">
            <a href="#/${lang}/faith-and-logic" class="nav-link ${currentPath.includes('/faith-and-logic') ? 'active' : ''}">
              <span class="nav-link-icon-3d">${Icon3DLogic}</span>
              <span>${lang === 'bn' ? 'ইসলাম ও যুক্তি' : 'Faith & Logic'}</span>
              <span class="dropdown-chevron">▾</span>
            </a>
            <div class="nav-dropdown-menu">
              <a href="#/${lang}/faith-and-logic" class="dropdown-item ${currentPath === `#/${lang}/faith-and-logic` ? 'active' : ''}">
                <span class="dropdown-item-icon">${Icon3DLogic}</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'ইসলাম ও যুক্তি হাব' : 'Faith & Logic Hub'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? 'সকল বই ও যুক্তিশাস্ত্র' : 'Overview & Logic Matrix'}</span>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#/${lang}/faith-and-logic/sajid-1" class="dropdown-item ${currentPath.includes('/sajid-1') ? 'active' : ''}">
                <span class="dropdown-item-icon">${Icon3DBookSajid1}</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'প্যারাডক্সিক্যাল সাজিদ ১' : 'Paradoxical Sajid 1'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? 'আরিফ আজাদ • গার্ডিয়ান প্রকাশনী' : 'Arif Azad • Guardian Publications'}</span>
                </div>
              </a>
              <a href="#/${lang}/faith-and-logic/sajid-2" class="dropdown-item ${currentPath.includes('/sajid-2') ? 'active' : ''}">
                <span class="dropdown-item-icon">${Icon3DBookSajid2}</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'প্যারাডক্সিক্যাল সাজিদ ২' : 'Paradoxical Sajid 2'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? 'আরিফ আজাদ • সমকালীন প্রকাশন' : 'Arif Azad • Somokalin Prokashon'}</span>
                </div>
              </a>
            </div>
          </div>
          <!-- Umrah Portal Dropdown -->
          <div class="nav-item-dropdown ${currentPath.includes('/umrah') ? 'active' : ''}">
            <a href="#/${lang}/umrah" class="nav-link ${currentPath.includes('/umrah') ? 'active' : ''}">
              <span class="nav-link-icon-3d">${Icon3DUmrah}</span>
              <span>${lang === 'bn' ? 'উমরাহ' : 'Umrah'}</span>
              <span class="poro-nav-badge" style="background: linear-gradient(135deg, #059669, #047857);">GUIDE</span>
              <span class="dropdown-chevron">▾</span>
            </a>
            <div class="nav-dropdown-menu">
              <a href="#/${lang}/umrah" class="dropdown-item ${currentPath === `#/${lang}/umrah` || currentPath === `#/${lang}/umrah/` ? 'active' : ''}">
                <span class="dropdown-item-icon">${Icon3DUmrah}</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'উমরাহ মূল হাব' : 'Umrah Portal Hub'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? '৮টি ধারাবাহিক ধাপ ও পূর্ণাঙ্গ গাইড' : '8-step journey & core overview'}</span>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#/${lang}/umrah/guide" class="dropdown-item ${currentPath.includes('/guide') ? 'active' : ''}">
                <span class="dropdown-item-icon">🕋</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'ধাপে ধাপে গাইড' : 'Step-by-Step Guide'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? 'মীক্বাত থেকে হলক্ব/ক্বসর পর্যন্ত' : 'From Miqat to Tahallul'}</span>
                </div>
              </a>
              <a href="#/${lang}/umrah/checklist" class="dropdown-item ${currentPath.includes('/checklist') ? 'active' : ''}">
                <span class="dropdown-item-icon">📋</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'ইন্টারঅ্যাক্টিভ চেকলিস্ট' : 'Interactive Checklist'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? 'প্রস্তুতি ও নথিপত্র ট্র্যাকার' : 'Gear, documents & spiritual items'}</span>
                </div>
              </a>
              <a href="#/${lang}/umrah/duas" class="dropdown-item ${currentPath.includes('/duas') ? 'active' : ''}">
                <span class="dropdown-item-icon">📿</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'সহীহ দোয়াসমূহ' : 'Authentic Duas'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? 'তালবিয়াহ, তাওয়াফ ও সাঈর দোয়া' : 'Talbiyah, Tawaf & Sa\'i supplications'}</span>
                </div>
              </a>
              <a href="#/${lang}/umrah/faq" class="dropdown-item ${currentPath.includes('/faq') ? 'active' : ''}">
                <span class="dropdown-item-icon">❓</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'উমরাহ প্রশ্নোত্তর (FAQ)' : 'Verified Umrah FAQ'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? 'প্রয়োজনীয় সমাধান ও ফতোয়া' : 'Common questions answered with evidence'}</span>
                </div>
              </a>
            </div>
          </div>
          <!-- Understand Quran 50% & 65% Dropdown -->
          <div class="nav-item-dropdown ${currentPath.includes('/understand-quran') ? 'active' : ''}">
            <a href="#/${lang}/understand-quran" class="nav-link ${currentPath.includes('/understand-quran') ? 'active' : ''}">
              <span class="nav-link-icon-3d">${Icon3DVocab}</span>
              <span>${lang === 'bn' ? 'কুরআন ৫০%' : 'Understand 50%'}</span>
              <span class="poro-nav-badge" style="background: linear-gradient(135deg, #0284C7, #0369A1);">50%-65%</span>
              <span class="dropdown-chevron">▾</span>
            </a>
            <div class="nav-dropdown-menu">
              <a href="#/${lang}/understand-quran" class="dropdown-item ${currentPath === `#/${lang}/understand-quran` || currentPath === `#/${lang}/understand-quran/` ? 'active' : ''}">
                <span class="dropdown-item-icon">${Icon3DPercentPie}</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'কুরআন শব্দভাণ্ডার হাব' : 'Vocabulary Course Hub'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? '৫০% ও ৬৫% শব্দভাণ্ডার ওভারভিউ' : 'Overview & 7-Step Method'}</span>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#/${lang}/understand-quran/book-1" class="dropdown-item ${currentPath.includes('/understand-quran/book-1') ? 'active' : ''}">
                <span class="dropdown-item-icon">📘</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? '১ম খণ্ড: ৫০% কুরআন শিক্ষা' : 'Book 1: Understand 50%'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? '৭৭টি মূল শব্দ ও ৭টি অধ্যায়' : '77 High-Frequency Words'}</span>
                </div>
              </a>
              <a href="#/${lang}/understand-quran/book-2" class="dropdown-item ${currentPath.includes('/understand-quran/book-2') ? 'active' : ''}">
                <span class="dropdown-item-icon">📗</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? '২য় খণ্ড: ৬৫% শব্দভাণ্ডার' : 'Book 2: Learn 50% - 65%'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? '১৯৫টি গুণবাচক বিশেষ্য ও বিশেষণ' : '195 Nouns & Adjectives'}</span>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#/${lang}/understand-quran/book-1?mode=pdf" class="dropdown-item">
                <span class="dropdown-item-icon">📄</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'অরিজিনাল PDF ভিউয়ার' : 'Original PDF Viewer'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? 'ড. ইসলাম ফিকরি-র মূল বই' : 'Official Publication Viewer'}</span>
                </div>
              </a>
            </div>
          </div>
        </nav>

        <!-- Header Actions: Search, Lang, Theme, Mobile -->
        <div class="header-actions">
          <button class="btn-ghost btn-search-3d" id="open-search-btn" title="${t('searchPlaceholder')}" aria-label="Search">
            <span class="icon-3d-wrap">${Icon3DSearch}</span>
          </button>

          <!-- Language Switcher -->
          <div class="lang-switch" role="group" aria-label="Language Selector">
            <button class="lang-switch-btn ${lang === 'bn' ? 'active' : ''}" data-lang="bn">বাং</button>
            <button class="lang-switch-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
          </div>

          <!-- Theme Toggle -->
          <button class="theme-toggle btn-theme-3d" id="theme-toggle-btn" title="Toggle Theme" aria-label="Toggle Theme">
            <span class="icon-3d-wrap">${isDark ? Icon3DSun : Icon3DMoon}</span>
          </button>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Open Navigation Menu">
            ☰
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer with 3D Icons -->
      <div class="mobile-nav" id="mobile-drawer">
        <a href="#/${lang}/" class="mobile-nav-link">
          <span class="nav-link-icon-3d">${Icon3DHome}</span> <span>${t('navHome')}</span>
        </a>
        <a href="#/${lang}/quran" class="mobile-nav-link">
          <span class="nav-link-icon-3d">${Icon3DQuran}</span> <span>${t('navQuran')}</span>
        </a>
        <a href="#/${lang}/hadith" class="mobile-nav-link">
          <span class="nav-link-icon-3d">${Icon3DHadith}</span> <span>${t('navHadith')}</span>
        </a>
        <a href="#/${lang}/dua" class="mobile-nav-link">
          <span class="nav-link-icon-3d">${Icon3DDua}</span> <span>${t('navDua')}</span>
        </a>
        <a href="#/${lang}/poro" class="mobile-nav-link">
          <span class="nav-link-icon-3d">${Icon3DPoro}</span> <span>${t('navPoro')} (${lang === 'bn' ? 'বই' : 'Book'})</span>
        </a>
        <!-- Mobile Islam & Logic Section -->
        <div class="mobile-nav-group">
          <div class="mobile-nav-heading">
            <span class="nav-link-icon-3d" style="font-size:16px;">${Icon3DLogic}</span>
            <span>${lang === 'bn' ? 'ইসলাম ও যুক্তি' : 'Faith & Logic'}</span>
          </div>
          <a href="#/${lang}/faith-and-logic" class="mobile-nav-sublink ${currentPath === `#/${lang}/faith-and-logic` ? 'active' : ''}">
            <span>🏛️</span> <span>${lang === 'bn' ? 'মূল সূচিপত্র ও লজিক হাব' : 'Logic Hub & Overview'}</span>
          </a>
          <a href="#/${lang}/faith-and-logic/sajid-1" class="mobile-nav-sublink ${currentPath.includes('/sajid-1') ? 'active' : ''}">
            <span>📕</span> <span>${lang === 'bn' ? 'প্যারাডক্সিক্যাল সাজিদ ১ (PDF ও রিডার)' : 'Paradoxical Sajid 1 (PDF & Reader)'}</span>
          </a>
          <a href="#/${lang}/faith-and-logic/sajid-2" class="mobile-nav-sublink ${currentPath.includes('/sajid-2') ? 'active' : ''}">
            <span>📗</span> <span>${lang === 'bn' ? 'প্যারাডক্সিক্যাল সাজিদ ২ (PDF ও রিডার)' : 'Paradoxical Sajid 2 (PDF & Reader)'}</span>
          </a>
        </div>
        <!-- Mobile Umrah Section -->
        <div class="mobile-nav-group">
          <div class="mobile-nav-heading">
            <span class="nav-link-icon-3d" style="font-size:16px;">${Icon3DUmrah}</span>
            <span>${lang === 'bn' ? 'উমরাহ পোর্টাল' : 'Umrah Portal'}</span>
          </div>
          <a href="#/${lang}/umrah" class="mobile-nav-sublink ${currentPath === `#/${lang}/umrah` || currentPath === `#/${lang}/umrah/` ? 'active' : ''}">
            <span>🕋</span> <span>${lang === 'bn' ? 'উমরাহ মূল হাব' : 'Umrah Portal Hub'}</span>
          </a>
          <a href="#/${lang}/umrah/guide" class="mobile-nav-sublink ${currentPath.includes('/guide') ? 'active' : ''}">
            <span>📖</span> <span>${lang === 'bn' ? 'ধাপে ধাপে গাইড' : 'Step-by-Step Guide'}</span>
          </a>
          <a href="#/${lang}/umrah/checklist" class="mobile-nav-sublink ${currentPath.includes('/checklist') ? 'active' : ''}">
            <span>📋</span> <span>${lang === 'bn' ? 'প্রস্তুতি চেকলিস্ট' : 'Interactive Checklist'}</span>
          </a>
          <a href="#/${lang}/umrah/duas" class="mobile-nav-sublink ${currentPath.includes('/duas') ? 'active' : ''}">
            <span>📿</span> <span>${lang === 'bn' ? 'সহীহ দোয়াসমূহ' : 'Authentic Duas'}</span>
          </a>
          <a href="#/${lang}/umrah/faq" class="mobile-nav-sublink ${currentPath.includes('/faq') ? 'active' : ''}">
            <span>❓</span> <span>${lang === 'bn' ? 'উমরাহ প্রশ্নোত্তর (FAQ)' : 'Verified Umrah FAQ'}</span>
          </a>
        </div>
        <!-- Mobile Understand Quran Section -->
        <div class="mobile-nav-group">
          <div class="mobile-nav-heading">
            <span class="nav-link-icon-3d" style="font-size:16px;">${Icon3DVocab}</span>
            <span>${lang === 'bn' ? 'কুরআন ৫০% ও ৬৫% শিক্ষা' : 'Understand 50% - 65% Quran'}</span>
          </div>
          <a href="#/${lang}/understand-quran" class="mobile-nav-sublink ${currentPath === `#/${lang}/understand-quran` || currentPath === `#/${lang}/understand-quran/` ? 'active' : ''}">
            <span>📊</span> <span>${lang === 'bn' ? 'কোর্স হাব ও মেথডোলজি' : 'Course Overview & Method'}</span>
          </a>
          <a href="#/${lang}/understand-quran/book-1" class="mobile-nav-sublink ${currentPath.includes('/understand-quran/book-1') ? 'active' : ''}">
            <span>📘</span> <span>${lang === 'bn' ? '১ম খণ্ড: ৫০% কুরআন শিক্ষা (ডিজিটাল ও PDF)' : 'Book 1: 50% Quran (Digital & PDF)'}</span>
          </a>
          <a href="#/${lang}/understand-quran/book-2" class="mobile-nav-sublink ${currentPath.includes('/understand-quran/book-2') ? 'active' : ''}">
            <span>📗</span> <span>${lang === 'bn' ? '২য় খণ্ড: ৬৫% শব্দভাণ্ডার (ডিজিটাল ও PDF)' : 'Book 2: 65% Quran (Digital & PDF)'}</span>
          </a>
        </div>
        <a href="#/${lang}/about" class="mobile-nav-link">
          <span class="nav-link-icon-3d">${Icon3DAbout}</span> <span>${t('navAbout')}</span>
        </a>
      </div>
    </header>

    <!-- Global Search Modal -->
    <div id="search-modal" class="app-loader hidden" style="background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); z-index: 9998;">
      <div class="card" style="width: 90%; max-width: 640px; max-height: 85vh; display: flex; flex-direction: column; overflow: hidden; padding: var(--space-6); background: var(--color-surface); box-shadow: var(--shadow-xl);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4);">
          <div style="font-weight: 700; font-size: var(--text-lg); color: var(--color-text-primary); display: flex; align-items: center; gap: var(--space-2);">
            <span class="icon-3d-wrap">${Icon3DSearch}</span> <span>${lang === 'bn' ? 'কুরআন ও হাদিস অনুসন্ধান' : 'Search Quran & Hadith'}</span>
          </div>
          <button id="close-search-btn" class="btn-ghost" style="font-size: 1.25rem;">✕</button>
        </div>

        <div class="search-bar" style="max-width: 100%; margin-bottom: var(--space-4);">
          <span class="search-icon">${Icon3DSearch}</span>
          <input type="text" id="modal-search-input" class="search-input" placeholder="${t('searchPlaceholder')}" autofocus autocomplete="off" />
        </div>

        <div id="search-results-box" style="flex: 1; overflow-y: auto; max-height: 50vh; display: flex; flex-direction: column; gap: var(--space-3);">
          <div style="text-align: center; color: var(--color-text-muted); padding: var(--space-8);">
            ${lang === 'bn' ? 'সূরা, আয়াত, হাদিস অথবা দোয়া অনুসন্ধান করুন...' : 'Type a Surah, Ayah, Hadith or Dua to search...'}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function bindHeaderEvents() {
  // Language switcher
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.target.getAttribute('data-lang');
      if (targetLang && targetLang !== getLang()) {
        setLang(targetLang);
        const hash = window.location.hash;
        const newHash = hash.replace(/^#\/(bn|en)/, `#/${targetLang}`);
        window.location.hash = newHash;
        window.location.reload();
      }
    });
  });

  // Dark/Light theme toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('eqra-theme', next);
      themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  // Mobile menu drawer
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (menuToggle && drawer) {
    menuToggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }

  // Search Modal open/close & live querying
  const openSearchBtn = document.getElementById('open-search-btn');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('modal-search-input');
  const searchResultsBox = document.getElementById('search-results-box');

  if (openSearchBtn && searchModal && searchInput) {
    openSearchBtn.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
      setTimeout(() => searchInput.focus(), 100);
    });

    if (closeSearchBtn) {
      closeSearchBtn.addEventListener('click', () => {
        searchModal.classList.add('hidden');
      });
    }

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchModal.classList.add('hidden');
      }
    });

    // Handle Esc key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
        searchModal.classList.add('hidden');
      }
    });

    // Dynamic Live Search Query
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const val = e.target.value.trim();
      debounceTimer = setTimeout(async () => {
        if (!val || val.length < 2) {
          searchResultsBox.innerHTML = `
            <div style="text-align: center; color: var(--color-text-muted); padding: var(--space-8);">
              ${getLang() === 'bn' ? 'সূরা, আয়াত, হাদিস অথবা দোয়া অনুসন্ধান করুন...' : 'Type a Surah, Ayah, Hadith or Dua to search...'}
            </div>
          `;
          return;
        }

        const results = searchAll(val, getLang());
        renderSearchResults(results, searchResultsBox, searchModal);
      }, 200);
    });
  }
}

function renderSearchResults(results, container, modal) {
  const lang = getLang();
  const total = results.surahs.length + results.hadiths.length + results.duas.length + (results.poroChapters ? results.poroChapters.length : 0);

  if (total === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--color-text-muted); padding: var(--space-8);">
        ${t('searchNoResults')}
      </div>
    `;
    return;
  }

  let html = '';

  // Surahs
  if (results.surahs.length > 0) {
    html += `<div style="font-size: var(--text-xs); font-weight: 700; color: var(--color-quran); text-transform: uppercase; margin-top: var(--space-2);">${t('navQuran')} (${results.surahs.length})</div>`;
    results.surahs.forEach(s => {
      html += `
        <a href="#/${lang}/quran/${s.number}" class="surah-card search-item-link" style="padding: var(--space-2) var(--space-3);">
          ${renderSurah3DBadge(s.number, 36)}
          <div class="surah-info">
            <div style="font-weight: 600; color: var(--color-text-primary); font-size: var(--text-sm);">
              ${lang === 'bn' ? s.banglaName : s.englishName}
            </div>
            <div class="surah-meta">${lang === 'bn' ? s.banglaMeaning : s.englishMeaning} • ${s.ayahs} ${t('ayahPlural')}</div>
          </div>
          <div class="surah-name-arabic" style="font-size: var(--text-base);">${s.name}</div>
        </a>
      `;
    });
  }

  // Poro Book Chapters
  if (results.poroChapters && results.poroChapters.length > 0) {
    html += `<div style="font-size: var(--text-xs); font-weight: 700; color: var(--color-poro); text-transform: uppercase; margin-top: var(--space-2); display: flex; align-items: center; gap: 6px;"><span class="icon-3d-wrap" style="width: 16px; height: 16px;">${Icon3DPoro}</span> <span>${lang === 'bn' ? 'পড়ো বইয়ের অধ্যায়' : 'Poro Chapters'} (${results.poroChapters.length})</span></div>`;
    results.poroChapters.forEach(c => {
      html += `
        <a href="#/${lang}/poro/${c.id}" class="card search-item-link" style="padding: var(--space-3); border-left: 3px solid var(--color-poro);">
          <div style="font-weight: 600; font-size: var(--text-sm); color: var(--color-text-primary);">${lang === 'bn' ? c.titleBangla : c.titleEnglish}</div>
          <div style="font-size: var(--text-xs); color: var(--color-text-muted); line-height: 1.4;">${c.summary}</div>
        </a>
      `;
    });
  }

  // Duas
  if (results.duas.length > 0) {
    html += `<div style="font-size: var(--text-xs); font-weight: 700; color: var(--color-dua); text-transform: uppercase; margin-top: var(--space-2);">${t('navDua')} (${results.duas.length})</div>`;
    results.duas.forEach(d => {
      html += `
        <a href="#/${lang}/dua" class="card search-item-link section-card-dua" style="padding: var(--space-3);">
          <div style="font-weight: 600; font-size: var(--text-sm);">${lang === 'bn' ? d.titleBangla : d.titleEnglish}</div>
          <div style="font-size: var(--text-xs); color: var(--color-text-muted);">${d.reference}</div>
        </a>
      `;
    });
  }

  // Hadiths
  if (results.hadiths.length > 0) {
    html += `<div style="font-size: var(--text-xs); font-weight: 700; color: var(--color-hadith); text-transform: uppercase; margin-top: var(--space-2);">${t('navHadith')} (${results.hadiths.length})</div>`;
    results.hadiths.forEach(h => {
      html += `
        <a href="#/${lang}/hadith" class="card search-item-link section-card-hadith" style="padding: var(--space-3);">
          <div style="font-weight: 600; font-size: var(--text-sm);">${h.reference}</div>
          <div style="font-size: var(--text-xs); color: var(--color-text-secondary); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${lang === 'bn' ? h.bangla : h.english}
          </div>
        </a>
      `;
    });
  }


  container.innerHTML = html;

  container.querySelectorAll('.search-item-link').forEach(link => {
    link.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  });
}
