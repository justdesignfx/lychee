import gsap from "gsap"

export function parallaxItems(selector: any) {
  const parallaxItems = selector("[data-parallax]")

  if (parallaxItems.length > 0) return

  parallaxItems.forEach((item: any) => {
    gsap.to(item, {
      yPercent: () => 100 * parseFloat(item.dataset.speedY) * parseFloat(item.dataset.directionY),
      xPercent: () => 100 * parseFloat(item.dataset.speedX) * parseFloat(item.dataset.directionX),
      scrollTrigger: {
        trigger: item,
        scrub: 1,
        // markers: true,
      },
    })
  })

  console.log("PARALLAX ITEMS INITIALIZED")
}
