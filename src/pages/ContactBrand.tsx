import { useState } from "react"
import s from "~/assets/scss/pages/ContactBrand.module.scss"
import BrandForm from "~/components/BrandForm"

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
    </main>
  )
}

export default ContactBrand
