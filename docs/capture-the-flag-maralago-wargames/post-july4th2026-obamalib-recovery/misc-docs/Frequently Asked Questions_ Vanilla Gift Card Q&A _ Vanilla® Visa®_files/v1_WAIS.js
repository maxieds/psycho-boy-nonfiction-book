/* AdZen legacy wrapper. Generated; do not edit dist copies. */
(function () {
  window.adzen = window.adzen || function () {
    (window.adzen.q = window.adzen.q || []).push(arguments);
  };
  window.adzen.q = window.adzen.q || [];
  window.adzen('config', {"adv_id":"8","autotrack":{"ecommerce":true,"engagement":true,"default_currency":"USD","engagement_consent_groups":["C0002","C0004"],"micro_events":[{"action":"select_amount","on":"change","selector":"select[name=giftcard_amount]","value_from":"value"},{"action":"add_recipient","on":"change","selector":"input[name=giftcard_recipient_email]"}]}});
  var hasUrlTid = /[?&]az_tid=[^&]+/.test(location.search);
  var hasCookieTid = /(?:^|;\s*)az_tid=[^;]+/.test(document.cookie);
  if (hasUrlTid || hasCookieTid) {
    window.adzen('conversion', "page_view");
  }
})();
/* === inlined conversion.js (IIFE) === */
"use strict";
var AdzenBundle = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    installAdzenGlobal: () => installAdzenGlobal
  });

  // src/url.ts
  var URL_TID_PARAM = "az_tid";
  function toAbsoluteUrl(rawUrl) {
    try {
      return new URL(rawUrl);
    } catch (e) {
      return null;
    }
  }
  function nonEmptyTrimmedString(value) {
    if (!value) {
      return null;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  }
  function sanitizeTrackingValue(value) {
    if (typeof value !== "string") {
      return null;
    }
    const trimmed = value.trim();
    if (trimmed.length === 0 || /[{}]/.test(trimmed) || /%7[bd]/i.test(trimmed)) {
      return null;
    }
    const lower = trimmed.toLowerCase();
    if (lower === "undefined" || lower === "null" || lower === "none") {
      return null;
    }
    return trimmed;
  }
  function extractTidFromUrl(rawUrl) {
    const parsed = toAbsoluteUrl(rawUrl);
    if (!parsed) {
      return null;
    }
    return sanitizeTrackingValue(nonEmptyTrimmedString(parsed.searchParams.get(URL_TID_PARAM)));
  }
  function stripTidFromUrl(rawUrl) {
    const parsed = toAbsoluteUrl(rawUrl);
    if (!parsed) {
      return rawUrl;
    }
    parsed.searchParams.delete(URL_TID_PARAM);
    return parsed.toString();
  }
  function stripTidFromAddressBar(win = typeof window !== "undefined" ? window : void 0) {
    var _a;
    if (!(win == null ? void 0 : win.location) || !((_a = win.history) == null ? void 0 : _a.replaceState)) {
      return;
    }
    const currentUrl = win.location.href;
    const sanitizedUrl = stripTidFromUrl(currentUrl);
    if (sanitizedUrl === currentUrl) {
      return;
    }
    try {
      win.history.replaceState(win.history.state, "", sanitizedUrl);
    } catch (e) {
    }
  }

  // src/autotrack.ts
  var TX_STORAGE_KEY = "az_conv_tx";
  var TX_STORAGE_CAP = 20;
  var DATALAYER_POLL_MS = 1500;
  var ENGAGED_SECONDS = 15;
  function asTrimmedString(value) {
    if (typeof value !== "string") {
      return null;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  }
  function toFiniteNumber(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string") {
      const parsed = Number(value.trim());
      if (value.trim().length > 0 && Number.isFinite(parsed)) {
        return parsed;
      }
    }
    return null;
  }
  function normalizeCurrencyCode(value) {
    const candidate = asTrimmedString(value);
    if (!candidate) {
      return null;
    }
    const upper = candidate.toUpperCase();
    return /^[A-Z]{3}$/.test(upper) ? upper : null;
  }
  function normalizeMicroEvent(value) {
    if (typeof value !== "object" || value === null) {
      return null;
    }
    const raw = value;
    const action = asTrimmedString(raw.action);
    const selector = asTrimmedString(raw.selector);
    const on = asTrimmedString(raw.on);
    if (!action || !selector || !on) {
      return null;
    }
    if (on !== "change" && on !== "click" && on !== "submit") {
      return null;
    }
    return {
      action,
      selector,
      on,
      value_from: raw.value_from === "value" ? "value" : void 0,
      once: raw.once === false ? false : true
    };
  }
  function asStringArray(value) {
    if (!Array.isArray(value)) {
      return [];
    }
    return value.map(asTrimmedString).filter((entry) => entry !== null);
  }
  function normalizeDataLayerEventRule(value) {
    if (typeof value !== "object" || value === null) {
      return null;
    }
    const raw = value;
    const event = asTrimmedString(raw.event);
    const action = asTrimmedString(raw.action);
    if (!event || !action) {
      return null;
    }
    return {
      event,
      action,
      transaction_id_from: asStringArray(raw.transaction_id_from),
      value_from: asStringArray(raw.value_from),
      currency_from: asStringArray(raw.currency_from),
      metadata_from: asStringArray(raw.metadata_from)
    };
  }
  function normalizeAutotrackConfig(value) {
    var _a;
    if (typeof value !== "object" || value === null) {
      return null;
    }
    const raw = value;
    const microEvents = Array.isArray(raw.micro_events) ? raw.micro_events.map(normalizeMicroEvent).filter((entry) => entry !== null) : [];
    const dataLayerEvents = Array.isArray(raw.data_layer_events) ? raw.data_layer_events.map(normalizeDataLayerEventRule).filter((entry) => entry !== null) : [];
    const consentGroups = Array.isArray(raw.engagement_consent_groups) ? raw.engagement_consent_groups.map(asTrimmedString).filter((entry) => entry !== null) : [];
    const normalized = {
      ecommerce: raw.ecommerce === true,
      engagement: raw.engagement === true,
      micro_events: microEvents,
      data_layer_events: dataLayerEvents,
      default_currency: (_a = normalizeCurrencyCode(raw.default_currency)) != null ? _a : void 0,
      engagement_consent_groups: consentGroups
    };
    if (!normalized.ecommerce && !normalized.engagement && microEvents.length === 0 && dataLayerEvents.length === 0) {
      return null;
    }
    return normalized;
  }
  function engagementConsentGranted(config) {
    var _a;
    const groups = (_a = config.engagement_consent_groups) != null ? _a : [];
    if (groups.length === 0) {
      return true;
    }
    const active = typeof window !== "undefined" ? window.OnetrustActiveGroups : void 0;
    if (typeof active !== "string") {
      return true;
    }
    return groups.some((group) => active.indexOf(group) > -1);
  }
  function readSentTransactionIds() {
    try {
      const raw = window.localStorage.getItem(TX_STORAGE_KEY);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter((entry) => typeof entry === "string") : [];
    } catch (e) {
      return [];
    }
  }
  function rememberTransactionId(transactionId) {
    try {
      const known = readSentTransactionIds().filter((entry) => entry !== transactionId);
      known.push(transactionId);
      while (known.length > TX_STORAGE_CAP) {
        known.shift();
      }
      window.localStorage.setItem(TX_STORAGE_KEY, JSON.stringify(known));
    } catch (e) {
    }
  }
  function productsValue(products) {
    var _a;
    if (!Array.isArray(products) || products.length === 0) {
      return null;
    }
    let total = 0;
    let sawPrice = false;
    for (const product of products) {
      if (typeof product !== "object" || product === null) {
        continue;
      }
      const raw = product;
      const price = toFiniteNumber(raw.price);
      if (price === null) {
        continue;
      }
      sawPrice = true;
      const quantity = (_a = toFiniteNumber(raw.quantity)) != null ? _a : 1;
      total += price * quantity;
    }
    return sawPrice && Number.isFinite(total) ? total : null;
  }
  function productsSignature(products) {
    if (!Array.isArray(products)) {
      return "none";
    }
    return products.map((product) => {
      var _a, _b, _c, _d, _e;
      if (typeof product !== "object" || product === null) {
        return "?";
      }
      const raw = product;
      return [(_c = (_b = (_a = raw.id) != null ? _a : raw.item_id) != null ? _b : raw.name) != null ? _c : "?", (_d = raw.price) != null ? _d : "?", (_e = raw.quantity) != null ? _e : 1].join("@");
    }).join("|");
  }
  function extractFromUaEcommerce(ecommerce) {
    var _a, _b, _c;
    const events = [];
    const currencyCandidate = ecommerce.currencyCode;
    const add = ecommerce.add;
    if (typeof add === "object" && add !== null) {
      const products = add.products;
      events.push({
        action: "add_to_cart",
        value: (_a = productsValue(products)) != null ? _a : void 0,
        currencyCandidate,
        dedupeKey: `add_to_cart:${productsSignature(products)}`
      });
    }
    const checkout = ecommerce.checkout;
    if (typeof checkout === "object" && checkout !== null) {
      events.push({
        action: "begin_checkout",
        currencyCandidate,
        dedupeKey: "begin_checkout"
      });
    }
    const purchase = ecommerce.purchase;
    if (typeof purchase === "object" && purchase !== null) {
      const purchaseRecord = purchase;
      const actionField = purchaseRecord.actionField;
      const actionRecord = typeof actionField === "object" && actionField !== null ? actionField : {};
      const transactionId = (_b = asTrimmedString(actionRecord.id)) != null ? _b : void 0;
      const revenue = toFiniteNumber(actionRecord.revenue);
      events.push({
        action: "purchase",
        value: (_c = revenue != null ? revenue : productsValue(purchaseRecord.products)) != null ? _c : void 0,
        currencyCandidate,
        transactionId,
        dedupeKey: `purchase:${transactionId != null ? transactionId : productsSignature(purchaseRecord.products)}`
      });
    }
    return events;
  }
  function extractFromGa4(eventName, params) {
    var _a, _b, _c, _d, _e;
    const items = params.items;
    const currencyCandidate = params.currency;
    if (eventName === "add_to_cart") {
      const value = (_b = (_a = toFiniteNumber(params.value)) != null ? _a : productsValue(items)) != null ? _b : void 0;
      return [
        {
          action: "add_to_cart",
          value,
          currencyCandidate,
          dedupeKey: `add_to_cart:${productsSignature(items)}`
        }
      ];
    }
    if (eventName === "begin_checkout") {
      return [{ action: "begin_checkout", currencyCandidate, dedupeKey: "begin_checkout" }];
    }
    if (eventName === "purchase") {
      const transactionId = (_c = asTrimmedString(params.transaction_id)) != null ? _c : void 0;
      const value = (_e = (_d = toFiniteNumber(params.value)) != null ? _d : productsValue(items)) != null ? _e : void 0;
      return [
        {
          action: "purchase",
          value,
          currencyCandidate,
          transactionId,
          dedupeKey: `purchase:${transactionId != null ? transactionId : productsSignature(items)}`
        }
      ];
    }
    return [];
  }
  function extractEcommerceEvents(entry) {
    var _a, _b;
    if (typeof entry !== "object" || entry === null) {
      return [];
    }
    const maybeTuple = entry;
    if (typeof maybeTuple.length === "number" && maybeTuple.length >= 2 && maybeTuple[0] === "event" && typeof maybeTuple[1] === "string") {
      const params = maybeTuple.length > 2 ? maybeTuple[2] : void 0;
      return extractFromGa4(
        maybeTuple[1],
        typeof params === "object" && params !== null ? params : {}
      );
    }
    const record = entry;
    const ecommerce = record.ecommerce;
    if (typeof ecommerce !== "object" || ecommerce === null) {
      return [];
    }
    const ecommerceRecord = ecommerce;
    const uaEvents = extractFromUaEcommerce(ecommerceRecord);
    if (uaEvents.length > 0) {
      return uaEvents;
    }
    const eventName = (_b = (_a = asTrimmedString(record.event)) == null ? void 0 : _a.toLowerCase()) != null ? _b : "";
    return extractFromGa4(eventName, ecommerceRecord);
  }
  function installEcommerceHook(deps, firedKeys) {
    const processed = typeof WeakSet === "function" ? /* @__PURE__ */ new WeakSet() : null;
    const processEntry = (entry) => {
      try {
        if (typeof entry === "object" && entry !== null && processed) {
          if (processed.has(entry)) {
            return;
          }
          processed.add(entry);
        }
        const config = deps.getAutotrack();
        if (!(config == null ? void 0 : config.ecommerce)) {
          return;
        }
        for (const extracted of extractEcommerceEvents(entry)) {
          dispatchEcommerceEvent(deps, config, extracted, firedKeys);
        }
      } catch (e) {
      }
    };
    const win = window;
    const initial = Array.isArray(win.dataLayer) ? win.dataLayer : win.dataLayer = [];
    for (const entry of [...initial]) {
      processEntry(entry);
    }
    try {
      const dataLayerArray = initial;
      const originalPush = dataLayerArray.push.bind(dataLayerArray);
      dataLayerArray.push = (...entries) => {
        const result = originalPush(...entries);
        for (const entry of entries) {
          processEntry(entry);
        }
        return result;
      };
    } catch (e) {
    }
    let scanIndex = Array.isArray(win.dataLayer) ? win.dataLayer.length : 0;
    setInterval(() => {
      try {
        const current = win.dataLayer;
        if (!Array.isArray(current)) {
          return;
        }
        if (scanIndex > current.length) {
          scanIndex = 0;
        }
        while (scanIndex < current.length) {
          processEntry(current[scanIndex]);
          scanIndex += 1;
        }
      } catch (e) {
      }
    }, DATALAYER_POLL_MS);
  }
  function dispatchEcommerceEvent(deps, config, extracted, firedKeys) {
    var _a, _b;
    if (!deps.isAttributed()) {
      return;
    }
    if (firedKeys.has(extracted.dedupeKey)) {
      return;
    }
    if (extracted.action === "purchase" && extracted.transactionId) {
      if (readSentTransactionIds().indexOf(extracted.transactionId) > -1) {
        firedKeys.add(extracted.dedupeKey);
        return;
      }
    }
    const options = {};
    if (extracted.value !== void 0 && extracted.value > 0) {
      options.value = extracted.value;
    }
    const currency = (_b = (_a = normalizeCurrencyCode(extracted.currencyCandidate)) != null ? _a : config.default_currency) != null ? _b : null;
    if (currency && options.value !== void 0) {
      options.currency = currency;
    }
    if (extracted.transactionId) {
      options.transaction_id = extracted.transactionId;
    }
    firedKeys.add(extracted.dedupeKey);
    if (extracted.action === "purchase" && extracted.transactionId) {
      rememberTransactionId(extracted.transactionId);
    }
    deps.fire(extracted.action, options);
  }
  function readDataLayerValueByKeys(entry, keys) {
    for (const key of keys) {
      if (entry[key] !== void 0 && entry[key] !== null) {
        return entry[key];
      }
    }
    const dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
    for (let i = dataLayer.length - 1; i >= 0; i -= 1) {
      const candidate = dataLayer[i];
      if (typeof candidate !== "object" || candidate === null || Array.isArray(candidate)) {
        continue;
      }
      const record = candidate;
      for (const key of keys) {
        if (record[key] !== void 0 && record[key] !== null) {
          return record[key];
        }
      }
    }
    return void 0;
  }
  function dispatchDataLayerEvent(deps, config, rule, entry, firedKeys) {
    var _a, _b, _c, _d, _e, _f;
    if (!deps.isAttributed()) {
      return;
    }
    const transactionId = ((_a = rule.transaction_id_from) == null ? void 0 : _a.length) ? sanitizeTrackingValue(
      asTrimmedString(readDataLayerValueByKeys(entry, rule.transaction_id_from))
    ) : null;
    const dedupeKey = `datalayer:${rule.event.toLowerCase()}:${transactionId != null ? transactionId : "once"}`;
    if (firedKeys.has(dedupeKey)) {
      return;
    }
    if (transactionId && readSentTransactionIds().indexOf(transactionId) > -1) {
      firedKeys.add(dedupeKey);
      return;
    }
    const options = {};
    const value = ((_b = rule.value_from) == null ? void 0 : _b.length) ? toFiniteNumber(readDataLayerValueByKeys(entry, rule.value_from)) : null;
    if (value !== null && value > 0) {
      options.value = value;
      const currency = (_e = (_d = ((_c = rule.currency_from) == null ? void 0 : _c.length) ? normalizeCurrencyCode(readDataLayerValueByKeys(entry, rule.currency_from)) : null) != null ? _d : config.default_currency) != null ? _e : null;
      if (currency) {
        options.currency = currency;
      }
    }
    if (transactionId) {
      options.transaction_id = transactionId;
    }
    if ((_f = rule.metadata_from) == null ? void 0 : _f.length) {
      const metadata = {};
      for (const key of rule.metadata_from) {
        const value2 = sanitizeTrackingValue(
          asTrimmedString(readDataLayerValueByKeys(entry, [key]))
        );
        if (value2) {
          metadata[key] = value2;
        }
      }
      if (Object.keys(metadata).length > 0) {
        options.metadata = metadata;
      }
    }
    firedKeys.add(dedupeKey);
    if (transactionId) {
      rememberTransactionId(transactionId);
    }
    deps.fire(rule.action, options);
  }
  function installDataLayerEvents(deps, firedKeys) {
    const processed = typeof WeakSet === "function" ? /* @__PURE__ */ new WeakSet() : null;
    const processEntry = (entry) => {
      var _a, _b;
      try {
        if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
          return;
        }
        if (processed) {
          if (processed.has(entry)) {
            return;
          }
          processed.add(entry);
        }
        const config = deps.getAutotrack();
        const rules = (_a = config == null ? void 0 : config.data_layer_events) != null ? _a : [];
        if (rules.length === 0) {
          return;
        }
        const record = entry;
        const eventName = (_b = asTrimmedString(record.event)) == null ? void 0 : _b.toLowerCase();
        if (!eventName) {
          return;
        }
        for (const rule of rules) {
          if (rule.event.trim().toLowerCase() === eventName) {
            dispatchDataLayerEvent(deps, config, rule, record, firedKeys);
          }
        }
      } catch (e) {
      }
    };
    const win = window;
    const initial = Array.isArray(win.dataLayer) ? win.dataLayer : win.dataLayer = [];
    for (const entry of [...initial]) {
      processEntry(entry);
    }
    try {
      const dataLayerArray = initial;
      const originalPush = dataLayerArray.push.bind(dataLayerArray);
      dataLayerArray.push = (...entries) => {
        const result = originalPush(...entries);
        for (const entry of entries) {
          processEntry(entry);
        }
        return result;
      };
    } catch (e) {
    }
    let scanIndex = Array.isArray(win.dataLayer) ? win.dataLayer.length : 0;
    setInterval(() => {
      try {
        const current = win.dataLayer;
        if (!Array.isArray(current)) {
          return;
        }
        if (scanIndex > current.length) {
          scanIndex = 0;
        }
        while (scanIndex < current.length) {
          processEntry(current[scanIndex]);
          scanIndex += 1;
        }
      } catch (e) {
      }
    }, DATALAYER_POLL_MS);
  }
  function installEngagement(deps, firedKeys) {
    const fireOnce = (action) => {
      const config = deps.getAutotrack();
      if (!(config == null ? void 0 : config.engagement)) {
        return;
      }
      if (!deps.isAttributed() || !engagementConsentGranted(config)) {
        return;
      }
      const key = `engagement:${action}`;
      if (firedKeys.has(key)) {
        return;
      }
      firedKeys.add(key);
      deps.fire(action);
    };
    const marks = [
      { threshold: 50, action: "scroll_50" },
      { threshold: 90, action: "scroll_90" }
    ];
    const onScroll = () => {
      var _a, _b, _c, _d, _e;
      try {
        const doc = document.documentElement;
        const scrollHeight = Math.max((_a = doc == null ? void 0 : doc.scrollHeight) != null ? _a : 0, (_c = (_b = document.body) == null ? void 0 : _b.scrollHeight) != null ? _c : 0, 1);
        const seen = (((_d = window.scrollY) != null ? _d : 0) + ((_e = window.innerHeight) != null ? _e : 0)) / scrollHeight;
        const percent = seen * 100;
        for (const mark of marks) {
          if (percent >= mark.threshold) {
            fireOnce(mark.action);
          }
        }
      } catch (e) {
      }
    };
    try {
      window.addEventListener("scroll", onScroll, { passive: true });
    } catch (e) {
      window.addEventListener("scroll", onScroll);
    }
    let visibleSeconds = 0;
    const timer = setInterval(() => {
      try {
        if (typeof document !== "undefined" && document.visibilityState === "hidden") {
          return;
        }
        visibleSeconds += 1;
        if (visibleSeconds >= ENGAGED_SECONDS) {
          clearInterval(timer);
          fireOnce(`engaged_${ENGAGED_SECONDS}s`);
        }
      } catch (e) {
        clearInterval(timer);
      }
    }, 1e3);
  }
  function installMicroEvents(deps, firedKeys) {
    var _a;
    const listenerTypes = /* @__PURE__ */ new Set();
    const initialConfig = deps.getAutotrack();
    for (const micro of (_a = initialConfig == null ? void 0 : initialConfig.micro_events) != null ? _a : []) {
      listenerTypes.add(micro.on);
    }
    if (listenerTypes.size === 0) {
      return;
    }
    const handle = (eventType, target) => {
      var _a2;
      try {
        const config = deps.getAutotrack();
        const microEvents = (_a2 = config == null ? void 0 : config.micro_events) != null ? _a2 : [];
        if (microEvents.length === 0) {
          return;
        }
        if (!deps.isAttributed() || !config || !engagementConsentGranted(config)) {
          return;
        }
        const element = target;
        if (!element || typeof element.closest !== "function") {
          return;
        }
        for (const micro of microEvents) {
          if (micro.on !== eventType) {
            continue;
          }
          let matched = null;
          try {
            matched = element.closest(micro.selector);
          } catch (e) {
            continue;
          }
          if (!matched) {
            continue;
          }
          const key = `micro:${micro.action}:${micro.selector}`;
          if (micro.once !== false && firedKeys.has(key)) {
            continue;
          }
          firedKeys.add(key);
          const options = {};
          if (micro.value_from === "value") {
            const value = toFiniteNumber(matched.value);
            if (value !== null && value > 0) {
              options.value = value;
              const currency = config.default_currency;
              if (currency) {
                options.currency = currency;
              }
            }
          }
          deps.fire(micro.action, options);
        }
      } catch (e) {
      }
    };
    for (const type of listenerTypes) {
      document.addEventListener(type, (event) => handle(type, event.target), true);
    }
  }
  function ensureAutotrack(deps) {
    var _a, _b, _c, _d, _e;
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const config = deps.getAutotrack();
    if (!config) {
      return;
    }
    const state = window.__azAutotrackState = (_a = window.__azAutotrackState) != null ? _a : {
      ecommerce: false,
      engagement: false,
      micro: false,
      dataLayerEvents: false
    };
    const firedKeys = getSharedFiredKeys();
    if (config.ecommerce && !state.ecommerce) {
      state.ecommerce = true;
      installEcommerceHook(deps, firedKeys);
    }
    if (config.engagement && !state.engagement) {
      state.engagement = true;
      installEngagement(deps, firedKeys);
    }
    if (((_c = (_b = config.micro_events) == null ? void 0 : _b.length) != null ? _c : 0) > 0 && !state.micro) {
      state.micro = true;
      installMicroEvents(deps, firedKeys);
    }
    if (((_e = (_d = config.data_layer_events) == null ? void 0 : _d.length) != null ? _e : 0) > 0 && !state.dataLayerEvents) {
      state.dataLayerEvents = true;
      installDataLayerEvents(deps, firedKeys);
    }
  }
  var FIRED_KEYS_GLOBAL = "__azAutotrackFired";
  function getSharedFiredKeys() {
    const holder = window;
    const existing = holder[FIRED_KEYS_GLOBAL];
    if (existing instanceof Set) {
      return existing;
    }
    const created = /* @__PURE__ */ new Set();
    holder[FIRED_KEYS_GLOBAL] = created;
    return created;
  }

  // src/config.ts
  var DEFAULT_ENDPOINT = "https://api.adzen.ai/dea/conversion";
  var DEV_ENDPOINT = "https://dev.adzen.ai/dea/conversion";
  var STG_ENDPOINT = "https://stg.adzen.ai/dea/conversion";
  var CONVERSION_PATH = "/dea/conversion";
  var DEFAULT_COOKIE_NAME = "az_tid";
  var DEFAULT_COOKIE_DAYS = 30;
  var DEFAULT_REQUIRE_ATTRIBUTION = true;
  function asTrimmedString2(value) {
    if (typeof value !== "string") {
      return null;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  }
  function asBooleanish(value) {
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();
      if (normalized === "true" || normalized === "1" || normalized === "on") {
        return true;
      }
      if (normalized === "false" || normalized === "0" || normalized === "off") {
        return false;
      }
    }
    return null;
  }
  function asPositiveInt(value) {
    if (typeof value === "number" && Number.isFinite(value) && value > 0) {
      return Math.floor(value);
    }
    if (typeof value === "string") {
      const parsed = Number.parseInt(value, 10);
      if (Number.isFinite(parsed) && parsed > 0) {
        return parsed;
      }
    }
    return null;
  }
  function resolveScriptElement(doc = typeof document !== "undefined" ? document : void 0) {
    if (!doc) {
      return null;
    }
    if (doc.currentScript instanceof HTMLScriptElement) {
      return doc.currentScript;
    }
    const byAdvId = doc.querySelector("script[data-adv-id]");
    if (byAdvId instanceof HTMLScriptElement) {
      return byAdvId;
    }
    const bySource = doc.querySelector(
      "script[src*='conversion.js'],script[src*='adzen.js'],script[src*='/e/v1.js']"
    );
    if (bySource instanceof HTMLScriptElement) {
      return bySource;
    }
    return null;
  }
  function inferEndpointFromScript(script) {
    if (!(script == null ? void 0 : script.src)) {
      return DEFAULT_ENDPOINT;
    }
    let url;
    try {
      url = new URL(script.src);
    } catch (e) {
      return DEFAULT_ENDPOINT;
    }
    const hostname = url.hostname.toLowerCase();
    if (hostname === "dev.adzen.ai" || hostname === "tag-dev.adzen.ai" || hostname.startsWith("tag-dev.")) {
      return DEV_ENDPOINT;
    }
    if (hostname === "stg.adzen.ai" || hostname === "tag-stg.adzen.ai" || hostname.startsWith("tag-stg.")) {
      return STG_ENDPOINT;
    }
    if (hostname === "adzen.ai" || hostname.endsWith(".adzen.ai")) {
      return DEFAULT_ENDPOINT;
    }
    return `${url.origin}${CONVERSION_PATH}`;
  }
  var HOST_ADV_ID_FALLBACKS = [
    // Angi — request.angi.com and any other *.angi.com surface.
    {
      matches: (host) => host === "angi.com" || host.endsWith(".angi.com"),
      advId: "20"
    }
  ];
  function resolveAdvIdFromHost(host) {
    if (!host) {
      return null;
    }
    const normalized = host.toLowerCase();
    for (const entry of HOST_ADV_ID_FALLBACKS) {
      if (entry.matches(normalized)) {
        return entry.advId;
      }
    }
    return null;
  }
  var HOST_AUTOTRACK_FALLBACKS = [
    // Angi — fires a "SR Submit" dataLayer event on service-request submission and
    // carries the lead id on homeAdvisorSrOid. Map it to a `lead` conversion. (No
    // monetary value/currency: a service-request lead has none, so the event fires
    // on the action + lead id alone.)
    {
      matches: (host) => host === "angi.com" || host.endsWith(".angi.com"),
      autotrack: {
        data_layer_events: [
          {
            event: "SR Submit",
            action: "lead",
            transaction_id_from: ["homeAdvisorSrOid", "srOid"],
            // Forward Angi's funnel ids for reconciliation (kept only when they
            // hold real values, so the contact-step "undefined" SR id is dropped).
            metadata_from: [
              "homeAdvisorSrOid",
              "homeAdvisorTaskId",
              "homeAdvisorSessionId",
              "homeAdvisorUserId",
              "homeAdvisorEntryPointId"
            ]
          }
        ]
      }
    }
  ];
  function resolveAutotrackFromHost(host) {
    if (!host) {
      return null;
    }
    const normalized = host.toLowerCase();
    for (const entry of HOST_AUTOTRACK_FALLBACKS) {
      if (entry.matches(normalized)) {
        return normalizeAutotrackConfig(entry.autotrack);
      }
    }
    return null;
  }
  function parseAutotrackAttribute(script) {
    const raw = asTrimmedString2(script == null ? void 0 : script.getAttribute("data-autotrack"));
    if (!raw) {
      return null;
    }
    try {
      return normalizeAutotrackConfig(JSON.parse(raw));
    } catch (e) {
      return null;
    }
  }
  function readInitialConfig(doc = typeof document !== "undefined" ? document : void 0) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const script = resolveScriptElement(doc);
    const host = (_b = (_a = doc == null ? void 0 : doc.location) == null ? void 0 : _a.hostname) != null ? _b : null;
    return {
      advId: (_c = asTrimmedString2(script == null ? void 0 : script.getAttribute("data-adv-id"))) != null ? _c : resolveAdvIdFromHost(host),
      endpoint: (_d = asTrimmedString2(script == null ? void 0 : script.getAttribute("data-endpoint"))) != null ? _d : inferEndpointFromScript(script),
      cookieDays: (_e = asPositiveInt(script == null ? void 0 : script.getAttribute("data-cookie-days"))) != null ? _e : DEFAULT_COOKIE_DAYS,
      cookieName: (_f = asTrimmedString2(script == null ? void 0 : script.getAttribute("data-tid-cookie"))) != null ? _f : DEFAULT_COOKIE_NAME,
      autotrack: (_g = parseAutotrackAttribute(script)) != null ? _g : resolveAutotrackFromHost(host),
      requireAttribution: (_h = asBooleanish(script == null ? void 0 : script.getAttribute("data-require-attribution"))) != null ? _h : DEFAULT_REQUIRE_ATTRIBUTION
    };
  }
  function mergeConfig(current, update) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const nextAdvId = (_b = asTrimmedString2((_a = update.adv_id) != null ? _a : update.advId)) != null ? _b : current.advId;
    const nextEndpoint = (_c = asTrimmedString2(update.endpoint)) != null ? _c : current.endpoint;
    const nextCookieDays = (_e = asPositiveInt((_d = update.cookie_days) != null ? _d : update.cookieDays)) != null ? _e : current.cookieDays;
    const nextCookieName = (_g = asTrimmedString2((_f = update.cookie_name) != null ? _f : update.cookieName)) != null ? _g : current.cookieName;
    const nextAutotrack = update.autotrack !== void 0 ? normalizeAutotrackConfig(update.autotrack) : current.autotrack;
    const nextRequireAttribution = (_i = asBooleanish((_h = update.require_attribution) != null ? _h : update.requireAttribution)) != null ? _i : current.requireAttribution;
    return {
      advId: nextAdvId,
      endpoint: nextEndpoint,
      cookieDays: nextCookieDays,
      cookieName: nextCookieName,
      autotrack: nextAutotrack,
      requireAttribution: nextRequireAttribution
    };
  }

  // src/cookie.ts
  function getDocument(doc = typeof document !== "undefined" ? document : void 0) {
    return doc != null ? doc : null;
  }
  function parseCookieValue(rawCookie, name) {
    const encodedPrefix = `${encodeURIComponent(name)}=`;
    const items = rawCookie.split(";");
    for (const item of items) {
      const trimmed = item.trim();
      if (!trimmed.startsWith(encodedPrefix)) {
        continue;
      }
      const encodedValue = trimmed.slice(encodedPrefix.length);
      if (!encodedValue) {
        return null;
      }
      try {
        const decoded = decodeURIComponent(encodedValue).trim();
        return decoded.length > 0 ? decoded : null;
      } catch (e) {
        return null;
      }
    }
    return null;
  }
  function readTid(cookieName, doc = typeof document !== "undefined" ? document : void 0) {
    const safeDoc = getDocument(doc);
    if (!safeDoc || !cookieName) {
      return null;
    }
    return parseCookieValue(safeDoc.cookie, cookieName);
  }
  function writeTid(tid, cookieDays, cookieName, doc = typeof document !== "undefined" ? document : void 0) {
    const safeDoc = getDocument(doc);
    const trimmedTid = tid.trim();
    if (!safeDoc || !cookieName || !trimmedTid) {
      return;
    }
    const ttlDays = Number.isFinite(cookieDays) && cookieDays > 0 ? cookieDays : 30;
    const expires = new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1e3).toUTCString();
    safeDoc.cookie = `${encodeURIComponent(cookieName)}=${encodeURIComponent(
      trimmedTid
    )}; expires=${expires}; path=/; SameSite=Lax; Secure`;
  }
  function refreshTidCookie(cookieDays, cookieName, doc = typeof document !== "undefined" ? document : void 0) {
    const value = readTid(cookieName, doc);
    if (!value) {
      return null;
    }
    writeTid(value, cookieDays, cookieName, doc);
    return value;
  }

  // src/conversion.ts
  var CONVERSION_CONTENT_TYPE = "text/plain;charset=UTF-8";
  function asTrimmedString3(value) {
    if (typeof value !== "string") {
      return null;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  }
  function toFiniteNumber2(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string") {
      const parsed = Number(value.trim());
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
    return null;
  }
  function normalizeCurrency(value) {
    const candidate = asTrimmedString3(value);
    if (!candidate) {
      return null;
    }
    const upper = candidate.toUpperCase();
    if (!/^[A-Z]{3}$/.test(upper)) {
      return null;
    }
    return upper;
  }
  function normalizeTransactionId(options) {
    var _a;
    return sanitizeTrackingValue((_a = options.transaction_id) != null ? _a : options.order_id);
  }
  function cleanMetadata(metadata) {
    if (!metadata || typeof metadata !== "object") {
      return void 0;
    }
    const output = {};
    for (const [key, value] of Object.entries(metadata)) {
      const clean = sanitizeTrackingValue(
        typeof value === "string" ? value : value == null ? null : String(value)
      );
      if (clean) {
        output[key] = clean;
      }
    }
    return Object.keys(output).length > 0 ? output : void 0;
  }
  function isValidOptionsShape(value) {
    return typeof value === "object" && value !== null;
  }
  function cleanUndefined(input) {
    const output = __spreadValues({}, input);
    for (const [key, value] of Object.entries(output)) {
      if (value === void 0) {
        delete output[key];
      }
    }
    return output;
  }
  function buildConversionEvent(config, actionInput, optionsInput, readStoredTid) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!config.advId) {
      return null;
    }
    const action = asTrimmedString3(actionInput);
    if (!action) {
      return null;
    }
    const options = isValidOptionsShape(optionsInput) ? optionsInput : {};
    const normalizedValue = options.value === void 0 ? void 0 : toFiniteNumber2(options.value);
    if (options.value !== void 0 && normalizedValue === null) {
      return null;
    }
    const normalizedCurrency = options.currency === void 0 ? void 0 : (_a = normalizeCurrency(options.currency)) != null ? _a : null;
    if (options.currency !== void 0 && normalizedCurrency === null) {
      return null;
    }
    const tid = (_b = sanitizeTrackingValue(options.tid)) != null ? _b : sanitizeTrackingValue(readStoredTid());
    if (tid === null && config.requireAttribution) {
      return null;
    }
    const event = cleanUndefined({
      adv_id: config.advId,
      action,
      tid: tid != null ? tid : void 0,
      value: normalizedValue != null ? normalizedValue : void 0,
      currency: normalizedCurrency != null ? normalizedCurrency : void 0,
      transaction_id: (_c = normalizeTransactionId(options)) != null ? _c : void 0,
      metadata: cleanMetadata(options.metadata),
      referrer: (_e = (_d = asTrimmedString3(options.referrer)) != null ? _d : asTrimmedString3(
        typeof document !== "undefined" ? document.referrer : void 0
      )) != null ? _e : void 0,
      page_url: (_g = (_f = asTrimmedString3(options.page_url)) != null ? _f : asTrimmedString3(
        typeof window !== "undefined" ? window.location.href : void 0
      )) != null ? _g : void 0,
      user_agent: (_h = asTrimmedString3(
        typeof navigator !== "undefined" ? navigator.userAgent : void 0
      )) != null ? _h : void 0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    return event;
  }
  function beaconRequest(endpoint, payload) {
    if (typeof navigator === "undefined" || typeof navigator.sendBeacon !== "function") {
      return false;
    }
    try {
      const body = new Blob([payload], { type: CONVERSION_CONTENT_TYPE });
      return navigator.sendBeacon(endpoint, body);
    } catch (e) {
      return false;
    }
  }
  function fetchRequest(endpoint, payload) {
    if (typeof fetch !== "function") {
      return;
    }
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const timeoutId = controller ? setTimeout(() => controller.abort(), 3e3) : void 0;
    try {
      const responsePromise = fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": CONVERSION_CONTENT_TYPE
        },
        body: payload,
        keepalive: true,
        mode: "cors",
        credentials: "omit",
        signal: controller == null ? void 0 : controller.signal
      });
      if (timeoutId !== void 0) {
        void responsePromise.finally(() => {
          clearTimeout(timeoutId);
        });
      }
    } catch (e) {
      if (timeoutId !== void 0) {
        clearTimeout(timeoutId);
      }
    }
  }
  function sendConversionEvent(endpoint, event) {
    const body = JSON.stringify(event);
    const sentByBeacon = beaconRequest(endpoint, body);
    if (sentByBeacon) {
      return;
    }
    fetchRequest(endpoint, body);
  }
  function dispatchConversionCommand(config, actionInput, optionsInput, readStoredTid) {
    try {
      const event = buildConversionEvent(
        config,
        actionInput,
        optionsInput,
        readStoredTid
      );
      if (!event) {
        return;
      }
      sendConversionEvent(config.endpoint, event);
    } catch (e) {
    }
  }

  // src/index.ts
  function asQueueArguments(entry) {
    try {
      return Array.from(entry);
    } catch (e) {
      return [];
    }
  }
  function asConfigUpdate(value) {
    if (typeof value !== "object" || value === null) {
      return null;
    }
    return value;
  }
  function captureTidFromLocation(state) {
    if (typeof window === "undefined" || typeof location === "undefined") {
      return;
    }
    const tidInUrl = extractTidFromUrl(window.location.href);
    if (tidInUrl) {
      state.capturedTid = tidInUrl;
      writeTid(tidInUrl, state.config.cookieDays, state.config.cookieName);
      stripTidFromAddressBar(window);
      return;
    }
    refreshTidCookie(state.config.cookieDays, state.config.cookieName);
  }
  function resolveStoredTid(state) {
    var _a;
    return (_a = sanitizeTrackingValue(readTid(state.config.cookieName))) != null ? _a : state.capturedTid;
  }
  function handleCommand(state, command, args) {
    if (typeof command !== "string") {
      return;
    }
    const normalizedCommand = command.trim().toLowerCase();
    if (normalizedCommand === "conversion") {
      const [action, options] = args;
      dispatchConversionCommand(
        state.config,
        action,
        options,
        () => resolveStoredTid(state)
      );
      return;
    }
    if (normalizedCommand === "config") {
      const update = asConfigUpdate(args[0]);
      if (!update) {
        return;
      }
      state.config = mergeConfig(state.config, update);
      maybeStartAutotrack(state);
    }
  }
  function maybeStartAutotrack(state) {
    ensureAutotrack({
      getAutotrack: () => state.config.autotrack,
      fire: (action, options) => {
        dispatchConversionCommand(
          state.config,
          action,
          options,
          () => resolveStoredTid(state)
        );
      },
      // Attributed only when a REAL AdZen click id is present — a stale poison
      // cookie (e.g. an unresolved "{SESSION_ID}" macro) does not count.
      isAttributed: () => resolveStoredTid(state) !== null
    });
  }
  function installAdzenGlobal() {
    if (typeof window === "undefined") {
      return;
    }
    const state = {
      config: readInitialConfig(),
      capturedTid: null
    };
    captureTidFromLocation(state);
    const previousAdzen = window.adzen;
    const queuedCalls = Array.isArray(previousAdzen == null ? void 0 : previousAdzen.q) ? [...previousAdzen.q] : [];
    const adzen = ((command, ...args) => {
      try {
        handleCommand(state, command, args);
      } catch (e) {
      }
    });
    adzen.q = [];
    adzen.conversion = (action, options) => {
      adzen("conversion", action, options);
    };
    adzen.config = (options) => {
      adzen("config", options);
    };
    window.adzen = adzen;
    for (const queuedCall of queuedCalls) {
      const args = asQueueArguments(queuedCall);
      if (args.length === 0) {
        continue;
      }
      adzen(...args);
    }
    maybeStartAutotrack(state);
  }
  installAdzenGlobal();
  return __toCommonJS(src_exports);
})();

