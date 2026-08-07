(function () {
  "use strict";
  var endpoint = "https://review.airalinknowledge.workers.dev/?db=log";

  function esc(value) {
    return value == null ? "" : String(value).replace(/[&<>"']/g, function (m) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m];
    });
  }

  function creationYear(iso) {
    if (!iso) return "";
    return String(iso).split("-")[0] || String(iso);
  }

  function fmtDate(iso) {
    if (!iso) return "";
    try {
      var parts = String(iso).split("T")[0].split("-");
      var d = new Date(Date.UTC(Number(parts[0]), Number(parts[1] || 1) - 1, Number(parts[2] || 1)));
      return d.toLocaleDateString("en-US", {timeZone:"UTC", year:"numeric", month:"short", day:"2-digit"});
    } catch (e) { return String(iso); }
  }

  async function fetchAll() {
    var all = [], cursor = null;
    do {
      var url = endpoint + (cursor ? "&cursor=" + encodeURIComponent(cursor) : "") + "&_=" + Date.now();
      var r = await fetch(url, {cache:"no-store"});
      if (!r.ok) throw new Error("HTTP " + r.status);
      var data = await r.json();
      all = all.concat(Array.isArray(data.items) ? data.items : []);
      cursor = data.next_cursor || null;
    } while (cursor);
    return all;
  }

  function render(x) {
    var bits = [];
    if (x.title) bits.push("<em>" + esc(x.title) + "</em>");
    if (x.author) bits.push(esc(x.author));
    if (x.creation) bits.push(esc(creationYear(x.creation)));
    var body = x.comment && String(x.comment).trim() ? String(x.comment).trim() : (x.title || "");
    return '<article class="review-entry"><div class="review-meta"><div>' + bits.join(", ") + '</div><div class="review-meta-right">' + esc(fmtDate(x.date || "")) + '</div></div><div class="review-content">' + esc(body) + '</div></article>';
  }

  fetchAll().then(function (items) {
    var root = document.getElementById("review-list");
    if (!root) return;
    items.sort(function (a,b) { return new Date(b.date || 0) - new Date(a.date || 0); });
    root.innerHTML = items.length ? items.map(render).join("") : '<div class="review-loading">No entries yet.</div>';
  }).catch(function () {
    var root = document.getElementById("review-list");
    if (root) root.innerHTML = '<div class="review-loading">Marginalia are temporarily unavailable.</div>';
  });
})();
