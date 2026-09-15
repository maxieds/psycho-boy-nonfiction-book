/* APKLint front-end client — runs on Cloudflare Pages, talks to your backend.
 * ----------------------------------------------------------------------------
 * SET YOUR BACKEND URL:
 *   Either edit API_BASE below, or add to each page <head>:
 *     <meta name="apklint-api" content="https://api.apklint.com">
 * Leave API_BASE empty to run the UI without a backend (validation + upload UI
 * work; pressing the action button shows a "connect your analyzer" notice).
 * Backend API contract is documented in the deployment documentation.
 */
(function () {
  "use strict";
  function netMsg(e,fb){var m=(e&&e.message)||"";return /failed to fetch|networkerror|load failed|fetch/i.test(m)?fb:(m||fb);}
  var API_BASE = "https://api.apklint.com";
  var m = document.querySelector('meta[name="apklint-api"]');
  if (m && m.content) API_BASE = m.content.trim().replace(/\/$/, "");
  var MAX_BYTES = 1024 * 1024 * 1024; // 1 GB

  var ws = document.querySelector("[data-tool]");
  if (!ws) return;
  var cfg = {}; try { cfg = JSON.parse(ws.getAttribute("data-tool")); } catch (e) {}
  var mode = cfg.mode || "upload";
  var runBtn = ws.querySelector("[data-run]");
  var statusEl = ws.querySelector("[data-status]");
  var stateEl = ws.querySelector("[data-state]");
  var resultEl = ws.querySelector("[data-result]");
  var progress = ws.querySelector("[data-progress]");
  var pbar = ws.querySelector("[data-pbar]");
  var fileInput = ws.querySelector("[data-file]");
  var chip = ws.querySelector("[data-chip]");
  var drop = ws.querySelector("[data-drop]");
  var selectedFile = null;

  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
  function setState(s){ if(stateEl) stateEl.textContent = s; }
  function setStatus(msg,kind){ if(!statusEl) return; statusEl.textContent = msg||""; statusEl.className="status"+(kind?(" "+kind):""); }
  function showProgress(p){ if(progress){progress.hidden=false;} if(pbar) pbar.style.width=(p||0)+"%"; }
  function hideProgress(){ if(progress) progress.hidden=true; }
  function showResult(h){ if(resultEl){resultEl.hidden=false;resultEl.innerHTML=h;} }
  function clearResult(){ if(resultEl){resultEl.hidden=true;resultEl.innerHTML="";} }
  function enable(on){ if(runBtn) runBtn.disabled=!on; }
  function fmt(b){ if(b<1024)return b+" B"; if(b<1048576)return (b/1024).toFixed(0)+" KB"; if(b<1073741824)return (b/1048576).toFixed(1)+" MB"; return (b/1073741824).toFixed(2)+" GB"; }

  if (mode === "upload") {
    var accepts = function (name) {
      if (!fileInput || !fileInput.accept) return true;
      var exts = fileInput.accept.split(",").map(function (s){return s.trim().toLowerCase();});
      name = name.toLowerCase();
      return exts.some(function (e){ return e && name.slice(-e.length) === e; });
    };
    var syncEngineFor = function (name) {
      // dex-smali: apktool can't decode a raw .dex/.jar — force jadx and disable apktool.
      if (cfg.id !== "dex-smali-analyzer") return;
      var raw = /\.(dex|jar)$/i.test(name || "");
      var radios = [].slice.call(ws.querySelectorAll('[data-opt][name="engine"]'));
      radios.forEach(function (r) {
        var lab = r.closest("label");
        if (r.value === "apktool") {
          r.disabled = raw;
          if (lab) lab.style.opacity = raw ? "0.45" : "";
          if (raw && r.checked) { r.checked = false; }
        }
        if (raw && r.value === "jadx") { r.checked = true; }
      });
      var note = ws.querySelector("[data-engine-note]");
      if (note) note.textContent = raw ? "Raw .dex/.jar is analyzed with jadx (apktool is APK-only)." : "";
    };
    var pick = function (f) {
      if (!f) return;
      if (!accepts(f.name)) { setStatus("That file type isn\u2019t supported here. Expected: " + fileInput.accept, "err"); return; }
      if (f.size > MAX_BYTES) { setStatus("That file is larger than the 1 GB limit.", "err"); return; }
      selectedFile = f; clearResult(); setStatus("");
      if (chip) { chip.hidden = false; chip.innerHTML = '<span class="fn">' + esc(f.name) + '</span><span class="fs">' + fmt(f.size) + '</span><button type="button" class="fx" aria-label="Remove file">\u00d7</button>'; }
      syncEngineFor(f.name);
      enable(true);
    };
    if (drop) {
      drop.addEventListener("click", function () { if (fileInput) fileInput.click(); });
      drop.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); if (fileInput) fileInput.click(); }
      });
      ["dragenter","dragover"].forEach(function(ev){ drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.add("over");}); });
      ["dragleave","drop"].forEach(function(ev){ drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.remove("over");}); });
      drop.addEventListener("drop", function(e){ if(e.dataTransfer && e.dataTransfer.files[0]) pick(e.dataTransfer.files[0]); });
    }
    if (fileInput) fileInput.addEventListener("change", function(){ if(fileInput.files[0]) pick(fileInput.files[0]); });
    if (chip) chip.addEventListener("click", function(e){ if(e.target.classList.contains("fx")){ selectedFile=null; chip.hidden=true; if(fileInput) fileInput.value=""; syncEngineFor(""); enable(false); setStatus(""); clearResult(); } });
  } else if (mode === "text") {
    var ta = ws.querySelector("[data-text]");
    if (ta) ta.addEventListener("input", function(){ enable(ta.value.trim().length>0); });
  } else {
    var fields = [].slice.call(ws.querySelectorAll("[data-field]"));
    var check = function(){ enable(fields.some(function(f){return f.value.trim().length>0;})); };
    fields.forEach(function(f){ f.addEventListener("input", check); });
  }

  function notConfigured() {
    setState("Preview"); hideProgress(); enable(true);
    showResult('<div class="r-note"><strong>Front-end ready \u2014 connect your analyzer.</strong>'
      + '<p>This is the deployable APKLint front-end. To make this tool live, point it at your backend: set '
      + '<code>API_BASE</code> in the tool-client JS in <code>/assets/js/</code>, or add a '
      + '<code>&lt;meta name="apklint-api" content="https://your-api"&gt;</code> tag. The file validation, 1 GB '
      + 'limit, and upload flow above already work. See the deployment documentation for the API contract.</p></div>');
  }
  function gather() {
    if (mode === "text") { var ta = ws.querySelector("[data-text]"); return { text: ta ? ta.value : "" }; }
    var o = {}; [].slice.call(ws.querySelectorAll("[data-field]")).forEach(function(f){ o[f.getAttribute("data-field")] = f.value; }); return o;
  }
  function render(result) {
    if (!result) { showResult('<div class="r-note">Analysis complete, but no result was returned.</div>'); return; }
    if (typeof result === "string") { showResult('<pre class="r-raw">' + esc(result) + "</pre>"); return; }
    var h = "";
    var policyText = null;
    if (result.summary) h += '<div class="r-summary">' + esc(result.summary) + "</div>";
    if (result.findings && result.findings.length) {
      h += '<ul class="r-findings">' + result.findings.map(function (f) {
        var lvl = f.level || "info";
        if (cfg.id === "privacy-policy-generator-free" && f.detail
            && String(f.title || "").toLowerCase() === "your privacy policy") policyText = f.detail;
        return '<li class="f-' + esc(lvl) + '"><span class="f-lvl">' + esc(lvl.toUpperCase()) + '</span><div class="f-body"><span class="f-title">' + esc(f.title || "") + "</span>"
          + (f.detail ? '<span class="f-detail">' + esc(f.detail) + "</span>" : "") + "</div></li>";
      }).join("") + "</ul>";
    }
    if (result.downloads && result.downloads.length) {
      h += '<div class="r-downloads">' + result.downloads.map(function (d) {
        try { if (new URL(d.url).protocol !== "https:") return ""; } catch (e) { return ""; }
        return '<a class="dl-btn" href="' + esc(d.url) + '" target="_blank" rel="noopener nofollow" download>\u2193 ' + esc(d.name)
          + (d.size ? ' <span class="dl-size">' + fmt(d.size) + '</span>' : '') + "</a>";
      }).join("") + "</div>";
    }
    if (policyText) h += '<div class="r-downloads"><button type="button" class="dl-btn" id="dl-policy">\u2193 Download as .txt</button></div>';
    if (!h) h = '<pre class="r-raw">' + esc(JSON.stringify(result, null, 2)) + "</pre>";
    showResult(h);
    if (policyText) {
      var btn = document.getElementById("dl-policy");
      if (btn) btn.addEventListener("click", function () {
        var blob = new Blob([policyText], { type: "text/plain;charset=utf-8" });
        var u = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = u; a.download = "privacy-policy.txt";
        document.body.appendChild(a); a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(u); }, 1000);
      });
    }
  }
  function poll(jobId) {
    setStatus("Analyzing\u2026"); setState("Running"); showProgress(40);
    var start = Date.now();
    var MAX_MS = 90 * 60 * 1000;            // hard cap, with headroom over the worst-case YARA+ClamAV path
    function delay(elapsed){ return elapsed < 300000 ? 2000 : (elapsed < 1800000 ? 10000 : 30000); }
    function tick(){
      fetch(API_BASE + "/v1/jobs/" + encodeURIComponent(jobId)).then(function(r){
        return r.json().catch(function(){ return {}; }).then(function(j){
          if (!r.ok) throw new Error((j && j.error) || ("Job polling failed (" + r.status + ")."));
          return j;
        });
      }).then(function (j) {
        if (j.progress) showProgress(j.progress);
        if (j.status === "done") { hideProgress(); setStatus("Done."); setState("Done"); render(j.result); enable(true); return; }
        if (j.status === "error") { hideProgress(); setStatus(j.error || "Analysis failed.", "err"); setState("Error"); enable(true); return; }
        var elapsed = Date.now() - start;
        // Only give up past the cap if the backend has actually gone quiet — while it still
        // reports queued/running, keep polling slowly rather than abandoning a long scan.
        if (elapsed > MAX_MS && j.status !== "running" && j.status !== "queued") {
          hideProgress(); setStatus("This is taking longer than expected \u2014 please try again.", "err"); setState("Error"); enable(true); return;
        }
        if (elapsed > 1800000) setStatus("Still running. Large APKs can take a while \u2014 keep this tab open.");
        else if (elapsed > 30000) setStatus("Analyzing\u2026 large files can take a few minutes.");
        setTimeout(tick, delay(elapsed));
      }).catch(function (e) { hideProgress(); setStatus(netMsg(e, "Couldn\u2019t reach the analyzer. Please try again."), "err"); setState("Error"); enable(true); });
    }
    tick();
  }
  function run() {
    clearResult();
    if (!API_BASE) { notConfigured(); return; }
    enable(false);
    if (mode === "upload") {
      if (!selectedFile) { enable(true); return; }
      var opts = {};
      [].slice.call(ws.querySelectorAll("[data-opt]")).forEach(function (el) {
        if (el.type === "radio") { if (el.checked) opts[el.name] = el.value; }
      });
      setStatus("Preparing upload\u2026"); setState("Uploading"); showProgress(8);
      fetch(API_BASE + "/v1/uploads", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: cfg.id, filename: selectedFile.name, size: selectedFile.size, contentType: selectedFile.type || "application/octet-stream", options: opts }) })
        .then(function(r){ if(!r.ok) return r.json().then(function(e){ throw new Error((e&&e.error)||"Upload could not be prepared."); }); return r.json(); })
        .then(function (u) {
          if (!u.uploadUrl || !u.jobId) throw new Error("Upload could not be prepared.");
          showProgress(22);
          return fetch(u.uploadUrl, { method: u.method || "PUT", headers: u.headers || {}, body: selectedFile }).then(function (putRes) {
            if (!putRes.ok) throw new Error("Upload failed \u2014 please check your connection and try again.");
            showProgress(32);
            return fetch(API_BASE + "/v1/jobs/" + encodeURIComponent(u.jobId) + "/start", { method: "POST" }).then(function (sRes) {
              if (!sRes.ok) throw new Error("Could not start the analysis \u2014 please try again.");
              poll(u.jobId);
            });
          });
        }).catch(function (e) { hideProgress(); setStatus(netMsg(e, "Couldn\u2019t reach the analyzer. Please try again."), "err"); setState("Error"); enable(true); });
    } else {
      setStatus("Working\u2026"); setState("Running"); showProgress(35);
      fetch(API_BASE + "/v1/run", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: cfg.id, input: gather() }) })
        .then(function(r){
          return r.json().catch(function(){ return {}; }).then(function(j){
            if (!r.ok) throw new Error((j && j.error) || ("Request failed (" + r.status + ")."));
            return j;
          });
        }).then(function (j) {
          if (j.jobId) { poll(j.jobId); }
          else if (j.status === "error") { hideProgress(); setStatus(j.error || "Failed.", "err"); setState("Error"); enable(true); }
          else { hideProgress(); setStatus("Done."); setState("Done"); render(j.result); enable(true); }
        }).catch(function (e) { hideProgress(); setStatus(netMsg(e, "Couldn\u2019t reach the analyzer \u2014 check your connection and try again."), "err"); setState("Error"); enable(true); });
    }
  }
  if (runBtn) runBtn.addEventListener("click", run);
})();
