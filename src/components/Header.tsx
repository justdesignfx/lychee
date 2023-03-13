import React from "react"
import s from "~/assets/scss/components/Header.module.scss"

import logo from "~/assets/img/logo-lychee-white.svg"

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.imgC}>
        <img className={s.img} src={logo} alt="Lychee Logo" />
      </div>
    </header>
  )
}

export default Header
