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
      "fabu.html"
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

  function initializeSiteAdditions() {
    updateEnglishBio();
    addPekingUniversityProgram();
    addPekingUniversityPresentation();
    addEntropyArtPodcast();
    addOriginalRemakeAlgorithmicScreening();
    addAfterimageResidency();
    addCuratorialProjects();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSiteAdditions);
  } else {
    initializeSiteAdditions();
  }
})();