import { useEffect, useState } from "react"
import s from "~/assets/scss/pages/ContactBrand.module.scss"

import { Link, useNavigate } from "react-router-dom"

import BrandForm from "~/components/BrandForm"

import cx from "classnames"
import { useTranslation } from "react-i18next"

const ContactBrand = () => {
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  useEffect(() => {
    navigate(`/${t("menu.contact.children.brand.path")}`)
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
        İçerik üreticisi misiniz?{" "}
        <Link className={s.link} to="/contact/content-creator">
          Hemen başlayın.
        </Link>{" "}
      </small>
    </main>
  )
}

export default ContactBrand
