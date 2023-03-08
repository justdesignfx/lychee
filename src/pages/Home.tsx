import React from "react"
import s from "~/assets/scss/Home.module.scss"

import MarqueeSimple from "~/components/MarqueeSimple"

const Home = () => {
  return (
    <main className={s.home}>
      <section className={s.hero}>
        <div className={s.textWrapper}>
          <h1 className={s.text}>
            Markanız için en etkili <span className={s.inner}>influencer marketing</span> kampanyalarını yürütmeye
            hazırız.
          </h1>

          <a className={s.contactBtn} href="mailto:hello@lycheedigital.co">
            İletişime geçin
            <span className={s.iconWrapper}>{/* <IconArrowSquare fill="#ce1953"></IconArrowSquare> */}</span>
          </a>
        </div>

        <div className={s.marqueeWrapper}>
          <MarqueeSimple>
            <h1>lol</h1>
          </MarqueeSimple>
        </div>
      </section>
    </main>
  )
}

export default Home
