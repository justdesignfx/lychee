import { qSingle } from "./../utils/index"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function textReveal(selector: any) {
  const container = qSingle("[data-h-scroll]")

  if (!container) return

  const scrollLength = 5000

  const lamp = qSingle("[data-lamp]")

  gsap.set(lamp, {
    scale: 0,
  })

  gsap.to(selector("[data-h-scroll-section]"), {
    x: window.innerWidth,
    xPercent: -100,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      id: "horizontal-scroll",
      trigger: container,
      pin: true,
      scrub: true,
      start: "center center",
      end: `bottom+=${scrollLength}px top`,
      pinSpacing: true,
      markers: true,
    },
  })

  const letters = selector("[data-letter]")

  letters.forEach((letter: any, i: number) => {
    gsap.set(letter, {
      y: () => `${10 * i}px`,
      rotation: i * 0.25,
      opacity: 1 - i * 0.1,
    })
  })

  const tl = gsap.timeline()

  letters.forEach((letter: any) => {
    tl.to(letter, {
      y: 0,
      rotation: 0,
      opacity: 1,
      delay: -0.45,
    })
  })

  const lampTL = gsap.timeline()

  lampTL
    .to(lamp, {
      scale: 1,
      duration: 3,
    })
    .to(lamp, {
      scale: 0,
      duration: 2,
    })

  ScrollTrigger.create({
    id: "lamp",
    animation: lampTL,
    trigger: container,
    markers: true,
    scrub: true,
    start: "top top",
    end: `bottom+=${scrollLength - 1000}px top`,
  })

  ScrollTrigger.create({
    id: "text-reveal",
    animation: tl,
    trigger: container,
    markers: true,
    scrub: true,
    start: "top top",
    end: `bottom+=${scrollLength - 1000}px top`,
  })

  console.log("HORIZONTAL SCROLL INITIALIZED")
}
