import gsap from "gsap"

export function parallaxItems(selector: any) {
  const items = selector("[data-parallax]")
  console.log(items, items.length)

  if (items.length <= 0) return

  console.log(items)

  items.forEach((item: HTMLElement) => {
    const speedY = item.dataset.speedY || "0"
    const dirY = item.dataset.directionY || "0"

    const speedX = item.dataset.speedX || "0"
    const dirX = item.dataset.directionX || "0"

    gsap.to(item, {
      yPercent: () => 100 * parseFloat(speedY) * parseFloat(dirY),
      xPercent: () => 100 * parseFloat(speedX) * parseFloat(dirX),
      scrollTrigger: {
        trigger: item,
        scrub: 1,
        markers: true,
      },
    })
  })

  console.log("PARALLAX ITEMS INITIALIZED")
}
