/**
 * Image Compressor — canvas encode with quality; optional max-side downscale.
 */
(function () {
  var LS_FORMAT = 'droidxp-ic-format';
  var LS_QUALITY = 'droidxp-ic-quality';
  var LS_MAX_SIDE = 'droidxp-ic-max-side';

  var MAX_CANVAS = 8192;

  var dropzone = document.getElementById('ic-dropzone');
  var fileEl = document.getElementById('ic-file');
  var fileNameEl = document.getElementById('ic-file-name');
  var formatEl = document.getElementById('ic-format');
  var qualityEl = document.getElementById('ic-quality');
  var qualityValEl = document.getElementById('ic-quality-val');
  var maxSideEl = document.getElementById('ic-max-side');
  var previewCanvas = document.getElementById('ic-preview');
  var btnDownload = document.getElementById('ic-download');
  var btnClear = document.getElementById('ic-clear');
  var statsEl = document.getElementById('ic-stats');
  var toastEl = document.getElementById('ic-toast');
  var warnEl = document.getElementById('ic-warning');

  var sourceImage = null;
  var sourceName = 'image';
  var originalBytes = 0;
  var naturalW = 0;
  var naturalH = 0;
  var outW = 0;
  var outH = 0;
  var lastBlob = null;
  var compressTimer = null;

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

  function getMaxSide() {
    if (!maxSideEl) return 0;
    var v = maxSideEl.value;
    if (!v || v === '0') return 0;
    var n = parseInt(v, 10);
    return isNaN(n) ? 0 : n;
  }

  function computeOutputDims(nw, nh) {
    var maxSide = getMaxSide();
    var w = nw;
    var h = nh;
    if (maxSide > 0) {
      var m = Math.max(nw, nh);
      if (m > maxSide) {
        var scale = maxSide / m;
        w = Math.max(1, Math.round(nw * scale));
        h = Math.max(1, Math.round(nh * scale));
      }
    }
    var maxDim = Math.max(w, h);
    if (maxDim > MAX_CANVAS) {
      var sc = MAX_CANVAS / maxDim;
      w = Math.max(1, Math.round(w * sc));
      h = Math.max(1, Math.round(h * sc));
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
    var f = formatEl ? formatEl.value : 'jpeg';
    if (f === 'webp') return 'image/webp';
    if (f === 'png') return 'image/png';
    return 'image/jpeg';
  }

  function getQuality() {
    var q = qualityEl ? Number(qualityEl.value) : 0.82;
    if (isNaN(q)) q = 0.82;
    return Math.max(0.5, Math.min(1, q));
  }

  function updateQualityLabel() {
    if (qualityValEl) {
      qualityValEl.textContent = Math.round(getQuality() * 100) + '%';
    }
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

  function scheduleCompress() {
    window.clearTimeout(compressTimer);
    compressTimer = window.setTimeout(compress, 80);
  }

  function compress() {
    lastBlob = null;
    if (!sourceImage || naturalW === 0) {
      renderStats([
        ['Original', '—'],
        ['Compressed', '—'],
        ['Savings', '—'],
        ['Output pixels', '—'],
      ]);
      if (btnDownload) btnDownload.disabled = true;
      return;
    }

    if (qualityEl) {
      qualityEl.disabled = getMime() === 'image/png';
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
      var compStr = '—';
      var saveStr = '—';
      if (blob && blob.size != null) {
        compStr = formatBytes(blob.size);
        if (originalBytes > 0) {
          var pct = Math.round((1 - blob.size / originalBytes) * 100);
          if (blob.size >= originalBytes) {
            saveStr = '0% (same or larger)';
          } else {
            saveStr = pct + '% smaller';
          }
        }
      }
      var note = '';
      if (outW !== naturalW || outH !== naturalH) {
        note = ' (scaled from ' + naturalW + '×' + naturalH + ')';
      }
      renderStats([
        ['Original file', formatBytes(originalBytes)],
        ['Compressed', compStr],
        ['Savings', saveStr],
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

  function renderPreview(sourceCanvas) {
    if (!previewCanvas) return;
    var maxPreview = 480;
    var scale = Math.min(1, maxPreview / Math.max(outW, outH, 1));
    var pw = Math.max(1, Math.round(outW * scale));
    var ph = Math.max(1, Math.round(outH * scale));
    previewCanvas.width = pw;
    previewCanvas.height = ph;
    var ctx = previewCanvas.getContext('2d');
    ctx.drawImage(sourceCanvas, 0, 0, pw, ph);
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
    a.download = baseFileName(sourceName) + '-compressed' + ext;
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
    sourceName = file.name || 'image';
    if (fileNameEl) fileNameEl.textContent = sourceName + ' · ' + formatBytes(originalBytes);

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
        var warnParts = [];
        if (Math.max(naturalW, naturalH) > MAX_CANVAS) {
          warnParts.push('Very large image — output is limited to fit within ' + MAX_CANVAS + ' px per side.');
        }
        setWarning(warnParts.length ? '<span class="text-muted">' + warnParts.join(' ') + '</span>' : '');
        compress();
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
      ['Original', '—'],
      ['Compressed', '—'],
      ['Savings', '—'],
      ['Output pixels', '—'],
    ]);
    try {
      localStorage.removeItem(LS_FORMAT);
      localStorage.removeItem(LS_QUALITY);
      localStorage.removeItem(LS_MAX_SIDE);
    } catch (e) {
      /* ignore */
    }
    showToast('Cleared.');
  }

  function persist() {
    try {
      if (formatEl) localStorage.setItem(LS_FORMAT, formatEl.value);
      if (qualityEl) localStorage.setItem(LS_QUALITY, qualityEl.value);
      if (maxSideEl) localStorage.setItem(LS_MAX_SIDE, maxSideEl.value);
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
          else if (f === 'webp') formatEl.value = 'jpeg';
        }
      }
      if (qualityEl) {
        var q = localStorage.getItem(LS_QUALITY);
        if (q != null) qualityEl.value = q;
      }
      if (maxSideEl) {
        var m = localStorage.getItem(LS_MAX_SIDE);
        if (m != null && maxSideEl.querySelector('option[value="' + m + '"]')) maxSideEl.value = m;
      }
    } catch (e) {
      /* ignore */
    }
    updateQualityLabel();
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
      scheduleCompress();
    });
  }
  if (formatEl) {
    formatEl.addEventListener('change', function () {
      if (qualityEl) {
        qualityEl.disabled = getMime() === 'image/png';
      }
      updateQualityLabel();
      scheduleCompress();
    });
  }
  if (maxSideEl) maxSideEl.addEventListener('change', scheduleCompress);

  if (btnDownload) btnDownload.addEventListener('click', download);
  if (btnClear) btnClear.addEventListener('click', clearAll);

  setupWebpOption();
  restoreSettings();
  if (qualityEl) {
    qualityEl.disabled = getMime() === 'image/png';
  }
  renderStats([
    ['Original', '—'],
    ['Compressed', '—'],
    ['Savings', '—'],
    ['Output pixels', '—'],
  ]);
})();
