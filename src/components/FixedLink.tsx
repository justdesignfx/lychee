import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import s from "~/assets/scss/components/FixedLink.module.scss"

const FixedLink = () => {
  const { t } = useTranslation()
  const location = useLocation()

  console.log(t("menu.contact.children.creator.path"))

  return (
    <AnimatePresence>
      {location.pathname.includes(t("menu.contact.children.creator.path")) && (
        <motion.small
          className={s.linkC}
          initial={{ opacity: 0, y: 100, position: "fixed", bottom: "2%", left: "2vw" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {t("contact.contentCreator.button.text")}{" "}
          <Link className={s.link} to={`/${t("contact.contentCreator.button.link.path")}`}>
            {t("contact.contentCreator.button.link.ui")}
          </Link>
        </motion.small>
      )}
    </AnimatePresence>
  )
}

export default FixedLink
