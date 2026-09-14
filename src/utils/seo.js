// ============================================
// EQRA — SEO & Meta Utilities
// ============================================

/**
 * Update page meta tags dynamically
 * @param {object} meta - Meta configuration
 */
export function updateMeta(meta = {}) {
  const {
    title = 'EQRA — কুরআন পড়ুন, বুঝুন, চিন্তা করুন',
    description = 'বাংলা ও ইংরেজিতে কুরআন, হাদিস, দোয়া এবং কুরআনভিত্তিক জ্ঞান।',
    lang = 'bn',
    canonicalPath = '',
    type = 'website',
    image = '',
  } = meta;

  // Title
  document.title = title;

  // Meta description
  setMeta('description', description);

  // Open Graph
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:type', type, 'property');
  setMeta('og:locale', lang === 'bn' ? 'bn_BD' : 'en_US', 'property');
  if (image) setMeta('og:image', image, 'property');

  // Twitter
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);

  // Canonical
  const base = 'https://eqra.com';
  setLink('canonical', `${base}/${canonicalPath}`);

  // Hreflang
  const bnPath = canonicalPath.replace(/^(#\/)?en\//, '#/bn/');
  const enPath = canonicalPath.replace(/^(#\/)?bn\//, '#/en/');
  setLink('alternate', `${base}/${bnPath}`, 'bn');
  setLink('alternate', `${base}/${enPath}`, 'en');

  // HTML lang
  document.documentElement.lang = lang;
}

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Add JSON-LD structured data to page
 * @param {object} data - Schema.org JSON-LD object
 */
export function setStructuredData(data) {
  let el = document.getElementById('page-structured-data');
  if (!el) {
    el = document.createElement('script');
    el.id = 'page-structured-data';
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Generate BreadcrumbList structured data
 * @param {Array<{name: string, url: string}>} items
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url ? `https://eqra.com/${item.url}` : undefined,
    })),
  };
}
