/**
 * Image Resizer — canvas resize and download in the browser.
 */
(function () {
  var LS_W = 'droidxp-ir-w';
  var LS_H = 'droidxp-ir-h';
  var LS_LOCK = 'droidxp-ir-lock';
  var LS_FORMAT = 'droidxp-ir-format';
  var LS_QUALITY = 'droidxp-ir-quality';
  var LS_PRESET = 'droidxp-ir-preset';

  var MAX_DIM = 8192;
  var PREVIEW_MAX = 520;

  var dropzone = document.getElementById('ir-dropzone');
  var fileEl = document.getElementById('ir-file');
  var fileNameEl = document.getElementById('ir-file-name');
  var widthEl = document.getElementById('ir-width');
  var heightEl = document.getElementById('ir-height');
  var lockEl = document.getElementById('ir-lock');
  var presetEl = document.getElementById('ir-preset');
  var formatEl = document.getElementById('ir-format');
  var qualityEl = document.getElementById('ir-quality');
  var qualityWrap = document.getElementById('ir-quality-wrap');
  var previewCanvas = document.getElementById('ir-preview');
  var btnDownload = document.getElementById('ir-download');
  var btnClear = document.getElementById('ir-clear');
  var statsEl = document.getElementById('ir-stats');
  var toastEl = document.getElementById('ir-toast');
  var warnEl = document.getElementById('ir-warning');

  var sourceImage = null;
  var sourceName = 'image';
  var naturalW = 0;
  var naturalH = 0;
  var lastBlobUrl = null;
  var estimateTimer = null;

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(function () {
      toastEl.hidden = true;
    }, 2400);
  }

  function setWarning(html) {
    if (!warnEl) return;
    warnEl.innerHTML = html || '';
    warnEl.hidden = !html;
  }

  function clampDim(n) {
    var x = Math.round(Number(n));
    if (isNaN(x)) return 1;
    return Math.max(1, Math.min(MAX_DIM, x));
  }

  function renderStats(items) {
    if (!statsEl) return;
    statsEl.innerHTML = items
      .map(function (kv) {
        return (
          '<div class="col-6 col-md-3"><div class="tool-stat">' +
          '<span class="tool-stat__label">' +
          esc(kv[0]) +
          '</span><span class="tool-stat__value">' +
          esc(kv[1]) +
          '</span></div></div>'
        );
      })
      .join('');
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] || c;
    });
  }

  function getDims() {
    return {
      w: clampDim(widthEl ? widthEl.value : 1),
      h: clampDim(heightEl ? heightEl.value : 1),
    };
  }

  function syncDimsToInputs(w, h) {
    if (widthEl) widthEl.value = String(w);
    if (heightEl) heightEl.value = String(h);
  }

  function applyPreset() {
    if (!presetEl || naturalW === 0) return;
    var p = presetEl.value;
    if (!p || p === 'custom') return;
    var pct = parseInt(p, 10);
    if (isNaN(pct)) return;
    var factor = pct / 100;
    var w = clampDim(naturalW * factor);
    var h = clampDim(naturalH * factor);
    syncDimsToInputs(w, h);
    if (lockEl) lockEl.checked = true;
    renderPreview();
    scheduleEstimate();
    persist();
  }

  function onWidthInput() {
    if (presetEl) presetEl.value = 'custom';
    if (!lockEl || !lockEl.checked || naturalW === 0) {
      renderPreview();
      scheduleEstimate();
      persist();
      return;
    }
    var w = clampDim(widthEl ? widthEl.value : 1);
    syncDimsToInputs(w, clampDim((w * naturalH) / naturalW));
    renderPreview();
    scheduleEstimate();
    persist();
  }

  function onHeightInput() {
    if (presetEl) presetEl.value = 'custom';
    if (!lockEl || !lockEl.checked || naturalH === 0) {
      renderPreview();
      scheduleEstimate();
      persist();
      return;
    }
    var h = clampDim(heightEl ? heightEl.value : 1);
    syncDimsToInputs(clampDim((h * naturalW) / naturalH), h);
    renderPreview();
    scheduleEstimate();
    persist();
  }

  function buildOutputCanvas(w, h, whiteBackground) {
    var c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    var ctx = c.getContext('2d');
    if (whiteBackground) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
    }
    if (sourceImage) {
      ctx.drawImage(sourceImage, 0, 0, w, h);
    }
    return c;
  }

  function renderPreview() {
    if (!previewCanvas || !sourceImage || naturalW === 0) return;
    var d = getDims();
    var w = d.w;
    var h = d.h;
    var scale = Math.min(1, PREVIEW_MAX / Math.max(w, h, 1));
    var pw = Math.max(1, Math.round(w * scale));
    var ph = Math.max(1, Math.round(h * scale));
    previewCanvas.width = pw;
    previewCanvas.height = ph;
    var ctx = previewCanvas.getContext('2d');
    ctx.drawImage(sourceImage, 0, 0, pw, ph);
  }

  function getFormatMime() {
    var f = formatEl ? formatEl.value : 'png';
    if (f === 'jpeg') return 'image/jpeg';
    if (f === 'webp') return 'image/webp';
    return 'image/png';
  }

  function scheduleEstimate() {
    window.clearTimeout(estimateTimer);
    estimateTimer = window.setTimeout(updateEstimate, 120);
  }

  function updateEstimate() {
    if (!sourceImage || naturalW === 0) {
      renderStats([
        ['Original', '—'],
        ['Output', '—'],
        ['Est. file size', '—'],
        ['Format', '—'],
      ]);
      return;
    }
    var d = getDims();
    var mime = getFormatMime();
    var white = mime === 'image/jpeg';
    var c = buildOutputCanvas(d.w, d.h, white);
    var q = qualityEl ? Math.max(0.5, Math.min(1, Number(qualityEl.value) || 0.92)) : 0.92;

    function done(blob) {
      var sizeStr = '—';
      if (blob && blob.size != null) {
        sizeStr = blob.size < 1024 ? blob.size + ' B' : (blob.size / 1024).toFixed(1) + ' KB';
      }
      if (lastBlobUrl) {
        try {
          URL.revokeObjectURL(lastBlobUrl);
        } catch (e) {
          /* ignore */
        }
        lastBlobUrl = null;
      }
      var fmt = mime.split('/')[1] || 'png';
      renderStats([
        ['Original', naturalW + '×' + naturalH],
        ['Output', d.w + '×' + d.h],
        ['Est. file size', sizeStr],
        ['Format', fmt.toUpperCase()],
      ]);
    }

    if (mime === 'image/png') {
      c.toBlob(done, 'image/png');
    } else {
      c.toBlob(
        function (blob) {
          done(blob);
        },
        mime,
        q
      );
    }
  }

  function download() {
    if (!sourceImage || naturalW === 0) {
      showToast('Load an image first.');
      return;
    }
    var d = getDims();
    var mime = getFormatMime();
    var white = mime === 'image/jpeg';
    var c = buildOutputCanvas(d.w, d.h, white);
    var q = qualityEl ? Math.max(0.5, Math.min(1, Number(qualityEl.value) || 0.92)) : 0.92;
    var ext = mime === 'image/jpeg' ? '.jpg' : mime === 'image/webp' ? '.webp' : '.png';

    function trigger(blob) {
      if (!blob) {
        showToast('Export failed.');
        return;
      }
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = baseFileName(sourceName) + '-resized' + ext;
      a.click();
      window.setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 2000);
      showToast('Download started.');
    }

    if (mime === 'image/png') {
      c.toBlob(trigger, 'image/png');
    } else {
      c.toBlob(trigger, mime, q);
    }
  }

  function baseFileName(name) {
    var n = String(name || 'image').replace(/\.[^/.]+$/, '');
    return n.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '') || 'image';
  }

  function loadFile(file) {
    if (!file || !file.type || file.type.indexOf('image/') !== 0) {
      setWarning('<span class="text-warning">Please choose an image file (PNG, JPG, WebP, GIF, etc.).</span>');
      return;
    }
    setWarning('');
    sourceName = file.name || 'image';
    if (fileNameEl) fileNameEl.textContent = sourceName;
    var reader = new FileReader();
    reader.onload = function () {
      var img = new Image();
      img.onload = function () {
        sourceImage = img;
        naturalW = img.naturalWidth;
        naturalH = img.naturalHeight;
        if (naturalW === 0 || naturalH === 0) {
          setWarning('<span class="text-warning">Could not read image dimensions.</span>');
          return;
        }
        syncDimsToInputs(naturalW, naturalH);
        if (lockEl) lockEl.checked = true;
        if (presetEl) presetEl.value = '100';
        renderPreview();
        scheduleEstimate();
        if (btnDownload) btnDownload.disabled = false;
        persist();
      };
      img.onerror = function () {
        setWarning('<span class="text-warning">Could not decode this image format.</span>');
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function clearAll() {
    sourceImage = null;
    naturalW = 0;
    naturalH = 0;
    if (fileEl) fileEl.value = '';
    if (fileNameEl) fileNameEl.textContent = 'No image selected';
    if (widthEl) widthEl.value = '';
    if (heightEl) heightEl.value = '';
    if (presetEl) presetEl.value = 'custom';
    if (previewCanvas) {
      previewCanvas.width = 1;
      previewCanvas.height = 1;
      var ctx = previewCanvas.getContext('2d');
      ctx.clearRect(0, 0, 1, 1);
    }
    if (btnDownload) btnDownload.disabled = true;
    setWarning('');
    renderStats([
      ['Original', '—'],
      ['Output', '—'],
      ['Est. file size', '—'],
      ['Format', '—'],
    ]);
    try {
      localStorage.removeItem(LS_W);
      localStorage.removeItem(LS_H);
      localStorage.removeItem(LS_LOCK);
      localStorage.removeItem(LS_FORMAT);
      localStorage.removeItem(LS_QUALITY);
      localStorage.removeItem(LS_PRESET);
    } catch (e) {
      /* ignore */
    }
    showToast('Cleared.');
  }

  function toggleQuality() {
    var f = formatEl ? formatEl.value : 'png';
    var show = f === 'jpeg' || f === 'webp';
    if (qualityWrap) qualityWrap.hidden = !show;
  }

  function persist() {
    try {
      if (widthEl) localStorage.setItem(LS_W, widthEl.value);
      if (heightEl) localStorage.setItem(LS_H, heightEl.value);
      if (lockEl) localStorage.setItem(LS_LOCK, lockEl.checked ? '1' : '0');
      if (formatEl) localStorage.setItem(LS_FORMAT, formatEl.value);
      if (qualityEl) localStorage.setItem(LS_QUALITY, qualityEl.value);
      if (presetEl) localStorage.setItem(LS_PRESET, presetEl.value);
    } catch (e) {
      /* ignore */
    }
  }

  function restoreSettings() {
    try {
      if (lockEl) {
        var l = localStorage.getItem(LS_LOCK);
        if (l != null) lockEl.checked = l !== '0';
      }
      if (formatEl) {
        var f = localStorage.getItem(LS_FORMAT);
        if (f) {
          var opt = formatEl.querySelector('option[value="' + f + '"]');
          if (opt && !opt.disabled) formatEl.value = f;
          else if (f === 'webp') formatEl.value = 'png';
        }
      }
      if (qualityEl) {
        var q = localStorage.getItem(LS_QUALITY);
        if (q != null) qualityEl.value = q;
      }
      if (presetEl) {
        var pr = localStorage.getItem(LS_PRESET);
        if (pr && presetEl.querySelector('option[value="' + pr + '"]')) presetEl.value = pr;
      }
    } catch (e) {
      /* ignore */
    }
    toggleQuality();
  }

  function webpSupported() {
    try {
      var c = document.createElement('canvas');
      c.width = 1;
      c.height = 1;
      var u = c.toDataURL('image/webp');
      return u.indexOf('image/webp') === 5;
    } catch (e) {
      return false;
    }
  }

  function setupWebpOption() {
    if (!formatEl || webpSupported()) return;
    var opt = formatEl.querySelector('option[value="webp"]');
    if (opt) opt.disabled = true;
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

  if (widthEl) widthEl.addEventListener('input', onWidthInput);
  if (heightEl) heightEl.addEventListener('input', onHeightInput);
  if (lockEl) lockEl.addEventListener('change', onWidthInput);
  if (presetEl) presetEl.addEventListener('change', applyPreset);
  if (formatEl) {
    formatEl.addEventListener('change', function () {
      toggleQuality();
      scheduleEstimate();
      persist();
    });
  }
  if (qualityEl) qualityEl.addEventListener('input', scheduleEstimate);

  if (btnDownload) btnDownload.addEventListener('click', download);
  if (btnClear) btnClear.addEventListener('click', clearAll);

  setupWebpOption();
  restoreSettings();
  renderStats([
    ['Original', '—'],
    ['Output', '—'],
    ['Est. file size', '—'],
    ['Format', '—'],
  ]);
})();
