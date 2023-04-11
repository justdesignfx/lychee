import { qSingle, qAll } from "~/utils"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"

export function floatingItems() {
  const container: HTMLElement[] = qSingle("[data-floating-items-c]")
  const sliding: HTMLElement[] = qSingle("[data-floating-items]")
  const items: HTMLElement[] = qAll("[data-floating-item]")

  if (items.length <= 0) return

  const scrollLength = 5000

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
      // // markers: true,
    },
  })

  // SET ITEMS INITIAL
  items.forEach((item, i: number) => {
    gsap.set(item, {
      x: () => `${50 * Math.pow(3, i)}px`,
      rotation: () => gsap.utils.random(-20, 20),
      z: 10,
    })
  })

  // ANIMATE
  const tl = gsap.timeline().add("s")

  items.forEach((item, i) => {
    tl.to(
      item,
      {
        x: () => `${-20 * i}px`,
        rotation: () => gsap.utils.random(-5, 5),
      },
      "s"
    )
  })

  ScrollTrigger.create({
    id: "floating-items",
    animation: tl,
    trigger: container,
    // markers: true,
    scrub: true,
    start: "top top",
    end: `bottom+=${scrollLength - 500}px top`,
  })

  console.log("STICKY TITLE INITIALIZED")
}
