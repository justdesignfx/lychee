import gsap from "gsap"
import { qAll } from "~/utils"

export function framedParallax() {
  const frames: HTMLElement[] = qAll("[data-framed-parallax-frame]")
  const items: HTMLElement[] = qAll("[data-framed-parallax-sliding]")

  if (items.length <= 0) return

  items.forEach((item, i) => {
    const speedY = item.dataset.speedY || "0"
    const dirY = item.dataset.directionY || "0"

    const speedX = item.dataset.speedX || "0"
    const dirX = item.dataset.directionX || "0"

    gsap.set(item, {
      yPercent: () => 100 * parseFloat(speedY) * parseFloat(dirY) * -1,
      xPercent: () => 100 * parseFloat(speedX) * parseFloat(dirX) * -1,
      scale: 1.1,
    })

    gsap.to(item, {
      yPercent: () => 100 * parseFloat(speedY) * parseFloat(dirY),
      xPercent: () => 100 * parseFloat(speedX) * parseFloat(dirX),
      scrollTrigger: {
        id: "framed-parallax",
        trigger: frames[i],
        scrub: 1,
        markers: true,
      },
    })
  })

  console.log("FRAMED PARALLAX ITEMS INITIALIZED")
}
