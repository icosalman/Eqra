// ============================================
// EQRA — Scroll Driven 3D Quran Book
// Pure CSS 3D (no WebGL / no external library).
// Pages flip right-to-left as the reader scrolls,
// mirroring how a physical Mushaf is opened.
// ============================================

import { PRELOADED_SURAHS } from '../data/popularSurahs.js';
import { formatColorCodedQuran } from '../utils/quranColors.js';

const BANGLA_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function toDigits(num, table) {
  return String(num).split('').map(d => table[Number(d)] ?? d).join('');
}

function localNum(num, lang) {
  return lang === 'bn' ? toDigits(num, BANGLA_DIGITS) : String(num);
}

// ---------- Page builders ----------

function coverFace(lang) {
  return `
    <div class="q3d-face-inner q3d-cover">
      <div class="q3d-cover-frame">
        <div class="q3d-cover-ornament" aria-hidden="true">﷽</div>
        <div class="q3d-cover-arabic font-indopak">الۡقُرۡاٰن الۡكَرِيۡم</div>
        <div class="q3d-cover-rule" aria-hidden="true"></div>
        <div class="q3d-cover-title">${lang === 'bn' ? 'আল-কুরআনুল কারীম' : 'Al-Qur\'an Al-Kareem'}</div>
        <div class="q3d-cover-sub">${lang === 'bn' ? 'স্ক্রল করুন — পাতা খুলবে' : 'Scroll to open the pages'}</div>
      </div>
    </div>
  `;
}

function surahHeaderFace(surah, lang) {
  return `
    <div class="q3d-face-inner q3d-page q3d-page-header">
      <div class="q3d-basmala font-indopak">بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ</div>
      <div class="q3d-page-rule" aria-hidden="true"></div>
      <div class="q3d-surah-arabic font-indopak">${surah.name}</div>
      <h3 class="q3d-surah-name">${lang === 'bn' ? surah.banglaName : `Surah ${surah.englishName}`}</h3>
      <div class="q3d-surah-meta">
        ${lang === 'bn'
          ? `${surah.banglaType} • ${localNum(surah.numberOfAyahs, lang)} আয়াত • অর্থ: ${surah.banglaMeaning}`
          : `${surah.revelationType} • ${surah.numberOfAyahs} verses • ${surah.englishMeaning || 'The Opening'}`}
      </div>
      <div class="q3d-page-foot">${lang === 'bn' ? 'সূরা ১ — উম্মুল কিতাব' : 'Surah 1 — The Mother of the Book'}</div>
    </div>
  `;
}

function ayahFace(ayah, surah, lang) {
  const arabic = formatColorCodedQuran(ayah.indopak || ayah.tajweed || ayah.arabic);
  return `
    <div class="q3d-face-inner q3d-page q3d-page-ayah">
      <div class="q3d-ayah-badge">
        <span class="q3d-ayah-badge-num">${localNum(ayah.numberInSurah, lang)}</span>
      </div>
      <div class="q3d-ayah-arabic font-indopak">${arabic}</div>
      <div class="q3d-page-rule" aria-hidden="true"></div>
      <p class="q3d-ayah-bn">${lang === 'bn' ? ayah.bangla : ayah.english}</p>
      <p class="q3d-ayah-en">${lang === 'bn' ? ayah.english : ayah.bangla}</p>
      <div class="q3d-page-foot">
        ${lang === 'bn' ? surah.banglaName : surah.englishName} • ${localNum(surah.number, lang)}:${localNum(ayah.numberInSurah, lang)}
      </div>
    </div>
  `;
}

/** Sits under the leaf stack, so it is revealed only once every page has turned. */
function closingLeftPage(lang) {
  return `
    <div class="q3d-face-inner q3d-page">
      <div class="q3d-closing-ornament font-indopak" aria-hidden="true">۞</div>
      <div class="q3d-closing-title">${lang === 'bn' ? 'সূরা আল-ফাতিহা সমাপ্ত' : 'End of Surah Al-Fatihah'}</div>
      <div class="q3d-page-rule" aria-hidden="true"></div>
      <p class="q3d-closing-desc">
        ${lang === 'bn'
          ? 'কুরআনের ১১৪টি সূরার প্রথমটি — প্রতি সালাতে যা পড়া হয়।'
          : 'The first of the 114 Surahs — recited in every prayer.'}
      </p>
    </div>
  `;
}

function closingFace(lang) {
  return `
    <div class="q3d-face-inner q3d-page q3d-page-cta">
      <div class="q3d-cta-arabic font-indopak">اقۡرَاۡ بِاسۡمِ رَبِّكَ</div>
      <div class="q3d-page-rule" aria-hidden="true"></div>
      <h3 class="q3d-cta-title">${lang === 'bn' ? 'পুরো কুরআন পড়ুন' : 'Read the whole Quran'}</h3>
      <p class="q3d-cta-desc">
        ${lang === 'bn'
          ? '১১৪টি সূরা, আয়াতভিত্তিক বাংলা ও ইংরেজি অনুবাদ এবং তিলাওয়াতের অডিও।'
          : 'All 114 Surahs with verse-by-verse Bangla and English translation, plus audio recitation.'}
      </p>
      <span class="q3d-cta-note">${lang === 'bn' ? 'নিচের বোতাম থেকে শুরু করুন' : 'Use the button below to start'}</span>
    </div>
  `;
}

/**
 * Build the ordered list of page faces.
 * Face 0 is the cover; every leaf carries two faces (front + back),
 * so the list is padded to an even length.
 */
function buildFaces(lang) {
  const surah = PRELOADED_SURAHS['1'];
  const faces = [coverFace(lang), surahHeaderFace(surah, lang)];

  for (const ayah of surah.ayahs) {
    faces.push(ayahFace(ayah, surah, lang));
  }
  faces.push(closingFace(lang));

  if (faces.length % 2 !== 0) {
    faces.push(`<div class="q3d-face-inner q3d-page q3d-page-blank"></div>`);
  }
  return faces;
}

// ---------- Markup ----------

export function renderQuran3DBook(lang = 'bn') {
  const faces = buildFaces(lang);
  const leafCount = faces.length / 2;

  const leaves = Array.from({ length: leafCount }, (_, i) => `
    <div class="q3d-leaf" data-leaf="${i}" style="--f: 0; --shade: 0;">
      <div class="q3d-face q3d-face-front">${faces[i * 2]}</div>
      <div class="q3d-face q3d-face-back">${faces[i * 2 + 1]}</div>
    </div>
  `).join('');

  const dots = Array.from({ length: leafCount + 1 }, (_, i) => `
    <button class="q3d-dot" type="button" data-q3d-goto="${i}"
      aria-label="${lang === 'bn' ? `পাতা ${localNum(i + 1, lang)}` : `Page ${i + 1}`}"></button>
  `).join('');

  return `
    <section class="q3d" id="quran-3d-book" aria-label="${lang === 'bn' ? 'ত্রিমাত্রিক কুরআন' : '3D Quran book'}">
      <div class="q3d-track" id="q3d-track" style="--q3d-leaves: ${leafCount};">
        <div class="q3d-stage">
          <div class="q3d-glow" aria-hidden="true"></div>

          <header class="q3d-intro">
            <span class="q3d-badge">${lang === 'bn' ? '৩ডি মুসহাফ' : '3D Mushaf'}</span>
            <h2 class="q3d-heading">${lang === 'bn' ? 'স্ক্রল করুন, কুরআন খুলে যাবে' : 'Scroll, and the Quran opens'}</h2>
            <p class="q3d-sub">${lang === 'bn'
              ? 'সূরা আল-ফাতিহা — পাতা ডান থেকে বামে উল্টাবে, ঠিক আসল মুসহাফের মতো।'
              : 'Surah Al-Fatihah — pages turn right to left, just like a real Mushaf.'}</p>
          </header>

          <div class="q3d-scene">
            <div class="q3d-book" id="q3d-book">
              <div class="q3d-base q3d-base-right" aria-hidden="true"></div>
              <div class="q3d-base q3d-base-left">${closingLeftPage(lang)}</div>
              <div class="q3d-spine" aria-hidden="true"></div>
              <div class="q3d-leaves" id="q3d-leaves">${leaves}</div>
              <div class="q3d-shadow" aria-hidden="true"></div>
            </div>
          </div>

          <div class="q3d-controls">
            <button class="q3d-nav" type="button" data-q3d-step="-1"
              aria-label="${lang === 'bn' ? 'আগের পাতা' : 'Previous page'}">‹</button>
            <div class="q3d-dots" id="q3d-dots">${dots}</div>
            <button class="q3d-nav" type="button" data-q3d-step="1"
              aria-label="${lang === 'bn' ? 'পরের পাতা' : 'Next page'}">›</button>
          </div>

          <div class="q3d-foot">
            <div class="q3d-hint" id="q3d-hint">
              <span class="q3d-hint-arrow" aria-hidden="true">↓</span>
              <span>${lang === 'bn' ? 'স্ক্রল করুন' : 'Keep scrolling'}</span>
            </div>
            <a class="q3d-cta-btn" id="q3d-cta" href="#/${lang}/quran" tabindex="-1" aria-hidden="true">
              ${lang === 'bn' ? 'কুরআন পড়া শুরু করুন →' : 'Start reading the Quran →'}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---------- Behaviour ----------

// Flipping starts after a short lead-in and finishes before the end of the
// track, so the closed cover and the final spread both get a moment to rest.
const LEAD_IN = 0.06;
const FLIP_SPAN = 0.86;
const OVERLAP = 1.2; // a leaf's flip lasts 1.2 slots, so the next one starts lifting early

let detach = null;

function clamp(v, min = 0, max = 1) {
  return v < min ? min : v > max ? max : v;
}

// Smoothstep: eases the start and end of every page turn.
function ease(t) {
  return t * t * (3 - 2 * t);
}

export function bindQuran3DBook() {
  // Tear down a previous instance before wiring a new one (SPA re-render).
  if (detach) {
    detach();
    detach = null;
  }

  const track = document.getElementById('q3d-track');
  const book = document.getElementById('q3d-book');
  const leavesRoot = document.getElementById('q3d-leaves');
  if (!track || !book || !leavesRoot) return;

  const leaves = Array.from(leavesRoot.querySelectorAll('.q3d-leaf'));
  const dots = Array.from(document.querySelectorAll('#q3d-dots .q3d-dot'));
  const hint = document.getElementById('q3d-hint');
  const cta = document.getElementById('q3d-cta');
  const N = leaves.length;
  if (!N) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) track.classList.add('q3d-reduced');

  const step = 1 / (N - 1 + OVERLAP);
  const dur = step * OVERLAP;

  let manualProgress = 0; // used only in reduced-motion mode
  let lastFlipped = -1;
  let ticking = false;

  /** Scroll position (0..1) at which `count` leaves are fully turned. */
  function progressForCount(count) {
    if (count <= 0) return 0;
    const inner = clamp((count - 1) * step + dur);
    return clamp(LEAD_IN + inner * FLIP_SPAN);
  }

  function currentProgress() {
    if (reduced) return manualProgress;
    const span = track.offsetHeight - window.innerHeight;
    if (span <= 0) return 0;
    return clamp(-track.getBoundingClientRect().top / span);
  }

  function apply(progress) {
    const inner = clamp((progress - LEAD_IN) / FLIP_SPAN);
    let flipped = 0;

    for (let i = 0; i < N; i++) {
      const leaf = leaves[i];
      const raw = clamp((inner - i * step) / dur);
      const f = ease(raw);
      if (f >= 0.5) flipped++;

      // Leaves stack along the book's normal: an unturned leaf sits on top of
      // the left pile, a turned one sinks to the bottom of the right pile.
      const depth = (N - i) * 0.6;
      const z = depth * (1 - 2 * f);

      leaf.style.transform = `translateZ(${z.toFixed(2)}px) rotateY(${(f * 180).toFixed(2)}deg)`;
      leaf.style.setProperty('--f', f.toFixed(3));
      // Paper darkens mid-turn and flattens out again once it lands.
      leaf.style.setProperty('--shade', Math.sin(Math.PI * f).toFixed(3));
      leaf.style.zIndex = String(f < 0.5 ? N - i : N + i);
    }

    // The book slides from "cover centred" to "spread centred" as it opens.
    const opening = ease(clamp(inner / step));
    book.style.setProperty('--q3d-shift', `${(25 * (1 - opening)).toFixed(2)}%`);
    book.style.setProperty('--q3d-open', opening.toFixed(3));

    if (flipped !== lastFlipped) {
      lastFlipped = flipped;
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === flipped));
    }
    if (hint) hint.classList.toggle('is-hidden', progress > 0.04);
    if (cta) {
      const ready = flipped >= N;
      cta.classList.toggle('is-ready', ready);
      cta.tabIndex = ready ? 0 : -1;
      cta.setAttribute('aria-hidden', ready ? 'false' : 'true');
    }
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      // The SPA swaps #content-root wholesale; drop the listener when detached.
      if (!document.body.contains(track)) {
        if (detach) detach();
        return;
      }
      apply(currentProgress());
    });
  }

  function goTo(count) {
    const target = clamp(count, 0, N);
    const progress = progressForCount(target);

    if (reduced) {
      manualProgress = progress;
      apply(progress);
      return;
    }
    const span = track.offsetHeight - window.innerHeight;
    if (span <= 0) return;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: trackTop + progress * span, behavior: 'smooth' });
  }

  function onControlClick(e) {
    const stepBtn = e.target.closest('[data-q3d-step]');
    if (stepBtn) {
      goTo(lastFlipped + Number(stepBtn.dataset.q3dStep));
      return;
    }
    const dotBtn = e.target.closest('[data-q3d-goto]');
    if (dotBtn) goTo(Number(dotBtn.dataset.q3dGoto));
  }

  const controls = track.querySelector('.q3d-controls');
  if (controls) controls.addEventListener('click', onControlClick);

  if (!reduced) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  }

  detach = () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (controls) controls.removeEventListener('click', onControlClick);
    detach = null;
  };

  apply(currentProgress());
}
