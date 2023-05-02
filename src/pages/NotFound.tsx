import s from "~/assets/scss/pages/NotFound.module.scss"

import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className={s.notFound}>
        <h1 className={s.title}>404</h1>
        <h2 className={s.text}>{t("notFound.text")}</h2>
        <Link to="/" className={s.button}>
          {t("notFound.button")}
        </Link>
      </div>
    </>
  )
}

export default NotFound
