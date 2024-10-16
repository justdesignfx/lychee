import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { qAll } from "~/utils"

export function slidingPanels() {
  const container = qAll("[data-sliding-panels]")
  const panels = qAll("[data-sliding-panel]")

  if (container.length <= 0) return

  let pinHeight = 0

  panels.forEach((panel: HTMLElement) => {
    pinHeight = pinHeight + panel.clientWidth
  })

  const tl = gsap
    .timeline()
    .to(panels[0], {
      width: 0,
    })
    .to(panels[1], {
      width: 0,
    })

  ScrollTrigger.create({
    id: "sliding-panels",
    animation: tl,
    trigger: container,
    pin: true,
    end: () => `+=${pinHeight}`,
    scrub: true,
    // markers: true,
  })

  /* ADD SKEW SECTION */
  let proxy = { skew: 0, scale: 0 }
  let skewSetter = gsap.quickSetter("[data-sliding-panel]", "skewX", "deg") // fast
  let unskewSetter = gsap.quickSetter("[data-sliding-panel-unskew]", "skewX", "deg") // fast

  let clamp = gsap.utils.clamp(-10, 10) // don't let the skew go beyond 20 degrees.

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -200)

      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew
        gsap.to(proxy, {
          // xPercent: () => 100 * self.direction,
          skew: 0,
          duration: 0.4,
          ease: "power3",
          overwrite: true,
          onUpdate: () => {
            skewSetter(proxy.skew)
            unskewSetter(-proxy.skew)
          },
        })
      }
    },
  })

  console.log("SLIDING PANELS INITIALIZED")
}
