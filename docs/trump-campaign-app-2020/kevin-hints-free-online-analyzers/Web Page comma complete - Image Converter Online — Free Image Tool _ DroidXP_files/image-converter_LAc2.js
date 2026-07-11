/**
 * Image Converter — canvas decode and re-encode as PNG, JPEG, or WebP.
 */
(function () {
  var LS_FORMAT = 'droidxp-icv-format';
  var LS_QUALITY = 'droidxp-icv-quality';

  var MAX_CANVAS = 8192;

  var dropzone = document.getElementById('icv-dropzone');
  var fileEl = document.getElementById('icv-file');
  var fileNameEl = document.getElementById('icv-file-name');
  var formatEl = document.getElementById('icv-format');
  var qualityEl = document.getElementById('icv-quality');
  var qualityValEl = document.getElementById('icv-quality-val');
  var qualityBlock = document.getElementById('icv-quality-block');
  var previewCanvas = document.getElementById('icv-preview');
  var btnDownload = document.getElementById('icv-download');
  var btnClear = document.getElementById('icv-clear');
  var statsEl = document.getElementById('icv-stats');
  var toastEl = document.getElementById('icv-toast');
  var warnEl = document.getElementById('icv-warning');

  var sourceImage = null;
  var sourceName = 'image';
  var sourceMime = '';
  var originalBytes = 0;
  var naturalW = 0;
  var naturalH = 0;
  var outW = 0;
  var outH = 0;
  var lastBlob = null;
  var encodeTimer = null;

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

  function esc(s) {
    return String(s || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] || c;
    });
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

  function computeOutputDims(nw, nh) {
    var w = nw;
    var h = nh;
    var maxDim = Math.max(w, h);
    if (maxDim > MAX_CANVAS) {
      var sc = MAX_CANVAS / maxDim;
      w = Math.max(1, Math.round(nw * sc));
      h = Math.max(1, Math.round(nh * sc));
    }
    return { w: w, h: h };
  }

  function needsWhiteBg(mime) {
    return mime === 'image/jpeg';
  }

  function buildCanvas(img, w, h, whiteBg) {
    var c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    var ctx = c.getContext('2d');
    if (whiteBg) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
    }
    ctx.drawImage(img, 0, 0, w, h);
    return c;
  }

  function getMime() {
    var f = formatEl ? formatEl.value : 'png';
    if (f === 'jpeg') return 'image/jpeg';
    if (f === 'webp') return 'image/webp';
    return 'image/png';
  }

  function getQuality() {
    var q = qualityEl ? Number(qualityEl.value) : 0.92;
    if (isNaN(q)) q = 0.92;
    return Math.max(0.5, Math.min(1, q));
  }

  function updateQualityLabel() {
    if (qualityValEl) {
      qualityValEl.textContent = Math.round(getQuality() * 100) + '%';
    }
  }

  function toggleQualityUI() {
    var mime = getMime();
    var lossy = mime === 'image/jpeg' || mime === 'image/webp';
    if (qualityBlock) qualityBlock.hidden = !lossy;
    if (qualityEl) qualityEl.disabled = !lossy;
  }

  function webpSupported() {
    try {
      var c = document.createElement('canvas');
      c.width = 1;
      c.height = 1;
      return c.toDataURL('image/webp').indexOf('image/webp') === 5;
    } catch (e) {
      return false;
    }
  }

  function scheduleEncode() {
    window.clearTimeout(encodeTimer);
    encodeTimer = window.setTimeout(encode, 80);
  }

  function encode() {
    lastBlob = null;
    toggleQualityUI();

    if (!sourceImage || naturalW === 0) {
      renderStats([
        ['Source', '—'],
        ['Output format', '—'],
        ['Est. output size', '—'],
        ['Pixels', '—'],
      ]);
      if (btnDownload) btnDownload.disabled = true;
      return;
    }

    var dims = computeOutputDims(naturalW, naturalH);
    outW = dims.w;
    outH = dims.h;
    var mime = getMime();
    var q = getQuality();
    var white = needsWhiteBg(mime);

    var c = buildCanvas(sourceImage, outW, outH, white);

    var done = function (blob) {
      lastBlob = blob;
      var est = '—';
      if (blob && blob.size != null) est = formatBytes(blob.size);
      var srcLabel = sourceMime ? shortMime(sourceMime) : 'image';
      var note = '';
      if (outW !== naturalW || outH !== naturalH) {
        note = ' (scaled from ' + naturalW + '×' + naturalH + ' to fit ' + MAX_CANVAS + ' px max side)';
      }
      renderStats([
        ['Source file', formatBytes(originalBytes) + ' · ' + srcLabel],
        ['Output format', shortMime(mime)],
        ['Est. output size', est],
        ['Output pixels', outW + '×' + outH + note],
      ]);
      if (btnDownload) btnDownload.disabled = !blob;
      renderPreview(c);
      persist();
    };

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

  function shortMime(m) {
    if (!m) return '—';
    var p = m.split('/')[1] || m;
    return p.toUpperCase();
  }

  function renderPreview(canvas) {
    if (!previewCanvas) return;
    var maxPreview = 480;
    var scale = Math.min(1, maxPreview / Math.max(outW, outH, 1));
    var pw = Math.max(1, Math.round(outW * scale));
    var ph = Math.max(1, Math.round(outH * scale));
    previewCanvas.width = pw;
    previewCanvas.height = ph;
    var ctx = previewCanvas.getContext('2d');
    ctx.drawImage(canvas, 0, 0, pw, ph);
  }

  function download() {
    if (!lastBlob) {
      showToast('Nothing to download yet.');
      return;
    }
    var mime = getMime();
    var ext = mime === 'image/png' ? '.png' : mime === 'image/webp' ? '.webp' : '.jpg';
    var url = URL.createObjectURL(lastBlob);
    var a = document.createElement('a');
    a.href = url;
    a.download = baseFileName(sourceName) + ext;
    a.click();
    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 2000);
    showToast('Download started.');
  }

  function baseFileName(name) {
    var n = String(name || 'image').replace(/\.[^/.]+$/, '');
    return n.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '') || 'image';
  }

  function loadFile(file) {
    if (!file || !file.type || file.type.indexOf('image/') !== 0) {
      setWarning('<span class="text-warning">Please choose an image file.</span>');
      return;
    }
    setWarning('');
    originalBytes = file.size || 0;
    sourceMime = file.type || '';
    sourceName = file.name || 'image';
    if (fileNameEl) {
      fileNameEl.textContent = sourceName + ' · ' + formatBytes(originalBytes) + ' · ' + shortMime(sourceMime);
    }

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
        if (Math.max(naturalW, naturalH) > MAX_CANVAS) {
          setWarning(
            '<span class="text-muted">Image exceeds ' +
              MAX_CANVAS +
              ' px on the longest side — it will be scaled down proportionally for export.</span>'
          );
        } else {
          setWarning('');
        }
        encode();
      };
      img.onerror = function () {
        setWarning('<span class="text-warning">Could not decode this image.</span>');
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function clearAll() {
    sourceImage = null;
    sourceMime = '';
    naturalW = 0;
    naturalH = 0;
    originalBytes = 0;
    lastBlob = null;
    outW = 0;
    outH = 0;
    if (fileEl) fileEl.value = '';
    if (fileNameEl) fileNameEl.textContent = 'No image selected';
    if (btnDownload) btnDownload.disabled = true;
    setWarning('');
    if (previewCanvas) {
      previewCanvas.width = 1;
      previewCanvas.height = 1;
      previewCanvas.getContext('2d').clearRect(0, 0, 1, 1);
    }
    renderStats([
      ['Source', '—'],
      ['Output format', '—'],
      ['Est. output size', '—'],
      ['Pixels', '—'],
    ]);
    try {
      localStorage.removeItem(LS_FORMAT);
      localStorage.removeItem(LS_QUALITY);
    } catch (e) {
      /* ignore */
    }
    toggleQualityUI();
    showToast('Cleared.');
  }

  function persist() {
    try {
      if (formatEl) localStorage.setItem(LS_FORMAT, formatEl.value);
      if (qualityEl) localStorage.setItem(LS_QUALITY, qualityEl.value);
    } catch (e) {
      /* ignore */
    }
  }

  function restoreSettings() {
    try {
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
    } catch (e) {
      /* ignore */
    }
    updateQualityLabel();
    toggleQualityUI();
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

  if (qualityEl) {
    qualityEl.addEventListener('input', function () {
      updateQualityLabel();
      scheduleEncode();
    });
  }
  if (formatEl) {
    formatEl.addEventListener('change', function () {
      updateQualityLabel();
      scheduleEncode();
    });
  }

  if (btnDownload) btnDownload.addEventListener('click', download);
  if (btnClear) btnClear.addEventListener('click', clearAll);

  setupWebpOption();
  restoreSettings();
  renderStats([
    ['Source', '—'],
    ['Output format', '—'],
    ['Est. output size', '—'],
    ['Pixels', '—'],
  ]);
})();
