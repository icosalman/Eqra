// ============================================
// EQRA — Quran Service
// Hybrid: Preloaded + API on-demand + LocalStorage Caching
// ============================================

import { SURAHS_METADATA } from '../data/quranMetadata.js';
import { PRELOADED_SURAHS } from '../data/popularSurahs.js';
import { HADITHS_DATA } from '../data/hadiths.js';
import { DUAS_DATA } from '../data/duas.js';
import { PORO_CHAPTERS } from '../data/poroBookData.js';

const cache = new Map();

/** Get all 114 Surahs metadata */
export function getAllSurahs() {
  return SURAHS_METADATA;
}

/** Find Surah metadata by number or slug */
export function getSurahMeta(identifier) {
  if (!identifier) return null;
  const num = parseInt(identifier, 10);
  if (!isNaN(num)) {
    return SURAHS_METADATA.find(s => s.number === num) || null;
  }
  const clean = String(identifier).toLowerCase().trim();
  return SURAHS_METADATA.find(s => s.slug === clean || s.englishName.toLowerCase() === clean) || null;
}

/**
 * Fetch Surah with Arabic, Bangla, English, and Audio
 * @param {number|string} surahNum 
 * @returns {Promise<object>}
 */
export async function getSurah(surahNum) {
  const meta = getSurahMeta(surahNum);
  if (!meta) throw new Error(`Surah not found: ${surahNum}`);
  const num = meta.number;

  // 1. Check in-memory cache
  if (cache.has(num)) {
    return cache.get(num);
  }

  // 2. Check preloaded dataset
  if (PRELOADED_SURAHS[num]) {
    const full = { ...meta, ...PRELOADED_SURAHS[num] };
    cache.set(num, full);
    return full;
  }

  // 3. Check localStorage cache
  const storageKey = `eqra_surah_${num}`;
  try {
    const cached = localStorage.getItem(storageKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      cache.set(num, parsed);
      return parsed;
    }
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }

  // 4. Fetch live from AlQuran Cloud API (Tajweed + Uthmani + Bangla + English + Audio) & Quran.com (IndoPak)
  try {
    const alQuranUrl = `https://api.alquran.cloud/v1/surah/${num}/editions/quran-tajweed,quran-uthmani,bn.bengali,en.sahih,ar.alafasy`;
    const quranComIndoPakUrl = `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${num}`;

    const [alQuranRes, indoPakRes] = await Promise.allSettled([
      fetch(alQuranUrl).then(r => r.ok ? r.json() : null),
      fetch(quranComIndoPakUrl).then(r => r.ok ? r.json() : null).catch(() => null)
    ]);

    const json = alQuranRes.status === 'fulfilled' ? alQuranRes.value : null;
    if (!json || !json.data || json.data.length < 4) {
      throw new Error('Incomplete data received from API');
    }

    const [tajweedEdition, arEdition, bnEdition, enEdition, audioEdition] = json.data;
    const indoPakVerses = indoPakRes.status === 'fulfilled' && indoPakRes.value?.verses ? indoPakRes.value.verses : [];

    const ayahs = arEdition.ayahs.map((ayah, idx) => {
      const bnAyah = bnEdition?.ayahs?.[idx]?.text || '';
      const enAyah = enEdition?.ayahs?.[idx]?.text || '';
      const audioUrl = audioEdition?.ayahs?.[idx]?.audio || `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`;
      const tajweedText = tajweedEdition?.ayahs?.[idx]?.text || ayah.text;
      const indopakText = indoPakVerses[idx]?.text_indopak || '';

      return {
        numberInSurah: ayah.numberInSurah,
        arabic: ayah.text,
        tajweed: tajweedText,
        indopak: indopakText,
        bangla: bnAyah,
        english: enAyah,
        audio: audioUrl
      };
    });

    const surahData = {
      ...meta,
      ayahs
    };

    cache.set(num, surahData);
    try {
      localStorage.setItem(storageKey, JSON.stringify(surahData));
    } catch (e) {
      // Storage quota exceeded or disabled, ignore
    }

    return surahData;
  } catch (err) {
    console.error(`[QuranService] Error loading Surah ${num}:`, err);
    // Fallback minimal structure so page doesn't crash
    return {
      ...meta,
      ayahs: [
        {
          numberInSurah: 1,
          arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
          bangla: "ইন্টারনেট সংযোগ চেক করুন অথবা কিছুক্ষণের মধ্যে পুনরায় চেষ্টা করুন।",
          english: "Please check your internet connection or try again shortly.",
          audio: `https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3`
        }
      ]
    };
  }
}

const recitationCache = new Map();

/**
 * Fetch Quran.com chapter recitation with sub-second timestamps & word-by-word segments
 * Reciter 7: Mishary Rashid Al-Afasy
 * @param {number|string} surahNum 
 * @returns {Promise<{ audioUrl: string, timestamps: Array }|null>}
 */
export async function getSurahRecitation(surahNum) {
  const num = parseInt(surahNum, 10);
  if (isNaN(num) || num < 1 || num > 114) return null;

  if (recitationCache.has(num)) {
    return recitationCache.get(num);
  }

  const storageKey = `eqra_recitation_v4_${num}`;
  try {
    const cached = localStorage.getItem(storageKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      recitationCache.set(num, parsed);
      return parsed;
    }
  } catch (e) {
    // ignore
  }

  try {
    const url = `https://api.quran.com/api/v4/chapter_recitations/7/${num}?segments=true`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (!data?.audio_file?.audio_url || !data?.audio_file?.timestamps) {
      throw new Error('Invalid recitation payload');
    }

    const normalized = {
      surahNumber: num,
      audioUrl: data.audio_file.audio_url,
      timestamps: data.audio_file.timestamps.map(t => {
        const parts = (t.verse_key || '').split(':');
        return {
          verseKey: t.verse_key,
          ayahNumber: parts.length > 1 ? parseInt(parts[1], 10) : 1,
          from: t.timestamp_from,
          to: t.timestamp_to,
          duration: t.duration,
          segments: t.segments || []
        };
      })
    };

    recitationCache.set(num, normalized);
    try {
      localStorage.setItem(storageKey, JSON.stringify(normalized));
    } catch {
      // Storage quota
    }

    return normalized;
  } catch (err) {
    console.warn(`[QuranService] Recitation timestamps unavailable for Surah ${num}:`, err);
    return null;
  }
}


import { searchAllIslamic, parseAyahQuery, fetchSpecificAyah, searchThematicTopics, searchOnlineQuranAyahs } from './islamicSearchService.js';

/**
 * Universal Search across Surahs, Hadith, Duas, Thematic Topics & Verses
 * @param {string} query 
 * @param {string} lang 
 */
export function searchAll(query, lang = 'bn') {
  return searchAllIslamic(query, lang);
}

export {
  parseAyahQuery,
  fetchSpecificAyah,
  searchThematicTopics,
  searchOnlineQuranAyahs
};

export default {
  getAllSurahs,
  getSurahMeta,
  getSurah,
  searchAll,
  parseAyahQuery,
  fetchSpecificAyah,
  searchThematicTopics,
  searchOnlineQuranAyahs
};

