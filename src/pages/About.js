// ============================================
// EQRA — About Page
// Mission, Authenticity & Sources
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { Icon3DHadith, Icon3DFeedback } from '../components/Icons3D.js';

export function renderAboutPage() {
  const lang = getLang();

  updateMeta({
    title: lang === 'bn' ? 'EQRA সম্পর্কে — লক্ষ্য, উদ্দেশ্য ও বিশুদ্ধ তথ্যসূত্র' : 'About EQRA — Mission & Authentic Sources',
    description: 'EQRA একটি আধুনিক ও নির্ভরযোগ্য দ্বিভাষিক কুরআন জ্ঞান প্ল্যাটফর্ম।',
    canonicalPath: `#/${lang}/about`
  });

  return `
    <div class="page">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${t('navAbout')}</span>
        </nav>

        <header class="card animate-fade-in" style="text-align: center; padding: var(--space-8); margin-bottom: var(--space-8);">
          <div class="loader-arabic" style="margin-bottom: var(--space-2); color: var(--color-quran);">ٱقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</div>
          <h1 style="font-size: var(--text-3xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-3);">
            ${lang === 'bn' ? 'EQRA — কুরআন পড়ুন, বুঝুন, চিন্তা করুন' : 'EQRA — Read. Understand. Reflect.'}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary); line-height: 1.8;">
            ${lang === 'bn' 
              ? 'আমাদের লক্ষ্য হলো আধুনিক ওয়েব প্রযুক্তির সর্বোত্তম ব্যবহার করে পবিত্র আল-কুরআন ও বিশুদ্ধ সুন্নাহর প্রজ্ঞাকে বাংলা ও ইংরেজি ভাষাভাষী প্রতিটি মানুষের কাছে সহজে, নির্ভরযোগ্যভাবে ও নিরবচ্ছিন্নভাবে পৌঁছে দেওয়া।' 
              : 'Our mission is to harness the best of modern web technology to make the guidance, reflection, and authentic wisdom of the Holy Quran and Sunnah universally accessible.'}
          </p>
        </header>

        <!-- Authentic Sources Section -->
        <section class="section" style="padding-top: 0;">
          <h2 style="font-size: var(--text-2xl); font-weight: 700; margin-bottom: var(--space-4); display: flex; align-items: center; gap: 8px;">
            <span class="icon-3d-wrap" style="width: 24px; height: 24px;">${Icon3DHadith}</span>
            <span>${lang === 'bn' ? 'ব্যবহৃত বিশুদ্ধ তথ্যসূত্র ও টেক্সট' : 'Authentic Data Sources'}</span>
          </h2>

          <div style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div class="card section-card-quran" style="padding: var(--space-5);">
              <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-quran); margin-bottom: var(--space-1);">
                মদিনা কিং ফাহদ কুরআন কমপ্লেক্স ও তানযীল প্রকল্প
              </h3>
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7;">
                কুরআনের প্রতিটি হরফ, নুকতা এবং ওয়াক্ফের চিহ্ন Tanzil.net এবং King Fahd Glorious Quran Printing Complex-এর স্ট্যান্ডার্ড উসমানী রসম (KFGQPC Uthmanic Hafs) অনুযায়ী যাচাইকৃত।
              </p>
            </div>

            <div class="card section-card-quran" style="padding: var(--space-5);">
              <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-quran); margin-bottom: var(--space-1);">
                বাংলা অনুবাদ: মাওলানা মুহিউদ্দীন খান
              </h3>
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7;">
                বাংলাদেশ ও বাংলা ভাষাভাষী মুসলিমদের মাঝে সর্বাধিক সমাদৃত ও প্রতিষ্ঠিত বিশুদ্ধ অনুবাদ।
              </p>
            </div>

            <div class="card section-card-quran" style="padding: var(--space-5);">
              <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-quran); margin-bottom: var(--space-1);">
                ইংরেজি অনুবাদ: সহীহ ইন্টারন্যাশনাল (Sahih International)
              </h3>
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7;">
                আন্তর্জাতিক পরিসরে সবচেয়ে নির্ভুল ও নির্ভরযোগ্য সমসাময়িক ইংরেজি অনুবাদ।
              </p>
            </div>

            <div class="card section-card-hadith" style="padding: var(--space-5);">
              <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-hadith); margin-bottom: var(--space-1);">
                সহীহ হাদিস: সহীহুল বুখারী ও সহীহ মুসলিম
              </h3>
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7;">
                উভয় সংকলনের সর্বসম্মত বিশুদ্ধ সনদ ও পরিচ্ছেদ অনুযায়ী নির্বাচিত সুন্নাহ।
              </p>
            </div>

            <div class="card section-card-dua" style="padding: var(--space-5);">
              <h3 style="font-size: var(--text-base); font-weight: 700; color: var(--color-dua); margin-bottom: var(--space-1);">
                সুললিত অডিও তিলাওয়াত
              </h3>
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7;">
                বিশ্বখ্যাত কারী শায়েখ মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy) এর তেলাওয়াত, পরিবেশন করছে Islamic Network CDN।
              </p>
            </div>
          </div>
        </section>

        <!-- Feedback Form -->
        <section class="section" style="padding-top: 0;">
          <div class="card" style="padding: var(--space-6);">
            <h3 style="font-size: var(--text-xl); font-weight: 700; margin-bottom: var(--space-2); display: flex; align-items: center; gap: 8px;">
              <span class="icon-3d-wrap" style="width: 24px; height: 24px;">${Icon3DFeedback}</span>
              <span>${lang === 'bn' ? 'মতামত বা সংশোধনী জানান' : 'Feedback & Suggestions'}</span>
            </h3>
            <p style="font-size: var(--text-sm); color: var(--color-text-muted); margin-bottom: var(--space-4);">
              ${lang === 'bn' ? 'কোনো অসঙ্গতি বা পরামর্শ থাকলে আমাদের লিখে জানাতে পারেন।' : 'Feel free to share your thoughts, feedback, or report any typo.'}
            </p>

            <form id="feedback-form" onsubmit="event.preventDefault(); alert('ধন্যবাদ! আপনার বার্তাটি গৃহীত হয়েছে।');">
              <div style="margin-bottom: var(--space-3);">
                <input type="text" class="search-input" placeholder="${lang === 'bn' ? 'আপনার নাম' : 'Your Name'}" required style="border-radius: var(--radius-md);" />
              </div>
              <div style="margin-bottom: var(--space-3);">
                <input type="email" class="search-input" placeholder="${lang === 'bn' ? 'আপনার ইমেইল' : 'Your Email'}" required style="border-radius: var(--radius-md);" />
              </div>
              <div style="margin-bottom: var(--space-4);">
                <textarea class="search-input" rows="4" placeholder="${lang === 'bn' ? 'আপনার বার্তা লিখুন...' : 'Write your message...'}" required style="height: auto; padding: var(--space-3); border-radius: var(--radius-md);"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                ${lang === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  `;
}
