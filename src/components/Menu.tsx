import { useContext, useState } from "react"
import s from "~/assets/scss/components/Menu.module.scss"

import cx from "classnames"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import arrow from "~/assets/img/arrow-right.svg"
import { SmoothContext } from "~/hocs/WithSmooth"
import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"
import IconInstagram from "./Icons/IconInstagram"
import IconYoutube from "./Icons/IconYoutube"
import IconLinkedin from "./Icons/IconLinkedin"
import IconTwitter from "./Icons/IconTwitter"
import IconTiktok from "./Icons/IconTiktok"

const Menu = () => {
  const [open, setOpen] = useState(false)
  const size = useWindowSize()

  const smoothContext = useContext(SmoothContext)

  const menuItems = [
    { ui: "Creators", path: "/creators" },
    { ui: "Brands", path: "/brands" },
    { ui: "Services", path: "/services" },
    { ui: "Partners", path: "/partners" },
    { ui: "About Us", path: "/about" },
    { ui: "Contact", path: "/contact" },
  ]

  function handleMenu() {
    setOpen((prev) => !prev)

    if (open) {
      smoothContext?.unlockScrollbar()
    } else {
      smoothContext?.lockScrollbar()
    }
  }

  // useEffect(() => {
  //   // TODO: lock below desktop
  //   if (open) {
  //     smoothContext.lockScrollbar()
  //   } else {
  //     smoothContext.unlockScrollbar()
  //     console.log("in")
  //   }
  // }, [open])

  const hamburgerVariants = {
    open: { background: "#16161c" },
    close: { background: "#ce1953" },
  }

  function responsiveBorderRadius() {
    return size.width > breakpoints.mobile ? 27 : 17
  }

  return (
    <motion.div className={cx(s.menuC, { [s.open]: open })} data-hide-on-scroll>
      <AnimatePresence>
        {open && (
          <motion.div
            className={s.overlay}
            onClick={handleMenu}
            initial={{ opacity: 0, pointerEvents: "none" }}
            animate={{ opacity: 0.7, pointerEvents: "auto", transition: { duration: 0.4 } }}
            exit={{ opacity: 0, pointerEvents: "none", transition: { duration: 0.2 } }}
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={s.hamburger}
        onClick={handleMenu}
        variants={hamburgerVariants}
        transition={{ duration: 0.2, delay: 0.2 }}
        animate={open ? "open" : "close"}
      >
        <div className={s.horizontal}>
          <div className={s.lineC}>
            <span className={cx(s.line, s.glitched)}></span>
            <span className={cx(s.line, s.glitched)}></span>
          </div>
          <div className={s.lineC}>
            <span className={cx(s.line, s.glitched)}></span>
            <span className={cx(s.line, s.glitched)}></span>
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
      </motion.div>

      <motion.div className={s.menu} layout data-open={open} animate={open ? "open" : "closed"}>
        <AnimatePresence>
          {open && (
            <motion.div
              className={s.background}
              layout
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  top: -6,
                  right: -6,
                  width: "100%",
                  height: "100%",
                  transition: { duration: 0.6 },
                },
                closed: {
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: `${size.width > breakpoints.mobile ? 110 : 64}px`,
                  height: `${size.width > breakpoints.mobile ? 48 : 32}px`,
                  transition: { duration: 0.4, delay: 0.4 },
                  borderRadius: responsiveBorderRadius(),
                },
              }}
            ></motion.div>
          )}
        </AnimatePresence>

        <motion.ul
          variants={{
            open: {
              transition: { staggerChildren: 0.02, delayChildren: 0.4 },
            },
            closed: {
              transition: { staggerChildren: 0.02, staggerDirection: -1 },
            },
          }}
          className={s.menuItems}
        >
          {menuItems.map((item, i) => {
            return (
              <motion.li
                className={s.menuItem}
                key={i}
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: { stiffness: 1000, velocity: -100 },
                    },
                  },
                  closed: {
                    y: 100,
                    opacity: 0,
                    transition: {
                      y: { stiffness: 1000 },
                    },
                  },
                }}
              >
                <Link to={item.path} className={s.link} onClick={handleMenu}>
                  <div className={s.imgC}>
                    <img className={s.img} src={arrow} alt="Arrow" />
                  </div>
                  <span className={s.text}>{item.ui}</span>
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>

        <AnimatePresence>
          {open && (
            <motion.div
              layout
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.4 },
                },
                closed: {
                  opacity: 0,

                  transition: { duration: 0.4 },
                  borderRadius: responsiveBorderRadius(),
                },
              }}
              className={s.social}
            >
              <Link
                to="https://www.tiktok.com/@lycheenewmedia"
                target="_blank"
                rel="noreferrer noopener"
                className={s.iconC}
              >
                <IconTiktok fill="#fff" />
              </Link>
              <Link
                to="https://www.instagram.com/lycheedigital/"
                target="_blank"
                rel="noreferrer noopener"
                className={s.iconC}
              >
                <IconInstagram fill="#fff" />
              </Link>
              <Link
                to="https://www.youtube.com/@lycheedigital"
                target="_blank"
                rel="noreferrer noopener"
                className={s.iconC}
              >
                <IconYoutube fill="#fff" />
              </Link>
              <Link
                to="https://www.twitter.com/lycheenewmedia"
                target="_blank"
                rel="noreferrer noopener"
                className={s.iconC}
              >
                <IconTwitter fill="#fff" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/lycheedigital/"
                target="_blank"
                rel="noreferrer noopener"
                className={s.iconC}
              >
                <IconLinkedin fill="#fff" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default Menu
