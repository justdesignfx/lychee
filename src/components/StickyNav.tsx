import s from "~/assets/scss/components/StickyNav.module.scss"

import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import cx from "classnames"
import { useTranslation } from "react-i18next"

type Props = {
  pathname: string
}

const StickyNav = (props: Props) => {
  const { t } = useTranslation()

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
          <Link
            to={`${t("stickyNav.brands.path")}`}
            className={cx(s.navItem, { [s.disabled]: props.pathname.includes(t("stickyNav.brands.path")) })}
          >
            <p>{t("stickyNav.brands.ui")}</p>
          </Link>
          <Link
            to={`${t("stickyNav.creators.path")}`}
            className={cx(s.navItem, { [s.disabled]: props.pathname.includes(t("stickyNav.creators.path")) })}
          >
            <p>{t("stickyNav.creators.ui")}</p>
          </Link>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default StickyNav
