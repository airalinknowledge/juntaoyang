(function () {
  "use strict";

  var pageName = window.location.pathname.split("/").pop() || "index.html";
  var detailPages = ["all-the-paths.html", "suoyouzhexiedaolu.html"];
  var indexPages = ["artworks.html", "chuangzuo.html"];

  if (detailPages.indexOf(pageName) === -1 && indexPages.indexOf(pageName) === -1) {
    return;
  }

  var imagePaths = [
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202209.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202038.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202419.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_231956.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202026.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202352.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202048.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202410.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_231529.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155534_qS33s8doUV.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155448_ObBRackxwG.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155436_VH-2YvRmO.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155616_sKV384iDn.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155645_du0EDX02W.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155620_EhVdmvG-n.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155628_AC-_vx6UB.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155756_BvKByCLvN.jpg",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155823_zqaCSoz0G.jpg"
  ];

  var layoutClasses = [
    "doc-full",
    "doc-left-7",
    "doc-right-4 doc-offset",
    "doc-left-5",
    "doc-right-6",
    "doc-left-9",
    "doc-right-3 doc-offset-small",
    "doc-left-6",
    "doc-right-5 doc-offset-small",
    "doc-full",
    "doc-left-4 doc-offset-small",
    "doc-right-7",
    "doc-left-8",
    "doc-right-4 doc-offset",
    "doc-left-5",
    "doc-right-6",
    "doc-left-7",
    "doc-right-4 doc-offset-small"
  ];

  var coverImage = "uploads/all-the-paths-cover.jpg";

  var introEnglish = [
    "This work was developed as part of a DP LAB × AXIS residency based in a disused factory complex in Foshan, a historic center of light industry in southern China. The site was left behind when a leading ceramic sanitary-ware manufacturer upgraded and relocated its operations.",
    "The shuttered factory retains openings that once served production, alongside fissures worn into its surfaces by accident and time. Controlled pipelines and production protocols have become passageways that resist recapture. Forced withdrawal paradoxically unfolds here as a continuous overflow: spectral forces, human and nonhuman—water, microbial colonies, air, corrosion, root systems, light, labor, and memory—rustle through the space, feeling out each route and leaving scattered evidence of passage. The work traces these marks, drawing zones of escape dispersed throughout the factory into the installation."
  ];

  var introChinese = [
    "作品为 DP LAB × 光轴 AXIS 驻留项目的一部分。该项目驻地研究了中国南方历史悠久的轻工业城市佛山一处陶瓷洁具龙头企业在产业升级后遗留下来的废旧厂区。",
    "停产后的工厂留下了曾服务于生产的孔洞，以及被意外和时间侵蚀出的裂缝。受控的管道与规范变为难以收编的甬道；被迫撤离在此矛盾地展开为持续的溢出。多种人类与非人类的幽灵力量——水、菌落、空气、锈蚀、根系、光、劳动与记忆——细簌作响，在空间中移动，辨认每一条通径，散落下穿越的迹象。作品试图追踪这些痕迹，将散布于工厂各处的逃逸地带引入装置之中。"
  ];

  function optimizedUrl(url, index) {
    var width = (index === 0 || index === 9) ? 1800 : 1400;
    return url + "?tr=w-" + width + ",q-84,f-auto";
  }

  function installStyles() {
    var oldStyle = document.getElementById("all-the-paths-photo-style");
    if (oldStyle) oldStyle.parentNode.removeChild(oldStyle);

    var style = document.createElement("style");
    style.id = "all-the-paths-photo-style";
    style.textContent =
      ".all-paths-index-cover{display:block;width:100%;height:auto;aspect-ratio:4/3;object-fit:cover;}" +
      ".all-paths-documentation-gallery{display:grid!important;grid-template-columns:repeat(12,minmax(0,1fr))!important;grid-auto-rows:auto!important;grid-auto-flow:row!important;align-items:start!important;gap:36px 22px!important;margin:0!important;padding:0!important;line-height:0!important;}" +
      ".all-paths-documentation-gallery .all-paths-gallery-item{position:relative!important;display:block!important;overflow:visible!important;width:auto!important;height:auto!important;min-height:0;margin:0!important;padding:0!important;background:transparent!important;grid-row:auto!important;}" +
      ".all-paths-documentation-gallery .all-paths-gallery-item a{position:static!important;display:block!important;width:100%!important;height:auto!important;}" +
      ".all-paths-documentation-gallery .all-paths-gallery-item img{position:static!important;display:block!important;width:100%!important;height:auto!important;max-width:100%!important;max-height:none!important;object-fit:contain!important;border:0!important;background:transparent!important;transform:none!important;}" +
      ".all-paths-documentation-gallery .all-paths-gallery-item:hover img{transform:none!important;}" +
      ".all-paths-documentation-gallery .featured,.all-paths-documentation-gallery .wide,.all-paths-documentation-gallery .tall{grid-row:auto!important;}" +
      ".all-paths-documentation-gallery .doc-full{grid-column:1/-1!important;}" +
      ".all-paths-documentation-gallery .doc-left-9{grid-column:1/span 9!important;}" +
      ".all-paths-documentation-gallery .doc-left-8{grid-column:1/span 8!important;}" +
      ".all-paths-documentation-gallery .doc-left-7{grid-column:1/span 7!important;}" +
      ".all-paths-documentation-gallery .doc-left-6{grid-column:1/span 6!important;}" +
      ".all-paths-documentation-gallery .doc-left-5{grid-column:2/span 5!important;}" +
      ".all-paths-documentation-gallery .doc-left-4{grid-column:2/span 4!important;}" +
      ".all-paths-documentation-gallery .doc-right-7{grid-column:6/span 7!important;}" +
      ".all-paths-documentation-gallery .doc-right-6{grid-column:7/span 6!important;}" +
      ".all-paths-documentation-gallery .doc-right-5{grid-column:8/span 5!important;}" +
      ".all-paths-documentation-gallery .doc-right-4{grid-column:9/span 4!important;}" +
      ".all-paths-documentation-gallery .doc-right-3{grid-column:10/span 3!important;}" +
      ".all-paths-documentation-gallery .doc-offset{margin-top:82px!important;}" +
      ".all-paths-documentation-gallery .doc-offset-small{margin-top:42px!important;}" +
      ".all-paths-documentation-gallery .all-paths-intro-block{line-height:1.82!important;color:#282828;font-family:Georgia,'Songti SC',SimSun,serif!important;font-size:15px!important;letter-spacing:0!important;background:transparent!important;}" +
      ".all-paths-documentation-gallery .all-paths-intro-block p{margin:0!important;padding:0!important;font:inherit!important;line-height:inherit!important;color:inherit!important;}" +
      ".all-paths-documentation-gallery .all-paths-intro-one{grid-column:2/span 5!important;margin-top:34px!important;margin-bottom:24px!important;}" +
      ".all-paths-documentation-gallery .all-paths-intro-two{grid-column:7/span 6!important;margin-top:68px!important;margin-bottom:18px!important;}" +
      ".all-paths-documentation-gallery .all-paths-intro-label{display:block;margin:0 0 18px!important;font-size:18px!important;line-height:1.3!important;text-decoration:underline;text-underline-offset:4px;}" +
      ".all-paths-documentation-gallery .is-error{min-height:240px!important;background:repeating-linear-gradient(135deg,#e7e7e3 0,#e7e7e3 12px,#ededeb 12px,#ededeb 24px)!important;}" +
      ".all-paths-documentation-gallery .is-error:after{content:attr(data-error-label);position:absolute;inset:0;display:grid;place-items:center;padding:20px;color:#686868;font:11px/1.5 'Courier New',monospace;letter-spacing:.12em;text-align:center;text-transform:uppercase;}" +
      "@media(max-width:991px){.all-paths-documentation-gallery{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:26px 18px!important;}.all-paths-documentation-gallery .all-paths-gallery-item{grid-column:auto!important;margin-top:0!important;}.all-paths-documentation-gallery .doc-full{grid-column:1/-1!important;}.all-paths-documentation-gallery .all-paths-intro-block{grid-column:1/-1!important;max-width:620px;margin:18px auto 26px!important;}}" +
      "@media(max-width:760px){.all-paths-documentation-gallery{grid-template-columns:1fr!important;gap:18px!important;}.all-paths-documentation-gallery .all-paths-gallery-item,.all-paths-documentation-gallery .doc-full,.all-paths-documentation-gallery .all-paths-intro-block{grid-column:1/-1!important;margin-top:0!important;}.all-paths-documentation-gallery .all-paths-intro-block{font-size:14px!important;line-height:1.8!important;margin:22px 0 30px!important;}.all-paths-documentation-gallery .all-paths-intro-label{font-size:17px!important;margin-bottom:14px!important;}.all-paths-documentation-gallery .is-error{min-height:180px!important;}}";
    document.head.appendChild(style);
  }

  function configureImage(image, item, index, isChinese) {
    var original = imagePaths[index];
    var fallbackTried = false;

    image.alt = isChinese ? "《所有这些道路》展览现场 " + (index + 1) : "Installation view of All the Paths " + (index + 1);
    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";

    if (index === 0) image.setAttribute("fetchpriority", "high");
    else image.removeAttribute("fetchpriority");

    image.onerror = function () {
      if (!fallbackTried) {
        fallbackTried = true;
        image.src = original;
        return;
      }
      image.style.display = "none";
      item.classList.add("is-error");
    };

    image.onload = function () {
      item.classList.remove("is-error");
      image.style.display = "block";
    };

    image.src = optimizedUrl(original, index);
  }

  function createGalleryItem() {
    var item = document.createElement("div");
    item.className = "all-paths-gallery-item";
    var anchor = document.createElement("a");
    var image = document.createElement("img");
    anchor.appendChild(image);
    item.appendChild(anchor);
    return item;
  }

  function findOriginalIntro(isChinese) {
    var area = document.querySelector(".main-content-area");
    if (!area) return null;
    var paragraphs = area.querySelectorAll(".paragraph");
    for (var i = 0; i < paragraphs.length; i++) {
      var text = paragraphs[i].textContent || "";
      if ((!isChinese && text.indexOf("Introduction:") !== -1) || (isChinese && text.indexOf("简介：") !== -1)) {
        return paragraphs[i];
      }
    }
    return null;
  }

  function makeIntroBlock(part, isChinese) {
    var block = document.createElement("div");
    block.className = "all-paths-intro-block " + (part === 0 ? "all-paths-intro-one" : "all-paths-intro-two");
    if (part === 0) {
      var label = document.createElement("span");
      label.className = "all-paths-intro-label";
      label.textContent = isChinese ? "简介：" : "Introduction:";
      block.appendChild(label);
    }
    var p = document.createElement("p");
    p.textContent = (isChinese ? introChinese : introEnglish)[part];
    block.appendChild(p);
    return block;
  }

  function embedIntroduction(gallery, items, isChinese) {
    var oldBlocks = gallery.querySelectorAll(".all-paths-intro-block");
    for (var i = 0; i < oldBlocks.length; i++) oldBlocks[i].parentNode.removeChild(oldBlocks[i]);

    var originalIntro = findOriginalIntro(isChinese);
    if (originalIntro) originalIntro.style.display = "none";

    var firstBlock = makeIntroBlock(0, isChinese);
    var secondBlock = makeIntroBlock(1, isChinese);

    if (items[4] && items[4].nextSibling) gallery.insertBefore(firstBlock, items[4].nextSibling);
    else gallery.appendChild(firstBlock);

    if (items[11] && items[11].nextSibling) gallery.insertBefore(secondBlock, items[11].nextSibling);
    else gallery.appendChild(secondBlock);
  }

  function enhanceDetailGallery() {
    if (detailPages.indexOf(pageName) === -1) return;

    var gallery = document.getElementById("all-the-paths-gallery");
    if (!gallery) return;

    var isChinese = pageName === "suoyouzhexiedaolu.html";
    gallery.classList.add("all-paths-documentation-gallery");
    gallery.setAttribute("aria-label", isChinese ? "《所有这些道路》18 张展览现场图与作品简介" : "18 installation views and introduction for All the Paths");

    var existingItems = [];
    for (var c = 0; c < gallery.children.length; c++) {
      if (gallery.children[c].classList && gallery.children[c].classList.contains("all-paths-gallery-item")) existingItems.push(gallery.children[c]);
    }

    var items = [];
    for (var i = 0; i < imagePaths.length; i++) {
      var item = existingItems[i] || createGalleryItem();
      item.className = "all-paths-gallery-item " + layoutClasses[i];
      item.setAttribute("data-error-label", isChinese ? "现场图片暂时无法载入" : "Installation image unavailable");

      var anchor = item.querySelector("a");
      if (!anchor) {
        anchor = document.createElement("a");
        item.appendChild(anchor);
      }
      anchor.href = imagePaths[i];
      anchor.rel = isChinese ? "lightbox[allpaths2026zh]" : "lightbox[allpaths2026en]";
      anchor.setAttribute("aria-label", isChinese ? "打开第 " + (i + 1) + " 张现场图" : "Open installation image " + (i + 1));

      var image = anchor.querySelector("img");
      if (!image) {
        image = document.createElement("img");
        anchor.appendChild(image);
      }
      configureImage(image, item, i, isChinese);

      if (!existingItems[i]) gallery.appendChild(item);
      items.push(item);
    }

    for (var j = imagePaths.length; j < existingItems.length; j++) existingItems[j].parentNode.removeChild(existingItems[j]);

    embedIntroduction(gallery, items, isChinese);
  }

  function ensureIndexArtwork() {
    if (indexPages.indexOf(pageName) === -1 || document.getElementById("all-the-paths-artwork")) return;
    var container = document.querySelector(".artworks-container");
    if (!container) return;

    var isChinese = pageName === "chuangzuo.html";
    var item = document.createElement("div");
    item.id = "all-the-paths-artwork";
    item.className = "artwork-item-new reverse-layout";
    item.innerHTML = isChinese
      ? '<div class="artwork-image-new"><a href="suoyouzhexiedaolu.html" target="_blank"><img class="all-paths-index-cover" src="' + coverImage + '" alt="《所有这些道路》展览现场"></a></div><div class="artwork-description-new"><a href="suoyouzhexiedaolu.html" target="_blank"><h3 class="artwork-title-new">所有这些道路 / All the Paths</h3><p class="artwork-details-new">灯箱摄影装置，多通道声音<br>2026</p></a></div>'
      : '<div class="artwork-image-new"><a href="all-the-paths.html" target="_blank"><img class="all-paths-index-cover" src="' + coverImage + '" alt="All the Paths installation view"></a></div><div class="artwork-description-new"><a href="all-the-paths.html" target="_blank"><h3 class="artwork-title-new">All the Paths</h3><p class="artwork-details-new">Lightbox Photography Installation, Multichannel Sound<br>2026</p></a></div>';

    var divider = document.createElement("hr");
    divider.className = "decorative-hr";
    container.insertBefore(divider, container.firstChild);
    container.insertBefore(item, divider);
  }

  function replaceIndexArtwork() {
    if (indexPages.indexOf(pageName) === -1) return;
    var thumbnail = document.querySelector("#all-the-paths-artwork .all-paths-thumbnail");
    if (!thumbnail) return;

    var image = document.createElement("img");
    image.className = "all-paths-index-cover";
    image.src = coverImage;
    image.alt = pageName === "chuangzuo.html" ? "《所有这些道路》展览现场" : "All the Paths installation view";
    thumbnail.parentNode.replaceChild(image, thumbnail);
  }

  function initialize() {
    installStyles();
    enhanceDetailGallery();
    ensureIndexArtwork();
    replaceIndexArtwork();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();