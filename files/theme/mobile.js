(function () {
  "use strict";

  var pageName = window.location.pathname.split("/").pop() || "index.html";
  var detailPages = ["all-the-paths.html", "suoyouzhexiedaolu.html"];
  var indexPages = ["artworks.html", "chuangzuo.html"];

  if (detailPages.indexOf(pageName) === -1 && indexPages.indexOf(pageName) === -1) {
    return;
  }

  var imagePaths = [
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202209.jpg?tr=w-1600,q-82,f-auto",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202038.jpg?tr=w-1200,q-82,f-auto",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202419.jpg?tr=w-1200,q-82,f-auto",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_231956.jpg?tr=w-1200,q-82,f-auto",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202026.jpg?tr=w-1200,q-82,f-auto",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202352.jpg?tr=w-1600,q-82,f-auto",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202048.jpg?tr=w-1200,q-82,f-auto",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202410.jpg?tr=w-1200,q-82,f-auto",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_231529.jpg?tr=w-1200,q-82,f-auto"
  ];
  var coverImage = "uploads/all-the-paths-cover.jpg";

  function installStyles() {
    if (document.getElementById("all-the-paths-photo-style")) {
      return;
    }

    var style = document.createElement("style");
    style.id = "all-the-paths-photo-style";
    style.textContent =
      ".all-paths-gallery{" +
        "margin:56px 0 0;padding:0;border:0;" +
      "}" +
      ".all-paths-gallery-featured," +
      ".all-paths-gallery-item{" +
        "margin:0;padding:0;break-inside:avoid;" +
      "}" +
      ".all-paths-gallery-featured{" +
        "margin-bottom:18px;" +
      "}" +
      ".all-paths-gallery-grid{" +
        "columns:2 320px;column-gap:18px;" +
      "}" +
      ".all-paths-gallery-item{" +
        "margin-bottom:18px;" +
      "}" +
      ".all-paths-gallery img{" +
        "display:block;width:100%;height:auto;background:#ececea;" +
        "box-shadow:0 2px 12px rgba(0,0,0,.12);" +
      "}" +
      ".all-paths-gallery-caption{" +
        "margin:12px 0 0;color:#5c5c5c;font:11px/1.6 'Courier New',Courier,monospace;" +
        "letter-spacing:.06em;text-transform:uppercase;" +
      "}" +
      ".all-paths-index-cover{" +
        "display:block;width:100%;height:auto;aspect-ratio:4/3;object-fit:cover;" +
      "}" +
      "@media(max-width:760px){" +
        ".all-paths-gallery{margin-top:40px;}" +
        ".all-paths-gallery-grid{columns:1;}" +
        ".all-paths-gallery-featured,.all-paths-gallery-item{margin-bottom:14px;}" +
        ".all-paths-gallery-caption{font-size:10px;margin-top:10px;}" +
      "}";
    document.head.appendChild(style);
  }

  function makeGalleryImage(src, index, isChinese) {
    var figure = document.createElement("figure");
    figure.className = index === 0
      ? "all-paths-gallery-featured"
      : "all-paths-gallery-item";

    var image = document.createElement("img");
    image.src = src;
    image.alt = isChinese
      ? "《所有这些道路》作品现场图 " + (index + 1)
      : "Installation view of All the Paths, image " + (index + 1);
    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";

    if (index === 0) {
      image.setAttribute("fetchpriority", "high");
    }

    figure.appendChild(image);
    return figure;
  }

  function addDetailGallery() {
    if (detailPages.indexOf(pageName) === -1 || document.getElementById("all-paths-gallery")) {
      return;
    }

    var header = document.querySelector(".artwork-header");
    if (!header || !header.parentNode) {
      return;
    }

    var isChinese = pageName === "suoyouzhexiedaolu.html";
    var gallery = document.createElement("section");
    gallery.id = "all-paths-gallery";
    gallery.className = "all-paths-gallery";
    gallery.setAttribute(
      "aria-label",
      isChinese ? "《所有这些道路》作品图集" : "All the Paths artwork gallery"
    );

    gallery.appendChild(makeGalleryImage(imagePaths[0], 0, isChinese));

    var grid = document.createElement("div");
    grid.className = "all-paths-gallery-grid";

    for (var i = 1; i < imagePaths.length; i++) {
      grid.appendChild(makeGalleryImage(imagePaths[i], i, isChinese));
    }

    gallery.appendChild(grid);

    var caption = document.createElement("p");
    caption.className = "all-paths-gallery-caption";
    caption.textContent = isChinese
      ? "《所有这些道路》展览现场，T2M 贰场，佛山，2026"
      : "Installation views, All the Paths, T2M The Second Mine, Foshan, 2026";
    gallery.appendChild(caption);

    header.parentNode.insertBefore(gallery, header.nextSibling);
  }

  function ensureIndexArtwork() {
    if (indexPages.indexOf(pageName) === -1 || document.getElementById("all-the-paths-artwork")) {
      return;
    }

    var container = document.querySelector(".artworks-container");
    if (!container) {
      return;
    }

    var isChinese = pageName === "chuangzuo.html";
    var item = document.createElement("div");
    item.id = "all-the-paths-artwork";
    item.className = "artwork-item-new reverse-layout";

    if (isChinese) {
      item.innerHTML =
        '<div class="artwork-image-new">' +
          '<a href="suoyouzhexiedaolu.html" target="_blank">' +
            '<img class="all-paths-index-cover" src="' + coverImage + '" alt="《所有这些道路》展览现场">' +
          '</a>' +
        '</div>' +
        '<div class="artwork-description-new">' +
          '<a href="suoyouzhexiedaolu.html" target="_blank">' +
            '<h3 class="artwork-title-new">所有这些道路 / All the Paths</h3>' +
            '<p class="artwork-details-new">灯箱摄影装置，多通道声音<br>2026</p>' +
          '</a>' +
        '</div>';
    } else {
      item.innerHTML =
        '<div class="artwork-image-new">' +
          '<a href="all-the-paths.html" target="_blank">' +
            '<img class="all-paths-index-cover" src="' + coverImage + '" alt="All the Paths installation view">' +
          '</a>' +
        '</div>' +
        '<div class="artwork-description-new">' +
          '<a href="all-the-paths.html" target="_blank">' +
            '<h3 class="artwork-title-new">All the Paths</h3>' +
            '<p class="artwork-details-new">Lightbox Photography Installation, Multichannel Sound<br>2026</p>' +
          '</a>' +
        '</div>';
    }

    var divider = document.createElement("hr");
    divider.className = "decorative-hr";
    container.insertBefore(divider, container.firstChild);
    container.insertBefore(item, divider);
  }

  function replaceIndexArtwork() {
    if (indexPages.indexOf(pageName) === -1) {
      return;
    }

    var thumbnail = document.querySelector("#all-the-paths-artwork .all-paths-thumbnail");
    if (!thumbnail) {
      return;
    }

    var image = document.createElement("img");
    image.className = "all-paths-index-cover";
    image.src = coverImage;
    image.alt = pageName === "chuangzuo.html"
      ? "《所有这些道路》展览现场"
      : "All the Paths installation view";
    thumbnail.parentNode.replaceChild(image, thumbnail);
  }

  function initialize() {
    installStyles();
    addDetailGallery();
    ensureIndexArtwork();
    replaceIndexArtwork();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();