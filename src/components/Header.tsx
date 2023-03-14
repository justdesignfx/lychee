import React from "react"
import s from "~/assets/scss/components/Header.module.scss"

import logo from "~/assets/img/logo-lychee-white.svg"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.imgC}>
        <img className={s.img} src={logo} alt="Lychee Logo" />
      </Link>
    </header>
  )
}

export default Header
