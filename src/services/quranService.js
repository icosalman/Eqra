// ============================================
// EQRA — Quran Service
// Hybrid: Preloaded + API on-demand + LocalStorage Caching
// ============================================

import { SURAHS_METADATA } from '../data/quranMetadata.js';
import { PRELOADED_SURAHS } from '../data/popularSurahs.js';
import { HADITHS_DATA } from '../data/hadiths.js';
import { DUAS_DATA } from '../data/duas.js';

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

  // 4. Fetch live from AlQuran Cloud API with Arabic + Bangla + English + Audio
  try {
    const url = `https://api.alquran.cloud/v1/surah/${num}/editions/quran-uthmani,bn.bengali,en.sahih,ar.alafasy`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Network response error: ${res.status}`);
    const json = await res.json();

    if (!json.data || json.data.length < 3) {
      throw new Error('Incomplete data received from API');
    }

    const [arEdition, bnEdition, enEdition, audioEdition] = json.data;
    const ayahs = arEdition.ayahs.map((ayah, idx) => {
      const bnAyah = bnEdition?.ayahs?.[idx]?.text || '';
      const enAyah = enEdition?.ayahs?.[idx]?.text || '';
      const audioUrl = audioEdition?.ayahs?.[idx]?.audio || `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`;

      return {
        numberInSurah: ayah.numberInSurah,
        arabic: ayah.text,
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

/**
 * Universal Search across Surahs, Hadith, and Duas
 * @param {string} query 
 * @param {string} lang 
 */
export function searchAll(query, lang = 'bn') {
  if (!query || query.trim().length < 2) {
    return { surahs: [], hadiths: [], duas: [] };
  }

  const q = query.toLowerCase().trim();

  // Search Surahs (by number, Bangla name, English name, Arabic name, meaning)
  const surahs = SURAHS_METADATA.filter(s => {
    return (
      String(s.number) === q ||
      s.banglaName.toLowerCase().includes(q) ||
      s.englishName.toLowerCase().includes(q) ||
      s.name.includes(q) ||
      s.banglaMeaning.toLowerCase().includes(q) ||
      s.englishMeaning.toLowerCase().includes(q)
    );
  }).slice(0, 10);

  // Search Hadith
  const hadiths = HADITHS_DATA.filter(h => {
    return (
      h.bangla.toLowerCase().includes(q) ||
      h.english.toLowerCase().includes(q) ||
      h.arabic.includes(q) ||
      h.narratorBangla.toLowerCase().includes(q) ||
      h.reference.toLowerCase().includes(q) ||
      h.tags.some(t => t.toLowerCase().includes(q))
    );
  }).slice(0, 8);

  // Search Duas
  const duas = DUAS_DATA.filter(d => {
    return (
      d.titleBangla.toLowerCase().includes(q) ||
      d.titleEnglish.toLowerCase().includes(q) ||
      d.bangla.toLowerCase().includes(q) ||
      d.english.toLowerCase().includes(q) ||
      d.transliteration.toLowerCase().includes(q) ||
      d.reference.toLowerCase().includes(q)
    );
  }).slice(0, 8);

  return { surahs, hadiths, duas };
}

export default {
  getAllSurahs,
  getSurahMeta,
  getSurah,
  searchAll
};
