import s from "~/assets/scss/components/ContactIntro.module.scss"
import { useEffect } from "react"

import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { lngs } from "~/variables"

const ContactIntro = () => {
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  useEffect(() => {
    navigate(`/${t("menu.contact.path")}`)
  }, [i18n.language])

  return (
    <div className={s.contactIntro}>
      {i18n.language === lngs.en.nativeName ? (
        <div className={s.textC}>
          <h1 className={s.title}>
            <span className={s.italic}>Dijital dünyanızı</span> devralalım.
          </h1>
          <p className={s.text}>
            Kendinizi veya markanızı öne çıkarmak için en iyi ekiple çalışmaya hazır mısınız? Size uygun alana
            tıklayarak bilgilerinizi bırakın, en hızlı şekilde sizinle iletişime geçelim.
          </p>
        </div>
      ) : (
        <div className={s.textC}>
          <h1 className={s.title}>
            <span className={s.italic}>Dijital dünyanızı</span> devralalım.
          </h1>
          <p className={s.text}>
            Kendinizi veya markanızı öne çıkarmak için en iyi ekiple çalışmaya hazır mısınız? Size uygun alana
            tıklayarak bilgilerinizi bırakın, en hızlı şekilde sizinle iletişime geçelim.
          </p>
        </div>
      )}

      <div className={s.buttons}>
        <Link className={s.button} to={`/${t("contact.index.buttons.b1.path")}`}>
          {t("contact.index.buttons.b1.ui")}
        </Link>
        <Link className={s.button} to={`/${t("contact.index.buttons.b2.path")}`}>
          {t("contact.index.buttons.b2.ui")}
        </Link>
      </div>
    </div>
  )
}

export default ContactIntro
