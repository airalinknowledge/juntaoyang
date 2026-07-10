(function () {
  "use strict";

  function addPekingUniversityProgram() {
    var institutes = document.getElementById("institutes");
    if (!institutes || document.getElementById("pku-western-theory-program")) {
      return;
    }

    var pageName = window.location.pathname.split("/").pop() || "index.html";
    var isChinese = pageName === "guanyu.html";

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addPekingUniversityProgram);
  } else {
    addPekingUniversityProgram();
  }
})();
