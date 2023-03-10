import { ScrollTrigger } from "gsap/ScrollTrigger"

export function horizontalScroll(gsap: any, q: any) {
  // HORIZONTAL SCROLL
  console.log("HORIZONTAL SCROLL INITIALIZED")

  const container = q("[data-h-scroll]")[0]

  const horizontalScroll = gsap.to(q("[data-h-scroll-section]"), {
    x: window.innerWidth,
    xPercent: -100,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true,
      start: "center center",
      end: "bottom top",
      // markers: true,
    },
  })

  const letters = q("[data-letter]")

  letters.forEach((letter: any, i: number) => {
    gsap.set(letter, {
      y: () => `${20 + 20 * i}px`,
      rotation: i * 0.25,
      opacity: 1 - i * 0.1,
    })
  })

  const tl = gsap.timeline()

  letters.forEach((letter: any) => {
    tl.to(letter, {
      y: 0,
      rotation: 0,
      opacity: 1,
      delay: -0.4,
    })

    // tl.to(letter, {
    //   yPercent: 10,
    // })
  })

  ScrollTrigger.create({
    animation: tl,
    trigger: container,
    markers: true,
    scrub: true,
    start: "top top",
  })
}
