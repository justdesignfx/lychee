import { useContext, useEffect, useState } from "react"
import s from "~/assets/scss/components/Menu.module.scss"

import cx from "classnames"
import { Link, useLocation } from "react-router-dom"
import arrow from "~/assets/img/arrow-right.svg"
import { SmoothContext } from "~/hocs/WithSmooth"

const Menu = () => {
  const [open, setOpen] = useState(false)

  const smoothContext = useContext(SmoothContext)

  const menuItems = [
    { ui: "Creators", path: "/creators" },
    { ui: "Brands", path: "/brands" },
    { ui: "Services", path: "/services" },
    { ui: "Clients", path: "/clients" },
    { ui: "About Us", path: "/about" },
    { ui: "Contact", path: "/contact" },
  ]

  function handleMenu() {
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    // TODO: lock below desktop
    if (open) {
      smoothContext.lockScrollbar()
    } else {
      smoothContext.unlockScrollbar()
    }
  }, [open])

  return (
    <div className={cx(s.menuC, { [s.open]: open })} data-hide-on-scroll>
      <div className={s.overlay} onClick={handleMenu}></div>
      <div className={s.hamburger} onClick={handleMenu}>
        <div className={s.horizontal}>
          <div className={s.lineC}>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>
          <div className={s.lineC}>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>
        </div>
        <div className={s.cross}>
          <div className={s.rotateC}>
            <div className={s.lineC}>
              <span className={s.line}></span>
              <span className={s.line}></span>
            </div>
          </div>
          <div className={s.rotateC}>
            <div className={s.lineC}>
              <span className={s.line}></span>
              <span className={s.line}></span>
            </div>
          </div>
        </div>
      </div>

      <div className={s.menu}>
        <ul className={s.menuItems}>
          {menuItems.map((item, i) => {
            return (
              <li className={s.menuItem} key={i}>
                <Link to={item.path} className={s.link} onClick={handleMenu}>
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
  )
}

export default Menu
