import { useEffect } from "react"
import s from "~/assets/scss/pages/ContactBrand.module.scss"

import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"

import BrandForm from "~/components/BrandForm"

const ContactBrand = () => {
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  useEffect(() => {
    navigate(`/${t("menu.contact.path")}/${t("menu.contact.children.brand.path")}`)
  }, [i18n.language])

  return (
    <main className={s.contactBrand}>
      {/* <div className={s.textC}>
        <h1 className={s.title}>Dijital reklamcılığın geleceğine hoş geldiniz.</h1>
        <p className={s.text}>Şimdi marka vizyonunuzu, kampanyanızı ve hayallerinizi öğrenme zamanı.</p>
      </div>
      <div className={s.buttons}>
        <button className={s.button}>Şimdi başlayın</button>
      </div> */}

      <BrandForm />

      <small className={s.linkC} data-hide-on-form-start>
        {t("contact.brandForm.button.text")}{" "}
        <Link className={s.link} to={`/${t("contact.brandForm.button.link.path")}`}>
          {t("contact.brandForm.button.link.ui")}
        </Link>{" "}
      </small>
    </main>
  )
}

export default ContactBrand
