import gsap from "gsap"
import { qAll } from "./../utils/index"

export function stickyTitle() {
  const stickyContainers: HTMLElement[] = qAll("[data-sticky-title-c]")
  const stickies: HTMLElement[] = qAll("[data-sticky-title]")

  if (stickies.length <= 0 || stickyContainers.length <= 0) return

  stickies.forEach((sticky, i) => {
    gsap.to(sticky, {
      scrollTrigger: {
        trigger: sticky,
        scrub: true,
        start: "top+=25% top+=25%",
        end: `+=${stickyContainers[i].offsetHeight - sticky.offsetHeight}px`,
        pin: true,
        id: `sticky-title-${i}`,
        pinSpacing: false,
        // markers: true,
      },
    })
  })

  console.log("STICKY TITLE INITIALIZED")
}
