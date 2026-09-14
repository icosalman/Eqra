// ============================================
// EQRA — Hadith Service
// Complete Sahih al-Bukhari & Sahih Muslim Reader
// ============================================

import { BUKHARI_BOOKS, MUSLIM_BOOKS } from '../data/hadithBooksMetadata.js';
import { HADITHS_DATA } from '../data/hadiths.js';

const cache = new Map();

export function getHadithBooks(collection = 'bukhari') {
  return collection === 'muslim' ? MUSLIM_BOOKS : BUKHARI_BOOKS;
}

export function getBookMeta(collection, bookNum) {
  const books = getHadithBooks(collection);
  const num = parseInt(bookNum, 10);
  return books.find(b => b.book === num) || null;
}

/**
 * Fetch all Hadiths of a specific Book in Bukhari or Muslim
 * Merges Bengali, Arabic, and English editions in real-time
 * @param {'bukhari'|'muslim'} collection 
 * @param {number|string} bookNumber 
 */
export async function getHadithBook(collection, bookNumber) {
  const collKey = collection.toLowerCase() === 'muslim' ? 'muslim' : 'bukhari';
  const bookNum = parseInt(bookNumber, 10) || 1;
  const cacheKey = `${collKey}_book_${bookNum}`;

  // 1. Check in-memory cache
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  // 2. Check LocalStorage cache
  try {
    const local = localStorage.getItem(`eqra_${cacheKey}`);
    if (local) {
      const parsed = JSON.parse(local);
      cache.set(cacheKey, parsed);
      return parsed;
    }
  } catch (e) {
    // ignore
  }

  // 3. Fetch Bengali, Arabic, and English editions in parallel from open-source CDN
  const base = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions';
  const bnUrl = `${base}/ben-${collKey}/sections/${bookNum}.json`;
  const arUrl = `${base}/ara-${collKey}/sections/${bookNum}.json`;
  const enUrl = `${base}/eng-${collKey}/sections/${bookNum}.json`;

  try {
    const [bnRes, arRes, enRes] = await Promise.allSettled([
      fetch(bnUrl).then(r => r.ok ? r.json() : null),
      fetch(arUrl).then(r => r.ok ? r.json() : null),
      fetch(enUrl).then(r => r.ok ? r.json() : null)
    ]);

    const bnData = bnRes.status === 'fulfilled' ? bnRes.value : null;
    const arData = arRes.status === 'fulfilled' ? arRes.value : null;
    const enData = enRes.status === 'fulfilled' ? enRes.value : null;

    if (!bnData || !bnData.hadiths || bnData.hadiths.length === 0) {
      throw new Error('Hadith book data not found');
    }

    // Index Arabic & English by hadithnumber or index
    const arMap = new Map();
    if (arData?.hadiths) {
      arData.hadiths.forEach(h => arMap.set(h.hadithnumber, h.text));
    }

    const enMap = new Map();
    if (enData?.hadiths) {
      enData.hadiths.forEach(h => enMap.set(h.hadithnumber, h.text));
    }

    const bookMeta = getBookMeta(collKey, bookNum);

    const mergedHadiths = bnData.hadiths.map((h, idx) => {
      const arabic = arMap.get(h.hadithnumber) || arData?.hadiths?.[idx]?.text || '';
      const english = enMap.get(h.hadithnumber) || enData?.hadiths?.[idx]?.text || '';
      const bangla = h.text || '';

      const collNameBn = collKey === 'muslim' ? 'সহীহ মুসলিম' : 'সহীহ আল-বুখারী';
      const collNameEn = collKey === 'muslim' ? 'Sahih Muslim' : 'Sahih al-Bukhari';

      return {
        hadithNumber: h.hadithnumber,
        arabicNumber: h.arabicnumber || h.hadithnumber,
        arabic,
        bangla,
        english,
        collection: collKey,
        collectionNameBn: collNameBn,
        collectionNameEn: collNameEn,
        bookNumber: bookNum,
        bookNameBn: bookMeta?.nameBn || '',
        bookNameEn: bookMeta?.nameEn || '',
        reference: `${collNameBn}, হাদিস নং ${h.hadithnumber}`,
        referenceEn: `${collNameEn} #${h.hadithnumber}`
      };
    });

    const result = {
      collection: collKey,
      bookNumber: bookNum,
      bookMeta,
      totalHadiths: mergedHadiths.length,
      hadiths: mergedHadiths
    };

    cache.set(cacheKey, result);
    try {
      localStorage.setItem(`eqra_${cacheKey}`, JSON.stringify(result));
    } catch {
      // quota exceeded, fine
    }

    return result;
  } catch (err) {
    console.error(`[HadithService] Failed to load ${collKey} book ${bookNum}:`, err);
    // Fallback to curated dataset if matching
    const fallback = HADITHS_DATA.filter(h => h.id.includes(collKey));
    return {
      collection: collKey,
      bookNumber: bookNum,
      bookMeta: getBookMeta(collKey, bookNum),
      totalHadiths: fallback.length,
      hadiths: fallback.map(h => ({
        hadithNumber: h.hadithNumber,
        arabic: h.arabic,
        bangla: h.bangla,
        english: h.english,
        reference: h.reference,
        referenceEn: h.reference
      }))
    };
  }
}
