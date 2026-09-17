// ============================================
// EQRA — Hero 3D Mushaf
// A self-animating CSS 3D Quran that lives in the hero.
// It never touches the page scroll: pages turn on their own,
// and the reader can drag, swipe, click or use the keyboard.
// ============================================

import { PRELOADED_SURAHS } from '../data/popularSurahs.js';
import { formatColorCodedQuran } from '../utils/quranColors.js';

const BANGLA_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function localNum(num, lang) {
  return lang === 'bn'
    ? String(num).split('').map(d => BANGLA_DIGITS[Number(d)] ?? d).join('')
    : String(num);
}

// ---------- Page faces ----------

function coverFace(lang) {
  return `
    <div class="qh-inner qh-cover">
      <div class="qh-cover-frame">
        <div class="qh-cover-ornament" aria-hidden="true">﷽</div>
        <div class="qh-cover-arabic font-indopak">الۡقُرۡاٰن الۡكَرِيۡم</div>
        <div class="qh-rule qh-rule-gold" aria-hidden="true"></div>
        <div class="qh-cover-title">${lang === 'bn' ? 'আল-কুরআনুল কারীম' : "Al-Qur'an Al-Kareem"}</div>
      </div>
    </div>
  `;
}

function surahHeaderFace(surah, lang) {
  return `
    <div class="qh-inner qh-page">
      <div class="qh-basmala font-indopak">بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ</div>
      <div class="qh-rule" aria-hidden="true"></div>
      <div class="qh-surah-arabic font-indopak">${surah.name}</div>
      <div class="qh-surah-name">${lang === 'bn' ? surah.banglaName : `Surah ${surah.englishName}`}</div>
      <div class="qh-foot">${lang === 'bn'
        ? `${surah.banglaType} • ${localNum(surah.numberOfAyahs, lang)} আয়াত`
        : `${surah.revelationType} • ${surah.numberOfAyahs} verses`}</div>
    </div>
  `;
}

function ayahFace(ayah, surah, lang) {
  return `
    <div class="qh-inner qh-page">
      <div class="qh-badge">${localNum(ayah.numberInSurah, lang)}</div>
      <div class="qh-arabic font-indopak">${formatColorCodedQuran(ayah.indopak || ayah.tajweed || ayah.arabic)}</div>
      <div class="qh-rule" aria-hidden="true"></div>
      <p class="qh-trans">${lang === 'bn' ? ayah.bangla : ayah.english}</p>
      <div class="qh-foot">${lang === 'bn' ? surah.banglaName : surah.englishName} • ${localNum(surah.number, lang)}:${localNum(ayah.numberInSurah, lang)}</div>
    </div>
  `;
}

function buildFaces(lang) {
  const surah = PRELOADED_SURAHS['1'];
  const faces = [coverFace(lang), surahHeaderFace(surah, lang)];
  for (const ayah of surah.ayahs) faces.push(ayahFace(ayah, surah, lang));
  if (faces.length % 2 !== 0) faces.push(`<div class="qh-inner qh-page"></div>`);
  return faces;
}

// ---------- Markup ----------

export function renderQuranHero3D(lang = 'bn') {
  const faces = buildFaces(lang);
  const leafCount = faces.length / 2;

  const leaves = Array.from({ length: leafCount }, (_, i) => `
    <div class="qh-leaf" data-leaf="${i}">
      <div class="qh-face qh-front">${faces[i * 2]}</div>
      <div class="qh-face qh-back">${faces[i * 2 + 1]}</div>
    </div>
  `).join('');

  const dots = Array.from({ length: leafCount + 1 }, (_, i) => `
    <button class="qh-dot" type="button" data-qh-goto="${i}"
      aria-label="${lang === 'bn' ? `পাতা ${localNum(i + 1, lang)}` : `Page ${i + 1}`}"></button>
  `).join('');

  return `
    <div class="qh" id="quran-hero-3d" style="--qh-leaves: ${leafCount};">
      <div class="qh-glow" aria-hidden="true"></div>
      <div class="qh-scene" id="qh-scene" tabindex="0"
        role="group" aria-label="${lang === 'bn' ? 'ত্রিমাত্রিক কুরআন — টেনে পাতা উল্টান' : '3D Quran — drag to turn pages'}">
        <div class="qh-book" id="qh-book">
          <div class="qh-base qh-base-right" aria-hidden="true"></div>
          <div class="qh-base qh-base-left" aria-hidden="true"></div>
          <div class="qh-leaves">${leaves}</div>
          <div class="qh-shadow" aria-hidden="true"></div>
        </div>
      </div>

      <div class="qh-controls">
        <button class="qh-nav" type="button" data-qh-step="-1"
          aria-label="${lang === 'bn' ? 'আগের পাতা' : 'Previous page'}">‹</button>
        <div class="qh-dots">${dots}</div>
        <button class="qh-nav" type="button" data-qh-step="1"
          aria-label="${lang === 'bn' ? 'পরের পাতা' : 'Next page'}">›</button>
        <button class="qh-play" id="qh-play" type="button"
          aria-label="${lang === 'bn' ? 'স্বয়ংক্রিয় পাতা উল্টানো থামান' : 'Pause auto page turn'}"
          aria-pressed="true">⏸</button>
      </div>
    </div>
  `;
}

// ---------- Behaviour ----------

const AUTOPLAY_MS = 3800;
const TURN_MS = 900;

let detach = null;

const clamp = (v, min, max) => (v < min ? min : v > max ? max : v);
const ease = (t) => t * t * (3 - 2 * t);

export function bindQuranHero3D() {
  if (detach) { detach(); detach = null; }

  const root = document.getElementById('quran-hero-3d');
  const scene = document.getElementById('qh-scene');
  const book = document.getElementById('qh-book');
  if (!root || !scene || !book) return;

  const leaves = Array.from(root.querySelectorAll('.qh-leaf'));
  const dots = Array.from(root.querySelectorAll('.qh-dot'));
  const playBtn = document.getElementById('qh-play');
  const N = leaves.length;
  if (!N) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // turned = how many leaves are lying on the right, as a float while animating
  let turned = 0;
  let animFrom = 0;
  let animTo = 0;
  let animStart = 0;
  let animating = false;
  let autoplay = !reduced;
  let autoplayTimer = null;
  let rafId = null;

  function paint() {
    for (let i = 0; i < N; i++) {
      // Each leaf turns over its own unit of `turned`.
      const f = clamp(turned - i, 0, 1);
      const depth = (N - i) * 0.6;
      const z = depth * (1 - 2 * f);
      const leaf = leaves[i];
      leaf.style.transform = `translateZ(${z.toFixed(2)}px) rotateY(${(f * 180).toFixed(2)}deg)`;
      leaf.style.setProperty('--shade', Math.sin(Math.PI * f).toFixed(3));
      leaf.style.zIndex = String(f < 0.5 ? N - i : N + i);
    }
    const opening = clamp(turned, 0, 1);
    book.style.setProperty('--qh-shift', `${(25 * (1 - opening)).toFixed(2)}%`);
    book.style.setProperty('--qh-open', opening.toFixed(3));

    const idx = Math.round(turned);
    dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
  }

  function step(now) {
    const p = clamp((now - animStart) / TURN_MS, 0, 1);
    turned = animFrom + (animTo - animFrom) * ease(p);
    paint();
    if (p < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      animating = false;
      rafId = null;
      if (autoplay) scheduleAutoplay();
    }
  }

  function goTo(target, { fromUser = false } = {}) {
    const next = clamp(Math.round(target), 0, N);
    if (fromUser) stopAutoplay({ remember: true });
    if (next === Math.round(turned) && !animating) {
      if (autoplay) scheduleAutoplay();
      return;
    }
    animFrom = turned;
    animTo = next;
    animStart = performance.now();
    animating = true;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(step);
  }

  function scheduleAutoplay() {
    clearTimeout(autoplayTimer);
    if (!autoplay) return;
    autoplayTimer = setTimeout(() => {
      // Loop back to the closed cover once the last page has turned.
      goTo(Math.round(turned) >= N ? 0 : Math.round(turned) + 1);
    }, AUTOPLAY_MS);
  }

  function stopAutoplay({ remember = false } = {}) {
    clearTimeout(autoplayTimer);
    if (remember) {
      autoplay = false;
      if (playBtn) {
        playBtn.textContent = '▶';
        playBtn.setAttribute('aria-pressed', 'false');
      }
    }
  }

  function startAutoplay() {
    autoplay = true;
    if (playBtn) {
      playBtn.textContent = '⏸';
      playBtn.setAttribute('aria-pressed', 'true');
    }
    scheduleAutoplay();
  }

  // --- pointer parallax: the book leans towards the cursor ---
  function onPointerMove(e) {
    const r = scene.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    book.style.setProperty('--qh-tilt-y', `${clamp(dx, -1, 1) * 9}deg`);
    book.style.setProperty('--qh-tilt-x', `${8 - clamp(dy, -1, 1) * 6}deg`);
  }
  function resetTilt() {
    book.style.setProperty('--qh-tilt-y', '0deg');
    book.style.setProperty('--qh-tilt-x', '8deg');
  }

  // --- drag / swipe to turn ---
  let dragX = null;
  function onPointerDown(e) {
    dragX = e.clientX;
    scene.setPointerCapture?.(e.pointerId);
  }
  function onPointerUp(e) {
    if (dragX === null) return;
    const dx = e.clientX - dragX;
    dragX = null;
    scene.releasePointerCapture?.(e.pointerId);
    if (Math.abs(dx) < 30) return;
    // Pages lie right-to-left, so dragging left turns forward.
    goTo(Math.round(turned) + (dx < 0 ? 1 : -1), { fromUser: true });
  }

  function onKeydown(e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(Math.round(turned) + 1, { fromUser: true }); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(Math.round(turned) - 1, { fromUser: true }); }
  }

  function onControlClick(e) {
    const stepBtn = e.target.closest('[data-qh-step]');
    if (stepBtn) { goTo(Math.round(turned) + Number(stepBtn.dataset.qhStep), { fromUser: true }); return; }
    const dotBtn = e.target.closest('[data-qh-goto]');
    if (dotBtn) { goTo(Number(dotBtn.dataset.qhGoto), { fromUser: true }); return; }
    if (e.target.closest('#qh-play')) {
      if (autoplay) stopAutoplay({ remember: true });
      else startAutoplay();
    }
  }

  // Only animate while the hero is actually on screen.
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { if (autoplay) scheduleAutoplay(); }
    else clearTimeout(autoplayTimer);
  }, { threshold: 0.2 });
  io.observe(root);

  const controls = root.querySelector('.qh-controls');
  controls.addEventListener('click', onControlClick);
  scene.addEventListener('pointermove', onPointerMove);
  scene.addEventListener('pointerleave', resetTilt);
  scene.addEventListener('pointerdown', onPointerDown);
  scene.addEventListener('pointerup', onPointerUp);
  scene.addEventListener('pointercancel', () => { dragX = null; });
  scene.addEventListener('keydown', onKeydown);
  scene.addEventListener('mouseenter', () => clearTimeout(autoplayTimer));
  scene.addEventListener('mouseleave', () => { if (autoplay) scheduleAutoplay(); });

  detach = () => {
    clearTimeout(autoplayTimer);
    if (rafId) cancelAnimationFrame(rafId);
    io.disconnect();
    controls.removeEventListener('click', onControlClick);
    detach = null;
  };

  resetTilt();
  paint();
  if (reduced) {
    // No motion: show the open spread and leave it to the buttons.
    turned = 1;
    paint();
    if (playBtn) playBtn.hidden = true;
  } else {
    scheduleAutoplay();
  }
}
