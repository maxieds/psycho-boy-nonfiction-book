/**
 * Shared tool page helpers — related tools from registry
 */
(function () {
  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function badgeClass(cat) {
    const m = {
      android: 'badge-android',
      developer: 'badge-developer',
      design: 'badge-design',
      text: 'badge-text',
      image: 'badge-image',
      security: 'badge-security',
      converter: 'badge-converter',
      gaming: 'badge-gaming',
      seo: 'badge-seo',
      productivity: 'badge-productivity',
    };
    return m[cat] || 'badge-developer';
  }

  function label(cat) {
    const m = {
      android: 'Android',
      developer: 'Developer',
      design: 'Design',
      text: 'Text',
      image: 'Image',
      security: 'Security',
      converter: 'Converter',
      gaming: 'Gaming',
      seo: 'SEO',
      productivity: 'Productivity',
    };
    return m[cat] || cat;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const row = document.getElementById('related-tools-row');
    const body = document.body;
    if (!row || !body || typeof getRelatedTools !== 'function') return;

    const category = body.getAttribute('data-tool-category');
    const id = body.getAttribute('data-tool-id');
    if (!category || !id) return;

    const related = getRelatedTools(category, id, 3);
    if (!related.length) {
      const wrapper = row.closest('#related-tools');
      if (wrapper) wrapper.setAttribute('hidden', '');
      return;
    }

    let html = '';
    related.forEach(function (t) {
      html +=
        '<div class="col-12 col-md-4">' +
        '<a href="' +
        escapeHtml(t.path) +
        '" class="tool-card h-100">' +
        '<div class="tool-card__icon"><i class="bi ' +
        escapeHtml(t.icon || 'bi-wrench') +
        '"></i></div>' +
        '<div class="tool-card__body">' +
        '<span class="tool-card__badge ' +
        badgeClass(t.category) +
        '">' +
        escapeHtml(label(t.category)) +
        '</span>' +
        '<h3 class="tool-card__title">' +
        escapeHtml(t.title) +
        '</h3>' +
        '<p class="tool-card__desc">' +
        escapeHtml((t.metaDesc || '').slice(0, 100)) +
        (t.metaDesc && t.metaDesc.length > 100 ? '…' : '') +
        '</p>' +
        '</div></a></div>';
    });
    row.innerHTML = html;
  });
})();
