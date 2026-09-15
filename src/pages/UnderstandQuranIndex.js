// ============================================
// EQRA — Understand Quran Vocabulary Index / Hub
// Based on 'How to Understand 50% & 65% of the Quran' by Drs. Islam Fekry (Arabic 101)
// Strict Bilingual Separation: Pure Bengali in 'bn', Authentic English in 'en'
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { UNDERSTAND_QURAN_METADATA, BOOK_1_LISTS, BOOK_2_LISTS } from '../data/understandQuranData.js';
import { 
  Icon3DVocab, 
  Icon3DPercentPie, 
  Icon3DDocument, 
  Icon3DTime 
} from '../components/Icons3D.js';

export function renderUnderstandQuranIndex() {
  const lang = getLang();
  const isBn = lang === 'bn';
  const meta = UNDERSTAND_QURAN_METADATA;
  const book1 = meta.books['book-1'];
  const book2 = meta.books['book-2'];

  updateMeta({
    title: isBn 
      ? 'কুরআনের ৫০% ও ৬৫% শব্দভাণ্ডার শিক্ষা — সহজে কুরআন বোঝার উপায় | EQRA' 
      : 'Understand 50% & 65% of the Holy Quran — High-Frequency Vocabulary | EQRA',
    description: isBn 
      ? 'ড. ইসলাম ফিকরি (Arabic 101)-এর বিশ্বখ্যাত গবেষণা: মাত্র ৭৭টি শব্দে কুরআনের ৫০% এবং ১৯৫টি শব্দে ৬৫% অর্থ বোঝার প্রামাণ্য ডিজিটাল প্ল্যাটফর্ম ও অনুশীলন।'
      : 'Master 50% of the Quran with just 77 high-frequency words (Book 1) and up to 65% with 195 essential nouns & adjectives (Book 2). Interactive digital reader & vocabulary drills.',
    canonicalPath: `#/${lang}/understand-quran`
  });

  return `
    <div class="page understand-quran-hub">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${isBn ? 'কুরআনের ৫০%-৬৫% শব্দ শিক্ষা' : 'Understand 50% - 65% Quran'}</span>
        </nav>

        <!-- Hero Section -->
        <header class="vocab-hero-card" style="margin-bottom: var(--space-8);">
          <div style="display: flex; align-items: center; justify-content: center; gap: var(--space-2); margin-bottom: var(--space-3);">
            <span class="section-badge" style="background: rgba(2, 132, 199, 0.12); color: #0284C7; border: 1px solid rgba(2, 132, 199, 0.25); font-weight: 700;">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px; display: inline-flex; vertical-align: middle;">${Icon3DPercentPie}</span>
              <span>${isBn ? 'আরবি ১০১ পাবলিকেশন্স • ড. ইসলাম ফিকরি' : 'Arabic 101 Publications • Drs. Islam Fekry'}</span>
            </span>
            <span class="section-badge" style="background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid rgba(16, 185, 129, 0.25);">
              ✓ ${isBn ? 'উসমানী ও ইন্দো-পাক লিপির সমন্বয়' : 'Authentic High-Frequency Method'}
            </span>
          </div>

          <h1 style="font-size: clamp(1.85rem, 4vw, 2.75rem); font-weight: 900; line-height: 1.25; margin-bottom: var(--space-3); color: var(--color-text-primary);">
            ${isBn ? 'পবিত্র কুরআনের ৫০% ও ৬৫% ভাষা বোঝার উপায়' : 'How to Understand 50% & 65% of the Holy Quran'}
          </h1>

          <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 720px; margin: 0 auto var(--space-6); line-height: 1.6;">
            ${isBn 
              ? 'কঠিন ব্যাকরণ না শিখেও মাত্র ৭৭টি বহুল ব্যবহৃত শব্দের মাধ্যমে কুরআনের ৫০% এবং ১৯৫টি বিশেষ্য ও বিশেষণের মাধ্যমে ৬৫% অর্থ সরাসরি অনুধাবন করার প্রমাণিত বৈজ্ঞানিক পদ্ধতি।'
              : 'A proven, statistical learning methodology for non-Arabs to comprehend roughly 50% of the Holy Quran with just 77 words, expanding to 65% with 195 high-frequency nouns and adjectives.'}
          </p>

          <!-- Quick Action Buttons -->
          <div style="display: flex; gap: var(--space-3); justify-content: center; flex-wrap: wrap;">
            <a href="#/${lang}/understand-quran/book-1" class="btn btn-primary" style="background: linear-gradient(135deg, #0284C7 0%, #0369A1 100%); border: none; font-weight: 700; padding: 10px 22px; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);">
              <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DVocab}</span>
              <span>${isBn ? '১ম খণ্ড: ৫০% কুরআন শিক্ষা শুরু করুন' : 'Start Book 1: 50% Vocabulary'}</span>
            </a>
            <a href="#/${lang}/understand-quran/book-2" class="btn btn-secondary" style="border: 1px solid var(--color-border); font-weight: 600; padding: 10px 20px;">
              <span>📗 ${isBn ? '২য় খণ্ড: ৬৫% শব্দভাণ্ডার' : 'Book 2: 65% Vocabulary'}</span>
            </a>
            <a href="${book1.youtubePlaylist}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="border: 1px solid var(--color-border); font-weight: 600; padding: 10px 20px; display: inline-flex; align-items: center; gap: 6px;">
              <span>▶️</span>
              <span>${isBn ? 'অফিসিয়াল ভিডিও ক্লাস' : 'Video Course'}</span>
              <span>↗️</span>
            </a>
          </div>
        </header>

        <!-- Statistical Impact Strip -->
        <div class="vocab-stat-grid">
          <div class="vocab-stat-card">
            <div style="font-size: var(--text-2xl); font-weight: 800; color: #0284C7;">${isBn ? '৭৭টি মূল শব্দ' : '77 Core Words'}</div>
            <div style="font-size: var(--text-xs); color: var(--color-text-secondary); margin-top: 4px;">
              ${isBn ? 'কুরআনের মোট শব্দের ৫০% গঠন করে' : 'Accounts for 50% of entire Quranic text'}
            </div>
          </div>
          <div class="vocab-stat-card">
            <div style="font-size: var(--text-2xl); font-weight: 800; color: #F59E0B;">${isBn ? '+১৯৫টি শব্দ' : '+195 Core Words'}</div>
            <div style="font-size: var(--text-xs); color: var(--color-text-secondary); margin-top: 4px;">
              ${isBn ? 'গুণবাচক বিশেষ্য যা বুঝার ক্ষমতা ৬৫%-এ নেয়' : 'High-frequency nouns raising comprehension to 65%'}
            </div>
          </div>
          <div class="vocab-stat-card">
            <div style="font-size: var(--text-2xl); font-weight: 800; color: #059669;">${isBn ? '৭ ধাপের মেথড' : '7-Step Method'}</div>
            <div style="font-size: var(--text-xs); color: var(--color-text-secondary); margin-top: 4px;">
              ${isBn ? 'আরবি বর্ণমালা থেকে সরাসরি তাদাব্বুর' : 'From literacy to direct Quranic reflection'}
            </div>
          </div>
          <div class="vocab-stat-card">
            <div style="font-size: var(--text-2xl); font-weight: 800; color: #8B5CF6;">${isBn ? '১০০% উন্মুক্ত' : '100% Free & Open'}</div>
            <div style="font-size: var(--text-xs); color: var(--color-text-secondary); margin-top: 4px;">
              ${isBn ? 'ইন্টারেক্টিভ রিডার ও শব্দভাণ্ডার অনুশীলন' : 'Digital reader, quizzes & interactive exercises'}
            </div>
          </div>
        </div>

        <!-- The Pie Chart Visualization -->
        <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); margin-bottom: var(--space-10);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-3); margin-bottom: var(--space-4);">
            <div>
              <span class="section-badge" style="margin-bottom: 4px; display: inline-block;">
                ${isBn ? 'শব্দভাণ্ডারের বিশ্লেষণ' : 'Vocabulary Distribution'}
              </span>
              <h2 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin: 0;">
                ${isBn ? 'কুরআনিক শব্দভাণ্ডারের পাই-চার্ট ও অনুপাত' : 'Quranic Vocabulary Pie Chart Breakdown'}
              </h2>
            </div>
            <span style="font-size: var(--text-xs); color: var(--color-text-muted);">
              ${isBn ? 'মোট ৭৭,৮০০ শব্দের পরিসংখ্যান' : 'Based on 77,800 word occurrences'}
            </span>
          </div>

          <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; margin-bottom: var(--space-4);">
            ${isBn 
              ? 'পবিত্র কুরআনের ১১৪টি সূরায় মোট ১৮,৯৯৪টি স্বতন্ত্র শব্দ রয়েছে। কিন্তু বারবার পুনরাবৃত্তির কারণে মাত্র ৭৭টি শব্দ (নীল অংশ) মোট শব্দের ৫০% এবং অতিরিক্ত ১৯৫টি শব্দ (কমলা অংশ) আরও ১৫% গঠন করে। অর্থাৎ এই দুটি বই সম্পন্ন করলে আপনি কুরআনের ৬৫% শব্দের অর্থ বুঝে ফেলবেন!'
              : 'The Holy Quran consists of roughly 18,994 unique vocabulary roots across 114 surahs. However, due to high repetition, only 77 particles & pronouns form 50% (blue slice) and 195 nouns form another 15% (amber slice). Mastering these two books gives you immediate 65% comprehension!'}
          </p>

          <div class="vocab-pie-grid">
            ${meta.methodology.pieChart.map(slice => `
              <div class="vocab-pie-item" style="border-left: 4px solid ${slice.color};">
                <div style="font-size: var(--text-2xl); font-weight: 900; color: ${slice.color}; min-width: 54px;">
                  ${slice.percent}%
                </div>
                <div style="font-size: var(--text-xs); font-weight: 600; color: var(--color-text-primary); line-height: 1.4;">
                  ${isBn ? slice.labelBn : slice.labelEn}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- The 2 Books Cards Showcase -->
        <section style="margin-bottom: var(--space-10);">
          <div style="text-align: center; margin-bottom: var(--space-6);">
            <span class="section-badge" style="margin-bottom: var(--space-2); display: inline-block;">
              ${isBn ? 'মূল পাঠ্যপুস্তক দুটি' : 'The Two Foundation Books'}
            </span>
            <h2 style="font-size: var(--text-2xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
              ${isBn ? 'ধাপে ধাপে কুরআন হৃদয়ঙ্গম করার সিলেবাস' : 'Structured Course Curriculum'}
            </h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">
            
            <!-- Book 1 Card -->
            <div class="card" style="border: 2px solid rgba(2, 132, 199, 0.3); border-radius: var(--radius-2xl); padding: var(--space-6); background: var(--color-surface); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-3);">
                  <span style="font-size: 11px; font-weight: 800; color: #FFFFFF; background: #0284C7; padding: 3px 10px; border-radius: 999px;">
                    ${isBn ? '১ম খণ্ড • ৫০% কুরআন' : 'BOOK 1 • 50% QURAN'}
                  </span>
                  <span style="font-size: 11px; color: var(--color-text-muted);">
                    ${book1.totalPages} ${isBn ? 'পৃষ্ঠা • ৭টি অধ্যায়' : 'Pages • 7 Lists'}
                  </span>
                </div>

                <h3 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2); line-height: 1.3;">
                  ${isBn ? book1.titleBn : book1.titleEn}
                </h3>
                <p style="font-size: var(--text-xs); color: #0284C7; font-weight: 600; margin-bottom: var(--space-3);">
                  ${isBn ? book1.subtitleBn : book1.subtitleEn}
                </p>
                <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.5; margin-bottom: var(--space-4);">
                  ${isBn ? book1.summaryBn : book1.summaryEn}
                </p>

                <!-- List preview -->
                <div style="background: var(--color-surface-hover); border-radius: var(--radius-lg); padding: var(--space-3); margin-bottom: var(--space-4); font-size: var(--text-xs); color: var(--color-text-secondary);">
                  <div style="font-weight: 700; color: var(--color-text-primary); margin-bottom: 4px;">
                    ${isBn ? 'বইটির মূল ৭টি অধ্যায়:' : 'Core 7 Lists Included:'}
                  </div>
                  <div>• ${isBn ? 'ইশারা সূচক সর্বনাম (হাযা, যালিকা)' : 'Demonstrative Pronouns (Hādhā, Dhālika)'}</div>
                  <div>• ${isBn ? 'না-বোধক ও ব্যতিক্রমী শব্দ (লা, মা, লান, লাম)' : 'Negations & Exceptions (Lā, Mā, Lan, Lam)'}</div>
                  <div>• ${isBn ? 'প্রশ্নবোধক শব্দ (কী, কেন, কে, কখন)' : 'Question Words (What, Why, Who, When)'}</div>
                  <div>• ${isBn ? 'দিক ও স্থান নির্দেশক অব্যয় (ফাওকা, তাহতা)' : 'Prepositions Part I & II (Above, Under, With)'}</div>
                  <div>• ${isBn ? 'সংযোগকারী শব্দ (ইন্না, আন্না, লাকিন্না)' : 'Connectors (Inna, Anna, Lakinna, Law)'}</div>
                  <div>• ${isBn ? 'কুরআনে ‘মা’ (مَا)-এর বহুমুখী ব্যবহার' : 'Special Addendum: Types of Mā (مَا)'}</div>
                </div>
              </div>

              <!-- Buttons -->
              <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-4);">
                <a href="#/${lang}/understand-quran/book-1" class="btn btn-primary" style="flex: 1; text-align: center; font-size: var(--text-xs); background: #0284C7; border: none; font-weight: 700; padding: 10px 14px;">
                  📖 ${isBn ? 'ডিজিটাল রিডার ও অনুশীলন' : 'Open Digital Learning'} →
                </a>
                <a href="${book1.youtubePlaylist}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: var(--text-xs); display: inline-flex; align-items: center; gap: 4px;" title="${isBn ? 'ইউটিউব ভিডিও ক্লাস' : 'YouTube Lessons'}">
                  ▶️ ${isBn ? 'ভিডিও ক্লাস' : 'Video Lesson'} ↗️
                </a>
              </div>
            </div>

            <!-- Book 2 Card -->
            <div class="card" style="border: 2px solid rgba(5, 150, 105, 0.3); border-radius: var(--radius-2xl); padding: var(--space-6); background: var(--color-surface); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-3);">
                  <span style="font-size: 11px; font-weight: 800; color: #FFFFFF; background: #059669; padding: 3px 10px; border-radius: 999px;">
                    ${isBn ? '২য় খণ্ড • ৬৫% কুরআন' : 'BOOK 2 • 65% QURAN'}
                  </span>
                  <span style="font-size: 11px; color: var(--color-text-muted);">
                    ${book2.totalPages} ${isBn ? 'পৃষ্ঠা • ১১টি অধ্যায়' : 'Pages • 11 Lists'}
                  </span>
                </div>

                <h3 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2); line-height: 1.3;">
                  ${isBn ? book2.titleBn : book2.titleEn}
                </h3>
                <p style="font-size: var(--text-xs); color: #059669; font-weight: 600; margin-bottom: var(--space-3);">
                  ${isBn ? book2.subtitleBn : book2.subtitleEn}
                </p>
                <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.5; margin-bottom: var(--space-4);">
                  ${isBn ? book2.summaryBn : book2.summaryEn}
                </p>

                <!-- List preview -->
                <div style="background: var(--color-surface-hover); border-radius: var(--radius-lg); padding: var(--space-3); margin-bottom: var(--space-4); font-size: var(--text-xs); color: var(--color-text-secondary);">
                  <div style="font-weight: 700; color: var(--color-text-primary); margin-bottom: 4px;">
                    ${isBn ? 'বইটির মূল ১১টি অধ্যায়:' : 'Core 11 Lists Included:'}
                  </div>
                  <div>• ${isBn ? 'আল্লাহর পবিত্র নাম ও সিফাত (রব, রাহমান, রাহীম)' : 'Allah’s Names & Attributes (Rabb, Raḥmān, Raḥīm)'}</div>
                  <div>• ${isBn ? 'সাধারণ গুণবাচক বিশেষণ (আউয়াল, আখির, কারীম)' : 'Attributes & Adjectives (Awwal, Ākhir, Karīm)'}</div>
                  <div>• ${isBn ? 'আম্বিয়া ও রাসূলগণের পবিত্র নাম' : 'Prophets and Messengers (Mūsā, Ibrāhīm, Nūḥ)'}</div>
                  <div>• ${isBn ? 'মহাজাগতিক নিদর্শন (আকাশ, পৃথিবী, সূর্য, চন্দ্র)' : 'Cosmic Signs & Blessings (Heavens, Earth, Sun)'}</div>
                  <div>• ${isBn ? 'দ্বীন, সালাত, সত্য-মিথ্যা ও তাকওয়া' : 'Deen, Worship, Salah, Zakah & Truth'}</div>
                  <div>• ${isBn ? 'ভাঙা বহুবচনের নিয়ম (Broken Plurals)' : 'Addendum: Broken Plurals in Quran'}</div>
                </div>
              </div>

              <!-- Buttons -->
              <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-4);">
                <a href="#/${lang}/understand-quran/book-2" class="btn btn-primary" style="flex: 1; text-align: center; font-size: var(--text-xs); background: #059669; border: none; font-weight: 700; padding: 10px 14px;">
                  📖 ${isBn ? 'ডিজিটাল রিডার ও অনুশীলন' : 'Open Digital Learning'} →
                </a>
                <a href="${book2.youtubePlaylist}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: var(--text-xs); display: inline-flex; align-items: center; gap: 4px;" title="${isBn ? 'ইউটিউব ভিডিও ক্লাস' : 'YouTube Lessons'}">
                  ▶️ ${isBn ? 'ভিডিও ক্লাস' : 'Video Lesson'} ↗️
                </a>
              </div>
            </div>

          </div>
        </section>

        <!-- Official YouTube Lecture Companion -->
        <section style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.06) 0%, rgba(2, 132, 199, 0.06) 100%); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: var(--radius-xl); padding: var(--space-6); margin-bottom: var(--space-8);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4);">
            <div style="display: flex; align-items: center; gap: var(--space-3);">
              <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: #EF4444; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3); flex-shrink: 0;">
                ▶
              </div>
              <div>
                <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-text-primary); margin-bottom: 2px;">
                  ${isBn ? 'অফিসিয়াল ভিডিও ক্লাস দেখুন (Arabic 101)' : 'Watch Official Arabic 101 Video Lessons'}
                </h3>
                <p style="font-size: var(--text-xs); color: var(--color-text-secondary); margin: 0;">
                  ${isBn 
                    ? 'লেসন ১-এর ভিডিও ক্লাস দেখে প্রতিটি শব্দের শুদ্ধ উচ্চারণ ও ব্যাকরণিক ব্যাখ্যা শুনুন।'
                    : 'Listen to the original video explanation of Lesson 1 by Drs. Islam Fekry with pronunciation exercises.'}
                </p>
              </div>
            </div>
            <a href="https://www.youtube.com/watch?v=mChh2WwT4Tk" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" style="background: #EF4444; border: none; font-weight: 600;">
              ${isBn ? 'ইউটিউবে লেসন ১ দেখুন ↗' : 'Watch Lesson 1 on YouTube ↗'}
            </a>
          </div>
        </section>

      </div>
    </div>
  `;
}

export function bindUnderstandQuranIndexEvents() {
  // Bindings for Hub if needed
}
