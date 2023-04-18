import { qAll, qSingle } from "./../utils/index"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function textReveal() {
  const container = qSingle("[data-h-scroll]")

  if (!container) return

  const scrollLength = 5000

  gsap.to(qAll("[data-h-scroll-section]"), {
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
      // markers: true,
    },
  })

  const letters = qAll("[data-letter]")

  const mustSeen = 9

  letters.forEach((letter: any, i: number) => {
    let distance = Math.pow(Math.max(i - mustSeen, 0), 1.4)

    i > mustSeen &&
      gsap.set(letter, {
        y: () => `${distance}px`,
        rotation: distance * 0.025,
        opacity: gsap.utils.mapRange(mustSeen, letters.length - 1, 0.7, 0, distance),
        willChange: "transform",
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
    id: "text-reveal",
    animation: tl,
    trigger: container,
    scrub: true,
    start: "top top",
    end: `bottom+=${scrollLength - 1000}px top`,
    // markers: true,
  })

  console.log("HORIZONTAL SCROLL INITIALIZED")
}
