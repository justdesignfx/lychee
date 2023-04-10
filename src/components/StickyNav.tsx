import s from "~/assets/scss/components/StickyNav.module.scss"

import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import cx from "classnames"

type Props = {
  pathname: string
}

const StickyNav = (props: Props) => {
  return (
    <AnimatePresence>
      {(props.pathname.includes("creators") || props.pathname.includes("brands")) && (
        <motion.nav
          data-sticky-item
          className={cx(s.stickyNav, { [s.left]: props.pathname.includes("brands") })}
          initial={{ opacity: 0, y: 100, x: "-50%", position: "fixed", bottom: "2%", left: "50%" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <Link to="/brands" className={cx(s.navItem, { [s.disabled]: props.pathname.includes("brands") })}>
            <p>Markalar</p>
          </Link>
          <Link to="/creators" className={cx(s.navItem, { [s.disabled]: props.pathname.includes("creators") })}>
            <p>Üreticiler</p>
          </Link>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default StickyNav
