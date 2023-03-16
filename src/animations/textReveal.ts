import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function textReveal(selector: any) {
  // HORIZONTAL SCROLL
  console.log("HORIZONTAL SCROLL INITIALIZED")

  const scrollLength = 5000

  const container = selector("[data-h-scroll]")[0]

  const horizontalScroll = gsap.to(selector("[data-h-scroll-section]"), {
    x: window.innerWidth,
    xPercent: -100,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true,
      start: "center center",
      end: `bottom+=${scrollLength}px top`,
      // markers: true,
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

  ScrollTrigger.create({
    animation: tl,
    trigger: container,
    markers: true,
    scrub: true,
    start: "top top",
    end: `bottom+=${scrollLength - 500}px top`,
  })
}
