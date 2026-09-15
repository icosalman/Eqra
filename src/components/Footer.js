// ============================================
// EQRA — Global Footer Component
// ============================================

import { t, getLang } from '../i18n.js';

export function renderFooter() {
  const lang = getLang();

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div>
            <div class="footer-brand-name">EQRA • ٱقْرَأْ</div>
            <p class="footer-brand-desc">
              ${lang === 'bn' 
                ? 'পবিত্র আল-কুরআনের নূর ও প্রজ্ঞাকে মানুষের হৃদয়ে পৌঁছে দেওয়ার জন্য একটি আধুনিক, নির্ভুল ও দ্বিভাষিক ডিজিটাল প্ল্যাটফর্ম।' 
                : 'A modern, authentic, and bilingual digital platform dedicated to bringing the light, wisdom, and reflection of the Holy Quran to hearts worldwide.'}
            </p>
            <div style="margin-top: var(--space-4); display: flex; gap: var(--space-2);">
              <span class="tag">Uthmanic Hafs</span>
              <span class="tag">Sahih Translations</span>
              <span class="tag">Mishary Al-Afasy</span>
            </div>
          </div>

          <!-- Quran Links -->
          <div>
            <div class="footer-heading">${t('navQuran')}</div>
            <div class="footer-links">
              <a href="#/${lang}/quran/1" class="footer-link">সূরা আল-ফাতিহা (Al-Fatihah)</a>
              <a href="#/${lang}/quran/2" class="footer-link">সূরা আল-বাকারা (Al-Baqarah)</a>
              <a href="#/${lang}/quran/36" class="footer-link">সূরা ইয়াসীন (Ya-Sin)</a>
              <a href="#/${lang}/quran/55" class="footer-link">সূরা আর-রহমান (Ar-Rahman)</a>
              <a href="#/${lang}/quran/67" class="footer-link">সূরা আল-মুলক (Al-Mulk)</a>
              <a href="#/${lang}/quran" class="footer-link" style="color: var(--color-quran); font-weight: 600;">
                ${lang === 'bn' ? 'সকল ১১৪টি সূরা দেখুন →' : 'View All 114 Surahs →'}
              </a>
            </div>
          </div>

          <!-- Resources & Umrah -->
          <div>
            <div class="footer-heading">${lang === 'bn' ? 'উমরাহ ও রিসোর্স' : 'Umrah & Resources'}</div>
            <div class="footer-links">
              <a href="#/${lang}/umrah" class="footer-link" style="color: #059669; font-weight: 700;">
                🕋 ${lang === 'bn' ? 'উমরাহ পোর্টাল হাব' : 'Umrah Portal Hub'}
              </a>
              <a href="#/${lang}/umrah/guide" class="footer-link">${lang === 'bn' ? 'উমরাহ পূর্ণাঙ্গ গাইড' : 'Step-by-Step Umrah'}</a>
              <a href="#/${lang}/umrah/checklist" class="footer-link">${lang === 'bn' ? 'প্রস্তুতি চেকলিস্ট' : 'Interactive Checklist'}</a>
              <a href="#/${lang}/understand-quran" class="footer-link" style="color: #0284C7; font-weight: 700;">
                📊 ${lang === 'bn' ? 'কুরআন শব্দার্থ ও শব্দভাণ্ডার' : 'Quran Vocabulary Course'}
              </a>
              <a href="#/${lang}/understand-quran/book-1" class="footer-link">${lang === 'bn' ? '১ম খণ্ড: ৫০% মূল শব্দভাণ্ডার' : 'Part 1: 50% High-Frequency Words'}</a>
              <a href="#/${lang}/understand-quran/book-2" class="footer-link">${lang === 'bn' ? '২য় খণ্ড: ৬৫% শব্দভাণ্ডার' : 'Part 2: 65% Vocabulary'}</a>
              <a href="#/${lang}/hadith" class="footer-link">${lang === 'bn' ? 'সহীহ হাদিস সমগ্র' : 'Sahih Hadith'}</a>
              <a href="#/${lang}/dua" class="footer-link">${lang === 'bn' ? 'কুরআনের দোয়া সমগ্র' : 'Quranic Duas'}</a>
              <a href="#/${lang}/about" class="footer-link">${t('navAbout')}</a>
            </div>
          </div>

          <!-- Islamic Network info -->
          <div>
            <div class="footer-heading">${lang === 'bn' ? 'বিশুদ্ধ তথ্যসূত্র' : 'Authentic Sources'}</div>
            <div class="footer-links">
              <span class="footer-link">King Fahd Quran Complex</span>
              <span class="footer-link">Tanzil.net Verified Text</span>
              <span class="footer-link">Sahih International</span>
              <span class="footer-link">Muhiuddin Khan Translation</span>
              <span class="footer-link">Islamic Network Audio CDN</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>${t('footerCopyright')}</div>
          <div style="display: flex; gap: var(--space-4);">
            <a href="#/${lang}/" class="footer-link">EQRA.COM</a>
            <span>•</span>
            <span>بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
