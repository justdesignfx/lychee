import gsap from "gsap"
import { useWindowSize } from "~/hooks"
import { qAll } from "~/utils"
import { breakpoints } from "~/variables"

export function marquee() {
  const marquees: HTMLElement[] = qAll("[data-marquee]")
  const marqueeSliding: HTMLElement[] = qAll("[data-marquee-sliding]")

  if (marquees.length <= 0) return

  gsap.set(marquees, { xPercent: -100 })

  /* ADD SKEW SECTION */
  let proxy = { skew: 0, scale: 0 }
  let skewSetter = gsap.quickSetter("[data-marquee-sliding]", "skewX", "deg") // fast
  let clamp = gsap.utils.clamp(-20, 20) // don't let the skew go beyond 20 degrees.

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
            // scaleSetter(proxy.scale)
          },
        })
      }
    },
  })

  marqueeSliding.forEach((marquee) => {
    gsap.to(marquee, {
      xPercent: () => (window.innerWidth > breakpoints.mobile ? 20 : 40) * (marquee.dataset.direction === "1" ? 1 : -1),
      scrollTrigger: {
        trigger: marquee,
        // // markers: true,
        scrub: true,
      },
    })
  })

  console.log("MARQUEE INITIALIZED")
}
