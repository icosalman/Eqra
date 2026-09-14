// ============================================
// EQRA — Quranic Duas Section
// Supplications directly from the Holy Quran
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { DUAS_DATA } from '../data/duas.js';
import { audioPlayer } from '../components/AudioPlayer.js';

export function renderDuaIndexPage() {
  const lang = getLang();

  updateMeta({
    title: lang === 'bn' ? 'কুরআনের দোয়া সমগ্র — অর্থ ও ফজিলত | EQRA' : 'Quranic Duas — Prayers from the Holy Quran | EQRA',
    description: lang === 'bn' 
      ? 'পবিত্র কুরআন থেকে সংকলিত শ্রেষ্ঠ রব্বানা দোয়া ও নবী-রাসূলগণের প্রার্থনা। আরবি, উচ্চারণ, অর্থ ও অডিও তিলাওয়াত।' 
      : 'Curated supplications from the Holy Quran with Arabic, transliteration, English, Bangla, and audio recitation.',
    canonicalPath: `#/${lang}/dua`
  });

  return `
    <div class="page">
      <div class="container reading-width">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/${lang}/">${t('navHome')}</a>
          <span class="breadcrumbs-separator">/</span>
          <span class="breadcrumbs-current">${t('navDua')}</span>
        </nav>

        <!-- Page Header -->
        <header style="margin-bottom: var(--space-8); text-align: center;">
          <span class="section-badge badge-dua" style="margin-bottom: var(--space-3);">
            🤲 ${lang === 'bn' ? 'কুরআনী প্রার্থনা সমগ্র' : 'Quranic Supplications'}
          </span>
          <h1 style="font-size: var(--text-4xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${t('duaTitle')}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
            ${t('duaSubtitle')}
          </p>
        </header>

        <!-- Category Filter -->
        <div style="display: flex; gap: var(--space-2); overflow-x: auto; padding-bottom: var(--space-2); margin-bottom: var(--space-6); justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm active" data-dua-category="all">
            ${lang === 'bn' ? 'সকল দোয়া' : 'All Duas'}
          </button>
          <button class="btn btn-secondary btn-sm" data-dua-category="guidance">
            ${lang === 'bn' ? 'হেদায়েত ও রহমত' : 'Guidance'}
          </button>
          <button class="btn btn-secondary btn-sm" data-dua-category="forgiveness">
            ${lang === 'bn' ? 'ক্ষমা ও তাওবাহ' : 'Forgiveness'}
          </button>
          <button class="btn btn-secondary btn-sm" data-dua-category="family">
            ${lang === 'bn' ? 'পিতা-মাতা ও পরিবার' : 'Family'}
          </button>
          <button class="btn btn-secondary btn-sm" data-dua-category="patience">
            ${lang === 'bn' ? 'ধৈর্য ও অবিচলতা' : 'Patience'}
          </button>
          <button class="btn btn-secondary btn-sm" data-dua-category="knowledge">
            ${lang === 'bn' ? 'জ্ঞান বৃদ্ধি' : 'Knowledge'}
          </button>
        </div>

        <!-- Duas List -->
        <div id="duas-cards-list" class="stagger" style="display: flex; flex-direction: column; gap: var(--space-6);">
          ${renderDuaCards(DUAS_DATA, lang)}
        </div>
      </div>
    </div>
  `;
}

function renderDuaCards(list, lang) {
  return list.map(d => `
    <article class="card dua-card" data-category="${d.category}">
      <div class="section-header" style="margin-bottom: var(--space-3);">
        <div>
          <span class="tag" style="background: var(--color-dua-bg); color: var(--color-dua); border-color: var(--color-dua-light); margin-bottom: var(--space-1);">
            ${lang === 'bn' ? d.categoryBangla : d.categoryEnglish}
          </span>
          <h2 style="font-size: var(--text-lg); font-weight: 700; color: var(--color-text-primary); margin-top: 4px;">
            ${lang === 'bn' ? d.titleBangla : d.titleEnglish}
          </h2>
        </div>

        <div style="display: flex; gap: var(--space-2); align-items: center;">
          <button class="btn btn-ghost btn-sm play-dua-btn" data-audio="${d.audio}" title="${t('audioPlay')}">
            🔊
          </button>
          <button class="btn-ghost copy-dua-btn" 
            data-copy="${d.arabic}\n\n${d.bangla}\n\n${d.english}\n— [${d.reference}]" 
            title="${t('copy')}">
            📋
          </button>
        </div>
      </div>

      <!-- Arabic -->
      <div class="dua-card-arabic" style="font-size: var(--text-2xl); padding: var(--space-3) 0;">
        ${d.arabic}
      </div>

      <!-- Transliteration -->
      <div style="font-size: var(--text-xs); color: var(--color-text-muted); font-style: italic; margin-bottom: var(--space-3);">
        ${d.transliteration}
      </div>

      <!-- Translations -->
      <div style="display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4);">
        <div class="ayah-translation-bn">
          ${d.bangla}
        </div>
        <div class="ayah-translation-en">
          ${d.english}
        </div>
      </div>

      <!-- Reference & Virtue -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: var(--space-3); border-top: 1px solid var(--color-border-light); font-size: var(--text-xs); color: var(--color-text-muted); flex-wrap: wrap; gap: var(--space-2);">
        <div>
          <strong>${lang === 'bn' ? 'রেফারেন্স:' : 'Reference:'}</strong> ${d.reference}
        </div>

        <!-- Tasbih Counter Widget -->
        <div style="display: flex; align-items: center; gap: var(--space-2);">
          <span style="font-size: var(--text-xs);">${lang === 'bn' ? 'পাঠ সংখ্যা:' : 'Recited:'}</span>
          <button class="btn btn-secondary btn-sm tasbih-counter-btn" style="padding: 2px 10px; font-weight: 700; border-radius: var(--radius-full);">
            <span class="count-val">০</span> 🔄
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

export function bindDuaEvents() {
  // Category tabs
  const filterBtns = document.querySelectorAll('[data-dua-category]');
  const listContainer = document.getElementById('duas-cards-list');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.getAttribute('data-dua-category');

      const filtered = val === 'all' 
        ? DUAS_DATA 
        : DUAS_DATA.filter(d => d.category === val);

      listContainer.innerHTML = renderDuaCards(filtered, getLang());
      bindDuaCardActions();
    });
  });

  function bindDuaCardActions() {
    // Play audio
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

    // Copy dua
    document.querySelectorAll('.copy-dua-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const text = btn.getAttribute('data-copy');
        if (text) {
          await navigator.clipboard.writeText(text);
          btn.textContent = '✓';
          setTimeout(() => { btn.textContent = '📋'; }, 1500);
        }
      });
    });

    // Tasbih counter
    document.querySelectorAll('.tasbih-counter-btn').forEach(btn => {
      let count = 0;
      const countEl = btn.querySelector('.count-val');
      btn.addEventListener('click', () => {
        count++;
        const display = getLang() === 'bn' ? toBanglaNumber(count) : count;
        countEl.textContent = display;
      });
    });
  }

  function toBanglaNumber(num) {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num).split('').map(d => bnDigits[d] || d).join('');
  }

  bindDuaCardActions();
}
