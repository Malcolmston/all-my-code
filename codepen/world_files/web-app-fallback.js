
// @copyright
//   © 2012-2022 Jarosław Foksa

"use strict";

(function() {
  var isSupportedBrowser = (
    window.customElements                        !== undefined &&
    window.customElements.define                 !== undefined &&
    window.requestIdleCallback                   !== undefined &&
    window.Animation                             !== undefined &&
    window.CSSStyleSheet                         !== undefined &&
    window.CSSStyleSheet.prototype.replaceSync   !== undefined &&
    window.DOMPoint                              !== undefined &&
    window.DOMRect                               !== undefined &&
    window.HTMLDialogElement                     !== undefined &&
    window.HTMLDialogElement.prototype.showModal !== undefined &&
    window.MutationObserver                      !== undefined &&
    window.PointerEvent                          !== undefined &&
    window.ResizeObserver                        !== undefined &&
    window.ShadowRoot                            !== undefined &&
    window.CSS                                   !== undefined &&
    window.CSS.supports("color", "var(--test)")                &&
    window.CSS.supports("d", "path('M 0 0 H 10')")
  );

  if (isSupportedBrowser === false) {
    window.location.replace("/requirements");
  }
  else {
    if (window.argv === undefined) {
      window.argv = [];
    }

    window.addEventListener("load", function(event) {
      if (navigator.serviceWorker) {
        navigator.serviceWorker.register("/workers/service.js", {scope: "/app"});
      }
    });
  }
})();
