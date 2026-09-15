/**
 * DroidXP — shared bootstrap: header/footer, header search
 */
const DXP_FAVICON = '/assets/images/favicon.ico';

function ensureFavicon() {
  const existing =
    document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
  if (existing) {
    const href = String(existing.getAttribute('href') || '');
    if (/logo\.svg|logo-mark/i.test(href)) {
      existing.setAttribute('href', DXP_FAVICON);
      existing.setAttribute('type', 'image/x-icon');
    }
    return;
  }
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = DXP_FAVICON;
  link.type = 'image/x-icon';
  document.head.appendChild(link);
}

async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(res.statusText);
    el.innerHTML = await res.text();
  } catch (e) {
    console.warn('Could not load ' + file, e);
  }
}

function dxpGetTheme() {
  try {
    const stored = localStorage.getItem('dxp-theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (e) {}
  return 'light';
}

function dxpSetTheme(theme) {
  const t = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', t);
  try {
    localStorage.setItem('dxp-theme', t);
  } catch (e) {}
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    btn.setAttribute('title', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.innerHTML = t === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  }
}

function initThemeToggle() {
  dxpSetTheme(dxpGetTheme());
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    dxpSetTheme(cur === 'dark' ? 'light' : 'dark');
  });
}

function initHeaderSearch() {
  const form = document.getElementById('header-search-form');
  const input = document.getElementById('header-search');
  if (!form || !input) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const q = (input.value || '').trim();
    const base = '/index.html';
    if (!q) {
      window.location.href = base;
      return;
    }
    window.location.href = base + '?q=' + encodeURIComponent(q);
  });
}

function initScrollToTop() {
  const btn = document.getElementById('dxp-to-top');
  if (!btn) return;

  function setVisible(v) {
    if (v) {
      btn.hidden = false;
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
      // delay hiding so transition can finish
      window.setTimeout(function () {
        if (!btn.classList.contains('is-visible')) btn.hidden = true;
      }, 180);
    }
  }

  function onScroll() {
    setVisible(window.scrollY > 500);
  }

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initStickyHeaderOnScroll() {
  const header = document.querySelector('.dxp-header');
  if (!header) return;

  function syncHeaderHeightVar() {
    const h = header.getBoundingClientRect().height || 0;
    document.documentElement.style.setProperty('--dxp-header-h', h + 'px');
  }

  function onScroll() {
    const scrolled = window.scrollY > 8;
    if (scrolled) header.classList.add('is-sticky', 'dxp-header--fixed');
    else header.classList.remove('is-sticky', 'dxp-header--fixed');
  }

  window.addEventListener('resize', syncHeaderHeightVar);
  // after header HTML is injected, ensure we measure
  syncHeaderHeightVar();
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function dxpAdsEnabled() {
  try {
    if (typeof DROIDXP_CONFIG === 'undefined') return false;
    const cfg = DROIDXP_CONFIG && DROIDXP_CONFIG.adsense ? DROIDXP_CONFIG.adsense : null;
    return !!(cfg && cfg.enabled === true);
  } catch (e) {
    return false;
  }
}

function dxpHideAdPlacements() {
  document.querySelectorAll('.ad-banner, .ad-unit, [data-dxp-ad]').forEach(function (el) {
    const wrap = el.closest('.container');
    if (wrap && wrap.querySelector('.ad-banner, .ad-unit, [data-dxp-ad]') === el && wrap.children.length === 1) {
      wrap.hidden = true;
      wrap.style.display = 'none';
    } else {
      el.hidden = true;
      el.style.display = 'none';
    }
  });
}

function dxpGetAdsenseConfig() {
  try {
    if (!dxpAdsEnabled()) return null;
    if (typeof DROIDXP_CONFIG === 'undefined') return null;
    const cfg = DROIDXP_CONFIG && DROIDXP_CONFIG.adsense ? DROIDXP_CONFIG.adsense : null;
    if (!cfg) return null;
    const clientId = String(cfg.clientId || '').trim();
    const slots = cfg.slots || {};
    if (!/^ca-pub-\d{10,}$/.test(clientId)) return null;
    return { clientId: clientId, slots: slots };
  } catch (e) {
    return null;
  }
}

function dxpCreateAdIns(clientId, slotId) {
  const ins = document.createElement('ins');
  ins.className = 'adsbygoogle';
  ins.style.display = 'block';
  ins.setAttribute('data-ad-client', clientId);
  ins.setAttribute('data-ad-slot', String(slotId || '').trim());
  ins.setAttribute('data-ad-format', 'auto');
  ins.setAttribute('data-full-width-responsive', 'true');
  return ins;
}

function dxpPushAd() {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    // Ad blockers / script not ready; fail silently.
  }
}

function dxpRenderAdInto(el, clientId, slotId) {
  if (!el || el.dataset.dxpAdRendered === '1') return;
  const slot = String(slotId || '').trim();
  if (!/^\d{5,}$/.test(slot)) return;
  el.innerHTML = '';
  el.appendChild(dxpCreateAdIns(clientId, slot));
  el.dataset.dxpAdRendered = '1';
  dxpPushAd();
}

function dxpEnsureGlobalAdPlacements() {
  if (!dxpAdsEnabled()) {
    dxpHideAdPlacements();
    return;
  }
  const ads = dxpGetAdsenseConfig();
  if (!ads) {
    dxpHideAdPlacements();
    return;
  }

  // Ensure a top banner exists on pages that don't already have one.
  if (!document.querySelector('.ad-banner--top')) {
    const headerMount = document.getElementById('header-placeholder');
    if (headerMount && headerMount.parentNode) {
      const wrap = document.createElement('div');
      wrap.className = 'container mb-4';
      wrap.innerHTML = '<div class="ad-banner ad-banner--top text-center"></div>';
      headerMount.parentNode.insertBefore(wrap, headerMount.nextSibling);
    }
  }

  // Ensure a mid-rectangle exists near the bottom if missing.
  if (!document.querySelector('.ad-banner--rect')) {
    const footerMount = document.getElementById('footer-placeholder');
    if (footerMount && footerMount.parentNode) {
      const wrap = document.createElement('div');
      wrap.className = 'container mb-5';
      wrap.innerHTML = '<div class="ad-banner ad-banner--rect text-center"></div>';
      footerMount.parentNode.insertBefore(wrap, footerMount);
    }
  }

  // Ensure an in-article placement exists for tool pages / long-form pages.
  if (!document.querySelector('[data-dxp-ad="inArticle"]')) {
    const contentRoot = document.querySelector('.tool-content') || document.querySelector('main');
    if (contentRoot) {
      const paragraphs = contentRoot.querySelectorAll('p');
      const anchor = paragraphs && paragraphs.length >= 2 ? paragraphs[1] : null;
      const wrap = document.createElement('div');
      wrap.className = 'container my-4';
      wrap.innerHTML = '<div class="ad-banner ad-banner--inarticle text-center" data-dxp-ad="inArticle"></div>';
      if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(wrap, anchor.nextSibling);
      else contentRoot.insertBefore(wrap, contentRoot.firstChild);
    }
  }

  // Ensure a multiplex placement exists (best near bottom / related tools).
  if (!document.querySelector('[data-dxp-ad="multiplex"]')) {
    const footerMount = document.getElementById('footer-placeholder');
    const anchor = document.querySelector('#related-tools') || document.querySelector('main');
    if (footerMount && footerMount.parentNode) {
      const wrap = document.createElement('div');
      wrap.className = 'container mb-5';
      wrap.innerHTML = '<div class="ad-banner ad-banner--multiplex text-center" data-dxp-ad="multiplex"></div>';
      // Prefer inserting before footer, so it appears near bottom.
      footerMount.parentNode.insertBefore(wrap, footerMount);
    } else if (anchor && anchor.parentNode) {
      const wrap = document.createElement('div');
      wrap.className = 'container mb-5';
      wrap.innerHTML = '<div class="ad-banner ad-banner--multiplex text-center" data-dxp-ad="multiplex"></div>';
      anchor.parentNode.appendChild(wrap);
    }
  }

  // Render into all known placeholders (existing or auto-inserted).
  document.querySelectorAll('.ad-banner--top').forEach(function (el) {
    dxpRenderAdInto(el, ads.clientId, ads.slots.topBanner);
  });
  document.querySelectorAll('.ad-banner--rect').forEach(function (el) {
    dxpRenderAdInto(el, ads.clientId, ads.slots.midRectangle);
  });
  document.querySelectorAll('.ad-unit--sidebar').forEach(function (el) {
    dxpRenderAdInto(el, ads.clientId, ads.slots.sidebarRect);
  });
  document.querySelectorAll('[data-dxp-ad="inArticle"], .ad-banner--inarticle').forEach(function (el) {
    dxpRenderAdInto(el, ads.clientId, ads.slots.inArticle);
  });
  document.querySelectorAll('[data-dxp-ad="multiplex"], .ad-banner--multiplex').forEach(function (el) {
    dxpRenderAdInto(el, ads.clientId, ads.slots.multiplex);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  ensureFavicon();
  if (!dxpAdsEnabled()) dxpHideAdPlacements();
  loadComponent('header-placeholder', '/includes/header.html').then(function () {
    initThemeToggle();
    initHeaderSearch();
    initStickyHeaderOnScroll();
    // After header exists, ensure ad placements (top banner often sits near it).
    dxpEnsureGlobalAdPlacements();
  });
  loadComponent('footer-placeholder', '/includes/footer.html').then(function () {
    initScrollToTop();
    // Ensure bottom placements exist even if footer loads later.
    dxpEnsureGlobalAdPlacements();
  });

  // Initial attempt for pages without header/footer mounts or if fetch is blocked.
  dxpEnsureGlobalAdPlacements();
});
