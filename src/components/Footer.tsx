import s from "~/assets/scss/components/Footer.module.scss"

import { Link } from "react-router-dom"

import logo from "~/assets/img/logo-lychee-footer.svg"
import sticker from "~/assets/img/sticker-bans.svg"
import FooterNavigation from "~/components/FooterNavigation"
import Img from "~/components/Img"

import { useWindowSize } from "~/hooks"
import { useCursorStore } from "~/store/cursorStore"
import { breakpoints } from "~/variables"

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
              <Link
                to="https://www.tiktok.com/@lycheenewmedia"
                target="_blank"
                rel="noreferrer noopener"
                className={s.linkC}
              >
                Tiktok
              </Link>
              <Link
                to="https://www.youtube.com/@lycheedigital"
                target="_blank"
                rel="noreferrer noopener"
                className={s.linkC}
              >
                Youtube
              </Link>
              <Link
                to="https://www.linkedin.com/company/lycheedigital/"
                target="_blank"
                rel="noreferrer noopener"
                className={s.linkC}
              >
                Linkedin
              </Link>
              <Link
                to="https://www.instagram.com/lycheedigital/"
                target="_blank"
                rel="noreferrer noopener"
                className={s.linkC}
              >
                Instagram
              </Link>
              <Link
                to="https://www.twitter.com/lycheenewmedia"
                target="_blank"
                rel="noreferrer noopener"
                className={s.linkC}
              >
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
