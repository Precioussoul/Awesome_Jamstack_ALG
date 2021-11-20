!(function (t) {
  "use strict";
  navigator.userAgent.indexOf("Firefox") > -1 &&
    t("body").addClass("is-firefox");
  var e = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ].some((t) => navigator.userAgent.match(t));
  if (
    (console.log(e),
    e && t("body").addClass("is-mobile"),
    t("body").hasClass("tt-transition"))
  ) {
    t(window).on("load", function () {
      setTimeout(function () {
        !(function () {
          var e = gsap.timeline();
          e.to(".ptr-preloader", {
            duration: 1.5,
            autoAlpha: 0,
            ease: Expo.easeInOut,
          }),
            e.to(
              ".ptr-overlay",
              {
                duration: 1.5,
                scaleY: 0,
                transformOrigin: "center top",
                ease: Expo.easeInOut,
              },
              0.3
            ),
            e.from(
              "#tt-header",
              {
                duration: 1.5,
                y: 20,
                autoAlpha: 0,
                ease: Expo.easeInOut,
                clearProps: "all",
              },
              0.6
            ),
            t(".ph-image").length &&
              (t("#page-header").hasClass("ph-bg-image")
                ? e.from(
                    ".ph-image img, .ph-video",
                    {
                      duration: 2,
                      y: 80,
                      autoAlpha: 0,
                      stagger: 0.3,
                      ease: Expo.easeOut,
                      clearProps: "all",
                    },
                    0.8
                  )
                : e.from(
                    ".ph-image",
                    {
                      duration: 2,
                      y: 80,
                      autoAlpha: 0,
                      stagger: 0.3,
                      ease: Expo.easeOut,
                      clearProps: "all",
                    },
                    1.2
                  ));
          t(".ph-appear").length &&
            e.from(
              ".ph-appear",
              {
                duration: 2,
                y: 60,
                autoAlpha: 0,
                stagger: 0.3,
                ease: Expo.easeOut,
                clearProps: "all",
              },
              1.5
            );
          t("#page-header .project-info-list").length &&
            (t("#page-header").hasClass("ph-inline")
              ? e.from(
                  "#page-header .project-info-list > ul > li",
                  {
                    duration: 2,
                    y: 80,
                    autoAlpha: 0,
                    stagger: 0.15,
                    ease: Expo.easeOut,
                    clearProps: "all",
                  },
                  2.2
                )
              : e.from(
                  "#page-header .project-info-list > ul",
                  {
                    duration: 2,
                    y: 80,
                    autoAlpha: 0,
                    ease: Expo.easeOut,
                    clearProps: "all",
                  },
                  2.2
                ));
          t(".tt-psc-elem").length &&
            (t(".tt-psc-elem").wrap('<div class="tt-ps-appear"></div>'),
            e.from(
              ".tt-ps-appear",
              {
                duration: 2,
                y: 80,
                autoAlpha: 0,
                stagger: 0.3,
                ease: Expo.easeOut,
                clearProps: "all",
              },
              1.4
            ));
          t(".tt-pci-title").length &&
            e.from(
              ".tt-pci-title",
              {
                duration: 2,
                x: 80,
                autoAlpha: 0,
                skewX: "-10deg",
                ease: Expo.easeOut,
                clearProps: "all",
              },
              1.4
            );
          t(".tt-pci-category").length &&
            e.from(
              ".tt-pci-category",
              {
                duration: 2,
                x: 80,
                autoAlpha: 0,
                ease: Expo.easeOut,
                clearProps: "all",
              },
              1.5
            );
          e.from(
            "#page-content",
            {
              duration: 2,
              autoAlpha: 0,
              y: 80,
              ease: Expo.easeOut,
              clearProps: "all",
            },
            0.8
          ),
            e.set("#page-transition", {
              duration: 1.5,
              autoAlpha: 0,
              ease: Expo.easeInOut,
            });
        })();
      }, 0);
    }),
      t("a")
        .not('[target="_blank"]')
        .not('[href^="#"]')
        .not('[href^="mailto"]')
        .not('[href^="tel"]')
        .not(".lg-trigger")
        .not(".no-transition")
        .on("click", function (t) {
          var e;
          t.preventDefault(),
            setTimeout(
              function (t) {
                window.location = t;
              },
              1500,
              this.href
            ),
            (e = gsap.timeline({
              defaults: { duration: 1.5, ease: Expo.easeInOut },
            })).set("#page-transition", { autoAlpha: 1 }),
            e.to(
              ".ptr-overlay",
              { scaleY: 1, transformOrigin: "center bottom" },
              0
            ),
            e.to("#content-wrap", { y: -80, autoAlpha: 0 }, 0),
            e.to("#tt-header", { y: -20, autoAlpha: 0 }, 0),
            e.to(".ptr-preloader", { autoAlpha: 1 }, 0.4);
        });
  }
  if (t("body").hasClass("tt-smooth-scroll") && !e) {
    var a = window.Scrollbar;
    a.init(document.querySelector("#scroll-container"), {
      damping: 0.05,
      renderByPixel: !0,
      continuousScrolling: !0,
      alwaysShowTracks: !0,
    });
    let e = 0,
      o = 0,
      n = a.init(document.getElementById("scroll-container"));
    n.addListener(({ offset: t }) => {
      (e = t.x), (o = t.y);
    }),
      n.setPosition(0, 0),
      n.track.xAxis.element.remove(),
      ScrollTrigger.scrollerProxy("body", {
        scrollTop(t) {
          return arguments.length && (n.scrollTop = t), n.scrollTop;
        },
      }),
      n.addListener(ScrollTrigger.update),
      t("#tt-header").hasClass("tt-header-fixed") &&
        t("#tt-header").prependTo(t("#body-inner"));
  }
  if (
    t("body").not(".is-mobile").hasClass("tt-magic-cursor") &&
    t(window).width() > 1024
  ) {
    t(".magnetic-item").wrap('<div class="magnetic-wrap"></div>'),
      t("a.magnetic-item").length &&
        t("a.magnetic-item").addClass("not-hide-cursor");
    var o = { x: 0, y: 0 },
      n = { x: 0, y: 0 },
      i = 0.15,
      r = !1,
      s = t("#ball"),
      l = 1,
      d = 0.5;
    gsap.set(s, {
      xPercent: -50,
      yPercent: -50,
      width: 34,
      height: 34,
      borderWidth: 2,
      opacity: d,
    }),
      document.addEventListener("mousemove", function (t) {
        (o.x = t.clientX), (o.y = t.clientY);
      }),
      gsap.ticker.add(function () {
        r ||
          ((n.x += (o.x - n.x) * i),
          (n.y += (o.y - n.y) * i),
          gsap.set(s, { x: n.x, y: n.y }));
      }),
      t(".magnetic-wrap").mousemove(function (t) {
        !(function (t, e, a) {
          var o = e.getBoundingClientRect(),
            i = t.clientX - o.left,
            r = t.clientY - o.top;
          (n.x = o.left + o.width / 2 + (i - o.width / 2) / a),
            (n.y = o.top + o.height / 2 + (r - o.height / 2) / a),
            gsap.to(s, { duration: 0.3, x: n.x, y: n.y });
        })(t, this, 2),
          (function (t, e) {
            !(function (t, e, a, o) {
              var n = e.getBoundingClientRect(),
                i = t.clientX - n.left,
                r = t.clientY - n.top;
              gsap.to(a, {
                duration: 0.3,
                x: ((i - n.width / 2) / n.width) * o,
                y: ((r - n.height / 2) / n.height) * o,
                ease: Power2.easeOut,
              });
            })(t, e, e.querySelector(".magnetic-item"), 25);
          })(t, this);
      }),
      t(".magnetic-wrap")
        .on("mouseenter", function (t) {
          gsap.to(s, { duration: 0.3, scale: 2, borderWidth: 1, opacity: d }),
            (r = !0);
        })
        .on("mouseleave", function (t) {
          gsap.to(s, { duration: 0.3, scale: l, borderWidth: 2, opacity: d }),
            gsap.to(this.querySelector(".magnetic-item"), {
              duration: 0.3,
              x: 0,
              y: 0,
              clearProps: "all",
            }),
            (r = !1);
        }),
      t(
        ".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a"
      )
        .not(".magnetic-item")
        .on("mouseenter", function () {
          gsap.to(s, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.2,
            backgroundColor: "#CCC",
            width: "100px",
            height: "100px",
          });
        })
        .on("mouseleave", function () {
          gsap.to(s, {
            duration: 0.3,
            borderWidth: 2,
            opacity: d,
            backgroundColor: "transparent",
            width: 34,
            height: 34,
            clearProps: "backgroundColor",
          });
        }),
      t("[data-cursor]").each(function () {
        t(this)
          .on("mouseenter", function () {
            s.append('<div class="ball-view"></div>'),
              t(".ball-view").append(t(this).attr("data-cursor")),
              gsap.to(ball, {
                duration: 0.3,
                yPercent: -75,
                width: 95,
                height: 95,
                opacity: 1,
                borderWidth: 0,
                backgroundColor: "#FFF",
              }),
              gsap.to(".ball-view", { duration: 0.3, scale: 1, autoAlpha: 1 });
          })
          .on("mouseleave", function () {
            gsap.to(ball, {
              duration: 0.3,
              yPercent: -50,
              width: 34,
              height: 34,
              opacity: d,
              borderWidth: 2,
              backgroundColor: "transparent",
            }),
              gsap.to(".ball-view", {
                duration: 0.3,
                scale: 0,
                autoAlpha: 0,
                clearProps: "all",
              }),
              s.find(".ball-view").remove();
          }),
          t(this).addClass("not-hide-cursor");
      }),
      t(".swiper-container").each(function () {
        "true" == t(this).parent().attr("data-simulate-touch") &&
          t(this).parent().hasClass("cursor-drag") &&
          (t(this)
            .on("mouseenter", function () {
              s.append('<div class="ball-drag"></div>'),
                gsap.to(s, {
                  duration: 0.3,
                  width: 60,
                  height: 60,
                  opacity: 1,
                });
            })
            .on("mouseleave", function () {
              s.find(".ball-drag").remove(),
                gsap.to(s, {
                  duration: 0.3,
                  width: 34,
                  height: 34,
                  opacity: d,
                });
            }),
          t(this).addClass("not-hide-cursor"),
          t(this)
            .find("[data-cursor]")
            .on("mouseenter mouseover", function () {
              return s.find(".ball-drag").remove(), !1;
            })
            .on("mouseleave", function () {
              s.append('<div class="ball-drag"></div>'),
                gsap.to(s, {
                  duration: 0.3,
                  width: 60,
                  height: 60,
                  opacity: 1,
                });
            }));
      }),
      t(".swiper-container").each(function () {
        "true" == t(this).parent().attr("data-simulate-touch") &&
          t(this).parent().hasClass("cursor-drag-mouse-down") &&
          (t(this)
            .on("mousedown pointerdown", function (t) {
              1 === t.which &&
                (gsap.to(s, {
                  duration: 0.2,
                  width: 60,
                  height: 60,
                  opacity: 1,
                }),
                s.append('<div class="ball-drag"></div>'));
            })
            .on("mouseup pointerup", function () {
              s.find(".ball-drag").remove(),
                t(this).find("[data-cursor]:hover").length ||
                  gsap.to(s, {
                    duration: 0.2,
                    width: 34,
                    height: 34,
                    opacity: d,
                  });
            })
            .on("mouseleave", function () {
              s.find(".ball-drag").remove(),
                gsap.to(s, {
                  duration: 0.2,
                  width: 34,
                  height: 34,
                  opacity: d,
                });
            }),
          t(this)
            .find("[data-cursor]")
            .on("mousedown pointerdown", function () {
              return !1;
            }),
          t(this)
            .find("[data-cursor]")
            .on("mouseenter mouseover", function () {
              return s.find(".ball-drag").remove(), !1;
            }));
      }),
      t(".cursor-close").each(function () {
        t(this).addClass("ball-close-enabled"),
          t(this)
            .on("mouseenter", function () {
              s.addClass("ball-close-enabled"),
                s.append('<div class="ball-close">Close</div>'),
                gsap.to(s, {
                  duration: 0.3,
                  yPercent: -75,
                  width: 80,
                  height: 80,
                  opacity: 1,
                }),
                gsap.from(".ball-close", {
                  duration: 0.3,
                  scale: 0,
                  autoAlpha: 0,
                });
            })
            .on("mouseleave click", function () {
              s.removeClass("ball-close-enabled"),
                gsap.to(s, {
                  duration: 0.3,
                  yPercent: -50,
                  width: 34,
                  height: 34,
                  opacity: d,
                }),
                s.find(".ball-close").remove();
            }),
          t(
            ".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor"
          )
            .not(".not-hide-cursor")
            .on("mouseenter", function () {
              s.removeClass("ball-close-enabled");
            })
            .on("mouseleave", function () {
              s.addClass("ball-close-enabled");
            });
      }),
      t(
        "a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor"
      )
        .not(".not-hide-cursor")
        .not(".cursor-alter")
        .not(".tt-main-menu-list > li > a")
        .not(".tt-main-menu-list > li > .tt-submenu-trigger > a")
        .on("mouseenter", function () {
          gsap.to(s, { duration: 0.3, scale: 0, opacity: 0 });
        })
        .on("mouseleave", function () {
          gsap.to(s, { duration: 0.3, scale: l, opacity: d });
        }),
      t("a")
        .not('[target="_blank"]')
        .not('[href^="#"]')
        .not('[href^="mailto"]')
        .not('[href^="tel"]')
        .not(".lg-trigger")
        .on("click", function () {
          gsap.to(s, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
        }),
      t(document)
        .on("mouseleave", function () {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
        })
        .on("mouseenter", function () {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
        }),
      t(document).mousemove(function () {
        gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
      });
  }
  if (
    (ScrollTrigger.config({ limitCallbacks: !0 }),
    gsap.utils.toArray(".tt-lazy").forEach((t) => {
      let e = t.dataset.src,
        a = document.createElement("img"),
        o = () => {
          (a.onload = () => {
            (a.onload = null),
              (a.src = t.src),
              (t.src = e),
              gsap.set(a, {
                position: "absolute",
                top: t.offsetTop,
                left: t.offsetLeft,
                width: t.offsetWidth,
                height: t.offsetHeight,
              }),
              t.parentNode.appendChild(a),
              gsap.to(a, {
                opacity: 0,
                onComplete: () => {
                  a.parentNode.removeChild(a), t.removeAttribute("data-src");
                },
              }),
              n && n.kill();
          }),
            (a.src = e),
            ScrollTrigger.refresh(!0);
        },
        n = ScrollTrigger.create({
          trigger: t,
          start: "-50% bottom",
          onEnter: o,
          onEnterBack: o,
        });
    }),
    t("#tt-header").hasClass("tt-header-fixed") &&
      t("body").addClass("tt-header-fixed-on"),
    t(".tt-ol-menu-toggle-btn-text, .tt-ol-menu-toggle-btn").on(
      "click",
      function () {
        if (
          (t("html").toggleClass("tt-no-scroll"),
          t("body").toggleClass("tt-ol-menu-open"),
          t("body").hasClass("tt-ol-menu-open"))
        ) {
          t("body").hasClass("tt-smooth-scroll") &&
            t("#tt-header:not(.tt-header-fixed)").prependTo("#body-inner"),
            t("body").addClass("olm-toggle-no-click");
          var e = gsap.timeline({
            onComplete: function () {
              t("body").removeClass("olm-toggle-no-click");
            },
          });
          e.to(".tt-overlay-menu", { duration: 0.4, autoAlpha: 1 }),
            e.from(".tt-ol-menu-list > li", {
              duration: 0.4,
              y: 80,
              autoAlpha: 0,
              stagger: 0.05,
              ease: Power2.easeOut,
              clearProps: "all",
            }),
            t(".tt-ol-menu-anim").length &&
              e.from(
                t(".tt-ol-menu-anim"),
                {
                  duration: 0.4,
                  y: 60,
                  autoAlpha: 0,
                  stagger: 0.05,
                  ease: Power2.easeOut,
                  clearProps: "all",
                },
                "-=0.4"
              ),
            t(".tt-overlay-menu a, .tt-logo a")
              .not('[target="_blank"]')
              .not('[href^="#"]')
              .not('[href^="mailto"]')
              .not('[href^="tel"]')
              .on("click", function () {
                gsap.set("#content-wrap, .ttgr-cat-nav", { autoAlpha: 0 });
                var e = gsap.timeline();
                e.to(".tt-ol-menu-list > li", {
                  duration: 0.4,
                  y: -80,
                  autoAlpha: 0,
                  stagger: 0.05,
                  ease: Power2.easeIn,
                }),
                  t(".tt-ol-menu-anim").length &&
                    e.to(
                      ".tt-ol-menu-anim",
                      {
                        duration: 0.4,
                        y: -60,
                        autoAlpha: 0,
                        stagger: 0.05,
                        ease: Power2.easeIn,
                      },
                      "-=0.4"
                    );
              });
        } else {
          t("body").hasClass("tt-smooth-scroll") &&
            t("#tt-header:not(.tt-header-fixed)").prependTo(".scroll-content"),
            t("body").addClass("olm-toggle-no-click");
          var a = gsap.timeline({
            onComplete: function () {
              t("body").removeClass("olm-toggle-no-click");
            },
          });
          a.to(".tt-ol-menu-list > li", {
            duration: 0.4,
            y: -80,
            autoAlpha: 0,
            stagger: 0.05,
            ease: Power2.easeIn,
          }),
            t(".tt-ol-menu-anim").length &&
              a.to(
                ".tt-ol-menu-anim",
                {
                  duration: 0.4,
                  y: -60,
                  autoAlpha: 0,
                  stagger: 0.05,
                  ease: Power2.easeIn,
                },
                "-=0.4"
              ),
            a.to(
              ".tt-overlay-menu",
              { duration: 0.4, autoAlpha: 0, clearProps: "all" },
              "+=0.2"
            ),
            a.set(".tt-ol-menu-list > li, .tt-ol-menu-anim", {
              clearProps: "all",
            }),
            setTimeout(function () {
              t(".tt-ol-submenu").slideUp(350),
                t(".tt-ol-submenu-trigger").removeClass("tt-ol-submenu-open");
            }, 500);
        }
        return !1;
      }
    ),
    t(".tt-ol-menu-list")
      .on("mouseenter", function () {
        t(this).addClass("tt-ol-menu-hover");
      })
      .on("mouseleave", function () {
        t(this).removeClass("tt-ol-menu-hover");
      }),
    t(".tt-ol-submenu-trigger > a").on("click", function () {
      if (t(this).is('[href^="#"]')) {
        var e = t(this).parent();
        e.hasClass("tt-ol-submenu-open")
          ? (e.removeClass("tt-ol-submenu-open"), e.next().slideUp(350))
          : (e
              .parent()
              .parent()
              .find(".tt-ol-submenu")
              .prev()
              .removeClass("tt-ol-submenu-open"),
            e.parent().parent().find(".tt-ol-submenu").slideUp(350),
            e.toggleClass("tt-ol-submenu-open"),
            e.next().slideToggle(350));
      }
      return !1;
    }),
    t(".tt-ol-submenu-caret-wrap").on("click", function () {
      var e = t(this).parent();
      e.hasClass("tt-ol-submenu-open")
        ? (e.removeClass("tt-ol-submenu-open"), e.next().slideUp(350))
        : (e
            .parent()
            .parent()
            .find(".tt-ol-submenu")
            .prev()
            .removeClass("tt-ol-submenu-open"),
          e.parent().parent().find(".tt-ol-submenu").slideUp(350),
          e.toggleClass("tt-ol-submenu-open"),
          e.next().slideToggle(350));
    }),
    t(".tt-portfolio-carousel").length &&
      t(".tt-portfolio-carousel").each(function () {
        var e = t(this),
          a = e.data("mousewheel"),
          o = e.data("keyboard"),
          n = e.data("simulate-touch"),
          i = e.data("grab-cursor"),
          r = e.data("autoplay")
            ? { delay: e.data("autoplay") }
            : e.data("autoplay"),
          s = e.data("loop") ? { loopedSlides: 100 } : e.data("loop");
        if (e.is("[data-speed]")) var l = e.data("speed");
        else l = 1200;
        if (e.is("[data-pagination-type]")) var d = e.data("pagination-type");
        else d = "fraction";
        var p = new Swiper(e.find(".swiper-container")[0], {
          direction: "horizontal",
          slidesPerView: "auto",
          spaceBetween: 0,
          resistanceRatio: 0.85,
          longSwipesRatio: 0.3,
          shortSwipes: !0,
          centeredSlides: !0,
          watchSlidesVisibility: !0,
          preventInteractionOnTransition: !1,
          speed: 900,
          keyboard: o,
          mousewheel: a,
          autoplay: r,
          simulateTouch: n,
          grabCursor: i,
          loop: s,
          lazy: { loadPrevNext: !0 },
          breakpoints: { 1025: { speed: l, lazy: { loadPrevNextAmount: 3 } } },
          pagination: {
            el: ".tt-pc-pagination",
            type: d,
            modifierClass: "tt-pc-pagination-",
            dynamicBullets: !0,
            dynamicMainBullets: 1,
            clickable: !0,
          },
          navigation: {
            nextEl: ".tt-pc-arrow-next",
            prevEl: ".tt-pc-arrow-prev",
            disabledClass: "tt-pc-arrow-disabled",
          },
          on: {
            lazyImageReady: (t) => {
              t.update();
            },
            init: function () {
              var e = t(this.slides[this.activeIndex]);
              e.addClass("tt-slide-active"),
                e.prevAll().addClass("tt-pcs-disabled"),
                e.nextAll().addClass("tt-pcs-disabled");
            },
            transitionStart: function () {
              var e = t(this.slides[this.activeIndex]);
              e.addClass("tt-slide-active"),
                e.prev().addClass("tt-slide-active-start"),
                e.next().addClass("tt-slide-active-start"),
                e.prevAll().addClass("tt-pcs-disabled"),
                e.removeClass("tt-pcs-disabled"),
                e.nextAll().addClass("tt-pcs-disabled"),
                t(".swiper-slide-active")
                  .find("video")
                  .each(function () {
                    t(this).get(0).play();
                  }),
                t(".tt-pc-arrow").addClass("tt-pc-arrow-disabled");
            },
            transitionEnd: function () {
              var e = t(this.slides[this.activeIndex]);
              e.prevAll().removeClass("tt-slide-active"),
                e.nextAll().removeClass("tt-slide-active"),
                e.prev().removeClass("tt-slide-active-start"),
                e.next().removeClass("tt-slide-active-start"),
                t(".swiper-slide-prev")
                  .find("video")
                  .each(function () {
                    t(this).get(0).pause();
                  }),
                t(".swiper-slide-next")
                  .find("video")
                  .each(function () {
                    t(this).get(0).pause();
                  }),
                t(".tt-pc-arrow").removeClass("tt-pc-arrow-disabled");
            },
          },
        });
        "true" == e.attr("data-simulate-touch") &&
          e.hasClass("pc-scale-down") &&
          (e
            .find(".swiper-container")
            .on("mousedown touchstart pointerdown", function (t) {
              1 === t.which &&
                gsap.to(e.find(".swiper-slide"), { duration: 0.7, scale: 0.9 });
            }),
          t("body").on("mouseup touchend pointerup mouseleave", function () {
            gsap.to(e.find(".swiper-slide"), {
              duration: 0.7,
              scale: 1,
              clearProps: "scale",
            });
          })),
          t(window).on("resize orientationchange", function () {
            setTimeout(function () {
              p.update(), e.find(".swiper-wrapper").addClass("swtr-smooth");
            }, l),
              setTimeout(function () {
                e.find(".swiper-wrapper").removeClass("swtr-smooth");
              }, l + l);
          });
      }),
    t(".tt-testimonials-slider").length &&
      t(".tt-testimonials-slider").each(function () {
        var e = t(this),
          a = e.data("simulate-touch"),
          o = e.data("autoplay")
            ? { delay: e.data("autoplay") }
            : e.data("autoplay"),
          n = e.data("loop") ? { loopedSlides: 100 } : e.data("loop");
        if (e.is("[data-speed]")) var i = e.data("speed");
        else i = 900;
        var r = new Swiper(e.find(".swiper-container")[0], {
          direction: "horizontal",
          slidesPerView: "auto",
          spaceBetween: 0,
          mousewheel: !1,
          longSwipesRatio: 0.3,
          grabCursor: !0,
          autoHeight: !0,
          centeredSlides: !0,
          preventInteractionOnTransition: !1,
          speed: i,
          simulateTouch: a,
          autoplay: o,
          loop: n,
          navigation: {
            nextEl: e.find(".tt-ts-nav-next")[0],
            prevEl: e.find(".tt-ts-nav-prev")[0],
            disabledClass: "tt-ts-nav-arrow-disabled",
          },
          pagination: {
            el: ".tt-ts-pagination",
            type: "bullets",
            modifierClass: "tt-ts-pagination-",
            dynamicBullets: !0,
            dynamicMainBullets: 1,
            clickable: !0,
          },
        });
        setTimeout(function () {
          r.updateAutoHeight();
        }, 100),
          e.hasClass("ts-scale-down") &&
            (e
              .find(".swiper-wrapper")
              .on("mousedown touchstart pointerdown", function (t) {
                1 === t.which &&
                  gsap.to(e.find(".swiper-slide"), {
                    duration: 0.7,
                    scale: 0.9,
                  });
              }),
            t("body").on("mouseup touchend pointerup", function () {
              gsap.to(e.find(".swiper-slide"), {
                duration: 0.7,
                scale: 1,
                clearProps: "scale",
              });
            }));
      }),
    t(".lightgallery").lightGallery({
      selector: ".lg-trigger",
      mode: "lg-fade",
      height: "100%",
      width: "100%",
      iframeMaxWidth: "100%",
      loop: !0,
      speed: 600,
      closable: !0,
      escKey: !0,
      keyPress: !0,
      hideBarsDelay: 3e3,
      controls: !0,
      mousewheel: !0,
      download: !1,
      counter: !0,
      swipeThreshold: 50,
      enableDrag: !0,
      enableTouch: !0,
      getCaptionFromTitleOrAlt: !1,
      thumbnail: !1,
      showThumbByDefault: !1,
      thumbMargin: 5,
      toogleThumb: !0,
      enableThumbSwipe: !0,
      exThumbImage: "data-exthumbnail",
      autoplay: !1,
      autoplayControls: !0,
      pause: 6e3,
      progressBar: !0,
      fourceAutoplay: !1,
      fullScreen: !0,
      zoom: !1,
      scale: 0.5,
      enableZoomAfter: 50,
      videoMaxWidth: "1400px",
      loadYoutubeThumbnail: !0,
      youtubeThumbSize: "default",
      youtubePlayerParams: { modestbranding: 0, showinfo: 1, controls: 1 },
      loadVimeoThumbnail: !0,
      vimeoThumbSize: "thumbnail_medium",
      vimeoPlayerParams: {
        byline: 1,
        portrait: 1,
        title: 1,
        color: "CCCCCC",
        autopause: 1,
      },
      hash: !1,
      hgalleryId: 1,
      rotate: !1,
      share: !1,
      facebook: !0,
      facebookDropdownText: "Facebook",
      twitter: !0,
      twitterDropdownText: "Twitter",
      googlePlus: !0,
      googlePlusDropdownText: "Google+",
      pinterest: !0,
      pinterestDropdownText: "Pinterest",
    }),
    t(".ph-image").length &&
      (t("body").addClass("ph-image-on"),
      t("#page-header").hasClass("ph-bg-image") &&
        t("body").addClass("ph-bg-image-on")),
    t("#page-header .project-info-list").length &&
      t("#page-header").addClass("project-info-list-on"),
    t(".made-with-love").length && t("body").addClass("made-with-love-on"),
    t("#page-header").is(".ph-bg-image.ph-bg-image-is-light")
      ? t("body").addClass("ph-bg-image-light-on")
      : t("body").removeClass("ph-bg-image-light-on"),
    t("#page-header").hasClass("ph-content-parallax"))
  ) {
    let e = gsap.timeline({
      scrollTrigger: {
        trigger: "#page-header",
        start: "top top",
        end: "bottom top",
        scrub: !0,
        markers: !1,
      },
    });
    if (
      (t(".ph-categories").length &&
        (t(".ph-categories").wrapInner('<div class="ph-cat-parallax"></div>'),
        e.to(".ph-cat-parallax", { y: -80 }, 0)),
      t(".ph-caption-title").length &&
        (t(".ph-caption-title").wrapInner(
          '<div class="ph-title-parallax"></div>'
        ),
        e.to(".ph-title-parallax", { y: -40 }, 0)),
      t(".ph-caption-subtitle").length &&
        (t(".ph-caption-subtitle").wrapInner(
          '<div class="ph-subt-parallax"></div>'
        ),
        e.to(".ph-subt-parallax", { y: -10 }, 0)),
      t(".ph-caption-title-ghost").length &&
        (t(".ph-caption-title-ghost").wrapInner(
          '<div class="ph-ghost-parallax"></div>'
        ),
        e.to(".ph-ghost-parallax", { y: 40 }, 0)),
      t(".ph-image").length &&
        (t("#page-header").hasClass("ph-bg-image")
          ? e.to(".ph-image-inner", { yPercent: 30, scale: 1.05 }, 0)
          : e.to(".ph-image-inner", { yPercent: -20 }, 0)),
      t("#page-header .project-info-list").length &&
        (t("#page-header .project-info-list > ul > li").wrapInner(
          '<div class="ph-pil-parallax"></div>'
        ),
        t("#page-header:not('.ph-center')").hasClass("ph-inline")
          ? ScrollTrigger.matchMedia({
              "(min-width: 1025px)": function () {
                gsap.to(".ph-pil-parallax", {
                  y: -140,
                  stagger: 0.15,
                  ease: "none",
                  scrollTrigger: {
                    trigger: "#page-header",
                    start: "top top",
                    end: "bottom top",
                    scrub: !0,
                    markers: !1,
                  },
                });
              },
              "(max-width: 1024px)": function () {
                gsap.to("#page-header .project-info-list", {
                  y: 20,
                  ease: "none",
                  scrollTrigger: {
                    trigger: "#page-header",
                    start: "top top",
                    end: "bottom top",
                    scrub: !0,
                    markers: !1,
                  },
                });
              },
            })
          : gsap.to(".ph-pil-parallax", {
              y: 30,
              ease: "none",
              scrollTrigger: {
                trigger: "#page-header",
                start: "top top",
                end: "bottom top",
                scrub: !0,
                markers: !1,
              },
            })),
      t(".scroll-down-circle").length &&
        gsap.to(".scroll-down-circle", {
          x: -100,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#page-header",
            start: "top top",
            end: "30% top",
            scrub: !0,
            markers: !1,
          },
        }),
      t(".mwl-inner").length &&
        gsap.to(".mwl-inner", {
          yPercent: 250,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#page-header",
            start: "top top",
            end: "40% top",
            scrub: !0,
            markers: !1,
          },
        }),
      t(".ph-share").length &&
        (t(".ph-share-trigger").wrap(
          '<div class="ph-share-trigger-wrap"></div>'
        ),
        ScrollTrigger.matchMedia({
          "(min-width: 1025px)": function () {
            gsap.to(".ph-share-trigger-wrap", {
              y: 50,
              autoAlpha: 0,
              ease: "none",
              scrollTrigger: {
                trigger: "#page-header",
                start: "top top",
                end: "30% top",
                scrub: !0,
                markers: !1,
              },
            });
          },
        })),
      t("#page-header").is(".ph-bg-image.ph-bg-image-is-light") &&
        t("#tt-header").hasClass("tt-header-fixed"))
    ) {
      function p() {
        t("body").removeClass("ph-bg-image-light-on");
      }
      function c() {
        t("body").addClass("ph-bg-image-light-on");
      }
      ScrollTrigger.create({
        trigger: "#page-header",
        start: "top bottom",
        end: "bottom 30px",
        scrub: !0,
        markers: !1,
        onLeave: () => p(),
        onEnter: () => c(),
        onLeaveBack: () => p(),
        onEnterBack: () => c(),
      });
    }
  }
  t(".anim-image-parallax").each(function () {
    t(this).wrap(
      '<div class="anim-image-parallax-wrap"><div class="anim-image-parallax-inner"></div></div>'
    ),
      t(".anim-image-parallax-wrap").css({ overflow: "hidden" });
    var e = t(this),
      a = e.parents(".anim-image-parallax-wrap"),
      o = a.find(".anim-image-parallax-inner");
    function n() {
      ScrollTrigger.refresh();
    }
    gsap.to(e, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: a,
        start: "top bottom",
        end: "bottom top",
        scrub: !0,
        markers: !1,
        onEnter: () => n(),
      },
    }),
      gsap
        .timeline({
          scrollTrigger: {
            trigger: a,
            start: "top 90%",
            markers: !1,
            onEnter: () => n(),
          },
        })
        .from(o, {
          duration: 1.5,
          autoAlpha: 0,
          scale: 1.2,
          ease: Power2.easeOut,
          clearProps: "all",
        });
  }),
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        t(
          ".tt-grid.ttgr-layout-creative-1 .tt-grid-item:nth-of-type(6n+2) .ttgr-item-inner, .tt-grid.ttgr-layout-creative-1 .tt-grid-item:nth-of-type(6n+4) .ttgr-item-inner, .tt-grid.ttgr-layout-creative-2 .tt-grid-item:nth-of-type(4n+2) .ttgr-item-inner, .tt-grid.ttgr-layout-creative-2 .tt-grid-item:nth-of-type(4n+3) .ttgr-item-inner"
        ).each(function () {
          var e = t(this);
          gsap.to(e, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
              trigger: e,
              start: "top bottom",
              end: "bottom top",
              scrub: !0,
              markers: !1,
              onEnter: () => void ScrollTrigger.refresh(!0),
            },
          });
        });
      },
    }),
    t(".anim-zoomin").each(function () {
      t(this).wrap('<div class="anim-zoomin-wrap"></div>'),
        t(".anim-zoomin-wrap").css({ overflow: "hidden" });
      var e = t(this),
        a = e.parents(".anim-zoomin-wrap");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: a,
            start: "top 90%",
            markers: !1,
            onEnter: () => void ScrollTrigger.refresh(),
          },
        })
        .from(e, {
          duration: 1.5,
          autoAlpha: 0,
          scale: 1.2,
          ease: Power2.easeOut,
          clearProps: "all",
        });
    }),
    t(".anim-fadeinup").each(function () {
      gsap
        .timeline({
          scrollTrigger: { trigger: this, start: "top bottom", markers: !1 },
        })
        .from(
          this,
          {
            duration: 2.5,
            autoAlpha: 0,
            y: 100,
            ease: Expo.easeOut,
            clearProps: "all",
          },
          "+=0.3"
        );
    }),
    t(".anim-skewinup").each(function () {
      gsap
        .timeline({
          scrollTrigger: { trigger: this, start: "top bottom", markers: !1 },
        })
        .from(
          this,
          {
            duration: 2,
            skewY: 5,
            transformOrigin: "left top",
            autoAlpha: 0,
            y: 100,
            ease: Expo.easeOut,
            clearProps: "all",
          },
          "+=0.3"
        );
    }),
    t(".anim-stretchinup").each(function () {
      gsap
        .timeline({
          scrollTrigger: { trigger: this, start: "top bottom", markers: !1 },
        })
        .from(
          this,
          {
            duration: 2,
            autoAlpha: 0,
            y: 100,
            scaleY: 1.4,
            transformOrigin: "top",
            ease: Expo.easeOut,
            clearProps: "all",
          },
          "+=0.2"
        );
    }),
    t("#portfolio-grid").hasClass("pgi-cap-inside") &&
      (t(".portfolio-grid-item").each(function () {
        t(this).find(".pgi-caption").appendTo(t(this).find(".pgi-image-wrap"));
      }),
      t(".pgi-title a").length && t(".pgi-title a").contents().unwrap()),
    t(".pgi-image-wrap")
      .on("mouseenter", function () {
        t(this)
          .find("video")
          .each(function () {
            t(this).get(0).play();
          });
      })
      .on("mouseleave", function () {
        t(this)
          .find("video")
          .each(function () {
            t(this).get(0).pause();
          });
      }),
    t(".tt-scrolling-text").each(function () {
      var e = t(this).data("scroll-speed");
      t(this)
        .find(".tt-scrolling-text-inner")
        .css({ "animation-duration": e + "s" });
    }),
    t('a[href^="#"]')
      .not('[href$="#"]')
      .not('[href$="#0"]')
      .on("click", function () {
        var o = this.hash;
        if (t("#tt-header").hasClass("tt-header-fixed"))
          var n = t("#tt-header").height();
        else n = 0;
        if (
          (null != t(this).data("offset") && (n = t(this).data("offset")), e)
        ) {
          i = t(o).offset().top - t("body").offset().top - n;
          gsap.to(t(window), {
            duration: 2,
            scrollTo: { y: i, autoKill: !0 },
            ease: Expo.easeInOut,
          });
        } else if (t("body").hasClass("tt-smooth-scroll")) {
          var i =
              t(o).offset().top -
              t("#scroll-container > .scroll-content").offset().top -
              n,
            r = a.init(document.getElementById("scroll-container"));
          gsap.to(r, {
            duration: 2,
            scrollTo: { y: i, autoKill: !0 },
            ease: Expo.easeInOut,
          });
        } else {
          var i = t(o).offset().top - t("body").offset().top - n;
          gsap.to(t(window), {
            duration: 2,
            scrollTo: { y: i, autoKill: !0 },
            ease: Expo.easeInOut,
          });
        }
        return !1;
      }),
    t(".scroll-to-top").on("click", function () {
      if (e)
        gsap.to(t(window), {
          duration: 2,
          scrollTo: { y: 0, autoKill: !0 },
          ease: Expo.easeInOut,
        });
      else if (t("body").hasClass("tt-smooth-scroll")) {
        var o = a.init(document.getElementById("scroll-container"));
        gsap.to(o, {
          duration: 2,
          scrollTo: { y: 0, autoKill: !0 },
          ease: Expo.easeInOut,
        });
      } else
        gsap.to(t(window), {
          duration: 2,
          scrollTo: { y: 0, autoKill: !0 },
          ease: Expo.easeInOut,
        });
      return !1;
    }),
    (window.onload = function () {
      for (
        var t = document.getElementsByTagName("iframe"), e = 0;
        e < t.length;
        e++
      )
        t[e].getAttribute("data-src") &&
          t[e].setAttribute("src", t[e].getAttribute("data-src"));
    }),
    t(window).on("beforeunload", function () {
      t(window).scrollTop(0);
    }),
    t("*")
      .on("touchstart", function () {
        t(this).trigger("hover");
      })
      .on("touchend", function () {
        t(this).trigger("hover");
      });
  var u = document.querySelector("#news-btn"),
    g = document.querySelector("#news-input"),
    h = document.querySelector("#news-response");
  function m() {
    h.innerHTML = "";
  }
  u.addEventListener("click", function () {
    "" !== g.value && g.value.match(/\S+@\S+\.\S+/)
      ? h.appendChild(
          document.createTextNode(
            "Thanks, you have subscribed to our Newsletter"
          )
        )
      : window;
    (g.value = ""), setTimeout(m, 2e3);
  });
  new Swiper(".mySwiper", {
    pagination: { el: ".swiper-pagination", clickable: !0 },
  }),
    new Swiper(".Menu-overlay__Swiper", {
      navigation: { nextEl: ".right", prevEl: ".back" },
    });

  t(
    ".tt-ol-menu-toggle-btn-text, .tt-ol-menu-toggle-btn, .tt-m-menu-toggle-btn-text, .tt-m-menu-toggle-btn"
  ).on("click", function () {
    t("body").toggleClass("tt-demo-btn-active"),
      t("body").hasClass("tt-demo-btn-active")
        ? gsap.to(".tt-demo-btn", {
            duration: 0.3,
            scale: 1,
            autoAlpha: 1,
            delay: 0.8,
          })
        : gsap.to(".tt-demo-btn", {
            duration: 0.3,
            scale: 0.9,
            autoAlpha: 0,
          });
  }),
    t(".tt-overlay-menu a, .tt-main-menu-list a, .tt-logo a")
      .not('[target="_blank"]')
      .not('[href^="#"]')
      .not('[href^="mailto"]')
      .not('[href^="tel"]')
      .on("click", function () {
        gsap.to(".tt-demo-btn", { duration: 0.3, scale: 0.9, autoAlpha: 0 });
      });
  t(".tt-demo-btn").css({
    position: "fixed",
    display: "flex",
    "align-items": "center",
    right: "15px",
    bottom: "15px",
    background: "#6ca12b",
    color: "#fff",
    "z-index": "99999",
    overflow: "hidden",
    opacity: "0",
    visibility: "hidden",
    transform: "scale(0.9)",
    "border-radius": "100px",
  }),
    t(".tt-demo-btn-img").css({
      width: "60px",
      height: "60px",
      padding: "18px",
    }),
    t(".tt-demo-btn-text").css({
      width: "0",
      overflow: "hidden",
      "white-space": "nowrap",
      "font-size": "15px",
      "line-height": "1.3",
      color: "#FFF",
      opacity: "0",
      visibility: "hidden",
    }),
    t(".tt-demo-btn")
      .on("mouseenter", function () {
        gsap.to(".tt-demo-btn-text", {
          duration: 0.3,
          width: "110px",
          autoAlpha: 1,
        }),
          gsap.to(s, { duration: 0.3, scale: 0, opacity: 0 });
      })
      .on("mouseleave", function () {
        gsap.to(".tt-demo-btn-text", {
          duration: 0.3,
          width: "0",
          autoAlpha: 0,
          clearProps: "autoAlpha, width",
        }),
          gsap.to(s, { duration: 0.3, scale: l, opacity: d });
      });
})(jQuery);

// form start here

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const submitBtn = document.querySelector(".btn-submit");
const progress = document.querySelectorAll("#progress");
const inputField = document.querySelectorAll("#input-field");
const message = document.getElementById("message");
const formsteps = document.querySelectorAll(".form-step");

let formstepsNum = 0;

nextBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    formstepsNum++;
    updateFormStep();
  })
);

prevBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    formstepsNum--;
    updateFormStep();
    // updateProgressbar();
  })
);

function updateFormStep() {
  formsteps.forEach((formStep, idx) => {
    formStep.classList.contains("form-step_active") &&
      formStep.classList.remove("form-step_active");
  });
  formsteps[formstepsNum].classList.add("form-step_active");

  progress.forEach((prog) => {
    prog.style.width =
      Math.floor(((formstepsNum + 1) / formsteps.length) * 100) + "%";
  });
}
