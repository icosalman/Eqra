// ============================================
// EQRA — Ayah Card Component
// ============================================

import { t, getLang } from '../i18n.js';
import { isBookmarked, toggleBookmark } from '../utils/storage.js';
import { audioPlayer } from './AudioPlayer.js';
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
 * @param {object} ayah - { numberInSurah, arabic, bangla, english, audio }
 * @param {object} surah - { number, name, banglaName, englishName }
 * @param {string} displayMode - 'all' | 'arabic-bn' | 'arabic-en' | 'arabic-only'
 */
export function renderAyahCard(ayah, surah, displayMode = 'all') {
  const lang = getLang();
  const bookmarkId = `ayah_${surah.number}_${ayah.numberInSurah}`;
  const bookmarked = isBookmarked(bookmarkId);

  const showBn = displayMode === 'all' || displayMode === 'arabic-bn';
  const showEn = displayMode === 'all' || displayMode === 'arabic-en';

  return `
    <article class="ayah-card" id="ayah-${ayah.numberInSurah}">
      <div class="ayah-header">
        ${renderAyah3DBadge(ayah.numberInSurah)}

        <div class="ayah-actions">
          <!-- Play Audio -->
          <button class="ayah-action-btn play-ayah-btn" 
            data-audio="${ayah.audio}" 
            data-title="${lang === 'bn' ? surah.banglaName : surah.englishName} : ${t('ayahWord')} ${ayah.numberInSurah}" 
            title="${t('audioPlay')}" 
            aria-label="Play recitation">
            <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DAudio}</span>
          </button>

          <!-- Copy Verse -->
          <button class="ayah-action-btn copy-ayah-btn" 
            data-copy="${ayah.arabic}\n\n${ayah.bangla}\n\n${ayah.english}\n— [${surah.englishName} ${surah.number}:${ayah.numberInSurah}]" 
            title="${t('copy')}" 
            aria-label="Copy Ayah">
            <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DCopy}</span>
          </button>

          <!-- Bookmark Verse -->
          <button class="ayah-action-btn bookmark-ayah-btn ${bookmarked ? 'active' : ''}" 
            data-id="${bookmarkId}" 
            data-type="ayah"
            data-surah="${surah.number}"
            data-ayah="${ayah.numberInSurah}"
            data-title="${lang === 'bn' ? surah.banglaName : surah.englishName} (${surah.number}:${ayah.numberInSurah})"
            data-arabic="${encodeURIComponent(ayah.arabic)}"
            data-bangla="${encodeURIComponent(ayah.bangla)}"
            data-english="${encodeURIComponent(ayah.english)}"
            title="${t('bookmark')}" 
            aria-label="Bookmark Ayah">
            <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${bookmarked ? Icon3DStarFilled : Icon3DStarOutline}</span>
          </button>

          <!-- Web Share -->
          <button class="ayah-action-btn share-ayah-btn" 
            data-title="${lang === 'bn' ? surah.banglaName : surah.englishName} (${surah.number}:${ayah.numberInSurah})" 
            data-text="${ayah.arabic}\n\n${lang === 'bn' ? ayah.bangla : ayah.english}" 
            title="${t('share')}" 
            aria-label="Share Ayah">
            <span class="icon-3d-wrap" style="width: 18px; height: 18px;">${Icon3DShare}</span>
          </button>
        </div>
      </div>

      <!-- Arabic Text -->
      <div class="ayah-arabic">
        ${ayah.arabic}
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
 */
export function bindAyahCardEvents(container) {
  // Audio playback
  container.querySelectorAll('.play-ayah-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const audioUrl = btn.getAttribute('data-audio');
      const title = btn.getAttribute('data-title');
      if (audioUrl) {
        audioPlayer.playTrack({
          audio: audioUrl,
          title: title,
          subtitle: 'মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)'
        });
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

  // Bookmark Ayah
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
}

