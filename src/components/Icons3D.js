// ============================================
// EQRA — Ultra High-Definition 3D Vector Icons
// Rich volumetric lighting, metallic bevels, and claymorphic depth
// ============================================

/**
 * 3D Islamic Octagram (Rub-el-Hizb) Medallion for Surah Numbers
 */
export function renderSurah3DBadge(number, size = 44) {
  return `
    <div class="surah-3d-badge-wrap" style="width: ${size}px; height: ${size}px;">
      <svg viewBox="0 0 54 54" width="${size}" height="${size}" class="surah-3d-svg">
        <defs>
          <filter id="badge-depth-shadow-${number}" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#064E3B" flood-opacity="0.45" />
          </filter>
          <linearGradient id="gold-rim-${number}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF08A" />
            <stop offset="35%" stop-color="#F59E0B" />
            <stop offset="70%" stop-color="#B45309" />
            <stop offset="100%" stop-color="#78350F" />
          </linearGradient>
          <radialGradient id="emerald-sphere-${number}" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#34D399" />
            <stop offset="45%" stop-color="#059669" />
            <stop offset="85%" stop-color="#065F46" />
            <stop offset="100%" stop-color="#022C22" />
          </radialGradient>
          <linearGradient id="glaze-${number}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.65" />
            <stop offset="55%" stop-color="#ffffff" stop-opacity="0.0" />
          </linearGradient>
        </defs>

        <!-- Base 3D Drop Shadow Layer -->
        <g filter="url(#badge-depth-shadow-${number})">
          <!-- Outer Octagram Star Base 1 -->
          <rect x="9" y="9" width="36" height="36" rx="5" fill="url(#gold-rim-${number})" />
          <!-- Outer Octagram Star Base 2 (rotated 45) -->
          <rect x="9" y="9" width="36" height="36" rx="5" fill="url(#gold-rim-${number})" transform="rotate(45 27 27)" />
        </g>

        <!-- Inner Beveled Emerald Stars -->
        <rect x="11.5" y="11.5" width="31" height="31" rx="4" fill="url(#emerald-sphere-${number})" />
        <rect x="11.5" y="11.5" width="31" height="31" rx="4" fill="url(#emerald-sphere-${number})" transform="rotate(45 27 27)" />

        <!-- Center 3D Domed Medallion -->
        <circle cx="27" cy="27" r="14.5" fill="url(#emerald-sphere-${number})" stroke="url(#gold-rim-${number})" stroke-width="1.8" />
        <circle cx="27" cy="27" r="13" fill="none" stroke="#FEF08A" stroke-width="0.75" stroke-dasharray="2 1.5" opacity="0.85" />

        <!-- 3D Convex Gloss Highlight -->
        <ellipse cx="27" cy="18" rx="8.5" ry="4" fill="url(#glaze-${number})" />

        <!-- 3D Embossed Number -->
        <text x="27" y="31.5" font-family="'Inter', sans-serif" font-size="${number > 99 ? '11' : '13'}" font-weight="900" fill="#FFFFFF" text-anchor="middle" style="filter: drop-shadow(0 1.5px 1.5px rgba(0,0,0,0.7)); letter-spacing: -0.5px;">
          ${number}
        </text>
      </svg>
    </div>
  `;
}

/**
 * 3D Isometric Home Icon
 */
export const Icon3DHome = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="roof-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FB7185"/>
        <stop offset="100%" stop-color="#E11D48"/>
      </linearGradient>
      <linearGradient id="wall-left" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F8FAFC"/>
        <stop offset="100%" stop-color="#CBD5E1"/>
      </linearGradient>
      <linearGradient id="wall-right" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#94A3B8"/>
        <stop offset="100%" stop-color="#64748B"/>
      </linearGradient>
      <linearGradient id="door-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0284C7"/>
        <stop offset="100%" stop-color="#0369A1"/>
      </linearGradient>
      <filter id="icon-3d-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.25"/>
      </filter>
    </defs>
    <g filter="url(#icon-3d-glow)">
      <!-- Chimney -->
      <path d="M12 12 L16 14 V20 L12 18 Z" fill="#94A3B8"/>
      <path d="M16 14 L18 13 V18 L16 20 Z" fill="#64748B"/>
      <!-- Roof Left Side -->
      <polygon points="24,6 7,18 19,25 36,13" fill="url(#roof-grad)"/>
      <!-- Roof Right Side -->
      <polygon points="24,6 36,13 42,20 30,24" fill="#BE123C"/>
      <!-- Front Wall Left -->
      <polygon points="11,20 24,28 24,42 11,34" fill="url(#wall-left)"/>
      <!-- Front Wall Right -->
      <polygon points="24,28 37,20 37,34 24,42" fill="url(#wall-right)"/>
      <!-- 3D Door -->
      <polygon points="21,31 27,27 27,41 21,39" fill="url(#door-grad)"/>
      <circle cx="23" cy="35" r="1" fill="#FDE047"/>
    </g>
  </svg>
`;

/**
 * 3D Holy Quran Book Icon (Emerald with Gold Ornaments)
 */
export const Icon3DQuran = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="quran-cover-l" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#34D399"/>
        <stop offset="50%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#064E3B"/>
      </linearGradient>
      <linearGradient id="quran-cover-r" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#10B981"/>
        <stop offset="100%" stop-color="#047857"/>
      </linearGradient>
      <linearGradient id="quran-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="60%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#B45309"/>
      </linearGradient>
      <linearGradient id="quran-pages" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#E2E8F0"/>
      </linearGradient>
      <filter id="quran-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#065F46" flood-opacity="0.4"/>
      </filter>
    </defs>
    <g filter="url(#quran-shadow)">
      <!-- Book Base / Stand -->
      <path d="M12 40 L24 45 L36 40 L24 35 Z" fill="#78350F" opacity="0.8"/>
      <!-- Pages Block Left -->
      <path d="M8 32 C14 30 20 33 24 35 L24 13 C20 11 14 8 8 10 Z" fill="url(#quran-pages)"/>
      <!-- Pages Block Right -->
      <path d="M40 32 C34 30 28 33 24 35 L24 13 C28 11 34 8 40 10 Z" fill="url(#quran-pages)"/>
      <!-- Left Cover -->
      <path d="M6 34 C13 32 19 35 24 37 L24 11 C19 9 13 6 6 8 Z" fill="url(#quran-cover-l)" stroke="url(#quran-gold)" stroke-width="1.2"/>
      <!-- Right Cover -->
      <path d="M42 34 C35 32 29 35 24 37 L24 11 C29 9 35 6 42 8 Z" fill="url(#quran-cover-r)" stroke="url(#quran-gold)" stroke-width="1.2"/>
      <!-- Center Gold Rib & Ribbon -->
      <path d="M23 11 L25 11 L25 42 L23 40 Z" fill="url(#quran-gold)"/>
      <path d="M24 37 L21 44 L24 42 L27 44 Z" fill="#EF4444"/>
      <!-- Left Gold Medallion -->
      <circle cx="15" cy="20" r="4.5" fill="none" stroke="url(#quran-gold)" stroke-width="1.2"/>
      <polygon points="15,17 17,20 15,23 13,20" fill="url(#quran-gold)"/>
      <!-- Right Gold Medallion -->
      <circle cx="33" cy="20" r="4.5" fill="none" stroke="url(#quran-gold)" stroke-width="1.2"/>
      <polygon points="33,17 35,20 33,23 31,20" fill="url(#quran-gold)"/>
    </g>
  </svg>
`;

/**
 * 3D Antique Hadith Scroll Icon (Volumetric Parchment with Wax Seal)
 */
export const Icon3DHadith = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="scroll-paper" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFBEB"/>
        <stop offset="50%" stop-color="#FDE68A"/>
        <stop offset="100%" stop-color="#D97706"/>
      </linearGradient>
      <linearGradient id="scroll-roll" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#B45309"/>
        <stop offset="50%" stop-color="#FDE68A"/>
        <stop offset="100%" stop-color="#78350F"/>
      </linearGradient>
      <radialGradient id="wax-seal" cx="35%" cy="35%" r="70%">
        <stop offset="0%" stop-color="#F87171"/>
        <stop offset="60%" stop-color="#DC2626"/>
        <stop offset="100%" stop-color="#991B1B"/>
      </radialGradient>
      <filter id="hadith-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#78350F" flood-opacity="0.35"/>
      </filter>
    </defs>
    <g filter="url(#hadith-shadow)">
      <!-- Top Scroll Roll -->
      <rect x="8" y="6" width="30" height="7" rx="3.5" fill="url(#scroll-roll)"/>
      <ellipse cx="38" cy="9.5" rx="2" ry="3.5" fill="#78350F"/>
      <!-- Main Unrolled Sheet -->
      <path d="M10 11 H36 V36 C32 38 14 36 10 39 Z" fill="url(#scroll-paper)"/>
      <!-- Written Lines -->
      <line x1="14" y1="16" x2="32" y2="16" stroke="#92400E" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <line x1="14" y1="21" x2="30" y2="21" stroke="#92400E" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <line x1="14" y1="26" x2="26" y2="26" stroke="#92400E" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <!-- Bottom Scroll Roll -->
      <rect x="8" y="35" width="32" height="7" rx="3.5" fill="url(#scroll-roll)"/>
      <!-- Red Wax Seal with Ribbon -->
      <path d="M30 33 L28 44 L32 41 L36 44 L34 33 Z" fill="#DC2626"/>
      <circle cx="32" cy="33" r="5.5" fill="url(#wax-seal)" stroke="#FEF08A" stroke-width="0.8"/>
      <circle cx="32" cy="33" r="3" fill="none" stroke="#FEE2E2" stroke-width="0.5"/>
    </g>
  </svg>
`;

/**
 * 3D Sculpted Dua (Praying Hands with Divine Radiance)
 */
export const Icon3DDua = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <radialGradient id="aura-glow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.8"/>
        <stop offset="60%" stop-color="#F59E0B" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#D97706" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="hand-left" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="40%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#B45309"/>
      </linearGradient>
      <linearGradient id="hand-right" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FDE68A"/>
        <stop offset="40%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#92400E"/>
      </linearGradient>
      <filter id="dua-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#92400E" flood-opacity="0.35"/>
      </filter>
    </defs>
    <!-- Background Spiritual Radiance -->
    <circle cx="24" cy="22" r="18" fill="url(#aura-glow)"/>
    <g filter="url(#dua-shadow)">
      <!-- Left Praying Palm -->
      <path d="M12 36 C10 30 13 22 17 14 C18 12 21 13 20 16 L18 24 L22 18 C23 16 25 17 24 19 L21 27 L25 21 C26 19 28 20 27 23 L22 34 C20 38 15 40 12 36 Z" fill="url(#hand-left)"/>
      <!-- Right Praying Palm -->
      <path d="M36 36 C38 30 35 22 31 14 C30 12 27 13 28 16 L30 24 L26 18 C25 16 23 17 24 19 L27 27 L23 21 C22 19 20 20 21 23 L26 34 C28 38 33 40 36 36 Z" fill="url(#hand-right)"/>
      <!-- Central Light Sparkle -->
      <polygon points="24,10 25.5,13 28.5,14.5 25.5,16 24,19 22.5,16 19.5,14.5 22.5,13" fill="#FFFFFF"/>
    </g>
  </svg>
`;

/**
 * 3D Poro Book Icon (Sapphire Hardcover with Floating Glow)
 */
export const Icon3DPoro = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="poro-cover-main" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#38BDF8"/>
        <stop offset="40%" stop-color="#0284C7"/>
        <stop offset="100%" stop-color="#0369A1"/>
      </linearGradient>
      <linearGradient id="poro-spine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#0C4A6E"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <linearGradient id="poro-page-edge" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F8FAFC"/>
        <stop offset="100%" stop-color="#94A3B8"/>
      </linearGradient>
      <linearGradient id="poro-gold-leaf" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FDE047"/>
        <stop offset="100%" stop-color="#CA8A04"/>
      </linearGradient>
      <filter id="poro-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="1" dy="3" stdDeviation="2.5" flood-color="#0369A1" flood-opacity="0.45"/>
      </filter>
    </defs>
    <g filter="url(#poro-shadow)">
      <!-- Spine Back -->
      <path d="M10 8 L16 12 V40 L10 36 Z" fill="url(#poro-spine)"/>
      <!-- Pages Side -->
      <polygon points="16,39 38,34 38,10 16,13" fill="url(#poro-page-edge)"/>
      <!-- Front Hardcover (Iso 3D) -->
      <polygon points="15,9 37,5 41,33 17,39" fill="url(#poro-cover-main)" stroke="#7DD3FC" stroke-width="0.8"/>
      <!-- Golden Embossed Emblem -->
      <circle cx="28" cy="21" r="6" fill="none" stroke="url(#poro-gold-leaf)" stroke-width="1.2"/>
      <polygon points="28,17 30,21 28,25 26,21" fill="url(#poro-gold-leaf)"/>
      <!-- Red Silk Bookmark hanging out -->
      <path d="M28 5 L28 15 L25 13 L22 15 L22 5 Z" fill="#EF4444"/>
    </g>
  </svg>
`;

/**
 * 3D Golden Bookmark Ribbon Badge
 */
export const Icon3DBookmark = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="ribbon-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FDE047"/>
        <stop offset="40%" stop-color="#F59E0B"/>
        <stop offset="85%" stop-color="#D97706"/>
        <stop offset="100%" stop-color="#92400E"/>
      </linearGradient>
      <radialGradient id="ribbon-star" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="40%" stop-color="#FDE047"/>
        <stop offset="100%" stop-color="#B45309"/>
      </radialGradient>
      <filter id="ribbon-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#92400E" flood-opacity="0.4"/>
      </filter>
    </defs>
    <g filter="url(#ribbon-shadow)">
      <!-- 3D Hanging Ribbon -->
      <path d="M12 6 H36 V38 L24 29 L12 38 Z" fill="url(#ribbon-grad)"/>
      <path d="M34 6 V36 L24 28 L24 6 Z" fill="#B45309" opacity="0.3"/>
      <!-- 3D Star Medallion in Center -->
      <circle cx="24" cy="18" r="7" fill="url(#ribbon-star)" stroke="#78350F" stroke-width="0.8"/>
      <polygon points="24,13 25.5,16.5 29,17 26.5,19.5 27,23 24,21 21,23 21.5,19.5 19,17 22.5,16.5" fill="#78350F"/>
    </g>
  </svg>
`;

/**
 * 3D Crystal Magnifying Glass Icon (Search)
 */
export const Icon3DSearch = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <radialGradient id="glass-lens" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8"/>
        <stop offset="50%" stop-color="#BAE6FD" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#0284C7" stop-opacity="0.6"/>
      </radialGradient>
      <linearGradient id="lens-rim" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E2E8F0"/>
        <stop offset="50%" stop-color="#94A3B8"/>
        <stop offset="100%" stop-color="#475569"/>
      </linearGradient>
      <linearGradient id="handle-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F59E0B"/>
        <stop offset="50%" stop-color="#B45309"/>
        <stop offset="100%" stop-color="#78350F"/>
      </linearGradient>
      <filter id="search-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="1" dy="3" stdDeviation="2" flood-color="#0F172A" flood-opacity="0.35"/>
      </filter>
    </defs>
    <g filter="url(#search-shadow)">
      <!-- 3D Handle with Grip -->
      <rect x="29" y="27" width="8" height="17" rx="3.5" transform="rotate(-45 29 27)" fill="url(#handle-grad)" stroke="#451A03" stroke-width="0.8"/>
      <circle cx="39" cy="39" r="2.5" fill="#FEF08A"/>
      <!-- Metallic Outer Rim -->
      <circle cx="20" cy="20" r="14" fill="none" stroke="url(#lens-rim)" stroke-width="3.5"/>
      <!-- 3D Glass Lens with Refraction -->
      <circle cx="20" cy="20" r="12" fill="url(#glass-lens)"/>
      <!-- Specular Highlight Curve -->
      <path d="M12 16 A 9 9 0 0 1 23 11" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
    </g>
  </svg>
`;

/**
 * 3D Golden Crescent Moon Icon (Dark Mode Toggle)
 */
export const Icon3DMoon = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <radialGradient id="moon-gold" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="45%" stop-color="#F59E0B"/>
        <stop offset="85%" stop-color="#D97706"/>
        <stop offset="100%" stop-color="#78350F"/>
      </radialGradient>
      <linearGradient id="moon-glare" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
      </linearGradient>
      <filter id="moon-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#B45309" flood-opacity="0.45"/>
      </filter>
    </defs>
    <g filter="url(#moon-shadow)">
      <!-- 3D Volumetric Crescent -->
      <path d="M34 9 C20 9 10 20 10 33 C10 39 12 43 15 45 C13 41 12 36 12 31 C12 18 21 11 34 11 C37 11 41 12 43 14 C40 11 37 9 34 9 Z" fill="url(#moon-gold)"/>
      <!-- Surface Crater Detail -->
      <circle cx="17" cy="29" r="2.5" fill="#B45309" opacity="0.4"/>
      <circle cx="21" cy="21" r="1.8" fill="#B45309" opacity="0.35"/>
      <circle cx="27" cy="15" r="1.2" fill="#B45309" opacity="0.35"/>
      <!-- Inner Specular Glaze -->
      <path d="M30 11 C22 13 15 19 14 27" fill="none" stroke="url(#moon-glare)" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Floating 3D Star -->
      <polygon points="36,23 37.5,27 41.5,27.5 38.5,30.5 39.5,34.5 36,32 32.5,34.5 33.5,30.5 30.5,27.5 34.5,27" fill="#FDE047" stroke="#92400E" stroke-width="0.5"/>
    </g>
  </svg>
`;

/**
 * 3D Radiant Sun Icon (Light Mode Toggle)
 */
export const Icon3DSun = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <radialGradient id="sun-sphere" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#FEF9C3"/>
        <stop offset="40%" stop-color="#FBBF24"/>
        <stop offset="85%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#B45309"/>
      </radialGradient>
      <filter id="sun-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#D97706" flood-opacity="0.45"/>
      </filter>
    </defs>
    <g filter="url(#sun-shadow)">
      <!-- Rays -->
      <g stroke="#F59E0B" stroke-width="3" stroke-linecap="round">
        <line x1="24" y1="4" x2="24" y2="9"/>
        <line x1="24" y1="39" x2="24" y2="44"/>
        <line x1="4" y1="24" x2="9" y2="24"/>
        <line x1="39" y1="24" x2="44" y2="24"/>
        <line x1="10" y1="10" x2="14" y2="14"/>
        <line x1="34" y1="34" x2="38" y2="38"/>
        <line x1="10" y1="38" x2="14" y2="34"/>
        <line x1="34" y1="14" x2="38" y2="10"/>
      </g>
      <!-- Central 3D Sphere -->
      <circle cx="24" cy="24" r="11" fill="url(#sun-sphere)" stroke="#FEF08A" stroke-width="1"/>
      <ellipse cx="21" cy="18" rx="6" ry="3" fill="#FFFFFF" opacity="0.6"/>
    </g>
  </svg>
`;

/**
 * 3D Blue Information Orb (About)
 */
export const Icon3DAbout = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <radialGradient id="about-orb" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#60A5FA"/>
        <stop offset="50%" stop-color="#2563EB"/>
        <stop offset="100%" stop-color="#1E3A8A"/>
      </radialGradient>
      <filter id="about-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#1E3A8A" flood-opacity="0.4"/>
      </filter>
    </defs>
    <g filter="url(#about-shadow)">
      <circle cx="24" cy="24" r="16" fill="url(#about-orb)" stroke="#93C5FD" stroke-width="1.2"/>
      <ellipse cx="24" cy="14" rx="9" ry="4" fill="#FFFFFF" opacity="0.5"/>
      <circle cx="24" cy="18" r="2.2" fill="#FFFFFF"/>
      <rect x="22" y="23" width="4" height="11" rx="2" fill="#FFFFFF"/>
    </g>
  </svg>
`;

/**
 * 3D Play Button
 */
export const Icon3DPlay = `
  <svg viewBox="0 0 48 48" width="24" height="24" class="icon-3d-svg">
    <defs>
      <radialGradient id="play-sphere" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#34D399"/>
        <stop offset="60%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#064E3B"/>
      </radialGradient>
      <filter id="play-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#064E3B" flood-opacity="0.45"/>
      </filter>
    </defs>
    <g filter="url(#play-shadow)">
      <circle cx="24" cy="24" r="18" fill="url(#play-sphere)" stroke="#A7F3D0" stroke-width="1.5"/>
      <polygon points="20,15 33,24 20,33" fill="#FFFFFF" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));"/>
    </g>
  </svg>
`;

/**
 * 3D Pause Button
 */
export const Icon3DPause = `
  <svg viewBox="0 0 48 48" width="24" height="24" class="icon-3d-svg">
    <defs>
      <radialGradient id="pause-sphere" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#34D399"/>
        <stop offset="60%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#064E3B"/>
      </radialGradient>
      <filter id="pause-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#064E3B" flood-opacity="0.45"/>
      </filter>
    </defs>
    <g filter="url(#pause-shadow)">
      <circle cx="24" cy="24" r="18" fill="url(#pause-sphere)" stroke="#A7F3D0" stroke-width="1.5"/>
      <rect x="18" y="16" width="4" height="16" rx="1.5" fill="#FFFFFF" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));"/>
      <rect x="26" y="16" width="4" height="16" rx="1.5" fill="#FFFFFF" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));"/>
    </g>
  </svg>
`;

/**
 * 3D Speaker / Audio Wave Icon
 */
/**
 * 3D Speaker / Audio Wave Icon
 */
export const Icon3DAudio = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="speaker-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F1F5F9"/>
        <stop offset="50%" stop-color="#94A3B8"/>
        <stop offset="100%" stop-color="#475569"/>
      </linearGradient>
      <filter id="audio-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <g filter="url(#audio-shadow)">
      <!-- Speaker Cone -->
      <polygon points="12,18 18,18 26,11 26,37 18,30 12,30" fill="url(#speaker-grad)" stroke="#334155" stroke-width="1"/>
      <rect x="8" y="18" width="5" height="12" rx="1.5" fill="#334155"/>
      <!-- 3D Sound Waves with Emerald Glow -->
      <path d="M31 17 C34 21 34 27 31 31" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M36 12 C41 19 41 29 36 36" fill="none" stroke="#34D399" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  </svg>
`;

/**
 * 3D Golden Sparkle / Divine Illumination Icon
 */
export const Icon3DSparkle = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="sparkle-gold-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFBEB"/>
        <stop offset="30%" stop-color="#FDE047"/>
        <stop offset="70%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#B45309"/>
      </linearGradient>
      <filter id="sparkle-shadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#D97706" flood-opacity="0.5"/>
      </filter>
    </defs>
    <g filter="url(#sparkle-shadow)">
      <!-- 4-point Main 3D Diamond Star -->
      <path d="M24 4 C24 16 26 21 38 24 C26 27 24 32 24 44 C24 32 22 27 10 24 C22 21 24 16 24 4 Z" fill="url(#sparkle-gold-grad)"/>
      <!-- Diagonal Shorter 3D Rays -->
      <path d="M24 14 C26 19 29 22 34 24 C29 26 26 29 24 34 C22 29 19 26 14 24 C19 22 22 19 24 14 Z" fill="#FEF08A" opacity="0.8"/>
      <!-- Glowing Center Pearl -->
      <circle cx="24" cy="24" r="3" fill="#FFFFFF"/>
    </g>
  </svg>
`;

/**
 * 3D Clipboard Copy Icon
 */
export const Icon3DCopy = `
  <svg viewBox="0 0 48 48" width="20" height="20" class="icon-3d-svg">
    <defs>
      <linearGradient id="board-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#94A3B8"/>
        <stop offset="100%" stop-color="#475569"/>
      </linearGradient>
      <linearGradient id="paper-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#F1F5F9"/>
      </linearGradient>
      <linearGradient id="clip-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FDE047"/>
        <stop offset="100%" stop-color="#D97706"/>
      </linearGradient>
      <filter id="copy-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#0F172A" flood-opacity="0.3"/>
      </filter>
    </defs>
    <g filter="url(#copy-shadow)">
      <!-- Back Board -->
      <rect x="11" y="8" width="26" height="34" rx="4" fill="url(#board-grad)"/>
      <!-- Paper Sheet -->
      <rect x="14" y="12" width="20" height="27" rx="2" fill="url(#paper-grad)"/>
      <!-- Lines on Paper -->
      <line x1="17" y1="20" x2="31" y2="20" stroke="#CBD5E1" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="17" y1="25" x2="29" y2="25" stroke="#CBD5E1" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="17" y1="30" x2="25" y2="30" stroke="#CBD5E1" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Top 3D Golden Clip -->
      <rect x="19" y="5" width="10" height="6" rx="2" fill="url(#clip-gold)" stroke="#78350F" stroke-width="0.75"/>
    </g>
  </svg>
`;

/**
 * 3D Bookmark Faceted Gold Star (Filled)
 */
export const Icon3DStarFilled = `
  <svg viewBox="0 0 48 48" width="20" height="20" class="icon-3d-svg">
    <defs>
      <linearGradient id="star-f-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFBEB"/>
        <stop offset="40%" stop-color="#FBBF24"/>
        <stop offset="85%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#B45309"/>
      </linearGradient>
      <filter id="star-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#92400E" flood-opacity="0.45"/>
      </filter>
    </defs>
    <g filter="url(#star-shadow)">
      <!-- 3D Star Body -->
      <polygon points="24,4 30.2,16.5 44,18.5 34,28.2 36.4,42 24,35.5 11.6,42 14,28.2 4,18.5 17.8,16.5" fill="url(#star-f-grad)" stroke="#92400E" stroke-width="0.8"/>
      <!-- Faceted Shading Lines -->
      <polygon points="24,4 30.2,16.5 24,25" fill="#FFFFFF" opacity="0.35"/>
      <polygon points="44,18.5 34,28.2 24,25" fill="#B45309" opacity="0.25"/>
      <polygon points="36.4,42 24,35.5 24,25" fill="#78350F" opacity="0.35"/>
      <polygon points="11.6,42 14,28.2 24,25" fill="#FDE047" opacity="0.4"/>
      <polygon points="4,18.5 17.8,16.5 24,25" fill="#FFFFFF" opacity="0.3"/>
    </g>
  </svg>
`;

/**
 * 3D Star Outline Icon
 */
export const Icon3DStarOutline = `
  <svg viewBox="0 0 48 48" width="20" height="20" class="icon-3d-svg">
    <defs>
      <linearGradient id="star-out-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#94A3B8"/>
        <stop offset="100%" stop-color="#64748B"/>
      </linearGradient>
    </defs>
    <polygon points="24,6 29.5,17.2 42,19 33,27.8 35.1,40 24,34.2 12.9,40 15,27.8 6,19 18.5,17.2" fill="none" stroke="url(#star-out-grad)" stroke-width="2.5" stroke-linejoin="round"/>
  </svg>
`;

/**
 * 3D Share / Broadcast Nodes Icon
 */
export const Icon3DShare = `
  <svg viewBox="0 0 48 48" width="20" height="20" class="icon-3d-svg">
    <defs>
      <radialGradient id="node-blue" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#67E8F9"/>
        <stop offset="60%" stop-color="#06B6D4"/>
        <stop offset="100%" stop-color="#0E7490"/>
      </radialGradient>
      <filter id="share-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#0E7490" flood-opacity="0.35"/>
      </filter>
    </defs>
    <g filter="url(#share-shadow)">
      <!-- Connecting Tubes -->
      <line x1="14" y1="24" x2="34" y2="14" stroke="#94A3B8" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="14" y1="24" x2="34" y2="34" stroke="#94A3B8" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Source Node -->
      <circle cx="14" cy="24" r="7" fill="url(#node-blue)" stroke="#CFFAFE" stroke-width="1.2"/>
      <!-- Top Target Node -->
      <circle cx="34" cy="14" r="7" fill="url(#node-blue)" stroke="#CFFAFE" stroke-width="1.2"/>
      <!-- Bottom Target Node -->
      <circle cx="34" cy="34" r="7" fill="url(#node-blue)" stroke="#CFFAFE" stroke-width="1.2"/>
    </g>
  </svg>
`;

/**
 * 3D Ayah Rosette / Medallion Badge
 */
export function renderAyah3DBadge(number, size = 34) {
  return `
    <div class="ayah-3d-badge-wrap" style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg viewBox="0 0 44 44" width="${size}" height="${size}" class="ayah-3d-svg" style="overflow: visible;">
        <defs>
          <filter id="ayah-shadow-${number}" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#064E3B" flood-opacity="0.35" />
          </filter>
          <linearGradient id="ayah-gold-${number}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF08A" />
            <stop offset="50%" stop-color="#F59E0B" />
            <stop offset="100%" stop-color="#92400E" />
          </linearGradient>
          <radialGradient id="ayah-green-${number}" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#34D399" />
            <stop offset="60%" stop-color="#059669" />
            <stop offset="100%" stop-color="#064E3B" />
          </radialGradient>
        </defs>
        <g filter="url(#ayah-shadow-${number})">
          <!-- 3D 8-point Rosette Base -->
          <rect x="7" y="7" width="30" height="30" rx="4" fill="url(#ayah-gold-${number})" />
          <rect x="7" y="7" width="30" height="30" rx="4" fill="url(#ayah-gold-${number})" transform="rotate(45 22 22)" />
          <!-- Inner Emerald Circle -->
          <circle cx="22" cy="22" r="12" fill="url(#ayah-green-${number})" stroke="#FEF08A" stroke-width="1" />
          <!-- Embossed Number -->
          <text x="22" y="26" font-family="'Inter', sans-serif" font-size="${number > 99 ? '9' : '11'}" font-weight="800" fill="#FFFFFF" text-anchor="middle" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.6));">
            ${number}
          </text>
        </g>
      </svg>
    </div>
  `;
}

/**
 * 3D Clock / Reading Time Icon
 */
export const Icon3DTime = `
  <svg viewBox="0 0 48 48" width="20" height="20" class="icon-3d-svg">
    <defs>
      <radialGradient id="clock-face" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="70%" stop-color="#F1F5F9"/>
        <stop offset="100%" stop-color="#CBD5E1"/>
      </radialGradient>
      <linearGradient id="clock-rim" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#38BDF8"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <filter id="clock-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#0284C7" flood-opacity="0.3"/>
      </filter>
    </defs>
    <g filter="url(#clock-shadow)">
      <circle cx="24" cy="24" r="18" fill="url(#clock-rim)"/>
      <circle cx="24" cy="24" r="15" fill="url(#clock-face)"/>
      <!-- Hands -->
      <line x1="24" y1="24" x2="24" y2="14" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="24" y1="24" x2="31" y2="24" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <circle cx="24" cy="24" r="2" fill="#E11D48"/>
    </g>
  </svg>
`;

/**
 * 3D Document / Page Icon
 */
export const Icon3DDocument = `
  <svg viewBox="0 0 48 48" width="20" height="20" class="icon-3d-svg">
    <defs>
      <linearGradient id="doc-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#E2E8F0"/>
      </linearGradient>
      <linearGradient id="doc-fold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#CBD5E1"/>
        <stop offset="100%" stop-color="#94A3B8"/>
      </linearGradient>
      <filter id="doc-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#0F172A" flood-opacity="0.25"/>
      </filter>
    </defs>
    <g filter="url(#doc-shadow)">
      <path d="M12 6 H30 L38 14 V42 H12 Z" fill="url(#doc-grad)" stroke="#CBD5E1" stroke-width="1"/>
      <polygon points="30,6 38,14 30,14" fill="url(#doc-fold)"/>
      <line x1="16" y1="20" x2="32" y2="20" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
      <line x1="16" y1="26" x2="32" y2="26" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
      <line x1="16" y1="32" x2="26" y2="32" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
    </g>
  </svg>
`;

/**
 * 3D Science / Atomic Core Icon
 */
export const Icon3DScience = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <radialGradient id="atom-core" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#F43F5E"/>
        <stop offset="100%" stop-color="#9F1239"/>
      </radialGradient>
      <filter id="atom-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#0284C7" flood-opacity="0.3"/>
      </filter>
    </defs>
    <g filter="url(#atom-shadow)">
      <!-- Orbital 1 -->
      <ellipse cx="24" cy="24" rx="19" ry="7" fill="none" stroke="#0284C7" stroke-width="2" transform="rotate(30 24 24)"/>
      <!-- Orbital 2 -->
      <ellipse cx="24" cy="24" rx="19" ry="7" fill="none" stroke="#10B981" stroke-width="2" transform="rotate(-30 24 24)"/>
      <!-- Orbital 3 -->
      <ellipse cx="24" cy="24" rx="19" ry="7" fill="none" stroke="#F59E0B" stroke-width="2" transform="rotate(90 24 24)"/>
      <!-- Glowing Core -->
      <circle cx="24" cy="24" r="5" fill="url(#atom-core)" stroke="#FFE4E6" stroke-width="1"/>
    </g>
  </svg>
`;

/**
 * 3D Reflection / Glowing Idea Bulb Icon
 */
export const Icon3DReflection = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <radialGradient id="bulb-glow" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#FFFBEB"/>
        <stop offset="40%" stop-color="#FDE047"/>
        <stop offset="80%" stop-color="#EAB308"/>
        <stop offset="100%" stop-color="#CA8A04"/>
      </radialGradient>
      <filter id="bulb-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#CA8A04" flood-opacity="0.4"/>
      </filter>
    </defs>
    <g filter="url(#bulb-shadow)">
      <path d="M24 6 C15 6 12 13 12 19 C12 24 16 27 18 31 H30 C32 27 36 24 36 19 C36 13 33 6 24 6 Z" fill="url(#bulb-glow)"/>
      <!-- Base Screw -->
      <rect x="19" y="32" width="10" height="3" rx="1.5" fill="#94A3B8"/>
      <rect x="20" y="36" width="8" height="3" rx="1.5" fill="#64748B"/>
      <path d="M22 39 H26 L24 42 Z" fill="#475569"/>
      <!-- Specular Highlight -->
      <ellipse cx="20" cy="14" rx="4" ry="2" fill="#FFFFFF" opacity="0.6"/>
    </g>
  </svg>
`;

/**
 * 3D Mail / Feedback Envelope Icon
 */
export const Icon3DFeedback = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="env-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#60A5FA"/>
        <stop offset="100%" stop-color="#2563EB"/>
      </linearGradient>
      <filter id="env-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#1E40AF" flood-opacity="0.35"/>
      </filter>
    </defs>
    <g filter="url(#env-shadow)">
      <rect x="6" y="10" width="36" height="28" rx="4" fill="url(#env-grad)"/>
      <polygon points="6,12 24,26 42,12" fill="#93C5FD"/>
      <circle cx="24" cy="26" r="3.5" fill="#F59E0B" stroke="#FEF08A" stroke-width="0.8"/>
    </g>
  </svg>
`;

/**
 * 3D Metaphors / Drama Masks Icon
 */
export const Icon3DMetaphor = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="mask-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#A78BFA"/>
        <stop offset="100%" stop-color="#7C3AED"/>
      </linearGradient>
      <filter id="mask-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#6D28D9" flood-opacity="0.35"/>
      </filter>
    </defs>
    <g filter="url(#mask-shadow)">
      <path d="M12 10 C12 8 36 8 36 10 C36 24 33 38 24 40 C15 38 12 24 12 10 Z" fill="url(#mask-grad)"/>
      <!-- Eyes -->
      <ellipse cx="19" cy="18" rx="3" ry="4" fill="#EDE9FE"/>
      <ellipse cx="29" cy="18" rx="3" ry="4" fill="#EDE9FE"/>
      <!-- Smile -->
      <path d="M18 28 Q 24 35 30 28" fill="none" stroke="#EDE9FE" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  </svg>
`;

/**
 * 3D Faith & Logic Icon (Balance Scale of Wisdom & Light)
 */
export const Icon3DLogic = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="scale-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FDE047"/>
        <stop offset="60%" stop-color="#D97706"/>
        <stop offset="100%" stop-color="#92400E"/>
      </linearGradient>
      <radialGradient id="logic-glow" cx="50%" cy="30%" r="50%">
        <stop offset="0%" stop-color="#60A5FA"/>
        <stop offset="100%" stop-color="#1D4ED8"/>
      </radialGradient>
      <filter id="scale-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#78350F" flood-opacity="0.4"/>
      </filter>
    </defs>
    <g filter="url(#scale-shadow)">
      <!-- Center Pillar -->
      <rect x="22" y="8" width="4" height="32" rx="2" fill="url(#scale-gold)"/>
      <circle cx="24" cy="8" r="4.5" fill="url(#logic-glow)" stroke="#FEF08A" stroke-width="1"/>
      <rect x="14" y="38" width="20" height="4" rx="2" fill="url(#scale-gold)"/>
      <!-- Balance Beam -->
      <path d="M8 15 L40 15" stroke="url(#scale-gold)" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Left Pan -->
      <line x1="12" y1="15" x2="8" y2="25" stroke="#F59E0B" stroke-width="1.2"/>
      <line x1="12" y1="15" x2="16" y2="25" stroke="#F59E0B" stroke-width="1.2"/>
      <path d="M6 25 Q 12 31 18 25 Z" fill="url(#scale-gold)"/>
      <!-- Right Pan -->
      <line x1="36" y1="15" x2="32" y2="25" stroke="#F59E0B" stroke-width="1.2"/>
      <line x1="36" y1="15" x2="40" y2="25" stroke="#F59E0B" stroke-width="1.2"/>
      <path d="M30 25 Q 36 31 42 25 Z" fill="url(#scale-gold)"/>
    </g>
  </svg>
`;

/**
 * 3D Paradoxical Sajid 1 Book Icon (Crimson / Night Shadow)
 */
export const Icon3DBookSajid1 = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="sajid1-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#EF4444"/>
        <stop offset="60%" stop-color="#991B1B"/>
        <stop offset="100%" stop-color="#450A0A"/>
      </linearGradient>
      <filter id="sajid1-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#7F1D1D" flood-opacity="0.4"/>
      </filter>
    </defs>
    <g filter="url(#sajid1-shadow)">
      <rect x="9" y="7" width="30" height="34" rx="3.5" fill="url(#sajid1-grad)"/>
      <rect x="9" y="7" width="5" height="34" rx="2" fill="#7F1D1D"/>
      <rect x="18" y="14" width="16" height="3.5" rx="1.5" fill="#FEF08A"/>
      <rect x="18" y="21" width="12" height="2" rx="1" fill="#FCA5A5" opacity="0.8"/>
      <!-- Gold Badge '1' -->
      <circle cx="31" cy="31" r="5" fill="#F59E0B" stroke="#FEF08A" stroke-width="0.8"/>
      <text x="31" y="34.5" font-family="'Inter', sans-serif" font-size="7.5" font-weight="900" fill="#78350F" text-anchor="middle">1</text>
    </g>
  </svg>
`;

/**
 * 3D Paradoxical Sajid 2 Book Icon (Emerald Green)
 */
export const Icon3DBookSajid2 = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="sajid2-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#10B981"/>
        <stop offset="60%" stop-color="#047857"/>
        <stop offset="100%" stop-color="#064E3B"/>
      </linearGradient>
      <filter id="sajid2-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#064E3B" flood-opacity="0.4"/>
      </filter>
    </defs>
    <g filter="url(#sajid2-shadow)">
      <rect x="9" y="7" width="30" height="34" rx="3.5" fill="url(#sajid2-grad)"/>
      <rect x="9" y="7" width="5" height="34" rx="2" fill="#064E3B"/>
      <rect x="18" y="14" width="16" height="3.5" rx="1.5" fill="#FEF08A"/>
      <rect x="18" y="21" width="12" height="2" rx="1" fill="#A7F3D0" opacity="0.8"/>
      <!-- Gold Badge '2' -->
      <circle cx="31" cy="31" r="5" fill="#F59E0B" stroke="#FEF08A" stroke-width="0.8"/>
      <text x="31" y="34.5" font-family="'Inter', sans-serif" font-size="7.5" font-weight="900" fill="#78350F" text-anchor="middle">2</text>
    </g>
  </svg>
`;

/**
 * 3D Kaaba Icon for Umrah Portal (Volumetric Black Cube with Gold Kiswah Band & Door)
 */
export const Icon3DUmrah = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="kaaba-top" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#334155"/>
        <stop offset="100%" stop-color="#1E293B"/>
      </linearGradient>
      <linearGradient id="kaaba-left" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </linearGradient>
      <linearGradient id="kaaba-right" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>
      <linearGradient id="kaaba-gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="50%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#B45309"/>
      </linearGradient>
      <filter id="kaaba-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
    </defs>
    <g filter="url(#kaaba-shadow)">
      <!-- Top Face (Isometric) -->
      <polygon points="24,6 38,13 24,20 10,13" fill="url(#kaaba-top)"/>
      <!-- Left Face -->
      <polygon points="10,13 24,20 24,40 10,33" fill="url(#kaaba-left)"/>
      <!-- Right Face -->
      <polygon points="24,20 38,13 38,33 24,40" fill="url(#kaaba-right)"/>
      <!-- Golden Kiswah Band (Left Face) -->
      <polygon points="10,17 24,24 24,26.5 10,19.5" fill="url(#kaaba-gold)"/>
      <!-- Golden Kiswah Band (Right Face) -->
      <polygon points="24,24 38,17 38,19.5 24,26.5" fill="url(#kaaba-gold)"/>
      <!-- Golden Door (Bab al-Kaaba) on Right Face -->
      <polygon points="28,26 34,23 34,33 28,36" fill="url(#kaaba-gold)" stroke="#78350F" stroke-width="0.5"/>
      <!-- Hajar al-Aswad Corner Glow -->
      <circle cx="24" cy="40" r="1.5" fill="#FFFFFF" opacity="0.9"/>
    </g>
  </svg>
`;

/**
 * 3D Interactive Checklist Icon
 */
export const Icon3DChecklist = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="check-board" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#38BDF8"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <filter id="check-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#0369A1" flood-opacity="0.35"/>
      </filter>
    </defs>
    <g filter="url(#check-shadow)">
      <rect x="10" y="8" width="28" height="34" rx="4" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <rect x="17" y="5" width="14" height="6" rx="2" fill="url(#check-board)"/>
      <!-- Checklist Row 1 -->
      <circle cx="16" cy="18" r="2.5" fill="#10B981"/>
      <line x1="22" y1="18" x2="33" y2="18" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
      <!-- Checklist Row 2 -->
      <circle cx="16" cy="26" r="2.5" fill="#10B981"/>
      <line x1="22" y1="26" x2="31" y2="26" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
      <!-- Checklist Row 3 -->
      <circle cx="16" cy="34" r="2.5" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/>
      <line x1="22" y1="34" x2="29" y2="34" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
    </g>
  </svg>
`;

/**
 * 3D Compass Icon for Miqat & Direction
 */
export const Icon3DCompass = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="comp-ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FBBF24"/>
        <stop offset="50%" stop-color="#D97706"/>
        <stop offset="100%" stop-color="#78350F"/>
      </linearGradient>
      <filter id="comp-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#78350F" flood-opacity="0.3"/>
      </filter>
    </defs>
    <g filter="url(#comp-shadow)">
      <circle cx="24" cy="24" r="17" fill="#0F172A" stroke="url(#comp-ring)" stroke-width="2.5"/>
      <polygon points="24,10 28,24 24,21 20,24" fill="#EF4444"/>
      <polygon points="24,38 28,24 24,27 20,24" fill="#E2E8F0"/>
      <circle cx="24" cy="24" r="3" fill="#FBBF24"/>
    </g>
  </svg>
`;

/**
 * 3D Tawaf Orbit Icon
 */
export const Icon3DTawaf = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <circle cx="24" cy="24" r="16" fill="none" stroke="#0284C7" stroke-width="2.5" stroke-dasharray="8 4"/>
    <rect x="20" y="20" width="8" height="8" rx="1.5" fill="#0F172A" stroke="#F59E0B" stroke-width="1"/>
    <polygon points="38,20 42,24 38,28" fill="#0284C7"/>
  </svg>
`;

/**
 * 3D Sa'i Hills Icon
 */
export const Icon3DSai = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <path d="M6,36 L18,18 L26,30 L34,14 L42,36 Z" fill="#059669" opacity="0.85"/>
    <line x1="8" y1="38" x2="40" y2="38" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
  </svg>
`;

/**
 * 3D Vocabulary Flashcards Icon
 */
export const Icon3DVocab = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="vocab-card1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#38BDF8"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <linearGradient id="vocab-card2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#34D399"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
      <filter id="vocab-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#0284C7" flood-opacity="0.3"/>
      </filter>
    </defs>
    <g filter="url(#vocab-shadow)">
      <!-- Back Card -->
      <rect x="14" y="6" width="26" height="34" rx="4" fill="url(#vocab-card2)" transform="rotate(8 27 23)" opacity="0.75"/>
      <!-- Front Card -->
      <rect x="8" y="8" width="26" height="34" rx="4" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <rect x="12" y="12" width="18" height="14" rx="2" fill="url(#vocab-card1)"/>
      <text x="21" y="23" font-family="'Inter', sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle">50%</text>
      <line x1="12" y1="30" x2="28" y2="30" stroke="#0F172A" stroke-width="2" stroke-linecap="round"/>
      <line x1="12" y1="35" x2="22" y2="35" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
    </g>
  </svg>
`;

/**
 * 3D Percentage Pie Chart Icon
 */
export const Icon3DPercentPie = `
  <svg viewBox="0 0 48 48" width="22" height="22" class="icon-3d-svg">
    <defs>
      <linearGradient id="pie-blue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#38BDF8"/>
        <stop offset="100%" stop-color="#0284C7"/>
      </linearGradient>
      <linearGradient id="pie-amber" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FBBF24"/>
        <stop offset="100%" stop-color="#D97706"/>
      </linearGradient>
      <filter id="pie-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#0284C7" flood-opacity="0.3"/>
      </filter>
    </defs>
    <g filter="url(#pie-shadow)">
      <circle cx="24" cy="24" r="17" fill="url(#pie-amber)"/>
      <!-- 50% Slice (Blue) -->
      <path d="M 24,7 A 17,17 0 0,1 24,41 L 24,24 Z" fill="url(#pie-blue)"/>
      <circle cx="24" cy="24" r="6" fill="#0F172A"/>
      <text x="24" y="27" font-family="'Inter', sans-serif" font-size="7" font-weight="900" fill="#FFFFFF" text-anchor="middle">%</text>
    </g>
  </svg>
`;

