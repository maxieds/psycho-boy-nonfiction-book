/**
 * Image to Base64 — FileReader data URL + copy-ready snippets (local only).
 */
(function () {
  var LS_ALT = 'droidxp-itb-alt';

  var WARN_BYTES = 2 * 1024 * 1024;

  var dropzone = document.getElementById('itb-dropzone');
  var fileEl = document.getElementById('itb-file');
  var fileNameEl = document.getElementById('itb-file-name');
  var altEl = document.getElementById('itb-alt');
  var dataUrlEl = document.getElementById('itb-data-url');
  var b64OnlyEl = document.getElementById('itb-b64-only');
  var imgTagEl = document.getElementById('itb-img-tag');
  var cssUrlEl = document.getElementById('itb-css-url');
  var previewEl = document.getElementById('itb-preview');
  var statsEl = document.getElementById('itb-stats');
  var toastEl = document.getElementById('itb-toast');
  var warnEl = document.getElementById('itb-warning');

  var lastDataUrl = '';
  var lastMime = '';
  var lastB64 = '';
  var lastSize = 0;

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(function () {
      toastEl.hidden = true;
    }, 2200);
  }

  function setWarning(html) {
    if (!warnEl) return;
    warnEl.innerHTML = html || '';
    warnEl.hidden = !html;
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] || c;
    });
  }

  function escAttr(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;');
  }

  function formatBytes(n) {
    if (n == null || isNaN(n)) return '—';
    if (n < 1024) return n + ' B';
    if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
    return (n / (1024 * 1024)).toFixed(2) + ' MB';
  }

  function renderStats(items) {
    if (!statsEl) return;
    statsEl.innerHTML = items
      .map(function (kv) {
        return (
          '<div class="col-6 col-md-4 col-lg-3"><div class="tool-stat">' +
          '<span class="tool-stat__label">' +
          esc(kv[0]) +
          '</span><span class="tool-stat__value">' +
          esc(kv[1]) +
          '</span></div></div>'
        );
      })
      .join('');
  }

  function parseDataUrl(dataUrl) {
    var comma = dataUrl.indexOf(',');
    if (comma < 0) return { mime: '', b64: '', full: dataUrl };
    var header = dataUrl.slice(0, comma);
    var body = dataUrl.slice(comma + 1);
    var mime = '';
    var hm = /^data:([^;]+)/.exec(header);
    if (hm) mime = hm[1];
    return { mime: mime, b64: body, full: dataUrl };
  }

  function buildImgTag(dataUrl) {
    var alt = altEl ? altEl.value.trim() : '';
    return '<img src="' + escAttr(dataUrl) + '" alt="' + escAttr(alt) + '" />';
  }

  function buildCssUrl(dataUrl) {
    return "url('" + dataUrl.replace(/'/g, "\\'") + "')";
  }

  function updateSnippets() {
    if (!lastDataUrl) return;
    if (dataUrlEl) dataUrlEl.value = lastDataUrl;
    if (b64OnlyEl) b64OnlyEl.value = lastB64;
    if (imgTagEl) imgTagEl.value = buildImgTag(lastDataUrl);
    if (cssUrlEl) cssUrlEl.value = buildCssUrl(lastDataUrl);
    if (previewEl && !previewEl.hidden) {
      previewEl.alt = altEl ? altEl.value.trim() : '';
    }
  }

  function loadFile(file) {
    if (!file || !file.type || file.type.indexOf('image/') !== 0) {
      setWarning('<span class="text-warning">Please choose an image file.</span>');
      return;
    }
    lastSize = file.size || 0;
    if (fileNameEl) {
      fileNameEl.textContent = (file.name || 'image') + ' · ' + formatBytes(lastSize) + ' · ' + (file.type || '').toUpperCase();
    }
    if (lastSize > WARN_BYTES) {
      setWarning(
        '<span class="text-muted">Large file — Base64 expands size by ~33% and can slow the tab. Consider compressing first with the <a href="/tools/image/image-compressor.html" class="link-secondary">Image Compressor</a>.</span>'
      );
    } else {
      setWarning('');
    }

    var reader = new FileReader();
    reader.onload = function () {
      var dataUrl = reader.result;
      if (typeof dataUrl !== 'string') {
        setWarning('<span class="text-warning">Could not read file as text.</span>');
        return;
      }
      lastDataUrl = dataUrl;
      var p = parseDataUrl(dataUrl);
      lastMime = p.mime || file.type || '';
      lastB64 = p.b64 || '';

      if (previewEl) {
        previewEl.src = dataUrl;
        previewEl.hidden = false;
      }

      updateSnippets();

      renderStats([
        ['File size', formatBytes(lastSize)],
        ['MIME type', lastMime || '—'],
        ['Data URL length', String(lastDataUrl.length) + ' chars'],
        ['Payload chars', String(lastB64.length) + ' chars'],
      ]);
      persist();
    };
    reader.onerror = function () {
      setWarning('<span class="text-warning">Failed to read the file.</span>');
    };
    reader.readAsDataURL(file);
  }

  function copyText(text, label) {
    if (!text) {
      showToast('Nothing to copy.');
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          showToast(label ? 'Copied: ' + label : 'Copied.');
        },
        function () {
          fallbackCopy(text, label);
        }
      );
    } else {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(label ? 'Copied: ' + label : 'Copied.');
    } catch (e) {
      showToast('Copy failed.');
    }
  }

  function clearAll() {
    lastDataUrl = '';
    lastMime = '';
    lastB64 = '';
    lastSize = 0;
    if (fileEl) fileEl.value = '';
    if (fileNameEl) fileNameEl.textContent = 'No image selected';
    if (dataUrlEl) dataUrlEl.value = '';
    if (b64OnlyEl) b64OnlyEl.value = '';
    if (imgTagEl) imgTagEl.value = '';
    if (cssUrlEl) cssUrlEl.value = '';
    if (previewEl) {
      previewEl.removeAttribute('src');
      previewEl.hidden = true;
    }
    if (altEl) altEl.value = '';
    clearStoredAlt();
    setWarning('');
    renderStats([
      ['File size', '—'],
      ['MIME type', '—'],
      ['Data URL length', '—'],
      ['Payload chars', '—'],
    ]);
    showToast('Cleared.');
  }

  function persist() {
    try {
      if (altEl) localStorage.setItem(LS_ALT, altEl.value);
    } catch (e) {
      /* ignore */
    }
  }

  function clearStoredAlt() {
    try {
      localStorage.removeItem(LS_ALT);
    } catch (e) {
      /* ignore */
    }
  }

  function restoreAlt() {
    try {
      var a = localStorage.getItem(LS_ALT);
      if (a != null && altEl) altEl.value = a;
    } catch (e) {
      /* ignore */
    }
  }

  if (dropzone && fileEl) {
    dropzone.addEventListener('click', function () {
      fileEl.click();
    });
    dropzone.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        fileEl.click();
      }
    });
    fileEl.addEventListener('change', function () {
      var f = fileEl.files && fileEl.files[0];
      if (f) loadFile(f);
    });
    dropzone.addEventListener('dragover', function (e) {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', function () {
      dropzone.classList.remove('dragover');
    });
    dropzone.addEventListener('drop', function (e) {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) loadFile(f);
    });
  }

  if (altEl) {
    altEl.addEventListener('input', function () {
      updateSnippets();
      persist();
    });
  }

  var btnCopyData = document.getElementById('itb-copy-data-url');
  var btnCopyB64 = document.getElementById('itb-copy-b64');
  var btnCopyImg = document.getElementById('itb-copy-img');
  var btnCopyCss = document.getElementById('itb-copy-css');
  var btnClear = document.getElementById('itb-clear');

  if (btnCopyData) btnCopyData.addEventListener('click', function () {
    copyText(lastDataUrl, 'data URL');
  });
  if (btnCopyB64) btnCopyB64.addEventListener('click', function () {
    copyText(lastB64, 'Base64 only');
  });
  if (btnCopyImg) btnCopyImg.addEventListener('click', function () {
    copyText(imgTagEl ? imgTagEl.value : '', 'img tag');
  });
  if (btnCopyCss) btnCopyCss.addEventListener('click', function () {
    copyText(cssUrlEl ? cssUrlEl.value : '', 'CSS url()');
  });
  if (btnClear) btnClear.addEventListener('click', clearAll);

  restoreAlt();
  renderStats([
    ['File size', '—'],
    ['MIME type', '—'],
    ['Data URL length', '—'],
    ['Payload chars', '—'],
  ]);
})();
