import React from "react"
import { Link } from "react-router-dom"
import s from "~/assets/scss/components/FooterNavigation.module.scss"

import cx from "classnames"

const FooterNavigation = () => {
  return (
    <div className={s.footerNavigation}>
      <nav className={s.navigation}>
        <div className={cx(s.col, s.address)}>
          <small className={s.label}>Adres:</small>
          <h5 className={s.text}>Suadiye Mah. Ersoy Sahil Sitesi Mehtap Apt. No:1 Kadıköy / İstanbul</h5>
        </div>
        <div className={cx(s.col, s.links)}>
          <Link className={s.link} to="/creators">
            Üreticiler
          </Link>
          <Link className={s.link} to="/brands">
            Markalar
          </Link>
          <Link className={s.link} to="/partners">
            Partnerler
          </Link>
        </div>
        <div className={cx(s.col, s.links)}>
          <Link className={s.link} to="/services">
            Hizmetler
          </Link>
          <Link className={s.link} to="/about">
            Hakkımızda
          </Link>
          <Link className={s.link} to="/contact">
            İletişim
          </Link>
        </div>
      </nav>

      <div className={s.copyright}>
        <small className={cx(s.item, s.rights)}>© 2023 Lychee. All rights reserved.</small>
        <a href="/" target="_blank" rel="noreferrer" className={cx(s.item, s.privacy)}>
          Privacy & Cookie Policy
        </a>
        <small className={cx(s.item, s.signature)}>
          Made by{" "}
          <a className={s.jdfx} target="_blank" rel="noreferrer" href="https://justdesignfx.com">
            JUST DESIGN FX
          </a>
          <sup>®</sup>{" "}
        </small>
      </div>
    </div>
  )
}

export default FooterNavigation
