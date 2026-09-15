// ============================================
// EQRA — Color-Coded Tajweed Quran Engine
// Complete 16-Rule Phonetic Classification & Indo-Pak Typography
// ============================================

export const TAJWEED_RULES_DATA = {
  g: {
    key: 'ghunnah',
    tag: 'g',
    color: '#059669',
    dotClass: 'dot-ghunnah',
    bnName: 'ওয়াজিব গুন্নাহ',
    enName: 'Wajib Ghunnah',
    bnDesc: 'নূন (نّ) বা মীম (مّ) এ তাশদীদ থাকলে ১ আলিফ পরিমাণ নাকের বাঁশিতে গুন্নাহ করে পড়তে হয়।',
    enDesc: 'Noon or Meem with Shaddah (Tashdeed) must be nasalized with 1 Alif duration.',
    harakatBn: '১ আলিফ (২ হরকত)',
    harakatEn: '2 Vowels (1 Alif)',
    sample: 'مِنَ الْجِنَّةِ وَالنَّاسِ'
  },
  f: {
    key: 'ikhfa',
    tag: 'f',
    color: '#7C3AED',
    dotClass: 'dot-ikhfa',
    bnName: 'ইখফা (লুকিয়ে গুন্নাহ)',
    enName: 'Ikhfa',
    bnDesc: 'নূন সাকিন বা তানভীনের পর ইখফার ১৫ হরফের (ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك) যেকোনো একটি আসলে নাকের বাঁশিতে লুকিয়ে ১ আলিফ গুন্নাহ করতে হয়।',
    enDesc: 'Noon Saakin or Tanween followed by one of the 15 Ikhfa letters is pronounced with concealed nasalization.',
    harakatBn: '১ আলিফ (২ হরকত)',
    harakatEn: '2 Vowels (1 Alif)',
    sample: 'مِن شَرِّ'
  },
  c: {
    key: 'ikhfa-shafawi',
    tag: 'c',
    color: '#7C3AED',
    dotClass: 'dot-ikhfa',
    bnName: 'ইখফায়ে শাফাবী',
    enName: 'Ikhfa Shafawi',
    bnDesc: 'মীম সাকিনের পর বা (ب) আসলে দুই ঠোঁট আলতোভাবে মিলিয়ে গুন্নাহ সহ পড়তে হয়।',
    enDesc: 'Meem Saakin followed by Ba (ب) pronounced with concealed nasalization at the lips.',
    harakatBn: '১ আলিফ (২ হরকত)',
    harakatEn: '2 Vowels (1 Alif)',
    sample: 'تَرْمِيهِم بِحِجَارَةٍ'
  },
  a: {
    key: 'idgham-ghunnah',
    tag: 'a',
    color: '#16A34A',
    dotClass: 'dot-idgham-ghunnah',
    bnName: 'ইদগামে বাগুন্নাহ',
    enName: 'Idgham with Ghunnah',
    bnDesc: 'নূন সাকিন বা তানভীনের পর ي ن م ও (ইয়ানমু) হরফ আসলে মিলিয়ে গুন্নাহ সহ পড়তে হয়।',
    enDesc: 'Assimilation with nasalization when Noon Saakin or Tanween is followed by Yaa, Noon, Meem, or Waw.',
    harakatBn: '১ আলিফ (২ হরকত)',
    harakatEn: '2 Vowels (1 Alif)',
    sample: 'مَن يَقُولُ'
  },
  u: {
    key: 'idgham-no-ghunnah',
    tag: 'u',
    color: '#64748B',
    dotClass: 'dot-idgham-no-ghunnah',
    bnName: 'ইদগামে বেলাগুন্নাহ',
    enName: 'Idgham without Ghunnah',
    bnDesc: 'নূন সাকিন বা তানভীনের পর লাম (ل) বা রা (ر) আসলে গুন্নাহ ছাড়া মিলিয়ে পড়তে হয়।',
    enDesc: 'Assimilation without nasalization when followed by Lam (ل) or Ra (ر).',
    harakatBn: 'গুন্নাহ ব্যতীত',
    harakatEn: 'No Ghunnah',
    sample: 'مِّن رَّبِّهِمْ'
  },
  i: {
    key: 'iqlab',
    tag: 'i',
    color: '#0284C7',
    dotClass: 'dot-iqlab',
    bnName: 'ইক্বলাব / ক্বলব',
    enName: 'Iqlab (Conversion)',
    bnDesc: 'নূন সাকিন বা তানভীনের পর বা (ب) আসলে নূনকে ছোট মীম (ۢ) দ্বারা পরিবর্তন করে গুন্নাহ সহ পড়তে হয়।',
    enDesc: 'Conversion of Noon Saakin or Tanween into Meem when followed by Ba (ب).',
    harakatBn: '১ আলিফ (২ হরকত)',
    harakatEn: '2 Vowels (1 Alif)',
    sample: 'مِنۢ بَعْدِ'
  },
  q: {
    key: 'qalqalah',
    tag: 'q',
    color: '#EA580C',
    dotClass: 'dot-qalqalah',
    bnName: 'ক্বলক্বলাহ (ধাক্কা/প্রতিধ্বনি)',
    enName: 'Qalqalah (Echo)',
    bnDesc: 'ক্বাফ, তোয়া, বা, জীম, দাল (ق ط ب ج د - কুতুব জাদ) সাকিন অবস্থায় ধাক্কা দিয়ে প্রতিধ্বনি সহকারে পড়তে হয়।',
    enDesc: 'Echoing or bouncing sound produced by the 5 letters: Qaf, Ta, Ba, Jeem, Dal with Sukun.',
    harakatBn: 'ধাক্কা সহ উচ্চারণ',
    harakatEn: 'Vibrant Echo',
    sample: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ'
  },
  m: {
    key: 'madd-lazim',
    tag: 'm',
    color: '#B91C1C',
    dotClass: 'dot-madd-lazim',
    bnName: 'মাদ্দে লাযিম (৬ হরকত)',
    enName: 'Madd Lazim (Necessary)',
    bnDesc: 'মাদ্দের হরফের পর তাশদীদ বা আসলী সাকিন আসলে অবশ্যই ৩ আলিফ (৬ হরকত) দীর্ঘ টেনে পড়তে হবে।',
    enDesc: 'Obligatory 6 vowels (3 Alifs) prolongation before Shaddah or original Sukun.',
    harakatBn: '৩ আলিফ (৬ হরকত)',
    harakatEn: '6 Vowels (3 Alifs)',
    sample: 'الضَّالِّينَ'
  },
  o: {
    key: 'madd-muttasil',
    tag: 'o',
    color: '#E11D48',
    dotClass: 'dot-madd-muttasil',
    bnName: 'মাদ্দে মুত্তাসিল (৪-৫ হরকত)',
    enName: 'Madd Muttasil (Connected)',
    bnDesc: 'একই শব্দের মধ্যে মাদ্দের হরফের পর হামযা আসলে ৪ অথবা ৫ হরকত টেনে পড়তে হয়।',
    enDesc: 'Prolongation of 4-5 vowels when a Hamza appears within the same word after a Madd letter.',
    harakatBn: '২-২.৫ আলিফ (৪-৫ হরকত)',
    harakatEn: '4-5 Vowels',
    sample: 'جَاءَ نَصْرُ اللَّهِ'
  },
  p: {
    key: 'madd-munfasil',
    tag: 'p',
    color: '#9333EA',
    dotClass: 'dot-madd-munfasil',
    bnName: 'মাদ্দে মুনফাসিল / আরিয',
    enName: 'Madd Munfasil / Permissible',
    bnDesc: 'মাদ্দের হরফের পর পরবর্তী শব্দের শুরুতে হামযা আসলে বা ওয়াকফের কারণে আরিযী সাকিন হলে ৩-৪ হরকত টানা জায়েয।',
    enDesc: 'Permissible prolongation of 3-4 vowels when Hamza is in the next word or due to pause.',
    harakatBn: '২-৩ আলিফ (৩-৪ হরকত)',
    harakatEn: '3-4 Vowels',
    sample: 'إِنَّا أَنزَلْنَاهُ'
  },
  n: {
    key: 'madd-tabeei',
    tag: 'n',
    color: '#2563EB',
    dotClass: 'dot-madd-tabeei',
    bnName: 'মাদ্দে তাবিঈ / আসলী',
    enName: 'Madd Tabee\'i (Normal)',
    bnDesc: 'আলিফ, ওয়াও বা ইয়া সাকিন অবস্থায় স্বাভাবিক ১ আলিফ (২ হরকত) টেনে পড়তে হয়।',
    enDesc: 'Natural prolongation of 1 Alif (2 vowels).',
    harakatBn: '১ আলিফ (২ হরকত)',
    harakatEn: '2 Vowels (1 Alif)',
    sample: 'قَالُوا'
  },
  h: {
    key: 'hamzatul-wasl',
    tag: 'h',
    color: '#94A3B8',
    dotClass: 'dot-silent',
    bnName: 'হামযাতুল ওয়াসল',
    enName: 'Hamzat ul Wasl',
    bnDesc: 'পূর্ববর্তী হরফের সাথে মিলিয়ে পড়ার সময় এ আলিফটি উচ্চারণে বাদ পড়ে, তবে বাক্য শুরুতে উচ্চারিত হয়।',
    enDesc: 'Connecting Hamza, silent when reciting in continuation from the preceding word.',
    harakatBn: 'অনুচ্চারিত',
    harakatEn: 'Silent in continuation',
    sample: 'ٱلْحَمْدُ'
  },
  s: {
    key: 'silent',
    tag: 's',
    color: '#94A3B8',
    dotClass: 'dot-silent',
    bnName: 'অনুচ্চারিত হরফ',
    enName: 'Silent Letter',
    bnDesc: 'যেসব হরফ লেখায় উপস্থিত কিন্তু পাঠের সময় সম্পূর্ণ অনুচ্চারিত থাকে।',
    enDesc: 'Letters written in the script that are completely silent in recitation.',
    harakatBn: 'অনুচ্চারিত',
    harakatEn: 'Silent',
    sample: 'عَمِلُواْ'
  },
  l: {
    key: 'lam-shamsiyyah',
    tag: 'l',
    color: '#94A3B8',
    dotClass: 'dot-silent',
    bnName: 'লাম শামসিয়্যাহ',
    enName: 'Lam Shamsiyyah',
    bnDesc: 'শামসী হরফের পূর্বে লাম উচ্চারিত না হয়ে পরবর্তী হরফের সাথে তাশদীদ দিয়ে পড়তে হয়।',
    enDesc: 'Solar Lam assimilated into the following letter with Shaddah.',
    harakatBn: 'অনুচ্চারিত',
    harakatEn: 'Assimilated',
    sample: 'وَالشَّمْسِ'
  },
  d: {
    key: 'idgham-mutajanisayn',
    tag: 'd',
    color: '#64748B',
    dotClass: 'dot-idgham-no-ghunnah',
    bnName: 'ইদগামে মুতাজানিসাইন',
    enName: 'Idgham Mutajanisayn',
    bnDesc: 'একই মাখরাজ থেকে উচ্চারিত দুটি হরফ পরস্পরের সাথে মিলিত হলে প্রথম হরফটি দ্বিতীয়টিতে বিলীন হয়ে যায়।',
    enDesc: 'Assimilation of letters sharing the exact same articulation point.',
    harakatBn: 'বিলীন হরকত',
    harakatEn: 'Assimilated',
    sample: 'أَثْقَلَت دَّعَوَا'
  },
  b: {
    key: 'idgham-mutaqaribayn',
    tag: 'b',
    color: '#64748B',
    dotClass: 'dot-idgham-no-ghunnah',
    bnName: 'ইদগামে মুতাক্বারিবাইন',
    enName: 'Idgham Mutaqaribayn',
    bnDesc: 'নিকটবর্তী মাখরাজের দুটি হরফ পরস্পরের সাথে মিলিয়ে পড়া।',
    enDesc: 'Assimilation of letters with close articulation points.',
    harakatBn: 'মিলিয়ে পড়া',
    harakatEn: 'Assimilated',
    sample: 'أَلَمْ نَخْلُقكُّم'
  },
  allah: {
    key: 'lafz-allah',
    tag: 'allah',
    color: '#DC2626',
    dotClass: 'dot-allah',
    bnName: 'আল্লাহর পবিত্র নাম (লফজে আল্লাহ)',
    enName: 'Name of Allah (Lafz al-Jalalah)',
    bnDesc: 'মহান রাব্বুল আলামীনের পবিত্র নাম তাজবীদে সম্মান ও গুরুত্বের সাথে পাঠ করা হয়।',
    enDesc: 'The sacred and supreme name of Allah (Lafz al-Jalalah).',
    harakatBn: 'পবিত্র নাম',
    harakatEn: 'Divine Name',
    sample: 'اللَّهُ'
  },
  waqf: {
    key: 'waqf',
    tag: 'waqf',
    color: '#D97706',
    dotClass: 'dot-waqf',
    bnName: 'ওয়াকফ ও বিরতি চিহ্ন',
    enName: 'Waqf & Pause Signs',
    bnDesc: 'কুরআন তিলাওয়াতের সময় কোথায় থামা আবশ্যক, কোথায় বিরতি উত্তম এবং কোথায় থামা যাবে না তা নির্দেশ করে।',
    enDesc: 'Punctuation stop marks in the Quran indicating mandatory, preferred, or forbidden pauses.',
    harakatBn: 'বিরতি নির্দেশক',
    harakatEn: 'Pause Sign',
    sample: 'ۙ ۚ ۗ ۖ ۩ ۝'
  }
};

/**
 * Format Quran text with semantic color-coded Tajweed markup
 * Supports both:
 * 1. Pre-tagged Tajweed text (e.g. from AlQuran Cloud `quran-tajweed` edition)
 * 2. Plain / Indo-Pak text using smart heuristic rule detection
 * 
 * @param {string} text 
 * @param {boolean} [enableTajweed=true]
 * @returns {string} HTML string
 */
export function formatColorCodedQuran(text, enableTajweed = true) {
  if (!text || typeof text !== 'string') return text || '';

  // If Tajweed text has bracketed tags like [g[نّ] or [h:12[ٱ]
  if (text.includes('[') && text.includes(']')) {
    return parseTaggedTajweedText(text);
  }

  // Fallback heuristic Tajweed engine for pure Arabic or IndoPak text
  return applyIndoPakTajweedRules(text);
}

/**
 * Parse structured Tajweed bracket syntax: [tag:id[letter] or [tag[letter]
 * @param {string} text 
 * @returns {string} HTML with span tags
 */
export function parseTaggedTajweedText(text) {
  if (!text) return '';

  let res = text;

  // Regex to match [tag:optionalId[content]
  const tagRegex = /\[([a-zA-Z]+)(?::[0-9]+)?\[(.*?)\]/g;

  res = res.replace(tagRegex, (match, tag, content) => {
    const rule = TAJWEED_RULES_DATA[tag];
    const ruleName = rule ? rule.bnName : tag;
    const ruleDesc = rule ? rule.bnDesc : '';
    const harakat = rule ? rule.harakatBn : '';
    const color = rule ? rule.color : 'currentColor';

    return `<span class="tajweed-rule tajweed-${tag}" data-rule="${tag}" data-title="${ruleName}" data-desc="${ruleDesc}" data-harakat="${harakat}" data-color="${color}">${content}</span>`;
  });

  // Post-process: Highlight Lafz al-Jalalah (الله / ٱللَّهِ) if not wrapped
  res = highlightLafzAllah(res);

  // Highlight Waqf marks & Ayah End signs
  res = highlightWaqfAndAyahEnd(res);

  return res;
}

/**
 * Heuristic Tajweed color coding directly for Indo-Pak script text
 * @param {string} text 
 * @returns {string} HTML
 */
export function applyIndoPakTajweedRules(text) {
  if (!text) return '';

  let res = text;

  // 1. Ayah End Signs (۝ or \u06DD with optional numbers)
  res = res.replace(/([\u06DD۝][\s\u0660-\u06690-9]*)/g, '<span class="tajweed-ayah-end">$1</span>');

  // 2. Waqf / Pause marks: Indo-Pak specific stop marks (ۙ, ۚ, ۘ, ۗ, ۖ, ۩, ۞, ط, ج, ز, ص, قلے, صل, م, لا, ع)
  const waqfChars = '[\u06D6-\u06DC\u06DE\u06E9\u06D8\u06D9\u0615]';
  res = res.replace(new RegExp('(' + waqfChars + ')', 'g'), '<span class="tajweed-rule tajweed-waqf" data-rule="waqf" data-title="ওয়াকফ চিহ্ন" data-desc="তিলাওয়াতের বিরতি চিহ্ন" data-color="#D97706">$1</span>');

  // 3. Sacred Name of Allah (Lafz al-Jalalah: ٱللَّهِ, اللهِ, اللّٰهِ, لِلّٰهِ, وَاللهُ, بِاللهِ)
  res = highlightLafzAllah(res);

  // 4. Madd (Madd sign ٓ \u0653, ۤ \u06E4, or \u0622)
  res = res.replace(
    /([\u0622]|[\u0621-\u064A\u0670-\u0672][\u064B-\u065F\u0670]*[\u0653\u06E4~][\u064B-\u065F\u0670]*)/g,
    '<span class="tajweed-rule tajweed-m" data-rule="m" data-title="মাদ্দে লাযিম / মুত্তাসিল" data-desc="দীর্ঘ ৪ থেকে ৬ হরকত টেনে পড়তে হয়।" data-harakat="৪-৬ হরকত" data-color="#B91C1C">$1</span>'
  );

  // 5. Ghunnah (Noon/Meem with Shaddah: نّ or مّ)
  const diacritics = '[\\u064B-\\u065F\\u0670]*';
  res = res.replace(
    new RegExp('([\\u0646\\u0645]' + diacritics + '\\u0651' + diacritics + ')', 'g'),
    '<span class="tajweed-rule tajweed-g" data-rule="g" data-title="ওয়াজিব গুন্নাহ" data-desc="নূন বা মীমে তাশদীদ থাকলে ১ আলিফ পরিমাণ গুন্নাহ করতে হয়।" data-harakat="১ আলিফ" data-color="#059669">$1</span>'
  );

  // 6. Iqlab in IndoPak script: Small Meem (ۢ \u06E2) above Noon or Tanween
  res = res.replace(
    /([^\s<]*[\u06E2\u06ED][^\s<]*)/g,
    '<span class="tajweed-rule tajweed-i" data-rule="i" data-title="ইক্বলাব (ক্বলব)" data-desc="নূন সাকিন বা তানভীনের পর বা আসলে মীম দ্বারা রূপান্তর করে গুন্নাহ সহ পড়া।" data-harakat="১ আলিফ" data-color="#0284C7">$1</span>'
  );

  // 7. Qalqalah (ق, ط, ب, ج, د with sukun ْ \u0652 or jazm ۡ \u06E1)
  res = res.replace(
    new RegExp('([\\u0642\\u0637\\u0628\\u062C\\u062F][\\u0652\\u06E1])', 'g'),
    '<span class="tajweed-rule tajweed-q" data-rule="q" data-title="ক্বলক্বলাহ" data-desc="ক্বাফ, তোয়া, বা, জীম, দাল সাকিন হলে ধাক্কা দিয়ে পড়তে হয়।" data-harakat="ধাক্কা সহ উচ্চারণ" data-color="#EA580C">$1</span>'
  );

  // 8. Hamzatul Wasl (ٱ \u0671)
  res = res.replace(
    /(\u0671)/g,
    '<span class="tajweed-rule tajweed-h" data-rule="h" data-title="হামযাতুল ওয়াসল" data-desc="মিলে পড়ার সময় অনুচ্চারিত থাকে।" data-color="#94A3B8">$1</span>'
  );

  return res;
}

/**
 * Highlight Lafz al-Jalalah (Name of Allah) without breaking existing spans
 */
function highlightLafzAllah(html) {
  const diacritics = '[\\u064B-\\u065F\\u0670]*';
  const allahPattern = new RegExp(
    '([وفبت]?' + diacritics + ')' +
    '([\\u0671\\u0627]?' + diacritics + '\\u0644' + diacritics + '\\u0644' + diacritics + '[\\u0651]?' + diacritics + '\\u0647' + diacritics + '|' +
    '[\\u0644]' + diacritics + '\\u0644' + diacritics + '[\\u0651]?' + diacritics + '\\u0647' + diacritics + ')',
    'g'
  );

  return html.replace(allahPattern, (match, pfx, core) => {
    // Avoid double wrapping if already inside a span
    return (pfx || '') + '<span class="tajweed-rule tajweed-allah" data-rule="allah" data-title="আল্লাহর নাম" data-desc="পবিত্র সত্তা মহান রাব্বুল আলামীনের নাম" data-color="#DC2626">' + core + '</span>';
  });
}

/**
 * Highlight Waqf signs and Ayah end markers
 */
function highlightWaqfAndAyahEnd(html) {
  let res = html;
  // Waqf marks: ۖ, ۗ, ۚ, ۛ, ۜ, ۞, ۩, ۘ, ۙ
  res = res.replace(/([\u06D6-\u06DC\u06DE\u06E9\u06D8\u06D9])/g, '<span class="tajweed-rule tajweed-waqf" data-rule="waqf" data-title="ওয়াকফ চিহ্ন" data-desc="তিলাওয়াতের বিরতি ও থামার চিহ্ন" data-color="#D97706">$1</span>');
  // Ayah end symbol
  res = res.replace(/([\u06DD۝][\s\u0660-\u06690-9]*)/g, '<span class="tajweed-ayah-end">$1</span>');
  return res;
}

/**
 * Render Tajweed color guide legend widget
 * @param {string} lang 
 * @returns {string} HTML snippet
 */
export function renderTajweedLegend(lang = 'bn') {
  const isBn = lang === 'bn';

  return `
    <div class="tajweed-legend-bar" id="tajweed-legend-bar">
      <div class="tajweed-legend-header" id="toggle-tajweed-legend" role="button" tabindex="0" title="${isBn ? 'কালার কোড নির্দেশিকা দেখুন' : 'View Tajweed Color Code Guide'}">
        <span class="tajweed-legend-badge">
          🎨 <span>${isBn ? 'কালার কোডেড তাজবীদ কুরআন' : 'Color-Coded Tajweed Quran'}</span>
        </span>
        <div class="tajweed-legend-hint">
          <button type="button" class="tajweed-guide-btn" id="open-tajweed-guide-btn" title="${isBn ? 'পূর্ণাঙ্গ তাজবীদ নিয়মাবলি পড়ুন' : 'Read Full Tajweed Guide'}">
            📖 ${isBn ? 'নিয়মাবলি গাইড' : 'Tajweed Guide'}
          </button>
          <span>${isBn ? 'কালার চার্ট ▾' : 'Color Chart ▾'}</span>
        </div>
      </div>

      <div class="tajweed-legend-content" id="tajweed-legend-dropdown" style="display: none;">
        <div class="tajweed-pill" data-rule="g" title="${isBn ? 'নূন ও মীম মুশাদ্দাদে ১ আলিফ গুন্নাহ' : 'Wajib Ghunnah on Noon & Meem'}">
          <span class="tajweed-dot dot-ghunnah"></span>
          <span class="tajweed-label">${isBn ? 'ওয়াজিব গুন্নাহ' : 'Ghunnah'}</span>
        </div>
        <div class="tajweed-pill" data-rule="f" title="${isBn ? 'নাক দিয়ে লুকিয়ে ১ আলিফ গুন্নাহ' : 'Concealed nasalization'}">
          <span class="tajweed-dot dot-ikhfa"></span>
          <span class="tajweed-label">${isBn ? 'ইখফা (লুকানো গুন্নাহ)' : 'Ikhfa'}</span>
        </div>
        <div class="tajweed-pill" data-rule="a" title="${isBn ? 'মিলিয়ে ১ আলিফ গুন্নাহ' : 'Idgham with Ghunnah'}">
          <span class="tajweed-dot dot-idgham-ghunnah"></span>
          <span class="tajweed-label">${isBn ? 'ইদগামে বাগুন্নাহ' : 'Idgham w/ Ghunnah'}</span>
        </div>
        <div class="tajweed-pill" data-rule="u" title="${isBn ? 'গুন্নাহ ছাড়া মিলিয়ে পড়া' : 'Idgham without Ghunnah'}">
          <span class="tajweed-dot dot-idgham-no-ghunnah"></span>
          <span class="tajweed-label">${isBn ? 'ইদগামে বেলাগুন্নাহ' : 'Idgham w/o Ghunnah'}</span>
        </div>
        <div class="tajweed-pill" data-rule="i" title="${isBn ? 'নূনকে মীমে পরিবর্তন করে গুন্নাহ' : 'Conversion to Meem'}">
          <span class="tajweed-dot dot-iqlab"></span>
          <span class="tajweed-label">${isBn ? 'ইক্বলাব / ক্বলব' : 'Iqlab'}</span>
        </div>
        <div class="tajweed-pill" data-rule="q" title="${isBn ? 'ক্বলক্বলার ৫ হরফে ধাক্কা দিয়ে পড়া' : 'Echoing sound on 5 letters'}">
          <span class="tajweed-dot dot-qalqalah"></span>
          <span class="tajweed-label">${isBn ? 'ক্বলক্বলাহ (ধাক্কা)' : 'Qalqalah'}</span>
        </div>
        <div class="tajweed-pill" data-rule="m" title="${isBn ? '৬ হরকত দীর্ঘ টানা' : 'Necessary 6 vowels stretch'}">
          <span class="tajweed-dot dot-madd-lazim"></span>
          <span class="tajweed-label">${isBn ? 'মাদ্দে লাযিম (৬ হরকত)' : 'Madd Lazim (6)'}</span>
        </div>
        <div class="tajweed-pill" data-rule="o" title="${isBn ? '৪-৫ হরকত দীর্ঘ টানা' : 'Connected 4-5 vowels stretch'}">
          <span class="tajweed-dot dot-madd-muttasil"></span>
          <span class="tajweed-label">${isBn ? 'মাদ্দে মুত্তাসিল (৪-৫)' : 'Madd Muttasil (4-5)'}</span>
        </div>
        <div class="tajweed-pill" data-rule="p" title="${isBn ? '৩-৪ হরকত দীর্ঘ টানা' : 'Permissible 3-4 vowels stretch'}">
          <span class="tajweed-dot dot-madd-munfasil"></span>
          <span class="tajweed-label">${isBn ? 'মাদ্দে মুনফাসিল (৩-৪)' : 'Madd Munfasil (3-4)'}</span>
        </div>
        <div class="tajweed-pill" data-rule="n" title="${isBn ? 'স্বাভাবিক ১ আলিফ টান' : 'Natural 1 Alif stretch'}">
          <span class="tajweed-dot dot-madd-tabeei"></span>
          <span class="tajweed-label">${isBn ? 'মাদ্দে তাবিঈ (১ আলিফ)' : 'Madd Tabee\'i'}</span>
        </div>
        <div class="tajweed-pill" data-rule="h" title="${isBn ? 'পড়ার সময় বাদ পড়বে' : 'Silent in continuation'}">
          <span class="tajweed-dot dot-silent"></span>
          <span class="tajweed-label">${isBn ? 'অনুচ্চারিত হরফ' : 'Silent Letters'}</span>
        </div>
        <div class="tajweed-pill" data-rule="allah" title="${isBn ? 'আল্লাহর মহান নাম' : 'Divine Name of Allah'}">
          <span class="tajweed-dot dot-allah"></span>
          <span class="tajweed-label">${isBn ? 'লফজে আল্লাহ' : 'Name of Allah'}</span>
        </div>
      </div>
    </div>

    <!-- Tajweed Tooltip Floating Element -->
    <div id="tajweed-tooltip-popup" class="tajweed-tooltip-popup" role="tooltip" aria-hidden="true">
      <div class="tajweed-tooltip-header">
        <span class="tajweed-tooltip-rule-dot" id="tajweed-tooltip-dot"></span>
        <span id="tajweed-tooltip-title"></span>
      </div>
      <div class="tajweed-tooltip-desc" id="tajweed-tooltip-desc"></div>
      <div class="tajweed-tooltip-harakat" id="tajweed-tooltip-harakat"></div>
    </div>
  `;
}

/**
 * Render Educational Tajweed Rules Modal
 * @param {string} lang 
 * @returns {string} HTML modal structure
 */
export function renderTajweedModal(lang = 'bn') {
  const isBn = lang === 'bn';

  const rulesList = Object.values(TAJWEED_RULES_DATA);

  return `
    <div id="tajweed-guide-modal" class="tajweed-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="tajweed-modal-heading">
      <div class="tajweed-modal-container">
        <header class="tajweed-modal-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 20px;">🎨</span>
            <h2 id="tajweed-modal-heading" style="font-size: var(--text-lg); font-weight: 700; margin: 0;">
              ${isBn ? 'তাজবীদ নিয়মাবলি ও কালার কোড নির্দেশিকা' : 'Tajweed Rules & Color Code Guide'}
            </h2>
          </div>
          <button id="close-tajweed-modal-btn" class="btn btn-ghost" style="padding: 4px 8px; font-size: 18px;" aria-label="Close">✕</button>
        </header>

        <div class="tajweed-modal-body">
          <p style="margin-bottom: var(--space-4); color: var(--color-text-secondary); font-size: 13px;">
            ${isBn 
              ? 'কুরআনুল কারীম বিশুদ্ধভাবে পড়ার জন্য তাজবীদের নিয়ম মেনে তিলাওয়াত করা আবশ্যক। নিচে আমাদের কালার-কোডেড কুরআনের প্রতিটি রঙের বিস্তারিত নিয়ম দেওয়া হলো:' 
              : 'Reciting the Holy Quran with correct Tajweed is essential for proper recitation. Below is the complete explanation of each color-coded rule used in EQRA:'}
          </p>

          <div class="tajweed-rules-list">
            ${rulesList.map(rule => `
              <div class="tajweed-rule-row">
                <span class="tajweed-rule-tag" style="background-color: ${rule.color};"></span>
                <div style="flex: 1;">
                  <div class="tajweed-rule-title">
                    <span>${isBn ? rule.bnName : rule.enName}</span>
                    <span style="font-size: 11px; font-weight: 600; color: ${rule.color}; background: rgba(0,0,0,0.05); padding: 1px 6px; border-radius: var(--radius-full);">
                      ${isBn ? rule.harakatBn : rule.harakatEn}
                    </span>
                  </div>
                  <div class="tajweed-rule-explanation">
                    ${isBn ? rule.bnDesc : rule.enDesc}
                  </div>
                  ${rule.sample ? `
                    <div class="tajweed-rule-sample" style="color: ${rule.color};">
                      ${rule.sample}
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Bind interactive tooltip hover / touch events for Tajweed spans
 * @param {HTMLElement} container 
 */
export function bindTajweedInteractions(container) {
  const tooltip = document.getElementById('tajweed-tooltip-popup');
  const dot = document.getElementById('tajweed-tooltip-dot');
  const title = document.getElementById('tajweed-tooltip-title');
  const desc = document.getElementById('tajweed-tooltip-desc');
  const harakat = document.getElementById('tajweed-tooltip-harakat');

  if (!tooltip || !container) return;

  const showTooltip = (el) => {
    const ruleTag = el.getAttribute('data-rule');
    const ruleTitle = el.getAttribute('data-title');
    const ruleDesc = el.getAttribute('data-desc');
    const ruleHarakat = el.getAttribute('data-harakat');
    const color = el.getAttribute('data-color') || '#059669';

    if (!ruleTitle) return;

    dot.style.backgroundColor = color;
    title.textContent = ruleTitle;
    desc.textContent = ruleDesc || '';
    if (ruleHarakat) {
      harakat.textContent = `উচ্চারণের মাত্রা / টান: ${ruleHarakat}`;
      harakat.style.display = 'block';
    } else {
      harakat.style.display = 'none';
    }

    const rect = el.getBoundingClientRect();
    const left = rect.left + rect.width / 2;
    const top = rect.top;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.classList.add('show');
    tooltip.setAttribute('aria-hidden', 'false');
  };

  const hideTooltip = () => {
    tooltip.classList.remove('show');
    tooltip.setAttribute('aria-hidden', 'true');
  };

  container.querySelectorAll('.tajweed-rule').forEach(el => {
    el.addEventListener('mouseenter', () => showTooltip(el));
    el.addEventListener('mouseleave', hideTooltip);
    el.addEventListener('touchstart', (e) => {
      showTooltip(el);
      e.stopPropagation();
    }, { passive: true });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.tajweed-rule')) {
      hideTooltip();
    }
  });
}
