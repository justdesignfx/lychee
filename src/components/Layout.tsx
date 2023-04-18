import { Route, Routes } from "react-router"

import ContactIntro from "~/components/ContactIntro"
import About from "~/pages/About"
import Brands from "~/pages/Brands"
import Contact from "~/pages/Contact"
import ContactBrand from "~/pages/ContactBrand"
import ContactContentCreator from "~/pages/ContactContentCreator"
import Creators from "~/pages/Creators"
import Home from "~/pages/Home"
import NotFound from "~/pages/NotFound"
import Partners from "~/pages/Partners"
import Services from "~/pages/Services"

type Props = {
  displayLocation: any
}

const Layout = (props: Props) => {
  return (
    <div data-route-transition>
      <Routes location={props.displayLocation}>
        <Route index element={<Home />}></Route>

        <Route path="contact" element={<Contact />}>
          <Route index element={<ContactIntro />}></Route>
          <Route path="brand" element={<ContactBrand />}></Route>
        </Route>
        <Route path="iletisim" element={<Contact />}>
          <Route index element={<ContactIntro />}></Route>
          <Route path="marka" element={<ContactBrand />}></Route>
        </Route>

        <Route path="contact/content-creator" element={<ContactContentCreator />}></Route>
        <Route path="iletisim/icerik-uretici" element={<ContactContentCreator />}></Route>

        <Route path="services" element={<Services />}></Route>
        <Route path="hizmetler" element={<Services />}></Route>

        <Route path="creators" element={<Creators />}></Route>
        <Route path="ureticiler" element={<Creators />}></Route>

        <Route path="brands" element={<Brands />}></Route>
        <Route path="markalar" element={<Brands />}></Route>

        <Route path="about" element={<About />}></Route>
        <Route path="hakkimizda" element={<About />}></Route>

        <Route path="partners" element={<Partners />}></Route>
        <Route path="partnerler" element={<Partners />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default Layout
