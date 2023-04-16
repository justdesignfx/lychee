import { useEffect, useState } from "react"

import { useLocation } from "react-router"
import gsap, { Power1 } from "gsap"

import Layout from "~/components/Layout"
import { WithSmooth } from "~/hocs/WithSmooth"
import { WithoutSmooth } from "~/hocs/WithoutSmooth"
import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"
import Noise from "~/components/Noise"
import FixedLink from "./components/FixedLink"

function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const size = useWindowSize()

  useEffect(() => {
    const transitionElements = Array.from(document.querySelectorAll("[data-route-transition]"))

    if (location !== displayLocation) {
      gsap.to(transitionElements, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: Power1.easeInOut,
        onComplete: () => {
          window.scrollTo(0, 0)
          gsap.to(transitionElements, {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.4,
            delay: 1,
            ease: Power1.easeInOut,
          })
          setDisplayLocation(location)
        },
      })
    }
  }, [location, displayLocation, size.width])

  return (
    <>
      <Noise />
      <FixedLink />
      {size.width > breakpoints.tablet ? (
        <WithSmooth location={displayLocation}>
          <Layout displayLocation={displayLocation} />
        </WithSmooth>
      ) : (
        <WithoutSmooth location={displayLocation}>
          <Layout displayLocation={displayLocation} />
        </WithoutSmooth>
      )}
    </>
  )
}

export default App
