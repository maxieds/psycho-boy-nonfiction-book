/**
 * DroidXP — central site configuration (AdSense, GA4)
 */
const DROIDXP_CONFIG = {
  site: {
    name: 'DroidXP',
    url: 'https://droidxp.com',
    tagline: '100+ Free Tools for Android, Dev & Gaming',
  },
  adsense: {
    // Set enabled: true only AFTER AdSense approves your site.
    // During review, keep false — hides ad slots and avoids "made for ads" signals.
    enabled: false,
    clientId: 'ca-pub-4660446874660815',
    slots: {
      topBanner: '1758195990',
      midRectangle: '7472485272',
      sidebarRect: '3642123305',
      inArticle: '3424793232',
      multiplex: '7010522674',
    },
  },
  analytics: {
    ga4Id: 'G-4816HPSHTZ',
  },
};

(function () {
  const adsEnabled = DROIDXP_CONFIG.adsense && DROIDXP_CONFIG.adsense.enabled === true;
  const adsClientId = String(DROIDXP_CONFIG.adsense.clientId || '').trim();
  const looksLikeAdsenseClient = /^ca-pub-\d{10,}$/.test(adsClientId);
  const isAdsensePlaceholder = /X{3,}/i.test(adsClientId);
  if (adsEnabled && looksLikeAdsenseClient && !isAdsensePlaceholder) {
    const a = document.createElement('script');
    a.async = true;
    a.crossOrigin = 'anonymous';
    a.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(adsClientId);
    document.head.appendChild(a);
  }

  const ga4Id = String(DROIDXP_CONFIG.analytics.ga4Id || '').trim();
  // Enable GA only when the ID looks real (and not a placeholder).
  // Examples: G-XXXXXXXXXX, G-0000000000, empty -> disabled.
  const looksLikeGa4 = /^G-[A-Z0-9]{6,}$/i.test(ga4Id);
  const isGaPlaceholder = /X{3,}/i.test(ga4Id) || /^G-0+$/i.test(ga4Id);
  if (!looksLikeGa4 || isGaPlaceholder) return;

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ga4Id);
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', ga4Id);
})();
