// ============================================
// EQRA — Intelligent Islamic Search Engine Service
// Direct Ayah Resolver + Thematic Topics + Surahs + Hadith + Duas + Live Quran API
// ============================================

import { SURAHS_METADATA } from '../data/quranMetadata.js';
import { PRELOADED_SURAHS } from '../data/popularSurahs.js';
import { ISLAMIC_TOPICS } from '../data/islamicTopicsData.js';
import { HADITHS_DATA } from '../data/hadiths.js';
import { DUAS_DATA } from '../data/duas.js';
import { PORO_CHAPTERS } from '../data/poroBookData.js';
import { BUKHARI_BOOKS, MUSLIM_BOOKS } from '../data/hadithBooksMetadata.js';
import { extractSearchTokens } from '../utils/banglishPhonetics.js';

// Cache for resolved Ayahs & online search queries
const ayahCache = new Map();
const onlineSearchCache = new Map();

/**
 * Convert Bengali digits (০-৯) to Western digits (0-9)
 */
export function bnToEnDigits(str = '') {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(str).replace(/[০-৯]/g, (d) => bnDigits.indexOf(d));
}

/**
 * Normalizes user queries by cleaning whitespace, lowercasing, and expanding synonyms
 */
export function normalizeQuery(rawQuery = '') {
  let q = String(rawQuery).trim().toLowerCase();
  q = bnToEnDigits(q);
  return q;
}

/**
 * Famous named verses mapping (e.g., Ayatul Kursi, Amanar Rasul)
 */
const FAMOUS_VERSES = [
  {
    patterns: ['আয়াতুল কুরসি', 'আয়াতুল কুরসী', 'ayatul kursi', 'ayatul kursee', 'kursi', 'কুরসি'],
    surah: 2,
    ayah: 255,
    titleBn: 'আয়াতুল কুরসি (সূরা আল-বাকারাহ্ ২৫৫)',
    titleEn: 'Ayatul Kursi (Surah Al-Baqarah 2:255)'
  },
  {
    patterns: ['আমানার রাসুল', 'আমানার রাসূল', 'amanar rasul', 'amana rasul', 'বাকারা ২৮৫'],
    surah: 2,
    ayah: 285,
    titleBn: 'আমানার রাসূল (সূরা আল-বাকারাহ্ ২৮৫-২৮৬)',
    titleEn: 'Amanar Rasul (Surah Al-Baqarah 2:285)'
  },
  {
    patterns: ['ইউনুসের দোয়া', 'দোয়া ইউনুস', 'দোয়া ইউনুসের', 'dua yunus', 'la ilaha illa anta'],
    surah: 21,
    ayah: 87,
    titleBn: 'দোয়া ইউনুস (সূরা আল-আম্বিয়া ৮৭)',
    titleEn: 'Dua Yunus (Surah Al-Anbiya 21:87)'
  }
];

const SURAH_ALIASES = {
  1: ['fatiha', 'fatihah', 'ফাতিহা'],
  2: ['baqarah', 'baqara', 'বাকারা', 'বাকারাহ'],
  18: ['kahf', 'kahaf', 'কাহফ', 'কাহাফ'],
  36: ['yaseen', 'yasin', 'ya-sin', 'ইয়াসীন', 'ইয়াসিন'],
  55: ['rahman', 'ar-rahman', 'রহমান', 'আর-রহমান'],
  56: ['waqiah', 'waqia', 'ওয়াকিয়া', 'ওয়াক্বিয়া'],
  67: ['mulk', 'al-mulk', 'মুলক', 'আল-মুলক'],
  112: ['ikhlas', 'ইখলাস'],
  113: ['falaq', 'ফালাক'],
  114: ['nas', 'নাস']
};

/**
 * Parses user input to detect if it refers to a specific Surah & Ayah
 * Examples: '2:255', '২:২৫৫', 'বাকারা ২৫৫', 'সূরা কাহফ ১০', 'Surah 36 Ayah 1', 'আয়াতুল কুরসি'
 */
export function parseAyahQuery(rawQuery = '') {
  const normalized = normalizeQuery(rawQuery);
  if (!normalized) return null;

  // 1. Check famous named verses
  for (const fv of FAMOUS_VERSES) {
    if (fv.patterns.some(p => normalized.includes(p.toLowerCase()))) {
      return {
        isDirectAyah: true,
        surahNumber: fv.surah,
        ayahNumber: fv.ayah,
        displayNameBn: fv.titleBn,
        displayNameEn: fv.titleEn
      };
    }
  }

  // 2. Numeric pattern: "2:255" or "36:1" or "112:1"
  const colonMatch = normalized.match(/^(\d{1,3})\s*[:\-\/]\s*(\d{1,3})$/);
  if (colonMatch) {
    const sNum = parseInt(colonMatch[1], 10);
    const aNum = parseInt(colonMatch[2], 10);
    const meta = SURAHS_METADATA.find(s => s.number === sNum);
    if (meta && aNum >= 1 && aNum <= meta.ayahs) {
      return {
        isDirectAyah: true,
        surahNumber: sNum,
        ayahNumber: aNum,
        surahMeta: meta,
        displayNameBn: `${meta.banglaName} : আয়াত ${aNum}`,
        displayNameEn: `${meta.englishName} : Ayah ${aNum}`
      };
    }
  }

  // 3. Check Surah aliases (e.g. Yaseen 1, Mulk 2, রহমান ১০)
  for (const [sNumStr, aliases] of Object.entries(SURAH_ALIASES)) {
    const sNum = parseInt(sNumStr, 10);
    const meta = SURAHS_METADATA.find(s => s.number === sNum);
    if (!meta) continue;

    for (const alias of aliases) {
      if (normalized.includes(alias)) {
        const rest = normalized.replace(alias, '').replace(/^(সূরা|সুরা|surah|ayah|ayat|আয়াত|নং|\s|:)+/gi, '').trim();
        const ayahNumMatch = rest.match(/^(\d{1,3})/);
        if (ayahNumMatch) {
          const aNum = parseInt(ayahNumMatch[1], 10);
          if (aNum >= 1 && aNum <= meta.ayahs) {
            return {
              isDirectAyah: true,
              surahNumber: sNum,
              ayahNumber: aNum,
              surahMeta: meta,
              displayNameBn: `${meta.banglaName} : আয়াত ${aNum}`,
              displayNameEn: `${meta.englishName} : Ayah ${aNum}`
            };
          }
        }
      }
    }
  }

  // 3. Name + Number pattern: "বাকারা ২৫৫", "সূরা কাহফ ১০", "Yaseen 1"
  // Try matching any Surah name/slug
  for (const s of SURAHS_METADATA) {
    const rawBn = s.banglaName.toLowerCase();
    const cleanBn = rawBn.replace(/^(সূরা|সুরা)\s*/i, '').trim();
    const coreBn = cleanBn.replace(/^(আল|আন|আশ|আর|আত|আদ|আয|আক|আব|আম|আহ)[-\s]/i, '').trim();
    const rawEn = s.englishName.toLowerCase();
    const coreEn = rawEn.replace(/^(al|an|ash|ar|at|ad|az|al-)[-\s]/i, '').trim();

    const names = [
      rawEn,
      coreEn,
      rawBn,
      cleanBn,
      coreBn,
      s.slug.toLowerCase(),
      s.slug.toLowerCase().replace(/^(al|an|ash|ar|at|ad|az)-/i, ''),
      s.name // Arabic
    ];

    for (const name of names) {
      if (name.length >= 2 && (normalized.startsWith(name) || normalized.includes(name))) {
        // Extract any following number
        const rest = normalized.replace(name, '').replace(/^(সূরা|সুরা|surah|ayah|ayat|আয়াত|নং|\s|:)+/gi, '').trim();
        const ayahNumMatch = rest.match(/^(\d{1,3})/);
        if (ayahNumMatch) {
          const aNum = parseInt(ayahNumMatch[1], 10);
          if (aNum >= 1 && aNum <= s.ayahs) {
            return {
              isDirectAyah: true,
              surahNumber: s.number,
              ayahNumber: aNum,
              surahMeta: s,
              displayNameBn: `${s.banglaName} : আয়াত ${aNum}`,
              displayNameEn: `${s.englishName} : Ayah ${aNum}`
            };
          }
        }
      }
    }
  }

  return null;
}

/**
 * Fetch a specific Ayah with Tajweed, Bengali, English, and Audio
 */
export async function fetchSpecificAyah(surahNumber, ayahNumber) {
  const sNum = parseInt(surahNumber, 10);
  const aNum = parseInt(ayahNumber, 10);
  const cacheKey = `eqra_single_ayah_${sNum}_${aNum}`;

  if (ayahCache.has(cacheKey)) {
    return ayahCache.get(cacheKey);
  }

  // Check localStorage
  try {
    const stored = localStorage.getItem(cacheKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      ayahCache.set(cacheKey, parsed);
      return parsed;
    }
  } catch (e) {
    // ignore
  }

  const meta = SURAHS_METADATA.find(s => s.number === sNum);

  // 1. Check preloaded dataset
  if (PRELOADED_SURAHS[sNum]) {
    const sData = PRELOADED_SURAHS[sNum];
    const ayah = sData.ayahs.find(a => a.numberInSurah === aNum);
    if (ayah) {
      const res = {
        surahNumber: sNum,
        ayahNumber: aNum,
        surahNameBn: meta ? meta.banglaName : `সূরা ${sNum}`,
        surahNameEn: meta ? meta.englishName : `Surah ${sNum}`,
        surahNameAr: meta ? meta.name : '',
        totalAyahs: meta ? meta.ayahs : sData.numberOfAyahs,
        arabic: ayah.arabic,
        tajweed: ayah.tajweed || ayah.arabic,
        indopak: ayah.indopak || ayah.arabic,
        bangla: ayah.bangla,
        english: ayah.english,
        audio: ayah.audio || `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number || aNum}.mp3`
      };
      ayahCache.set(cacheKey, res);
      return res;
    }
  }

  // 2. Fetch live from AlQuran Cloud API
  try {
    const url = `https://api.alquran.cloud/v1/ayah/${sNum}:${aNum}/editions/quran-tajweed,quran-uthmani,bn.bengali,en.sahih,ar.alafasy`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json = await response.json();

    if (!json?.data || json.data.length < 4) {
      throw new Error('Incomplete data');
    }

    const [tajweedEd, uthmaniEd, bnEd, enEd, audioEd] = json.data;

    const res = {
      surahNumber: sNum,
      ayahNumber: aNum,
      surahNameBn: meta ? meta.banglaName : (bnEd?.surah?.name || `সূরা ${sNum}`),
      surahNameEn: meta ? meta.englishName : (enEd?.surah?.englishName || `Surah ${sNum}`),
      surahNameAr: meta ? meta.name : (uthmaniEd?.surah?.name || ''),
      totalAyahs: meta ? meta.ayahs : (uthmaniEd?.surah?.numberOfAyahs || 0),
      arabic: uthmaniEd?.text || tajweedEd?.text || '',
      tajweed: tajweedEd?.text || uthmaniEd?.text || '',
      indopak: uthmaniEd?.text || '',
      bangla: bnEd?.text || '',
      english: enEd?.text || '',
      audio: audioEd?.audio || `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${uthmaniEd?.number || 1}.mp3`
    };

    ayahCache.set(cacheKey, res);
    try {
      localStorage.setItem(cacheKey, JSON.stringify(res));
    } catch {}

    return res;
  } catch (err) {
    console.warn(`[IslamicSearch] Failed to fetch Ayah ${sNum}:${aNum}:`, err);
    return null;
  }
}

/**
 * Generates an instant, direct Islamic Answer / Insight card based on the matched topic
 * and primary Quranic verse & Sahih Hadith
 */
export function generateDirectIslamicAnswer(rawQuery = '', matchedTopics = []) {
  if (!matchedTopics || matchedTopics.length === 0) return null;

  const topTopic = matchedTopics[0];
  if (!topTopic || (topTopic.searchScore && topTopic.searchScore < 10)) {
    return null;
  }

  const primaryAyah = topTopic.quranAyahs?.[0] || null;
  const primaryHadith = topTopic.hadiths?.[0] || null;

  return {
    topicId: topTopic.id,
    titleBn: topTopic.titleBn,
    titleEn: topTopic.titleEn,
    icon: topTopic.icon || '📖',
    categoryBn: topTopic.categoryBn,
    categoryEn: topTopic.category,
    summaryBn: topTopic.summaryBn,
    summaryEn: topTopic.summaryEn,
    primaryAyah: primaryAyah,
    primaryHadith: primaryHadith,
    dua: topTopic.actionableDua || null,
    practicalGuidance: topTopic.practicalGuidance || null,
    allAyahsCount: topTopic.quranAyahs?.length || 0,
    allHadithsCount: topTopic.hadiths?.length || 0
  };
}

/**
 * Search curated Islamic Thematic Knowledge Base using Banglish phonetics + semantic expansion
 */
export function searchThematicTopics(rawQuery = '', lang = 'bn') {
  if (!rawQuery || rawQuery.trim().length < 2) return [];

  const q = normalizeQuery(rawQuery);
  const semanticTokens = extractSearchTokens(rawQuery);

  // Normalize Bengali spelling variants (e.g. নামাজ <-> নামায, রোজা <-> রোযা, জাকাত <-> যাকাত)
  const expandedTokens = new Set([...semanticTokens, q]);
  if (q.includes('নামাজ')) expandedTokens.add(q.replace(/নামাজ/g, 'নামায'));
  if (q.includes('নামায')) expandedTokens.add(q.replace(/নামায/g, 'নামাজ'));
  if (q.includes('রোজা')) expandedTokens.add(q.replace(/রোজা/g, 'রোযা'));
  if (q.includes('রোযা')) expandedTokens.add(q.replace(/রোযা/g, 'রোজা'));
  if (q.includes('জাকাত')) expandedTokens.add(q.replace(/জাকাত/g, 'যাকাত'));
  if (q.includes('যাকাত')) expandedTokens.add(q.replace(/যাকাত/g, 'জাকাত'));

  const tokenList = Array.from(expandedTokens).filter(t => t && t.length >= 2);

  const results = [];

  for (const topic of ISLAMIC_TOPICS) {
    let score = 0;
    const titleBnLow = (topic.titleBn || '').toLowerCase();
    const titleEnLow = (topic.titleEn || '').toLowerCase();
    const summaryBnLow = (topic.summaryBn || '').toLowerCase();
    const summaryEnLow = (topic.summaryEn || '').toLowerCase();
    const keywordsLow = (topic.keywords || []).map(k => k.toLowerCase());

    // 1. Exact full query match
    if (titleBnLow.includes(q) || titleEnLow.includes(q)) {
      score += 40;
    }
    if (keywordsLow.some(k => k === q || q.includes(k) || k.includes(q))) {
      score += 35;
    }

    // 2. Multi-token scoring from Banglish & Bengali semantics
    for (const token of tokenList) {
      const tLow = token.toLowerCase();

      // Direct keyword hit
      if (keywordsLow.includes(tLow)) {
        score += 25;
      } else if (keywordsLow.some(k => k.includes(tLow) || tLow.includes(k))) {
        score += 15;
      }

      // Title hit
      if (titleBnLow.includes(tLow) || titleEnLow.includes(tLow)) {
        score += 20;
      }

      // Summary hit
      if (summaryBnLow.includes(tLow) || summaryEnLow.includes(tLow)) {
        score += 10;
      }

      // Quran Ayahs hit
      if (topic.quranAyahs?.some(a => (a.bangla || '').toLowerCase().includes(tLow) || (a.english || '').toLowerCase().includes(tLow))) {
        score += 8;
      }

      // Hadith hit
      if (topic.hadiths?.some(h => (h.bangla || '').toLowerCase().includes(tLow) || (h.english || '').toLowerCase().includes(tLow))) {
        score += 8;
      }
    }

    if (score > 0) {
      results.push({
        ...topic,
        searchScore: score
      });
    }
  }

  return results.sort((a, b) => b.searchScore - a.searchScore).slice(0, 6);
}

/**
 * Universal Unified Search across all Islamic resources:
 * Surahs, Direct Ayah, Thematic Topics, Hadiths, Duas, Poro Chapters
 */
export function searchAllIslamic(rawQuery = '', lang = 'bn') {
  if (!rawQuery || rawQuery.trim().length < 2) {
    return {
      directAyahQuery: null,
      directAnswer: null,
      topics: [],
      surahs: [],
      hadiths: [],
      duas: [],
      poroChapters: [],
      hadithBooks: []
    };
  }

  const q = normalizeQuery(rawQuery);
  const semanticTokens = extractSearchTokens(rawQuery);
  const searchTokens = Array.from(new Set([q, ...semanticTokens])).filter(t => t && t.length >= 2);

  // 1. Check for Direct Ayah reference
  const directAyahQuery = parseAyahQuery(rawQuery);

  // 2. Search Surahs (Number, Bangla name, English name, Arabic name, meaning)
  const surahs = SURAHS_METADATA.filter(s => {
    const bnNameClean = s.banglaName.replace(/^(সূরা|সুরা)\s*/i, '').toLowerCase();
    return (
      String(s.number) === q ||
      s.banglaName.toLowerCase().includes(q) ||
      bnNameClean.includes(q) ||
      s.englishName.toLowerCase().includes(q) ||
      s.name.includes(q) ||
      s.banglaMeaning.toLowerCase().includes(q) ||
      s.englishMeaning.toLowerCase().includes(q) ||
      searchTokens.some(t => bnNameClean.includes(t.toLowerCase()) || s.englishName.toLowerCase().includes(t.toLowerCase()))
    );
  }).slice(0, 8);

  // 3. Search Thematic Islamic Knowledge Base
  const topics = searchThematicTopics(rawQuery, lang);

  // 4. Generate Direct Islamic Answer card
  const directAnswer = generateDirectIslamicAnswer(rawQuery, topics);

  // 5. Search Hadiths (Curated collection) with multi-token support
  const hadiths = HADITHS_DATA.filter(h => {
    const hBn = (h.bangla || '').toLowerCase();
    const hEn = (h.english || '').toLowerCase();
    const hAr = h.arabic || '';
    const hNarrator = (h.narratorBangla || '').toLowerCase();
    const hRef = (h.reference || '').toLowerCase();
    const hTags = (h.tags || []).map(t => t.toLowerCase());

    return searchTokens.some(token => {
      const t = token.toLowerCase();
      return (
        hTags.some(tag => tag.includes(t) || t.includes(tag)) ||
        hBn.includes(t) ||
        hEn.includes(t) ||
        hNarrator.includes(t) ||
        hRef.includes(t) ||
        hAr.includes(token)
      );
    });
  }).slice(0, 8);

  // 6. Search Hadith Books metadata (Bukhari & Muslim)
  const allBooks = [...BUKHARI_BOOKS.map(b => ({ ...b, collection: 'bukhari' })), ...MUSLIM_BOOKS.map(b => ({ ...b, collection: 'muslim' }))];
  const hadithBooks = allBooks.filter(b => {
    return (
      b.nameBn.toLowerCase().includes(q) ||
      b.nameEn.toLowerCase().includes(q) ||
      String(b.book) === q
    );
  }).slice(0, 6);

  // 7. Search Duas with multi-token support
  const duas = DUAS_DATA.filter(d => {
    const dTitleBn = (d.titleBangla || '').toLowerCase();
    const dTitleEn = (d.titleEnglish || '').toLowerCase();
    const dBn = (d.bangla || '').toLowerCase();
    const dEn = (d.english || '').toLowerCase();
    const dTrans = (d.transliteration || '').toLowerCase();
    const dRef = (d.reference || '').toLowerCase();

    return searchTokens.some(token => {
      const t = token.toLowerCase();
      return (
        dTitleBn.includes(t) ||
        dTitleEn.includes(t) ||
        dBn.includes(t) ||
        dEn.includes(t) ||
        dTrans.includes(t) ||
        dRef.includes(t)
      );
    });
  }).slice(0, 8);

  // 8. Search Poro Book Chapters
  const poroChapters = PORO_CHAPTERS.filter(c => {
    return (
      c.titleBangla.toLowerCase().includes(q) ||
      c.titleEnglish.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q) ||
      c.keyQuote.toLowerCase().includes(q)
    );
  }).slice(0, 6);

  return {
    directAyahQuery,
    directAnswer,
    topics,
    surahs,
    hadiths,
    hadithBooks,
    duas,
    poroChapters
  };
}

/**
 * Async live Quran Ayah search via AlQuran Cloud API
 * Performs full-text search across Quranic verses
 */
export async function searchOnlineQuranAyahs(rawQuery = '', lang = 'bn') {
  const q = normalizeQuery(rawQuery);
  if (!q || q.length < 3) return [];

  // Check cache
  const cacheKey = `eqra_quran_search_${q}_${lang}`;
  if (onlineSearchCache.has(cacheKey)) {
    return onlineSearchCache.get(cacheKey);
  }

  try {
    // AlQuran Cloud Bengali edition: 'bn.bengali'
    // If query is English/Roman, use 'en.sahih'
    const isBengali = /[\u0980-\u09FF]/.test(q);
    const edition = isBengali ? 'bn.bengali' : 'en.sahih';

    // Normalize common Bengali terms for Muhiuddin Khan's translation
    let searchTerm = q;
    if (q === 'নামাজ') searchTerm = 'নামায';
    if (q === 'রোজা') searchTerm = 'রোযা';
    if (q === 'সিয়াম' || q === 'সিয়াম') searchTerm = 'রোযা';

    const url = `https://api.alquran.cloud/v1/search/${encodeURIComponent(searchTerm)}/all/${edition}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (!data?.data?.matches || data.data.matches.length === 0) {
      return [];
    }

    const matches = data.data.matches.slice(0, 10).map(m => {
      const sNum = m.surah.number;
      const meta = SURAHS_METADATA.find(s => s.number === sNum);

      return {
        surahNumber: sNum,
        ayahNumber: m.numberInSurah,
        surahNameBn: meta ? meta.banglaName : m.surah.name,
        surahNameEn: meta ? meta.englishName : m.surah.englishName,
        text: m.text,
        audio: `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${m.number}.mp3`
      };
    });

    onlineSearchCache.set(cacheKey, matches);
    return matches;
  } catch (err) {
    console.warn('[IslamicSearch] Online Quran search error:', err);
    return [];
  }
}

export default {
  parseAyahQuery,
  fetchSpecificAyah,
  searchThematicTopics,
  searchAllIslamic,
  searchOnlineQuranAyahs,
  bnToEnDigits,
  normalizeQuery
};
