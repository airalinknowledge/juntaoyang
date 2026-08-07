(function () {
  "use strict";

  function getPageName() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function isChinesePage() {
    return [
      "guanyu.html",
      "chuangzuo.html",
      "chuban.html",
      "xiangmu.html",
      "fabu.html",
      "suoyouzhexiedaolu.html"
    ].indexOf(getPageName()) !== -1;
  }

  function updateEnglishBio() {
    if (getPageName() !== "index.html") {
      return;
    }

    var paragraphs = document.querySelectorAll(".main-content-column .paragraph");

    for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].textContent.indexOf("Juntao Yang is a scholar, critic, and artist.") !== -1) {
        paragraphs[i].innerHTML =
          '<font size="4">Juntao Yang is a scholar, critic, and artist working across media theory, environmental humanities, and queer theory, with contemporary cinema, visual art, and popular culture as primary objects. Yang is concerned with how power operates through material and mediatic processes—often invisibly, at the micro-level—and addresses this through provocative scholarship and, at times, hysterical public writing. Current research theorizes the 2008 Wenchuan earthquake as a deep now: a temporally and politically irreversible withdrawal that seduces, conscripting, shattering, and reconfiguring the conditions from which sovereign subjectivity emerges. Based in Berkeley.</font>';
        break;
      }
    }
  }

  function addPekingUniversityProgram() {
    var institutes = document.getElementById("institutes");
    if (!institutes || document.getElementById("pku-western-theory-program")) {
      return;
    }

    var isChinese = isChinesePage();

    var heading = institutes.parentElement.querySelector('font[size="5"]');
    if (heading) {
      heading.textContent = isChinese
        ? "研习班与工作坊"
        : "Institutes";
    }

    var item = document.createElement("div");
    item.id = "pku-western-theory-program";
    item.className = "institute-item";

    if (isChinese) {
      item.innerHTML =
        '“西方前沿文论阐释与批判”高级研修班，北京大学艺术学院，2026' +
        '<div class="faculty-list">授课教师：朱国华、李洋、吴冠军、蓝江、姜宇辉、夏莹、段吉方、周计武、王嘉军、李修建、李科林、卢文超、张颖、吴娱玉、董树宝、李三达、林云柯</div>';
    } else {
      item.innerHTML =
        'Advanced Seminar, “Frontiers in Western Literary Theory: Interpretation and Critique,” Peking University, School of Arts, 2026' +
        '<div class="faculty-list">With: Zhu Guohua, Li Yang, Wu Guanjun, Lan Jiang, Jiang Yuhui, Xia Ying, Duan Jifang, Zhou Jiwu, Wang Jiajun, Li Xiujian, Li Kelin, Lu Wenchao, Zhang Ying, Wu Yuyu, Dong Shubao, Li Sanda, Lin Yunke</div>';
    }

    institutes.insertBefore(item, institutes.firstChild);
  }

  function addPekingUniversityPresentation() {
    var conferenceSection = document.querySelector(".conference-section");
    if (!conferenceSection || document.getElementById("pku-media-of-things-presentation")) {
      return;
    }

    var isChinese = isChinesePage();
    var entry = document.createElement("div");
    entry.id = "pku-media-of-things-presentation";
    entry.className = "writing-entry";

    if (isChinese) {
      entry.innerHTML =
        '<p class="writing-title chinese-title">“物之媒介与媒介之物：自然、地质及其他隐喻” [口头报告]</p>' +
        '<p class="writing-details">- “西方前沿文论阐释与批判”高级研修班，北京大学艺术学院，北京，中国，2026/7/6 - 7/10</p>';
    } else {
      entry.innerHTML =
        '<p class="writing-title">The Media of Things and the Things of Media: Nature, Geology, and Other Metaphors [Oral Presentation]</p>' +
        '<p class="writing-details">- Advanced Seminar “Frontiers in Western Literary Theory: Interpretation and Critique,” Peking University, School of Arts, Beijing, China, July 6–10, 2026</p>';
    }

    var sectionTitle = conferenceSection.querySelector(".writing-section-title");
    if (sectionTitle && sectionTitle.nextSibling) {
      conferenceSection.insertBefore(entry, sectionTitle.nextSibling);
    } else {
      conferenceSection.appendChild(entry);
    }
  }

  function addEntropyArtPodcast() {
    if (document.getElementById("entropy-art-podcast")) {
      return;
    }

    var sectionTitles = document.querySelectorAll(".writing-section-title");
    var targetTitle = null;
    var isChinese = isChinesePage();

    for (var i = 0; i < sectionTitles.length; i++) {
      var text = sectionTitles[i].textContent.trim();
      if ((isChinese && text === "对谈") || (!isChinese && text === "Invited Talks")) {
        targetTitle = sectionTitles[i];
        break;
      }
    }

    if (!targetTitle || !targetTitle.parentElement) {
      return;
    }

    var entry = document.createElement("div");
    entry.id = "entropy-art-podcast";
    entry.className = "writing-entry";

    if (isChinese) {
      entry.innerHTML =
        '<p class="writing-title talks-list chinese-title"><a href="https://www.ximalaya.com/sound/974974837" target="_blank">“杨君陶 | 微观权力与多孔性的表达”</a></p>' +
        '<p class="writing-details">播客访谈，《艺术增熵》，主持人：莫丽德，线上，2026</p>';
    } else {
      entry.innerHTML =
        '<p class="writing-title talks-list"><a href="https://www.ximalaya.com/sound/974974837" target="_blank">Juntao Yang | The Expression of Micropower and Porosity</a></p>' +
        '<p class="writing-details">Podcast interview, <em>Entropy Art</em>, hosted by Molly, Online, 2026</p>';
    }

    if (targetTitle.nextSibling) {
      targetTitle.parentElement.insertBefore(entry, targetTitle.nextSibling);
    } else {
      targetTitle.parentElement.appendChild(entry);
    }
  }

  function addOriginalRemakeAlgorithmicScreening() {
    var screenings = document.getElementById("screenings");
    if (!screenings || document.getElementById("original-remake-algorithmic-screening")) {
      return;
    }

    var item = document.createElement("div");
    item.id = "original-remake-algorithmic-screening";
    item.className = "screening-item";

    if (isChinesePage()) {
      item.innerHTML =
        '<em>“原创 / 复刻 / 算法流：三种叙事的边界在哪里”</em>，雪莲·亮点文创园偶得剧场，2026/6/28';
    } else {
      item.innerHTML =
        '<em>Original / Remake / Algorithmic: Where Do the Boundaries Between Three Narrative Modes Lie?</em>, Oude Theatre, Xuelian · Liangdian Cultural and Creative Park, June 28, 2026';
    }

    screenings.insertBefore(item, screenings.firstChild);
  }

  function addAfterimageResidency() {
    if (document.getElementById("afterimage-residency")) {
      return;
    }

    var headings = document.querySelectorAll('.paragraph font[size="5"]');
    var targetHeading = null;
    var isChinese = isChinesePage();

    for (var i = 0; i < headings.length; i++) {
      var text = headings[i].textContent.trim();
      if ((isChinese && text === "驻留项目") || (!isChinese && text === "Residencies")) {
        targetHeading = headings[i];
        break;
      }
    }

    if (!targetHeading || !targetHeading.parentElement) {
      return;
    }

    var item = document.createElement("div");
    item.id = "afterimage-residency";
    item.className = "residency-item";

    if (isChinese) {
      item.innerHTML =
        '<em>“剩余影像（AFTERIMAGE）”</em>，T2M 贰场，佛山，中国，策展：光轴、DP LAB&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;2026/7 - 2026/8';
    } else {
      item.innerHTML =
        '<em>AFTERIMAGE</em>, T2M The Second Mine, Foshan, China, curated by AXIS and DP LAB&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;2026/7 - 2026/8';
    }

    var container = targetHeading.parentElement;
    if (targetHeading.parentElement.firstElementChild === targetHeading && targetHeading.nextSibling) {
      container.insertBefore(item, targetHeading.nextSibling);
    } else {
      container.insertBefore(item, container.children[1] || null);
    }
  }

  function addCuratorialProjects() {
    var exhibitions = document.getElementById("exhibitions");
    if (!exhibitions || document.getElementById("curatorial-projects")) {
      return;
    }

    var isChinese = isChinesePage();
    var exhibitionsSection = exhibitions.parentElement;
    var container = exhibitionsSection.parentElement;

    var section = document.createElement("div");
    section.id = "curatorial-projects";
    section.className = "paragraph";

    if (isChinese) {
      section.innerHTML =
        '<u><font size="5">策展项目</font></u>' +
        '<div class="exhibition-item curatorial-item"><em>“Silos and Shelters”</em>，Studio 302 Reclaimed，伯克利，美国，2026</div>' +
        '<div class="exhibition-item curatorial-item"><em>“行星蚀刻，翼装飞行”</em>，Imaginary Z，杭州，中国，2026</div>' +
        '<div class="exhibition-item curatorial-item"><em>“中国蓝”</em>，武汉大学艺术学院，武汉，中国，2022</div>';
    } else {
      section.innerHTML =
        '<u><font size="5">Curatorial Projects</font></u>' +
        '<div class="exhibition-item curatorial-item"><em>Silos and Shelters</em>, Studio 302 Reclaimed, Berkeley, USA, 2026</div>' +
        '<div class="exhibition-item curatorial-item"><em>Planetary Etching, Wingsuit Flying</em>, Imaginary Z, Hangzhou, China, 2026</div>' +
        '<div class="exhibition-item curatorial-item"><em>China Blue</em>, Wuhan University, School of Arts, Wuhan, China, 2022</div>';
    }

    var gap = document.createElement("div");
    gap.className = "section-gap";

    container.insertBefore(section, exhibitionsSection);
    container.insertBefore(gap, exhibitionsSection);
  }

  function addAllPathsArtwork() {
    var pageName = getPageName();
    if (pageName !== "artworks.html" && pageName !== "chuangzuo.html") {
      return;
    }

    var container = document.querySelector(".artworks-container");
    if (!container || document.getElementById("all-the-paths-artwork")) {
      return;
    }

    if (!document.getElementById("all-the-paths-index-style")) {
      var style = document.createElement("style");
      style.id = "all-the-paths-index-style";
      style.textContent =
        ".all-paths-thumbnail{" +
          "position:relative;aspect-ratio:4/3;overflow:hidden;background:" +
          "radial-gradient(circle at 21% 26%,transparent 0 9%,rgba(244,244,242,.92) 9.5% 10.7%,transparent 11.2%)," +
          "radial-gradient(ellipse at 72% 35%,transparent 0 14%,rgba(244,244,242,.72) 14.5% 15.5%,transparent 16%)," +
          "radial-gradient(circle at 45% 78%,transparent 0 8%,rgba(244,244,242,.58) 8.5% 9.3%,transparent 9.8%)," +
          "linear-gradient(142deg,#182027 0%,#3a4b5c 48%,#817b70 100%);" +
          "box-shadow:0 2px 8px rgba(0,0,0,.12);transition:transform .35s ease,box-shadow .35s ease;" +
        "}" +
        ".all-paths-thumbnail:before{" +
          "content:'';position:absolute;inset:-18%;background:repeating-linear-gradient(102deg,transparent 0 31px,rgba(244,244,242,.12) 32px,transparent 34px);transform:rotate(-7deg);" +
        "}" +
        ".all-paths-thumbnail:after{" +
          "content:'ALL THE PATHS · 2026';position:absolute;left:18px;bottom:14px;color:#f4f4f2;font:11px/1.4 'Courier New',monospace;letter-spacing:.12em;" +
        "}" +
        ".artwork-image-new a:hover .all-paths-thumbnail{transform:translateY(-2px);box-shadow:0 7px 18px rgba(0,0,0,.2);}";
      document.head.appendChild(style);
    }

    var isChinese = pageName === "chuangzuo.html";
    var item = document.createElement("div");
    item.id = "all-the-paths-artwork";
    item.className = "artwork-item-new reverse-layout";

    if (isChinese) {
      item.innerHTML =
        '<div class="artwork-image-new">' +
          '<a href="suoyouzhexiedaolu.html" target="_blank" aria-label="打开作品《所有这些道路》详情页">' +
            '<div class="all-paths-thumbnail" role="img" aria-label="《所有这些道路》作品索引图形"></div>' +
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
          '<a href="all-the-paths.html" target="_blank" aria-label="Open All the Paths artwork page">' +
            '<div class="all-paths-thumbnail" role="img" aria-label="Graphic index image for All the Paths"></div>' +
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

  function initializeSiteAdditions() {
    updateEnglishBio();
    addPekingUniversityProgram();
    addPekingUniversityPresentation();
    addEntropyArtPodcast();
    addOriginalRemakeAlgorithmicScreening();
    addAfterimageResidency();
    addCuratorialProjects();
    addAllPathsArtwork();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSiteAdditions);
  } else {
    initializeSiteAdditions();
  }
})();

(function () {
  "use strict";

  var oldEmail = "juntao.yang@columbia.edu";
  var newEmail = "info@juntaoyang.site";

  function replaceContactEmail(root) {
    root = root || document.body;
    if (!root) return;

    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [];
    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue && walker.currentNode.nodeValue.indexOf(oldEmail) !== -1) {
        nodes.push(walker.currentNode);
      }
    }

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].nodeValue = nodes[i].nodeValue.split(oldEmail).join(newEmail);
    }

    var links = root.querySelectorAll ? root.querySelectorAll('a[href^="mailto:"]') : [];
    for (var j = 0; j < links.length; j++) {
      var href = links[j].getAttribute("href") || "";
      if (href.indexOf(oldEmail) !== -1) {
        links[j].setAttribute("href", href.split(oldEmail).join(newEmail));
      }
    }
  }

  function initializeEmailReplacement() {
    replaceContactEmail(document.body);

    if (!document.body || typeof MutationObserver === "undefined") return;
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        for (var j = 0; j < mutations[i].addedNodes.length; j++) {
          var node = mutations[i].addedNodes[j];
          if (node.nodeType === 3) {
            if (node.nodeValue && node.nodeValue.indexOf(oldEmail) !== -1) {
              node.nodeValue = node.nodeValue.split(oldEmail).join(newEmail);
            }
          } else if (node.nodeType === 1) {
            replaceContactEmail(node);
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeEmailReplacement);
  } else {
    initializeEmailReplacement();
  }
})();