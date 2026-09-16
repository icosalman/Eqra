// ============================================
// EQRA — Homepage
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { SURAHS_METADATA } from '../data/quranMetadata.js';
import { KEY_AYAHS } from '../data/popularSurahs.js';
import { DUAS_DATA } from '../data/duas.js';
import { HADITHS_DATA } from '../data/hadiths.js';
import { audioPlayer } from '../components/AudioPlayer.js';
import { formatColorCodedQuran, bindTajweedInteractions } from '../utils/quranColors.js';
import { renderQuran3DBook, bindQuran3DBook } from '../components/Quran3DBook.js';
import { 
  renderSurah3DBadge, 
  Icon3DQuran, 
  Icon3DHadith, 
  Icon3DDua, 
  Icon3DSearch, 
  Icon3DPlay, 
  Icon3DAudio, 
  Icon3DMoon,
  Icon3DSparkle
} from '../components/Icons3D.js';

export function renderHomePage() {
  const lang = getLang();

  // Pick today's featured Ayah (rotates based on day)
  const dayIndex = new Date().getDate() % KEY_AYAHS.length;
  const featuredAyah = KEY_AYAHS[dayIndex];

  // Pick today's featured Dua and Hadith
  const featuredDua = DUAS_DATA[dayIndex % DUAS_DATA.length];
  const featuredHadith = HADITHS_DATA[dayIndex % HADITHS_DATA.length];

  // Quick access popular Surahs (1, 2, 18, 36, 55, 67, 112, 114)
  const popularSurahIds = [1, 2, 18, 36, 55, 67, 112, 114];
  const popularSurahs = SURAHS_METADATA.filter(s => popularSurahIds.includes(s.number));

  updateMeta({
    title: lang === 'bn' ? 'EQRA — কুরআন পড়ুন, বুঝুন, চিন্তা করুন' : 'EQRA — Read. Understand. Reflect.',
    description: lang === 'bn' 
      ? 'বাংলা ও ইংরেজিতে আল-কুরআন, বিশুদ্ধ সহীহ হাদিস এবং কুরআনের শ্রেষ্ঠ দোয়া সমগ্র।' 
      : 'Read Al-Quran, authentic Sahih Hadith, and Quranic Duas in Bangla and English.',
    canonicalPath: `#/${lang}/`
  });

  return `
    <div class="page">
      <div class="container">
        <!-- Hero Section -->
        <section class="hero animate-fade-in-up">
          <div class="hero-badge">
            ${t('heroBadge')}
          </div>
          <div class="hero-title-arabic font-indopak" style="text-align: center; margin: 0 auto var(--space-4);">
            ${formatColorCodedQuran(t('heroArabic'))}
          </div>
          <h1 class="hero-title">
            ${t('heroTitle')}
          </h1>
          <p class="hero-subtitle">
            ${t('heroSubtitle')}
          </p>

          <div class="hero-cta">
            <a href="#/${lang}/quran" class="btn btn-primary btn-lg">
              <span class="icon-3d-wrap" style="width: 22px; height: 22px;">${Icon3DQuran}</span>
              <span>${t('heroCTA')}</span>
            </a>
            <button class="btn btn-secondary btn-lg" id="hero-search-trigger">
              <span class="icon-3d-wrap" style="width: 20px; height: 20px;">${Icon3DSearch}</span>
              <span>${t('heroSearchCTA')}</span>
            </button>
            <a href="#/${lang}/dua" class="btn btn-secondary btn-lg">
              <span class="icon-3d-wrap" style="width: 22px; height: 22px;">${Icon3DDua}</span>
              <span>${t('navDua')}</span>
            </a>
          </div>
        </section>

        <!-- Scroll Driven 3D Quran -->
        ${renderQuran3DBook(lang)}

        <!-- Daily Featured Verse (আজকের আয়াত) -->
        <section class="section">
          <div class="card section-card-quran animate-fade-in" style="background: linear-gradient(135deg, var(--color-surface), var(--color-quran-bg));">
            <div class="section-header" style="margin-bottom: var(--space-4);">
              <div>
                <span class="section-badge badge-quran" style="display: inline-flex; align-items: center; gap: 6px;">
                  <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DSparkle}</span>
                  <span>${lang === 'bn' ? 'প্রতিদিনের আয়াত ও প্রজ্ঞা' : 'Daily Reflection Verse'}</span>
                </span>
                <h2 class="section-title" style="margin-top: var(--space-2);">
                  ${lang === 'bn' ? featuredAyah.titleBangla : featuredAyah.titleEnglish}
                </h2>
                <div class="section-subtitle">
                  ${lang === 'bn' ? featuredAyah.surahNameBangla : featuredAyah.surahNameEnglish} (${featuredAyah.surahNumber}:${featuredAyah.ayahNumber})
                </div>
              </div>

              <button class="btn btn-primary btn-sm" id="play-daily-ayah" data-audio="${featuredAyah.audio}" style="display: inline-flex; align-items: center; gap: 6px;">
                <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DPlay}</span>
                <span>${t('audioPlay')}</span>
              </button>
            </div>

            <!-- Arabic Calligraphy (Color Coded Tajweed with Indo-Pak Font) -->
            <div class="ayah-arabic font-indopak" style="font-size: var(--quran-size-lg); border-bottom: 1px dashed var(--color-border); padding-bottom: var(--space-4);">
              ${formatColorCodedQuran(featuredAyah.indopak || featuredAyah.tajweed || featuredAyah.arabic)}
            </div>

            <!-- Bangla & English -->
            <div style="margin-top: var(--space-4); display: grid; gap: var(--space-3);">
              <div class="ayah-translation-bn" style="font-size: var(--text-lg); line-height: 1.8;">
                ${featuredAyah.bangla}
              </div>
              <div class="ayah-translation-en" style="font-size: var(--text-base);">
                ${featuredAyah.english}
              </div>
            </div>

            <div style="margin-top: var(--space-6); display: flex; justify-content: flex-end; gap: var(--space-3);">
              <a href="#/${lang}/quran/${featuredAyah.surahNumber}" class="btn btn-ghost btn-sm" style="color: var(--color-quran); font-weight: 600;">
                ${lang === 'bn' ? 'সম্পূর্ণ সূরা পড়ুন →' : 'Read Full Surah →'}
              </a>
            </div>
          </div>
        </section>

        <!-- Quick Access Popular Surahs -->
        <section class="section">
          <div class="section-header">
            <div>
              <span class="section-badge badge-quran" style="display: inline-flex; align-items: center; gap: 6px;">
                <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DQuran}</span>
                <span>${t('navQuran')}</span>
              </span>
              <h2 class="section-title" style="margin-top: var(--space-2);">${t('popularSurahs')}</h2>
              <div class="section-subtitle">${lang === 'bn' ? 'নিয়মিত পাঠ্য ও বরকতময় সূরাসমূহ' : 'Frequently recited and beloved Surahs'}</div>
            </div>
            <a href="#/${lang}/quran" class="btn btn-secondary btn-sm">
              ${t('seeAll')} (১১৪) →
            </a>
          </div>

          <div class="grid-4 stagger">
            ${popularSurahs.map(s => `
              <a href="#/${lang}/quran/${s.number}" class="surah-card">
                ${renderSurah3DBadge(s.number)}
                <div class="surah-info">
                  <div class="surah-name-local">${lang === 'bn' ? s.banglaName : s.englishName}</div>
                  <div class="surah-meta">${lang === 'bn' ? s.banglaMeaning : s.englishMeaning} • ${s.ayahs} ${t('ayahPlural')}</div>
                </div>
                <div class="surah-name-arabic font-indopak">${s.name}</div>
              </a>
            `).join('')}
          </div>
        </section>

        <!-- Dua & Hadith Side by Side -->
        <section class="section">
          <div class="grid-2">
            <!-- Featured Dua -->
            <div class="card section-card-dua">
              <div class="section-header" style="margin-bottom: var(--space-3);">
                <span class="section-badge badge-dua" style="display: inline-flex; align-items: center; gap: 6px;">
                  <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DDua}</span>
                  <span>${t('navDua')}</span>
                </span>
                <a href="#/${lang}/dua" class="btn btn-ghost btn-sm" style="color: var(--color-dua);">
                  ${t('seeAll')} →
                </a>
              </div>
              <h3 style="font-size: var(--text-lg); font-weight: 700; margin-bottom: var(--space-2);">
                ${lang === 'bn' ? featuredDua.titleBangla : featuredDua.titleEnglish}
              </h3>
              <div class="dua-card-arabic font-indopak">
                ${formatColorCodedQuran(featuredDua.arabic)}
              </div>
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-3); line-height: 1.7;">
                ${lang === 'bn' ? featuredDua.bangla : featuredDua.english}
              </p>
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: var(--text-xs); color: var(--color-text-muted);">
                <span>${featuredDua.reference}</span>
                <button class="btn btn-ghost btn-sm play-dua-btn" data-audio="${featuredDua.audio}" style="color: var(--color-dua); display: inline-flex; align-items: center; gap: 4px;">
                  <span class="icon-3d-wrap" style="width: 16px; height: 16px;">${Icon3DAudio}</span>
                  <span>${t('audioPlay')}</span>
                </button>
              </div>
            </div>

            <!-- Featured Hadith -->
            <div class="card section-card-hadith">
              <div class="section-header" style="margin-bottom: var(--space-3);">
                <span class="section-badge badge-hadith" style="display: inline-flex; align-items: center; gap: 6px;">
                  <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DHadith}</span>
                  <span>${t('navHadith')}</span>
                </span>
                <a href="#/${lang}/hadith" class="btn btn-ghost btn-sm" style="color: var(--color-hadith);">
                  ${t('seeAll')} →
                </a>
              </div>
              <div class="hadith-card-source" style="display: inline-flex; align-items: center; gap: 6px;">
                <span class="icon-3d-wrap" style="width: 16px; height: 16px;">${Icon3DQuran}</span>
                <span>${featuredHadith.reference} • ${lang === 'bn' ? featuredHadith.gradeBangla : featuredHadith.grade}</span>
              </div>
              <div class="font-indopak" style="font-family: var(--font-indopak); font-size: var(--text-lg); color: var(--color-arabic); direction: rtl; text-align: right; line-height: 2.2; margin-bottom: var(--space-3);">
                ${featuredHadith.arabic}
              </div>
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7; margin-bottom: var(--space-4);">
                ${lang === 'bn' ? featuredHadith.bangla : featuredHadith.english}
              </p>
              <div style="font-size: var(--text-xs); color: var(--color-text-muted);">
                ${lang === 'bn' ? featuredHadith.narratorBangla : featuredHadith.narratorEnglish}
              </div>
            </div>
          </div>
        </section>

        <!-- Platform Features Grid -->
        <section class="section">
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon" style="display: flex; align-items: center; justify-content: center;">
                <span class="icon-3d-wrap" style="width: 42px; height: 42px;">${Icon3DSparkle}</span>
              </div>
              <div class="feature-title">${lang === 'bn' ? '১১৪টি সম্পূর্ণ সূরা' : 'Complete 114 Surahs'}</div>
              <div class="feature-desc">${lang === 'bn' ? 'কিং ফাহদ কমপ্লেক্সের বিশুদ্ধ উসমানী রসম ও প্রতি আয়াতভিত্তিক অনুবাদ।' : 'Authentic Uthmanic script with verse-by-verse bilingual translations.'}</div>
            </div>

            <div class="feature-card">
              <div class="feature-icon" style="display: flex; align-items: center; justify-content: center;">
                <span class="icon-3d-wrap" style="width: 42px; height: 42px;">${Icon3DAudio}</span>
              </div>
              <div class="feature-title">${lang === 'bn' ? 'উচ্চমানের অডিও তিলাওয়াত' : 'HQ Audio Recitation'}</div>
              <div class="feature-desc">${lang === 'bn' ? 'শায়েখ মিশারি রাশিদ আল-আফাসীর সুললিত কণ্ঠের স্পষ্ট তিলাওয়াত।' : 'Soulful crystal-clear recitation by Sheikh Mishary Rashid Al-Afasy.'}</div>
            </div>

            <div class="feature-card">
              <div class="feature-icon" style="display: flex; align-items: center; justify-content: center;">
                <span class="icon-3d-wrap" style="width: 42px; height: 42px;">${Icon3DSearch}</span>
              </div>
              <div class="feature-title">${lang === 'bn' ? 'তাত্ক্ষণিক বহুভাষিক সার্চ' : 'Instant Universal Search'}</div>
              <div class="feature-desc">${lang === 'bn' ? 'বাংলা, ইংরেজি ও আরবিতে যেকোনো সূরা, আয়াত, হাদিস ও দোয়া চোখের পলকে খুঁজুন।' : 'Search across Surahs, Ayahs, Hadith and Duas in Bangla, English and Arabic.'}</div>
            </div>

            <div class="feature-card">
              <div class="feature-icon" style="display: flex; align-items: center; justify-content: center;">
                <span class="icon-3d-wrap" style="width: 42px; height: 42px;">${Icon3DMoon}</span>
              </div>
              <div class="feature-title">${lang === 'bn' ? 'ডার্ক ও লাইট মোড' : 'Reading Friendly Modes'}</div>
              <div class="feature-desc">${lang === 'bn' ? 'রাত্রিকালীন পাঠের জন্য চোখের আরামদায়ক ডার্ক মোড এবং ফন্ট সাইজ নিয়ন্ত্রণ।' : 'Eye-comfort night theme, font resizing, and clean distraction-free reader.'}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

export function bindHomeEvents() {
  // Scroll driven 3D Quran book
  bindQuran3DBook();

  // Hero search trigger
  const heroSearch = document.getElementById('hero-search-trigger');
  if (heroSearch) {
    heroSearch.addEventListener('click', () => {
      const openBtn = document.getElementById('open-search-btn');
      if (openBtn) openBtn.click();
    });
  }

  // Play daily ayah audio
  const playDailyBtn = document.getElementById('play-daily-ayah');
  if (playDailyBtn) {
    playDailyBtn.addEventListener('click', () => {
      const audioUrl = playDailyBtn.getAttribute('data-audio');
      if (audioUrl) {
        audioPlayer.playTrack({
          audio: audioUrl,
          title: getLang() === 'bn' ? 'আজকের নির্বাচিত আয়াত' : 'Featured Daily Ayah',
          subtitle: 'মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)'
        });
      }
    });
  }

  // Play dua audio
  document.querySelectorAll('.play-dua-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const audioUrl = btn.getAttribute('data-audio');
      if (audioUrl) {
        audioPlayer.playTrack({
          audio: audioUrl,
          title: getLang() === 'bn' ? 'কুরআনের দোয়া' : 'Quranic Dua',
          subtitle: 'মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)'
        });
      }
    });
  });

  // Bind interactive Tajweed rule tooltips on homepage
  bindTajweedInteractions(document.getElementById('home-page') || document);
}
