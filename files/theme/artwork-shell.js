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

  function installShell() {
    if (!document.body || document.getElementById("artwork-shell-style")) return;

    document.body.classList.add("unified-artwork-page");

    var style = document.createElement("style");
    style.id = "artwork-shell-style";
    style.textContent = `
      html,
      body.unified-artwork-page,
      body.unified-artwork-page #wrapper,
      body.unified-artwork-page #main,
      body.unified-artwork-page #content-wrapper,
      body.unified-artwork-page .wsite-section,
      body.unified-artwork-page .wsite-section-content,
      body.unified-artwork-page .wsite-custom-background {
        background-color: #f4f4f2 !important;
        background-image: none !important;
        color: #1e1e1e !important;
      }

      body.unified-artwork-page {
        font-family: Georgia, "Songti SC", SimSun, "Times New Roman", serif !important;
      }

      body.unified-artwork-page .main-content-area {
        width: 98% !important;
        max-width: 900px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      body.unified-artwork-page .paragraph,
      body.unified-artwork-page #wsite-content p,
      body.unified-artwork-page #wsite-content div.paragraph {
        font-family: Georgia, "Songti SC", SimSun, "Times New Roman", serif !important;
        color: #1e1e1e !important;
        font-size: 16px !important;
        line-height: 1.8 !important;
      }

      body.unified-artwork-page #wsite-content h2.wsite-content-title,
      body.unified-artwork-page .wsite-content-title {
        font-family: Georgia, "Songti SC", SimSun, "Times New Roman", serif !important;
        color: #1e1e1e !important;
        font-style: normal !important;
        font-weight: normal !important;
        text-transform: uppercase !important;
        letter-spacing: 2px !important;
        font-size: 100px !important;
        line-height: 75px !important;
        margin-bottom: 2rem !important;
        padding-bottom: 0 !important;
        border: 0 !important;
      }

      body.unified-artwork-page a,
      body.unified-artwork-page a:visited {
        color: #1e1e1e !important;
        text-decoration: none !important;
      }

      body.unified-artwork-page a:hover {
        color: #3A4B5C !important;
      }

      body.unified-artwork-page .paragraph u {
        text-decoration: none !important;
      }

      body.unified-artwork-page .wsite-menu-default a {
        font-family: "Cardo", Georgia, serif !important;
        font-size: 14px !important;
        letter-spacing: 2px !important;
        text-transform: uppercase !important;
        color: #5c5c5c !important;
        background: transparent !important;
      }

      body.unified-artwork-page .wsite-menu-default a:hover,
      body.unified-artwork-page #active > a,
      body.unified-artwork-page #active a {
        color: #3A4B5C !important;
        background: transparent !important;
        border-bottom: 2px solid #3A4B5C !important;
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
        font-family: Georgia, "Songti SC", SimSun, "Times New Roman", serif !important;
        color: #5c5c5c !important;
      }

      .all-paths-full-intro-extra {
        font-family: Georgia, "Songti SC", SimSun, "Times New Roman", serif !important;
        color: #282828 !important;
        font-size: 15px !important;
        line-height: 1.82 !important;
        letter-spacing: 0 !important;
        background: transparent !important;
      }
      .all-paths-full-intro-extra p {
        margin: 0 !important;
        padding: 0 !important;
        font: inherit !important;
        line-height: inherit !important;
        color: inherit !important;
      }
      .all-paths-full-intro-3 { grid-column: 2 / span 6 !important; margin: 54px 0 26px !important; }
      .all-paths-full-intro-4 { grid-column: 7 / span 6 !important; margin: 68px 0 22px !important; }
      .all-paths-full-intro-5 { grid-column: 2 / span 7 !important; margin: 58px 0 18px !important; }

      @media screen and (max-width: 991px) {
        body.unified-artwork-page .main-content-area {
          width: 100% !important;
          max-width: 900px !important;
        }

        body.unified-artwork-page #wsite-content h2.wsite-content-title,
        body.unified-artwork-page .wsite-content-title {
          font-size: 62px !important;
          line-height: 1 !important;
        }

        .all-paths-full-intro-extra {
          grid-column: 1 / -1 !important;
          max-width: 620px !important;
          margin: 24px auto 30px !important;
        }
      }

      @media screen and (max-width: 767px) {
        body.unified-artwork-page .main-content-area {
          max-width: 100% !important;
        }

        body.unified-artwork-page #wsite-content h2.wsite-content-title,
        body.unified-artwork-page .wsite-content-title {
          font-size: 46px !important;
          line-height: 1 !important;
          letter-spacing: 1px !important;
        }

        body.unified-artwork-page .paragraph,
        body.unified-artwork-page #wsite-content p,
        body.unified-artwork-page #wsite-content div.paragraph {
          font-size: 15px !important;
          line-height: 1.75 !important;
        }

        .all-paths-full-intro-extra {
          grid-column: 1 / -1 !important;
          max-width: none !important;
          margin: 22px 0 30px !important;
          font-size: 14px !important;
          line-height: 1.8 !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function addFullAllPathsIntroduction() {
    if (page !== "all-the-paths.html" && page !== "suoyouzhexiedaolu.html") return false;

    var gallery = document.getElementById("all-the-paths-gallery");
    if (!gallery || document.getElementById("all-paths-full-intro-3")) return !!gallery;

    var items = gallery.querySelectorAll(".all-paths-gallery-item");
    if (items.length < 18) return false;

    var isChinese = page === "suoyouzhexiedaolu.html";
    var english = [
      "The factory complex stands in Shiwan, at the northern edge of the Pearl River Delta alluvial plain. The surrounding hills contain abundant hill sand (gangsha) and clay; tributaries of the Dongping River crisscross the area, their bed silt rich in metal oxides, while riverbank shells and mulberry-branch ash can be blended into glazes. Over the longue durée, these geological endowments established a basic fact: this was a place suited to firing ceramics, and one in which it was almost impossible not to do so. Pottery making in Shiwan can be traced to the late Neolithic period, and by the Song dynasty it had become an important ceramic-production center in Lingnan. Over centuries of continuous extraction, Shiwan’s hills have gradually been hollowed out: hill sand was quarried away, river mud dredged up, shells burned to ash. The geological substrate has been dispersed, in the form of ceramic products, across architectural surfaces and bathrooms throughout the Pearl River Delta and around the world.",
      "The site was formerly Dongpeng Sanitary Ware Plant No. 2. Its predecessor, the Foshan Civil Affairs Comprehensive Factory, was founded in 1972 and later passed through a phase as the Dongping Ceramics Factory before developing into one of the country’s largest producers of architectural ceramics and sanitary ware. The toilets, washbasins, bathtubs, and other sanitary ceramics manufactured here were, in a material sense, standardized carriers of modern notions of hygiene: an entire discourse of bodily cleanliness, spatial separation, and civilizing discipline was vitrified by kiln temperatures above 1,200°C into white-glazed ceramic objects and distributed en masse into countless households. The closure of Plant No. 2 was not an isolated event, but part of the large-scale restructuring of Foshan’s ceramics industry launched around 2007. Under the banner of “emptying the cage to change the bird” (tenglong huanniao), roughly ninety ceramic enterprises in Chancheng District were required, within a fixed deadline, to close, relocate, or convert production; firms relocating from Chancheng alone purchased more than 30,000 mu of production land outside Foshan.",
      "Historically industrial cities are not characterized by a temporality of progress. On the contrary, they are marked by repeated withdrawal, migration, and decline. Prosperous industrial districts deteriorate as industries are upgraded; populations and capital move elsewhere, leaving residues behind. Yet these residues never disappear completely. They retain unexpected forms of agency and return at untimely moments."
    ];
    var chinese = [
      "厂区所在的石湾地处珠江三角洲冲积平原北缘，周边丘陵蕴藏丰富的岗砂与黏土，东平河支流密布，河底淤泥富含金属氧化物，河滩贝壳与桑枝灰可混炼成釉。这些地质赋存条件在长时段中决定了一个基本事实，即此地适合烧陶，且几乎不可能不烧陶。石湾的制陶史可追溯至新石器时代晚期，至宋代已成为岭南重要的陶瓷生产基地。石湾的丘陵已在数百年的持续开采中被逐步掏空，岗砂被取走，河泥被挖出，贝壳被烧烬成灰；地质基底以陶瓷制品的形式离散地分布到了珠三角乃至全球的建筑表面和卫生间里。",
      "厂区原为东鹏洁具二厂，其前身是1972年成立的佛山民政综合厂，后经东平陶瓷厂阶段发展为全国规模最大的建筑陶瓷与卫浴洁具生产企业之一。该厂生产的马桶、洗手盆、浴缸等卫生陶瓷，在物质意义上是现代卫生观念的标准化载体：一整套关于身体清洁、空间分隔与文明规训的话语，经由1200°C以上的窑火被凝固为白色釉面的陶瓷制品，批量进入千家万户。洁具二厂的停产并非孤立事件，而是佛山市自2007年前后推行的大规模陶瓷产业整治的结果。以“腾笼换鸟”为名，禅城区约九十家陶瓷企业须在限期内关闭、外迁或转产，仅禅城区外迁企业便在佛山以外购置了三万余亩生产用地。",
      "在历史上工业发达的城市并不以进步的时间性为其特征。相反，它们以不断的撤离、迁徙和衰退为特征。繁荣的工业区块随着产业升级而走向衰败，人口和资本迁移向其他地方，并留下残余物，而这些残余物始终并未彻底消亡，而是留下意想不到的能动性，在不合时宜的时刻回归。"
    ];

    var texts = isChinese ? chinese : english;
    var afterIndexes = [13, 15, 17];

    for (var i = 0; i < texts.length; i++) {
      var block = document.createElement("div");
      block.id = "all-paths-full-intro-" + (i + 3);
      block.className = "all-paths-full-intro-extra all-paths-full-intro-" + (i + 3);
      var p = document.createElement("p");
      p.textContent = texts[i];
      block.appendChild(p);

      var anchor = items[afterIndexes[i]];
      if (anchor && anchor.nextSibling) gallery.insertBefore(block, anchor.nextSibling);
      else gallery.appendChild(block);
    }

    return true;
  }

  function installAll() {
    installShell();

    if (page === "all-the-paths.html" || page === "suoyouzhexiedaolu.html") {
      var tries = 0;
      var timer = setInterval(function () {
        tries++;
        if (addFullAllPathsIntroduction() || tries > 40) clearInterval(timer);
      }, 100);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installAll);
  } else {
    installAll();
  }
})();
