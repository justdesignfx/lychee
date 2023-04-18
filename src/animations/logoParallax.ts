import gsap from "gsap"
import { qAll } from "~/utils"

export function logoParallax() {
  const items = qAll("[data-logo-parallax='true']")

  if (items.length <= 0) return

  items.forEach((item: HTMLElement) => {
    const speedY = item.dataset.speedY || "0"
    const dirY = item.dataset.directionY || "0"

    const speedX = item.dataset.speedX || "0"
    const dirX = item.dataset.directionX || "0"

    gsap.to(item, {
      yPercent: () => 100 * parseFloat(speedY) * parseFloat(dirY),
      xPercent: () => 100 * parseFloat(speedX) * parseFloat(dirX),
      scrollTrigger: {
        id: "logo-parallax-items",
        trigger: item,
        scrub: 1,
        // markers: true,
      },
    })
  })

  console.log("LOGO PARALLAX ITEMS INITIALIZED")
}
