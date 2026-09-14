// ============================================
// EQRA — Quranic Duas Section
// Complete compilation of 40+ Duas from the Holy Quran
// ============================================

import { t, getLang } from '../i18n.js';
import { updateMeta } from '../utils/seo.js';
import { DUAS_DATA } from '../data/duas.js';
import { audioPlayer } from '../components/AudioPlayer.js';
import { toggleBookmark, isBookmarked } from '../utils/storage.js';

export function renderDuaIndexPage() {
  const lang = getLang();

  updateMeta({
    title: lang === 'bn' ? 'কুরআনের পূর্ণাঙ্গ দোয়া সমগ্র — ৪০ রব্বানা ও নবীগণের দোয়া | EQRA' : 'Complete Quranic Duas — 40 Rabbana & Prophets Prayers | EQRA',
    description: lang === 'bn' 
      ? 'পবিত্র কুরআনের সকল দোয়া: ৪০ রব্বানা দোয়া, নবী-রাসূলগণের মোনাজাত, পিতা-মাতা, সন্তান, ক্ষমা ও রিজিকের দোয়া।' 
      : 'Complete compilation of Quranic supplications including 40 Rabbana and Prophets duas with Arabic, audio, and translations.',
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
            🤲 ${lang === 'bn' ? 'কুরআনের পূর্ণাঙ্গ দোয়া ভাণ্ডার' : 'Complete Quranic Supplications'}
          </span>
          <h1 style="font-size: var(--text-4xl); font-weight: 800; color: var(--color-text-primary); margin-bottom: var(--space-2);">
            ${t('duaTitle')}
          </h1>
          <p style="font-size: var(--text-base); color: var(--color-text-secondary); max-width: 650px; margin: 0 auto;">
            ${lang === 'bn' 
              ? `পবিত্র কুরআনুল কারীমে বর্ণিত সকল রব্বানা দোয়া, আম্বিয়ায়ে কেরামের পবিত্র মোনাজাত এবং মুমিনদের আরজি (মোট ${DUAS_DATA.length}টি দোয়া)।` 
              : `Complete compilation of ${DUAS_DATA.length} authentic Quranic supplications, 40 Rabbana prayers, and pleas of the Prophets.`}
          </p>
        </header>

        <!-- Search Bar & Filters -->
        <div style="background: var(--color-surface); padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--color-border); margin-bottom: var(--space-6);">
          <!-- Live Search Input -->
          <div class="search-bar" style="max-width: 100%; margin-bottom: var(--space-4);">
            <span class="search-icon">🔍</span>
            <input type="text" id="dua-search-input" class="search-input" placeholder="${lang === 'bn' ? 'দোয়া খুঁজুন (যেমন: ক্ষমা, পিতা-মাতা, সন্তান, রিজিক, ইউনুস, মুসা)...' : 'Search duas by topic, prophet, or keyword...'}" />
          </div>

          <!-- Category Chips -->
          <div style="display: flex; gap: var(--space-2); overflow-x: auto; padding-bottom: var(--space-2); flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm active" data-dua-category="all">
              ${lang === 'bn' ? `সব দোয়া (${DUAS_DATA.length})` : `All Duas (${DUAS_DATA.length})`}
            </button>
            <button class="btn btn-secondary btn-sm" data-dua-category="forgiveness">
              ${lang === 'bn' ? 'ক্ষমা ও তাওবাহ' : 'Forgiveness'}
            </button>
            <button class="btn btn-secondary btn-sm" data-dua-category="family">
              ${lang === 'bn' ? 'পিতা-মাতা ও পরিবার' : 'Family & Parents'}
            </button>
            <button class="btn btn-secondary btn-sm" data-dua-category="guidance">
              ${lang === 'bn' ? 'হেদায়েত ও রহমত' : 'Guidance & Mercy'}
            </button>
            <button class="btn btn-secondary btn-sm" data-dua-category="protection">
              ${lang === 'bn' ? 'বিপদ ও শত্রু থেকে রক্ষা' : 'Protection'}
            </button>
            <button class="btn btn-secondary btn-sm" data-dua-category="rizq">
              ${lang === 'bn' ? 'রিজিক ও বরকত' : 'Sustenance & Rizq'}
            </button>
            <button class="btn btn-secondary btn-sm" data-dua-category="patience">
              ${lang === 'bn' ? 'ধৈর্য ও অবিচলতা' : 'Patience'}
            </button>
            <button class="btn btn-secondary btn-sm" data-dua-category="knowledge">
              ${lang === 'bn' ? 'জ্ঞান ও প্রজ্ঞা' : 'Knowledge'}
            </button>
          </div>
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
  if (list.length === 0) {
    return `
      <div class="card" style="text-align: center; padding: var(--space-12); color: var(--color-text-muted);">
        ${t('searchNoResults')}
      </div>
    `;
  }

  return list.map(d => {
    const bookmarkId = `dua_${d.id}`;
    const bookmarked = isBookmarked(bookmarkId);

    return `
      <article class="card dua-card" data-category="${d.category}" id="${d.id}">
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
            <button class="ayah-action-btn play-dua-btn" data-audio="${d.audio}" title="${t('audioPlay')}">
              🔊
            </button>
            <button class="ayah-action-btn copy-dua-btn" 
              data-copy="${d.arabic}\n\n${d.bangla}\n\n${d.english}\n— [${d.reference}]" 
              title="${t('copy')}">
              📋
            </button>
            <button class="ayah-action-btn bookmark-dua-btn ${bookmarked ? 'active' : ''}" 
              data-id="${bookmarkId}"
              data-title="${lang === 'bn' ? d.titleBangla : d.titleEnglish}"
              data-arabic="${encodeURIComponent(d.arabic)}"
              data-bangla="${encodeURIComponent(d.bangla)}"
              data-english="${encodeURIComponent(d.english)}"
              title="${t('bookmark')}"
              style="${bookmarked ? 'color: var(--color-dua);' : ''}">
              ${bookmarked ? '★' : '☆'}
            </button>
          </div>
        </div>

        <!-- Arabic -->
        <div class="dua-card-arabic" style="font-size: var(--text-2xl); padding: var(--space-3) 0;">
          ${d.arabic}
        </div>

        <!-- Transliteration -->
        <div style="font-size: var(--text-xs); color: var(--color-text-muted); font-style: italic; margin-bottom: var(--space-3); line-height: 1.6;">
          ${d.transliteration}
        </div>

        <!-- Translations -->
        <div style="display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4);">
          <div class="ayah-translation-bn" style="border-left-color: var(--color-dua-light); font-size: var(--text-base);">
            ${d.bangla}
          </div>
          <div class="ayah-translation-en" style="font-size: var(--text-sm);">
            ${d.english}
          </div>
        </div>

        <!-- Reference, Virtue & Tasbih Counter -->
        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: var(--space-3); border-top: 1px solid var(--color-border-light); font-size: var(--text-xs); color: var(--color-text-muted); flex-wrap: wrap; gap: var(--space-2);">
          <div>
            <strong>${lang === 'bn' ? 'রেফারেন্স:' : 'Reference:'}</strong> ${d.reference}
            ${d.virtueBangla ? `<div style="color: var(--color-dua); margin-top: 2px;">💡 ${d.virtueBangla}</div>` : ''}
          </div>

          <!-- Tasbih Counter Widget -->
          <div style="display: flex; align-items: center; gap: var(--space-2);">
            <span style="font-size: var(--text-xs);">${lang === 'bn' ? 'পাঠ সংখ্যা:' : 'Recited:'}</span>
            <button class="btn btn-secondary btn-sm tasbih-counter-btn" style="padding: 2px 10px; font-weight: 700; border-radius: var(--radius-full); background: var(--color-dua-bg); color: var(--color-dua); border-color: var(--color-dua-light);">
              <span class="count-val">০</span> 🔄
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

export function bindDuaEvents() {
  const filterBtns = document.querySelectorAll('[data-dua-category]');
  const listContainer = document.getElementById('duas-cards-list');
  const searchInput = document.getElementById('dua-search-input');
  const lang = getLang();

  let activeCategory = 'all';
  let searchTerm = '';

  function filterDuas() {
    let filtered = DUAS_DATA;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(d => d.category === activeCategory);
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(d => 
        d.titleBangla.toLowerCase().includes(q) ||
        d.titleEnglish.toLowerCase().includes(q) ||
        d.bangla.toLowerCase().includes(q) ||
        d.english.toLowerCase().includes(q) ||
        d.arabic.includes(q) ||
        d.reference.toLowerCase().includes(q)
      );
    }

    listContainer.innerHTML = renderDuaCards(filtered, lang);
    bindDuaCardActions();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-dua-category');
      filterDuas();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      filterDuas();
    });
  }

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

    // Bookmark dua
    document.querySelectorAll('.bookmark-dua-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = {
          id,
          type: 'dua',
          title: btn.getAttribute('data-title'),
          arabic: decodeURIComponent(btn.getAttribute('data-arabic')),
          bangla: decodeURIComponent(btn.getAttribute('data-bangla')),
          english: decodeURIComponent(btn.getAttribute('data-english'))
        };

        const added = toggleBookmark(item);
        btn.textContent = added ? '★' : '☆';
        btn.style.color = added ? 'var(--color-dua)' : '';
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
