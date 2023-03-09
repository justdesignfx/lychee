import React from "react"
import s from "~/assets/scss/Footer.module.scss"

import logo from "~/assets/img/logo-lychee-footer.svg"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.imgC}>
        <img src={logo} alt="Lychee Logo" className={s.img} />
      </div>
    </footer>
  )
}

export default Footer
