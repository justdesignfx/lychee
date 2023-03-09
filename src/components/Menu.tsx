import React from "react"
import s from "~/assets/scss/Menu.module.scss"

const Menu = () => {
  return (
    <div className={s.menu}>
      <div className={s.hamburger}>
        <div className={s.lineC}>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </div>
        <div className={s.lineC}>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </div>
      </div>
    </div>
  )
}

export default Menu
