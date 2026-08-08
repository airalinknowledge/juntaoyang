(function () {
  "use strict";

  if (window.__juntaoGeologyContoursLoaded) return;
  window.__juntaoGeologyContoursLoaded = true;

  function installLayerStyles(layer) {
    layer.id = layer.id || "site-geology-layer";
    layer.setAttribute("aria-hidden", "true");
    layer.style.position = "fixed";
    layer.style.top = "0";
    layer.style.right = "0";
    layer.style.width = "45vw";
    layer.style.height = "100vh";
    layer.style.zIndex = "0";
    layer.style.pointerEvents = "none";
    layer.style.opacity = "0.8";
    layer.style.mixBlendMode = "multiply";
    layer.style.background = "transparent";
    layer.style.backgroundImage = "none";
    layer.style.overflow = "hidden";
    layer.style.maskImage = "linear-gradient(to right, transparent 0%, black 60%)";
    layer.style.webkitMaskImage = "linear-gradient(to right, transparent 0%, black 60%)";
  }

  function ensureLayer() {
    var layer = document.querySelector(
      "#geology-layer, #site-geology-layer, .about-geology, .artworks-geology, .writings-geology, .projects-geology, .posts-geology"
    );

    if (!layer) {
      layer = document.createElement("div");
      layer.id = "site-geology-layer";
      document.body.insertBefore(layer, document.body.firstChild);
    }

    installLayerStyles(layer);

    var style = document.getElementById("site-geology-runtime-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "site-geology-runtime-style";
      style.textContent =
        "@media(max-width:768px){#site-geology-layer,#geology-layer,.about-geology,.artworks-geology,.writings-geology,.projects-geology,.posts-geology{display:none!important;}}" +
        "body.all-paths-static-page #wrapper{background:transparent!important;position:relative;z-index:2;}" +
        "body.all-paths-static-page #main{background:transparent!important;}" +
        "body.all-paths-static-page{background:#f4f4f2!important;}";
      document.head.appendChild(style);
    }

    return layer;
  }

  function startSketch() {
    if (!window.p5 || window.innerWidth <= 768) return;

    var layer = ensureLayer();
    if (!layer || layer.getAttribute("data-geology-ready") === "1") return;
    layer.setAttribute("data-geology-ready", "1");
    layer.innerHTML = "";

    new window.p5(function (p) {
      var field = [];
      var REZ = 8;
      var ACCENT_COLOR;

      p.setup = function () {
        var w = Math.max(1, layer.offsetWidth);
        var h = Math.max(1, layer.offsetHeight);
        var cnv = p.createCanvas(w, h);
        cnv.parent(layer);

        p.noLoop();
        p.cols = 1 + Math.ceil(w / REZ);
        p.rows = 1 + Math.ceil(h / REZ);

        for (var i = 0; i < p.cols; i++) {
          field[i] = new Float32Array(p.rows);
        }

        ACCENT_COLOR = p.color(58, 75, 92);
        p.strokeJoin(p.ROUND);
        p.noFill();
        generateGeology();
      };

      function generateGeology() {
        p.clear();
        var zOff = p.random(100);

        for (var i = 0; i < p.cols; i++) {
          for (var j = 0; j < p.rows; j++) {
            var x = i * REZ;
            var y = j * REZ;
            field[i][j] = p.noise(x * 0.003, y * 0.003, zOff);
          }
        }

        p.strokeWeight(1.4);
        var numIsolines = 90;

        for (var i = 0; i < p.cols - 1; i++) {
          for (var j = 0; j < p.rows - 1; j++) {
            var x = i * REZ;
            var y = j * REZ;

            var valTL = field[i][j];
            var valTR = field[i + 1][j];
            var valBR = field[i + 1][j + 1];
            var valBL = field[i][j + 1];

            var minLvl = Math.floor(Math.min(valTL, valTR, valBR, valBL) * numIsolines);
            var maxLvl = Math.floor(Math.max(valTL, valTR, valBR, valBL) * numIsolines);

            if (maxLvl > minLvl) {
              for (var k = minLvl + 1; k <= maxLvl; k++) {
                var threshold = k / numIsolines;
                var alpha = p.map(i, 0, p.cols, 0, 40);
                ACCENT_COLOR.setAlpha(alpha);
                p.stroke(ACCENT_COLOR);

                var state = getState(valTL, valTR, valBR, valBL, threshold);
                var a = p.createVector(x + REZ * safeRatio(threshold - valTL, valTR - valTL), y);
                var b = p.createVector(x + REZ, y + REZ * safeRatio(threshold - valTR, valBR - valTR));
                var c = p.createVector(x + REZ * safeRatio(threshold - valBL, valBR - valBL), y + REZ);
                var d = p.createVector(x, y + REZ * safeRatio(threshold - valTL, valBL - valTL));

                switch (state) {
                  case 1: drawLine(c, d); break;
                  case 2: drawLine(b, c); break;
                  case 3: drawLine(b, d); break;
                  case 4: drawLine(a, b); break;
                  case 5: drawLine(a, d); drawLine(b, c); break;
                  case 6: drawLine(a, c); break;
                  case 7: drawLine(a, d); break;
                  case 8: drawLine(a, d); break;
                  case 9: drawLine(a, c); break;
                  case 10: drawLine(a, b); drawLine(c, d); break;
                  case 11: drawLine(a, b); break;
                  case 12: drawLine(b, d); break;
                  case 13: drawLine(b, c); break;
                  case 14: drawLine(c, d); break;
                }
              }
            }
          }
        }
      }

      function safeRatio(numerator, denominator) {
        if (!isFinite(denominator) || Math.abs(denominator) < 0.000001) return 0.5;
        var value = numerator / denominator;
        if (!isFinite(value)) return 0.5;
        return Math.max(0, Math.min(1, value));
      }

      function getState(tl, tr, br, bl, t) {
        return (tl >= t ? 8 : 0) + (tr >= t ? 4 : 0) + (br >= t ? 2 : 0) + (bl >= t ? 1 : 0);
      }

      function drawLine(v1, v2) {
        p.line(v1.x, v1.y, v2.x, v2.y);
      }

      p.windowResized = function () {
        if (window.innerWidth <= 768) return;
        var w = Math.max(1, layer.offsetWidth);
        var h = Math.max(1, layer.offsetHeight);
        p.resizeCanvas(w, h);
        p.cols = 1 + Math.ceil(w / REZ);
        p.rows = 1 + Math.ceil(h / REZ);
        field = [];
        for (var i = 0; i < p.cols; i++) {
          field[i] = new Float32Array(p.rows);
        }
        generateGeology();
      };
    });
  }

  function loadP5() {
    if (window.innerWidth <= 768) return;
    ensureLayer();

    if (window.p5) {
      startSketch();
      return;
    }

    var existing = document.getElementById("site-geology-p5");
    if (existing) {
      existing.addEventListener("load", startSketch, {once:true});
      return;
    }

    var script = document.createElement("script");
    script.id = "site-geology-p5";
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
    script.async = true;
    script.onload = startSketch;
    document.head.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadP5, {once:true});
  } else {
    loadP5();
  }
})();
