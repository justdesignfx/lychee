import React from "react"
import s from "~/assets/scss/pages/Creators.module.scss"
import Img from "~/components/Img"

import cx from "classnames"

import sample from "~/assets/img/sample.png"
import visitor from "~/assets/img/smartphone-portal.svg"

import bag from "~/assets/img/bag.jpg"
import IconArrowSquare from "~/components/Icons/IconArrowSquare"
import FloatingCard from "~/components/FloatingCard"
import ButtonGlitch from "~/components/ButtonGlitch"
import { Link } from "react-router-dom"
import MarqueeSimple from "~/components/MarqueeSimple"
import ProjectsSlider from "~/components/ProjectsSlider"

const Creators = () => {
  const cards = [
    { title: { p1: "Non-Exclusive", p2: "Partnership" }, type: "blue" },
    { title: { p1: "Özel", p2: "Pazarlama Ekibi" }, type: "transparent" },
    { title: { p1: "Profesyonel", p2: "Prodüksiyon Ekibi" }, type: "white" },
    { title: { p1: "Direct Payment", p2: "Partnership" }, type: "blue" },
    { title: { p1: "No Costs or Fees", p2: "Partnership" }, type: "transparent" },
  ]

  const sliderItems = [
    {
      name: "ogedaygirisken",
      mediaType: "image",
      mediaSrc: sample,
    },
    {
      name: "dilaraaydin",
      mediaType: "image",
      mediaSrc: sample,
    },
    {
      name: "elifbaldann",
      mediaType: "image",
      mediaSrc: sample,
    },
    {
      name: "ogedaygirisken",
      mediaType: "image",
      mediaSrc: sample,
    },
    {
      name: "dilaraaydin",
      mediaType: "image",
      mediaSrc: sample,
    },
    {
      name: "elifbaldann",
      mediaType: "image",
      mediaSrc: sample,
    },
  ]

  return (
    <main className={s.creators}>
      <section className={s.intro}>
        <div className={s.textC}>
          <small className={s.small}>DIGITAL TALENT AGENCY</small>
          <h1 className={s.title}>Lychee’nin kreatif içerik üreticileri ekibine katılın.</h1>
          <h2 className={s.subtitle}>Influencer’ları en iyi eşleşeceği global markalarla buluşturuyoruz.</h2>
          <Link className={s.btnC} to="/contact">
            <ButtonGlitch size="sm" text="Üretmeye başlayın" />
          </Link>
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
          <ul className={s.credentials}>
            <li className={s.info}>
              <small className={s.label}>Influencer:</small>
              <p className={s.data}>@ogedaygirisken</p>
            </li>
            <li className={s.info}>
              <small className={s.label}>Marka:</small>
              <p className={s.data}>@dyson</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={s.foundations}>
        <h2 className={s.title}>
          Lychee,
          <span className={s.italic}>üreticilerin,</span> <br /> <span className={s.italic}>influencerların</span> ve
          <span className={s.italic}>sanatçıların</span> <br /> olağanüstü yaratıcılığının peşinden gitme tutkusuyla
          kuruldu.
        </h2>
        <small className={s.small}>
          Talent ekibimizle global marka ve kuruluşlarla partnerlik yapan bir influencer ağı oluşturduk. Talentlarımızı
          içeriklerine en uygun global markalarla buluşturuyoruz.
        </small>

        <div className={cx(s.imgC, s.left)} data-parallax data-speed-y="0.05" data-direction-y="-1">
          <Img src={sample} />
        </div>

        <div className={cx(s.imgC, s.mid)} data-parallax data-speed-y="0.1" data-direction-y="-1">
          <Img src={sample} />
        </div>

        <div className={cx(s.imgC, s.right)} data-parallax data-speed-y="0.2" data-direction-y="-1">
          <Img src={sample} />
        </div>
      </section>
      <section className={s.conclusion}>
        <div className={s.marqueeC}>
          <MarqueeSimple direction={-1}>
            <h2 className={s.mText}>
              Peki ya sonuç.. ? <span className={s.seperator}></span>
            </h2>
          </MarqueeSimple>
        </div>
        <h5 className={s.text}>
          Efektif, yaratıcı ve yenilikçi influencer marketing kampanyaları yürütüyoruz. Global influencer topluluğundaki
          en yaratıcı yetenekleri Lychee Digital topluluğu arasında bulundurmaktan gurur duyuyoruz.
        </h5>
        <div className={s.imgC}>
          <Img src={visitor} />
        </div>
      </section>
      <section className={s.featuredProjects}>
        <div className={s.textC}>
          <small className={s.small}>ÖNE ÇIKAN PROJELERİMİZ</small>
          <h1 className={s.title}>Global trend belirleyicilerle çalışmaya başlayın.</h1>
          <h2 className={s.subtitle}>
            Lychee içerik oluşturucu topluluğu, markanıza özel marketing ihtiyaçlarını karşılayacak micro ve macro
            influencerlardan oluşur.
          </h2>
        </div>
        <ProjectsSlider items={sliderItems} />
        <small className={s.lookUp}>
          Daha fazlasını incelemek için{" "}
          <Link to="/works" className={s.link}>
            işlerimize göz atın
          </Link>
        </small>
      </section>
      <section className={s.singleTitleC}>
        <h1 className={s.title}>
          Markanızın gelecekteki
          <span className={s.italic}> potansiyel yüzlerini </span>
          inceleyin...
        </h1>
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
      <section className={s.waitingForYou}>
        <div className={s.marqueeC}>
          <MarqueeSimple direction={-1}>
            <h2 className={s.mText}>
              Digital talent agency. <span className={s.seperator}></span>
            </h2>
          </MarqueeSimple>
        </div>
      </section>
    </main>
  )
}

export default Creators
