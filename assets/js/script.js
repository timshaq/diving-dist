!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var c = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(c.exports, c, c.exports, n), c.l = !0, c.exports;
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
    }), 2 & t && "string" != typeof e) for (var c in e) n.d(i, c, function (t) {
      return e[t];
    }.bind(null, c));
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
  }, n.p = "", n(n.s = 10);
}([function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    function e(e, t, n) {
      const i = e;
      if (!i) return;
      const c = window.matchMedia(`(min-width:${t}px)`);
      let s;

      const o = function () {
        !0 !== c.matches ? !1 !== c.matches || (s = new Swiper(i, n)) : void 0 !== s && s.destroy(!0, !0);
      };

      c.addListener(o), o();
    }

    const t = document.querySelectorAll(".services-places .services-places__content-box .swiper-container"),
          n = Array.prototype.slice.call(t);
    n.length > 0 && n.forEach(t => {
      e(t, 768, {
        breakpoints: {
          0: {
            slidesPerView: 1.23,
            spaceBetween: 10
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      });
    });
    const i = document.querySelectorAll(".index-price .index-price__content-box .swiper-container"),
          c = Array.prototype.slice.call(i);
    c.length > 0 && c.forEach(t => {
      e(t, 768, {
        breakpoints: {
          0: {
            slidesPerView: 1.23,
            spaceBetween: 10
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      });
    });
    const s = document.getElementById("articleAsideSlider");
    s && e(s, 1200, {
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
    const e = document.getElementById("callback-popup");
    if (!e) return;
    const t = e.querySelector(".popup-review__close");

    function n(e) {
      e.classList.remove("open"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function i(e) {
      e.classList.add("open"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    const c = document.querySelectorAll(".callback-btn");
    Array.prototype.slice.call(c).forEach(t => {
      t.addEventListener("click", function () {
        i(e);
      });
    }), t.addEventListener("click", function () {
      n(e);
    }), e.addEventListener("click", function (t) {
      t.target === this && n(e);
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
    const e = document.getElementById("lightgallery");
    e && lightGallery(e, {
      download: !1,
      thumbnail: !0,
      speed: 400,
      mousewheel: !0
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    const e = document.getElementById("indexHeroParallax");

    if (e) {
      const t = document.getElementById("indexHeroDiver"),
            n = document.getElementById("indexHeroFishLeft"),
            i = document.getElementById("indexHeroFishRight"),
            c = 10,
            s = 25,
            o = 15,
            r = .05;
      let a = 0,
          l = 0,
          d = 0,
          u = 0;
      !function e() {
        a += (d - a) * r, l += (u - l) * r, t.style.cssText = `transform: translate(${a / c - 50}%,${l / c - 50}%)`, n.style.cssText = `transform: translate(${-a / s}%,${-l / s}%)`, i.style.cssText = `transform: translate(${-a / o}%,${-l / o}%)`, requestAnimationFrame(e);
      }(), e.addEventListener("mousemove", function (t) {
        const n = e.offsetWidth,
              i = e.offsetHeight,
              c = t.pageX - n / 2,
              s = t.pageY - i / 2;
        d = c / n * 100, u = s / i * 100;
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
            c = Array.prototype.slice.call(i);
      n.forEach((e, t) => {
        e.addEventListener("click", function () {
          n.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), c.forEach(e => e.classList.remove("active")), c[t].classList.add("active");
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
          576: {
            slidesPerView: 3,
            spaceBetween: 30
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

    const c = document.getElementById("indexTrain");

    if (c) {
      const e = c.querySelectorAll(".tabs-box .tab"),
            t = Array.prototype.slice.call(e),
            n = c.querySelectorAll(".index-train__content"),
            i = Array.prototype.slice.call(n);
      t.forEach((e, n) => {
        e.addEventListener("click", function () {
          t.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), i.forEach(e => e.classList.remove("active")), i[n].classList.add("active");
        });
      });
    }

    const s = document.querySelectorAll(".index-train .index-train__content-box .swiper-container"),
          o = Array.prototype.slice.call(s);
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

    function c(e) {
      e.classList.add("open"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    t.addEventListener("click", function () {
      c(e);
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
        576: {
          slidesPerView: 2,
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
          576: {
            slidesPerView: 2,
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
            c = Array.prototype.slice.call(i);
      n.forEach((e, t) => {
        e.addEventListener("click", function () {
          n.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), c.forEach(e => e.classList.remove("active")), c[t].classList.add("active");
        });
      });
    }

    const t = document.getElementById("servicesPlaces2");

    if (t) {
      const e = t.querySelectorAll(".tabs-box .tab"),
            n = Array.prototype.slice.call(e),
            i = t.querySelectorAll(".services-places__content"),
            c = Array.prototype.slice.call(i);
      n.forEach((e, t) => {
        e.addEventListener("click", function () {
          n.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), c.forEach(e => e.classList.remove("active")), c[t].classList.add("active");
        });
      });
    }

    const n = document.getElementById("servicesTrain");

    if (n) {
      const e = n.querySelectorAll(".tabs-box .tab"),
            t = Array.prototype.slice.call(e),
            c = n.querySelectorAll(".services-train__content-box"),
            s = Array.prototype.slice.call(c);
      t.forEach((e, n) => {
        e.addEventListener("click", function () {
          t.forEach(e => e.classList.remove("tab-active")), e.classList.add("tab-active"), s.forEach(e => e.classList.remove("active")), s[n].classList.add("active");
        });
      });
      const o = document.querySelector('.services-train__content-box[data-tab="1"]'),
            r = document.querySelector('.services-train__content-box[data-tab="2"]');

      function i(e) {
        const t = e.querySelectorAll(".services-train__offers-btn"),
              n = Array.prototype.slice.call(t),
              i = e.querySelectorAll(".services-train-content"),
              c = Array.prototype.slice.call(i);
        n.forEach(t => {
          const i = t.getAttribute("data-content-id");
          t.addEventListener("click", function () {
            const s = e.querySelector(`.services-train-content[data-content-id="${i}"]`);
            c.forEach(e => e.classList.remove("active")), n.forEach(e => e.classList.remove("active")), s.classList.add("active"), t.classList.add("active");
          });
        });
      }

      i(o), i(r);
    }
  };
}, function (e, t, n) {
  n(0), n(1), n(2), n(3), n(4), n(5), n(6), n(11), n(9), n(7), e.exports = n(8);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(7),
      c = n(6),
      s = n(8),
      o = n(0),
      r = n(9),
      a = n(5),
      l = n(2),
      d = n(4),
      u = n(1),
      p = n(3);
  document.addEventListener("DOMContentLoaded", function () {
    Object(i.default)(), Object(c.default)(), Object(s.default)(), Object(o.default)(), Object(r.default)(), Object(a.default)(), Object(l.default)(), Object(d.default)(), Object(u.default)(), Object(p.default)();
    let e = document.getElementById("header").offsetHeight;
    document.documentElement.style.setProperty("--header-vh", e + "px");
  });
}]);