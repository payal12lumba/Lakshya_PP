/* Lakshya — linked placement-prep tracker.
   Every resource exists once (by id); ticking it anywhere ticks it everywhere. */
(function () {
  "use strict";
  var D = window.LAKSHYA_DATA;
  var KEY = "lakshya.v2";
  var OA_DATE = "2026-10-30";

  // ---------- indexes ----------
  var itemById = {}, courseById = {}, usage = {}; // usage[id] = [{a, topic, tier}]
  D.items.forEach(function (it) { itemById[it.id] = it; });
  D.courses.forEach(function (c) { courseById[c.id] = c; });
  D.areas.forEach(function (a) {
    a.topics.forEach(function (t) {
      t.items.forEach(function (id) { (usage[id] = usage[id] || []).push({ a: a.n, topic: t.name, tier: t.tier }); });
    });
  });

  // ---------- state ----------
  var state = load();
  function load() {
    var s = { done: {}, open: {}, view: "areas", tier: "All", hideDone: false };
    try {
      var raw = localStorage.getItem(KEY) || localStorage.getItem("lakshya.v1");
      if (raw) { var p = JSON.parse(raw); Object.assign(s, p); s.done = p.done || {}; s.open = p.open || {}; }
    } catch (e) {}
    return s;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  // ---------- helpers ----------
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function isDone(id) { return !!state.done[id]; }
  function today() { var d = new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function hrs(sec) { var h = sec / 3600; return h >= 10 ? Math.round(h) + "h" : (Math.round(h * 10) / 10) + "h"; }
  function query() { return ($("#q").value || "").trim().toLowerCase(); }
  function matches(it, q) {
    if (q && (it.t + " " + courseById[it.c].name).toLowerCase().indexOf(q) < 0) return false;
    return true;
  }
  function tierOk(tier) { return state.tier === "All" || state.tier === tier; }
  function stats(ids) {
    var uniq = {}, n = 0, d = 0;
    ids.forEach(function (id) { if (!uniq[id]) { uniq[id] = 1; n++; if (isDone(id)) d++; } });
    return { n: n, d: d, p: n ? Math.round(d * 100 / n) : 0 };
  }
  function areaIds(a, tier) {
    var out = [];
    a.topics.forEach(function (t) { if (!tier || t.tier === tier) out = out.concat(t.items); });
    return out;
  }

  // ---------- item row ----------
  function itemRow(id, ctx) {
    var it = itemById[id], u = usage[id] || [];
    var chips = [];
    if (ctx !== "course") chips.push('<span class="chip">' + esc(shortCourse(it.c)) + "</span>");
    if (ctx === "course") {
      var areas = []; u.forEach(function (x) { if (areas.indexOf(x.a) < 0) areas.push(x.a); });
      chips.push('<span class="pill ' + it.tier + '">' + it.tier + "</span>");
      chips.push('<span class="chip">Area ' + areas.join(", ") + "</span>");
    }
    if (u.length > 1) chips.push('<span class="chip link" title="' + esc(u.map(function (x) { return "Area " + x.a + " · " + x.topic; }).join("\n")) + '">linked ×' + u.length + "</span>");
    chips.push('<span class="chip">' + esc(it.ty) + "</span>");
    var uid = "cb-" + ctx + "-" + id + "-" + (Math.random() * 1e6 | 0);
    return '<li class="' + (isDone(id) ? "done" : "") + '" data-id="' + id + '">' +
      '<input type="checkbox" id="' + uid + '" data-id="' + id + '"' + (isDone(id) ? " checked" : "") + ">" +
      '<label for="' + uid + '"><span class="t">' + esc(it.t) + '</span><span class="sub">' + chips.join("") + "</span></label>" +
      '<span class="dur">' + esc(it.d || "") + "</span></li>";
  }
  function shortCourse(c) { return courseById[c].name.replace(" — ", " · "); }

  // ---------- header ----------
  function renderHeader() {
    var all = D.items.map(function (i) { return i.id; });
    var s = stats(all);
    var must = D.items.filter(function (i) { return i.tier === "Must"; }).map(function (i) { return i.id; });
    var sm = stats(must);
    var left = 0; D.items.forEach(function (i) { if (!isDone(i.id)) left += i.s; });
    var C = 2 * Math.PI * 19;
    $("#ring").innerHTML = '<circle class="bg" cx="23" cy="23" r="19"/><circle class="fg" cx="23" cy="23" r="19" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - s.d / s.n)) + '"/><text x="23" y="27" text-anchor="middle">' + s.p + "%</text>";
    $("#st-done").textContent = s.d + "/" + s.n;
    $("#st-must").textContent = sm.p + "%";
    $("#st-left").textContent = hrs(left);
    $("#st-streak").textContent = streak() + "d";
    var oa = Math.ceil((Date.parse(OA_DATE + "T23:59:59") - Date.now()) / 864e5);
    $("#st-oa").textContent = oa > 0 ? oa + "d" : "done";
    $("#st-oa-l").textContent = oa > 0 ? "to mock-OA date" : "mock-OA date passed";
    // tab counts
    $("#k-areas").textContent = D.areas.length;
    $("#k-topics").textContent = D.areas.reduce(function (n, a) { return n + a.topics.length; }, 0);
    $("#k-courses").textContent = D.items.length;
    renderActivity();
  }
  function dayCounts() {
    var m = {}; Object.keys(state.done).forEach(function (id) { var d = state.done[id]; if (typeof d === "string") m[d.slice(0, 10)] = (m[d.slice(0, 10)] || 0) + 1; });
    return m;
  }
  function streak() {
    var m = dayCounts(), n = 0, d = new Date();
    if (!m[today()]) d.setDate(d.getDate() - 1); // today not yet counted
    for (;;) { var k = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); if (m[k]) { n++; d.setDate(d.getDate() - 1); } else break; }
    return n;
  }
  function renderActivity() {
    var m = dayCounts(), out = [], d = new Date(); d.setDate(d.getDate() - 13);
    for (var i = 0; i < 14; i++) {
      var k = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()), c = m[k] || 0;
      out.push('<i class="' + (c ? "on" : "") + '" style="height:' + (6 + Math.min(c, 10) * 2.2) + 'px" title="' + k + ": " + c + ' ticked"></i>');
      d.setDate(d.getDate() + 1);
    }
    $("#activity").innerHTML = out.join("");
  }

  // ---------- views ----------
  function renderAreas() {
    var q = query();
    var next = [];
    D.areas.some(function (a) {
      a.topics.forEach(function (t) {
        if (t.tier !== "Must") return;
        t.items.forEach(function (id) { if (!isDone(id) && next.indexOf(id) < 0 && next.length < 5) next.push(id); });
      });
      return next.length >= 5;
    });
    var html = '<p class="lead">One sufficient resource per area. Progress counts each video, lecture or assignment once, wherever it appears.</p>';
    if (next.length && !q) html += '<section class="nextup"><h2>Next up · first unticked Must items</h2><ul class="items">' + next.map(function (id) { return itemRow(id, "next"); }).join("") + "</ul></section>";
    html += '<div class="grid">';
    D.areas.forEach(function (a) {
      if (q && (a.name + " " + a.res + " " + a.backup).toLowerCase().indexOf(q) < 0) return;
      var s = stats(areaIds(a)), m = stats(areaIds(a, "Must")), im = stats(areaIds(a, "Important"));
      html += '<article class="area-card' + (s.p === 100 ? " done" : "") + '">' +
        '<div class="hd"><span class="n">' + pad(a.n) + "</span><h3>" + esc(a.name) + '</h3><span class="pct">' + s.p + "%</span></div>" +
        '<dl class="kv"><dt>Resource</dt><dd>' + esc(a.res) + "</dd><dt>Backup</dt><dd>" + esc(a.backup) + "</dd></dl>" +
        '<div class="bars">' + bar("Must", m, "must") + bar("Important", im, "") + "</div>" +
        '<button class="go" data-goto="' + a.n + '">Open ' + a.topics.length + " topics →</button></article>";
    });
    html += "</div>";
    return html;
  }
  function bar(label, s, cls) {
    return '<div class="bar ' + cls + '"><span>' + label + '</span><span class="track"><span class="fill" style="width:' + s.p + '%;display:block"></span></span><span class="c">' + s.d + "/" + s.n + "</span></div>";
  }

  function renderTopics() {
    var q = query(), html = '<p class="lead">Every topic in the syllabus with the exact videos, lectures and assignments to cover it. Items marked <span class="chip link">linked</span> appear under more than one topic and tick together.</p>', any = false;
    D.areas.forEach(function (a) {
      var body = "";
      a.topics.forEach(function (t) {
        if (!tierOk(t.tier)) return;
        var ids = t.items.filter(function (id) { return matches(itemById[id], q) && !(state.hideDone && isDone(id)); });
        if (q && !ids.length && t.name.toLowerCase().indexOf(q) < 0) return;
        if (!ids.length && state.hideDone) return;
        var s = stats(t.items);
        body += '<div class="topic"><div class="topic-hd"><span class="pill ' + t.tier + '">' + t.tier + "</span><h3>" + esc(t.name) + '</h3><span class="c">' + s.d + "/" + s.n + "</span></div>" +
          '<ul class="items">' + ids.map(function (id) { return itemRow(id, "topic"); }).join("") + "</ul></div>";
      });
      if (!body) return;
      any = true;
      var s = stats(areaIds(a)), key = "a" + a.n, open = state.open[key] || !!q;
      html += '<details class="group" data-key="' + key + '" id="area-' + a.n + '"' + (open ? " open" : "") + "><summary><h2>" + a.n + ". " + esc(a.name) + '</h2><span class="meta"><span>' + esc(a.res) + '</span><span class="mini"><i style="width:' + s.p + '%"></i></span><span class="num">' + s.p + "%</span></span></summary>" +
        '<div class="group-body">' + body + "</div></details>";
    });
    return any ? html : html + '<p class="empty">Nothing matches. Clear the search or filters.</p>';
  }

  function renderCourses() {
    var q = query(), html = '<p class="lead">The same items grouped by course, in each course\'s own order, so you can work through a course top to bottom. Ticks here and in Topics are the same tick.</p>', any = false;
    D.courses.forEach(function (c) {
      var ids = D.items.filter(function (it) { return it.c === c.id && tierOk(it.tier) && matches(it, q) && !(state.hideDone && isDone(it.id)); }).map(function (it) { return it.id; });
      if (!ids.length) return;
      any = true;
      var allIds = D.items.filter(function (it) { return it.c === c.id; }).map(function (it) { return it.id; });
      var s = stats(allIds), left = 0;
      allIds.forEach(function (id) { if (!isDone(id)) left += itemById[id].s; });
      var key = "c" + c.id, open = state.open[key] || !!q;
      html += '<details class="group" data-key="' + key + '"' + (open ? " open" : "") + "><summary><h2>" + esc(c.name) + '</h2><span class="meta"><span class="num">' + s.d + "/" + s.n + (left ? " · " + hrs(left) + " left" : "") + '</span><span class="mini"><i style="width:' + s.p + '%"></i></span><span class="num">' + s.p + "%</span></span></summary>" +
        '<div class="group-body"><ul class="items">' + ids.map(function (id) { return itemRow(id, "course"); }).join("") + "</ul></div></details>";
    });
    return any ? html : html + '<p class="empty">Nothing matches. Clear the search or filters.</p>';
  }

  function render() {
    renderHeader();
    document.querySelectorAll("nav.tabs a").forEach(function (a) { a.setAttribute("aria-current", a.dataset.view === state.view ? "page" : "false"); });
    document.querySelectorAll("#tier button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.tier === state.tier ? "true" : "false"); });
    $("#hide").checked = state.hideDone;
    $("#filters").hidden = state.view === "areas";
    var v = state.view === "topics" ? renderTopics() : state.view === "courses" ? renderCourses() : renderAreas();
    $("#view").innerHTML = v;
  }

  // ---------- events ----------
  document.addEventListener("change", function (e) {
    var t = e.target;
    if (t.matches('input[type="checkbox"][data-id]')) {
      var id = t.dataset.id;
      if (t.checked) state.done[id] = new Date().toISOString(); else delete state.done[id];
      save();
      // sync every copy of this item on screen
      document.querySelectorAll('input[data-id="' + id + '"]').forEach(function (cb) { cb.checked = t.checked; var li = cb.closest("li"); li.classList.toggle("done", t.checked); });
      var others = (usage[id] || []).length;
      if (others > 1) document.querySelectorAll('li[data-id="' + id + '"]').forEach(function (li) { li.classList.remove("flash"); void li.offsetWidth; li.classList.add("flash"); });
      renderHeader();
      refreshCounts();
    }
    if (t.id === "hide") { state.hideDone = t.checked; save(); render(); }
  });
  // update per-topic / per-group counts without rebuilding (keeps scroll + focus)
  function refreshCounts() {
    clearTimeout(refreshCounts.t);
    refreshCounts.t = setTimeout(function () {
      if (state.hideDone && state.view !== "areas") return; // keep ticked rows visible until the next view change
      var ae = document.activeElement, fid = ae && ae.dataset ? ae.dataset.id : null, y = scrollY;
      $("#view").innerHTML = state.view === "topics" ? renderTopics() : state.view === "courses" ? renderCourses() : renderAreas();
      scrollTo(0, y);
      if (fid) { var m = document.querySelector('input[data-id="' + fid + '"]'); if (m) m.focus({ preventScroll: true }); }
    }, 900);
  }
  document.addEventListener("toggle", function (e) {
    var d = e.target;
    if (d.matches && d.matches("details.group") && d.dataset.key && !query()) { state.open[d.dataset.key] = d.open; save(); }
  }, true);
  document.addEventListener("click", function (e) {
    var g = e.target.closest("[data-goto]");
    if (g) { var n = g.dataset.goto; state.open["a" + n] = true; go("topics"); setTimeout(function () { var el = document.getElementById("area-" + n); if (el) el.scrollIntoView({ block: "start" }); }, 0); }
    var tb = e.target.closest("#tier button");
    if (tb) { state.tier = tb.dataset.tier; save(); render(); }
  });
  $("#q").addEventListener("input", function () { clearTimeout(this._t); this._t = setTimeout(render, 120); });
  function go(view) { state.view = view; save(); if (location.hash !== "#" + view) history.replaceState(null, "", "#" + view); render(); }
  document.querySelectorAll("nav.tabs a").forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); go(a.dataset.view); }); });
  window.addEventListener("hashchange", function () { var h = location.hash.slice(1); if (["areas", "topics", "courses"].indexOf(h) >= 0) { state.view = h; render(); } });

  // theme
  $("#theme").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var dark = cur ? cur === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", dark ? "light" : "dark");
    try { localStorage.setItem(KEY + ".theme", dark ? "light" : "dark"); } catch (e) {}
  });
  try { var th = localStorage.getItem(KEY + ".theme"); if (th) document.documentElement.setAttribute("data-theme", th); } catch (e) {}

  // data panel: backup / restore / reset
  var dlg = $("#data");
  $("#open-data").addEventListener("click", function () { $("#io").value = JSON.stringify({ app: "lakshya", v: 2, done: state.done }); $("#msg").textContent = ""; $("#confirm-reset").hidden = true; dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", ""); });
  $("#close-data").addEventListener("click", function () { dlg.close ? dlg.close() : dlg.removeAttribute("open"); });
  $("#copy").addEventListener("click", function () {
    var ta = $("#io");
    navigator.clipboard.writeText(ta.value).then(function () { $("#msg").textContent = "Copied. Paste it on your other device and press Restore."; }, function () { ta.select(); $("#msg").textContent = "Text selected. Copy it with Ctrl/⌘+C."; });
  });
  $("#download").addEventListener("click", function () {
    var blob = new Blob([$("#io").value], { type: "application/json" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "lakshya-progress-" + today() + ".json"; document.body.appendChild(a); a.click(); a.remove();
    $("#msg").textContent = "If no file appeared, use Copy instead.";
  });
  $("#file").addEventListener("change", function () { var f = this.files[0]; if (!f) return; var r = new FileReader(); r.onload = function () { $("#io").value = r.result; restore(); }; r.readAsText(f); });
  $("#restore").addEventListener("click", restore);
  function restore() {
    try {
      var p = JSON.parse($("#io").value), d = p.done || p;
      var n = 0, clean = {};
      Object.keys(d).forEach(function (id) { if (itemById[id]) { clean[id] = typeof d[id] === "string" ? d[id] : new Date().toISOString(); n++; } });
      state.done = clean; save(); render(); $("#msg").textContent = "Restored " + n + " ticked items.";
    } catch (e) { $("#msg").textContent = "That text isn't a Lakshya backup. Paste the full text you copied."; }
  }
  $("#reset").addEventListener("click", function () { $("#confirm-reset").hidden = false; });
  $("#reset-yes").addEventListener("click", function () { state.done = {}; save(); render(); $("#confirm-reset").hidden = true; $("#io").value = "{}"; $("#msg").textContent = "All ticks cleared."; });
  $("#reset-no").addEventListener("click", function () { $("#confirm-reset").hidden = true; });

  var h = location.hash.slice(1);
  if (["areas", "topics", "courses"].indexOf(h) >= 0) state.view = h;
  render();
})();
