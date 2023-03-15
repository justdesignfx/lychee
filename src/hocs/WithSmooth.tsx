import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { ReactElement, useLayoutEffect, useRef } from "react"
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar"

import { useResizeDetector } from "react-resize-detector"
import { useWindowSize } from "~/hooks"

import { textReveal, slidingPanels, stickyTitle } from "~/animations"
import Menu from "~/components/Menu"
import { breakpoints } from "~/variables"
import MagnetCursor from "~/components/MagnetCursor"

export const SmoothContext = React.createContext<any>(null)

gsap.registerPlugin(ScrollTrigger)

interface Props {
  children: ReactElement
  location?: any
}

const WithSmooth = ({ children, location }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const smooth = useRef<Scrollbar | null>(null)
  const q = gsap.utils.selector(scrollerRef)

  const windowSize = useWindowSize()

  const clearScrollTriggers = () => {
    ScrollTrigger.getAll().forEach((instance) => {
      instance.kill()
    })

    // This in case a scroll animation is active while the route is updated
    gsap.killTweensOf(window)
  }

  const scrollToTop = () => {
    gsap.to("body", {
      autoAlpha: 0,
      onComplete: () => {
        smooth.current ? smooth.current?.scrollTo(0, 0, 0) : window.scrollTo({ top: 0, left: 0 })
        gsap.to("body", {
          autoAlpha: 1,
          delay: 0.4,
        })
      },
    })
  }

  const lockScrollbar = () => {
    smooth.current && smooth.current.updatePluginOptions("modal", { open: true })
    console.log("SCROLLBAR LOCKED")
  }

  const unlockScrollbar = () => {
    smooth.current && smooth.current.updatePluginOptions("modal", { open: false })
    console.log("SCROLLBAR UNLOCKED")
  }

  const onResize = () => {
    ScrollTrigger.refresh()
    console.log("SCROLLTRIGGER REFRESHED")
  }

  useResizeDetector({ targetRef: contentRef, onResize })

  useLayoutEffect(() => {
    let ctx: any
    let ctx1: any

    if (smooth.current) {
      smooth.current.destroy()
      console.log("Smooth Destroyed")
    }

    const initSmoothScrollbar = () => {
      class ModalPlugin extends ScrollbarPlugin {
        static pluginName = "modal"

        static defaultOptions = {
          open: false,
        }

        transformDelta(delta: any) {
          return this.options.open ? { x: 0, y: 0 } : delta
        }
      }

      Scrollbar.use(ModalPlugin)

      if (scrollerRef.current) {
        smooth.current = Scrollbar.init(scrollerRef.current, {
          damping: 0.075,
          delegateTo: document,
          alwaysShowTracks: false,
          renderByPixels: false,
        })
        console.log("Smooth Initialized")
      }

      ctx = gsap.context(() => {
        // disable bounce
        gsap.set("body", {
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        })

        gsap.set(scrollerRef.current, {
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        })
      })

      ScrollTrigger.scrollerProxy(scrollerRef.current, {
        scrollTop(value: any) {
          if (smooth.current) {
            if (arguments.length) {
              smooth.current.scrollTop = value
            }
            return smooth.current.scrollTop
          }
        },
      })

      smooth.current?.addListener(ScrollTrigger.update)
      ScrollTrigger.defaults({ scroller: scrollerRef.current })

      initAnimations(smooth.current)

      // Only necessary to correct marker position - not needed in production
      if (document.querySelector(".gsap-marker-scroller-start")) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]')

        smooth.current?.addListener(({ offset }: any) => {
          gsap.set(markers, { marginTop: -offset.y })
        })
      }
    }

    const initAnimations = (smoothInstance?: Scrollbar | null) => {
      ctx1 = gsap.context(() => {
        // MARQUEE
        if (q("[data-marquee]").length > 0) {
          console.log("MARQUEE INITIALIZED")
          gsap.set(q("[data-marquee]"), { xPercent: -100 })

          /* ADD SKEW SECTION */
          let proxy = { skew: 0, scale: 0 }
          let skewSetter = gsap.quickSetter("[data-marquee-sliding]", "skewX", "deg") // fast
          let clamp = gsap.utils.clamp(-20, 20) // don't let the skew go beyond 20 degrees.

          ScrollTrigger.create({
            onUpdate: (self) => {
              let skew = clamp(self.getVelocity() / -200)

              // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
              if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew
                gsap.to(proxy, {
                  // xPercent: () => 100 * self.direction,
                  skew: 0,
                  duration: 0.4,
                  ease: "power3",
                  overwrite: true,
                  onUpdate: () => {
                    skewSetter(proxy.skew)
                    // scaleSetter(proxy.scale)
                  },
                })
              }
            },
          })

          q("[data-marquee-sliding]").forEach((marquee) => {
            gsap.to(marquee, {
              xPercent: () =>
                (windowSize.width > breakpoints.mobile ? 20 : 40) * (marquee.dataset.direction === "1" ? 1 : -1),
              scrollTrigger: {
                trigger: marquee,
                // markers: true,
                scrub: true,
              },
            })
          })
        }

        // // SCALING IMG
        // if (q("[data-scaling-img-wr]").length !== 0) {
        //   console.log("SCALING IMAGES INITIALIZED")

        //   const itemWrappers = q("[data-scaling-img-wr]")
        //   const items = q("[data-scaling-img]")

        //   gsap.set(itemWrappers, {
        //     overflow: "hidden",
        //   })

        //   gsap.set(items, {
        //     scale: 1.2,
        //     transformOrigin: "center",
        //   })

        //   itemWrappers.forEach((item, i) => {
        //     gsap.to(items[i], {
        //       scale: 1.05,
        //       scrollTrigger: {
        //         trigger: item,
        //         scrub: true,
        //         // markers: true,
        //       },
        //     })
        //   })
        // }

        if (q("[data-h-scroll]").length > 0 && windowSize.width > breakpoints.tablet) {
          textReveal(q)
        }

        if (q("[data-sliding-panels]").length > 0) {
          slidingPanels(q)
        }

        stickyTitle(q)

        // REVEAL WRAPPER
        // if (q("[data-reveal]").length > 0 && windowSize.width > breakpoints.tablet) {
        //   console.log("DATA REVEAL INITIALIZED")

        //   const height = document.querySelector("[data-reveal]")?.clientHeight

        //   gsap.set(q("[data-reveal]"), {
        //     yPercent: -50,
        //   })

        //   gsap.set(q("[data-overlay]"), {
        //     opacity: 1,
        //   })

        //   gsap.to(q("[data-reveal]"), {
        //     // translateZ: -100,
        //     yPercent: 0,
        //     ease: "none",
        //     scrollTrigger: {
        //       trigger: q("[data-reveal]"),
        //       start: "center bottom",
        //       end: () => `center bottom-=${height}`,
        //       scrub: true,
        //       // markers: true,
        //     },
        //   })

        //   gsap.to(q("[data-overlay]"), {
        //     // translateZ: -100,
        //     opacity: 0,
        //     ease: "none",
        //     scrollTrigger: {
        //       trigger: q("[data-reveal]"),
        //       start: "center bottom",
        //       end: () => `center bottom-=${height}`,
        //       scrub: true,
        //       // onEnter: () => {
        //       //   gsap.to(q("[data-overlay]"), {
        //       //     pointerEvents: "auto",
        //       //   })
        //       // },
        //       // onLeave: () => {
        //       //   gsap.to(q("[data-overlay]"), {
        //       //     pointerEvents: "none",
        //       //   })
        //       // },
        //       // onEnterBack: () => {
        //       //   gsap.to(q("[data-overlay]"), {
        //       //     pointerEvents: "auto",
        //       //   })
        //       // },
        //       // onLeaveBack: () => {
        //       //   gsap.to(q("[data-overlay]"), {
        //       //     pointerEvents: "none",
        //       //   })
        //       // }, // markers: true,
        //     },
        //   })
        // }

        // FLIPPING ITEM
        // if (q("[data-flip]").length > 0) {
        //   console.log("DATA FLIP INITIALIZED")

        //   gsap.to(q("[data-flip]"), {
        //     scrollTrigger: {
        //       trigger: q("[data-flip]")[0],
        //       start: "center center",
        //       end: "center center",
        //       // markers: true,
        //       onEnter: () => {
        //         gsap.to(q("[data-flip]"), {
        //           rotateX: -180,
        //           duration: 0,
        //         })
        //       },
        //       onEnterBack: () => {
        //         gsap.to(q("[data-flip]"), {
        //           rotateX: 0,
        //           duration: 0,
        //         })
        //       },
        //     },
        //   })
        // }

        // HAMBURGER HIDE/SHOW
        const hamburger = document.querySelector("[data-hamburger-menu]")

        if (hamburger) {
          const showAnim = gsap
            .from(hamburger, {
              autoAlpha: 0,
              paused: true,
              duration: 0.2,
            })
            .progress(1)

          ScrollTrigger.create({
            start: "top top",
            end: "max",
            // markers: true,
            onUpdate: (self) => {
              self.direction === -1 ? showAnim.play() : showAnim.reverse()
            },
          })
        }

        // STICKY ELEMENT HIDE SHOW
        // const stickyOtherWorks = document.querySelector("[data-sticky-other-works]")

        // if (stickyOtherWorks) {
        //   gsap.set(stickyOtherWorks, {
        //     autoAlpha: 0,
        //   })

        //   ScrollTrigger.create({
        //     start: `top+=${windowSize.height * 2}px bottom`,
        //     end: `max-=${windowSize.height}px bottom`,
        //     onEnter: () => {
        //       gsap.to(stickyOtherWorks, {
        //         autoAlpha: 1,
        //         duration: 0.2,
        //       })
        //     },
        //     onEnterBack: () => {
        //       gsap.to(stickyOtherWorks, {
        //         autoAlpha: 1,
        //         duration: 0.2,
        //       })
        //     },
        //     onLeave: () => {
        //       gsap.to(stickyOtherWorks, {
        //         autoAlpha: 0,
        //         duration: 0.2,
        //       })
        //     },
        //     onLeaveBack: () => {
        //       gsap.to(stickyOtherWorks, {
        //         autoAlpha: 0,
        //         duration: 0.2,
        //       })
        //     },
        //     // markers: true,
        //   })
        // }
      })
    }

    if (windowSize.width > breakpoints.tablet) {
      initSmoothScrollbar()
    } else {
      initAnimations(null)
    }

    return () => {
      clearScrollTriggers()
      ctx && ctx.revert()
      ctx1 && ctx1.revert()
    }
  }, [windowSize.width, location])

  // SCROLL LOCK FOR SMOOTH SCROLLBAR
  // useCallback(() => {
  //   if (modalStore.open) {
  //     lockScrollbar()
  //   } else {
  //     unlockScrollbar()
  //   }
  // }, [modalStore.open])

  // useCallback(() => {
  //   if (scrollLockStore.locked) {
  //     lockScrollbar()
  //   } else {
  //     unlockScrollbar()
  //   }
  // }, [scrollLockStore.locked])

  return (
    <SmoothContext.Provider value={{ scrollToTop, lockScrollbar, unlockScrollbar, smooth }}>
      <div ref={scrollerRef}>
        <div ref={contentRef}>{children}</div>
      </div>
      <Menu />
      <MagnetCursor />
    </SmoothContext.Provider>
  )
}

export { WithSmooth }
