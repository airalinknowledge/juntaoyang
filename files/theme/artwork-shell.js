(function () {
  "use strict";

  var page = window.location.pathname.split("/").pop() || "index.html";
  var artworkPages = [
    "the-weight-lost.html",
    "you-can-hardly-see.html",
    "naked-wounds-and-the-abandoned.html",
    "light-and-cold-conversation-atlantic-algorithmic-and-visibility.html",
    "herbary-co-respiration.html",
    "all-the-paths.html",
    "suoyouzhexiedaolu.html"
  ];

  if (artworkPages.indexOf(page) === -1) return;

  document.documentElement.classList.add("unified-artwork-page");
  if (document.body) document.body.classList.add("unified-artwork-page");

  function installShell() {
    if (!document.body) return;
    document.body.classList.add("unified-artwork-page");

    if (!document.getElementById("artwork-shell-noise")) {
      var noise = document.createElement("div");
      noise.id = "artwork-shell-noise";
      noise.setAttribute("aria-hidden", "true");
      document.body.insertBefore(noise, document.body.firstChild);
    }

    if (!document.getElementById("artwork-shell-geology")) {
      var geology = document.createElement("div");
      geology.id = "artwork-shell-geology";
      geology.setAttribute("aria-hidden", "true");
      document.body.insertBefore(geology, document.body.firstChild);
    }

    if (document.getElementById("artwork-shell-style")) return;

    var style = document.createElement("style");
    style.id = "artwork-shell-style";
    style.textContent = `
      :root {
        --art-bg-paper: #f4f4f2;
        --art-text-ink: #1e1e1e;
        --art-text-meta: #5c5c5c;
        --art-accent-slate: #3A4B5C;
        --art-line-light: #d1d1d1;
        --art-font-serif: Georgia, "Songti SC", SimSun, "Times New Roman", serif;
      }

      html.unified-artwork-page,
      body.unified-artwork-page,
      body.unified-artwork-page #wrapper,
      body.unified-artwork-page #main,
      body.unified-artwork-page #content-wrapper,
      body.unified-artwork-page .wsite-background,
      body.unified-artwork-page .wsite-custom-background,
      body.unified-artwork-page .wsite-section,
      body.unified-artwork-page .wsite-section-content {
        background-color: var(--art-bg-paper) !important;
        background-image: none !important;
        color: var(--art-text-ink) !important;
      }

      body.unified-artwork-page {
        font-family: var(--art-font-serif) !important;
      }

      #artwork-shell-noise {
        position: fixed;
        inset: 0;
        z-index: 50;
        pointer-events: none;
        opacity: .055;
        mix-blend-mode: multiply;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
      }

      #artwork-shell-geology {
        position: fixed;
        top: 0;
        right: 0;
        width: 46vw;
        height: 100vh;
        z-index: 0;
        pointer-events: none;
        opacity: .16;
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 100% 100%;
        mix-blend-mode: multiply;
        -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.2) 30%, #000 78%);
        mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.2) 30%, #000 78%);
        background-image: url("data:image/svg+xml,%3Csvg width='720' height='1200' viewBox='0 0 720 1200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%233A4B5C' stroke-width='1.15' opacity='.8'%3E%3Cpath d='M120 30C310 75 180 150 380 190S670 205 620 310 300 335 310 455 700 505 620 630 245 660 285 790 690 830 610 950 300 990 360 1165'/%3E%3Cpath d='M185 5C340 85 240 145 420 220S650 280 560 365 275 405 345 505 660 550 575 680 330 705 370 810 650 880 545 1010 360 1050 410 1190'/%3E%3Cpath d='M255 0C400 100 330 170 465 250S610 350 510 420 360 480 410 560 610 620 520 735 380 790 430 875 590 930 500 1050 430 1110 455 1200'/%3E%3Cpath d='M55 80C260 100 120 220 315 250S700 250 650 390 180 430 245 570 720 570 650 730 160 760 245 930 695 930 640 1120'/%3E%3Cpath d='M330 20C470 130 390 220 515 305S575 420 490 480 430 560 485 625 565 725 485 810 450 930 505 1010 525 1110 500 1190'/%3E%3C/g%3E%3C/svg%3E");
      }

      body.unified-artwork-page #wrapper,
      body.unified-artwork-page #navigation,
      body.unified-artwork-page #mobile-top,
      body.unified-artwork-page #main,
      body.unified-artwork-page #content-wrapper {
        position: relative;
        z-index: 1;
      }

      body.unified-artwork-page #navigation,
      body.unified-artwork-page #mobile-top {
        background: rgba(244,244,242,.94) !important;
      }

      body.unified-artwork-page .container {
        max-width: 1120px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      body.unified-artwork-page .main-content-area {
        width: 96% !important;
        max-width: 900px !important;
        margin: 0 auto !important;
        padding: 0 !important;
      }

      body.unified-artwork-page .paragraph,
      body.unified-artwork-page #wsite-content p,
      body.unified-artwork-page #wsite-content div.paragraph {
        font-family: var(--art-font-serif) !important;
        color: var(--art-text-ink) !important;
        font-size: 16px !important;
        line-height: 1.8 !important;
      }

      body.unified-artwork-page h1,
      body.unified-artwork-page h2,
      body.unified-artwork-page h3,
      body.unified-artwork-page h4,
      body.unified-artwork-page h5,
      body.unified-artwork-page h6,
      body.unified-artwork-page .wsite-content-title {
        font-family: var(--art-font-serif) !important;
        color: var(--art-text-ink) !important;
      }

      body.unified-artwork-page #wsite-content h2.wsite-content-title,
      body.unified-artwork-page .wsite-content-title {
        font-style: normal !important;
        font-weight: normal !important;
        text-transform: uppercase !important;
        letter-spacing: 2px !important;
        font-size: 82px !important;
        line-height: .92 !important;
        margin: 0 0 52px !important;
        padding: 0 0 12px !important;
        border: 0 !important;
      }

      body.unified-artwork-page .main-content-area > .paragraph:first-of-type {
        margin-bottom: 34px !important;
      }

      body.unified-artwork-page .main-content-area > .paragraph:first-of-type font[size="5"],
      body.unified-artwork-page .main-content-area > .paragraph:first-of-type font[size="6"] {
        font-family: var(--art-font-serif) !important;
        color: var(--art-text-ink) !important;
      }

      body.unified-artwork-page a,
      body.unified-artwork-page a:visited {
        color: var(--art-text-ink) !important;
        text-decoration: none !important;
      }

      body.unified-artwork-page a:hover {
        color: var(--art-accent-slate) !important;
      }

      body.unified-artwork-page .paragraph u {
        text-decoration: none !important;
      }

      body.unified-artwork-page .wsite-menu-default a {
        font-family: var(--art-font-serif) !important;
        font-size: 14px !important;
        line-height: 1.35 !important;
        letter-spacing: 2px !important;
        color: var(--art-text-meta) !important;
        background: transparent !important;
      }

      body.unified-artwork-page .wsite-menu-default a:hover,
      body.unified-artwork-page #active > a,
      body.unified-artwork-page #active a {
        color: var(--art-accent-slate) !important;
        background: transparent !important;
        border-bottom: 2px solid var(--art-accent-slate) !important;
      }

      body.unified-artwork-page img.wsite-image,
      body.unified-artwork-page .galleryImageBorder,
      body.unified-artwork-page .wsite-image img,
      body.unified-artwork-page .imageGallery img {
        border: 0 !important;
        padding: 0 !important;
        box-shadow: none !important;
        background: transparent !important;
      }

      body.unified-artwork-page .wsite-caption,
      body.unified-artwork-page .galleryCaptionInnerText,
      body.unified-artwork-page .fancybox-title {
        font-family: var(--art-font-serif) !important;
        color: var(--art-text-meta) !important;
        font-size: 12px !important;
        line-height: 1.5 !important;
      }

      body.unified-artwork-page hr {
        border: 0 !important;
        border-top: 1px solid var(--art-line-light) !important;
      }

      body.unified-artwork-page #wsite-content iframe,
      body.unified-artwork-page #wsite-content video {
        max-width: 100% !important;
      }

      @media screen and (max-width: 900px) {
        #artwork-shell-geology { width: 55vw; opacity: .11; }
        body.unified-artwork-page .main-content-area { width: 100% !important; max-width: 100% !important; }
        body.unified-artwork-page #wsite-content h2.wsite-content-title,
        body.unified-artwork-page .wsite-content-title { font-size: 62px !important; margin-bottom: 38px !important; }
      }

      @media screen and (max-width: 767px) {
        #artwork-shell-geology { display: none !important; }
        #artwork-shell-noise { opacity: .035; }
        body.unified-artwork-page .container { width: auto !important; padding-left: 20px !important; padding-right: 20px !important; }
        body.unified-artwork-page .main-content-area { padding: 0 !important; }
        body.unified-artwork-page #wsite-content h2.wsite-content-title,
        body.unified-artwork-page .wsite-content-title {
          font-size: 46px !important;
          line-height: 1 !important;
          letter-spacing: 1px !important;
          margin-bottom: 30px !important;
        }
        body.unified-artwork-page .paragraph,
        body.unified-artwork-page #wsite-content p,
        body.unified-artwork-page #wsite-content div.paragraph {
          font-size: 15px !important;
          line-height: 1.75 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installShell);
  } else {
    installShell();
  }
})();
