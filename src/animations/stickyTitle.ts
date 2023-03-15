import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function stickyTitle(selector: any) {
  console.log("SLIDING PANELS INITIALIZED")

  const container = document.querySelector("[data-sticky-title-container]")
  const stickyC = document.querySelector("[data-sticky-title-c]")
  const sticky = document.querySelector("[data-sticky-title]")

  gsap.to(sticky, {
    yPercent: 900,
    ease: "none",
    scrollTrigger: {
      trigger: stickyC,
      scrub: true,
      markers: true,
      start: "top top",
      end: `bottom top`,
    },
  })
}
