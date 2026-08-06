(function () {
  "use strict";

  var pageName = window.location.pathname.split("/").pop() || "index.html";
  var detailPages = ["all-the-paths.html", "suoyouzhexiedaolu.html"];
  var indexPages = ["artworks.html", "chuangzuo.html"];

  if (detailPages.indexOf(pageName) === -1 && indexPages.indexOf(pageName) === -1) {
    return;
  }

  var imagePath = "uploads/all-the-paths-cover.jpg";

  function installStyles() {
    if (document.getElementById("all-the-paths-photo-style")) {
      return;
    }

    var style = document.createElement("style");
    style.id = "all-the-paths-photo-style";
    style.textContent =
      ".all-paths-source-photography{" +
        "margin:56px 0 0;padding:0;border:0;" +
      "}" +
      ".all-paths-source-photography img{" +
        "display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;" +
        "box-shadow:0 2px 12px rgba(0,0,0,.12);" +
      "}" +
      ".all-paths-source-photography figcaption{" +
        "margin-top:12px;color:#5c5c5c;font:11px/1.6 'Courier New',Courier,monospace;" +
        "letter-spacing:.06em;text-transform:uppercase;" +
      "}" +
      ".all-paths-thumbnail.has-photo{" +
        "background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.34)),url('" + imagePath + "')!important;" +
        "background-size:cover!important;background-position:center!important;" +
      "}" +
      ".all-paths-thumbnail.has-photo:before{" +
        "inset:0!important;transform:none!important;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.10) 50%,transparent 65%)!important;" +
      "}" +
      "@media(max-width:760px){" +
        ".all-paths-source-photography{margin-top:40px;}" +
        ".all-paths-source-photography figcaption{font-size:10px;}" +
      "}";
    document.head.appendChild(style);
  }

  function addDetailImage() {
    if (detailPages.indexOf(pageName) === -1 || document.getElementById("all-paths-source-photography")) {
      return;
    }

    var header = document.querySelector(".artwork-header");
    if (!header || !header.parentNode) {
      return;
    }

    var isChinese = pageName === "suoyouzhexiedaolu.html";
    var figure = document.createElement("figure");
    figure.id = "all-paths-source-photography";
    figure.className = "all-paths-source-photography";

    var image = document.createElement("img");
    image.src = imagePath;
    image.alt = isChinese
      ? "佛山废旧厂区中被锈蚀、植物与时间重新占据的孔洞"
      : "Openings in the disused Foshan factory, reoccupied by corrosion, vegetation, and time";
    image.loading = "eager";
    image.decoding = "async";

    var caption = document.createElement("figcaption");
    caption.textContent = isChinese
      ? "源摄影：佛山废旧厂区中的生产孔洞与时间侵蚀出的通径，2026"
      : "Source photographs: production openings and time-worn passages in the disused Foshan factory, 2026";

    figure.appendChild(image);
    figure.appendChild(caption);
    header.parentNode.insertBefore(figure, header.nextSibling);
  }

  function replaceIndexArtwork() {
    if (indexPages.indexOf(pageName) === -1) {
      return;
    }

    var thumbnail = document.querySelector("#all-the-paths-artwork .all-paths-thumbnail");
    if (thumbnail) {
      thumbnail.classList.add("has-photo");
      thumbnail.setAttribute(
        "aria-label",
        pageName === "chuangzuo.html"
          ? "《所有这些道路》的厂区孔洞摄影"
          : "Factory-aperture photography from All the Paths"
      );
    }
  }

  function initialize() {
    installStyles();
    addDetailImage();
    replaceIndexArtwork();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
