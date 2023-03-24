import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { qAll } from "~/utils"

export function hideOnScroll() {
  // HAMBURGER HIDE/SHOW
  const items: HTMLElement[] = qAll("[data-hide-on-scroll]")

  if (items.length <= 0) return

  const showAnim = gsap
    .from(items, {
      autoAlpha: 0,
      paused: true,
      duration: 0.2,
    })
    .progress(1)

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    // // markers: true,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    },
  })
}
