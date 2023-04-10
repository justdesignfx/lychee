import React, { ReactElement, useCallback, useEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useResizeDetector } from "react-resize-detector"

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

gsap.registerPlugin(ScrollTrigger)

interface Props {
  children: ReactElement
  location?: any
}

const WithoutSmooth = ({ children, location }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const size = useWindowSize()

  const clearScrollTriggers = () => {
    ScrollTrigger.getAll().forEach((instance) => {
      console.log(instance)

      instance.kill()
    })

    // This in case a scroll animation is active while the route is updated
    gsap.killTweensOf(window)
  }

  const onResize = useCallback(() => {
    ScrollTrigger.refresh()
    console.log("SCROLLTRIGGER REFRESHED")
  }, [])

  useResizeDetector({ targetRef: contentRef, onResize })

  useEffect(() => {
    let animationsContext: gsap.Context

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

    initAnimations()

    return () => {
      clearScrollTriggers()
      animationsContext && animationsContext.revert()
    }
  }, [size.width, location])

  return (
    <>
      <Header />
      <div ref={contentRef}>{children}</div>
      <Menu />
      <MagnetCursor />
      <Modal />
      {<StickyNav pathname={location.pathname} />}
    </>
  )
}

export { WithoutSmooth }
