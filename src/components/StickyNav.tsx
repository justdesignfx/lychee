import React from "react"
import s from "~/assets/scss/components/StickyNav.module.scss"

const StickyNav = () => {
  return (
    <nav className={s.stickyNav} data-sticky-item>
      <div className={s.navItem}>
        <p>Markalar</p>
      </div>
      <div className={s.navItem}>
        <p>Üreticiler</p>
      </div>
    </nav>
  )
}

export default StickyNav
