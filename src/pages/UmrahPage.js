// ============================================
// EQRA — Umrah Subpage Reader (Universal Subpage Handler)
// Handles all 19 dedicated Umrah subpages with interactive widgets
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import {
  UMRAH_PORTAL_METADATA,
  UMRAH_PAGES_DATA,
  UMRAH_CHECKLIST_DATA,
  UMRAH_DUAS_DATA,
  UMRAH_FAQ_DATA,
  UMRAH_MISTAKES_DATA,
  UMRAH_JOURNEY_STEPS
} from '../data/umrahData.js';
import {
  Icon3DUmrah,
  Icon3DChecklist,
  Icon3DCompass,
  Icon3DTawaf,
  Icon3DSai,
  Icon3DSearch,
  Icon3DTime,
  Icon3DAudio,
  Icon3DCopy
} from '../components/Icons3D.js';
import { formatColorCodedQuran, bindTajweedInteractions } from '../utils/quranColors.js';
import { audioPlayer } from '../components/AudioPlayer.js';

export function renderUmrahSubPage(sectionKey) {
  const lang = getLang();
  const page = UMRAH_PAGES_DATA[sectionKey];

  // Fallback if section doesn't exist
  if (!page) {
    return `
      <div class="page">
        <div class="container reading-width" style="text-align: center; padding: var(--space-12) 0;">
          <h2>${lang === 'bn' ? 'অধ্যায়টি পাওয়া যায়নি' : 'Section Not Found'}</h2>
          <p style="color: var(--color-text-secondary); margin-bottom: var(--space-4);">
            ${lang === 'bn' ? 'অনুরোধকৃত উমরাহ অধ্যায়টি খুঁজে পাওয়া যায়নি।' : 'The requested Umrah section does not exist.'}
          </p>
          <a href="#/${lang}/umrah" class="btn btn-primary">${lang === 'bn' ? 'উমরাহ পোর্টালে ফিরুন' : 'Back to Umrah Portal'}</a>
        </div>
      </div>
    `;
  }

  const title = lang === 'bn' ? page.titleBn : page.titleEn;
  const summary = lang === 'bn' ? page.summaryBn : page.summaryEn;
  const category = lang === 'bn' ? page.categoryBn : page.categoryEn;
  const rTime = lang === 'bn' ? page.readingTime : page.readingTimeEn;

  updateMeta({
    title: `${title} | EQRA`,
    description: summary,
    canonicalPath: `#/${lang}/umrah/${sectionKey}`
  });

  // Calculate subpage navigation list for top bar
  const navTabs = [
    { key: 'guide', labelBn: 'গাইড', labelEn: 'Guide' },
    { key: 'preparation', labelBn: 'প্রস্তুতি', labelEn: 'Preparation' },
    { key: 'checklist', labelBn: 'চেকলিস্ট', labelEn: 'Checklist' },
    { key: 'visa', labelBn: 'ভিসা', labelEn: 'Visa' },
    { key: 'permit', labelBn: 'পারমিট', labelEn: 'Permits' },
    { key: 'nusuk', labelBn: 'নুসূক', labelEn: 'Nusuk' },
    { key: 'ihram', labelBn: 'ইহরাম', labelEn: 'Ihram' },
    { key: 'miqat', labelBn: 'মীক্বাত', labelEn: 'Miqat' },
    { key: 'tawaf', labelBn: 'তাওয়াফ', labelEn: 'Tawaf' },
    { key: 'sai', labelBn: 'সা’ঈ', labelEn: 'Sa\'i' },
    { key: 'halq-taqsir', labelBn: 'হলক্ব/ক্বসর', labelEn: 'Halq/Taqsir' },
    { key: 'duas', labelBn: 'দোয়া', labelEn: 'Duas' },
    { key: 'women', labelBn: 'নারীদের বিধান', labelEn: 'Women' },
    { key: 'elderly', labelBn: 'বয়োবৃদ্ধ', labelEn: 'Elderly' },
    { key: 'health', labelBn: 'স্বাস্থ্য', labelEn: 'Health' },
    { key: 'mistakes', labelBn: 'ভুলত্রুটি', labelEn: 'Mistakes' },
    { key: 'faq', labelBn: 'প্রশ্নোত্তর', labelEn: 'FAQ' },
    { key: 'umrah-from-bangladesh', labelBn: 'বাংলাদেশ থেকে উমরাহ', labelEn: 'From Bangladesh' },
    { key: 'hajj-in-quran', labelBn: 'কুরআনে হজ-উমরাহ', labelEn: 'Quran Foundations' }
  ];

  // Helper to render icon for the page
  let page3DIcon = Icon3DUmrah;
  if (sectionKey === 'checklist') page3DIcon = Icon3DChecklist;
  else if (sectionKey === 'miqat' || sectionKey === 'ihram') page3DIcon = Icon3DCompass;
  else if (sectionKey === 'tawaf') page3DIcon = Icon3DTawaf;
  else if (sectionKey === 'sai') page3DIcon = Icon3DSai;

  return `
    <div class="page umrah-subpage">
      <div class="container reading-width">
        
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <a href="#/${lang}/umrah">${lang === 'bn' ? 'উমরাহ পোর্টাল' : 'Umrah Portal'}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${title}</span>
        </nav>

        <!-- Subpage Sticky Navigation Strip -->
        <div class="umrah-subnav-bar" style="display: flex; gap: var(--space-2); overflow-x: auto; padding-bottom: var(--space-2); margin-bottom: var(--space-6); border-bottom: 1px solid var(--color-border); scrollbar-width: thin;">
          ${navTabs.map(tab => {
            const active = tab.key === sectionKey ? 'active' : '';
            return `
              <a href="#/${lang}/umrah/${tab.key}" class="btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}" style="white-space: nowrap; font-size: 12px; padding: 4px 12px; border-radius: 999px;">
                ${lang === 'bn' ? tab.labelBn : tab.labelEn}
              </a>
            `;
          }).join('')}
        </div>

        <!-- Subpage Header -->
        <header style="margin-bottom: var(--space-8); border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-6);">
          <div style="display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-3);">
            <span class="section-badge" style="background: rgba(2, 132, 199, 0.1); color: #0284c7; border: 1px solid rgba(2, 132, 199, 0.25);">
              <span class="icon-3d-wrap" style="width: 16px; height: 16px; display: inline-flex; vertical-align: middle;">${page3DIcon}</span>
              <span>${category}</span>
            </span>
            <span style="font-size: var(--text-xs); color: var(--color-text-muted); display: inline-flex; align-items: center; gap: 4px;">
              <span class="icon-3d-wrap" style="width: 14px; height: 14px;">${Icon3DTime}</span>
              ${rTime}
            </span>
            <span class="section-badge" style="background: rgba(16, 185, 129, 0.1); color: #059669; border: 1px solid rgba(16, 185, 129, 0.2); font-size: 11px;">
              ✓ ${lang === 'bn' ? 'যাচাইকৃত: সেপ্টেম্বর ২০২৬' : 'Verified: Sep 2026'}
            </span>
          </div>

          <h1 style="font-size: clamp(1.75rem, 3.5vw, 2.4rem); font-weight: 800; line-height: 1.3; color: var(--color-text-primary); margin-bottom: var(--space-3);">
            ${title}
          </h1>

          <p style="font-size: var(--text-base); color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
            ${summary}
          </p>
        </header>

        <!-- Dynamic Content Section -->
        <main>
          ${renderSectionSpecificContent(sectionKey, page, lang)}
        </main>

        <!-- Official Sources & Verification Footer Card -->
        <section class="umrah-sources-card" style="margin-top: var(--space-10);">
          <div style="display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-2);">
            <span style="font-weight: 700; color: var(--color-text-primary); font-size: var(--text-sm);">
              🏛 ${lang === 'bn' ? 'তথ্যের সত্যতা ও প্রামাণিক উৎস' : 'Evidentiary Sources & Verification'}
            </span>
          </div>
          <p style="font-size: var(--text-xs); color: var(--color-text-secondary); line-height: 1.5; margin-bottom: var(--space-3);">
            ${lang === 'bn'
              ? 'এই অধ্যায়ের সমস্ত শারয়ী তথ্য কুরআন, সহীহ হাদিস ও স্বীকৃত ফিক্বহ গ্রন্থ এবং প্রশাসনিক নীতিমালা সৌদি হজ ও উমরাহ মন্ত্রণালয় ও নুসূক প্ল্যাটফর্মের সেপ্টেম্বর ২০২৬ হালনাগাদ সার্কুলারের সাথে মিলিয়ে প্রস্তুত করা হয়েছে।'
              : 'All legal rulings in this guide are grounded in the Quran, Sahih Hadith, and classical fiqh, while administrative policies are verified against September 2026 Saudi Ministry of Hajj & Umrah and Nusuk circulars.'}
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: var(--space-2);">
            ${(page.officialSources || UMRAH_PORTAL_METADATA.officialPortals).map(source => `
              <a href="${source.url}" target="_blank" rel="noopener noreferrer" style="font-size: 11px; font-weight: 600; color: #0284c7; background: var(--color-surface); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); text-decoration: none;">
                🌐 ${source.title || source.nameEn || source.nameBn} ↗
              </a>
            `).join('')}
          </div>
        </section>

        <!-- Prev / Next Navigation -->
        ${renderSubpagePagination(sectionKey, navTabs, lang)}

      </div>
    </div>
  `;
}

// Render subpage pagination (Previous / Next)
function renderSubpagePagination(currentKey, tabs, lang) {
  const currentIndex = tabs.findIndex(t => t.key === currentKey);
  const prev = currentIndex > 0 ? tabs[currentIndex - 1] : null;
  const next = currentIndex < tabs.length - 1 ? tabs[currentIndex + 1] : null;

  return `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-8); padding-top: var(--space-6); border-top: 1px solid var(--color-border); flex-wrap: wrap; gap: var(--space-3);">
      ${prev ? `
        <a href="#/${lang}/umrah/${prev.key}" class="btn btn-secondary" style="font-size: var(--text-sm);">
          ← ${lang === 'bn' ? prev.labelBn : prev.labelEn}
        </a>
      ` : `<div></div>`}
      
      <a href="#/${lang}/umrah" class="btn btn-secondary btn-sm" style="font-size: var(--text-xs);">
        ${lang === 'bn' ? 'উমরাহ সূচিপত্র' : 'Umrah Index'}
      </a>

      ${next ? `
        <a href="#/${lang}/umrah/${next.key}" class="btn btn-primary" style="font-size: var(--text-sm); background: #059669; border: none;">
          ${lang === 'bn' ? next.labelBn : next.labelEn} →
        </a>
      ` : `<div></div>`}
    </div>
  `;
}

// Section-specific renderer
function renderSectionSpecificContent(sectionKey, page, lang) {
  switch (sectionKey) {
    case 'checklist':
      return renderChecklistSection(page, lang);
    case 'duas':
      return renderDuasSection(page, lang);
    case 'faq':
      return renderFaqSection(page, lang);
    case 'mistakes':
      return renderMistakesSection(page, lang);
    case 'guide':
      return renderGuideSection(page, lang);
    case 'hajj-in-quran':
      return renderQuranFoundationsSection(page, lang);
    default:
      return renderStandardSubpage(page, lang);
  }
}

// 1. Interactive Checklist View
function renderChecklistSection(page, lang) {
  let totalItems = 0;
  UMRAH_CHECKLIST_DATA.forEach(cat => totalItems += cat.items.length);

  return `
    <!-- Checklist Interactive Widget -->
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); margin-bottom: var(--space-8);">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-3); margin-bottom: var(--space-4);">
        <div>
          <h2 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: 2px;">
            ${lang === 'bn' ? 'ইন্টারঅ্যাক্টিভ উমরাহ প্রস্তুতি চেকলিস্ট' : 'Interactive Umrah Preparation Checklist'}
          </h2>
          <p style="font-size: var(--text-sm); color: var(--color-text-secondary); margin: 0;">
            ${lang === 'bn'
              ? 'আপনার অগ্রগতি ব্রাউজারে স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকে। আইটেমে টিক দিন।'
              : 'Your progress is automatically saved in your browser. Check off items as you complete them.'}
          </p>
        </div>
        <button id="reset-checklist-btn" class="btn btn-secondary btn-sm" style="font-size: 11px; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
          ↺ ${lang === 'bn' ? 'রিসেট করুন' : 'Reset Progress'}
        </button>
      </div>

      <!-- Live Counter & Progress Bar -->
      <div style="background: var(--color-surface-hover); border-radius: var(--radius-lg); padding: var(--space-4); margin-bottom: var(--space-6);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2);">
          <span style="font-size: var(--text-sm); font-weight: 700; color: var(--color-text-primary);">
            ${lang === 'bn' ? 'সামগ্রিক অগ্রগতি' : 'Overall Completion'}
          </span>
          <span id="checklist-progress-text" style="font-size: var(--text-sm); font-weight: 800; color: #059669;">
            0 / ${totalItems} (0%)
          </span>
        </div>
        <div style="background: var(--color-border); border-radius: 999px; height: 10px; overflow: hidden;">
          <div id="checklist-progress-bar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #0284c7, #10b981); transition: width 0.3s ease;"></div>
        </div>
      </div>

      <!-- Categories & Items -->
      <div style="display: flex; flex-direction: column; gap: var(--space-6);">
        ${UMRAH_CHECKLIST_DATA.map(cat => {
          const catTitle = lang === 'bn' ? cat.titleBn : cat.titleEn;
          return `
            <div style="border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-4); background: var(--color-surface);">
              <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-3); display: flex; align-items: center; gap: 8px;">
                <span style="color: #059669;">✔</span>
                <span>${catTitle}</span>
              </h3>
              <div style="display: flex; flex-direction: column; gap: var(--space-2);">
                ${cat.items.map(item => {
                  const label = lang === 'bn' ? item.labelBn : item.labelEn;
                  return `
                    <label class="checklist-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 10px 12px; border-radius: var(--radius-md); background: var(--color-surface-hover); cursor: pointer; transition: background 0.15s; margin: 0;">
                      <input type="checkbox" class="umrah-check-input" data-item-id="${item.id}" style="width: 18px; height: 18px; margin-top: 2px; accent-color: #059669; cursor: pointer;" />
                      <div style="flex: 1; font-size: var(--text-sm); color: var(--color-text-primary); line-height: 1.5;">
                        <span>${label}</span>
                        ${item.mandatory ? `
                          <span style="font-size: 10px; font-weight: 700; color: #ef4444; background: rgba(239, 68, 68, 0.1); padding: 1px 6px; border-radius: 4px; margin-left: 6px;">
                            ${lang === 'bn' ? 'আবশ্যক' : 'Mandatory'}
                          </span>
                        ` : ''}
                      </div>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Structured Notes from Data -->
    ${renderStandardSections(page, lang)}
  `;
}

// 2. Authentic Duas View
function renderDuasSection(page, lang) {
  return `
    <!-- Top Clarification & Evidence Banner -->
    <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-lg); padding: var(--space-4); margin-bottom: var(--space-6);">
      <h3 style="font-size: var(--text-base); font-weight: 700; color: #059669; margin-bottom: var(--space-2); display: flex; align-items: center; gap: 6px;">
        <span>✓</span>
        <span>${lang === 'bn' ? 'উমরাহর দোয়ার মূল শারয়ী মূলনীতি' : 'Evidentiary Principles of Umrah Duas'}</span>
      </h3>
      <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
        ${lang === 'bn' ? UMRAH_DUAS_DATA.generalDuaAdviceBn : UMRAH_DUAS_DATA.generalDuaAdviceEn}
      </p>
    </div>

    <!-- Prominent Warning against Fabricated Round Duas -->
    <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-lg); padding: var(--space-4); margin-bottom: var(--space-8);">
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <span style="font-size: 18px;">⚠️</span>
        <div style="font-size: var(--text-sm); color: var(--color-text-primary); line-height: 1.5;">
          <strong>${lang === 'bn' ? 'জরুরি সতর্কতা:' : 'Important Precaution:'}</strong>
          <span>${lang === 'bn' ? UMRAH_DUAS_DATA.warningUnverifiedBn : UMRAH_DUAS_DATA.warningUnverifiedEn}</span>
        </div>
      </div>
    </div>

    <!-- Authenticated Supplications Cards -->
    <div style="display: flex; flex-direction: column; gap: var(--space-6); margin-bottom: var(--space-8);">
      <h2 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
        ${lang === 'bn' ? 'সহীহ সুন্নাহ সমর্থিত নির্ধারিত দোয়াসমূহ' : 'Authentic Sunnah Prescribed Supplications'}
      </h2>

      ${UMRAH_DUAS_DATA.authenticated.map((dua, index) => {
        const duaTitle = lang === 'bn' ? dua.titleBn : dua.titleEn;
        const timing = lang === 'bn' ? dua.timingBn : dua.timingEn;
        const meaning = lang === 'bn' ? dua.meaningBn : dua.meaningEn;
        const source = lang === 'bn' ? dua.source : dua.sourceEn;

        return `
          <div class="card" style="border: 1px solid var(--color-border); padding: var(--space-5); border-radius: var(--radius-xl); background: var(--color-surface);">
            <!-- Header -->
            <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-3); margin-bottom: var(--space-3);">
              <div>
                <span style="font-size: 11px; font-weight: 700; color: #d97706; background: rgba(245, 158, 11, 0.1); padding: 2px 8px; border-radius: 999px;">
                  #${index + 1} ${timing}
                </span>
                <h3 style="font-size: var(--text-lg); font-weight: 800; color: var(--color-text-primary); margin-top: 6px; margin-bottom: 2px;">
                  ${duaTitle}
                </h3>
              </div>
              <div style="display: flex; gap: var(--space-2);">
                ${dua.audio ? `
                  <button class="btn btn-sm btn-secondary umrah-audio-btn" data-audio-src="${dua.audio}" title="${lang === 'bn' ? 'তালবিয়াহ অডিও শুনুন' : 'Listen to Audio'}" style="padding: 4px 8px;">
                    <span class="icon-3d-wrap" style="width: 16px; height: 16px;">${Icon3DAudio}</span>
                  </button>
                ` : ''}
                <button class="btn btn-sm btn-secondary umrah-copy-dua-btn" data-copy-text="${dua.arabic}\n\n${meaning}\n(${source})" title="${lang === 'bn' ? 'দোয়া কপি করুন' : 'Copy Dua'}" style="padding: 4px 8px;">
                  <span class="icon-3d-wrap" style="width: 16px; height: 16px;">${Icon3DCopy}</span>
                </button>
              </div>
            </div>

            <!-- Arabic Indo-Pak Color Coded -->
            <div style="background: var(--color-surface-hover); border-radius: var(--radius-lg); padding: var(--space-4); margin-bottom: var(--space-3); text-align: center;">
              <p class="font-indopak" dir="rtl" style="font-size: clamp(1.4rem, 2.8vw, 1.85rem); line-height: 2.1; color: var(--color-text-primary); margin: 0;">
                ${formatColorCodedQuran(dua.arabic)}
              </p>
            </div>

            <!-- Transliteration -->
            <p style="font-size: var(--text-sm); font-style: italic; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: var(--space-2);">
              "${dua.transliteration}"
            </p>

            <!-- Translation -->
            <p style="font-size: var(--text-sm); color: var(--color-text-primary); line-height: 1.6; margin-bottom: var(--space-3);">
              <strong>${lang === 'bn' ? 'অনুবাদ:' : 'Translation:'}</strong> ${meaning}
            </p>

            <!-- Evidence Citation -->
            <div style="font-size: var(--text-xs); color: #059669; font-weight: 600; border-top: 1px dashed var(--color-border); padding-top: var(--space-2);">
              📜 ${source}
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Structured Notes from Data -->
    ${renderStandardSections(page, lang)}
  `;
}

// 3. Searchable FAQ Accordion View
function renderFaqSection(page, lang) {
  return `
    <div style="margin-bottom: var(--space-6);">
      <!-- Search Input -->
      <div class="search-bar" style="max-width: 100%; margin-bottom: var(--space-4);">
        <span class="search-icon">${Icon3DSearch}</span>
        <input type="text" id="umrah-faq-search" class="search-input" placeholder="${lang === 'bn' ? 'উমরাহর প্রশ্নোত্তর খুঁজুন (যেমন: ওযু, বিমান, ইহরাম, নারী, ওষুধ)...' : 'Search FAQ questions or topics...'}" />
      </div>

      <!-- FAQ Accordion List -->
      <div id="umrah-faq-list" style="display: flex; flex-direction: column; gap: var(--space-3);">
        ${UMRAH_FAQ_DATA.map((faq, idx) => {
          const q = lang === 'bn' ? faq.questionBn : faq.questionEn;
          const a = lang === 'bn' ? faq.answerBn : faq.answerEn;
          const cat = lang === 'bn' ? faq.categoryBn : faq.categoryEn;

          return `
            <details class="umrah-faq-item card" style="border: 1px solid var(--color-border); padding: var(--space-4); border-radius: var(--radius-lg); background: var(--color-surface); cursor: pointer;" data-question="${q.toLowerCase()}" data-answer="${a.toLowerCase()}">
              <summary style="font-weight: 700; font-size: var(--text-base); color: var(--color-text-primary); display: flex; align-items: center; justify-content: space-between; list-style: none; user-select: none;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 11px; font-weight: 700; color: #0284c7; background: rgba(2, 132, 199, 0.1); padding: 1px 6px; border-radius: 4px;">
                    ${cat}
                  </span>
                  <span>${q}</span>
                </div>
                <span class="faq-toggle-icon" style="font-size: 18px; color: var(--color-text-muted); transition: transform 0.2s;">▾</span>
              </summary>
              <div style="margin-top: var(--space-3); padding-top: var(--space-3); border-top: 1px solid var(--color-border); font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6;">
                <p style="margin-bottom: var(--space-2);">${a}</p>
                <div style="font-size: 11px; color: #059669; font-weight: 600;">
                  📜 ${lang === 'bn' ? 'দলিল/উৎস:' : 'Source:'} ${faq.source}
                </div>
              </div>
            </details>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Structured Notes from Data -->
    ${renderStandardSections(page, lang)}
  `;
}

// 4. Common Mistakes & Sunnah Corrections Matrix
function renderMistakesSection(page, lang) {
  return `
    <div style="margin-bottom: var(--space-8);">
      <h2 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
        ${lang === 'bn' ? 'প্রচলিত ভুল ধারণা ও সহীহ সুন্নাহর সমাধান' : 'Common Misconceptions & Authentic Corrections'}
      </h2>
      <p style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-6);">
        ${lang === 'bn'
          ? 'উমরাহ পালনকারীদের মাঝে ব্যাপকভাবে প্রচলিত কিছু কুসংস্কার ও ভুল পদ্ধতির বিপরীতে কুরআন ও সহীহ সুন্নাহর প্রামাণ্য বিশ্লেষণ।'
          : 'Comparative analysis contrasting widespread pilgrim errors with established Sunnah practices.'}
      </p>

      <div style="display: flex; flex-direction: column; gap: var(--space-5);">
        ${UMRAH_MISTAKES_DATA.map(m => {
          const topic = lang === 'bn' ? m.topicBn : m.topicEn;
          const mistake = lang === 'bn' ? m.mistakeBn : m.mistakeEn;
          const correction = lang === 'bn' ? m.correctionBn : m.correctionEn;

          return `
            <div class="card" style="border: 1px solid var(--color-border); border-radius: var(--radius-xl); overflow: hidden; background: var(--color-surface); padding: 0;">
              <!-- Topic Header -->
              <div style="padding: var(--space-3) var(--space-4); background: var(--color-surface-hover); border-bottom: 1px solid var(--color-border); font-weight: 700; font-size: var(--text-base); color: var(--color-text-primary);">
                📍 ${topic}
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <!-- Mistake Box (Red tone) -->
                <div style="padding: var(--space-4); background: rgba(239, 68, 68, 0.04); border-right: 1px solid var(--color-border);">
                  <div style="display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: var(--text-xs); color: #ef4444; margin-bottom: var(--space-2);">
                    <span>✖</span>
                    <span>${lang === 'bn' ? 'প্রচলিত ভুল ধারণা' : 'Common Mistake'}</span>
                  </div>
                  <p style="font-size: var(--text-sm); color: var(--color-text-primary); line-height: 1.5; margin: 0;">
                    ${mistake}
                  </p>
                </div>

                <!-- Correction Box (Green tone) -->
                <div style="padding: var(--space-4); background: rgba(16, 185, 129, 0.04);">
                  <div style="display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: var(--text-xs); color: #059669; margin-bottom: var(--space-2);">
                    <span>✔</span>
                    <span>${lang === 'bn' ? 'সহীহ সুন্নাহ সমাধান' : 'Authentic Sunnah Practice'}</span>
                  </div>
                  <p style="font-size: var(--text-sm); color: var(--color-text-primary); line-height: 1.5; margin-bottom: var(--space-2);">
                    ${correction}
                  </p>
                  <div style="font-size: 11px; color: #059669; font-weight: 600;">
                    📜 ${m.source}
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Structured Notes from Data -->
    ${renderStandardSections(page, lang)}
  `;
}

// 5. Complete Step-by-Step Guide Stepper
function renderGuideSection(page, lang) {
  return `
    <!-- Interactive Roadmap Summary -->
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); margin-bottom: var(--space-8);">
      <h2 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
        ${lang === 'bn' ? 'উমরাহর ৮টি ধাপের ধারাবাহিক রোডম্যাপ' : '8-Step Chronological Journey Roadmap'}
      </h2>
      <p style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-4);">
        ${lang === 'bn' ? 'প্রতিটি ধাপের ওপর ক্লিক করে গভীর নির্দেশিকায় প্রবেশ করুন:' : 'Click any stage to navigate to its specialized chapter:'}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-3);">
        ${UMRAH_JOURNEY_STEPS.map(step => {
          const sTitle = lang === 'bn' ? step.titleBn : step.titleEn;
          const sBadge = step.badge;
          return `
            <a href="#/${lang}/umrah/${step.slug}" class="card" style="text-decoration: none; color: inherit; padding: var(--space-3); border-radius: var(--radius-lg); border: 1px solid var(--color-border); background: var(--color-surface-hover);">
              <div style="font-size: 10px; font-weight: 700; color: #059669; margin-bottom: 2px;">${sBadge}</div>
              <div style="font-size: var(--text-sm); font-weight: 700; color: var(--color-text-primary);">${sTitle}</div>
            </a>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Structured Notes from Data -->
    ${renderStandardSections(page, lang)}
  `;
}

// 6. Quran Foundations View
function renderQuranFoundationsSection(page, lang) {
  return `
    <div style="margin-bottom: var(--space-8);">
      <h2 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-4);">
        ${lang === 'bn' ? 'পবিত্র কুরআনে হজ ও উমরাহর মূল আয়াতসমূহ' : 'Primary Quranic Verses on Hajj and Umrah'}
      </h2>

      <div style="display: flex; flex-direction: column; gap: var(--space-5);">
        ${(page.quranReferences || []).map(ref => `
          <div class="card" style="border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-5); background: var(--color-surface);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3);">
              <span class="section-badge" style="background: rgba(245, 158, 11, 0.12); color: #d97706; border: 1px solid rgba(245, 158, 11, 0.25);">
                📖 ${ref.name} (${ref.surah}:${ref.ayah})
              </span>
              <a href="${ref.link}" class="btn btn-sm btn-secondary" style="font-size: 11px; padding: 2px 8px;">
                ${lang === 'bn' ? 'সূরায় তিলাওয়াত করুন →' : 'Read in Surah →'}
              </a>
            </div>

            <!-- Arabic Indo-Pak with Tajweed -->
            <div style="background: var(--color-surface-hover); border-radius: var(--radius-lg); padding: var(--space-4); margin-bottom: var(--space-3); text-align: center;">
              <p class="font-indopak" dir="rtl" style="font-size: clamp(1.4rem, 3vw, 1.9rem); line-height: 2.2; color: var(--color-text-primary); margin: 0;">
                ${formatColorCodedQuran(ref.arabic)}
              </p>
            </div>

            <p style="font-size: var(--text-sm); color: var(--color-text-primary); line-height: 1.6; margin: 0;">
              <strong>${lang === 'bn' ? 'অর্থ:' : 'Meaning:'}</strong> ${lang === 'bn' ? ref.translationBn : ref.translationEn}
            </p>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Structured Notes from Data -->
    ${renderStandardSections(page, lang)}
  `;
}

// 7. Standard Subpage Renderer for all other sections
function renderStandardSubpage(page, lang) {
  return `
    ${renderStandardSections(page, lang)}
  `;
}

// Helper to render Quran & Hadith citations and content sections
function renderStandardSections(page, lang) {
  return `
    <!-- Quran References (if any) -->
    ${page.quranReferences && page.quranReferences.length > 0 ? `
      <div style="margin-bottom: var(--space-6);">
        <h3 style="font-size: var(--text-base); font-weight: 700; color: #d97706; margin-bottom: var(--space-3); display: flex; align-items: center; gap: 6px;">
          <span>📖</span>
          <span>${lang === 'bn' ? 'কুরআনের অকাট্য দলিল' : 'Quranic Evidence'}</span>
        </h3>
        <div style="display: flex; flex-direction: column; gap: var(--space-3);">
          ${page.quranReferences.map(ref => `
            <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-4);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2);">
                <span style="font-size: 11px; font-weight: 700; color: #d97706;">
                  ${ref.name} (${ref.surah}:${ref.ayah})
                </span>
                ${ref.link ? `
                  <a href="${ref.link}" style="font-size: 11px; color: var(--color-primary); text-decoration: none;">
                    ${lang === 'bn' ? 'কুরআনে দেখুন →' : 'View in Quran →'}
                  </a>
                ` : ''}
              </div>
              <p class="font-indopak" dir="rtl" style="font-size: 1.35rem; line-height: 2; margin-bottom: var(--space-2); text-align: right; color: var(--color-text-primary);">
                ${formatColorCodedQuran(ref.arabic)}
              </p>
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); margin: 0; line-height: 1.5;">
                ${lang === 'bn' ? ref.translationBn : ref.translationEn}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Hadith References (if any) -->
    ${page.hadithReferences && page.hadithReferences.length > 0 ? `
      <div style="margin-bottom: var(--space-6);">
        <h3 style="font-size: var(--text-base); font-weight: 700; color: #059669; margin-bottom: var(--space-3); display: flex; align-items: center; gap: 6px;">
          <span>📜</span>
          <span>${lang === 'bn' ? 'সহীহ হাদিসের প্রামাণ্য দলিল' : 'Sahih Hadith Evidence'}</span>
        </h3>
        <div style="display: flex; flex-direction: column; gap: var(--space-3);">
          ${page.hadithReferences.map(h => `
            <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-4);">
              <div style="font-size: 11px; font-weight: 700; color: #059669; margin-bottom: var(--space-2);">
                ${lang === 'bn' ? h.collection : h.collectionEn}: ${h.number}
              </div>
              ${h.arabic ? `
                <p class="font-indopak" dir="rtl" style="font-size: 1.3rem; line-height: 2; margin-bottom: var(--space-2); text-align: right; color: var(--color-text-primary);">
                  ${formatColorCodedQuran(h.arabic)}
                </p>
              ` : ''}
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); margin: 0; line-height: 1.5;">
                ${lang === 'bn' ? h.translationBn : h.translationEn}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Detailed Content Subsections -->
    <div style="display: flex; flex-direction: column; gap: var(--space-6);">
      ${(page.sections || []).map(sec => {
        const heading = lang === 'bn' ? sec.headingBn : sec.headingEn;
        const content = lang === 'bn' ? sec.contentBn : (sec.contentEn || sec.contentBn);

        // Simple markdown formatter for bold and bullets
        const formattedContent = content
          .split('\n')
          .map(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
              return `<li style="margin-bottom: 4px;">${formatInlineMarkdown(trimmed.substring(2))}</li>`;
            }
            if (trimmed.match(/^\d+\.\s/)) {
              const numMatch = trimmed.match(/^(\d+\.\s)(.*)/);
              return `<div style="margin-bottom: 6px; padding-left: 8px;"><strong>${numMatch[1]}</strong>${formatInlineMarkdown(numMatch[2])}</div>`;
            }
            if (trimmed === '') {
              return '<br/>';
            }
            return `<p style="margin-bottom: var(--space-3); line-height: 1.6;">${formatInlineMarkdown(trimmed)}</p>`;
          })
          .join('');

        return `
          <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-5);">
            <h3 style="font-size: var(--text-lg); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-3); display: flex; align-items: center; gap: 8px;">
              <span style="color: #0284c7;">▪</span>
              <span>${heading}</span>
            </h3>
            <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">
              ${formattedContent}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function formatInlineMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--color-text-primary);">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

// Subpage Event Handlers
export function bindUmrahSubPageEvents(sectionKey) {
  bindTajweedInteractions();

  // 1. Checklist State Management
  if (sectionKey === 'checklist') {
    const checkboxes = document.querySelectorAll('.umrah-check-input');
    const progressText = document.getElementById('checklist-progress-text');
    const progressBar = document.getElementById('checklist-progress-bar');
    const resetBtn = document.getElementById('reset-checklist-btn');

    // Read stored items
    let stored = [];
    try {
      const s = localStorage.getItem('eqra_umrah_checklist');
      if (s) stored = JSON.parse(s);
    } catch (e) {
      console.error(e);
    }

    const updateChecklistView = () => {
      const total = checkboxes.length;
      const checked = stored.length;
      const pct = total > 0 ? Math.round((checked / total) * 100) : 0;

      if (progressText) {
        progressText.innerText = `${checked} / ${total} (${pct}%)`;
      }
      if (progressBar) {
        progressBar.style.width = `${pct}%`;
      }

      checkboxes.forEach(cb => {
        const id = cb.getAttribute('data-item-id');
        cb.checked = stored.includes(id);
      });
    };

    // Initial sync
    updateChecklistView();

    // Checkbox toggles
    checkboxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = e.target.getAttribute('data-item-id');
        if (e.target.checked) {
          if (!stored.includes(id)) stored.push(id);
        } else {
          stored = stored.filter(i => i !== id);
        }
        localStorage.setItem('eqra_umrah_checklist', JSON.stringify(stored));
        updateChecklistView();
      });
    });

    // Reset button
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset your checklist progress? / আপনি কি চেকলিস্ট রিসেট করতে চান?')) {
          stored = [];
          localStorage.removeItem('eqra_umrah_checklist');
          updateChecklistView();
        }
      });
    }
  }

  // 2. FAQ Live Search & Accordion
  if (sectionKey === 'faq') {
    const searchInput = document.getElementById('umrah-faq-search');
    const faqItems = document.querySelectorAll('.umrah-faq-item');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        faqItems.forEach(item => {
          const q = item.getAttribute('data-question') || '';
          const a = item.getAttribute('data-answer') || '';
          if (!val || q.includes(val) || a.includes(val)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }
  }

  // 3. Audio & Copy Dua buttons
  const copyButtons = document.querySelectorAll('.umrah-copy-dua-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const text = btn.getAttribute('data-copy-text');
      try {
        await navigator.clipboard.writeText(text);
        const origHtml = btn.innerHTML;
        btn.innerHTML = '<span style="color: #059669; font-size: 11px;">✓ Copied!</span>';
        setTimeout(() => {
          btn.innerHTML = origHtml;
        }, 1800);
      } catch (err) {
        console.error('Clipboard copy failed', err);
      }
    });
  });

  const audioButtons = document.querySelectorAll('.umrah-audio-btn');
  audioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-audio-src');
      if (src) {
        audioPlayer.playSurah({
          id: 'umrah_talbiyah',
          name: 'Talbiyah',
          arabicName: 'التلبية',
          audioUrl: src,
          totalAyahs: 1
        });
      }
    });
  });
}
