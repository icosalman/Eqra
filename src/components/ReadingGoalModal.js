// ============================================
// EQRA — Quran Reading Goal & Streak Modal Dashboard
// Inspired by Quran.com & GreenTech Al-Quran
// ============================================

import { t, getLang } from '../i18n.js';
import { 
  getGoalProgressSummary, 
  GOAL_PRESETS, 
  setActiveGoal, 
  logManualProgress, 
  markTodayFinishedOffline, 
  getWeeklyActivity, 
  getRecentActivityGrid,
  MOTIVATIONAL_HADITHS 
} from '../services/quranGoalService.js';
import {
  exportCode,
  exportFileBlob,
  parseSnapshot,
  applySnapshot,
  snapshotStats
} from '../services/progressSyncService.js';
import { 
  Icon3DFlame, 
  Icon3DTarget, 
  Icon3DTrophy, 
  Icon3DCalendarCheck,
  Icon3DSparkle
} from './Icons3D.js';
import { showActionToast } from './AyahCard.js';

let modalContainer = null;

/**
 * Render circular SVG progress ring
 */
function renderCircularProgress(percent, current, target) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return `
    <div class="goal-circle-wrapper">
      <svg class="goal-circle-svg" width="128" height="128" viewBox="0 0 128 128">
        <circle 
          class="goal-circle-bg" 
          cx="64" 
          cy="64" 
          r="${radius}" 
          stroke-width="10" 
        />
        <circle 
          class="goal-circle-bar" 
          cx="64" 
          cy="64" 
          r="${radius}" 
          stroke-width="10" 
          stroke-dasharray="${circumference}" 
          stroke-dashoffset="${strokeDashoffset}" 
          transform="rotate(-90 64 64)"
        />
      </svg>
      <div class="goal-circle-content">
        <span class="goal-circle-percent">${percent}%</span>
        <span class="goal-circle-fraction">${current}/${target}</span>
      </div>
    </div>
  `;
}

/**
 * Render 7-day mini weekly streak tracker
 */
function renderWeeklyTracker(lang) {
  const days = getWeeklyActivity();
  return `
    <div class="weekly-streak-strip">
      ${days.map(d => `
        <div class="weekly-day-col ${d.isToday ? 'is-today' : ''} ${d.completed ? 'completed' : ''}">
          <span class="weekly-day-name">${lang === 'bn' ? d.dayNameBn : d.dayNameEn}</span>
          <div class="weekly-day-dot ${d.completed ? 'dot-active' : ''}">
            ${d.completed ? '✓' : (d.isToday ? '•' : '')}
          </div>
          <span class="weekly-day-count">${d.ayahs > 0 ? d.ayahs : '—'}</span>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Render Preset Goal cards (Greentech & Quran.com style)
 */
function renderPresetCards(activeGoalId, lang) {
  return `
    <div class="presets-grid">
      ${GOAL_PRESETS.map(preset => {
        const isActive = activeGoalId === preset.id;
        return `
          <div class="preset-card ${isActive ? 'active-preset' : ''}" data-preset-id="${preset.id}"
            role="button" tabindex="0" aria-pressed="${isActive}"
            aria-label="${lang === 'bn' ? preset.titleBn : preset.titleEn}">
            <div class="preset-card-header">
              <div class="preset-icon-wrap">${preset.icon}</div>
              <span class="preset-badge">${preset.badge}</span>
            </div>
            <h4 class="preset-title">${lang === 'bn' ? preset.titleBn : preset.titleEn}</h4>
            <p class="preset-desc">${lang === 'bn' ? preset.descBn : preset.descEn}</p>
            <div class="preset-footer">
              <span class="preset-rate">⚡ ${preset.targetPerDay} ${lang === 'bn' ? 'আয়াত/দিন' : 'ayahs/day'}</span>
              <button class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'} select-preset-btn" data-preset-id="${preset.id}">
                ${isActive ? (lang === 'bn' ? 'বর্তমান লক্ষ্য ✓' : 'Active ✓') : (lang === 'bn' ? 'বাছাই করুন' : 'Select')}
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/**
 * Render the backup / restore pane.
 * Progress lives in this browser only, so this is how it reaches another device.
 */
function renderSyncPane(lang) {
  const stats = snapshotStats();
  const bn = lang === 'bn';
  return `
    <div class="sync-pane">
      <div class="sync-stats">
        <div class="sync-stat"><strong>${stats.surahs}</strong><span>${bn ? 'সূরায় অগ্রগতি' : 'surahs in progress'}</span></div>
        <div class="sync-stat"><strong>${stats.bookmarks}</strong><span>${bn ? 'বুকমার্ক' : 'bookmarks'}</span></div>
        <div class="sync-stat"><strong>${stats.streak}</strong><span>${bn ? 'দিনের স্ট্রিক' : 'day streak'}</span></div>
        <div class="sync-stat"><strong>${stats.days}</strong><span>${bn ? 'দিন তিলাওয়াত' : 'days recited'}</span></div>
      </div>

      <div class="sync-block">
        <h4 class="sync-title">${bn ? '১. এই ডিভাইস থেকে কপি করুন' : '1. Copy from this device'}</h4>
        <p class="sync-desc">${bn
          ? 'কোডটি কপি করে অন্য ডিভাইসে একই জায়গায় পেস্ট করুন। ফাইল হিসেবেও নামিয়ে রাখতে পারেন।'
          : 'Copy this code and paste it into the same panel on your other device, or download it as a file.'}</p>
        <textarea class="sync-code" id="sync-export-code" readonly rows="3"></textarea>
        <div class="sync-actions">
          <button class="btn btn-sm btn-primary" id="sync-copy-btn" type="button">${bn ? 'কোড কপি করুন' : 'Copy code'}</button>
          <button class="btn btn-sm btn-outline" id="sync-download-btn" type="button">${bn ? 'ফাইল ডাউনলোড' : 'Download file'}</button>
        </div>
      </div>

      <div class="sync-block">
        <h4 class="sync-title">${bn ? '২. অন্য ডিভাইসের অগ্রগতি আনুন' : '2. Bring in another device'}</h4>
        <p class="sync-desc">${bn
          ? 'কোড পেস্ট করে "যুক্ত করুন" চাপুন। কিছু মুছে যাবে না — প্রতি সূরায় যেটি বেশি এগিয়ে সেটিই থাকবে।'
          : 'Paste the code and press Merge. Nothing is erased — for each surah the further-along bookmark is kept.'}</p>
        <textarea class="sync-code" id="sync-import-code" rows="3"
          placeholder="${bn ? 'এখানে কোড পেস্ট করুন…' : 'Paste the code here…'}"></textarea>
        <div class="sync-actions">
          <button class="btn btn-sm btn-primary" id="sync-import-btn" type="button">${bn ? 'যুক্ত করুন' : 'Merge'}</button>
          <label class="btn btn-sm btn-outline sync-file-label">
            ${bn ? 'ফাইল থেকে' : 'From file'}
            <input type="file" id="sync-file-input" accept="application/json,.json" hidden />
          </label>
        </div>
        <div class="sync-result" id="sync-result" role="status" aria-live="polite"></div>
      </div>

      <p class="sync-note">${bn
        ? 'এখনো স্বয়ংক্রিয় সিংক নেই — সেটির জন্য লগইন ও সার্ভার লাগবে। এই কোডে সব অগ্রগতি, স্ট্রিক ও বুকমার্ক থাকে।'
        : 'Automatic sync needs an account and a server, which is not set up yet. This code carries all progress, streak and bookmarks.'}</p>
    </div>
  `;
}

/**
 * Render 30-Day Activity Heatmap (Quran.com style dots)
 */
function renderHeatmapGrid(lang) {
  const days = getRecentActivityGrid(28); // 4 weeks
  return `
    <div class="heatmap-container">
      <div class="heatmap-header">
        <span>${lang === 'bn' ? 'গত ৪ সপ্তাহের তিলাওয়াত ইতিহাস' : 'Last 4 Weeks Recitation Grid'}</span>
        <div class="heatmap-legend">
          <span class="legend-item"><span class="legend-box level-0"></span> ${lang === 'bn' ? 'পড়া হয়নি' : 'None'}</span>
          <span class="legend-item"><span class="legend-box level-active"></span> ${lang === 'bn' ? 'পড়া হয়েছে' : 'Read'}</span>
        </div>
      </div>
      <div class="heatmap-grid">
        ${days.map(d => `
          <div 
            class="heatmap-cell ${d.completed ? 'level-completed' : (d.ayahs > 0 ? 'level-active' : 'level-0')} ${d.isToday ? 'is-today' : ''}" 
            title="${d.dateStr}: ${d.ayahs} ${lang === 'bn' ? 'আয়াত' : 'ayahs'} ${d.completed ? '✓' : ''}"
          >
            <span class="heatmap-day-label">${d.dayNum}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Confetti particle burst on goal completion
 */
function triggerConfettiBurst() {
  const container = document.getElementById('goal-confetti-container');
  if (!container) return;
  container.innerHTML = '';
  
  const colors = ['#10B981', '#F59E0B', '#38BDF8', '#EC4899', '#8B5CF6', '#FDE047'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-particle';
    el.style.left = `${Math.random() * 100}%`;
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDelay = `${Math.random() * 0.4}s`;
    el.style.animationDuration = `${1 + Math.random() * 1.5}s`;
    container.appendChild(el);
  }
}

/**
 * Build inner HTML for the modal
 */
function renderModalContent() {
  const lang = getLang();
  const summary = getGoalProgressSummary();
  const randomHadith = MOTIVATIONAL_HADITHS[Math.floor(Math.random() * MOTIVATIONAL_HADITHS.length)];

  return `
    <div class="goal-modal-backdrop" id="goal-modal-backdrop"></div>
    <div class="goal-modal-dialog animate-scale-up" role="dialog" aria-modal="true" aria-labelledby="goal-modal-title">
      <div id="goal-confetti-container" class="goal-confetti-wrap"></div>

      <!-- Modal Header -->
      <div class="goal-modal-header">
        <div class="goal-header-left">
          <div class="goal-streak-pill ${summary.isCompleted ? 'streak-ignited' : ''}">
            <span class="streak-flame-icon">${Icon3DFlame}</span>
            <span class="streak-count-number">${summary.currentStreak}</span>
            <span class="streak-label-text">${lang === 'bn' ? 'দিন স্ট্রিক' : 'Day Streak'}</span>
          </div>
          <div class="goal-best-streak" title="${lang === 'bn' ? 'আপনার সেরা স্ট্রিক রেকর্ড' : 'Your longest streak record'}">
            <span class="icon-wrap-sm">${Icon3DTrophy}</span>
            <span>${lang === 'bn' ? 'সেরা:' : 'Best:'} <strong>${summary.longestStreak}</strong> ${lang === 'bn' ? 'দিন' : 'days'}</span>
          </div>
        </div>

        <button class="goal-modal-close-btn" id="close-goal-modal-btn" aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Modal Scrollable Body -->
      <div class="goal-modal-body">
        
        <!-- Today's Target Card -->
        <div class="goal-today-card ${summary.isCompleted ? 'goal-completed-card' : ''}">
          <div class="today-card-left">
            <div class="today-tag-wrap">
              <span class="today-tag-badge">
                <span class="icon-wrap-xs">${Icon3DTarget}</span>
                <span>${lang === 'bn' ? 'আজকের কুরআন লক্ষ্য' : "Today's Reading Target"}</span>
              </span>
              <span class="active-preset-name">${lang === 'bn' ? summary.titleBn : summary.titleEn}</span>
            </div>

            <h3 class="today-status-headline">
              ${summary.isCompleted 
                ? (lang === 'bn' ? 'মাশাআল্লাহ! আজকের লক্ষ্য অর্জিত হয়েছে 🎉' : "Masha'Allah! Goal Completed Today! 🎉")
                : (lang === 'bn' ? `আরও ${summary.remaining}টি আয়াত বাকি আছে` : `${summary.remaining} more ayahs remaining today`)}
            </h3>

            <p class="today-status-sub">
              ${summary.isCompleted
                ? (lang === 'bn' ? 'আপনার দৈনিক স্ট্রিক সুরক্ষিত। চাইলে আরও তিলাওয়াত করে পুণ্য অর্জন করুন।' : 'Your daily streak is locked in. Feel free to keep reading!')
                : (lang === 'bn' ? 'কুরআনের পাতায় ফিরে যান অথবা অফলাইন পড়ার জন্য কুইক লগ করুন।' : 'Read in the app or log your offline reading below.')}
            </p>

            <!-- Quick Log Buttons -->
            <div class="quick-log-actions">
              <span class="quick-log-label">${lang === 'bn' ? 'কুইক লগ:' : 'Quick Log:'}</span>
              <button class="btn btn-sm btn-secondary quick-log-btn" data-count="1">+১ আয়াত</button>
              <button class="btn btn-sm btn-secondary quick-log-btn" data-count="5">+৫ আয়াত</button>
              <button class="btn btn-sm btn-secondary quick-log-btn" data-count="20">+১ পৃষ্ঠা</button>
              ${!summary.isCompleted ? `
                <button class="btn btn-sm btn-primary" id="mark-offline-completed-btn" style="display: inline-flex; align-items: center; gap: 4px;">
                  <span>✓</span> <span>${lang === 'bn' ? 'আজকে পড়েছি' : 'Done for Today'}</span>
                </button>
              ` : ''}
            </div>
          </div>

          <div class="today-card-right">
            ${renderCircularProgress(summary.percent, summary.current, summary.target)}
          </div>
        </div>

        <!-- 7-Day Rolling Weekly Activity Strip -->
        <div class="goal-section-box">
          <div class="section-box-title">
            <span class="icon-wrap-sm">${Icon3DCalendarCheck}</span>
            <span>${lang === 'bn' ? 'চলতি সপ্তাহের ধারাবাহিকতা' : '7-Day Habit Tracker'}</span>
          </div>
          ${renderWeeklyTracker(lang)}
        </div>

        <!-- Tabs: Preset Goals / Custom Goal / History (GreenTech Calm Simplicity) -->
        <div class="goal-tabs-nav" role="tablist">
          <button class="goal-tab-btn active" data-tab="presets">
            ${lang === 'bn' ? '🎯 প্রিসেট লক্ষ্যসমূহ' : '🎯 Preset Goals'}
          </button>
          <button class="goal-tab-btn" data-tab="custom">
            ${lang === 'bn' ? '⚙️ কাস্টম লক্ষ্য' : '⚙️ Custom Goal'}
          </button>
          <button class="goal-tab-btn" data-tab="history">
            ${lang === 'bn' ? '📅 তিলাওয়াত ইতিহাস' : '📅 Monthly Grid'}
          </button>
        </div>

        <!-- Tab Content: Presets -->
        <div class="goal-tab-pane active" id="tab-pane-presets">
          ${renderPresetCards(summary.state.activeGoal.id, lang)}
        </div>

        <!-- Tab Content: Custom Goal -->
        <div class="goal-tab-pane" id="tab-pane-custom" style="display: none;">
          <div class="custom-goal-card">
            <h4 style="font-size: var(--text-base); font-weight: 700; margin-bottom: var(--space-2);">
              ${lang === 'bn' ? 'আপনার সুবিধামতো দৈনিক লক্ষ্য নির্ধারণ করুন' : 'Design Your Custom Daily Target'}
            </h4>
            <p style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-4);">
              ${lang === 'bn' ? 'প্রতিদিন কতগুলো আয়াত পড়তে চান তা লিখুন। সিস্টেম স্বয়ংক্রিয়ভাবে পুরো কুরআন খতমের আনুমানিক সময় নির্ধারণ করবে।' : 'Set how many ayahs you want to recite daily to calculate your completion date.'}
            </p>

            <div class="custom-inputs-row">
              <div class="custom-input-group">
                <label for="custom-ayahs-input">${lang === 'bn' ? 'দৈনিক আয়াত সংখ্যা' : 'Ayahs Per Day'}</label>
                <div class="input-with-stepper">
                  <button type="button" class="stepper-btn" id="custom-dec-btn">−</button>
                  <input type="number" id="custom-ayahs-input" min="1" max="500" value="${summary.state.activeGoal.id === 'custom' ? summary.target : 15}" />
                  <button type="button" class="stepper-btn" id="custom-inc-btn">+</button>
                </div>
              </div>

              <div class="custom-forecast-box">
                <span class="forecast-label">${lang === 'bn' ? 'খতম সম্পন্ন হতে লাগবে:' : 'Estimated Khatam In:'}</span>
                <span class="forecast-value" id="custom-forecast-days">
                  ${Math.ceil(6236 / (summary.state.activeGoal.id === 'custom' ? summary.target : 15))} ${lang === 'bn' ? 'দিন' : 'days'}
                </span>
                <span class="forecast-hint" id="custom-forecast-date">
                  (~${(6236 / ((summary.state.activeGoal.id === 'custom' ? summary.target : 15) * 30)).toFixed(1)} ${lang === 'bn' ? 'মাস' : 'months'})
                </span>
              </div>
            </div>

            <button class="btn btn-primary" id="save-custom-goal-btn" style="margin-top: var(--space-4); width: 100%;">
              ${lang === 'bn' ? 'এই লক্ষ্যটি সক্রিয় করুন' : 'Activate This Goal'}
            </button>
          </div>
        </div>

        <!-- Tab Content: Monthly History -->
        <div class="goal-tab-pane" id="tab-pane-history" style="display: none;">
          ${renderHeatmapGrid(lang)}
        </div>

        <!-- Motivational Hadith Footer -->
        <div class="goal-hadith-footer">
          <div class="hadith-header">
            <span class="icon-wrap-xs">${Icon3DSparkle}</span>
            <span>${lang === 'bn' ? 'কুরআন তিলাওয়াতের ফজিলত' : 'Virtue of Quran Recitation'}</span>
          </div>
          <div class="hadith-arabic font-indopak" dir="rtl">${randomHadith.arabic}</div>
          <p class="hadith-translation">${lang === 'bn' ? randomHadith.bn : randomHadith.en}</p>
          <span class="hadith-source">— ${randomHadith.source}</span>
        </div>

        <!-- Collapsible Device Sync & Backup (Subtle & Non-Intrusive at bottom) -->
        <div class="goal-sync-accordion" style="margin-top: var(--space-4); border-top: 1px dashed var(--color-border); padding-top: var(--space-3); text-align: center;">
          <button class="btn btn-ghost btn-sm" id="toggle-sync-drawer-btn" type="button" style="color: var(--color-text-muted); font-size: 11px; display: inline-flex; align-items: center; gap: 6px; margin: 0 auto;">
            <span>🔄</span>
            <span>${lang === 'bn' ? 'অগ্রগতি ব্যাকআপ / অন্য ডিভাইসে ট্রান্সফার করুন' : 'Backup or Transfer Progress to Another Device'}</span>
            <span id="sync-drawer-arrow">▾</span>
          </button>

          <div id="goal-sync-drawer-content" style="display: none; margin-top: var(--space-3); text-align: left;">
            ${renderSyncPane(lang)}
          </div>
        </div>

      </div>
    </div>
  `;
}

/**
 * Bind interactive events in the modal
 */
function bindModalEvents() {
  if (!modalContainer) return;

  const close = () => closeReadingGoalModal();

  // Close handlers
  const closeBtn = modalContainer.querySelector('#close-goal-modal-btn');
  const backdrop = modalContainer.querySelector('#goal-modal-backdrop');
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);

  // Escape key closes modal
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      close();
      window.removeEventListener('keydown', handleKeydown);
    }
  };
  window.addEventListener('keydown', handleKeydown);

  // Tab switching
  const tabBtns = modalContainer.querySelectorAll('.goal-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetTab = btn.getAttribute('data-tab');

      modalContainer.querySelectorAll('.goal-tab-pane').forEach(pane => {
        pane.style.display = 'none';
        pane.classList.remove('active');
      });

      const activePane = modalContainer.querySelector(`#tab-pane-${targetTab}`);
      if (activePane) {
        activePane.style.display = 'block';
        activePane.classList.add('active');
      }
    });
  });

  // Preset selection — delegated, so the whole card works, not just its button
  const presetsGrid = modalContainer.querySelector('.presets-grid');
  if (presetsGrid) {
    const choosePreset = (target) => {
      const card = target.closest('[data-preset-id]');
      const presetId = card && card.getAttribute('data-preset-id');
      if (!presetId) return;
      setActiveGoal(presetId);
      refreshModal();
      showActionToast({
        icon: '🎯',
        text: getLang() === 'bn' ? 'রিডিং লক্ষ্য সফলভাবে সক্রিয় করা হয়েছে!' : 'Reading goal activated successfully!'
      });
    };
    presetsGrid.addEventListener('click', (e) => choosePreset(e.target));
    presetsGrid.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      if (!e.target.classList.contains('preset-card')) return;
      e.preventDefault();
      choosePreset(e.target);
    });
  }

  // Collapsible Sync Drawer toggle
  const syncToggleBtn = modalContainer.querySelector('#toggle-sync-drawer-btn');
  const syncDrawerContent = modalContainer.querySelector('#goal-sync-drawer-content');
  const syncArrow = modalContainer.querySelector('#sync-drawer-arrow');
  if (syncToggleBtn && syncDrawerContent) {
    syncToggleBtn.addEventListener('click', () => {
      const isClosed = syncDrawerContent.style.display === 'none';
      syncDrawerContent.style.display = isClosed ? 'block' : 'none';
      if (syncArrow) syncArrow.textContent = isClosed ? '▴' : '▾';
    });
  }

  // ---- Device sync: export / import ----
  const syncExport = modalContainer.querySelector('#sync-export-code');
  if (syncExport) {
    const bn = getLang() === 'bn';
    const resultEl = modalContainer.querySelector('#sync-result');
    const importBox = modalContainer.querySelector('#sync-import-code');

    // Generated on open so it always reflects the current progress.
    syncExport.value = exportCode();

    const say = (msg, ok = true) => {
      if (!resultEl) return;
      resultEl.textContent = msg;
      resultEl.className = `sync-result ${ok ? 'is-ok' : 'is-error'}`;
    };

    const copyBtn = modalContainer.querySelector('#sync-copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(syncExport.value);
        } catch {
          // Clipboard API needs a secure context; selecting lets the user copy by hand.
          syncExport.select();
        }
        copyBtn.textContent = bn ? 'কপি হয়েছে ✓' : 'Copied ✓';
        setTimeout(() => { copyBtn.textContent = bn ? 'কোড কপি করুন' : 'Copy code'; }, 1800);
      });
    }

    const downloadBtn = modalContainer.querySelector('#sync-download-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const url = URL.createObjectURL(exportFileBlob());
        const a = document.createElement('a');
        a.href = url;
        a.download = `eqra-progress-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    const ERRORS = {
      EMPTY: bn ? 'আগে কোডটি পেস্ট করুন।' : 'Paste the code first.',
      UNREADABLE: bn ? 'কোডটি পড়া যাচ্ছে না। পুরোটা কপি হয়েছে কিনা দেখুন।' : 'Could not read that code — check the whole thing was copied.',
      NOT_EQRA: bn ? 'এটি EQRA-র ব্যাকআপ কোড নয়।' : 'That is not an EQRA backup code.',
      NEWER_VERSION: bn ? 'কোডটি নতুন ভার্সনের। আগে সাইটটি রিফ্রেশ করুন।' : 'That code is from a newer version — refresh the site first.'
    };

    const runImport = (text) => {
      try {
        const summary = applySnapshot(parseSnapshot(text));
        say(bn
          ? `যুক্ত হয়েছে — ${summary.surahsAdvanced}টি সূরার অগ্রগতি এগিয়েছে, ${summary.bookmarksAdded}টি নতুন বুকমার্ক। মোট ${summary.totalSurahs}টি সূরা।`
          : `Merged — ${summary.surahsAdvanced} surah(s) advanced, ${summary.bookmarksAdded} new bookmark(s). ${summary.totalSurahs} surahs tracked.`);
        setTimeout(refreshModal, 1600);
      } catch (err) {
        say(ERRORS[err.message] || (bn ? 'যুক্ত করা যায়নি।' : 'Could not merge that code.'), false);
      }
    };

    const importBtn = modalContainer.querySelector('#sync-import-btn');
    if (importBtn && importBox) {
      importBtn.addEventListener('click', () => runImport(importBox.value));
    }

    const fileInput = modalContainer.querySelector('#sync-file-input');
    if (fileInput) {
      fileInput.addEventListener('change', async () => {
        const file = fileInput.files && fileInput.files[0];
        if (!file) return;
        runImport(await file.text());
        fileInput.value = '';
      });
    }
  }

  // Quick Log buttons
  modalContainer.querySelectorAll('.quick-log-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const count = parseInt(btn.getAttribute('data-count'), 10) || 1;
      logManualProgress(count);
      refreshModal();
      showActionToast({
        icon: '⚡',
        text: getLang() === 'bn' ? `+${count}টি আয়াত আজকের তিলাওয়াতে যোগ হয়েছে` : `+${count} ayahs added to today's reading`
      });
    });
  });

  // Mark Offline Completed button
  const markDoneBtn = modalContainer.querySelector('#mark-offline-completed-btn');
  if (markDoneBtn) {
    markDoneBtn.addEventListener('click', () => {
      markTodayFinishedOffline();
      triggerConfettiBurst();
      refreshModal();
      showActionToast({
        icon: '🎉',
        text: getLang() === 'bn' ? 'মাশাআল্লাহ! আজকের তিলাওয়াত সম্পন্ন হয়েছে' : "Masha'Allah! Today's recitation marked as completed"
      });
    });
  }

  // Custom Goal Inputs & Stepper
  const customInput = modalContainer.querySelector('#custom-ayahs-input');
  const customDec = modalContainer.querySelector('#custom-dec-btn');
  const customInc = modalContainer.querySelector('#custom-inc-btn');
  const forecastDays = modalContainer.querySelector('#custom-forecast-days');
  const forecastDate = modalContainer.querySelector('#custom-forecast-date');
  const saveCustomBtn = modalContainer.querySelector('#save-custom-goal-btn');

  const updateForecast = () => {
    if (!customInput) return;
    const val = Math.max(1, parseInt(customInput.value, 10) || 1);
    const totalDays = Math.ceil(6236 / val);
    const months = (totalDays / 30.4).toFixed(1);
    if (forecastDays) forecastDays.textContent = `${totalDays} ${getLang() === 'bn' ? 'দিন' : 'days'}`;
    if (forecastDate) forecastDate.textContent = `(~${months} ${getLang() === 'bn' ? 'মাস' : 'months'})`;
  };

  if (customDec && customInput) {
    customDec.addEventListener('click', () => {
      let val = parseInt(customInput.value, 10) || 10;
      if (val > 1) {
        customInput.value = val - 1;
        updateForecast();
      }
    });
  }

  if (customInc && customInput) {
    customInc.addEventListener('click', () => {
      let val = parseInt(customInput.value, 10) || 10;
      if (val < 500) {
        customInput.value = val + 1;
        updateForecast();
      }
    });
  }

  if (customInput) {
    customInput.addEventListener('input', updateForecast);
  }

  if (saveCustomBtn && customInput) {
    saveCustomBtn.addEventListener('click', () => {
      const target = Math.max(1, parseInt(customInput.value, 10) || 10);
      setActiveGoal('custom', { targetPerDay: target });
      refreshModal();
    });
  }
}

/**
 * Re-render contents without tearing down modal backdrop
 */
function refreshModal() {
  if (!modalContainer) return;
  modalContainer.innerHTML = renderModalContent();
  bindModalEvents();
}

/**
 * Open the Reading Goal & Streak Modal
 */
export function openReadingGoalModal() {
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'reading-goal-modal-root';
    modalContainer.className = 'goal-modal-wrapper';
    document.body.appendChild(modalContainer);
  }

  modalContainer.innerHTML = renderModalContent();
  modalContainer.classList.add('open');
  document.body.style.overflow = 'hidden';
  bindModalEvents();

  // If goal is already complete today, trigger celebration sparkle
  const summary = getGoalProgressSummary();
  if (summary.isCompleted) {
    setTimeout(triggerConfettiBurst, 200);
  }
}

/**
 * Close the Reading Goal & Streak Modal
 */
export function closeReadingGoalModal() {
  if (modalContainer) {
    modalContainer.classList.remove('open');
    modalContainer.innerHTML = '';
  }
  document.body.style.overflow = '';
}
