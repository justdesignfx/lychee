import React, { ReactElement, useCallback, useEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import { useResizeDetector } from "react-resize-detector"
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar"

import {
  floatingItems,
  framedParallax,
  hideOnScroll,
  marquee,
  parallaxItems,
  slidingPanels,
  stickyTitle,
  textReveal,
} from "~/animations"

import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"

import { stickyItem } from "~/animations/stickyItem"
import Header from "~/components/Header"
import MagnetCursor from "~/components/MagnetCursor"
import Menu from "~/components/Menu"
import Modal from "~/components/Modal"
import StickyNav from "~/components/StickyNav"
import { qSingle } from "~/utils"

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
  const size = useWindowSize()
  let animationsContext: gsap.Context
  let smoothFrameCtx: gsap.Context

  const refreshScrollTrigger = () => {
    ScrollTrigger.refresh()
    console.log("SCROLLTRIGGER REFRESHED")
  }

  const cleanupAnimations = () => {
    animationsContext?.revert()
    smoothFrameCtx?.revert()

    ScrollTrigger.getAll().forEach((instance) => {
      console.log(instance)
      instance.kill()
    })

    // This in case a scroll animation is active while the route is updated
    gsap.killTweensOf(window)
  }

  const initAnimations = () => {
    animationsContext = gsap.context(() => {
      size.width > breakpoints.tablet && textReveal()
      size.width > breakpoints.tablet && stickyTitle()
      size.width > breakpoints.tablet && floatingItems()
      size.width > breakpoints.tablet && framedParallax()
      size.width > breakpoints.tablet && slidingPanels()

      hideOnScroll()
      parallaxItems()
      marquee()
      stickyItem()
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

    class MobilePlugin extends ScrollbarPlugin {
      static pluginName = "mobile"
      static defaultOptions = {
        speed: 0.75,
      }

      transformDelta(delta: any, fromEvent: any) {
        if (fromEvent.type !== "touchend") {
          return delta
        }

        return {
          x: delta.x * this.options.speed,
          y: delta.y * this.options.speed,
        }
      }
    }

    Scrollbar.use(ModalPlugin)
    Scrollbar.use(MobilePlugin)

    if (scrollerRef.current) {
      smooth.current = Scrollbar.init(scrollerRef.current, {
        damping: 0.75,
        delegateTo: document,
        alwaysShowTracks: false,
        renderByPixels: false,
      })
      console.log("%c Smooth Initialized", "background: #222; color: #bada55")
    }

    smoothFrameCtx = gsap.context(() => {
      // disable bounce
      size.width > breakpoints.tablet &&
        gsap.set("body", {
          height: size.height,
          width: "100vw",
          overflow: "hidden",
        })
      // disable bounce

      gsap.set(scrollerRef.current, {
        height: size.height,
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

    initAnimations()
    updateMarkers()
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

  const updateMarkers = () => {
    // Only necessary to correct marker position - not needed in production
    if (qSingle(".gsap-marker-scroller-start")) {
      const markers = gsap.utils.toArray('[class *= "gsap-marker"]')

      smooth.current?.addListener(({ offset }: any) => {
        gsap.set(markers, { marginTop: -offset.y })
      })
    }
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
    cleanupAnimations()
    initSmoothScrollbar()
    refreshScrollTrigger()
  }, [])

  useResizeDetector({ targetRef: contentRef, onResize })

  useEffect(() => {
    if (smooth.current) {
      smooth.current.destroy()
      console.log("%c Smooth Destroyed", "background: #222; color: blue")
    }

    initSmoothScrollbar()

    return () => {
      cleanupAnimations()
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
        <div ref={contentRef} className="app-content">
          {children}
        </div>
      </div>
      <Menu />
      <MagnetCursor />
      <Modal />
      {<StickyNav pathname={location.pathname} />}
    </SmoothContext.Provider>
  )
}

export { WithSmooth }
