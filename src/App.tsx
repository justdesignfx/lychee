import gsap, { Power1 } from "gsap"
import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router"
import ContactIntro from "./components/ContactIntro"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { WithSmooth } from "./hocs/WithSmooth"
import { useWindowSize } from "./hooks"
import Contact from "./pages/Contact"
import ContactBrand from "./pages/ContactBrand"
import ContactContentCreator from "./pages/ContactContentCreator"
import Home from "./pages/Home"
import Services from "./pages/Services"

function App() {
  const windowSize = useWindowSize()
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
  }, [location, displayLocation, windowSize.width])

  return (
    <WithSmooth location={displayLocation}>
      <div data-route-transition>
        <Header />
        <Routes location={displayLocation}>
          <Route index element={<Home />}></Route>
          <Route path="contact" element={<Contact />}>
            <Route index element={<ContactIntro />}></Route>
            <Route path="brand" element={<ContactBrand />}></Route>
            <Route path="content-creator" element={<ContactContentCreator />}></Route>
          </Route>
          <Route path="services" element={<Services />}></Route>
        </Routes>
      </div>
    </WithSmooth>
  )
}

export default App
