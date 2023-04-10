import { useState } from "react"
import s from "~/assets/scss/pages/ContactBrand.module.scss"

import { Link } from "react-router-dom"

import BrandForm from "~/components/BrandForm"

import cx from "classnames"

const ContactBrand = () => {
  const [formStarted, setFormStarted] = useState(false)

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
