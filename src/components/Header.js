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

  const isFaithLogicActive = currentPath.includes('/faith-and-logic');
  const isUmrahActive = currentPath.includes('/umrah');
  const isVocabActive = currentPath.includes('/understand-quran');

  return `
    <header class="header">
      <div class="header-inner">
        <!-- Brand Logo -->
        <a href="#/${lang}/" class="header-logo" aria-label="EQRA Home">
          <span class="header-logo-text">EQRA</span>
          <span class="header-logo-arabic">ٱقْرَأْ</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav" aria-label="Main Navigation">
          <a href="#/${lang}/" class="nav-link ${currentPath === `#/${lang}/` || currentPath === `#/${lang}` || currentPath === '' ? 'active' : ''}">
            <span class="nav-icon">${Icon3DHome}</span>
            <span class="nav-text">${t('navHome')}</span>
          </a>
          <a href="#/${lang}/quran" class="nav-link ${currentPath.includes('/quran') ? 'active' : ''}">
            <span class="nav-icon">${Icon3DQuran}</span>
            <span class="nav-text">${t('navQuran')}</span>
          </a>
          <a href="#/${lang}/hadith" class="nav-link ${currentPath.includes('/hadith') ? 'active' : ''}">
            <span class="nav-icon">${Icon3DHadith}</span>
            <span class="nav-text">${t('navHadith')}</span>
          </a>
          <a href="#/${lang}/dua" class="nav-link ${currentPath.includes('/dua') ? 'active' : ''}">
            <span class="nav-icon">${Icon3DDua}</span>
            <span class="nav-text">${t('navDua')}</span>
          </a>
          <a href="#/${lang}/poro" class="nav-link ${currentPath.includes('/poro') ? 'active' : ''}">
            <span class="nav-icon">${Icon3DPoro}</span>
            <span class="nav-text">${t('navPoro')}</span>
            <span class="nav-badge nav-badge-poro">NEW</span>
          </a>

          <!-- Islam & Logic (Faith & Logic) Dropdown -->
          <div class="nav-item-dropdown ${isFaithLogicActive ? 'active' : ''}">
            <a href="#/${lang}/faith-and-logic" class="nav-link ${isFaithLogicActive ? 'active' : ''}" aria-haspopup="true" aria-expanded="false">
              <span class="nav-icon">${Icon3DLogic}</span>
              <span class="nav-text">${lang === 'bn' ? 'ইসলাম ও যুক্তি' : 'Faith & Logic'}</span>
              <svg class="dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 1 5 5 9 1"></polyline>
              </svg>
            </a>
            <div class="nav-dropdown-menu">
              <a href="#/${lang}/faith-and-logic" class="dropdown-item ${currentPath === `#/${lang}/faith-and-logic` ? 'active' : ''}">
                <span class="dropdown-item-icon">${Icon3DLogic}</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'ইসলাম ও যুক্তি হাব' : 'Faith & Logic Hub'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? 'সকল বই, সূচিপত্র ও যুক্তিশাস্ত্র' : 'Overview & Logic Matrix'}</span>
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
          <div class="nav-item-dropdown ${isUmrahActive ? 'active' : ''}">
            <a href="#/${lang}/umrah" class="nav-link ${isUmrahActive ? 'active' : ''}" aria-haspopup="true" aria-expanded="false">
              <span class="nav-icon">${Icon3DUmrah}</span>
              <span class="nav-text">${lang === 'bn' ? 'উমরাহ' : 'Umrah'}</span>
              <span class="nav-badge nav-badge-umrah">GUIDE</span>
              <svg class="dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 1 5 5 9 1"></polyline>
              </svg>
            </a>
            <div class="nav-dropdown-menu">
              <a href="#/${lang}/umrah" class="dropdown-item ${currentPath === `#/${lang}/umrah` || currentPath === `#/${lang}/umrah/` ? 'active' : ''}">
                <span class="dropdown-item-icon">${Icon3DUmrah}</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? 'উমরাহ মূল পোর্টাল' : 'Umrah Portal Hub'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? '৮টি ধারাবাহিক ধাপ ও পূর্ণাঙ্গ রূপরেখা' : '8-step journey & core overview'}</span>
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

          <!-- Quran Vocabulary Dropdown -->
          <div class="nav-item-dropdown ${isVocabActive ? 'active' : ''}">
            <a href="#/${lang}/understand-quran" class="nav-link ${isVocabActive ? 'active' : ''}" aria-haspopup="true" aria-expanded="false">
              <span class="nav-icon">${Icon3DVocab}</span>
              <span class="nav-text">${lang === 'bn' ? 'কুরআন শব্দার্থ' : 'Quran Vocabulary'}</span>
              <span class="nav-badge nav-badge-vocab">VOCAB</span>
              <svg class="dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 1 5 5 9 1"></polyline>
              </svg>
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
                  <span class="dropdown-item-title">${lang === 'bn' ? '১ম খণ্ড: ৫০% মূল শব্দভাণ্ডার' : 'Part 1: 50% High-Frequency Words'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? '৭৭টি মূল শব্দ ও ৭টি অধ্যায়' : '77 High-Frequency Words'}</span>
                </div>
              </a>
              <a href="#/${lang}/understand-quran/book-2" class="dropdown-item ${currentPath.includes('/understand-quran/book-2') ? 'active' : ''}">
                <span class="dropdown-item-icon">📗</span>
                <div class="dropdown-item-text">
                  <span class="dropdown-item-title">${lang === 'bn' ? '২য় খণ্ড: ৬৫% শব্দভাণ্ডার' : 'Part 2: 65% Vocabulary'}</span>
                  <span class="dropdown-item-desc">${lang === 'bn' ? '১৯৫টি গুণবাচক বিশেষ্য ও বিশেষণ' : '195 Nouns & Adjectives'}</span>
                </div>
              </a>
            </div>
          </div>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <!-- Search Trigger Button -->
          <button class="header-action-btn search-trigger-btn" id="open-search-btn" title="${t('searchPlaceholder')} (Ctrl+K)" aria-label="Search">
            <span class="action-btn-icon">${Icon3DSearch}</span>
            <span class="search-trigger-kbd"><kbd>⌘K</kbd></span>
          </button>

          <!-- Language Switcher -->
          <div class="lang-switch" role="group" aria-label="Language Selector">
            <button class="lang-switch-btn ${lang === 'bn' ? 'active' : ''}" data-lang="bn">বাং</button>
            <button class="lang-switch-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
          </div>

          <!-- Theme Toggle Button -->
          <button class="header-action-btn theme-toggle-btn" id="theme-toggle-btn" title="Toggle Theme" aria-label="Toggle Theme">
            <span class="action-btn-icon">${isDark ? Icon3DSun : Icon3DMoon}</span>
          </button>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Open Navigation Menu" aria-expanded="false">
            <span class="hamburger-box">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Backdrop -->
      <div class="mobile-nav-backdrop" id="mobile-nav-backdrop"></div>

      <!-- Mobile Navigation Drawer -->
      <aside class="mobile-nav-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <!-- Drawer Header -->
        <div class="mobile-drawer-header">
          <a href="#/${lang}/" class="mobile-drawer-logo" aria-label="EQRA Home">
            <span class="logo-text">EQRA</span>
            <span class="logo-arabic">ٱقْرَأْ</span>
          </a>
          <button class="mobile-drawer-close" id="mobile-drawer-close" aria-label="Close navigation menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Drawer Content -->
        <div class="mobile-drawer-body">
          <!-- Mobile Quick Search Trigger -->
          <button class="mobile-drawer-search" id="mobile-search-trigger" type="button">
            <span class="search-icon">${Icon3DSearch}</span>
            <span class="search-text">${lang === 'bn' ? 'কুরআন, হাদিস ও দোয়া খুঁজুন...' : 'Search Quran, Hadith, Dua...'}</span>
            <span class="search-shortcut">⌘K</span>
          </button>

          <!-- Section: Primary Navigation -->
          <div class="mobile-nav-section">
            <div class="mobile-section-label">${lang === 'bn' ? 'মূল মেন্যু' : 'MAIN MENU'}</div>
            <div class="mobile-nav-list">
              <a href="#/${lang}/" class="mobile-nav-link ${currentPath === `#/${lang}/` || currentPath === `#/${lang}` || currentPath === '' ? 'active' : ''}">
                <span class="link-icon">${Icon3DHome}</span>
                <span class="link-title">${t('navHome')}</span>
              </a>
              <a href="#/${lang}/quran" class="mobile-nav-link ${currentPath.includes('/quran') ? 'active' : ''}">
                <span class="link-icon">${Icon3DQuran}</span>
                <span class="link-title">${t('navQuran')}</span>
              </a>
              <a href="#/${lang}/hadith" class="mobile-nav-link ${currentPath.includes('/hadith') ? 'active' : ''}">
                <span class="link-icon">${Icon3DHadith}</span>
                <span class="link-title">${t('navHadith')}</span>
              </a>
              <a href="#/${lang}/dua" class="mobile-nav-link ${currentPath.includes('/dua') ? 'active' : ''}">
                <span class="link-icon">${Icon3DDua}</span>
                <span class="link-title">${t('navDua')}</span>
              </a>
              <a href="#/${lang}/poro" class="mobile-nav-link ${currentPath.includes('/poro') ? 'active' : ''}">
                <span class="link-icon">${Icon3DPoro}</span>
                <span class="link-title">${t('navPoro')} (${lang === 'bn' ? 'বই' : 'Book'})</span>
                <span class="nav-badge nav-badge-poro">NEW</span>
              </a>
            </div>
          </div>

          <!-- Section: Accordion Categories -->
          <div class="mobile-nav-section">
            <div class="mobile-section-label">${lang === 'bn' ? 'বিশেষ কোর্স ও গাইড' : 'COURSES & GUIDES'}</div>
            
            <!-- Accordion 1: Faith & Logic -->
            <div class="mobile-accordion-group ${isFaithLogicActive ? 'open' : ''}" data-accordion="faith-logic">
              <button class="mobile-accordion-trigger" type="button" aria-expanded="${isFaithLogicActive ? 'true' : 'false'}">
                <span class="accordion-left">
                  <span class="link-icon">${Icon3DLogic}</span>
                  <span class="link-title">${lang === 'bn' ? 'ইসলাম ও যুক্তি' : 'Faith & Logic'}</span>
                </span>
                <span class="accordion-right">
                  <svg class="accordion-chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="1 1 6 6 11 1"></polyline>
                  </svg>
                </span>
              </button>
              <div class="mobile-accordion-content">
                <a href="#/${lang}/faith-and-logic" class="mobile-sublink ${currentPath === `#/${lang}/faith-and-logic` ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? 'মূল সূচিপত্র ও লজিক হাব' : 'Logic Hub & Overview'}</span>
                </a>
                <a href="#/${lang}/faith-and-logic/sajid-1" class="mobile-sublink ${currentPath.includes('/sajid-1') ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? 'প্যারাডক্সিক্যাল সাজিদ ১' : 'Paradoxical Sajid 1'}</span>
                </a>
                <a href="#/${lang}/faith-and-logic/sajid-2" class="mobile-sublink ${currentPath.includes('/sajid-2') ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? 'প্যারাডক্সিক্যাল সাজিদ ২' : 'Paradoxical Sajid 2'}</span>
                </a>
              </div>
            </div>

            <!-- Accordion 2: Umrah Portal -->
            <div class="mobile-accordion-group ${isUmrahActive ? 'open' : ''}" data-accordion="umrah">
              <button class="mobile-accordion-trigger" type="button" aria-expanded="${isUmrahActive ? 'true' : 'false'}">
                <span class="accordion-left">
                  <span class="link-icon">${Icon3DUmrah}</span>
                  <span class="link-title">${lang === 'bn' ? 'উমরাহ পোর্টাল' : 'Umrah Portal'}</span>
                  <span class="nav-badge nav-badge-umrah">GUIDE</span>
                </span>
                <span class="accordion-right">
                  <svg class="accordion-chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="1 1 6 6 11 1"></polyline>
                  </svg>
                </span>
              </button>
              <div class="mobile-accordion-content">
                <a href="#/${lang}/umrah" class="mobile-sublink ${currentPath === `#/${lang}/umrah` || currentPath === `#/${lang}/umrah/` ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? 'উমরাহ মূল হাব' : 'Umrah Portal Hub'}</span>
                </a>
                <a href="#/${lang}/umrah/guide" class="mobile-sublink ${currentPath.includes('/guide') ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? 'ধাপে ধাপে গাইড' : 'Step-by-Step Guide'}</span>
                </a>
                <a href="#/${lang}/umrah/checklist" class="mobile-sublink ${currentPath.includes('/checklist') ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? 'প্রস্তুতি চেকলিস্ট' : 'Interactive Checklist'}</span>
                </a>
                <a href="#/${lang}/umrah/duas" class="mobile-sublink ${currentPath.includes('/duas') ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? 'সহীহ দোয়াসমূহ' : 'Authentic Duas'}</span>
                </a>
                <a href="#/${lang}/umrah/faq" class="mobile-sublink ${currentPath.includes('/faq') ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? 'উমরাহ প্রশ্নোত্তর (FAQ)' : 'Verified Umrah FAQ'}</span>
                </a>
              </div>
            </div>

            <!-- Accordion 3: Quran Vocabulary -->
            <div class="mobile-accordion-group ${isVocabActive ? 'open' : ''}" data-accordion="vocab">
              <button class="mobile-accordion-trigger" type="button" aria-expanded="${isVocabActive ? 'true' : 'false'}">
                <span class="accordion-left">
                  <span class="link-icon">${Icon3DVocab}</span>
                  <span class="link-title">${lang === 'bn' ? 'কুরআন শব্দার্থ' : 'Quran Vocabulary'}</span>
                  <span class="nav-badge nav-badge-vocab">VOCAB</span>
                </span>
                <span class="accordion-right">
                  <svg class="accordion-chevron" width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="1 1 6 6 11 1"></polyline>
                  </svg>
                </span>
              </button>
              <div class="mobile-accordion-content">
                <a href="#/${lang}/understand-quran" class="mobile-sublink ${currentPath === `#/${lang}/understand-quran` || currentPath === `#/${lang}/understand-quran/` ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? 'শব্দভাণ্ডার হাব ও মেথড' : 'Course Overview & Method'}</span>
                </a>
                <a href="#/${lang}/understand-quran/book-1" class="mobile-sublink ${currentPath.includes('/understand-quran/book-1') ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? '১ম খণ্ড: ৫০% মূল শব্দভাণ্ডার' : 'Part 1: 50% High-Frequency Words'}</span>
                </a>
                <a href="#/${lang}/understand-quran/book-2" class="mobile-sublink ${currentPath.includes('/understand-quran/book-2') ? 'active' : ''}">
                  <span class="sublink-dot"></span>
                  <span class="sublink-text">${lang === 'bn' ? '২য় খণ্ড: ৬৫% শব্দভাণ্ডার' : 'Part 2: 65% Vocabulary'}</span>
                </a>
              </div>
            </div>

            <!-- About Link -->
            <a href="#/${lang}/about" class="mobile-nav-link ${currentPath.includes('/about') ? 'active' : ''}" style="margin-top: 4px;">
              <span class="link-icon">${Icon3DAbout}</span>
              <span class="link-title">${t('navAbout')}</span>
            </a>
          </div>
        </div>

        <!-- Drawer Footer / Quick Utilities -->
        <div class="mobile-drawer-footer">
          <div class="mobile-utility-row">
            <span class="utility-label">${lang === 'bn' ? 'ভাষা / Language' : 'Language'}</span>
            <div class="lang-switch" role="group" aria-label="Language Selector">
              <button class="lang-switch-btn ${lang === 'bn' ? 'active' : ''}" data-lang="bn">বাং</button>
              <button class="lang-switch-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            </div>
          </div>
          <div class="mobile-utility-row">
            <span class="utility-label">${lang === 'bn' ? 'থিম / Theme' : 'Theme'}</span>
            <button class="mobile-theme-pill" id="mobile-theme-toggle-btn" type="button">
              <span class="pill-icon">${isDark ? Icon3DSun : Icon3DMoon}</span>
              <span class="pill-text">${isDark ? (lang === 'bn' ? 'লাইট মোড' : 'Light Mode') : (lang === 'bn' ? 'ডার্ক মোড' : 'Dark Mode')}</span>
            </button>
          </div>
        </div>
      </aside>
    </header>

    <!-- Global Search Modal -->
    <div id="search-modal" class="app-loader hidden" style="background: rgba(0,0,0,0.65); backdrop-filter: blur(10px); z-index: 9998;">
      <div class="card search-modal-card" style="width: 92%; max-width: 640px; max-height: 85vh; display: flex; flex-direction: column; overflow: hidden; padding: var(--space-6); background: var(--color-surface); box-shadow: var(--shadow-xl); border: 1px solid var(--color-border); border-radius: var(--radius-xl);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4);">
          <div style="font-weight: 700; font-size: var(--text-lg); color: var(--color-text-primary); display: flex; align-items: center; gap: var(--space-2);">
            <span class="icon-3d-wrap">${Icon3DSearch}</span> <span>${lang === 'bn' ? 'কুরআন ও হাদিস অনুসন্ধান' : 'Search Quran & Hadith'}</span>
          </div>
          <button id="close-search-btn" class="btn-ghost" style="font-size: 1.25rem; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: var(--radius-full);" aria-label="Close search">✕</button>
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
  // Language switcher (Desktop and Mobile)
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.currentTarget.getAttribute('data-lang');
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
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('eqra-theme', next);

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = `<span class="action-btn-icon">${next === 'dark' ? Icon3DSun : Icon3DMoon}</span>`;
    }
    const mobileThemeBtn = document.getElementById('mobile-theme-toggle-btn');
    if (mobileThemeBtn) {
      const lang = getLang();
      mobileThemeBtn.innerHTML = `
        <span class="pill-icon">${next === 'dark' ? Icon3DSun : Icon3DMoon}</span>
        <span class="pill-text">${next === 'dark' ? (lang === 'bn' ? 'লাইট মোড' : 'Light Mode') : (lang === 'bn' ? 'ডার্ক মোড' : 'Dark Mode')}</span>
      `;
    }
  };

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  const mobileThemeBtn = document.getElementById('mobile-theme-toggle-btn');
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', toggleTheme);
  }

  // Mobile Menu Drawer Controls
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const drawerCloseBtn = document.getElementById('mobile-drawer-close');

  const openDrawer = () => {
    if (drawer && backdrop && menuToggle) {
      drawer.classList.add('is-open');
      backdrop.classList.add('is-open');
      menuToggle.classList.add('is-active');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (drawer && backdrop && menuToggle) {
      drawer.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (drawer && drawer.classList.contains('is-open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on any navigation link click
  if (drawer) {
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // Mobile Accordions
  document.querySelectorAll('.mobile-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const group = e.currentTarget.closest('.mobile-accordion-group');
      if (group) {
        const isOpen = group.classList.toggle('open');
        e.currentTarget.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });
  });

  // Search Modal
  const openSearchBtn = document.getElementById('open-search-btn');
  const mobileSearchTrigger = document.getElementById('mobile-search-trigger');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('modal-search-input');
  const searchResultsBox = document.getElementById('search-results-box');

  const openSearch = () => {
    closeDrawer();
    if (searchModal && searchInput) {
      searchModal.classList.remove('hidden');
      setTimeout(() => searchInput.focus(), 80);
    }
  };

  const closeSearch = () => {
    if (searchModal) {
      searchModal.classList.add('hidden');
    }
  };

  if (openSearchBtn) openSearchBtn.addEventListener('click', openSearch);
  if (mobileSearchTrigger) mobileSearchTrigger.addEventListener('click', openSearch);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        closeSearch();
      }
    });
  }

  // Keyboard Shortcuts (Cmd/Ctrl+K to search, Esc to close)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'Escape') {
      closeSearch();
      closeDrawer();
    }
  });

  // Dynamic Live Search Query
  if (searchInput && searchResultsBox) {
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
