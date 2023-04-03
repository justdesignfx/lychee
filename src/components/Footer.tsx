import React from "react"
import s from "~/assets/scss/components/Footer.module.scss"

import logo from "~/assets/img/logo-lychee-footer.svg"
import FooterNavigation from "./FooterNavigation"
import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"
import { useCursorStore } from "~/store/cursorStore"
import Img from "./Img"

const Footer = () => {
  const size = useWindowSize()
  const cursorStore = useCursorStore()

  const cursorHandlers = {
    enter: {
      ...(size.width > breakpoints.tablet && {
        onMouseEnter: () => {
          cursorStore.setCursor("lamp")
        },
      }),
    },
    leave: {
      ...(size.width > breakpoints.tablet && {
        onMouseLeave: () => {
          cursorStore.setCursor("default")
        },
      }),
    },
  }

  return (
    <footer className={s.footer}>
      <div className={s.imgC}>
        <div className={s.eventC} {...cursorHandlers.enter} {...cursorHandlers.leave}>
          <Img src={logo} alt="Lychee Logo" zIndex="10" />
        </div>
      </div>
      <FooterNavigation />
    </footer>
  )
}

export default Footer
