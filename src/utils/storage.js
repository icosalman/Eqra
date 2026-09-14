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
  if (index > -1) {
    list.splice(index, 1);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list));
    return false; // removed
  } else {
    list.unshift({
      ...item,
      savedAt: new Date().toISOString()
    });
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list));
    return true; // added
  }
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
