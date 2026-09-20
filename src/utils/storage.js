// ============================================
// EQRA — Local Storage & Bookmarks Manager
// ============================================

const BOOKMARKS_KEY = 'eqra_bookmarks';
const SETTINGS_KEY = 'eqra_settings';

export function getBookmarks() {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isBookmarked(id) {
  const list = getBookmarks();
  return list.some(item => item.id === id);
}

export function toggleBookmark(item) {
  const list = getBookmarks();
  const index = list.findIndex(i => i.id === item.id);
  let added = false;
  if (index > -1) {
    list.splice(index, 1);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list));
    added = false;
  } else {
    list.unshift({
      ...item,
      savedAt: new Date().toISOString()
    });
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list));
    added = true;
  }

  // Dispatch event for UI updates (e.g. Header bookmark badge count)
  window.dispatchEvent(new CustomEvent('eqra:bookmarks-updated', { 
    detail: { count: list.length, added, item } 
  }));

  return added;
}

export function getSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : { fontSize: 'md', displayMode: 'all', theme: 'light' };
  } catch {
    return { fontSize: 'md', displayMode: 'all', theme: 'light' };
  }
}

export function saveSettings(settings) {
  try {
    const current = getSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return settings;
  }
}

// ============================================
// Surah Reading & Listening Progress Bookmarks
// ============================================

const PROGRESS_KEY = 'eqra_reading_progress';
const LAST_READ_KEY = 'eqra_last_read';

export function getAllProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getSurahProgress(surahNum) {
  if (!surahNum) return null;
  const all = getAllProgress();
  return all[String(surahNum)] || null;
}

export function saveSurahProgress(surahNum, ayahNum, totalAyahs = 0) {
  if (!surahNum || !ayahNum) return null;
  try {
    const all = getAllProgress();
    const num = String(surahNum);
    const aNum = parseInt(ayahNum, 10);
    const total = parseInt(totalAyahs, 10) || 1;
    const percent = Math.min(100, Math.round((aNum / total) * 100));

    const progressItem = {
      surah: parseInt(surahNum, 10),
      ayah: aNum,
      totalAyahs: total,
      percent,
      updatedAt: new Date().toISOString()
    };

    all[num] = progressItem;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
    localStorage.setItem(LAST_READ_KEY, JSON.stringify(progressItem));

    // Dispatch event so active components can update in real-time
    window.dispatchEvent(new CustomEvent('eqra:progress-updated', { detail: progressItem }));
    return progressItem;
  } catch (e) {
    console.warn('Failed to save reading progress:', e);
    return null;
  }
}

export function removeSurahProgress(surahNum) {
  if (!surahNum) return false;
  try {
    const all = getAllProgress();
    const num = String(surahNum);
    if (all[num]) {
      delete all[num];
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
      window.dispatchEvent(new CustomEvent('eqra:progress-updated', { detail: { surah: parseInt(surahNum, 10), removed: true } }));
      return true;
    }
    return false;
  } catch (e) {
    console.warn('Failed to remove reading progress:', e);
    return false;
  }
}

export function getLastRead() {
  try {
    const raw = localStorage.getItem(LAST_READ_KEY);
    if (raw) return JSON.parse(raw);
    const all = getAllProgress();
    const keys = Object.keys(all);
    if (keys.length === 0) return null;
    // Return the one with the latest updatedAt
    return keys.map(k => all[k]).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0] || null;
  } catch {
    return null;
  }
}



