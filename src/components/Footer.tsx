import React from "react"
import s from "~/assets/scss/components/Footer.module.scss"

import logo from "~/assets/img/logo-lychee-footer.svg"
import FooterNavigation from "./FooterNavigation"
import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"
import { useCursorStore } from "~/store/cursorStore"
import Img from "./Img"
import { Link } from "react-router-dom"

import sticker from "~/assets/img/sticker-bans.svg"

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
      <div className={s.eventC}>
        <div className={s.top} {...cursorHandlers.enter} {...cursorHandlers.leave}>
          <div className={s.imgC}>
            <Img src={logo} alt="Lychee Logo" zIndex="10" objectFit="contain" />
          </div>
          <div className={s.social}>
            <div className={s.text}>
              <div className={s.stickerC}>
                <Img src={sticker} alt="Bans" objectFit="contain" zIndex="10" />
              </div>
              <h6 className={s.takip}>bizi takip edin</h6>
              <h6 className={s.followUs}>follow us</h6>
            </div>
            <div className={s.links}>
              <Link to="/" className={s.linkC}>
                Tiktok
              </Link>
              <Link to="/" className={s.linkC}>
                Youtube
              </Link>
              <Link to="/" className={s.linkC}>
                Linkedin
              </Link>
              <Link to="/" className={s.linkC}>
                Instagram
              </Link>
              <Link to="/" className={s.linkC}>
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FooterNavigation />
    </footer>
  )
}

export default Footer
