import gsap from "gsap"
import { qAll } from "./../utils/index"

export function stickyItem() {
  const stickyContainers: HTMLElement[] = qAll("[data-sticky-item-c]")
  const stickies: HTMLElement[] = qAll("[data-sticky-item]")

  if (stickies.length <= 0 || stickyContainers.length <= 0) return

  stickies.forEach((sticky, i) => {
    gsap.to(sticky, {
      scrollTrigger: {
        trigger: sticky,
        start: `top top+=${sticky.getBoundingClientRect().top}}px`,
        end: `+=${stickyContainers[i].offsetHeight - window.innerHeight}px`,
        scrub: true,
        pin: true,
        onLeave: () => {
          gsap.to(sticky, {
            autoAlpha: 0,
            duration: 0.2,
          })
        },
        onEnterBack: () => {
          gsap.to(sticky, {
            autoAlpha: 1,
            duration: 0.4,
          })
        },
        id: `sticky-item-${i}`,
        pinSpacing: false,
        markers: true,
      },
    })
  })

  console.log("STICKY ITEM INITIALIZED")
}
