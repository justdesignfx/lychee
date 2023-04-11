import gsap from "gsap"
import { qSingle } from "~/utils"
import { qAll } from "./../utils/index"

export function stickyItem() {
  const stickyContainers: HTMLElement[] = qAll("[data-sticky-item-c]")
  const stickies: HTMLElement[] = qAll("[data-sticky-item]")
  const footer = qSingle("footer")

  if (stickies.length <= 0 || stickyContainers.length <= 0) return

  const bodyHeight =
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    ) - window.innerHeight

  stickies.forEach((sticky, i) => {
    gsap.to(sticky, {
      scrollTrigger: {
        trigger: sticky,
        start: `top top+=${sticky.offsetTop}}px`,
        end: `+=${bodyHeight - footer.clientHeight}px top+=${sticky.offsetTop}}px`,
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
        // markers: true,
      },
    })
  })

  console.log("STICKY ITEM INITIALIZED")
}
