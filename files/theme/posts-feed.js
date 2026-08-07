(function () {
  "use strict";
  var zh = document.documentElement.lang.toLowerCase().indexOf("zh") === 0;
  var postsEndpoint = "https://posts.airalinknowledge.workers.dev/?db=posts";
  var newsEndpoint = "https://posts.airalinknowledge.workers.dev/?db=news";

  function esc(value) {
    return value == null ? "" : String(value).replace(/[&<>"']/g, function (m) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m];
    });
  }

  function dateValue(x) {
    if (x && x.dateRange && x.dateRange.start) return x.dateRange.start;
    return x && x.date ? x.date : "";
  }

  function fmtDate(iso) {
    if (!iso) return "";
    try {
      var part = String(iso).split("T")[0].split("-");
      var y = part[0], m = parseInt(part[1] || "1", 10), d = parseInt(part[2] || "1", 10);
      if (zh) return y + "年" + m + "月" + d + "日";
      var dt = new Date(Date.UTC(Number(y), m - 1, d));
      return dt.toLocaleDateString("en-US", {timeZone:"UTC", year:"numeric", month:"long", day:"2-digit"});
    } catch (e) { return String(iso); }
  }

  function renderPost(x) {
    var link = esc(x.link || "#");
    var title = esc(x.title || (zh ? "无标题" : "Untitled Post"));
    var excerpt = esc(x.comment || "");
    var date = fmtDate(x.date || "");
    var image = x.poster ? '<a href="' + link + '"><img src="' + esc(x.poster) + '" class="post-image" alt="' + title + '" loading="lazy" decoding="async"></a>' : "";
    return '<article class="post-entry-card">' + image + '<div class="post-title"><a href="' + link + '">' + title + '</a></div><div class="post-date">' + esc(date) + '</div><div class="post-excerpt">' + excerpt + '</div></article>';
  }

  function renderNews(x) {
    var d = "";
    if (x.dateRange && x.dateRange.start) {
      var s = fmtDate(x.dateRange.start);
      var e = x.dateRange.end ? fmtDate(x.dateRange.end) : "";
      d = e ? s + " – " + e : s;
    } else if (x.date) d = fmtDate(x.date);
    else if (x.dateText) d = String(x.dateText);
    var title = esc(x.title || "");
    var comment = esc(x.comment || "");
    var body = title && comment ? title + " — " + comment : (title || comment);
    var link = x.link ? ' <a href="' + esc(x.link) + '" target="_blank" rel="noopener">[' + (zh ? "详情" : "Details") + ']</a>' : "";
    return '<div class="news-item"><b>' + esc(d) + (d ? ":" : "") + '</b> ' + body + link + '</div>';
  }

  async function getJson(url) {
    var r = await fetch(url + "&all=1&_=" + Date.now(), {cache:"no-store"});
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  }

  getJson(postsEndpoint).then(function (data) {
    var items = Array.isArray(data.items) ? data.items : [];
    items.sort(function (a,b) { return new Date(b.date || 0) - new Date(a.date || 0); });
    var left = [], right = [];
    items.forEach(function (item, i) { (i % 2 === 0 ? left : right).push(item); });
    var l = document.getElementById("posts-left"), r = document.getElementById("posts-right");
    if (!l || !r) return;
    l.innerHTML = left.length ? left.map(renderPost).join("") : '<div class="posts-loading">' + (zh ? "暂无记录。" : "No posts yet.") + '</div>';
    r.innerHTML = right.map(renderPost).join("");
  }).catch(function () {
    var box = document.getElementById("posts-container");
    if (box) box.innerHTML = '<div class="posts-loading">' + (zh ? "发布内容暂时无法载入。" : "Posts are temporarily unavailable.") + '</div>';
  });

  getJson(newsEndpoint + "&publishedOnly=0").then(function (data) {
    var items = Array.isArray(data.items) ? data.items : [];
    items.sort(function (a,b) { return new Date(dateValue(b) || 0) - new Date(dateValue(a) || 0); });
    var box = document.getElementById("news-list");
    if (!box) return;
    box.innerHTML = items.length ? items.map(renderNews).join("") : '<div class="posts-loading">' + (zh ? "暂无消息。" : "No news yet.") + '</div>';
  }).catch(function () {
    var box = document.getElementById("news-list");
    if (box) box.innerHTML = '<div class="posts-loading">' + (zh ? "消息暂时无法载入。" : "News is temporarily unavailable.") + '</div>';
  });
})();
