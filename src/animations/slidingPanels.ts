import { ScrollTrigger } from "gsap/ScrollTrigger"

export function slidingPanels(gsap: any, selector: any) {
  console.log("SLIDING PANELS INITIALIZED")

  const container = selector("[data-sliding-panels]")[0]
  const panels = selector("[data-sliding-panel]")

  let pinHeight = 0

  panels.forEach((panel: any) => {
    pinHeight = pinHeight + panel.clientWidth
  })

  const tl = gsap
    .timeline()
    .to(panels[0], {
      scaleX: 0,
    })
    .to(panels[1], {
      scaleX: 0,
    })
    .to(panels[2], {
      scaleX: 0,
    })

  ScrollTrigger.create({
    animation: tl,
    trigger: container,
    pin: true,
    end: () => `+=${pinHeight}`,
    scrub: true,
    markers: true,
  })
}
