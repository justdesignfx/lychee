import gsap, { Power1 } from "gsap"
import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { WithSmooth } from "./hocs/WithSmooth"
import { useWindowSize } from "./hooks"
import Contact from "./pages/Contact"
import ContactBrand from "./pages/ContactBrand"
import Home from "./pages/Home"

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
      <div>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="/contact/brand" element={<ContactBrand />}></Route>
        </Routes>
      </div>
    </WithSmooth>
  )
}

export default App
