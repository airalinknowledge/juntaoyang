(function () {
  "use strict";

  var images = [
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

  var moreIndexes = [2, 4, 6, 7, 9, 10, 12, 13, 14, 17];
  var zh = (document.documentElement.lang || "").toLowerCase().indexOf("zh") === 0;

  function transformed(url, width, quality) {
    return url + (url.indexOf("?") === -1 ? "?" : "&") + "tr=w-" + (width || 2200) + ",q-" + (quality || 90) + ",f-auto";
  }

  function preload(index) {
    var img = new Image();
    img.src = transformed(images[(index + images.length) % images.length], 1800, 88);
  }

  var overlay = document.createElement("div");
  overlay.className = "ap-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", zh ? "作品图片轮播" : "Artwork image carousel");
  overlay.hidden = true;
  overlay.innerHTML =
    '<button class="ap-lightbox-close" type="button" aria-label="' + (zh ? "关闭" : "Close") + '">×</button>' +
    '<button class="ap-lightbox-prev" type="button" aria-label="' + (zh ? "上一张" : "Previous image") + '">‹</button>' +
    '<figure class="ap-lightbox-stage"><img alt=""><figcaption><span class="ap-lightbox-caption"></span><span class="ap-lightbox-count"></span></figcaption></figure>' +
    '<button class="ap-lightbox-next" type="button" aria-label="' + (zh ? "下一张" : "Next image") + '">›</button>';
  document.body.appendChild(overlay);

  var stageImage = overlay.querySelector(".ap-lightbox-stage img");
  var count = overlay.querySelector(".ap-lightbox-count");
  var caption = overlay.querySelector(".ap-lightbox-caption");
  var closeButton = overlay.querySelector(".ap-lightbox-close");
  var current = 0;
  var lastFocus = null;
  var touchStartX = null;

  caption.textContent = zh ? "T2M 贰场，佛山，2026" : "T2M The Second Mine, Foshan, 2026";

  function show(index) {
    current = (index + images.length) % images.length;
    var original = images[current];
    stageImage.dataset.original = original;
    stageImage.dataset.fallbackDone = "0";
    stageImage.alt = zh ? "《所有这些道路》现场图 " + (current + 1) : "All the Paths installation view " + (current + 1);
    stageImage.src = transformed(original, 2200, 90);
    count.textContent = (current + 1) + " / " + images.length;
    preload(current + 1);
    preload(current - 1);
  }

  stageImage.addEventListener("error", function () {
    if (stageImage.dataset.fallbackDone === "1") return;
    stageImage.dataset.fallbackDone = "1";
    stageImage.src = stageImage.dataset.original;
  });

  function open(index, source) {
    lastFocus = source || document.activeElement;
    show(typeof index === "number" ? index : 0);
    overlay.hidden = false;
    document.documentElement.classList.add("ap-lightbox-open");
    closeButton.focus({preventScroll:true});
  }

  function close() {
    if (overlay.hidden) return;
    overlay.hidden = true;
    document.documentElement.classList.remove("ap-lightbox-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus({preventScroll:true});
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  document.querySelectorAll("[data-ap-lightbox]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      var idx = parseInt(el.getAttribute("data-ap-index"), 10);
      open(Number.isFinite(idx) ? idx : 0, el);
    });
  });

  closeButton.addEventListener("click", close);
  overlay.querySelector(".ap-lightbox-next").addEventListener("click", next);
  overlay.querySelector(".ap-lightbox-prev").addEventListener("click", prev);
  overlay.addEventListener("click", function (event) { if (event.target === overlay) close(); });

  document.addEventListener("keydown", function (event) {
    if (overlay.hidden) return;
    if (event.key === "Escape") close();
    else if (event.key === "ArrowRight") next();
    else if (event.key === "ArrowLeft") prev();
  });

  overlay.addEventListener("touchstart", function (event) {
    if (event.touches && event.touches.length === 1) touchStartX = event.touches[0].clientX;
  }, {passive:true});
  overlay.addEventListener("touchend", function (event) {
    if (touchStartX === null || !event.changedTouches || !event.changedTouches.length) return;
    var delta = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(delta) < 45) return;
    if (delta < 0) next(); else prev();
  }, {passive:true});

  var inline = document.querySelector("[data-ap-inline-carousel]");
  if (inline) {
    var inlineStage = inline.querySelector(".ap-inline-stage");
    var inlineImage = inline.querySelector(".ap-inline-image");
    var inlineCount = inline.querySelector(".ap-inline-count");
    var inlinePrev = inline.querySelector(".ap-inline-prev");
    var inlineNext = inline.querySelector(".ap-inline-next");
    var inlineCurrent = 0;
    var inlineTouchStartX = null;

    function renderInline(position) {
      inlineCurrent = (position + moreIndexes.length) % moreIndexes.length;
      var imageIndex = moreIndexes[inlineCurrent];
      var original = images[imageIndex];
      inlineStage.setAttribute("data-ap-index", String(imageIndex));
      inlineImage.dataset.original = original;
      inlineImage.dataset.fallbackDone = "0";
      inlineImage.alt = zh ? "《所有这些道路》更多现场图 " + (inlineCurrent + 1) : "More All the Paths installation views " + (inlineCurrent + 1);
      inlineImage.src = transformed(original, 1800, 88);
      inlineCount.textContent = (inlineCurrent + 1) + " / " + moreIndexes.length;
      preload(moreIndexes[(inlineCurrent + 1) % moreIndexes.length]);
    }

    inlineImage.addEventListener("error", function () {
      if (inlineImage.dataset.fallbackDone === "1") return;
      inlineImage.dataset.fallbackDone = "1";
      inlineImage.src = inlineImage.dataset.original;
    });

    inlinePrev.addEventListener("click", function () { renderInline(inlineCurrent - 1); });
    inlineNext.addEventListener("click", function () { renderInline(inlineCurrent + 1); });

    inline.addEventListener("touchstart", function (event) {
      if (event.touches && event.touches.length === 1) inlineTouchStartX = event.touches[0].clientX;
    }, {passive:true});
    inline.addEventListener("touchend", function (event) {
      if (inlineTouchStartX === null || !event.changedTouches || !event.changedTouches.length) return;
      var delta = event.changedTouches[0].clientX - inlineTouchStartX;
      inlineTouchStartX = null;
      if (Math.abs(delta) < 45) return;
      if (delta < 0) renderInline(inlineCurrent + 1); else renderInline(inlineCurrent - 1);
    }, {passive:true});

    renderInline(0);
  }
})();
