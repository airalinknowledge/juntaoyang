(function () {
  "use strict";
  var oldEmail = "juntao.yang@columbia.edu";
  var newEmail = "info@juntaoyang.site";

  function replaceContactEmail(root) {
    root = root || document.body;
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var matches = [];
    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue && walker.currentNode.nodeValue.indexOf(oldEmail) !== -1) matches.push(walker.currentNode);
    }
    for (var i = 0; i < matches.length; i++) matches[i].nodeValue = matches[i].nodeValue.split(oldEmail).join(newEmail);
    var links = root.querySelectorAll ? root.querySelectorAll('a[href^="mailto:"]') : [];
    for (var j = 0; j < links.length; j++) {
      var href = links[j].getAttribute("href") || "";
      if (href.indexOf(oldEmail) !== -1) links[j].setAttribute("href", href.split(oldEmail).join(newEmail));
    }
  }

  function init() {
    replaceContactEmail(document.body);
    if (!document.body || typeof MutationObserver === "undefined") return;
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        for (var j = 0; j < mutations[i].addedNodes.length; j++) {
          var node = mutations[i].addedNodes[j];
          if (node.nodeType === 3 && node.nodeValue && node.nodeValue.indexOf(oldEmail) !== -1) node.nodeValue = node.nodeValue.split(oldEmail).join(newEmail);
          else if (node.nodeType === 1) replaceContactEmail(node);
        }
      }
    });
    observer.observe(document.body, {childList:true, subtree:true});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
