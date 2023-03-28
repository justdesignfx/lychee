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
          cursorStore.toggleLamp()
        },
      }),
    },
    leave: {
      ...(size.width > breakpoints.tablet && {
        onMouseLeave: () => {
          cursorStore.toggleLamp()
        },
      }),
    },
  }

  return (
    <footer className={s.footer}>
      <div className={s.imgC} {...cursorHandlers.enter} {...cursorHandlers.leave}>
        <Img src={logo} alt="Lychee Logo" zIndex="10" />
      </div>
      <FooterNavigation />
    </footer>
  )
}

export default Footer
