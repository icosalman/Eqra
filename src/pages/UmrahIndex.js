// ============================================
// EQRA — Umrah Portal Index / Hub
// Evidence-based, bilingual Umrah learning and preparation hub
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import {
  UMRAH_PORTAL_METADATA,
  UMRAH_JOURNEY_STEPS,
  UMRAH_PAGES_DATA,
  UMRAH_CHECKLIST_DATA,
  UMRAH_DUAS_DATA
} from '../data/umrahData.js';
import {
  Icon3DUmrah,
  Icon3DChecklist,
  Icon3DCompass,
  Icon3DTawaf,
  Icon3DSai,
  Icon3DSearch,
  Icon3DTime,
  Icon3DDocument
} from '../components/Icons3D.js';
import { formatColorCodedQuran, bindTajweedInteractions } from '../utils/quranColors.js';

export function renderUmrahIndexPage() {
  const lang = getLang();

  updateMeta({
    title: lang === 'bn' 
      ? 'উমরাহ নির্দেশিকা ও প্রস্তুতি পোর্টাল — সহীহ সুন্নাহ ও অফিশিয়াল নীতিমালা | EQRA' 
      : 'Complete Umrah Guide & Preparation Portal — Authentic Sunnah & Official Regulations | EQRA',
    description: lang === 'bn'
      ? 'পবিত্র উমরাহর প্রামাণ্য ডিজিটাল গাইড: মীক্বাত, ইহরাম, তাওয়াফ, সাঈ, সহীহ দোয়া, নুসূক পারমিট ও ইন্টারঅ্যাক্টিভ চেকলিস্ট।'
      : 'Comprehensive digital Umrah portal: Authentic Sunnah rituals, interactive preparation checklist, verified duas, Nusuk permits, and official guidelines.',
    canonicalPath: `#/${lang}/umrah`
  });

  // Calculate total checklist items
  let totalChecklistCount = 0;
  UMRAH_CHECKLIST_DATA.forEach(cat => {
    totalChecklistCount += (cat.items || []).length;
  });

  // Read saved checklist items from localStorage safely
  let checkedCount = 0;
  try {
    const saved = localStorage.getItem('eqra_umrah_checklist');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        checkedCount = parsed.length;
      }
    }
  } catch (e) {
    console.error(e);
  }
  const progressPercent = totalChecklistCount > 0 ? Math.round((checkedCount / totalChecklistCount) * 100) : 0;

  // Subpage cluster groups
  const subpageGroups = [
    {
      groupTitleBn: 'মূল গাইডলাইন ও রীতিনীতি',
      groupTitleEn: 'Core Guides & Rituals',
      pages: ['guide', 'preparation', 'ihram', 'miqat', 'tawaf', 'sai', 'halq-taqsir']
    },
    {
      groupTitleBn: 'প্রস্তুতি, চেকলিস্ট ও নথিপত্র',
      groupTitleEn: 'Preparation, Checklists & Logistics',
      pages: ['checklist', 'visa', 'permit', 'nusuk', 'umrah-from-bangladesh']
    },
    {
      groupTitleBn: 'সহীহ দোয়া ও কুরআনের দলিল',
      groupTitleEn: 'Authentic Duas & Quranic Foundations',
      pages: ['duas', 'hajj-in-quran']
    },
    {
      groupTitleBn: 'বিশেষ বিধান, স্বাস্থ্য ও সতর্কতা',
      groupTitleEn: 'Special Rulings, Health & Precautions',
      pages: ['women', 'elderly', 'health', 'mistakes', 'faq']
    }
  ];

  return `
    <div class="page umrah-portal">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${lang === 'bn' ? 'উমরাহ পোর্টাল' : 'Umrah Portal'}</span>
        </nav>

        <!-- Hero Section -->
        <header class="umrah-hero-card" style="margin-bottom: var(--space-8);">
          <div style="display: flex; align-items: center; justify-content: center; gap: var(--space-2); margin-bottom: var(--space-3);">
            <span class="section-badge" style="background: rgba(245, 158, 11, 0.15); color: #d97706; border: 1px solid rgba(245, 158, 11, 0.3); font-weight: 700;">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px; display: inline-flex; vertical-align: middle;">${Icon3DUmrah}</span>
              <span>${lang === 'bn' ? 'প্রামাণ্য ডিজিটাল উমরাহ পোর্টাল' : 'Evidence-Based Umrah Portal'}</span>
            </span>
            <span class="section-badge" style="background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid rgba(16, 185, 129, 0.25);">
              ✓ ${lang === 'bn' ? 'যাচাইকৃত: সেপ্টেম্বর ২০২৬' : 'Verified: September 2026'}
            </span>
          </div>

          <h1 style="font-size: clamp(1.85rem, 4vw, 2.75rem); font-weight: 900; line-height: 1.25; margin-bottom: var(--space-3); color: var(--color-text-primary);">
            ${lang === 'bn' ? 'উমরাহ নির্দেশিকা ও প্রস্তুতি পোর্টাল' : 'Digital Umrah Learning & Preparation Portal'}
          </h1>
          
          <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 720px; margin: 0 auto var(--space-6); line-height: 1.6;">
            ${lang === 'bn'
              ? 'কুরআন ও সহীহ সুন্নাহর সুদৃঢ় প্রমাণ, চার মাযহাবের বিশ্লেষণ এবং সৌদি হজ ও উমরাহ মন্ত্রণালয় এবং নুসূকের অফিশিয়াল নীতিমালার আলোকে পূর্ণাঙ্গ বিশ্বস্ত সঙ্গী।'
              : 'Your trusted digital pilgrim companion grounded in primary Islamic evidence (Quran & Sahih Hadith), recognized fiqh, and official Saudi Ministry of Hajj & Nusuk regulations.'}
          </p>

          <!-- Quick Action Buttons -->
          <div style="display: flex; gap: var(--space-3); justify-content: center; flex-wrap: wrap;">
            <a href="#/${lang}/umrah/guide" class="btn btn-primary" style="background: linear-gradient(135deg, #059669 0%, #047857 100%); border: none; box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35); font-weight: 700; padding: 10px 22px;">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DUmrah}</span>
              <span>${lang === 'bn' ? 'উমরাহ সফর শুরু করুন' : 'Start My Umrah Journey'}</span>
            </a>
            <a href="#/${lang}/umrah/checklist" class="btn btn-secondary" style="border: 1px solid var(--color-border); font-weight: 600; padding: 10px 20px;">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DChecklist}</span>
              <span>${lang === 'bn' ? 'প্রস্তুতি চেকলিস্ট' : 'Interactive Checklist'}</span>
            </a>
            <a href="#/${lang}/umrah/duas" class="btn btn-secondary" style="border: 1px solid var(--color-border); font-weight: 600; padding: 10px 20px;">
              <span>📿 ${lang === 'bn' ? 'সহীহ দোয়াসমূহ' : 'Authentic Duas'}</span>
            </a>
            <a href="#/${lang}/umrah/faq" class="btn btn-secondary" style="border: 1px solid var(--color-border); font-weight: 600; padding: 10px 20px;">
              <span>❓ ${lang === 'bn' ? 'প্রশ্নোত্তর (FAQ)' : 'Verified FAQ'}</span>
            </a>
          </div>
        </header>

        <!-- Quick Evidence Metrics Strip -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-8);">
          <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-3); text-align: center;">
            <div style="font-size: var(--text-2xl); font-weight: 800; color: #059669;">৮ টি ধাপ</div>
            <div style="font-size: var(--text-xs); color: var(--color-text-secondary); margin-top: 2px;">
              ${lang === 'bn' ? 'ধারাবাহিক রীতিনীতি' : 'Step-by-step rituals'}
            </div>
          </div>
          <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-3); text-align: center;">
            <div style="font-size: var(--text-2xl); font-weight: 800; color: #d97706;">১৯ টি বিষয়</div>
            <div style="font-size: var(--text-xs); color: var(--color-text-secondary); margin-top: 2px;">
              ${lang === 'bn' ? 'পূর্ণাঙ্গ বিস্তারিত অধ্যায়' : 'In-depth subpages'}
            </div>
          </div>
          <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-3); text-align: center;">
            <div style="font-size: var(--text-2xl); font-weight: 800; color: #0284c7;">১০০% সহীহ</div>
            <div style="font-size: var(--text-xs); color: var(--color-text-secondary); margin-top: 2px;">
              ${lang === 'bn' ? 'কুরআন ও বুখারী-মুসলিম দলিল' : 'Grounded in Primary Texts'}
            </div>
          </div>
          <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-3); text-align: center;">
            <div style="font-size: var(--text-2xl); font-weight: 800; color: #8b5cf6;">নুসূক অনুমোদিত</div>
            <div style="font-size: var(--text-xs); color: var(--color-text-secondary); margin-top: 2px;">
              ${lang === 'bn' ? 'অফিশিয়াল সৌদি গাইডলাইন' : 'Saudi Ministry Standards'}
            </div>
          </div>
        </div>

        <!-- Interactive Checklist Status Banner -->
        <section style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(5, 150, 105, 0.08) 100%); border: 1px solid rgba(2, 132, 199, 0.2); border-radius: var(--radius-xl); padding: var(--space-5); margin-bottom: var(--space-8);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4);">
            <div style="display: flex; align-items: center; gap: var(--space-3);">
              <div style="width: 44px; height: 44px; border-radius: var(--radius-lg); background: var(--color-surface); display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.06); flex-shrink: 0;">
                <span class="icon-3d-wrap" style="width: 28px; height: 28px;">${Icon3DChecklist}</span>
              </div>
              <div>
                <h3 style="font-size: var(--text-lg); font-weight: 700; color: var(--color-text-primary); margin-bottom: 4px;">
                  ${lang === 'bn' ? 'আপনার উমরাহ প্রস্তুতি চেকলিস্ট' : 'Your Umrah Preparation Checklist'}
                </h3>
                <p style="font-size: var(--text-sm); color: var(--color-text-secondary); margin: 0;">
                  ${lang === 'bn'
                    ? `মোট ${totalChecklistCount}টি বিষয়ের মধ্যে <strong id="checklist-hub-count">${checkedCount}</strong>টি সম্পন্ন করেছেন (${progressPercent}%)`
                    : `Completed <strong id="checklist-hub-count">${checkedCount}</strong> of ${totalChecklistCount} items (${progressPercent}%)`}
                </p>
              </div>
            </div>
            <a href="#/${lang}/umrah/checklist" class="btn btn-sm btn-primary" style="background: #0284c7; border: none; font-weight: 600;">
              ${lang === 'bn' ? 'চেকলিস্ট পূরণ করুন →' : 'Open Checklist →'}
            </a>
          </div>
          <!-- Progress Bar -->
          <div style="margin-top: var(--space-4); background: var(--color-surface); border-radius: 999px; height: 8px; overflow: hidden; border: 1px solid var(--color-border);">
            <div id="checklist-hub-bar" style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, #0284c7, #10b981); transition: width 0.4s ease;"></div>
          </div>
        </section>

        <!-- Visual 8-Step Umrah Journey Track -->
        <section style="margin-bottom: var(--space-10);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-5);">
            <div>
              <span class="section-badge" style="margin-bottom: 4px; display: inline-block;">
                ${lang === 'bn' ? 'ধারাবাহিক রূপরেখা' : 'Chronological Roadmap'}
              </span>
              <h2 style="font-size: var(--text-2xl); font-weight: 800; color: var(--color-text-primary);">
                ${lang === 'bn' ? 'উমরাহ পালনের ৮টি ধারাবাহিক ধাপ' : '8 Chronological Steps of Umrah'}
              </h2>
            </div>
            <a href="#/${lang}/umrah/guide" style="font-size: var(--text-sm); font-weight: 600; color: var(--color-primary); text-decoration: none;">
              ${lang === 'bn' ? 'বিস্তারিত গাইড →' : 'Full Guide →'}
            </a>
          </div>

          <div class="umrah-journey-track">
            ${UMRAH_JOURNEY_STEPS.map((step) => {
              const title = lang === 'bn' ? step.titleBn : step.titleEn;
              const desc = lang === 'bn' ? step.descBn : step.descEn;
              const estTime = lang === 'bn' ? step.estimatedTimeBn : step.estimatedTimeEn;
              
              let stepIcon = Icon3DUmrah;
              if (step.stepKey === 'tawaf') stepIcon = Icon3DTawaf;
              else if (step.stepKey === 'sai') stepIcon = Icon3DSai;
              else if (step.stepKey === 'ihram') stepIcon = Icon3DCompass;
              else if (step.stepKey === 'preparation') stepIcon = Icon3DChecklist;

              return `
                <a href="#/${lang}/umrah/${step.slug}" class="umrah-step-card" style="text-decoration: none; color: inherit; display: block;">
                  <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-2);">
                    <span style="font-size: var(--text-xs); font-weight: 700; color: #059669; background: rgba(5, 150, 105, 0.1); padding: 2px 8px; border-radius: 999px;">
                      ${step.badge}
                    </span>
                    <span style="font-size: var(--text-xs); color: var(--color-text-muted); display: inline-flex; align-items: center; gap: 4px;">
                      <span class="icon-3d-wrap" style="width: 14px; height: 14px;">${Icon3DTime}</span>
                      ${estTime}
                    </span>
                  </div>
                  <div style="display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-2);">
                    <div style="width: 36px; height: 36px; border-radius: var(--radius-md); background: var(--color-surface-hover); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <span class="icon-3d-wrap" style="width: 22px; height: 22px;">${stepIcon}</span>
                    </div>
                    <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); margin: 0;">
                      ${title}
                    </h3>
                  </div>
                  <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                    ${desc}
                  </p>
                </a>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Featured Authentic Dua Banner -->
        <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); margin-bottom: var(--space-10); position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #F59E0B, #10B981, #0284C7);"></div>
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-3); margin-bottom: var(--space-4);">
            <div style="display: flex; align-items: center; gap: var(--space-2);">
              <span class="section-badge" style="background: rgba(245, 158, 11, 0.15); color: #d97706; border: 1px solid rgba(245, 158, 11, 0.3);">
                📿 ${lang === 'bn' ? 'সুন্নাহ সমর্থিত সহীহ দোয়া' : 'Authentic Sunnah Supplication'}
              </span>
              <span style="font-size: var(--text-xs); color: var(--color-text-muted);">
                ${lang === 'bn' ? 'সহীহ বুখারী: ১৫৪৯ | সহীহ মুসলিম: ১১৮৪' : 'Sahih al-Bukhari: 1549 | Sahih Muslim: 1184'}
              </span>
            </div>
            <a href="#/${lang}/umrah/duas" style="font-size: var(--text-sm); font-weight: 600; color: var(--color-primary); text-decoration: none;">
              ${lang === 'bn' ? 'সকল দোয়া দেখুন →' : 'View All Duas →'}
            </a>
          </div>

          <h3 style="font-size: var(--text-lg); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${lang === 'bn' ? 'উমরাহর প্রাণ: তালবিয়াহ' : 'The Soul of Umrah: The Talbiyah'}
          </h3>

          <div style="background: var(--color-surface-hover); border-radius: var(--radius-lg); padding: var(--space-4); margin-bottom: var(--space-3);">
            <p class="font-indopak" dir="rtl" style="font-size: clamp(1.4rem, 3vw, 1.85rem); line-height: 2; text-align: center; margin-bottom: var(--space-2); color: var(--color-text-primary);">
              ${formatColorCodedQuran(UMRAH_DUAS_DATA.authenticated[0].arabic)}
            </p>
            <p style="font-size: var(--text-sm); font-style: italic; color: var(--color-text-secondary); text-align: center; margin-bottom: var(--space-2);">
              "${UMRAH_DUAS_DATA.authenticated[0].transliteration}"
            </p>
            <p style="font-size: var(--text-sm); color: var(--color-text-primary); text-align: center; margin: 0; line-height: 1.6;">
              ${lang === 'bn' ? UMRAH_DUAS_DATA.authenticated[0].meaningBn : UMRAH_DUAS_DATA.authenticated[0].meaningEn}
            </p>
          </div>

          <p style="font-size: var(--text-xs); color: var(--color-text-muted); margin: 0; line-height: 1.5;">
            ⚠️ ${lang === 'bn' ? UMRAH_DUAS_DATA.warningUnverifiedBn : UMRAH_DUAS_DATA.warningUnverifiedEn}
          </p>
        </section>

        <!-- Topic Clusters Directory (All 19 Pages Categorized) -->
        <section style="margin-bottom: var(--space-10);">
          <div style="text-align: center; margin-bottom: var(--space-6);">
            <span class="section-badge" style="margin-bottom: var(--space-2); display: inline-block;">
              ${lang === 'bn' ? 'সম্পূর্ণ উমরাহ অধ্যায়সমূহ' : 'Comprehensive Topic Directory'}
            </span>
            <h2 style="font-size: var(--text-2xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
              ${lang === 'bn' ? '১৯টি বিষয়ের প্রামাণ্য ডিজিটাল এনসাইক্লোপিডিয়া' : '19 In-Depth Evidence-Based Subpages'}
            </h2>
            <p style="font-size: var(--text-sm); color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
              ${lang === 'bn'
                ? 'ভিসা ও পারমিট থেকে শুরু করে নারী ও বয়োবৃদ্ধদের বিধান, স্বাস্থ্য ও প্রচলিত ভুলের সমাধান—সবকিছু এক ছাদের নিচে।'
                : 'From visa and Nusuk permits to elderly/women rulings, healthcare tips, and common pitfalls corrected.'}
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: var(--space-8);">
            ${subpageGroups.map(group => {
              const groupTitle = lang === 'bn' ? group.groupTitleBn : group.groupTitleEn;
              return `
                <div>
                  <h3 style="font-size: var(--text-lg); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2); border-bottom: 2px solid var(--color-border); padding-bottom: var(--space-2);">
                    <span style="color: #059669;">◆</span>
                    <span>${groupTitle}</span>
                  </h3>
                  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-4);">
                    ${group.pages.map(slug => {
                      const pageData = UMRAH_PAGES_DATA[slug];
                      if (!pageData) return '';
                      const title = lang === 'bn' ? pageData.titleBn : pageData.titleEn;
                      const summary = lang === 'bn' ? pageData.summaryBn : pageData.summaryEn;
                      const rTime = lang === 'bn' ? pageData.readingTime : pageData.readingTimeEn;
                      const catName = lang === 'bn' ? pageData.categoryBn : pageData.categoryEn;

                      return `
                        <a href="#/${lang}/umrah/${slug}" class="card" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; justify-content: space-between; padding: var(--space-4); transition: transform 0.2s, box-shadow 0.2s; border: 1px solid var(--color-border);">
                          <div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-2);">
                              <span style="font-size: 11px; font-weight: 700; color: #0284c7; background: rgba(2, 132, 199, 0.08); padding: 2px 6px; border-radius: 4px;">
                                ${catName}
                              </span>
                              <span style="font-size: 11px; color: var(--color-text-muted); display: inline-flex; align-items: center; gap: 3px;">
                                <span class="icon-3d-wrap" style="width: 12px; height: 12px;">${Icon3DTime}</span>
                                ${rTime}
                              </span>
                            </div>
                            <h4 style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-2); line-height: 1.4;">
                              ${title}
                            </h4>
                            <p style="font-size: var(--text-xs); color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                              ${summary}
                            </p>
                          </div>
                          <div style="margin-top: var(--space-3); font-size: var(--text-xs); font-weight: 600; color: var(--color-primary); display: flex; align-items: center; gap: 4px;">
                            <span>${lang === 'bn' ? 'পড়ুন' : 'Read Guide'}</span>
                            <span>→</span>
                          </div>
                        </a>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Official Sources & Anti-Hallucination Disclaimer Card -->
        <section class="umrah-sources-card" style="margin-bottom: var(--space-8);">
          <div style="display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-3);">
            <span class="icon-3d-wrap" style="width: 24px; height: 24px;">${Icon3DUmrah}</span>
            <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); margin: 0;">
              ${lang === 'bn' ? 'প্রামাণ্যতা ও অফিশিয়াল তথ্যের উৎস' : 'Evidence-Based Sources & Official Portals'}
            </h3>
          </div>
          <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; margin-bottom: var(--space-4);">
            ${lang === 'bn'
              ? 'EQRA-এর উমরাহ পোর্টালের সমস্ত তথ্য তিন স্তরের যাচাই পদ্ধতির মাধ্যমে প্রণীত: (১) কুরআন ও সহীহ হাদিসের মূল পাঠ, (২) সৌদি হজ ও উমরাহ মন্ত্রণালয় এবং নুসূক অফিশিয়াল প্ল্যাটফর্মের হালনাগাদ সার্কুলার, (৩) আহলে সুন্নাত ওয়াল জামাআতের চার মাযহাবের নির্ভরযোগ্য ফিক্বহ গ্রন্থ।'
              : 'All content in the EQRA Umrah Portal is verified through a 3-tier evidentiary protocol: (1) Primary texts of the Quran and Sahih Hadith, (2) Official circulars from the Saudi Ministry of Hajj & Umrah and Nusuk, and (3) Classical consensus and 4-Madhhab comparative jurisprudence.'}
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: var(--space-3);">
            ${UMRAH_PORTAL_METADATA.officialPortals.map(p => `
              <a href="${p.url}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; font-size: var(--text-xs); font-weight: 600; color: #0284c7; background: var(--color-surface); padding: 6px 12px; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-decoration: none;">
                <span>🌐 ${lang === 'bn' ? p.nameBn : p.nameEn}</span>
                <span style="font-size: 10px; opacity: 0.7;">↗</span>
              </a>
            `).join('')}
          </div>
          
          <div style="margin-top: var(--space-3); font-size: 11px; color: var(--color-text-muted);">
            ${lang === 'bn' ? 'সর্বশেষ যাচাই ও অডিট: সেপ্টেম্বর ২০২৬ | সংস্করণ: ১.০' : 'Last verified & audited: September 2026 | Version: 1.0'}
          </div>
        </section>

      </div>
    </div>
  `;
}

export function bindUmrahIndexEvents() {
  bindTajweedInteractions();
}
