// ============================================
// EQRA — Banglish (Romanized Bengali) & Semantic Parser
// Converts Banglish & English keywords to Bengali Islamic concepts
// ============================================

/**
 * High-precision Banglish to Bengali & Concept Dictionary
 */
export const BANGLISH_DICTIONARY = {
  // Topics mentioned by user
  'salat': ['সালাত', 'নামাজ', 'নামায', 'prayer'],
  'salah': ['সালাত', 'নামাজ', 'নামায', 'prayer'],
  'namaj': ['নামাজ', 'নামায', 'সালাত', 'prayer'],
  'namaz': ['নামাজ', 'নামায', 'সালাত', 'prayer'],
  'roza': ['রোজা', 'রোযা', 'সিয়াম', 'সিয়াম', 'fasting'],
  'roja': ['রোজা', 'রোযা', 'সিয়াম', 'সিয়াম', 'fasting'],
  'siam': ['সিয়াম', 'সিয়াম', 'রোজা', 'রোযা', 'fasting'],
  'sawm': ['সিয়াম', 'সিয়াম', 'রোজা', 'রোযা', 'fasting'],
  'jakat': ['যাকাত', 'জাকাত', 'দান', 'সদকা', 'charity', 'zakat'],
  'zakat': ['যাকাত', 'জাকাত', 'দান', 'সদকা', 'charity'],
  'zakah': ['যাকাত', 'জাকাত', 'দান', 'charity'],
  'hazz': ['হজ', 'হজ্জ', 'উমরাহ', 'hajj'],
  'hajj': ['হজ', 'হজ্জ', 'উমরাহ', 'pilgrimage'],
  'umrah': ['উমরাহ', 'হজ', 'মক্কা'],

  // Good and Bad (User specifically mentioned "valo, mondo")
  'valo': ['ভালো', 'সৎকাজ', 'নেক আমল', 'উত্তম', 'পুণ্য', 'good', 'righteousness'],
  'bhalo': ['ভালো', 'সৎকাজ', 'নেক আমল', 'উত্তম', 'পুণ্য', 'good'],
  'mondo': ['মন্দ', 'পাপ', 'গুনাহ', 'খারাপ', 'অসৎকাজ', 'evil', 'sin', 'bad'],
  'kharap': ['খারাপ', 'মন্দ', 'পাপ', 'গুনাহ', 'evil'],
  'nek': ['নেক', 'ভালো', 'সৎকাজ', 'সৎ'],
  'pap': ['পাপ', 'গুনাহ', 'মন্দ', 'অপরাধ'],
  'gunah': ['গুনাহ', 'পাপ', 'অপরাধ', 'ক্ষমা'],
  'shobab': ['সওয়াব', 'ছওয়াব', 'প্রতিদান', 'নেকি', 'পুরস্কার'],
  'sawab': ['সওয়াব', 'ছওয়াব', 'প্রতিদান', 'নেকি'],
  'punno': ['পুণ্য', 'নেকি', 'সওয়াব', 'ভালো কাজ'],

  // Women, Property & Inheritance (User specifically mentioned "narider islamer sompotti")
  'narider': ['নারী', 'নারীদের', 'মহিলা', 'স্ত্রী', 'মেয়ে', 'women', 'female'],
  'nari': ['নারী', 'মহিলা', 'স্ত্রী', 'women'],
  'mohila': ['মহিলা', 'নারী', 'স্ত্রী'],
  'islamer': ['ইসলাম', 'ইসলামের', 'ইসলামী', 'শরীয়ত', 'islam'],
  'islam': ['ইসলাম', 'দ্বীন', 'শরীয়ত'],
  'sompotti': ['সম্পত্তি', 'উত্তরাধিকার', 'মিরাস', 'মালিকানা', 'ধন-সম্পদ', 'inheritance', 'property', 'wealth'],
  'shompotti': ['সম্পত্তি', 'উত্তরাধিকার', 'মিরাস', 'মালিকানা', 'property'],
  'property': ['সম্পত্তি', 'মালিকানা', 'উত্তরাধিকার'],
  'inheritance': ['উত্তরাধিকার', 'মিরাস', 'সম্পত্তি বন্টন'],
  'uttoradhikar': ['উত্তরাধিকার', 'সম্পত্তি', 'মিরাস'],
  'miras': ['মিরাস', 'উত্তরাধিকার', 'সম্পত্তি'],
  'mohor': ['মোহর', 'মোহরানা', 'দেনমোহর', 'দাম্পত্য'],
  'mohorana': ['মোহরানা', 'দেনমোহর', 'স্ত্রীর অধিকার'],
  'adhikar': ['অধিকার', 'হক', 'মর্যাদা', 'rights'],
  'hok': ['হক', 'অধিকার', 'পাওনা'],

  // Men, Accountability & Leadership (User specifically mentioned "purushder hisheb")
  'purushder': ['পুরুষ', 'পুরুষদের', 'স্বামী', 'পিতা', 'men', 'male', 'accountability'],
  'purush': ['পুরুষ', 'স্বামী', 'পিতা', 'men'],
  'cheleder': ['ছেলেদের', 'পুরুষ', 'সন্তান'],
  'hisheb': ['হিসাব', 'হিসেব', 'দায়িত্ব', 'জবাবদিহিতা', 'কিয়ামতের হিসাব', 'accountability', 'judgment'],
  'hishab': ['হিসাব', 'দায়িত্ব', 'জবাবদিহিতা', 'হাশর'],
  'hisab': ['হিসাব', 'জবাবদিহিতা', 'আমলনামা', 'account'],
  'dayitto': ['দায়িত্ব', 'আমানত', 'কর্তব্য', 'অভিভাবক'],
  'khamota': ['ক্ষমতা', 'নেতৃত্ব', 'দায়িত্ব'],

  // Parents and Family
  'ma': ['মা', 'মাতা', 'পিতা-মাতা', 'mother'],
  'baba': ['বাবা', 'পিতা', 'পিতা-মাতা', 'father'],
  'abbu': ['বাবা', 'পিতা', 'পিতা-মাতা'],
  'ammu': ['মা', 'মাতা', 'পিতা-মাতা'],
  'parents': ['পিতা-মাতা', 'মা-বাবা', 'বাবা-মা', 'মা', 'বাবা'],
  'father': ['বাবা', 'পিতা', 'পিতা-মাতা'],
  'mother': ['মা', 'মাতা', 'পিতা-মাতা'],
  'sontan': ['সন্তান', 'ছেলে-মেয়ে', 'শিশু', 'তারবিয়াহ', 'children'],
  'poribar': ['পরিবার', 'সংসার', 'দাম্পত্য', 'family'],
  'biye': ['বিয়ে', 'বিবাহ', 'দাম্পত্য', 'নিকাহ', 'marriage'],
  'shadi': ['বিয়ে', 'বিবাহ', 'দাম্পত্য'],
  'bibaho': ['বিবাহ', 'বিয়ে', 'দাম্পত্য'],
  'shami': ['স্বামী', 'দাম্পত্য', 'পুরুষ'],
  'stri': ['স্ত্রী', 'দাম্পত্য', 'নারী', 'স্ত্রী অধিকার'],

  // Mental Peace, Grief & Hardship
  'shanti': ['শান্তি', 'প্রশান্তি', 'মানসিক শান্তি', 'হৃদয়', 'peace'],
  'proshanti': ['প্রশান্তি', 'শান্তি', 'মানসিক শান্তি'],
  'kosto': ['কষ্ট', 'যন্ত্রণা', 'বিপদ', 'মুসিবত', 'দুঃখ', 'hardship'],
  'bipod': ['বিপদ', 'মুসিবত', 'বালা-মুসিবত', 'পরীক্ষা', 'calamity'],
  'dussinta': ['দুশ্চিন্তা', 'হতাশা', 'বিষণ্ণতা', 'টেনশন', 'anxiety'],
  'hotasha': ['হতাশা', 'বিষণ্ণতা', 'দুশ্চিন্তা', 'depression'],
  'tension': ['দুশ্চিন্তা', 'টেনশন', 'শান্তি'],
  'depression': ['বিষণ্ণতা', 'হতাশা', 'মানসিক শান্তি'],
  'peace': ['শান্তি', 'প্রশান্তি', 'জিকির'],
  'mon': ['মন', 'অন্তর', 'হৃদয়', 'শান্তি'],
  'ontor': ['অন্তর', 'কলব', 'হৃদয়', 'শান্তি'],

  // Health and Sickness
  'rog': ['রোগ', 'অসুখ', 'ব্যাধি', 'অসুস্থতা', 'illness'],
  'oshuk': ['অসুখ', 'রোগ', 'অসুস্থতা'],
  'shifa': ['শিফা', 'আরোগ্য', 'সুস্থতা', 'চিকিৎসা', 'healing', 'cure'],
  'susthota': ['সুস্থতা', 'আরোগ্য', 'শিফা'],
  'byatha': ['ব্যথা', 'বেদনা', 'রোগমুক্তি', 'শিফা'],

  // Wealth, Job & Provision
  'rizik': ['রিজিক', 'রুজি', 'জীবিকা', 'বরকত', 'সম্পদ', 'wealth', 'rizq'],
  'rizq': ['রিজিক', 'বরকত', 'জীবিকা', 'provision'],
  'taka': ['টাকা', 'পয়সা', 'সম্পদ', 'ধন-সম্পদ', 'রিজিক'],
  'shompod': ['সম্পদ', 'ধন-সম্পদ', 'রিজিক', 'বরকত'],
  'chakri': ['চাকরি', 'উপার্জন', 'কর্মসংস্থান', 'রিজিক'],
  'rojgar': ['রোজগার', 'উপার্জন', 'হালাল রুজি', 'রিজিক'],
  'gorib': ['দরিদ্র', 'অভাব', 'গরিব', 'মিসকিন'],
  'rin': ['ঋণ', 'ধার', 'করজ', 'ঋণমুক্তি', 'debt'],
  'karz': ['ঋণ', 'করজ', 'ঋণমুক্তি'],

  // Forgiveness and Repentance
  'toba': ['তওবা', 'তাওবা', 'ক্ষমা', 'ইস্তিগফার', 'repentance'],
  'tawbah': ['তওবা', 'তাওবা', 'ক্ষমা', 'ইস্তিগফার'],
  'khoma': ['ক্ষমা', 'মাফ', 'রহমত', 'দয়া', 'forgiveness'],
  'maf': ['মাফ', 'ক্ষমা', 'তওবা'],
  'istigfar': ['ইস্তিগফার', 'ক্ষমা প্রার্থনা', 'তওবা'],
  'doya': ['দোয়া', 'দোয়া', 'মুনাজাত', 'দয়া', 'supplication', 'mercy'],
  'dua': ['দোয়া', 'দোয়া', 'প্রার্থনা', 'supplication'],
  'munajat': ['মুনাজাত', 'দোয়া', 'প্রার্থনা'],

  // Patience & Gratitude
  'sobor': ['সবর', 'ধৈর্য', 'সহনশীলতা', 'patience', 'sabr'],
  'shobor': ['সবর', 'ধৈর্য', 'patience'],
  'dhoirjo': ['ধৈর্য', 'সবর', 'সহনশীলতা'],
  'shukor': ['শুকর', 'কৃতজ্ঞতা', 'শুকরিয়া', 'gratitude'],
  'shukr': ['শুকর', 'কৃতজ্ঞতা', 'আলহামদুলিল্লাহ'],
  'kritoggota': ['কৃতজ্ঞতা', 'শুকরিয়া'],

  // Hereafter, Death & Grave
  'mrittu': ['মৃত্যু', 'ইন্তেকাল', 'মরণ', 'death'],
  'moron': ['মরণ', 'মৃত্যু', 'জানাজা'],
  'kobor': ['কবর', 'কবরের আযাব', 'মৃত্যু', 'grave'],
  'qabr': ['কবর', 'আখেরাত', 'মৃত্যু'],
  'akherat': ['আখেরাত', 'আখিরাত', 'পরকাল', 'হাশর', 'hereafter'],
  'qiyamot': ['কিয়ামাত', 'কিয়ামত', 'হাশর', 'বিচার দিবস'],
  'jannat': ['জান্নাত', 'বেহেশত', 'স্বর্গ', 'paradise', 'jannah'],
  'jahannam': ['জাহান্নাম', 'দোযখ', 'আগুন', 'hell'],

  // Morality, Modesty & Sins
  'charitra': ['চরিত্র', 'আখলাক', 'সদাচরণ', 'character'],
  'akhlaq': ['আখলাক', 'চরিত্র', 'উত্তম ব্যবহার'],
  'rag': ['রাগ', 'ক্রোধ', 'রাগ দমন', 'anger'],
  'krodh': ['ক্রোধ', 'রাগ', 'রাগ দমন'],
  'mitha': ['মিথ্যা', 'মিথ্যা কথা', 'পাপ', 'lying'],
  'gibot': ['গীবত', 'পরনিন্দা', 'চোগলখোরি', 'backbiting'],
  'porda': ['পর্দা', 'হিজাব', 'শালীনতা', 'লজ্জা', 'modesty', 'hijab'],
  'hijab': ['হিজাব', 'পর্দা', 'শালীনতা'],
  'shud': ['সুদ', 'রিবা', 'হারাম উপার্জন', 'usury', 'interest'],
  'riba': ['রিবা', 'সুদ', 'হারাম'],
  'ghush': ['ঘুষ', 'হারাম', 'পাপ'],
  'haram': ['হারাম', 'নিষিদ্ধ', 'বর্জনীয়'],
  'halal': ['হালাল', 'বৈধ', 'পবিত্র'],

  // Knowledge & Faith
  'gyan': ['জ্ঞান', 'ইলম', 'শিক্ষা', 'প্রজ্ঞা', 'knowledge'],
  'ilm': ['ইলম', 'জ্ঞান', 'দ্বীনি শিক্ষা'],
  'iman': ['ঈমান', 'বিশ্বাস', 'তাকওয়া', 'faith'],
  'tawhid': ['তাওহীদ', 'একত্ববাদ', 'আল্লাহর পরিচয়'],
  'shirk': ['শিরক', 'অংশীদার', 'পাপ']
};

/**
 * Phonetic letter sound transformations for Banglish text
 */
export function phoneticTransliterate(word = '') {
  let w = word.toLowerCase().trim();
  
  // Direct dictionary hit
  if (BANGLISH_DICTIONARY[w]) {
    return BANGLISH_DICTIONARY[w];
  }

  // Common phrase tokens mapping
  const results = [];
  for (const [key, mapped] of Object.entries(BANGLISH_DICTIONARY)) {
    if (w.includes(key) || key.includes(w)) {
      results.push(...mapped);
    }
  }

  return results;
}

/**
 * Parses any user search query (whether Bangla, English, or Banglish)
 * and returns expanded semantic tokens for searching across Quran & Hadith
 */
export function extractSearchTokens(rawQuery = '') {
  if (!rawQuery) return [];

  // Normalize string: remove extra symbols, lowercase
  const cleaned = rawQuery.toLowerCase().replace(/[?,.!;:'"()[\]{}]/g, ' ').trim();
  const words = cleaned.split(/\s+/).filter(w => w.length > 0);

  const tokensSet = new Set();

  // Add the full raw query
  tokensSet.add(cleaned);

  // Check multi-word phrase mappings or whole word mappings
  const phrase = words.join(' ');
  for (const [key, mapped] of Object.entries(BANGLISH_DICTIONARY)) {
    if (key.includes(' ')) {
      // For multi-word keys
      if (phrase.includes(key)) {
        mapped.forEach(t => tokensSet.add(t));
      }
    } else {
      // For single word keys: exact word match in words list
      if (words.includes(key)) {
        mapped.forEach(t => tokensSet.add(t));
      }
    }
  }

  // Check individual words
  for (const word of words) {
    tokensSet.add(word);

    // If word is in dictionary
    if (BANGLISH_DICTIONARY[word]) {
      BANGLISH_DICTIONARY[word].forEach(t => tokensSet.add(t));
    }

    // Stem / Prefix check for longer words only (min length 4 to avoid false positives)
    for (const [key, mapped] of Object.entries(BANGLISH_DICTIONARY)) {
      if (word.length >= 4 && key.length >= 4 && (word.startsWith(key) || key.startsWith(word))) {
        mapped.forEach(t => tokensSet.add(t));
      }
    }
  }

  return Array.from(tokensSet);
}

export default {
  BANGLISH_DICTIONARY,
  phoneticTransliterate,
  extractSearchTokens
};
