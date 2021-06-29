!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var s = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
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
    }), 2 & t && "string" != typeof e) for (var s in e) n.d(i, s, function (t) {
      return e[t];
    }.bind(null, s));
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
  }, n.p = "", n(n.s = 8);
}([function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    function e(e, t, n) {
      const i = e;
      if (!i) return;
      const s = window.matchMedia(`(min-width:${t}px)`);
      let c;

      const o = function () {
        !0 !== s.matches ? !1 !== s.matches || (c = new Swiper(i, n)) : void 0 !== c && c.destroy(!0, !0);
      };

      s.addListener(o), o();
    }

    const t = document.querySelectorAll(".services-places .services-places__content-box .swiper-container"),
          n = Array.prototype.slice.call(t);
    n.length > 0 && n.forEach(t => {
      e(t, 768, {
        slidesPerView: 1.23,
        spaceBetween: 10
      });
    });
    const i = document.querySelectorAll(".index-price .index-price__content-box .swiper-container"),
          s = Array.prototype.slice.call(i);
    s.length > 0 && s.forEach(t => {
      e(t, 768, {
        slidesPerView: 1.23,
        spaceBetween: 10
      });
    });
    const c = document.getElementById("articleAsideSlider");
    c && e(c, 1200, {
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
    const o = document.getElementById("aboutCertificatesMobSlider");
    o && e(o, 768, {
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
    const e = document.getElementById("header");

    function t() {
      const t = document.documentElement.scrollTop;
      t > 98 && e.classList.add("active"), t < 98 && e.classList.remove("active");
    }

    document.addEventListener("scroll", function () {
      t();
    }), t();
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("indexHeroParallax");

    if (e) {
      const t = document.getElementById("indexHeroDiver"),
            n = document.getElementById("indexHeroFishLeft"),
            i = document.getElementById("indexHeroFishRight"),
            s = 10,
            c = 25,
            o = 15,
            r = .05;
      let a = 0,
          l = 0,
          d = 0,
          u = 0;
      !function e() {
        a += (d - a) * r, l += (u - l) * r, t.style.cssText = `transform: translate(${a / s - 50}%,${l / s - 50}%)`, n.style.cssText = `transform: translate(${-a / c}%,${-l / c}%)`, i.style.cssText = `transform: translate(${-a / o}%,${-l / o}%)`, requestAnimationFrame(e);
      }(), e.addEventListener("mousemove", function (t) {
        const n = e.offsetWidth,
              i = e.offsetHeight,
              s = t.pageX - n / 2,
              c = t.pageY - i / 2;
        d = s / n * 100, u = c / i * 100;
      });
    }
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("indexPrice");

    if (e) {
      const t = e.querySelectorAll(".tabs-box .tab"),
            n = Array.prototype.slice.call(t),
            i = e.querySelectorAll(".services-places__content"),
            s = Array.prototype.slice.call(i);
      n.forEach((e, t) => {
        e.addEventListener("click", function () {
          n.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), s.forEach(e => e.classList.remove("active")), s[t].classList.add("active");
        });
      });
    }

    const t = document.getElementById("indexTeamLeadToggler");

    if (t) {
      const e = document.getElementById("indexTeamLeadText");
      t.addEventListener("click", function () {
        e.classList.contains("open") ? (e.classList.remove("open"), t.textContent = "Подробнее") : (e.classList.add("open"), t.textContent = "Скрыть");
      });
    }

    const n = document.getElementById("indexTeamListSlider");

    if (n) {
      new Swiper(n, {
        watchOverflow: !0,
        pagination: {
          el: "#indexTeamListSliderPagination",
          type: "bullets"
        },
        breakpoints: {
          0: {
            slidesPerView: 1.23,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      });
    }

    const i = document.getElementById("indexPlacesSlider");

    if (i) {
      new Swiper(i, {
        watchOverflow: !0,
        pagination: {
          el: "#indexPlacesSliderPagination",
          type: "bullets"
        },
        navigation: {
          prevEl: "#indexPlacesSliderPrevBtn",
          nextEl: "#indexPlacesSliderNextBtn"
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            centeredSlides: !0,
            loop: !0,
            slidesPerView: 1.53,
            spaceBetween: 30
          },
          1370: {
            centeredSlides: !0,
            loop: !0,
            slidesPerView: 2.3,
            spaceBetween: 30
          }
        }
      });
    }

    const s = document.getElementById("indexTrain");

    if (s) {
      const e = s.querySelectorAll(".tabs-box .tab"),
            t = Array.prototype.slice.call(e),
            n = s.querySelectorAll(".index-train__content"),
            i = Array.prototype.slice.call(n);
      t.forEach((e, n) => {
        e.addEventListener("click", function () {
          t.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), i.forEach(e => e.classList.remove("active")), i[n].classList.add("active");
        });
      });
    }

    const c = document.querySelectorAll(".index-train .index-train__content-box .swiper-container"),
          o = Array.prototype.slice.call(c);
    o.length > 0 && o.forEach(e => {
      const t = e.querySelector(".swiper-pagination");
      new Swiper(e, {
        watchOverflow: !0,
        pagination: {
          el: t,
          type: "bullets"
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
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
      });
    });
    const r = document.getElementById("indexPopupSlider");

    if (r) {
      new Swiper(r, {
        watchOverflow: !0,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: "#indexPopupSliderPagination",
          type: "bullets"
        },
        navigation: {
          prevEl: "#indexPopupSliderPaginationPrev",
          nextEl: "#indexPopupSliderPaginationNext"
        }
      });
    }
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

    function s(e) {
      e.classList.add("open"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    t.addEventListener("click", function () {
      s(e);
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
            s = Array.prototype.slice.call(i);
      n.forEach((e, t) => {
        e.addEventListener("click", function () {
          n.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), s.forEach(e => e.classList.remove("active")), s[t].classList.add("active");
        });
      });
    }

    const t = document.getElementById("servicesTrain");

    if (t) {
      const e = t.querySelectorAll(".tabs-box .tab"),
            n = Array.prototype.slice.call(e),
            i = t.querySelectorAll(".services-train__content-box"),
            s = Array.prototype.slice.call(i);
      n.forEach((e, t) => {
        e.addEventListener("click", function () {
          n.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), s.forEach(e => e.classList.remove("active")), s[t].classList.add("active");
        });
      });
    }
  };
}, function (e, t, n) {
  n(0), n(1), n(2), n(3), n(4), n(9), n(7), n(5), e.exports = n(6);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(5),
      s = n(4),
      c = n(6),
      o = n(0),
      r = n(7),
      a = n(3),
      l = n(1),
      d = n(2);
  document.addEventListener("DOMContentLoaded", function () {
    Object(i.default)(), Object(s.default)(), Object(c.default)(), Object(o.default)(), Object(r.default)(), Object(a.default)(), Object(l.default)(), Object(d.default)();
    let e = document.getElementById("header").offsetHeight;
    document.documentElement.style.setProperty("--header-vh", e + "px");
  });
}]);