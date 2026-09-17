// ============================================
// EQRA — Quran Reading Goal & Streak Service
// Inspired by Quran.com & GreenTech Al-Quran
// ============================================

const STORAGE_KEY = 'eqra_quran_goal_v1';

/**
 * Standard Presets inspired by GreenTech & Quran.com
 */
export const GOAL_PRESETS = [
  {
    id: 'easy_starter',
    titleBn: 'সহজ সূচনা (Easy Habit)',
    titleEn: 'Easy Starter Habit',
    descBn: 'দৈনিক ৫টি আয়াত তিলাওয়াত। নতুনদের জন্য প্রতিদিন পড়ার অভ্যাস গড়ার সেরা উপায়।',
    descEn: 'Recite 5 ayahs daily. Perfect for building a consistent daily habit.',
    type: 'ayahs',
    targetPerDay: 5,
    estimatedMinutes: 5,
    totalTargetAyahs: 6236,
    badge: 'GreenTech Style',
    icon: '🌱'
  },
  {
    id: 'one_page',
    titleBn: 'প্রতিদিন ১ পৃষ্ঠা (Consistent)',
    titleEn: '1 Page Per Day',
    descBn: 'দৈনিক ১ পূর্ণ পৃষ্ঠা (~২০টি আয়াত)। প্রায় ৬০৪ দিনে পূর্ণ কুরআন শেষ হবে।',
    descEn: 'Recite 1 page (~20 ayahs) daily. Complete the Quran in ~604 days.',
    type: 'ayahs',
    targetPerDay: 20,
    estimatedMinutes: 10,
    totalTargetAyahs: 6236,
    badge: 'Popular',
    icon: '📖'
  },
  {
    id: 'khatam_1year',
    titleBn: '১ বছরে কুরআন খতম (1 Year Goal)',
    titleEn: 'Khatam in 1 Year',
    descBn: 'দৈনিক প্রায় ১৭-১৮টি আয়াত (~১.৬৫ পৃষ্ঠা)। ৩৬৫ দিনে আল-কুরআন সম্পন্ন হবে।',
    descEn: 'Recite ~17-18 ayahs daily. Complete the full Quran in exactly 1 year.',
    type: 'ayahs',
    targetPerDay: 18,
    estimatedMinutes: 12,
    totalTargetAyahs: 6236,
    badge: 'Quran.com Goal',
    icon: '🎯'
  },
  {
    id: 'khatam_60days',
    titleBn: '৬০ দিনে খতম (60 Days Journey)',
    titleEn: 'Khatam in 60 Days',
    descBn: 'দৈনিক আধা পারা (~১০০টি আয়াত বা ১০ পৃষ্ঠা)। ২ মাসের বিশেষ আত্মশুদ্ধি প্ল্যান।',
    descEn: 'Recite half a Juz (~100 ayahs / 10 pages) daily. Complete in 2 months.',
    type: 'ayahs',
    targetPerDay: 100,
    estimatedMinutes: 25,
    totalTargetAyahs: 6236,
    badge: 'Dedicated',
    icon: '⚡'
  },
  {
    id: 'khatam_30days',
    titleBn: '৩০ দিনে খতম (Ramadan / Intensive)',
    titleEn: 'Khatam in 30 Days',
    descBn: 'দৈনিক ১ পূর্ণ পারা (~২০০টি আয়াত বা ২০ পৃষ্ঠা)। প্রতি নামাজের পর ৪ পৃষ্ঠা।',
    descEn: 'Recite 1 full Juz (~200 ayahs / 20 pages) daily. Ideal for Ramadan.',
    type: 'ayahs',
    targetPerDay: 208,
    estimatedMinutes: 45,
    totalTargetAyahs: 6236,
    badge: 'Intensive',
    icon: '🌙'
  }
];

export const MOTIVATIONAL_HADITHS = [
  {
    arabic: 'مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا',
    bn: 'যে ব্যক্তি আল্লাহর কিতাব থেকে একটি হরফ পাঠ করবে, তার জন্য একটি নেকি রয়েছে; আর প্রতিটি নেকি দশ গুণ বৃদ্ধি পায়।',
    en: 'Whoever recites a letter from the Book of Allah will be credited with a good deed, and each good deed is multiplied tenfold.',
    source: 'তিরমিযী ২৯১০ (সহীহ)'
  },
  {
    arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
    bn: 'তোমাদের মধ্যে সর্বোত্তম ব্যক্তি সে, যে নিজে কুরআন শেখে এবং অন্যকে শিক্ষা দেয়।',
    en: 'The best among you are those who learn the Quran and teach it.',
    source: 'সহীহ বুখারী ৫০২৭'
  },
  {
    arabic: 'اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ',
    bn: 'তোমরা কুরআন তিলাওয়াত করো; কেননা কিয়ামতের দিন তা তার পাঠকারীর জন্য সুপারিশকারী হিসেবে আবির্ভূত হবে।',
    en: 'Recite the Quran, for on the Day of Resurrection it will come as an intercessor for its companions.',
    source: 'সহীহ মুসলিম ৮০৪'
  },
  {
    arabic: 'الَّذِي يَقْرَأُ القُرْآنَ وَهُوَ مَاهِرٌ بِهِ مَعَ السَّفَرَةِ الكِرَامِ البَرَرَةِ',
    bn: 'যে ব্যক্তি দক্ষতার সাথে কুরআন তিলাওয়াত করে, সে সম্মানিত পুণ্যবান ফেরেশতাদের সঙ্গী হবে।',
    en: 'The one who recites the Quran proficiently will be with the noble and obedient angels.',
    source: 'সহীহ বুখারী ৪৯৩৭'
  }
];

function getTodayDateString() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getYesterdayDateString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

const DEFAULT_STATE = {
  activeGoal: {
    id: 'easy_starter',
    type: 'ayahs',
    targetPerDay: 5,
    customTitle: null,
    startDate: getTodayDateString()
  },
  streak: {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: null
  },
  today: {
    date: getTodayDateString(),
    ayahsRead: 0,
    readAyahKeys: [], // e.g. ["1:1", "1:2"]
    minutesRead: 0,
    isCompleted: false
  },
  history: {} // { 'YYYY-MM-DD': { ayahs: 12, completed: true } }
};

/**
 * Load persisted goal state from localStorage
 */
export function getGoalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initializeState();
    const state = JSON.parse(raw);
    return reconcileTodayState(state);
  } catch (err) {
    console.warn('[quranGoalService] Error loading state:', err);
    return initializeState();
  }
}

function initializeState() {
  const state = JSON.parse(JSON.stringify(DEFAULT_STATE));
  saveGoalState(state);
  return state;
}

export function saveGoalState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('eqra:goal-progress-updated', { detail: state }));
  } catch (err) {
    console.warn('[quranGoalService] Error saving state:', err);
  }
}

/**
 * Checks date rollover. If today has changed, updates streak continuity
 */
function reconcileTodayState(state) {
  const todayStr = getTodayDateString();
  const yesterdayStr = getYesterdayDateString();

  if (!state.today || state.today.date !== todayStr) {
    // Record yesterday's status into history if existed
    if (state.today && state.today.date) {
      const prevDate = state.today.date;
      const wasCompleted = state.today.isCompleted || (state.today.ayahsRead >= (state.activeGoal?.targetPerDay || 5));
      state.history = state.history || {};
      state.history[prevDate] = {
        ayahs: state.today.ayahsRead || 0,
        completed: wasCompleted
      };

      // Check streak breakage:
      // If the last active date was not yesterday and not today, streak resets
      if (state.streak.lastActiveDate !== yesterdayStr && state.streak.lastActiveDate !== todayStr) {
        state.streak.currentStreak = 0;
      }
    }

    // Reset today object for current date
    state.today = {
      date: todayStr,
      ayahsRead: 0,
      readAyahKeys: [],
      minutesRead: 0,
      isCompleted: false
    };

    saveGoalState(state);
  }

  return state;
}

/**
 * Set active preset or custom goal
 */
export function setActiveGoal(goalId, customOptions = {}) {
  const state = getGoalState();
  const preset = GOAL_PRESETS.find(p => p.id === goalId);

  if (preset) {
    state.activeGoal = {
      id: preset.id,
      type: preset.type,
      targetPerDay: preset.targetPerDay,
      customTitle: null,
      startDate: state.activeGoal.startDate || getTodayDateString()
    };
  } else if (goalId === 'custom') {
    state.activeGoal = {
      id: 'custom',
      type: customOptions.type || 'ayahs',
      targetPerDay: Math.max(1, parseInt(customOptions.targetPerDay, 10) || 10),
      customTitle: customOptions.title || null,
      startDate: state.activeGoal.startDate || getTodayDateString()
    };
  }

  // Re-check completion for today based on new target
  const target = state.activeGoal.targetPerDay;
  if (state.today.ayahsRead >= target && !state.today.isCompleted) {
    markTodayCompleted(state);
  }

  saveGoalState(state);
  return state;
}

/**
 * Mark today as completed & increment streak
 */
function markTodayCompleted(state) {
  const todayStr = getTodayDateString();
  const yesterdayStr = getYesterdayDateString();

  state.today.isCompleted = true;

  // If already credited today in streak, don't double count
  if (state.streak.lastActiveDate !== todayStr) {
    if (state.streak.lastActiveDate === yesterdayStr || state.streak.currentStreak === 0) {
      state.streak.currentStreak += 1;
    } else {
      // Grace / New streak
      state.streak.currentStreak = 1;
    }

    state.streak.lastActiveDate = todayStr;
    if (state.streak.currentStreak > (state.streak.longestStreak || 0)) {
      state.streak.longestStreak = state.streak.currentStreak;
    }
  }

  // Record in history
  state.history = state.history || {};
  state.history[todayStr] = {
    ayahs: state.today.ayahsRead,
    completed: true
  };

  window.dispatchEvent(new CustomEvent('eqra:goal-completed', { detail: state }));
}

/**
 * Record an ayah read when browsing or listening in Quran reader
 */
export function recordAyahRead(surahNum, ayahNum) {
  if (!surahNum || !ayahNum) return null;
  const state = getGoalState();
  const key = `${surahNum}:${ayahNum}`;

  state.today.readAyahKeys = state.today.readAyahKeys || [];

  // Avoid duplicate counting for reading the same verse in the same day
  if (!state.today.readAyahKeys.includes(key)) {
    state.today.readAyahKeys.push(key);
    state.today.ayahsRead = state.today.readAyahKeys.length;

    const target = state.activeGoal?.targetPerDay || 5;
    if (state.today.ayahsRead >= target && !state.today.isCompleted) {
      markTodayCompleted(state);
    } else {
      // Update history for today
      state.history = state.history || {};
      state.history[getTodayDateString()] = {
        ayahs: state.today.ayahsRead,
        completed: state.today.isCompleted
      };
    }

    saveGoalState(state);
  }

  return state;
}

/**
 * Quick manual log (e.g. +1, +5, +20 Ayahs, or Full Daily Goal from modal)
 */
export function logManualProgress(ayahsCount = 1) {
  const state = getGoalState();
  const count = Math.max(1, parseInt(ayahsCount, 10) || 1);

  state.today.ayahsRead = (state.today.ayahsRead || 0) + count;
  const target = state.activeGoal?.targetPerDay || 5;

  if (state.today.ayahsRead >= target && !state.today.isCompleted) {
    markTodayCompleted(state);
  } else {
    state.history = state.history || {};
    state.history[getTodayDateString()] = {
      ayahs: state.today.ayahsRead,
      completed: state.today.isCompleted
    };
  }

  saveGoalState(state);
  return state;
}

/**
 * Mark complete directly (e.g., "I recited my goal today offline")
 */
export function markTodayFinishedOffline() {
  const state = getGoalState();
  const target = state.activeGoal?.targetPerDay || 5;
  if (state.today.ayahsRead < target) {
    state.today.ayahsRead = target;
  }
  markTodayCompleted(state);
  saveGoalState(state);
  return state;
}

/**
 * Compute progress summary for UI
 */
export function getGoalProgressSummary() {
  const state = getGoalState();
  const target = Math.max(1, state.activeGoal?.targetPerDay || 5);
  const current = state.today.ayahsRead || 0;
  const percent = Math.min(100, Math.round((current / target) * 100));
  const remaining = Math.max(0, target - current);

  // Active goal metadata
  const preset = GOAL_PRESETS.find(p => p.id === state.activeGoal.id);
  const titleBn = preset ? preset.titleBn : (state.activeGoal.customTitle || `কাস্টম লক্ষ্য (${target} আয়াত/দিন)`);
  const titleEn = preset ? preset.titleEn : (state.activeGoal.customTitle || `Custom Goal (${target} Ayahs/day)`);

  return {
    state,
    target,
    current,
    percent,
    remaining,
    isCompleted: state.today.isCompleted || current >= target,
    currentStreak: state.streak.currentStreak || 0,
    longestStreak: state.streak.longestStreak || 0,
    titleBn,
    titleEn,
    preset
  };
}

/**
 * Get 7-Day Activity data (Saturday to Friday or last 7 rolling days)
 */
export function getWeeklyActivity() {
  const state = getGoalState();
  const today = new Date();
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${day}`;

    const isToday = i === 0;
    const historyItem = state.history?.[dateStr];

    let completed = false;
    let ayahs = 0;

    if (isToday) {
      ayahs = state.today.ayahsRead || 0;
      completed = state.today.isCompleted || ayahs >= (state.activeGoal?.targetPerDay || 5);
    } else if (historyItem) {
      ayahs = historyItem.ayahs || 0;
      completed = historyItem.completed || false;
    }

    days.push({
      dateStr,
      date: d,
      dayNameBn: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'][d.getDay()],
      dayNameEn: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()],
      ayahs,
      completed,
      isToday
    });
  }

  return days;
}

/**
 * Get monthly activity map for calendar/heatmap (last 30 days)
 */
export function getRecentActivityGrid(numDays = 30) {
  const state = getGoalState();
  const today = new Date();
  const result = [];

  for (let i = numDays - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${day}`;

    const isToday = i === 0;
    let ayahs = 0;
    let completed = false;

    if (isToday) {
      ayahs = state.today.ayahsRead || 0;
      completed = state.today.isCompleted;
    } else if (state.history?.[dateStr]) {
      ayahs = state.history[dateStr].ayahs || 0;
      completed = state.history[dateStr].completed;
    }

    result.push({
      dateStr,
      dayNum: d.getDate(),
      ayahs,
      completed,
      isToday
    });
  }

  return result;
}
