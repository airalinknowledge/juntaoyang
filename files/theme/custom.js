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
        '<div class="faculty-list">结业证书；42课时</div>';
    } else {
      item.innerHTML =
        'Advanced Seminar, “Frontiers in Western Literary Theory: Interpretation and Critique,” School of Arts, Peking University, 2026' +
        '<div class="faculty-list">Certificate of Completion; 42 contact hours</div>';
    }

    institutes.insertBefore(item, institutes.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addPekingUniversityProgram);
  } else {
    addPekingUniversityProgram();
  }
})();