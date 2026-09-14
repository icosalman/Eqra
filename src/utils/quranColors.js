// ============================================
// EQRA — Color-Coded Quran & Tajweed Typography
// Highlighting:
// - Sacred Name of Allah (Lafz al-Jalalah) -> Crimson Red
// - Madd (Elongations ~ ٓ ۤ) -> Royal Violet/Purple
// - Ghunnah (Noon & Meem Mushaddad نّ مّ) -> Emerald Green
// - Qalqalah (ق ط ب ج د with sukun) -> Warm Amber/Orange
// - Waqf & Stop Marks (ۖ ۗ ۚ ۛ ۜ ۞ ۩) -> Sky Blue
// - Ayah End Signs (۝) -> Golden Amber
// ============================================

/**
 * Format Arabic Quran text with semantic color-coded Tajweed markup
 * @param {string} text 
 * @returns {string} HTML string with colored spans
 */
export function formatColorCodedQuran(text) {
  if (!text || typeof text !== 'string') return text || '';

  let res = text;

  // 1. Ayah End Signs (۝ or \u06DD with optional numbers)
  res = res.replace(/([\u06DD۝][\s\u0660-\u06690-9]*)/g, '<span class="quran-color-ayah-end">$1</span>');

  // 2. Waqf / Pause marks (ۖ, ۗ, ۚ, ۛ, ۜ, ۞, ۩, ۘ, ۙ)
  res = res.replace(/([\u06D6-\u06DC\u06DE\u06E9\u06D8\u06D9])/g, '<span class="quran-color-waqf">$1</span>');

  // 3. Sacred Name of Allah (Lafz al-Jalalah: ٱللَّهِ, ٱللَّهُ, ٱللَّهَ, لِلَّهِ, اللَّهُ, الله, لله)
  const diacritics = '[\\u064B-\\u065F\\u0670]*';
  const allahRegex = new RegExp(
    '([وفبت]?' + diacritics + ')' +
    '([\\u0671\\u0627]?' + diacritics + '\\u0644' + diacritics + '\\u0644' + diacritics + '\\u0651' + diacritics + '\\u0647' + diacritics + '|' +
    '[\\u0644]' + diacritics + '\\u0644' + diacritics + '\\u0651' + diacritics + '\\u0647' + diacritics + '|' +
    '[\\u0671\\u0627]?' + diacritics + '\\u0644' + diacritics + '\\u0644' + diacritics + '\\u0647' + diacritics + ')',
    'g'
  );
  res = res.replace(allahRegex, (match, pfx, core) => {
    return (pfx || '') + '<span class="quran-color-allah">' + core + '</span>';
  });

  // 4. Madd (Madd sign ٓ \u0653, ۤ \u06E4, or \u0622)
  res = res.replace(
    /([\u0622]|[\u0621-\u064A\u0670-\u0672][\u064B-\u065F\u0670]*[\u0653\u06E4~][\u064B-\u065F\u0670]*)/g,
    '<span class="quran-color-madd">$1</span>'
  );

  // 5. Ghunnah (Noon/Meem with Shaddah: نّ or مّ)
  res = res.replace(
    new RegExp('([\\u0646\\u0645]' + diacritics + '\\u0651' + diacritics + ')', 'g'),
    '<span class="quran-color-ghunnah">$1</span>'
  );

  // 6. Qalqalah (ق, ط, ب, ج, د with sukun ْ \u0652 or ۡ \u06E1)
  res = res.replace(
    new RegExp('([\\u0642\\u0637\\u0628\\u062C\\u062F][\\u0652\\u06E1])', 'g'),
    '<span class="quran-color-qalqalah">$1</span>'
  );

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
        <span class="tajweed-legend-badge">🎨 ${isBn ? 'কালার কোডেড তাজবীদ কুরআন' : 'Color Coded Tajweed'}</span>
        <span class="tajweed-legend-hint">${isBn ? 'সহজে পড়ার নিয়মাবলি ▾' : 'Legend ▾'}</span>
      </div>
      <div class="tajweed-legend-content" id="tajweed-legend-dropdown">
        <div class="tajweed-pill">
          <span class="tajweed-dot dot-allah"></span>
          <span class="tajweed-label">${isBn ? 'আল্লাহর নাম (রক্তিম)' : 'Name of Allah'}</span>
        </div>
        <div class="tajweed-pill">
          <span class="tajweed-dot dot-madd"></span>
          <span class="tajweed-label">${isBn ? 'মদ্দ / দীর্ঘ টান (বেগুনি)' : 'Madd / Stretch'}</span>
        </div>
        <div class="tajweed-pill">
          <span class="tajweed-dot dot-ghunnah"></span>
          <span class="tajweed-label">${isBn ? 'ওয়াজিব গুন্নাহ (সবুজ)' : 'Ghunnah'}</span>
        </div>
        <div class="tajweed-pill">
          <span class="tajweed-dot dot-qalqalah"></span>
          <span class="tajweed-label">${isBn ? 'কলকলা / ধাক্কা (কমলা)' : 'Qalqalah'}</span>
        </div>
        <div class="tajweed-pill">
          <span class="tajweed-dot dot-waqf"></span>
          <span class="tajweed-label">${isBn ? 'ওয়াকফ ও বিরতি (নীল)' : 'Waqf / Pause'}</span>
        </div>
      </div>
    </div>
  `;
}
