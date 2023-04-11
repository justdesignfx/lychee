import { ReactElement, useCallback, useEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useResizeDetector } from "react-resize-detector"

import { hideOnScroll, marquee, parallaxItems } from "~/animations"

import { useWindowSize } from "~/hooks"

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
  let animationsContext: gsap.Context

  const refreshScrollTrigger = () => {
    ScrollTrigger.refresh()
    console.log("SCROLLTRIGGER REFRESHED")
  }

  const cleanupAnimations = () => {
    animationsContext?.revert()

    ScrollTrigger.getAll().forEach((instance) => {
      console.log(instance)

      instance.kill()
    })

    // This in case a scroll animation is active while the route is updated
    gsap.killTweensOf(window)
  }

  const initAnimations = () => {
    animationsContext = gsap.context(() => {
      hideOnScroll()
      parallaxItems()
      marquee()
      stickyItem()
    })
  }

  const onResize = useCallback(() => {
    cleanupAnimations()
    initAnimations()
    refreshScrollTrigger()
  }, [])

  useResizeDetector({ targetRef: contentRef, onResize })

  useEffect(() => {
    initAnimations()

    return () => {
      cleanupAnimations()
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
