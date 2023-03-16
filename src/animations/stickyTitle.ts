import { qSingle } from "~/utils"
import gsap from "gsap"

export function stickyTitle() {
  console.log("STICKY TITLE INITIALIZED")

  const container = document.querySelector("[data-sticky-title-container]")

  const stickyC = qSingle("[data-sticky-title-c]")
  const sticky = qSingle("[data-sticky-title]")

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
