import React, { ReactElement, useCallback, useEffect, useLayoutEffect, useRef } from "react"
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useResizeDetector } from "react-resize-detector"

import { floatingItems, parallaxItems, slidingPanels, stickyTitle, textReveal, framedParallax } from "~/animations"

import { breakpoints } from "~/variables"
import { useWindowSize } from "~/hooks"

import MagnetCursor from "~/components/MagnetCursor"
import Menu from "~/components/Menu"
import Modal from "~/components/Modal"
import Header from "~/components/Header"
import { hideOnScroll } from "~/animations/hideOnScroll"
import { marquee } from "~/animations/marquee"

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

  const size = useWindowSize()

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

  const onResize = useCallback(() => {
    ScrollTrigger.refresh()
    console.log("SCROLLTRIGGER REFRESHED")
  }, [])

  useResizeDetector({ targetRef: contentRef, onResize })

  useEffect(() => {
    let ctx: gsap.Context
    let animationsContext: gsap.Context

    if (smooth.current) {
      smooth.current.destroy()
      console.log("Smooth Destroyed")
    }

    const initAnimations = () => {
      animationsContext = gsap.context(() => {
        size.width > breakpoints.tablet && textReveal()
        marquee()
        size.width > breakpoints.tablet && stickyTitle()
        parallaxItems()
        size.width > breakpoints.tablet && floatingItems()
        size.width > breakpoints.tablet && framedParallax()
        hideOnScroll()
        size.width > breakpoints.tablet && slidingPanels()
      })
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

      initAnimations()

      smooth.current?.addListener(ScrollTrigger.update)
      ScrollTrigger.defaults({ scroller: scrollerRef.current })

      // Only necessary to correct marker position - not needed in production
      if (document.querySelector(".gsap-marker-scroller-start")) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]')

        smooth.current?.addListener(({ offset }: any) => {
          gsap.set(markers, { marginTop: -offset.y })
        })
      }
    }

    if (size.width > breakpoints.tablet) {
      initSmoothScrollbar()
      console.log("DESKTOP", size.width)
    } else {
      initAnimations()
    }

    return () => {
      clearScrollTriggers()
      ctx && ctx.revert()
      animationsContext && animationsContext.revert()
    }
  }, [size.width, location])

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
      <Header />
      <div ref={scrollerRef}>
        <div ref={contentRef}>{children}</div>
      </div>
      <Menu />
      <MagnetCursor />
      <Modal />
    </SmoothContext.Provider>
  )
}

export { WithSmooth }
