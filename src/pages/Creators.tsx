import React from "react"
import s from "~/assets/scss/pages/Creators.module.scss"
import Img from "~/components/Img"

import bag from "~/assets/img/bag.jpg"
import IconArrowSquare from "~/components/Icons/IconArrowSquare"
import FloatingCard from "~/components/FloatingCard"

const Creators = () => {
  const cards = [
    { title: { p1: "Non-Exclusive", p2: "Partnership" }, type: "blue" },
    { title: { p1: "Özel", p2: "Pazarlama Ekibi" }, type: "transparent" },
    { title: { p1: "Profesyonel", p2: "Prodüksiyon Ekibi" }, type: "white" },
    { title: { p1: "Direct Payment", p2: "Partnership" }, type: "blue" },
    { title: { p1: "No Costs or Fees", p2: "Partnership" }, type: "transparent" },
  ]

  return (
    <main className={s.creators}>
      <section className={s.intro}>
        <div className={s.textC}>
          <small className={s.small}>DIGITAL TALENT AGENCY</small>
          <h1 className={s.title}>Lychee’nin kreatif içerik üreticileri ekibine katılın.</h1>
          <h2 className={s.subtitle}>Influencer’ları en iyi eşleşeceği global markalarla buluşturuyoruz.</h2>
        </div>
        <div className={s.statsC}>
          <div className={s.imgC}>
            <Img src={bag} objectFit="cover" />
          </div>
          <ul className={s.statC}>
            <li className={s.stat}>
              <small className={s.label}>Beğeni</small>
              <p className={s.data}>7,254</p>
            </li>
            <li className={s.stat}>
              <small className={s.label}>Özgün Etkileşim</small>
              <p className={s.data}>110k</p>
            </li>
            <li className={s.stat}>
              <small className={s.label}>Satış Artışı</small>
              <p className={s.data}>
                +11.7{" "}
                <span className={s.iconC}>
                  <IconArrowSquare fill="#00ff6c"></IconArrowSquare>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className={s.why} data-floating-items-c>
        <h2 className={s.title}>
          Neden <span className={s.italic}>Lychee</span> ile çalışmalısınız.
        </h2>
        <div className={s.hSection} data-floating-items>
          {cards.map((card) => {
            return (
              <div data-floating-item>
                <FloatingCard {...card} />
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Creators
