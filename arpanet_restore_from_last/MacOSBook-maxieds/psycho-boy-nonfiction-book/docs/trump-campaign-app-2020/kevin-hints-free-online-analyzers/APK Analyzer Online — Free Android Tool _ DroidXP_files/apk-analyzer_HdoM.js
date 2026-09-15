/**
 * APK Analyzer — client-side ZIP listing + manifest string heuristics + SHA-256
 */
(function () {
  // shared UI helpers (kept local to avoid globals)
  const dropzone = document.getElementById('apk-dropzone');
  const fileInput = document.getElementById('apk-file');
  const outEl = document.getElementById('apk-output');
  const statsEl = document.getElementById('apk-stats');
  const nameEl = document.getElementById('apk-file-name');

  function setOut(text) {
    if (outEl) outEl.textContent = text;
  }

  function formatBytes(n) {
    if (n < 1024) return n + ' B';
    if (n < 1024 * 1024) return (n / 1024).toFixed(2) + ' KB';
    return (n / (1024 * 1024)).toFixed(2) + ' MB';
  }

  function extractPrintableStrings(u8, minLen) {
    const min = minLen || 4;
    const out = [];
    let cur = [];
    for (let i = 0; i < u8.length; i++) {
      const c = u8[i];
      if (c >= 32 && c <= 126) {
        cur.push(String.fromCharCode(c));
      } else {
        if (cur.length >= min) out.push(cur.join(''));
        cur = [];
      }
    }
    if (cur.length >= min) out.push(cur.join(''));
    return out;
  }

  function guessManifestHints(strings) {
    const text = strings.join('\n');
    const hints = {};

    const pkg = text.match(/package=([a-zA-Z0-9_.]+)/);
    if (pkg) hints.package = pkg[1];

    const vn = text.match(/versionName[=>\s]+([^\s\n"']+)/);
    if (vn) hints.versionName = vn[1].replace(/^["']|["']$/g, '');

    const vc = text.match(/versionCode[=>\s]+"?([0-9]+)"?/);
    if (vc) hints.versionCode = vc[1];

    const label = text.match(/android:label[^"]*"([^"]{1,120})"/);
    if (label) hints.label = label[1];

    return hints;
  }

  async function sha256Hex(buffer) {
    const hash = await crypto.subtle.digest('SHA-256', buffer);
    const bytes = new Uint8Array(hash);
    return Array.from(bytes, function (b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
  }

  async function analyzeArrayBuffer(buffer, fileName) {
    if (typeof JSZip === 'undefined') {
      setOut('Error: JSZip failed to load. Check your network connection.');
      return;
    }

    const zip = await JSZip.loadAsync(buffer);
    const names = Object.keys(zip.files).sort();
    const files = names.map(function (n) {
      return zip.files[n];
    });

    let totalUncompressed = 0;
    let dexCount = 0;
    let hasManifest = false;
    let nativeLib = false;
    const lines = [];

    lines.push('File: ' + fileName);
    lines.push('SHA-256: ' + (await sha256Hex(buffer)));
    lines.push('ZIP entries: ' + names.length);
    lines.push('');

    function entrySize(f) {
      if (f.dir) return 0;
      if (typeof f.uncompressedSize === 'number') return f.uncompressedSize;
      if (f._data && typeof f._data.uncompressedSize === 'number') return f._data.uncompressedSize;
      return 0;
    }

    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      if (f.dir) continue;
      totalUncompressed += entrySize(f);
      const lower = f.name.toLowerCase();
      if (lower === 'androidmanifest.xml') hasManifest = true;
      if (/\.dex$/i.test(lower)) dexCount++;
      if (lower.indexOf('lib/') === 0 && /\.so$/i.test(lower)) nativeLib = true;
    }

    lines.push('--- Summary ---');
    lines.push('Approx. uncompressed total: ' + formatBytes(totalUncompressed));
    lines.push('DEX files: ' + dexCount);
    lines.push('AndroidManifest.xml: ' + (hasManifest ? 'present (binary AXML)' : 'missing'));
    lines.push('Native .so libraries: ' + (nativeLib ? 'detected under lib/' : 'none found'));
    lines.push('');

    if (hasManifest) {
      const entry = zip.file('AndroidManifest.xml');
      if (entry) {
        const u8 = await entry.async('uint8array');
        const strs = extractPrintableStrings(u8, 4);
        const hints = guessManifestHints(strs);
        lines.push('--- Heuristic metadata (from binary manifest strings) ---');
        if (hints.package) lines.push('Possible package: ' + hints.package);
        if (hints.versionName) lines.push('Possible versionName: ' + hints.versionName);
        if (hints.versionCode) lines.push('Possible versionCode: ' + hints.versionCode);
        if (hints.label) lines.push('Possible label ref: ' + hints.label);
        if (!hints.package && !hints.versionName) {
          lines.push(
            '(No obvious package/version strings — binary AXML often hides plain text. Full parsing requires specialized decoders.)'
          );
        }
        lines.push('');
      }
    }

    lines.push('--- Notable paths ---');
    const notable = names.filter(function (n) {
      const l = n.toLowerCase();
      return (
        l === 'androidmanifest.xml' ||
        l === 'resources.arsc' ||
        l.indexOf('meta-inf/') === 0 ||
        /\.dex$/i.test(l) ||
        l.indexOf('kotlin/') === 0 ||
        l.indexOf('assets/') === 0
      );
    });
    notable.slice(0, 40).forEach(function (n) {
      const f = zip.files[n];
      const es = f ? entrySize(f) : 0;
      const sz = es ? ' (' + formatBytes(es) + ')' : '';
      lines.push(' • ' + n + sz);
    });
    if (notable.length > 40) lines.push(' … +' + (notable.length - 40) + ' more notable paths');

    lines.push('');
    lines.push('--- Full file list ---');
    names.forEach(function (n) {
      const f = zip.files[n];
      let sz = '';
      if (f.dir) sz = ' [dir]';
      else {
        const es = entrySize(f);
        if (es) sz = ' — ' + formatBytes(es);
      }
      lines.push(n + sz);
    });

    setOut(lines.join('\n'));

    if (statsEl) {
      statsEl.innerHTML =
        '<div class="col-6 col-md-3"><div class="tool-stat"><span class="tool-stat__label">Entries</span><span class="tool-stat__value">' +
        names.length +
        '</span></div></div>' +
        '<div class="col-6 col-md-3"><div class="tool-stat"><span class="tool-stat__label">DEX</span><span class="tool-stat__value">' +
        dexCount +
        '</span></div></div>' +
        '<div class="col-6 col-md-3"><div class="tool-stat"><span class="tool-stat__label">Size</span><span class="tool-stat__value">' +
        formatBytes(buffer.byteLength) +
        '</span></div></div>' +
        '<div class="col-6 col-md-3"><div class="tool-stat"><span class="tool-stat__label">Native</span><span class="tool-stat__value">' +
        (nativeLib ? 'Yes' : 'No') +
        '</span></div></div>';
    }
  }

  async function handleFile(file) {
    if (!file) return;
    const name = file.name || 'upload.apk';
    if (!/\.apk$/i.test(name) && file.type !== 'application/vnd.android.package-archive') {
      setOut('Please choose an .apk file (Android package).');
      return;
    }
    if (nameEl) nameEl.textContent = name;
    setOut('Reading ' + name + '…');
    const buf = await file.arrayBuffer();
    await analyzeArrayBuffer(buf, name);
  }

  function bindDropzone() {
    if (!dropzone || !fileInput) return;

    dropzone.addEventListener('click', function () {
      fileInput.click();
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
      const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) handleFile(f);
    });

    fileInput.addEventListener('change', function () {
      const f = fileInput.files && fileInput.files[0];
      if (f) handleFile(f);
    });
  }

  const copyBtn = document.getElementById('apk-copy');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      if (!outEl || !outEl.textContent) return;
      navigator.clipboard.writeText(outEl.textContent).then(
        function () {
          copyBtn.textContent = 'Copied';
          setTimeout(function () {
            copyBtn.textContent = '';
            copyBtn.innerHTML = '<i class="bi bi-clipboard me-1"></i> Copy report';
          }, 1600);
        },
        function () {}
      );
    });
  }

  bindDropzone();
})();
