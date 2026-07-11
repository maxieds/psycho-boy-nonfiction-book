/*! WebMCP progressive enhancement v17 — page-specific, safe, read-first, feature-detected.
    Cleanup/finalization of v16. Same safe architecture; changes are surgical:
      - Homepages register honest search / list / open / navigation / contact tools
        (never a generic "run homepage" tool), derived from the real visible DOM.
      - Tool registration is async: each tool is awaited; a tool is marked registered
        only after registerTool() resolves, and a rejected registration is captured in
        window.__webmcpAudit.errors (no unhandled promise rejection).
      - Pages may opt out with <meta name="webmcp" content="off"> (used on error pages);
        the engine then registers nothing.
    Guarantees (unchanged from v16):
      - No-op in browsers without document.modelContext.registerTool (no errors, no console noise).
      - Never sends data anywhere. No backend calls, analytics, local-file reads, hidden-field
        exposure, or personal-data exposure.
      - No auto-submit of contact forms. No fake file processing. No fabricated results:
        every tool either reads visible on-page state or drives a visible on-page control/link.
      - Uses the document model-context registration API (not the deprecated navigator variant).
    Origin isolation note: WebMCP requires an origin-isolated document (Origin-Agent-Cluster: ?1)
    and the tools=(self) Permissions Policy, both set at the header layer. This script does not
    require cross-origin isolation (COOP/COEP) and works with same-origin-allow-popups. */
(function () {
  "use strict";
  var VERSION = "v21";
  try {
    if (typeof document === "undefined") return;

    /* ---------- small helpers ---------- */
    function clip(s, n) { return String(s == null ? "" : s).replace(/\s+/g, " ").trim().slice(0, n || 1500); }
    function result(text) { return clip(text, 1500); }
    function sel(s, root) { try { return (root || document).querySelector(s); } catch (e) { return null; } }
    function selAll(s, root) { try { return Array.prototype.slice.call((root || document).querySelectorAll(s)); } catch (e) { return []; } }
    function canonical() { var l = sel('link[rel="canonical"]'); return l ? l.href : location.href; }
    function origin() { try { return new URL(canonical()).origin; } catch (e) { return location.origin; } }
    function host() { try { return new URL(canonical()).hostname; } catch (e) { return location.hostname; } }

    // --- v20 spec-conformance helpers ---
    // Every registered tool gets a human title (spec: optional USVString) and a valid
    // serializable inputSchema object, so registerTool never rejects on shape.
    function titleFromName(n) { var s = String(n || "").replace(/[_\-.]+/g, " ").trim(); return s ? s.charAt(0).toUpperCase() + s.slice(1) : "Tool"; }
    function finalizeTool(t) {
      if (t.title == null) t.title = titleFromName(t.name);
      if (t.inputSchema == null) t.inputSchema = { type: "object", properties: {}, additionalProperties: false };
      // Normalize annotations across both WebMCP surfaces:
      //  - spec (document.modelContext): readOnlyHint / untrustedContentHint
      //  - MCP-B polyfill & Chrome 146 early preview (navigator.modelContext): readOnly / destructive
      // Extra keys are ignored by the surface that doesn't use them (WebIDL dictionaries drop unknown members).
      var a = t.annotations || (t.annotations = {});
      if (a.readOnlyHint == null) a.readOnlyHint = false;
      if (a.untrustedContentHint == null) a.untrustedContentHint = false;
      if (a.readOnly == null) a.readOnly = a.readOnlyHint;   // mirror hint -> polyfill vocab
      if (a.destructive == null) a.destructive = false;      // none of these tools are irreversible
      return t;
    }
    function textOf(el) { return (el && (el.textContent || el.value || el.getAttribute("aria-label")) || "").replace(/\s+/g, " ").trim(); }
    function findCta(re, sels) { var ns = selAll(sels || 'a, button, [role="button"]'); for (var i = 0; i < ns.length; i++) { if (re.test(textOf(ns[i]))) return ns[i]; } return null; }
    function bringIntoView(el) { try { el.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (e) { try { el.scrollIntoView(); } catch (e2) {} } try { if (el.focus) el.focus({ preventScroll: true }); } catch (e3) { try { el.focus(); } catch (e4) {} } }
    // Aavran Living site-wide visible CTAs (honest: only surfaced when the element exists on the page)
    function bookStudioCta() { return findCta(/book\s+(a\s+)?studio\s+visit|book\s+studio/i); }
    function langToggle() { return findCta(/switch\s+language|gujarati|english|\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0/i); }
    function directionsLink() { return sel('a[href*="maps.app"], a[href*="goo.gl/maps"], a[href*="google.com/maps"], a[href*="maps.google"]'); }
    function detectSurfaces() {
      var s = [];
      if (homeSearchInput() || sel('input[type="search"]')) s.push("search-input");
      var fc = selAll("form").length; if (fc) s.push("forms:" + fc);
      if (sel('input[type="file"]')) s.push("file-upload");
      if (bookStudioCta()) s.push("book-studio-cta");
      if (langToggle()) s.push("language-toggle");
      if (directionsLink()) s.push("directions-link");
      if (selAll('a[href*="wa.me"], a[href*="whatsapp"], a[href*="api.whatsapp"]').length) s.push("whatsapp");
      return s;
    }
    function absUrl(href) { try { return new URL(href, location.href).href; } catch (e) { return href || ""; } }
    function isVisible(el) {
      if (!el) return false;
      if (el.hidden || el.getAttribute("hidden") !== null) return false;
      if (el.type === "hidden") return false;
      var cs = null; try { cs = getComputedStyle(el); } catch (e) {}
      if (cs && (cs.display === "none" || cs.visibility === "hidden")) return false;
      var r = null; try { r = el.getBoundingClientRect(); } catch (e) {}
      if (r && r.width === 0 && r.height === 0) return false;
      return true;
    }
    function snake(s, max) {
      s = String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
      if (!s) return "";
      return s.slice(0, max || 40).replace(/_+$/g, "");
    }

    /* ---------- page identity ---------- */
    function slug() {
      var segs = location.pathname.split("/").filter(function (x) { return x && x.toLowerCase() !== "index.html"; });
      var last = segs.length ? segs[segs.length - 1] : "";
      last = last.replace(/\.html?$/i, "");
      if (/^\d+$/.test(last) && segs.length >= 2) last = segs[segs.length - 2];
      return last;
    }
    function siteType() {
      var h = host();
      if (/h5browsergames/i.test(h)) return "games";
      if (/apklint/i.test(h)) return "apk";
      if (/pdftoolsbase/i.test(h)) return "filetool";
      if (/imgtoolsbase/i.test(h)) return "filetool";
      if (/(texttoolsbase|webdevtoolsbase|calctoolsbase)/i.test(h)) return "texttool";
      if (/(takenick|nestedsolution|nestedgames|aavranliving)/i.test(h)) return "business";
      return "generic";
    }
    function isHomepage() {
      var p;
      try { p = new URL(canonical()).pathname; } catch (e) { p = location.pathname; }
      p = p.replace(/index\.html?$/i, "").replace(/\/+$/, "/");
      return p === "/" || p === "";
    }

    /* ---------- DOM probes ---------- */
    function primaryTextInput() {
      var cands = selAll('main textarea, main input[type="text"], main input:not([type]), main input[type="search"], main input[type="url"], main input[type="email"], main input[type="number"]');
      for (var i = 0; i < cands.length; i++) { if (isVisible(cands[i])) return cands[i]; }
      cands = selAll('textarea, input[type="text"]');
      for (var j = 0; j < cands.length; j++) { if (isVisible(cands[j])) return cands[j]; }
      return null;
    }
    function primaryControl() {
      return primaryTextInput() || (function () {
        var c = selAll('main select, main button[type="button"], main button');
        for (var i = 0; i < c.length; i++) { if (isVisible(c[i])) return c[i]; }
        return null;
      })();
    }
    function resultEl() {
      return sel('#out, .out, output, .output, .result, .results, .res, .result-panel, .result-value, .output-panel, .tablewrap, .stats, .counts, [id="result"], [id="results"], [id="output"], main pre');
    }
    function hasFileInput() { return selAll('input[type="file"]').length > 0; }
    function contactForm() {
      var forms = selAll("form");
      for (var i = 0; i < forms.length; i++) {
        var f = forms[i];
        var t = (f.getAttribute("id") + " " + f.className + " " + (f.getAttribute("name") || "")).toLowerCase();
        if (/contact|enquir|inquir|message|lead|quote|consult/.test(t)) return f;
        if (sel('input[type="email"], textarea[name*="message" i]', f)) return f;
      }
      return null;
    }
    var DENY = /(reset|clear|copy|share|download|save|delete|remove|upload|choose|browse|file|submit|send|contact|buy|pay|subscribe|log ?in|sign ?up|sign ?in|cancel|close|menu|nav|sample|paste|swap|theme|print|export)/i;
    var ALLOW = /(run|convert|calculate|calc|format|minify|beautify|encode|decode|generate|compute|process|validate|parse|count|sort|transform|shorten|expand|escape|unescape|hash|slug|reverse|trim|clean|make|build|create|solve|check)/i;
    function safeRunButton() {
      var btns = selAll("main button, main input[type=button], main input[type=submit]").filter(isVisible);
      function submitStaysClientSide(b) {
        if (b.type !== "submit") return true;
        var form = b.form || b.closest("form");
        if (!form) return false;
        var oh = (form.getAttribute("onsubmit") || "");
        return /preventdefault/i.test(oh);
      }
      var labelled = btns.map(function (b) {
        var txt = (b.textContent || b.value || "") + " " + (b.id || "") + " " + b.className;
        return { el: b, txt: txt };
      });
      for (var i = 0; i < labelled.length; i++) {
        if (ALLOW.test(labelled[i].txt) && !DENY.test(labelled[i].txt) && submitStaysClientSide(labelled[i].el)) return labelled[i].el;
      }
      var nd = labelled.filter(function (o) { return !DENY.test(o.txt) && submitStaysClientSide(o.el); });
      if (nd.length === 1) return nd[0].el;
      return null;
    }
    function pageType() {
      var p = location.pathname;
      if (/(privacy|terms|cookie|disclaimer|refund|policy|dmca|about|contact-us)/i.test(p)) {
        if (contactForm()) return "contact";
        return "content";
      }
      if (contactForm()) return "contact";
      if (siteType() === "games") return "games";
      if (siteType() === "apk" || (siteType() === "filetool" && hasFileInput())) return "filetool";
      if (hasFileInput() && primaryTextInput() == null) return "filetool";
      if (primaryTextInput()) return "directtool";
      if (p === "/" || p === "" || p === "/index.html") return "home";
      return "content";
    }
    function effectiveType() {
      if (sel('meta[name="webmcp"][content="off"]')) return "disabled";
      if (isHomepage() && HOME_TOOLSETS[host()]) return "home";
      return pageType();
    }

    /* ---------- read-only tools (always safe) ---------- */
    function toolPageContext() {
      return {
        name: "get_page_context",
        description: "Return a concise read-only summary of this page (title, canonical URL, page type, on-page tool, primary action). Exposes no private data, files, hidden fields, or backend internals.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        _source: "always", _safety: "navigation_only",
        execute: function () {
          var h1 = sel("h1"), af = sel(".answer-first"), pc = primaryControl();
          return result(JSON.stringify({
            title: clip(document.title, 160),
            canonical: canonical(),
            pageType: effectiveType(),
            heading: h1 ? clip(h1.textContent, 120) : "",
            answerFirst: af ? clip(af.textContent, 500) : "",
            primaryAction: pc ? (pc.tagName.toLowerCase() + (pc.type ? "[" + pc.type + "]" : "")) : "none",
            limitations: "Read-only. No file contents, hidden fields, backend results, or personal data are exposed."
          }));
        }
      };
    }
    function toolVisibleResult() {
      return {
        name: "get_visible_result",
        description: "Return only the currently visible output/result text of this tool. Returns a placeholder when no result is shown yet. Never reads hidden fields, uploaded file contents, or backend data.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: true },
        _source: "visible result/output region", _safety: "navigation_only",
        execute: function () {
          var el = resultEl(); var t = el ? (el.innerText || el.textContent || "") : "";
          t = clip(t, 1500); return result(t ? t : "No visible result yet.");
        }
      };
    }
    function toolFocusPrimary(name, desc) {
      return {
        name: name || "focus_primary_input",
        description: desc || "Move keyboard focus to this tool's primary input or control. Does not submit, upload, calculate, or change any data.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false },
        _source: "visible primary control", _safety: "navigation_only",
        execute: function () {
          var el = primaryControl();
          if (!el) return result("No focusable primary control found on this page.");
          try { el.focus({ preventScroll: false }); } catch (e) { try { el.focus(); } catch (e2) {} }
          return result("Focused: " + el.tagName.toLowerCase() + (el.type ? "[" + el.type + "]" : "") + ".");
        }
      };
    }

    /* ---------- page-specific DIRECT tool (drives the visible on-page tool) ---------- */
    function directToolName() {
      var s = snake(slug(), 34);
      if (!s) s = snake((sel("h1") ? sel("h1").textContent : document.title) || "tool", 34);
      if (!s) s = "page_tool";
      if (s === "get_page_context" || s === "get_visible_result") s = s + "_run";
      return s + "_tool";
    }
    function toolDirect() {
      var name = directToolName();
      var h1 = sel("h1"); var label = clip(h1 ? h1.textContent : (document.title || "this tool"), 80);
      var hasInput = !!primaryTextInput();
      var props = {};
      if (hasInput) {
        props.input = { type: "string", description: "Text to place into the tool's primary input before running. Optional; omit to run against text already on the page." };
      }
      return {
        name: name,
        description: clip("Run the visible on-page tool \"" + label + "\". Runs entirely in your browser; no data is sent to a server. " + (hasInput ? "Optionally provide input text, then the visible result is returned." : "Activates the visible action and returns the visible result."), 480),
        inputSchema: { type: "object", properties: props, additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: true },
        _source: "primary input + safe visible action", _safety: "direct",
        execute: function (args) {
          try {
            var inp = primaryTextInput();
            if (hasInput && args && typeof args.input === "string" && inp) {
              try {
                var proto = inp.tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
                var setter = Object.getOwnPropertyDescriptor(proto, "value");
                if (setter && setter.set) setter.set.call(inp, args.input); else inp.value = args.input;
              } catch (e) { inp.value = args.input; }
              try { inp.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
              try { inp.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
              try { inp.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true })); } catch (e) {}
            }
            var btn = safeRunButton();
            if (btn) { try { btn.click(); } catch (e) {} }
            var el = resultEl(); var out = el ? clip(el.innerText || el.textContent || "", 1400) : "";
            if (out) return result(out);
            if (btn || (hasInput && inp)) return result("Ran the on-page tool. No textual result region was detected; the output may be shown visually on the page (e.g. a preview or download).");
            return result("This tool updates as you type. Provide 'input' or enter text on the page, then read the visible result.");
          } catch (e) {
            return result("Could not run the on-page tool automatically: " + (e && e.message ? e.message : "unknown error") + ". Please use the visible controls on the page.");
          }
        }
      };
    }

    /* ---------- file-tool helpers (NO fake processing) ---------- */
    function toolFileFocus() {
      return {
        name: "focus_file_upload",
        description: "Focus this tool's file chooser so you can select a file. Files are processed only in your browser after you pick them; this tool never uploads or reads file contents on its own.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false },
        _source: 'input[type=file] present', _safety: "file_selection_required",
        execute: function () {
          var f = sel('input[type="file"]');
          var trigger = sel('label[for], .upload, .dropzone, [data-file], button');
          try { if (f) { f.focus(); } else if (trigger) { trigger.focus(); } } catch (e) {}
          return result(f ? "Focused the file input. Select a file, then use the visible action button to process it in your browser." : "No file input focusable; use the visible upload control on the page.");
        }
      };
    }
    function toolFileStatus() {
      return {
        name: "get_tool_status",
        description: "Report whether a file has been selected and whether a visible result/status is shown. Never reads file contents.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: true },
        _source: 'file input state + visible status', _safety: "navigation_only",
        execute: function () {
          var f = sel('input[type="file"]'); var picked = !!(f && f.files && f.files.length);
          var el = resultEl(); var t = el ? clip(el.innerText || el.textContent || "", 800) : "";
          return result(JSON.stringify({ fileSelected: picked, visibleStatus: t || "none", note: "Select a file with the visible control; processing happens in your browser." }));
        }
      };
    }

    /* ---------- contact helpers (NO auto submit) ---------- */
    function toolContactFocus() {
      return {
        name: "focus_contact_form",
        description: "Focus the first field of the visible contact form so the user can review and fill it. Does NOT submit the form; the user must submit it themselves.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false },
        _source: "visible contact form", _safety: "human_confirmation",
        execute: function () {
          var f = contactForm(); if (!f) return result("No contact form found on this page.");
          var first = sel('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select', f);
          try { if (first) first.focus(); } catch (e) {}
          return result("Focused the contact form. Fill the fields and submit manually — this tool does not send the form for you.");
        }
      };
    }

    /* ---------- navigation helpers (derived from real visible links) ---------- */
    function visibleNav() {
      var links = selAll('header a[href], nav a[href], main a[href]').filter(isVisible);
      var seen = {}, out = [];
      for (var i = 0; i < links.length && out.length < 40; i++) {
        var a = links[i]; var href = a.getAttribute("href"); if (!href || href.charAt(0) === "#") continue;
        var abs; try { abs = new URL(href, location.href).href; } catch (e) { continue; }
        if (seen[abs]) continue; seen[abs] = 1;
        var t = clip(a.textContent, 60); if (!t) continue;
        out.push({ text: t, url: abs });
      }
      return out;
    }
    function toolListSections() {
      return {
        name: "list_sections",
        description: "List the main visible navigation links on this site (text and URL) so an agent can choose where to go next. Read-only.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: true },
        _source: "visible header/nav/main links", _safety: "navigation_only",
        execute: function () { return result(JSON.stringify(visibleNav().slice(0, 25))); }
      };
    }
    function toolOpenSection() {
      return {
        name: "open_section",
        description: "Navigate to one of this site's visible sections by its link text (as listed by list_sections). Navigates the current page.",
        inputSchema: { type: "object", properties: { text: { type: "string", description: "The visible link text of the section to open." } }, required: ["text"], additionalProperties: false },
        annotations: { readOnlyHint: false },
        _source: "visible header/nav/main links", _safety: "navigation_only",
        execute: function (args) {
          var want = clip(args && args.text, 60).toLowerCase(); if (!want) return result("Provide the section link text.");
          var nav = visibleNav();
          for (var i = 0; i < nav.length; i++) { if (nav[i].text.toLowerCase().indexOf(want) !== -1) { try { location.href = nav[i].url; } catch (e) {} return result("Navigating to: " + nav[i].text); } }
          return result("No visible section matched \"" + want + "\". Use list_sections to see options.");
        }
      };
    }

    /* ---------- games helpers (h5browsergames, honest) ---------- */
    function gameSearchInput() { return sel('input[type="search"], input[name*="search" i], input[placeholder*="search" i], #search, .search input'); }
    function categoryLinks() {
      return selAll('a[href*="/categor" i], a[href*="/c/" i]').filter(isVisible).map(function (a) {
        return { text: clip(a.textContent, 50), url: absUrl(a.getAttribute("href")) };
      }).filter(function (o) { return o.text && o.url; });
    }
    function gameLinks() {
      return selAll('main a[href]').filter(isVisible).map(function (a) {
        var href = a.getAttribute("href") || ""; return { text: clip(a.textContent, 60), href: href };
      }).filter(function (o) { return o.text && o.href && o.href.charAt(0) !== "#" && !/\/categor/i.test(o.href); });
    }
    function toolSearchGames() {
      return {
        name: "search_games",
        description: "Type a query into the visible game search box on this page (if present) and show matching results. Runs in the browser using the page's own search.",
        inputSchema: { type: "object", properties: { query: { type: "string", description: "Game name or keyword to search for." } }, required: ["query"], additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: true },
        _source: "visible search input", _safety: "direct",
        execute: function (args) {
          var q = clip(args && args.query, 80); var box = gameSearchInput();
          if (!box) return result("No search box on this page. Use list_game_categories or open_game to browse.");
          try { box.focus(); box.value = q; box.dispatchEvent(new Event("input", { bubbles: true })); box.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
          return result("Searched for \"" + q + "\". Matching games are shown on the page.");
        }
      };
    }
    function toolListCategories() {
      return {
        name: "list_game_categories",
        description: "List the visible game categories (name and URL) available on this site. Read-only.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: true },
        _source: "visible category links", _safety: "navigation_only",
        execute: function () { var c = categoryLinks(); return result(c.length ? JSON.stringify(c.slice(0, 30)) : "No category links visible on this page."); }
      };
    }
    function toolOpenGame() {
      return {
        name: "open_game",
        description: "Open a game or category shown on this page by its visible title text. Navigates to the game/category page where the user can start it.",
        inputSchema: { type: "object", properties: { title: { type: "string", description: "The visible title of the game or category to open." } }, required: ["title"], additionalProperties: false },
        annotations: { readOnlyHint: false },
        _source: "visible game/category links", _safety: "navigation_only",
        execute: function (args) {
          var want = clip(args && args.title, 60).toLowerCase(); if (!want) return result("Provide the game or category title.");
          var items = gameLinks().concat(categoryLinks().map(function (c) { return { text: c.text, href: c.url }; }));
          for (var i = 0; i < items.length; i++) { if (items[i].text.toLowerCase().indexOf(want) !== -1) { try { location.href = absUrl(items[i].href); } catch (e) {} return result("Opening: " + items[i].text); } }
          return result("No visible game/category matched \"" + want + "\".");
        }
      };
    }
    function toolStartGameTop() {
      return {
        name: "start_game_top_level",
        description: "Open the first featured game or category on this page so you can start playing. Navigates to that page.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false },
        _source: "first visible game/category link", _safety: "navigation_only",
        execute: function () {
          var items = gameLinks().concat(categoryLinks().map(function (c) { return { text: c.text, href: c.url }; }));
          for (var i = 0; i < items.length; i++) { if (items[i].href) { try { location.href = absUrl(items[i].href); } catch (e) {} return result("Opening: " + items[i].text); } }
          return result("No game or category link is visible on this page.");
        }
      };
    }

    /* ---------- homepage helpers ---------- */
    function homeSearchInput() {
      var s = sel('input[type="search"], input#q, input#site-search, input#tool-search, input[name="q"], input[aria-label*="earch" i], input[placeholder*="earch" i]');
      if (s && isVisible(s)) return s;
      var cands = selAll('header input, main input, form[role="search"] input, .search input, .searchbox input');
      for (var i = 0; i < cands.length; i++) {
        var c = cands[i]; if (!isVisible(c)) continue;
        var ty = (c.getAttribute("type") || "text").toLowerCase();
        if (ty !== "text" && ty !== "search") continue;
        var meta = ((c.id || "") + " " + (c.name || "") + " " + (c.getAttribute("aria-label") || "") + " " + (c.getAttribute("placeholder") || "")).toLowerCase();
        if (/search|filter|find|query/.test(meta)) return c;
      }
      return null;
    }
    function setSearch(box, q) {
      try {
        var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value");
        if (setter && setter.set) setter.set.call(box, q); else box.value = q;
      } catch (e) { try { box.value = q; } catch (e2) {} }
      try { box.focus(); } catch (e) {}
      ["input", "keyup", "change"].forEach(function (t) { try { box.dispatchEvent(new Event(t, { bubbles: true })); } catch (e) {} });
    }
    function contentLinks() {
      var links = selAll('main a[href], .tools a[href], .grid a[href], .cards a[href], .tool-grid a[href], section a[href]').filter(isVisible);
      var seen = {}, out = [];
      for (var i = 0; i < links.length && out.length < 60; i++) {
        var a = links[i], href = a.getAttribute("href");
        if (!href || href.charAt(0) === "#") continue;
        if (/^(mailto:|tel:|javascript:)/i.test(href)) continue;
        var u = absUrl(href); if (seen[u]) continue; seen[u] = 1;
        var t = clip(a.textContent, 70) || a.getAttribute("aria-label") || "";
        if (!t) continue;
        out.push({ text: t, url: u });
      }
      return out;
    }
    function firstContactLink() { var a = sel('a[href*="contact" i], a[href*="enquir" i], a[href*="inquir" i]'); return a || null; }
    function galleryLink() { return sel('a[href*="gallery" i], a[href*="portfolio" i], a[href*="projects" i]'); }
    function whatsappLink() { return sel('a[href*="wa.me" i], a[href*="api.whatsapp" i], a[href*="whatsapp" i]'); }
    function bestLink(list, want) {
      want = clip(want, 80).toLowerCase(); if (!want) return null;
      var best = null, score = 0;
      for (var i = 0; i < list.length; i++) {
        var t = (list[i].text || "").toLowerCase(), u = (list[i].url || "").toLowerCase(), s = 0;
        if (t === want) s = 100; else if (t.indexOf(want) >= 0) s = 70; else if (u.indexOf(want.replace(/\s+/g, "-")) >= 0) s = 55; else if (u.indexOf(want.replace(/\s+/g, "")) >= 0) s = 45;
        if (s > score) { score = s; best = list[i]; }
      }
      return score >= 45 ? best : null;
    }

    /* homepage tool builders (honest, visible-link/search based) */
    function hSearch(name, noun) {
      return {
        name: name, _source: "homepage search box", _safety: "direct",
        description: clip("Search this site's " + noun + "s using the visible search box; matching " + noun + "s then appear on the page. Runs in your browser; nothing is sent to a server.", 300),
        inputSchema: { type: "object", properties: { query: { type: "string", description: "Keyword to search for." } }, required: ["query"], additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: true },
        execute: function (a) {
          var box = homeSearchInput(); if (!box) return result("No search box is visible on this page.");
          var q = clip(a && a.query, 80); setSearch(box, q);
          return result("Searched for \"" + q + "\". Matching results are shown on the page.");
        }
      };
    }
    function hList(name, noun) {
      return {
        name: name, _source: "visible " + noun + " links", _safety: "navigation_only",
        description: clip("List the " + noun + " shown on this page (name and URL) so you can pick one to open. Read-only.", 260),
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: true },
        execute: function () { var l = contentLinks(); return result(l.length ? JSON.stringify(l.slice(0, 40)) : "No links are visible on this page."); }
      };
    }
    function hOpen(name, noun) {
      return {
        name: name, _source: "visible " + noun + " links", _safety: "navigation_only",
        description: clip("Open a " + noun + " listed on this page by its visible name. Navigates to that page.", 260),
        inputSchema: { type: "object", properties: { name: { type: "string", description: "Visible name of the " + noun + " to open." } }, required: ["name"], additionalProperties: false },
        annotations: { readOnlyHint: false },
        execute: function (a) {
          var m = bestLink(contentLinks(), a && a.name); if (!m) return result("No matching " + noun + " found. Use the list tool to see options.");
          try { location.href = m.url; } catch (e) {} return result("Opening: " + m.text);
        }
      };
    }
    function hListServices(name) {
      return {
        name: name, _source: "visible services/section links", _safety: "navigation_only",
        description: "List this business's visible services and site sections (name and URL) so you can choose where to go. Read-only.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: true },
        execute: function () {
          var merged = visibleNav().concat(contentLinks()); var seen = {}, out = [];
          for (var i = 0; i < merged.length && out.length < 40; i++) { if (seen[merged[i].url]) continue; seen[merged[i].url] = 1; out.push(merged[i]); }
          return result(out.length ? JSON.stringify(out) : "No section links are visible on this page.");
        }
      };
    }
    function hNavSections(name) {
      return {
        name: name, _source: "visible services/section links", _safety: "navigation_only",
        description: "Navigate to one of this site's visible sections by its name (as listed by list_services). Navigates the current page.",
        inputSchema: { type: "object", properties: { section: { type: "string", description: "Visible name of the section to open." } }, required: ["section"], additionalProperties: false },
        annotations: { readOnlyHint: false },
        execute: function (a) {
          var m = bestLink(visibleNav().concat(contentLinks()), a && a.section);
          if (!m) return result("No matching section found. Use list_services to see options.");
          try { location.href = m.url; } catch (e) {} return result("Navigating to: " + m.text);
        }
      };
    }
    function hContact(name) {
      return {
        name: name, _source: "contact form or contact link", _safety: "human_confirmation",
        description: "Start contacting this business: focuses the contact form on this page if present, otherwise opens the contact page. Never submits anything for you.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false },
        execute: function () {
          var f = contactForm();
          if (f) { var first = sel('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select', f); try { if (first) first.focus(); } catch (e) {} return result("Focused the contact form. Fill it in and submit manually — nothing is sent for you."); }
          var a = firstContactLink(); if (a) { try { location.href = absUrl(a.getAttribute("href")); } catch (e) {} return result("Opening the contact page."); }
          return result("No contact form or contact link found on this page.");
        }
      };
    }
    function hExploreApps(name) {
      return {
        name: name, _source: "visible app/product/service links", _safety: "navigation_only",
        description: "List this brand's apps, products and services shown on the page (name and URL). Read-only.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: true },
        execute: function () {
          var all = contentLinks();
          var picked = all.filter(function (o) { return /(app|product|service|tool|project|game|platform|studio|solution)/i.test(o.text + " " + o.url); });
          var list = picked.length ? picked : all;
          return result(list.length ? JSON.stringify(list.slice(0, 40)) : "No app/service links are visible on this page.");
        }
      };
    }
    function hGallery(name) {
      return {
        name: name, _source: "visible gallery link", _safety: "navigation_only",
        description: "Open this studio's gallery/portfolio page using the visible gallery link. Navigates the current page.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false },
        execute: function () { var a = galleryLink(); if (!a) return result("No gallery link found on this page."); try { location.href = absUrl(a.getAttribute("href")); } catch (e) {} return result("Opening the gallery."); }
      };
    }
    function hWhatsapp(name) {
      return {
        name: name, _source: "visible WhatsApp link", _safety: "human_confirmation",
        description: "Open this business's WhatsApp chat using the visible WhatsApp link. Opens a chat with no pre-filled message; you type and send it yourself.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false },
        execute: function () { var a = whatsappLink(); if (!a) return result("No WhatsApp link found on this page."); try { location.href = absUrl(a.getAttribute("href")); } catch (e) {} return result("Opening WhatsApp chat. Type and send your message yourself."); }
      };
    }
    function hConsult(name) {
      return {
        name: name, _source: "contact form or contact link", _safety: "human_confirmation",
        description: "Begin a consultation request: focuses the enquiry form on this page if present, otherwise opens the contact page. Never submits the form for you.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false },
        execute: function () {
          var f = contactForm();
          if (f) { var first = sel('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select', f); try { if (first) first.focus(); } catch (e) {} return result("Focused the enquiry form. Fill it in and submit manually — nothing is sent for you."); }
          var a = firstContactLink(); if (a) { try { location.href = absUrl(a.getAttribute("href")); } catch (e) {} return result("Opening the contact page to request a consultation."); }
          return result("No enquiry form or contact link found on this page.");
        }
      };
    }
    function hBookStudio(name) {
      return {
        name: name, title: "Book a studio visit", _source: "book studio visit CTA", _safety: "navigation",
        description: clip("Bring the visible \"Book studio visit\" call-to-action into view and focus it so the user can begin a studio-visit enquiry. This only surfaces the on-page action; it does not book, schedule, submit, or confirm anything.", 300),
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute: function () { var el = bookStudioCta(); if (!el) return result("No \"Book studio visit\" action is visible on this page."); bringIntoView(el); return result("Opened the \"Book studio visit\" action. Complete the enquiry on the page; nothing has been booked or submitted."); }
      };
    }
    function hSwitchLanguage(name) {
      return {
        name: name, title: "Switch language", _source: "language toggle", _safety: "navigation",
        description: clip("Activate the visible English / Gujarati language switch on this page. Only toggles the on-page language control; sends nothing to a server.", 300),
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute: function () { var el = langToggle(); if (!el) return result("No language switch is visible on this page."); bringIntoView(el); try { el.click(); } catch (e) {} return result("Activated the visible language switch."); }
      };
    }
    function hDirections(name) {
      return {
        name: name, title: "Get directions", _source: "map/directions link", _safety: "read_only",
        description: clip("Return the visible map/directions link for the studio so the user can open it. Read-only; does not navigate on its own.", 300),
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        execute: function () { var el = directionsLink(); if (!el) return result("No directions link is visible on this page."); return result("Directions link: " + (el.href || el.getAttribute("href") || "")); }
      };
    }

    /* ---------- homepage tool sets, keyed by canonical host ---------- */
    var HOME_TOOLSETS = {
      "pdftoolsbase.com": function () { return [hSearch("search_pdf_tools", "PDF tool"), hList("list_pdf_tool_categories", "PDF tools"), hOpen("open_pdf_tool", "PDF tool")]; },
      "imgtoolsbase.com": function () { return [hSearch("search_image_tools", "image tool"), hList("list_image_tool_categories", "image tools"), hOpen("open_image_tool", "image tool")]; },
      "calctoolsbase.com": function () { return [hSearch("search_calculators", "calculator"), hList("list_calculator_categories", "calculators"), hOpen("open_calculator", "calculator")]; },
      "texttoolsbase.com": function () { return [hSearch("search_text_tools", "text tool"), hList("list_text_tool_categories", "text tools"), hOpen("open_text_tool", "text tool")]; },
      "webdevtoolsbase.com": function () { return [hSearch("search_webdev_tools", "web-dev tool"), hList("list_webdev_tool_categories", "web-dev tools"), hOpen("open_webdev_tool", "web-dev tool")]; },
      "apklint.com": function () { return [hSearch("search_apklint_tools", "APKLint tool"), hList("list_apklint_tools", "APKLint tools"), hOpen("open_apklint_tool", "APKLint tool")]; },
      "h5browsergames.com": function () { return [toolListCategories(), toolOpenGame(), toolStartGameTop()]; },
      "takenick.com": function () { return [hListServices("list_services"), hNavSections("navigate_site_sections"), hContact("contact_business"), hExploreApps("explore_apps_services")]; },
      "nestedsolution.com": function () { return [hListServices("list_services"), hNavSections("navigate_site_sections"), hContact("contact_business")]; },
      "nestedgames.com": function () { return [hListServices("list_services"), hNavSections("navigate_site_sections"), hContact("contact_business")]; },
      "www.aavranliving.com": function () { return [hListServices("list_services"), hNavSections("navigate_site_sections"), hContact("contact_business"), hGallery("open_gallery"), hWhatsapp("contact_whatsapp"), hConsult("request_consultation")]; }
    };

    /* ---------- SINGLE SOURCE OF TRUTH: the plan for the rendered DOM ---------- */
    function buildWebMcpToolPlan() {
      if (sel('meta[name="webmcp"][content="off"]')) return [];
      var plan;
      if (isHomepage() && HOME_TOOLSETS[host()]) {
        plan = [toolPageContext()].concat(HOME_TOOLSETS[host()]());
      } else {
        var pt = pageType();
        plan = [toolPageContext()];
        if (pt === "directtool") {
          plan.push(toolDirect());
          if (resultEl()) plan.push(toolVisibleResult());
          plan.push(toolFocusPrimary());
        } else if (pt === "filetool") {
          plan.push(toolFileFocus());
          plan.push(toolFileStatus());
        } else if (pt === "contact") {
          plan.push(toolContactFocus());
          plan.push(toolListSections());
        } else if (pt === "games") {
          if (gameSearchInput()) plan.push(toolSearchGames());
          if (categoryLinks().length) plan.push(toolListCategories());
          if (gameLinks().length || categoryLinks().length) plan.push(toolOpenGame());
          plan.push(toolListSections());
        } else if (pt === "home" || pt === "content") {
          if (siteType() === "business" || pt === "home") { plan.push(toolListSections()); plan.push(toolOpenSection()); }
          else { plan.push(toolListSections()); }
        }
      }
      // Aavran Living: surface site-wide visible CTAs on every page where they exist (honest; guarded by presence).
      if (/aavranliving/i.test(host())) {
        if (bookStudioCta()) plan.push(hBookStudio("book_studio_visit"));
        if (langToggle()) plan.push(hSwitchLanguage("switch_language"));
        if (directionsLink()) plan.push(hDirections("get_directions"));
      }
      var seen = {}, dedup = [];
      for (var i = 0; i < plan.length; i++) { if (!seen[plan[i].name]) { seen[plan[i].name] = 1; dedup.push(finalizeTool(plan[i])); } }
      return dedup;
    }

    /* ---------- register (async: await each registration; track success/errors) ---------- */
    // Discover native model-context objects present in THIS browser.
    // Primary: document.modelContext (current official API).
    // Compatibility: navigator.modelContext ONLY when it natively exists, has
    // registerTool, and is a distinct object (some checkers/builds expose this).
    // No polyfilling and no fabricated globals are ever created.
    function nativeContexts() {
      var out = [], d = null, n = null;
      try { d = document.modelContext; } catch (e) {}
      try { n = navigator.modelContext; } catch (e) {}
      if (d && typeof d.registerTool === "function") out.push({ name: "document.modelContext", ctx: d });
      if (n && typeof n.registerTool === "function" && n !== d) out.push({ name: "navigator.modelContext", ctx: n });
      return out;
    }

    function run() {
      var plan = buildWebMcpToolPlan();
      var ctxList = nativeContexts();
      var ctxAudits = ctxList.map(function (c) { return { name: c.name, available: true, attempted: [], registered: [], errors: [] }; });
      var audit = {
        specVersion: "webmcp-draft-2026-06",
        engineVersion: VERSION,
        toolShape: "execute+handler",
        annotationVocab: "readOnlyHint/untrustedContentHint + readOnly/destructive",
        version: VERSION,
        registryVersion: VERSION,
        available: ctxList.length > 0,
        contexts: ctxAudits,
        pageType: effectiveType(),
        route: location.pathname,
        host: host(),
        origin: origin(),
        canonical: canonical(),
        actionableSurfaces: detectSurfaces(),
        declarativeHints: selAll("[toolname]").map(function (f) { return f.getAttribute("toolname"); }),
        attempted: [],
        registered: [],
        errors: [],
        readyResolved: false,
        plan: plan.map(function (t) { return { name: t.name, title: t.title, source: t._source, safety: t._safety }; })
      };
      window.__webmcpAudit = audit;
      window.__webmcpToolsDebug = { registered: [], page: location.pathname };

      // __webmcpReady resolves only after EVERY registration attempt (all contexts) finishes,
      // so external checkers can await tool availability. Never rejects unhandled.
      window.__webmcpReady = (async function () {
        try {
          if (ctxList.length && plan.length) {
            var regSeen = {};
            for (var c = 0; c < ctxList.length; c++) {
              var mc = ctxList[c].ctx, ca = ctxAudits[c], seen = {};
              for (var i = 0; i < plan.length; i++) {
                var t = plan[i];
                if (seen[t.name]) continue;      // no duplicate names within one context
                seen[t.name] = 1;
                ca.attempted.push(t.name);
                if (!regSeen[t.name]) { regSeen[t.name] = 1; audit.attempted.push(t.name); }
                try {
                  await mc.registerTool({
                    name: t.name,
                    title: t.title,
                    description: t.description,
                    inputSchema: t.inputSchema,
                    execute: t.execute,   // W3C spec surface (document.modelContext)
                    handler: t.execute,   // MCP-B polyfill / Chrome 146 early-preview surface (navigator.modelContext)
                    annotations: t.annotations
                  });
                  ca.registered.push(t.name);
                  if (audit.registered.indexOf(t.name) === -1) audit.registered.push(t.name);
                  if (window.__webmcpToolsDebug.registered.indexOf(t.name) === -1) window.__webmcpToolsDebug.registered.push(t.name);
                } catch (err) {
                  var msg = String((err && err.message) || err);   // duplicate name -> recorded, not thrown
                  var nm = (err && err.name) || "Error";           // SecurityError/NotAllowedError/InvalidStateError/TypeError
                  ca.errors.push({ tool: t.name, name: nm, error: msg });
                  audit.errors.push({ tool: t.name, name: nm, error: msg, context: ctxList[c].name });
                }
              }
            }
          }
        } catch (e) {
          try { audit.errors.push({ tool: "__init__", error: String((e && e.message) || e) }); } catch (e2) {}
        }
        audit.readyResolved = true;
        return audit;
      })();
      if (window.__webmcpReady && typeof window.__webmcpReady.catch === "function") window.__webmcpReady.catch(function () {});
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () { try { run(); } catch (e) {} }, { once: true });
    } else {
      run();
    }
  } catch (e) {
    try { window.__webmcpAudit = { version: VERSION, registryVersion: VERSION, available: false, pageType: null, route: location.pathname, attempted: [], registered: [], errors: [{ tool: "__top__", error: String((e && e.message) || e) }] }; } catch (e2) {}
  }
})();
