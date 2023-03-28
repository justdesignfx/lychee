import s from "~/assets/scss/components/Header.module.scss"

import { Link } from "react-router-dom"
import logo from "~/assets/img/logo-lychee-white.svg"
import Img from "./Img"

const Header = () => {
  return (
    <header className={s.header} data-hide-on-scroll>
      <Link to="/" className={s.logoC}>
        <Img src={logo} alt="Lychee Logo" />
      </Link>
    </header>
  )
}

export default Header
