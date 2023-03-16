import { qSingle, qAll } from "~/utils"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"

export function floatingItems() {
  const container: HTMLElement[] = qSingle("[data-floating-items-c]")
  const sliding: HTMLElement[] = qSingle("[data-floating-items]")
  const items: HTMLElement[] = qAll("[data-floating-item]")

  console.log(items)

  if (items.length <= 0) return

  const scrollLength = 3000

  gsap.to(sliding, {
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

  // SET
  items.forEach((item, i: number) => {
    gsap.set(item, {
      x: () => `${500 + 400 * i}px`,
      rotation: () => gsap.utils.random(-30, 30),
      opacity: 0,
      z: 10,
    })
  })

  // ANIMATE
  const tl = gsap.timeline().add("s")

  items.forEach((item, i) => {
    tl.to(
      item,
      {
        x: () => `${-50 * i}px`,
        rotation: () => gsap.utils.random(-5, 5),
      },
      "s"
    ).to(item, {
      opacity: 1,
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

  console.log("STICKY TITLE INITIALIZED")
}
