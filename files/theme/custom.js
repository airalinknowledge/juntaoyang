(function () {
  "use strict";

  function isChinesePage() {
    var pageName = window.location.pathname.split("/").pop() || "index.html";
    return pageName === "guanyu.html";
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
        '<div class="faculty-list">主题发言：“物之媒介与媒介之物：自然、地质及其他隐喻”</div>' +
        '<div class="faculty-list">授课教师：朱国华、李洋、吴冠军、蓝江、姜宇辉、夏莹、段吉方、周计武、王嘉军、李修建、李科林、卢文超、张颖、吴娱玉、董树宝、李三达、林云柯</div>';
    } else {
      item.innerHTML =
        'Advanced Seminar, “Frontiers in Western Literary Theory: Interpretation and Critique,” Peking University, School of Arts, 2026' +
        '<div class="faculty-list">Presentation: “The Media of Things and the Things of Media: Nature, Geology, and Other Metaphors”</div>' +
        '<div class="faculty-list">With: Zhu Guohua, Li Yang, Wu Guanjun, Lan Jiang, Jiang Yuhui, Xia Ying, Duan Jifang, Zhou Jiwu, Wang Jiajun, Li Xiujian, Li Kelin, Lu Wenchao, Zhang Ying, Wu Yuyu, Dong Shubao, Li Sanda, Lin Yunke</div>';
    }

    institutes.insertBefore(item, institutes.firstChild);
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

  function initializeHomepageAdditions() {
    addPekingUniversityProgram();
    addCuratorialProjects();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeHomepageAdditions);
  } else {
    initializeHomepageAdditions();
  }
})();