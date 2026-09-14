// ============================================
// EQRA — Homepage
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { SURAHS_METADATA } from '../data/quranMetadata.js';
import { KEY_AYAHS } from '../data/popularSurahs.js';
import { DUAS_DATA } from '../data/duas.js';
import { HADITHS_DATA } from '../data/hadiths.js';
import { TOPICS_DATA } from '../data/topics.js';
import { audioPlayer } from '../components/AudioPlayer.js';

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
      ? 'বাংলা ও ইংরেজিতে আল-কুরআন, বিশুদ্ধ সহীহ হাদিস, কুরআনের শ্রেষ্ঠ দোয়া এবং বিষয়ভিত্তিক ইসলামী জ্ঞান।' 
      : 'Read Al-Quran, authentic Sahih Hadith, Quranic Duas and topic-based knowledge in Bangla and English.',
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
          <div class="hero-title-arabic">
            ${t('heroArabic')}
          </div>
          <h1 class="hero-title">
            ${t('heroTitle')}
          </h1>
          <p class="hero-subtitle">
            ${t('heroSubtitle')}
          </p>

          <div class="hero-cta">
            <a href="#/${lang}/quran" class="btn btn-primary btn-lg">
              <span>📖</span>
              <span>${t('heroCTA')}</span>
            </a>
            <button class="btn btn-secondary btn-lg" id="hero-search-trigger">
              <span>🔍</span>
              <span>${t('heroSearchCTA')}</span>
            </button>
            <a href="#/${lang}/dua" class="btn btn-secondary btn-lg">
              <span>🤲</span>
              <span>${t('navDua')}</span>
            </a>
          </div>
        </section>

        <!-- Daily Featured Verse (আজকের আয়াত) -->
        <section class="section">
          <div class="card section-card-quran animate-fade-in" style="background: linear-gradient(135deg, var(--color-surface), var(--color-quran-bg));">
            <div class="section-header" style="margin-bottom: var(--space-4);">
              <div>
                <span class="section-badge badge-quran">
                  ✨ ${lang === 'bn' ? 'প্রতিদিনের আয়াত ও প্রজ্ঞা' : 'Daily Reflection Verse'}
                </span>
                <h2 class="section-title" style="margin-top: var(--space-2);">
                  ${lang === 'bn' ? featuredAyah.titleBangla : featuredAyah.titleEnglish}
                </h2>
                <div class="section-subtitle">
                  ${lang === 'bn' ? featuredAyah.surahNameBangla : featuredAyah.surahNameEnglish} (${featuredAyah.surahNumber}:${featuredAyah.ayahNumber})
                </div>
              </div>

              <button class="btn btn-primary btn-sm" id="play-daily-ayah" data-audio="${featuredAyah.audio}">
                <span>▶</span> <span>${t('audioPlay')}</span>
              </button>
            </div>

            <!-- Arabic Calligraphy -->
            <div class="ayah-arabic" style="font-size: var(--quran-size-lg); border-bottom: 1px dashed var(--color-border); padding-bottom: var(--space-4);">
              ${featuredAyah.arabic}
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
              <span class="section-badge badge-quran">📖 ${t('navQuran')}</span>
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
                <div class="surah-number">${s.number}</div>
                <div class="surah-info">
                  <div class="surah-name-local">${lang === 'bn' ? s.banglaName : s.englishName}</div>
                  <div class="surah-meta">${lang === 'bn' ? s.banglaMeaning : s.englishMeaning} • ${s.ayahs} ${t('ayahPlural')}</div>
                </div>
                <div class="surah-name-arabic">${s.name}</div>
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
                <span class="section-badge badge-dua">🤲 ${t('navDua')}</span>
                <a href="#/${lang}/dua" class="btn btn-ghost btn-sm" style="color: var(--color-dua);">
                  ${t('seeAll')} →
                </a>
              </div>
              <h3 style="font-size: var(--text-lg); font-weight: 700; margin-bottom: var(--space-2);">
                ${lang === 'bn' ? featuredDua.titleBangla : featuredDua.titleEnglish}
              </h3>
              <div class="dua-card-arabic">
                ${featuredDua.arabic}
              </div>
              <p style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-3); line-height: 1.7;">
                ${lang === 'bn' ? featuredDua.bangla : featuredDua.english}
              </p>
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: var(--text-xs); color: var(--color-text-muted);">
                <span>${featuredDua.reference}</span>
                <button class="btn btn-ghost btn-sm play-dua-btn" data-audio="${featuredDua.audio}" style="color: var(--color-dua);">
                  🔊 ${t('audioPlay')}
                </button>
              </div>
            </div>

            <!-- Featured Hadith -->
            <div class="card section-card-hadith">
              <div class="section-header" style="margin-bottom: var(--space-3);">
                <span class="section-badge badge-hadith">📜 ${t('navHadith')}</span>
                <a href="#/${lang}/hadith" class="btn btn-ghost btn-sm" style="color: var(--color-hadith);">
                  ${t('seeAll')} →
                </a>
              </div>
              <div class="hadith-card-source">
                <span>📖</span>
                <span>${featuredHadith.reference} • ${lang === 'bn' ? featuredHadith.gradeBangla : featuredHadith.grade}</span>
              </div>
              <div style="font-family: var(--font-arabic); font-size: var(--text-base); color: var(--color-arabic); direction: rtl; text-align: right; line-height: 1.8; margin-bottom: var(--space-3);">
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

        <!-- Topic Knowledge Graph -->
        <section class="section">
          <div class="section-header">
            <div>
              <span class="section-badge badge-topic">💡 ${t('navTopics')}</span>
              <h2 class="section-title" style="margin-top: var(--space-2);">${t('popularTopics')}</h2>
              <div class="section-subtitle">${lang === 'bn' ? 'জীবন ঘনিষ্ঠ বিষয়ে কুরআন ও সুন্নাহর নির্দেশনা' : 'Quranic guidance on themes of human life'}</div>
            </div>
            <a href="#/${lang}/topics" class="btn btn-secondary btn-sm">
              ${t('seeAll')} →
            </a>
          </div>

          <div class="grid-4 stagger">
            ${TOPICS_DATA.map(tp => `
              <a href="#/${lang}/topics/${tp.slug}" class="card section-card-topic" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <span class="tag" style="margin-bottom: var(--space-2);">${lang === 'bn' ? tp.categoryBangla : tp.categoryEnglish}</span>
                  <h3 class="topic-card-title">${lang === 'bn' ? tp.titleBangla : tp.titleEnglish}</h3>
                  <p class="topic-card-excerpt">
                    ${lang === 'bn' ? tp.summaryBangla : tp.summaryEnglish}
                  </p>
                </div>
                <div style="margin-top: var(--space-4); font-size: var(--text-xs); color: var(--color-topic); font-weight: 600;">
                  ${tp.ayahCount} ${t('ayahPlural')} • ${lang === 'bn' ? 'বিস্তারিত দেখুন →' : 'Read Topic →'}
                </div>
              </a>
            `).join('')}
          </div>
        </section>

        <!-- Platform Features Grid -->
        <section class="section">
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">✨</div>
              <div class="feature-title">${lang === 'bn' ? '১১৪টি সম্পূর্ণ সূরা' : 'Complete 114 Surahs'}</div>
              <div class="feature-desc">${lang === 'bn' ? 'কিং ফাহদ কমপ্লেক্সের বিশুদ্ধ উসমানী রসম ও প্রতি আয়াতভিত্তিক অনুবাদ।' : 'Authentic Uthmanic script with verse-by-verse bilingual translations.'}</div>
            </div>

            <div class="feature-card">
              <div class="feature-icon">🔊</div>
              <div class="feature-title">${lang === 'bn' ? 'উচ্চমানের অডিও তিলাওয়াত' : 'HQ Audio Recitation'}</div>
              <div class="feature-desc">${lang === 'bn' ? 'শায়েখ মিশারি রাশিদ আল-আফাসীর সুললিত কণ্ঠের স্পষ্ট তিলাওয়াত।' : 'Soulful crystal-clear recitation by Sheikh Mishary Rashid Al-Afasy.'}</div>
            </div>

            <div class="feature-card">
              <div class="feature-icon">🔍</div>
              <div class="feature-title">${lang === 'bn' ? 'তাত্ক্ষণিক বহুভাষিক সার্চ' : 'Instant Universal Search'}</div>
              <div class="feature-desc">${lang === 'bn' ? 'বাংলা, ইংরেজি ও আরবিতে যেকোনো শব্দ ও বিষয় চোখের পলকে খুঁজুন।' : 'Search across Surahs, Ayahs, Hadith and Duas in Bangla, English and Arabic.'}</div>
            </div>

            <div class="feature-card">
              <div class="feature-icon">🌙</div>
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
}
