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
import { formatColorCodedQuran, wrapQuranWords, bindTajweedInteractions } from '../utils/quranColors.js';
import { getSurahRecitation } from '../services/quranService.js';
import { renderQuran3DBook, bindQuran3DBook } from '../components/Quran3DBook.js';
import { 
  renderSurah3DBadge, 
  Icon3DQuran, 
  Icon3DHadith, 
  Icon3DDua, 
  Icon3DSearch, 
  Icon3DPlay, 
  Icon3DPause,
  Icon3DAudio, 
  Icon3DMoon,
  Icon3DSparkle,
  Icon3DFlame,
  Icon3DTarget
} from '../components/Icons3D.js';
import { openGlobalSearch } from '../components/SearchModal.js';
import { getGoalProgressSummary, logManualProgress } from '../services/quranGoalService.js';
import { openReadingGoalModal } from '../components/ReadingGoalModal.js';


function renderDailyAyahArabic(featuredAyah) {
  if (featuredAyah.verses && featuredAyah.verses.length > 0) {
    return featuredAyah.verses.map(v => {
      const rawText = v.indopak || v.tajweed || v.arabic;
      const formatted = formatColorCodedQuran(rawText);
      const wrapped = wrapQuranWords(formatted);
      return `<span class="daily-verse-segment" data-surah="${featuredAyah.surahNumber}" data-ayah="${v.numberInSurah}">${wrapped}</span>`;
    }).join(' ');
  }
  const rawText = featuredAyah.indopak || featuredAyah.tajweed || featuredAyah.arabic;
  const formatted = formatColorCodedQuran(rawText);
  const wrapped = wrapQuranWords(formatted);
  return `<span class="daily-verse-segment" data-surah="${featuredAyah.surahNumber}" data-ayah="${featuredAyah.ayahNumber}">${wrapped}</span>`;
}

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

  // Retrieve today's reading goal & streak summary
  const goalSummary = getGoalProgressSummary();

  updateMeta({
    title: lang === 'bn' ? 'EQRA — কুরআন পড়ুন, বুঝুন, চিন্তা করুন' : 'EQRA — Read. Understand. Reflect.',
    description: lang === 'bn' 
      ? 'বাংলা ও ইংরেজিতে আল-কুরআন, বিশুদ্ধ সহীহ হাদিস এবং কুরআনের শ্রেষ্ঠ দোয়া সমগ্র।' 
      : 'Read Al-Quran, authentic Sahih Hadith, and Quranic Duas in Bangla and English.',
    canonicalPath: `#/${lang}/`
  });

  return `
    <div class="page" id="home-page">
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

        <!-- Daily Quran Reading Goal & Streak Widget -->
        <section class="section animate-fade-in-up" style="margin-bottom: var(--space-8);">
          <div class="card home-goal-card ${goalSummary.isCompleted ? 'goal-completed-glow' : ''}" style="background: linear-gradient(135deg, var(--color-surface), rgba(16, 185, 129, 0.08)); border: 1px solid var(--color-border); padding: var(--space-6); border-radius: var(--radius-xl); box-shadow: var(--shadow-sm);">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4);">
              <div style="display: flex; align-items: center; gap: var(--space-4);">
                <div class="home-goal-flame-wrap ${goalSummary.isCompleted ? 'flame-ignited' : ''}" style="width: 52px; height: 52px; display: flex; align-items: center; justify-content: center; background: rgba(245, 158, 11, 0.12); border-radius: 50%; border: 1.5px solid rgba(245, 158, 11, 0.3);">
                  <span class="icon-3d-wrap" style="width: 32px; height: 32px;">${Icon3DFlame}</span>
                </div>
                <div>
                  <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <span class="section-badge badge-quran" style="margin: 0; font-size: 11px;">
                      ${lang === 'bn' ? 'কুরআন তিলাওয়াত ট্র্যাকার' : 'Quran Recitation Tracker'}
                    </span>
                    <span style="font-size: 13px; font-weight: 800; color: #EA580C; display: inline-flex; align-items: center; gap: 4px;">
                      🔥 <span>${goalSummary.currentStreak} ${lang === 'bn' ? 'দিনের স্ট্রিক' : 'Day Streak'}</span>
                    </span>
                  </div>
                  <h3 style="font-size: var(--text-xl); font-weight: 800; color: var(--color-text-primary); margin: var(--space-1) 0;">
                    ${lang === 'bn' ? goalSummary.titleBn : goalSummary.titleEn}
                  </h3>
                  <p id="home-goal-status-text" style="font-size: var(--text-sm); color: var(--color-text-secondary); margin: 0;">
                    ${goalSummary.isCompleted 
                      ? (lang === 'bn' ? '🎉 মাশাআল্লাহ! আজকের লক্ষ্য অর্জিত হয়েছে।' : "🎉 Masha'Allah! Today's goal achieved.") 
                      : (lang === 'bn' ? `আজকের অগ্রগতি: ${goalSummary.current} / ${goalSummary.target} আয়াত (${goalSummary.remaining}টি বাকি)` : `Today's Progress: ${goalSummary.current} / ${goalSummary.target} ayahs (${goalSummary.remaining} left)`)}
                  </p>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap;">
                <!-- Quick Log Buttons -->
                <button class="btn btn-sm btn-secondary home-quick-log-btn" data-count="5" title="${lang === 'bn' ? '+৫ আয়াত যোগ করুন' : 'Add 5 ayahs'}">
                  +৫ আয়াত
                </button>
                <button class="btn btn-sm btn-secondary home-quick-log-btn" data-count="20" title="${lang === 'bn' ? '+১ পৃষ্ঠা যোগ করুন' : 'Add 1 page'}">
                  +১ পৃষ্ঠা
                </button>
                <button class="btn btn-sm btn-primary" id="home-open-goal-btn" style="display: inline-flex; align-items: center; gap: 6px;">
                  <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DTarget}</span>
                  <span>${lang === 'bn' ? 'গোল ও স্ট্রিক ড্যাশবোর্ড' : 'Goal & Streak Hub'}</span>
                </button>
              </div>
            </div>

            <!-- Progress Bar -->
            <div style="margin-top: var(--space-4);">
              <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: var(--color-text-secondary); margin-bottom: 6px;">
                <span>${lang === 'bn' ? 'আজকের লক্ষ্যপূরণ' : "Today's Target Progress"}</span>
                <span id="home-goal-percent-text" style="color: var(--color-quran);">${goalSummary.percent}%</span>
              </div>
              <div class="home-goal-progress-track" style="height: 8px; background: var(--color-border); border-radius: 999px; overflow: hidden;">
                <div id="home-goal-progress-bar" style="height: 100%; width: ${goalSummary.percent}%; background: linear-gradient(90deg, #10B981, #059669); border-radius: 999px; transition: width 0.4s ease;"></div>
              </div>
            </div>
          </div>
        </section>

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
                  ${lang === 'bn' ? featuredAyah.surahNameBangla : featuredAyah.surahNameEnglish} (${featuredAyah.surahNumber}:${featuredAyah.endAyahNumber && featuredAyah.endAyahNumber !== featuredAyah.ayahNumber ? `${featuredAyah.ayahNumber}-${featuredAyah.endAyahNumber}` : featuredAyah.ayahNumber})
                </div>
              </div>

              <button class="btn btn-primary btn-sm" id="play-daily-ayah" data-audio="${featuredAyah.audio}" style="display: inline-flex; align-items: center; gap: 6px;">
                <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DPlay}</span>
                <span>${t('audioPlay')}</span>
              </button>
            </div>

            <!-- Arabic Calligraphy (Color Coded Tajweed with Indo-Pak Font & Word Highlighting) -->
            <div class="ayah-arabic font-indopak" id="daily-ayah-arabic-container" dir="rtl" lang="ar" style="font-size: var(--quran-size-lg); border-bottom: 1px dashed var(--color-border); padding-bottom: var(--space-4); line-height: 2.2;">
              ${renderDailyAyahArabic(featuredAyah)}
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

  // Play daily ayah audio with full passage support & word-by-word synchronization
  const dayIndex = new Date().getDate() % KEY_AYAHS.length;
  const featuredAyah = KEY_AYAHS[dayIndex];
  const playDailyBtn = document.getElementById('play-daily-ayah');
  const dailyContainer = document.getElementById('daily-ayah-arabic-container');

  function setDailyBtnState(isPlaying) {
    if (!playDailyBtn) return;
    const iconWrap = playDailyBtn.querySelector('.icon-3d-wrap');
    const textSpan = playDailyBtn.querySelector('span:last-child');
    if (isPlaying) {
      if (iconWrap) iconWrap.innerHTML = Icon3DPause;
      if (textSpan) textSpan.textContent = getLang() === 'bn' ? 'বিরতি' : 'Pause';
      playDailyBtn.classList.add('is-playing');
    } else {
      if (iconWrap) iconWrap.innerHTML = Icon3DPlay;
      if (textSpan) textSpan.textContent = t('audioPlay');
      playDailyBtn.classList.remove('is-playing');
    }
  }

  // Initialize button state
  if (audioPlayer.isPlaying && audioPlayer.currentSurahNumber === featuredAyah.surahNumber) {
    setDailyBtnState(true);
  }

  if (playDailyBtn) {
    playDailyBtn.addEventListener('click', async () => {
      // If already playing this passage, pause
      if (audioPlayer.isPlaying && audioPlayer.currentSurahNumber === featuredAyah.surahNumber) {
        audioPlayer.togglePlay();
        return;
      }

      // If paused on this passage, resume
      if (!audioPlayer.isPlaying && audioPlayer.currentSurahNumber === featuredAyah.surahNumber && audioPlayer.audio.src) {
        audioPlayer.togglePlay();
        return;
      }

      // Fetch Quran.com chapter recitation with high-precision word timestamps
      let recitationData = null;
      try {
        recitationData = await getSurahRecitation(featuredAyah.surahNumber);
      } catch (err) {
        console.warn('Failed to fetch recitation timestamps:', err);
      }

      if (recitationData && recitationData.timestamps) {
        audioPlayer.playSurahWithSync({
          surahNumber: featuredAyah.surahNumber,
          surahName: getLang() === 'bn' ? featuredAyah.surahNameBangla : featuredAyah.surahNameEnglish,
          audioUrl: recitationData.audioUrl,
          timestamps: recitationData.timestamps,
          startAyah: featuredAyah.ayahNumber,
          endAyah: featuredAyah.endAyahNumber || featuredAyah.ayahNumber,
          totalAyahs: recitationData.timestamps.length
        });
        setDailyBtnState(true);
      } else if (featuredAyah.playlist && featuredAyah.playlist.length > 0) {
        // Multi-verse fallback playlist
        audioPlayer.playPlaylist(featuredAyah.playlist, 0);
        setDailyBtnState(true);
      } else if (featuredAyah.audio) {
        // Single verse fallback
        audioPlayer.playTrack({
          audio: featuredAyah.audio,
          surah: featuredAyah.surahNumber,
          ayah: featuredAyah.ayahNumber,
          title: getLang() === 'bn' ? featuredAyah.titleBangla : featuredAyah.titleEnglish,
          subtitle: 'মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)'
        });
        setDailyBtnState(true);
      }
    });
  }

  // Interactive Word Clicking: jump audio directly to that word in the recitation
  if (dailyContainer) {
    dailyContainer.querySelectorAll('.quran-word').forEach(wordEl => {
      wordEl.addEventListener('click', async () => {
        const verseSeg = wordEl.closest('.daily-verse-segment');
        const ayahNum = verseSeg ? parseInt(verseSeg.getAttribute('data-ayah'), 10) : featuredAyah.ayahNumber;
        const wordIdx = parseInt(wordEl.getAttribute('data-word-idx'), 10);

        if (ayahNum && wordIdx) {
          if (!audioPlayer.recitationTimestamps || audioPlayer.currentSurahNumber !== featuredAyah.surahNumber) {
            let recitationData = null;
            try {
              recitationData = await getSurahRecitation(featuredAyah.surahNumber);
            } catch (e) {
              console.warn(e);
            }
            if (recitationData && recitationData.timestamps) {
              audioPlayer.playSurahWithSync({
                surahNumber: featuredAyah.surahNumber,
                surahName: getLang() === 'bn' ? featuredAyah.surahNameBangla : featuredAyah.surahNameEnglish,
                audioUrl: recitationData.audioUrl,
                timestamps: recitationData.timestamps,
                startAyah: ayahNum,
                endAyah: featuredAyah.endAyahNumber || featuredAyah.ayahNumber,
                totalAyahs: recitationData.timestamps.length
              });
              setDailyBtnState(true);
            }
          }
          audioPlayer.seekToWord(ayahNum, wordIdx);
        }
      });
    });
  }

  // Word synchronization & playback status listeners
  const handleActiveWordChange = (e) => {
    if (!dailyContainer) return;
    const { surah, ayah, wordIdx } = e.detail || {};
    if (parseInt(surah, 10) !== featuredAyah.surahNumber) return;

    // Clear previous active words in daily container
    dailyContainer.querySelectorAll('.quran-word.active-word').forEach(el => {
      el.classList.remove('active-word');
    });

    if (ayah && wordIdx) {
      const verseSeg = dailyContainer.querySelector(`.daily-verse-segment[data-ayah="${ayah}"]`);
      if (verseSeg) {
        const targetWord = verseSeg.querySelector(`.quran-word[data-word-idx="${wordIdx}"]`);
        if (targetWord) {
          targetWord.classList.add('active-word');
        }
      }
    }
  };

  const handleAudioPlay = (e) => {
    const { surah } = e.detail || {};
    if (parseInt(surah, 10) === featuredAyah.surahNumber) {
      setDailyBtnState(true);
    } else {
      setDailyBtnState(false);
    }
  };

  const handleAudioStopped = () => {
    if (dailyContainer) {
      dailyContainer.querySelectorAll('.quran-word.active-word').forEach(el => {
        el.classList.remove('active-word');
      });
    }
    setDailyBtnState(false);
  };

  // Clean up any existing listeners on window
  if (window.__eqraDailyWordHandler) {
    window.removeEventListener('eqra:active-word-change', window.__eqraDailyWordHandler);
  }
  if (window.__eqraDailyPlayHandler) {
    window.removeEventListener('eqra:audio-play', window.__eqraDailyPlayHandler);
  }
  if (window.__eqraDailyStopHandler) {
    window.removeEventListener('eqra:audio-stopped', window.__eqraDailyStopHandler);
  }

  window.__eqraDailyWordHandler = handleActiveWordChange;
  window.__eqraDailyPlayHandler = handleAudioPlay;
  window.__eqraDailyStopHandler = handleAudioStopped;

  window.addEventListener('eqra:active-word-change', handleActiveWordChange);
  window.addEventListener('eqra:audio-play', handleAudioPlay);
  window.addEventListener('eqra:audio-stopped', handleAudioStopped);

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

  // Bind hero search button to open intelligent search modal
  const heroSearchTrigger = document.getElementById('hero-search-trigger');
  if (heroSearchTrigger) {
    heroSearchTrigger.addEventListener('click', () => {
      openGlobalSearch();
    });
  }

  // Bind Home Goal & Streak Modal Trigger
  const homeOpenGoalBtn = document.getElementById('home-open-goal-btn');
  if (homeOpenGoalBtn) {
    homeOpenGoalBtn.addEventListener('click', () => {
      openReadingGoalModal();
    });
  }

  // Bind Home Quick Log Buttons
  document.querySelectorAll('.home-quick-log-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const count = parseInt(btn.getAttribute('data-count'), 10) || 5;
      logManualProgress(count);
    });
  });

  // Live update the homepage goal widget
  const handleGoalUpdate = () => {
    const s = getGoalProgressSummary();
    const percentText = document.getElementById('home-goal-percent-text');
    const progressBar = document.getElementById('home-goal-progress-bar');
    const statusText = document.getElementById('home-goal-status-text');
    const card = document.querySelector('.home-goal-card');

    if (percentText) percentText.textContent = `${s.percent}%`;
    if (progressBar) progressBar.style.width = `${s.percent}%`;
    if (card) card.classList.toggle('goal-completed-glow', s.isCompleted);
    if (statusText) {
      statusText.textContent = s.isCompleted
        ? (getLang() === 'bn' ? '🎉 মাশাআল্লাহ! আজকের লক্ষ্য অর্জিত হয়েছে।' : "🎉 Masha'Allah! Today's goal achieved.")
        : (getLang() === 'bn' ? `আজকের অগ্রগতি: ${s.current} / ${s.target} আয়াত (${s.remaining}টি বাকি)` : `Today's Progress: ${s.current} / ${s.target} ayahs (${s.remaining} left)`);
    }
  };
  window.addEventListener('eqra:goal-progress-updated', handleGoalUpdate);

  // Bind interactive Tajweed rule tooltips on homepage
  bindTajweedInteractions(document.getElementById('home-page') || document);
}

