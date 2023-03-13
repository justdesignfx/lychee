import { useState } from "react"
import s from "~/assets/scss/components/Menu.module.scss"

import cx from "classnames"
import { Link } from "react-router-dom"
import arrow from "~/assets/img/arrow-right.svg"

const Menu = () => {
  const [open, setOpen] = useState(false)

  function handleMenu() {
    setOpen((prev) => !prev)
  }

  const menuItems = [
    { ui: "Creators", path: "/creators" },
    { ui: "Brands", path: "/brands" },
    { ui: "Services", path: "/services" },
    { ui: "Clients", path: "/clients" },
    { ui: "About Us", path: "/about-us" },
    { ui: "Contact", path: "/contact" },
  ]

  return (
    <div className={cx(s.menuC, { [s.open]: open })}>
      <div className={s.overlay} onClick={handleMenu}></div>
      <div className={s.menu} data-hamburger-menu>
        <div className={s.hamburger} onClick={handleMenu}>
          <div className={s.lineC}>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>
          <div className={s.lineC}>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>
        </div>
        <div className={s.menuC}>
          <ul className={s.menuItems}>
            {menuItems.map((item) => {
              return (
                <li className={s.menuItem}>
                  <Link to={item.path} className={s.link}>
                    <div className={s.imgC}>
                      <img className={s.img} src={arrow} alt="Arrow" />
                    </div>
                    <span className={s.text}>{item.ui}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
