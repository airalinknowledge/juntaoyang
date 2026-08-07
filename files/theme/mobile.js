(function () {
  "use strict";

  var pageName = window.location.pathname.split("/").pop() || "index.html";
  var detailPages = ["all-the-paths.html", "suoyouzhexiedaolu.html"];
  var indexPages = ["artworks.html", "chuangzuo.html"];

  if (detailPages.indexOf(pageName) === -1 && indexPages.indexOf(pageName) === -1) return;

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

  var previewImages = [
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_202209.jpg?updatedAt=1786045410089",
    "https://ik.imagekit.io/1zgbu3kyg/IMG_20260807_155628_AC-_vx6UB.jpg?updatedAt=1786092229765"
  ];

  var coverImage = "https://ik.imagekit.io/1zgbu3kyg/IMG_20260806_231529.jpg?updatedAt=1786045396315";
  var vimeoId = "1216451051";
  var selectedIndexes = [1, 3, 5, 8, 11, 16];

  var statementEnglish = [
    "This work was developed as part of a DP LAB × AXIS residency based in a disused factory complex in Foshan, a historic center of light industry in southern China. The site was left behind when a leading ceramic sanitary-ware manufacturer upgraded and relocated its operations.",
    "The shuttered factory retains openings that once served production, alongside fissures worn into its surfaces by accident and time. Controlled pipelines and production protocols have become passageways that resist recapture. Forced withdrawal paradoxically unfolds here as a continuous overflow: spectral forces, human and nonhuman—water, microbial colonies, air, corrosion, root systems, light, labor, and memory—rustle through the space, feeling out each route and leaving scattered evidence of passage. The work traces these marks, drawing zones of escape dispersed throughout the factory into the installation.",
    "The factory complex stands in Shiwan, at the northern edge of the Pearl River Delta alluvial plain. The surrounding hills contain abundant hill sand (gangsha) and clay; tributaries of the Dongping River crisscross the area, their bed silt rich in metal oxides, while riverbank shells and mulberry-branch ash can be blended into glazes. Over the longue durée, these geological endowments established a basic fact: this was a place suited to firing ceramics, and one in which it was almost impossible not to do so. Pottery making in Shiwan can be traced to the late Neolithic period, and by the Song dynasty it had become an important ceramic-production center in Lingnan. Over centuries of continuous extraction, Shiwan’s hills have gradually been hollowed out: hill sand was quarried away, river mud dredged up, shells burned to ash. The geological substrate has been dispersed, in the form of ceramic products, across architectural surfaces and bathrooms throughout the Pearl River Delta and around the world.",
    "The site was formerly Dongpeng Sanitary Ware Plant No. 2. Its predecessor, the Foshan Civil Affairs Comprehensive Factory, was founded in 1972 and later passed through a phase as the Dongping Ceramics Factory before developing into one of the country’s largest producers of architectural ceramics and sanitary ware. The toilets, washbasins, bathtubs, and other sanitary ceramics manufactured here were, in a material sense, standardized carriers of modern notions of hygiene: an entire discourse of bodily cleanliness, spatial separation, and civilizing discipline was vitrified by kiln temperatures above 1,200°C into white-glazed ceramic objects and distributed en masse into countless households. The closure of Plant No. 2 was not an isolated event, but part of the large-scale restructuring of Foshan’s ceramics industry launched around 2007. Under the banner of “emptying the cage to change the bird” (tenglong huanniao), roughly ninety ceramic enterprises in Chancheng District were required, within a fixed deadline, to close, relocate, or convert production; firms relocating from Chancheng alone purchased more than 30,000 mu of production land outside Foshan.",
    "Historically industrial cities are not characterized by a temporality of progress. On the contrary, they are marked by repeated withdrawal, migration, and decline. Prosperous industrial districts deteriorate as industries are upgraded; populations and capital move elsewhere, leaving residues behind. Yet these residues never disappear completely. They retain unexpected forms of agency and return at untimely moments."
  ];

  var statementChinese = [
    "作品为 DP LAB × 光轴 AXIS 驻留项目的一部分。该项目驻地研究了中国南方历史悠久的轻工业城市佛山一处陶瓷洁具龙头企业在产业升级后遗留下来的废旧厂区。",
    "停产后的工厂留下了曾服务于生产的孔洞，以及被意外和时间侵蚀出的裂缝。受控的管道与规范变为难以收编的甬道；被迫撤离在此矛盾地展开为持续的溢出。多种人类与非人类的幽灵力量——水、菌落、空气、锈蚀、根系、光、劳动与记忆——细簌作响，在空间中移动，辨认每一条通径，散落下穿越的迹象。作品试图追踪这些痕迹，将散布于工厂各处的逃逸地带引入装置之中。",
    "厂区所在的石湾地处珠江三角洲冲积平原北缘，周边丘陵蕴藏丰富的岗砂与黏土，东平河支流密布，河底淤泥富含金属氧化物，河滩贝壳与桑枝灰可混炼成釉。这些地质赋存条件在长时段中决定了一个基本事实，即此地适合烧陶，且几乎不可能不烧陶。石湾的制陶史可追溯至新石器时代晚期，至宋代已成为岭南重要的陶瓷生产基地。石湾的丘陵已在数百年的持续开采中被逐步掏空，岗砂被取走，河泥被挖出，贝壳被烧烬成灰；地质基底以陶瓷制品的形式离散地分布到了珠三角乃至全球的建筑表面和卫生间里。",
    "厂区原为东鹏洁具二厂，其前身是1972年成立的佛山民政综合厂，后经东平陶瓷厂阶段发展为全国规模最大的建筑陶瓷与卫浴洁具生产企业之一。该厂生产的马桶、洗手盆、浴缸等卫生陶瓷，在物质意义上是现代卫生观念的标准化载体：一整套关于身体清洁、空间分隔与文明规训的话语，经由1200°C以上的窑火被凝固为白色釉面的陶瓷制品，批量进入千家万户。洁具二厂的停产并非孤立事件，而是佛山市自2007年前后推行的大规模陶瓷产业整治的结果。以“腾笼换鸟”为名，禅城区约九十家陶瓷企业须在限期内关闭、外迁或转产，仅禅城区外迁企业便在佛山以外购置了三万余亩生产用地。",
    "在历史上工业发达的城市并不以进步的时间性为其特征。相反，它们以不断的撤离、迁徙和衰退为特征。繁荣的工业区块随着产业升级而走向衰败，人口和资本迁移向其他地方，并留下残余物，而这些残余物始终并未彻底消亡，而是留下意想不到的能动性，在不合时宜的时刻回归。"
  ];

  function displayUrl(url, width) {
    return url + (url.indexOf("?") === -1 ? "?" : "&") + "tr=w-" + width + ",q-86,f-auto";
  }

  function makeImage(url, alt, width, eager) {
    var img = document.createElement("img");
    img.src = displayUrl(url, width || 1600);
    img.alt = alt;
    img.decoding = "async";
    img.loading = eager ? "eager" : "lazy";
    if (eager) img.setAttribute("fetchpriority", "high");
    img.onerror = function () {
      if (img.getAttribute("data-fallback") === "1") return;
      img.setAttribute("data-fallback", "1");
      img.src = url;
    };
    return img;
  }

  function makeLinkedImage(url, alt, className, width, eager, rel) {
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.className = className || "";
    if (rel) anchor.rel = rel;
    anchor.setAttribute("aria-label", alt);
    anchor.appendChild(makeImage(url, alt, width, eager));
    return anchor;
  }

  function installStyles() {
    var oldStyle = document.getElementById("all-the-paths-photo-style");
    if (oldStyle) oldStyle.parentNode.removeChild(oldStyle);

    var style = document.createElement("style");
    style.id = "all-the-paths-photo-style";
    style.textContent = `
      .all-paths-index-cover{display:block;width:100%;height:auto;aspect-ratio:4/3;object-fit:cover;}
      #all-the-paths-gallery,.all-paths-caption,.all-paths-project-note{display:none!important;}
      .all-paths-intro-block,.all-paths-full-intro-extra{display:none!important;}
      #all-paths-presentation{margin:34px 0 0;font-family:Georgia,"Songti SC",SimSun,"Times New Roman",serif;color:#1e1e1e;}
      #all-paths-presentation *{box-sizing:border-box;}
      #all-paths-presentation img{display:block;width:100%;height:auto;max-width:100%;border:0;padding:0;background:transparent;}
      .all-paths-section{margin:0 0 82px;}
      .all-paths-kicker{margin:0 0 18px;font-size:12px;line-height:1.4;letter-spacing:.14em;text-transform:uppercase;color:#6a6a68;}
      .all-paths-preview-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;align-items:start;}
      .all-paths-preview-grid a{display:block;min-width:0;}
      .all-paths-preview-caption{margin:12px 0 0;font-size:12px;line-height:1.45;color:#6a6a68;}
      .all-paths-video-wrap{position:relative;width:100%;aspect-ratio:16/9;background:#111;overflow:hidden;margin-top:28px;}
      .all-paths-video-wrap iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}
      .all-paths-copy{max-width:690px;margin-left:auto;margin-right:auto;}
      .all-paths-copy p{margin:0 0 24px!important;font-size:16px!important;line-height:1.86!important;color:#282828!important;}
      .all-paths-copy p:last-child{margin-bottom:0!important;}
      .all-paths-selected{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 20px;align-items:start;}
      .all-paths-selected a{display:block;min-width:0;}
      .all-paths-selected a:nth-child(1),.all-paths-selected a:nth-child(4){grid-column:1/-1;}
      .all-paths-selected img{object-fit:contain;}
      .all-paths-archive{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;align-items:stretch;}
      .all-paths-archive a{display:flex;align-items:center;justify-content:center;aspect-ratio:4/3;padding:7px;background:#ebeae6;overflow:hidden;}
      .all-paths-archive img{width:auto!important;height:auto!important;max-width:100%!important;max-height:100%!important;object-fit:contain!important;}
      .all-paths-rule{width:100%;height:1px;background:#d1d1ce;margin:0 0 28px;}
      @media(max-width:991px){
        .all-paths-section{margin-bottom:64px;}
        .all-paths-archive{grid-template-columns:repeat(3,minmax(0,1fr));}
      }
      @media(max-width:760px){
        #all-paths-presentation{margin-top:24px;}
        .all-paths-section{margin-bottom:52px;}
        .all-paths-preview-grid,.all-paths-selected{grid-template-columns:1fr;gap:16px;}
        .all-paths-selected a:nth-child(1),.all-paths-selected a:nth-child(4){grid-column:auto;}
        .all-paths-video-wrap{margin-top:18px;}
        .all-paths-copy p{font-size:15px!important;line-height:1.82!important;margin-bottom:20px!important;}
        .all-paths-archive{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;}
        .all-paths-archive a{padding:5px;}
      }
    `;
    document.head.appendChild(style);
  }

  function hideLegacyIntro(isChinese) {
    var area = document.querySelector(".main-content-area");
    if (!area) return;
    var paragraphs = area.querySelectorAll(".paragraph");
    for (var i = 0; i < paragraphs.length; i++) {
      var text = paragraphs[i].textContent || "";
      if ((!isChinese && text.indexOf("Introduction:") !== -1) || (isChinese && text.indexOf("简介：") !== -1)) {
        paragraphs[i].style.display = "none";
      }
    }
  }

  function makeSection(label) {
    var section = document.createElement("section");
    section.className = "all-paths-section";
    if (label) {
      var kicker = document.createElement("div");
      kicker.className = "all-paths-kicker";
      kicker.textContent = label;
      section.appendChild(kicker);
    }
    return section;
  }

  function buildPresentation() {
    if (detailPages.indexOf(pageName) === -1) return;

    var area = document.querySelector(".main-content-area");
    var legacyGallery = document.getElementById("all-the-paths-gallery");
    if (!area || !legacyGallery) return;

    var existing = document.getElementById("all-paths-presentation");
    if (existing) existing.parentNode.removeChild(existing);

    var isChinese = pageName === "suoyouzhexiedaolu.html";
    hideLegacyIntro(isChinese);

    var presentation = document.createElement("div");
    presentation.id = "all-the-paths-presentation";

    var previewSection = makeSection(isChinese ? "装置预览" : "Installation Preview");
    var previewGrid = document.createElement("div");
    previewGrid.className = "all-paths-preview-grid";
    previewGrid.appendChild(makeLinkedImage(previewImages[0], isChinese ? "《所有这些道路》装置预览 1" : "All the Paths installation preview 1", "", 1800, true, isChinese ? "lightbox[allpaths-preview-zh]" : "lightbox[allpaths-preview-en]"));
    previewGrid.appendChild(makeLinkedImage(previewImages[1], isChinese ? "《所有这些道路》装置预览 2" : "All the Paths installation preview 2", "", 1800, true, isChinese ? "lightbox[allpaths-preview-zh]" : "lightbox[allpaths-preview-en]"));
    previewSection.appendChild(previewGrid);

    var previewCaption = document.createElement("div");
    previewCaption.className = "all-paths-preview-caption";
    previewCaption.textContent = isChinese ? "装置预览，2026" : "Installation preview, 2026";
    previewSection.appendChild(previewCaption);

    var videoWrap = document.createElement("div");
    videoWrap.className = "all-paths-video-wrap";
    var iframe = document.createElement("iframe");
    iframe.src = "https://player.vimeo.com/video/" + vimeoId + "?title=0&byline=0&portrait=0";
    iframe.title = isChinese ? "《所有这些道路》视频预览" : "All the Paths video preview";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share";
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    videoWrap.appendChild(iframe);
    previewSection.appendChild(videoWrap);
    presentation.appendChild(previewSection);

    var introSection = makeSection(isChinese ? "简介" : "Introduction");
    var introCopy = document.createElement("div");
    introCopy.className = "all-paths-copy";
    var statement = isChinese ? statementChinese : statementEnglish;
    for (var i = 0; i < 2; i++) {
      var p = document.createElement("p");
      p.textContent = statement[i];
      introCopy.appendChild(p);
    }
    introSection.appendChild(introCopy);
    presentation.appendChild(introSection);

    var selectedSection = makeSection(isChinese ? "精选现场图" : "Selected Installation Views");
    var selected = document.createElement("div");
    selected.className = "all-paths-selected";
    for (var s = 0; s < selectedIndexes.length; s++) {
      var imageIndex = selectedIndexes[s];
      selected.appendChild(makeLinkedImage(imagePaths[imageIndex], isChinese ? "《所有这些道路》精选现场图 " + (s + 1) : "Selected installation view of All the Paths " + (s + 1), "", s === 0 || s === 3 ? 1800 : 1400, false, isChinese ? "lightbox[allpaths-selected-zh]" : "lightbox[allpaths-selected-en]"));
    }
    selectedSection.appendChild(selected);
    presentation.appendChild(selectedSection);

    var extendedSection = makeSection(isChinese ? "延伸说明" : "Extended Statement");
    var extendedCopy = document.createElement("div");
    extendedCopy.className = "all-paths-copy";
    for (var e = 2; e < statement.length; e++) {
      var ep = document.createElement("p");
      ep.textContent = statement[e];
      extendedCopy.appendChild(ep);
    }
    extendedSection.appendChild(extendedCopy);
    presentation.appendChild(extendedSection);

    var archiveSection = makeSection(isChinese ? "现场文献" : "Documentation");
    var rule = document.createElement("div");
    rule.className = "all-paths-rule";
    archiveSection.appendChild(rule);
    var archive = document.createElement("div");
    archive.className = "all-paths-archive";
    for (var a = 0; a < imagePaths.length; a++) {
      archive.appendChild(makeLinkedImage(imagePaths[a], isChinese ? "《所有这些道路》现场文献 " + (a + 1) : "Documentation image of All the Paths " + (a + 1), "", 720, false, isChinese ? "lightbox[allpaths-archive-zh]" : "lightbox[allpaths-archive-en]"));
    }
    archiveSection.appendChild(archive);
    presentation.appendChild(archiveSection);

    var metadata = area.querySelector("h2.wsite-content-title + .paragraph");
    if (metadata && metadata.nextSibling) area.insertBefore(presentation, metadata.nextSibling);
    else area.insertBefore(presentation, legacyGallery.parentNode || legacyGallery);
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
    buildPresentation();
    ensureIndexArtwork();
    replaceIndexArtwork();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();