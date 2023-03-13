import React from "react"
import { Link } from "react-router-dom"
import s from "~/assets/scss/pages/Contact.module.scss"

const Contact = () => {
  return (
    <main className={s.contact}>
      <div className={s.textC}>
        <h1 className={s.title}>
          <span className={s.italic}>Dijital dünyanızı</span> devralalım.
        </h1>
        <p className={s.text}>
          Kendinizi veya markanızı öne çıkarmak için en iyi ekiple çalışmaya hazır mısınız? Size uygun alana tıklayarak
          bilgilerinizi bırakın, en hızlı şekilde sizinle iletişime geçelim.
        </p>
      </div>
      <div className={s.buttons}>
        <Link className={s.button} to="brand">
          Markam Var
        </Link>
        <Link className={s.button} to="content-creator">
          İçerik Üreticisiyim
        </Link>
      </div>
    </main>
  )
}

export default Contact
