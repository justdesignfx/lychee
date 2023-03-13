import React from "react"
import s from "~/assets/scss/components/Footer.module.scss"

import logo from "~/assets/img/logo-lychee-footer.svg"
import FooterNavigation from "./FooterNavigation"
import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"
import { useCursorStore } from "~/store/cursorStore"

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
        <img src={logo} alt="Lychee Logo" className={s.img} />
      </div>
      <FooterNavigation />
    </footer>
  )
}

export default Footer
