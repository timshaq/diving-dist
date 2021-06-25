!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
      return e[t];
    }.bind(null, r));
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 5);
}([function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    function e(e, t, n) {
      const i = e;
      if (!i) return;
      const r = window.matchMedia(`(min-width:${t}px)`);
      let s;

      const c = function () {
        !0 !== r.matches ? !1 !== r.matches || (s = new Swiper(i, n)) : void 0 !== s && s.destroy(!0, !0);
      };

      r.addListener(c), c();
    }

    const t = document.querySelectorAll(".services-places .services-places__content-box .swiper-container"),
          n = Array.prototype.slice.call(t);
    n.length > 0 && n.forEach(t => {
      e(t, 768, {
        slidesPerView: 1.23,
        spaceBetween: 10
      });
    });
    const i = document.getElementById("articleAsideSlider");
    i && e(i, 1200, {
      breakpoints: {
        0: {
          slidesPerView: 1.23,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    });
    const r = document.getElementById("aboutCertificatesMobSlider");
    r && e(r, 768, {
      pagination: {
        el: "#aboutCertificatesMobSliderPagination",
        type: "bullets"
      },
      slidesPerView: 1,
      spaceBetween: 10
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("menu"),
          t = document.getElementById("burgerBtn"),
          n = document.getElementById("menuCloseBtn");

    function i(e) {
      e.classList.remove("open"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function r(e) {
      e.classList.add("open"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    t.addEventListener("click", function () {
      r(e);
    }), n.addEventListener("click", function () {
      i(e);
    }), e.addEventListener("click", function (t) {
      const n = document.documentElement.offsetWidth;
      t.target === this && n > 767 && (i(e), console.log("true"));
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    new Swiper("#indexHeroSlider", {
      navigation: {
        nextEl: "#indexHeroSliderNextBtn",
        prevEl: "#indexHeroSliderPrevBtn"
      },
      pagination: {
        el: "#indexHeroSliderPagination",
        type: "fraction"
      },
      slidesPerView: 1,
      spaceBetween: 10
    }), new Swiper("#servicesTripSlider", {
      pagination: {
        el: "#servicesTripSliderPagination",
        type: "bullets"
      },
      watchOverflow: !0,
      breakpoints: {
        0: {
          slidesPerView: 1.23,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    }), new Swiper("#indexBlogSlider", {
      watchOverflow: !0,
      breakpoints: {
        0: {
          slidesPerView: 1.23,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    }), new Swiper("#indexReviewsSlider", {
      pagination: {
        el: "#indexReviewsSliderPagination",
        type: "bullets"
      },
      watchOverflow: !0,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    });
    const e = document.querySelectorAll(".services-train .services-train__content-box .services-train__offers-list .swiper-container");
    Array.prototype.slice.call(e).forEach(e => {
      console.log(e);
      new Swiper(e, {
        mousewheel: !0,
        speed: 1e3,
        autoplay: {
          delay: 3e3
        },
        disableOnInteraction: !1,
        waitForTransition: !0,
        breakpoints: {
          0: {
            slidesPerView: 1.145,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.326,
            spaceBetween: 20
          },
          1200: {
            direction: "vertical",
            slidesPerGroup: 5,
            slidesPerView: 5,
            spaceBetween: 20
          }
        }
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = [44.561012, 38.077115];
    if (!document.getElementById("contactsMap")) return;
    ymaps.ready(function () {
      var t = new ymaps.Map("contactsMap", {
        center: e,
        zoom: 17
      }),
          n = new ymaps.Placemark(e, {}, {
        iconLayout: "default#image",
        iconImageHref: "assets/img/yamap-tag.png",
        iconImageSize: [28, 36],
        iconImageOffset: [-36, -36]
      });
      t.geoObjects.add(n);
    });
    document.getElementById("contactsMapList"), document.getElementById("contactsMapBox");
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("servicesPlaces");

    if (e) {
      const t = e.querySelectorAll(".tabs-box .tab"),
            n = Array.prototype.slice.call(t),
            i = e.querySelectorAll(".services-places__content"),
            r = Array.prototype.slice.call(i);
      n.forEach((e, t) => {
        e.addEventListener("click", function () {
          n.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), r.forEach(e => e.classList.remove("active")), r[t].classList.add("active");
        });
      });
    }

    const t = document.getElementById("servicesTrain");

    if (t) {
      const e = t.querySelectorAll(".tabs-box .tab"),
            n = Array.prototype.slice.call(e),
            i = t.querySelectorAll(".services-train__content-box"),
            r = Array.prototype.slice.call(i);
      n.forEach((e, t) => {
        e.addEventListener("click", function () {
          n.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), r.forEach(e => e.classList.remove("active")), r[t].classList.add("active");
        });
      });
    }
  };
}, function (e, t, n) {
  n(0), n(1), n(6), n(4), n(2), e.exports = n(3);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(2),
      r = n(1),
      s = n(3),
      c = n(0),
      o = n(4);
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header");
    Object(i.default)(), Object(r.default)(), Object(s.default)(), Object(c.default)(), Object(o.default)();
  });
}]);