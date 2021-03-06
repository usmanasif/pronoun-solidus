function mr_parallax() {
  "use strict";

  function a(a) {
      for (var b = 0; b < a.length; b++)
          if ("undefined" != typeof document.body.style[a[b]])
              return a[b];
      return null
  }

  function b() {
      var a, b = 0;
      return f() ? (b = jQuery(".viu").find("nav:first").outerHeight(!0), a = jQuery(".viu").find("nav:first").css("position"), ("absolute" === a || "fixed" === a) && (b = 0)) : b = jQuery(document).find("nav:first").outerHeight(!0), Math.floor(b)
  }

  function c() {
      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  }

  function d() {
      p === !1 && (p = !0, h(q.mr_parallaxBackground))
  }

  function e(a) {
      var b = {};
      return a && "[object Function]" === b.toString.call(a)
  }

  function f() {
      return "undefined" == typeof window.mr_variant ? !1 : !0
  }
  var g, h = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
      i = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"],
      j = a(i),
      k = "translate3d(0,",
      l = "px,0)",
      m = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      n = 0,
      o = window,
      p = (f(), !1),
      q = this;
  jQuery(document).ready(function() {
          q.documentReady()
      }),
      jQuery(window).on("load", function() {
          q.windowLoad()
      }),
      this.documentReady = function(a) {
          return m = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
              jQuery("body").hasClass("parallax-2d") && (k = "translate(0,", l = "px)"),
              /Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) ? jQuery(".parallax").removeClass("parallax") : h && (q.profileParallaxElements(), q.setupParallax()), e(a) ? void a() : void 0
      }, this.windowLoad = function() {
          m = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), n = b(), window.mr_parallax.profileParallaxElements()
      }, this.setupParallax = function() {
          f() && (o = jQuery(".viu").get(0)), "undefined" != typeof o && (("undefined" == typeof window.mr || f()) && (o.onscroll = d), window.addEventListener("resize", function() {
              m = c(), n = b(), q.profileParallaxElements(), q.mr_parallaxBackground()
          }, !1), q.mr_parallaxBackground())
      }, this.profileParallaxElements = function() {
          g = [], m = c(), n = b();
          var a = ".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder";
          f() && (a = ".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder"), jQuery(a).each(function(a) {
              var b = jQuery(this).closest(".parallax"),
                  c = f() ? b.position().top : b.offset().top;
              g.push({
                  section: b.get(0),
                  outerHeight: b.outerHeight(),
                  elemTop: c,
                  elemBottom: c + b.outerHeight(),
                  isFirstSection: b.is(":nth-of-type(1)") ? !0 : !1,
                  imageHolder: jQuery(this).get(0)
              }), f() ? f() && (b.is(":nth-of-type(1)") ? q.mr_setTranslate3DTransform(jQuery(this).get(0), 0 === q.mr_getScrollPosition() ? 0 : q.mr_getScrollPosition() / 2) : q.mr_setTranslate3DTransform(jQuery(this).get(0), (q.mr_getScrollPosition() - c - n) / 2)) : b.is(":nth-of-type(1)") ? q.mr_setTranslate3DTransform(jQuery(this).get(0), 0 === q.mr_getScrollPosition() ? 0 : q.mr_getScrollPosition() / 2) : q.mr_setTranslate3DTransform(jQuery(this).get(0), (q.mr_getScrollPosition() + m - c) / 2)
          })
      }, this.mr_parallaxBackground = function() {
          for (var a, b = g.length, c = "undefined" == typeof mr || f() ? q.mr_getScrollPosition() : mr.scroll.y; b--;) a = g[b], f() ? c + m - n > a.elemTop && c - n < a.elemBottom && (a.isFirstSection ? a.imageHolder.style[j] = k + c / 2 + l : a.imageHolder.style[j] = k + (c - a.elemTop - n) / 2 + l) : c + m >= a.elemTop && c <= a.elemBottom && (a.isFirstSection ? a.imageHolder.style[j] = k + c / 2 + l : a.imageHolder.style[j] = k + (c + m - a.elemTop) / 2 + l);
          p = !1
      }, this.mr_setTranslate3DTransform = function(a, b) {
          a.style[j] = k + b + l
      }, this.mr_getScrollPosition = function() {
          return o !== window ? o.scrollTop : 0 === document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop
      }
}
window.mr_parallax = new mr_parallax;
