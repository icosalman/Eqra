// ============================================
// EQRA — Progress Backup & Restore
// Moves reading progress, goals, streak and bookmarks between devices
// without an account. Restoring MERGES rather than overwrites, so
// carrying a phone's progress to a laptop never loses the laptop's.
//
// The read/merge/write split here is deliberate: a real account-backed
// sync only has to swap the transport, not the merge rules.
// ============================================

const KEYS = {
  goal: 'eqra_quran_goal_v1',
  progress: 'eqra_reading_progress',
  lastRead: 'eqra_last_read',
  bookmarks: 'eqra_bookmarks',
  settings: 'eqra_settings'
};

const FORMAT = 'eqra-progress';
const FORMAT_VERSION = 1;

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/** Snapshot everything worth carrying to another device. */
export function collectSnapshot() {
  return {
    format: FORMAT,
    version: FORMAT_VERSION,
    exportedAt: new Date().toISOString(),
    goal: readJSON(KEYS.goal, null),
    progress: readJSON(KEYS.progress, {}),
    lastRead: readJSON(KEYS.lastRead, null),
    bookmarks: readJSON(KEYS.bookmarks, []),
    settings: readJSON(KEYS.settings, null)
  };
}

/** UTF-8 safe base64, so Bangla titles inside bookmarks survive the trip. */
function toBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  bytes.forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin);
}

function fromBase64(b64) {
  const bin = atob(b64.replace(/\s+/g, ''));
  const bytes = Uint8Array.from(bin, ch => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/** A single pasteable string holding the whole snapshot. */
export function exportCode() {
  return toBase64(JSON.stringify(collectSnapshot()));
}

export function exportFileBlob() {
  return new Blob([JSON.stringify(collectSnapshot(), null, 2)], { type: 'application/json' });
}

/** Accepts either the pasted code or the raw JSON of a downloaded backup. */
export function parseSnapshot(input) {
  const text = String(input || '').trim();
  if (!text) throw new Error('EMPTY');

  let data;
  try {
    data = JSON.parse(text.startsWith('{') ? text : fromBase64(text));
  } catch {
    throw new Error('UNREADABLE');
  }
  if (!data || data.format !== FORMAT) throw new Error('NOT_EQRA');
  if (Number(data.version) > FORMAT_VERSION) throw new Error('NEWER_VERSION');
  return data;
}

// ---------- Merge rules ----------

/** Per surah, the further-along bookmark wins. */
function mergeProgress(mine, theirs) {
  const out = { ...mine };
  for (const [surah, item] of Object.entries(theirs || {})) {
    const current = out[surah];
    if (!current || (Number(item.ayah) || 0) > (Number(current.ayah) || 0)) {
      out[surah] = item;
    }
  }
  return out;
}

function newerOf(a, b) {
  if (!a) return b || null;
  if (!b) return a;
  return new Date(b.updatedAt || 0) > new Date(a.updatedAt || 0) ? b : a;
}

function mergeBookmarks(mine, theirs) {
  const list = Array.isArray(mine) ? [...mine] : [];
  const seen = new Set(list.map(b => b && b.id).filter(Boolean));
  for (const b of Array.isArray(theirs) ? theirs : []) {
    if (b && b.id && !seen.has(b.id)) {
      seen.add(b.id);
      list.push(b);
    }
  }
  return list;
}

/** Keep the best streak and the union of daily history. */
function mergeGoal(mine, theirs) {
  if (!theirs) return mine;
  if (!mine) return theirs;

  const history = { ...(mine.history || {}) };
  for (const [date, entry] of Object.entries(theirs.history || {})) {
    const cur = history[date];
    if (!cur || (Number(entry.ayahs) || 0) > (Number(cur.ayahs) || 0)) history[date] = entry;
  }

  const mineStreak = mine.streak || {};
  const theirStreak = theirs.streak || {};
  const mineActive = new Date(mineStreak.lastActiveDate || 0);
  const theirActive = new Date(theirStreak.lastActiveDate || 0);
  const fresher = theirActive > mineActive ? theirStreak : mineStreak;

  // Today's counters merge on the day itself; an older "today" is history.
  const sameDay = mine.today && theirs.today && mine.today.date === theirs.today.date;
  const today = sameDay
    ? {
        ...mine.today,
        ayahsRead: Math.max(Number(mine.today.ayahsRead) || 0, Number(theirs.today.ayahsRead) || 0),
        minutesRead: Math.max(Number(mine.today.minutesRead) || 0, Number(theirs.today.minutesRead) || 0),
        readAyahKeys: Array.from(new Set([...(mine.today.readAyahKeys || []), ...(theirs.today.readAyahKeys || [])])),
        isCompleted: Boolean(mine.today.isCompleted || theirs.today.isCompleted)
      }
    : (theirs.today && (!mine.today || new Date(theirs.today.date) > new Date(mine.today.date))
        ? theirs.today
        : mine.today);

  return {
    ...mine,
    activeGoal: mine.activeGoal || theirs.activeGoal,
    streak: {
      currentStreak: Number(fresher.currentStreak) || 0,
      longestStreak: Math.max(Number(mineStreak.longestStreak) || 0, Number(theirStreak.longestStreak) || 0),
      lastActiveDate: fresher.lastActiveDate || null
    },
    today,
    history
  };
}

/**
 * Merge a snapshot into this device and report what changed.
 * @param {object} snapshot - from parseSnapshot()
 */
export function applySnapshot(snapshot) {
  const mineProgress = readJSON(KEYS.progress, {});
  const mineBookmarks = readJSON(KEYS.bookmarks, []);
  const mineGoal = readJSON(KEYS.goal, null);

  const progress = mergeProgress(mineProgress, snapshot.progress);
  const bookmarks = mergeBookmarks(mineBookmarks, snapshot.bookmarks);
  const goal = mergeGoal(mineGoal, snapshot.goal);
  const lastRead = newerOf(readJSON(KEYS.lastRead, null), snapshot.lastRead);

  writeJSON(KEYS.progress, progress);
  writeJSON(KEYS.bookmarks, bookmarks);
  if (goal) writeJSON(KEYS.goal, goal);
  if (lastRead) writeJSON(KEYS.lastRead, lastRead);

  const summary = {
    surahsAdvanced: Object.keys(progress).filter(k => {
      const before = mineProgress[k];
      return !before || (progress[k].ayah || 0) > (before.ayah || 0);
    }).length,
    bookmarksAdded: bookmarks.length - (Array.isArray(mineBookmarks) ? mineBookmarks.length : 0),
    totalSurahs: Object.keys(progress).length,
    streak: goal && goal.streak ? goal.streak.currentStreak : 0
  };

  window.dispatchEvent(new CustomEvent('eqra:goal-progress-updated', { detail: goal }));
  if (lastRead) window.dispatchEvent(new CustomEvent('eqra:progress-updated', { detail: lastRead }));
  return summary;
}

/** Numbers shown next to the export button so the code is not a black box. */
export function snapshotStats() {
  const snap = collectSnapshot();
  return {
    surahs: Object.keys(snap.progress || {}).length,
    bookmarks: Array.isArray(snap.bookmarks) ? snap.bookmarks.length : 0,
    streak: snap.goal && snap.goal.streak ? snap.goal.streak.currentStreak : 0,
    days: snap.goal && snap.goal.history ? Object.keys(snap.goal.history).length : 0
  };
}
