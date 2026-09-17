// ============================================
// EQRA — Ayah Card Component
// Word-by-word highlights, reading progress ribbon, Tajweed support
// ============================================

import { t, getLang } from '../i18n.js';
import { isBookmarked, toggleBookmark, getSurahProgress, saveSurahProgress } from '../utils/storage.js';
import { recordAyahRead } from '../services/quranGoalService.js';
import { audioPlayer } from './AudioPlayer.js';
import { formatColorCodedQuran, wrapQuranWords, bindTajweedInteractions } from '../utils/quranColors.js';
import { 
  renderAyah3DBadge, 
  Icon3DAudio, 
  Icon3DCopy, 
  Icon3DStarFilled, 
  Icon3DStarOutline, 
  Icon3DShare 
} from './Icons3D.js';

/**
 * Render a single Ayah card
 * @param {object} ayah - { numberInSurah, arabic, tajweed, indopak, bangla, english, audio }
 * @param {object} surah - { number, name, banglaName, englishName, ayahs }
 * @param {string} displayMode - 'all' | 'arabic-bn' | 'arabic-en' | 'arabic-only'
 * @param {object} options - { font: 'indopak' | 'nastaliq' | 'uthmani', tajweed: boolean }
 */
export function renderAyahCard(ayah, surah, displayMode = 'all', options = {}) {
  const lang = getLang();
  const bookmarkId = `ayah_${surah.number}_${ayah.numberInSurah}`;
  const bookmarked = isBookmarked(bookmarkId);

  const progress = getSurahProgress(surah.number);
  const isProgressMarked = progress && progress.ayah === ayah.numberInSurah;

  const showBn = displayMode === 'all' || displayMode === 'arabic-bn';
  const showEn = displayMode === 'all' || displayMode === 'arabic-en';

  const fontClass = options.font === 'uthmani' 
    ? 'font-uthmani' 
    : options.font === 'nastaliq' 
      ? 'font-nastaliq' 
      : 'font-indopak';

  const tajweedActive = options.tajweed !== false;
  const isIndoPak = (options.font || 'indopak') === 'indopak';
  const rawArabic = (isIndoPak && ayah.indopak) ? ayah.indopak : (ayah.arabic || ayah.indopak || '');
  const textToFormat = tajweedActive 
    ? ((isIndoPak && ayah.indopak) ? ayah.indopak : (ayah.tajweed || rawArabic)) 
    : rawArabic;
  const formattedArabic = tajweedActive ? formatColorCodedQuran(textToFormat) : rawArabic;
  const wordWrappedArabic = wrapQuranWords(formattedArabic);

  const totalVerses = surah.ayahs || surah.numberOfAyahs || 1;

  return `
    <article class="ayah-card ${!tajweedActive ? 'tajweed-disabled' : ''} ${isProgressMarked ? 'has-progress-bookmark' : ''}" 
      id="ayah-${ayah.numberInSurah}" 
      data-surah="${surah.number}" 
      data-ayah="${ayah.numberInSurah}">
      
      <div class="ayah-header">
        <div class="ayah-header-left" style="display: flex; align-items: center; gap: 8px;">
          <span class="verse-reference-label" style="font-weight: 700; font-size: 0.95rem; color: var(--color-text-secondary); letter-spacing: 0.5px;">
            ${surah.number}:${ayah.numberInSurah}
          </span>

          <!-- Play Audio Button -->
          <button class="ayah-action-btn play-ayah-btn" 
            data-surah="${surah.number}"
            data-ayah="${ayah.numberInSurah}"
            data-audio="${ayah.audio}" 
            data-title="${lang === 'bn' ? surah.banglaName : surah.englishName} : ${t('ayahWord')} ${ayah.numberInSurah}" 
            title="${t('audioPlay')}" 
            aria-label="Play recitation">
            <span class="icon-3d-wrap" style="width: 17px; height: 17px;">${Icon3DAudio}</span>
          </button>

          <!-- Reading Progress Bookmark Ribbon -->
          <button class="ayah-action-btn progress-ribbon-btn ${isProgressMarked ? 'active' : ''}" 
            data-surah="${surah.number}" 
            data-ayah="${ayah.numberInSurah}"
            data-total="${totalVerses}"
            title="${isProgressMarked ? (lang === 'bn' ? 'সর্বশেষ পড়ার স্থান চিহ্নিত করা আছে' : 'Current reading progress bookmark') : (lang === 'bn' ? 'সর্বশেষ পড়ার স্থান হিসেবে চিহ্নিত করুন' : 'Bookmark as reading progress')}" 
            aria-label="Reading progress bookmark">
            <span class="ribbon-icon" style="font-size: 16px; display: inline-block; transition: transform 0.2s ease;">🔖</span>
          </button>
        </div>

        <div class="ayah-actions">
          <!-- Copy Verse -->
          <button class="ayah-action-btn copy-ayah-btn" 
            data-copy="${rawArabic}\n\n${ayah.bangla}\n\n${ayah.english}\n— [${surah.englishName} ${surah.number}:${ayah.numberInSurah}]" 
            title="${t('copy')}" 
            aria-label="Copy Ayah">
            <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DCopy}</span>
          </button>

          <!-- Favorite / Star Bookmark Verse -->
          <button class="ayah-action-btn bookmark-ayah-btn ${bookmarked ? 'active' : ''}" 
            data-id="${bookmarkId}" 
            data-type="ayah"
            data-surah="${surah.number}"
            data-ayah="${ayah.numberInSurah}"
            data-title="${lang === 'bn' ? surah.banglaName : surah.englishName} (${surah.number}:${ayah.numberInSurah})"
            data-arabic="${encodeURIComponent(rawArabic)}"
            data-bangla="${encodeURIComponent(ayah.bangla)}"
            data-english="${encodeURIComponent(ayah.english)}"
            title="${t('bookmark')}" 
            aria-label="Bookmark Ayah">
            <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${bookmarked ? Icon3DStarFilled : Icon3DStarOutline}</span>
          </button>

          <!-- Web Share -->
          <button class="ayah-action-btn share-ayah-btn" 
            data-title="${lang === 'bn' ? surah.banglaName : surah.englishName} (${surah.number}:${ayah.numberInSurah})" 
            data-text="${rawArabic}\n\n${lang === 'bn' ? ayah.bangla : ayah.english}" 
            title="${t('share')}" 
            aria-label="Share Ayah">
            <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DShare}</span>
          </button>
        </div>
      </div>

      <!-- Arabic Text with Word Spans (Color Coded Tajweed with Indo-Pak Font) -->
      <div class="ayah-arabic ${fontClass}" dir="rtl" lang="ar">
        ${wordWrappedArabic}
      </div>

      <!-- Bangla Translation -->
      ${showBn ? `
        <div class="ayah-translation ayah-translation-bn">
          <div style="font-size: var(--text-xs); color: var(--color-quran); font-weight: 600; margin-bottom: 2px;">
            ${lang === 'bn' ? 'মুহিউদ্দীন খান' : 'Bangla (Muhiuddin Khan)'}
          </div>
          ${ayah.bangla}
        </div>
      ` : ''}

      <!-- English Translation -->
      ${showEn ? `
        <div class="ayah-translation ayah-translation-en">
          <div style="font-size: var(--text-xs); color: var(--color-text-muted); font-weight: 600; margin-bottom: 2px;">
            Sahih International
          </div>
          ${ayah.english}
        </div>
      ` : ''}
    </article>
  `;
}

/**
 * Bind interactive events for Ayah cards within a container
 * @param {HTMLElement} container 
 * @param {object} [recitationData] - Optional preloaded chapter recitation with timestamps
 */
export function bindAyahCardEvents(container, recitationData = null) {
  // Audio playback (Play single Ayah or jump chapter audio to this Ayah)
  container.querySelectorAll('.play-ayah-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const surahNum = parseInt(btn.getAttribute('data-surah'), 10);
      const ayahNum = parseInt(btn.getAttribute('data-ayah'), 10);
      const audioUrl = btn.getAttribute('data-audio');
      const title = btn.getAttribute('data-title');

      if (recitationData && recitationData.timestamps) {
        // Play with word sync starting at this Ayah
        audioPlayer.playSurahWithSync({
          surahNumber: surahNum,
          surahName: title ? title.split(':')[0].trim() : `সূরা ${surahNum}`,
          audioUrl: recitationData.audioUrl,
          timestamps: recitationData.timestamps,
          startAyah: ayahNum
        });
      } else if (audioUrl) {
        // Fallback single ayah track
        audioPlayer.playTrack({
          surah: surahNum,
          ayah: ayahNum,
          audio: audioUrl,
          title: title,
          subtitle: 'মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)'
        });
      }
    });
  });

  // Reading Progress Bookmark Ribbon click
  container.querySelectorAll('.progress-ribbon-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const surah = btn.getAttribute('data-surah');
      const ayah = btn.getAttribute('data-ayah');
      const total = btn.getAttribute('data-total');

      saveSurahProgress(surah, ayah, total);
      recordAyahRead(surah, ayah);

      // Update all ribbon buttons in this container
      container.querySelectorAll('.progress-ribbon-btn').forEach(b => {
        const isTarget = b.getAttribute('data-ayah') === ayah;
        b.classList.toggle('active', isTarget);
      });

      container.querySelectorAll('.ayah-card').forEach(card => {
        const isTarget = card.getAttribute('data-ayah') === ayah;
        card.classList.toggle('has-progress-bookmark', isTarget);
      });

      // Show temporary toast feedback
      showBookmarkToast(ayah);
    });
  });

  // Word click: jump audio directly to that word if recitation is loaded
  container.querySelectorAll('.quran-word').forEach(wordEl => {
    wordEl.addEventListener('click', (e) => {
      const card = wordEl.closest('.ayah-card');
      if (!card) return;
      const ayahNum = parseInt(card.getAttribute('data-ayah'), 10);
      const wordIdx = parseInt(wordEl.getAttribute('data-word-idx'), 10);
      if (ayahNum && wordIdx) {
        audioPlayer.seekToWord(ayahNum, wordIdx);
      }
    });
  });

  // Copy Ayah
  container.querySelectorAll('.copy-ayah-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        try {
          await navigator.clipboard.writeText(text);
          const original = btn.innerHTML;
          btn.innerHTML = `<span style="font-size: 14px; color: var(--color-success); font-weight: 700;">✓</span>`;
          setTimeout(() => { btn.innerHTML = original; }, 1500);
        } catch {
          // fallback
        }
      }
    });
  });

  // Bookmark Verse (Favorite list)
  container.querySelectorAll('.bookmark-ayah-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = {
        id,
        type: 'ayah',
        surah: btn.getAttribute('data-surah'),
        ayah: btn.getAttribute('data-ayah'),
        title: btn.getAttribute('data-title'),
        arabic: decodeURIComponent(btn.getAttribute('data-arabic')),
        bangla: decodeURIComponent(btn.getAttribute('data-bangla')),
        english: decodeURIComponent(btn.getAttribute('data-english'))
      };

      const added = toggleBookmark(item);
      btn.innerHTML = `<span class="icon-3d-wrap" style="width: 18px; height: 18px;">${added ? Icon3DStarFilled : Icon3DStarOutline}</span>`;
      btn.classList.toggle('active', added);
    });
  });

  // Web Share API
  container.querySelectorAll('.share-ayah-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const title = btn.getAttribute('data-title');
      const text = btn.getAttribute('data-text');
      const url = window.location.href;

      if (navigator.share) {
        try {
          await navigator.share({ title, text, url });
        } catch {
          // User canceled or unsupported
        }
      } else {
        await navigator.clipboard.writeText(`${title}\n\n${text}\n\n${url}`);
        const original = btn.innerHTML;
        btn.innerHTML = `<span style="font-size: 14px; color: var(--color-success); font-weight: 700;">✓</span>`;
        setTimeout(() => { btn.innerHTML = original; }, 1500);
      }
    });
  });

  // Bind interactive Tajweed rule popover tooltips
  bindTajweedInteractions(container);
}

function showBookmarkToast(ayahNum) {
  const existing = document.getElementById('progress-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'progress-toast';
  toast.className = 'progress-toast animate-slide-up';
  toast.innerHTML = `
    <span>🔖</span>
    <span>আয়াত <strong>${ayahNum}</strong> পড়ার অগ্রগতি হিসেবে সংরক্ষিত হয়েছে</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
