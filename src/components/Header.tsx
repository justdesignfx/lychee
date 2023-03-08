import React from "react"
import s from "~/assets/scss/Header.module.scss"

import logo from "~/assets/img/logo.png"

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoWrapper}>
        <img className={s.logo} src={logo} alt="Lychee Logo" />
      </div>
    </header>
  )
}

export default Header
