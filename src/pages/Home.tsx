import React from "react"
import s from "~/assets/scss/Home.module.scss"

import cx from "classnames"

import reels from "~/assets/img/reels.png"
import smartPhone from "~/assets/img/smartphone.svg"
import portal from "~/assets/img/portal.svg"

import disney from "~/assets/img/logo-disney.svg"
import esteeLauder from "~/assets/img/logo-estee-lauder.svg"
import philips from "~/assets/img/logo-philips.svg"
import dyson from "~/assets/img/logo-dyson.svg"
import starbucks from "~/assets/img/logo-starbucks.svg"
import adidas from "~/assets/img/logo-adidas.svg"
import loreal from "~/assets/img/logo-loreal.svg"
import nike from "~/assets/img/logo-nike.svg"
import nestle from "~/assets/img/logo-nestle.svg"

import MarqueeSimple from "~/components/MarqueeSimple"
import HorizontalScroll from "~/components/HorizontalScroll"
import { Link } from "react-router-dom"

const Home = () => {
  const hScrollText = "Yeni medya platformlarında kreatif içerikler üretiyoruz."

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
            <h2 className={s.mText}>Neler yapıyoruz?</h2>
          </MarqueeSimple>
        </div>
      </section>
      <section className={s.horizontalScroll} data-h-scroll>
        <div className={s.hSection} data-h-scroll-section>
          {hScrollText.split(" ").map((word: any, i: number) => {
            return (
              <h2 className={s.text} key={i}>
                <p className={s.word}>
                  {word.split("").map((letter: any) => {
                    return (
                      <span className={s.letter} data-letter>
                        {letter}
                      </span>
                    )
                  })}
                </p>
              </h2>
            )
          })}
          <div className={s.reels}>
            <div className={s.imgC}>
              <img className={s.img} src={reels} alt="Influencer Reels" />
            </div>
          </div>
        </div>
      </section>
      <section className={s.marqueeC}>
        <div className={s.transformC}>
          <MarqueeSimple>
            <h2 className={s.mText}>Neler yapıyoruz?</h2>
          </MarqueeSimple>
        </div>
        <div className={s.transformC}>
          <MarqueeSimple>
            <h2 className={s.mText}>Neler yapıyoruz?</h2>
          </MarqueeSimple>
        </div>
      </section>
      <section className={s.works}>
        <div className={s.titleC}>
          <h2 className={s.title}>
            Yaptığımız işler <span>yaratıcılığımızı</span> yanstıyor.
          </h2>
          <p className={s.text}>En büyük motivasyonumuz dijital medya için özgün içerikler yaratma dürtüsüdür.</p>
        </div>
        <div className={s.worksGrid}>
          {Array.from(Array(9).keys()).map((item) => {
            return (
              <div className={s.gridItemC}>
                <img className={s.img} src="" alt="" />
              </div>
            )
          })}
        </div>
        <small className={s.lookUp}>
          Daha fazlasını incelemek için <a href="">işlerimie göz atın</a>
        </small>
      </section>
      <section className={s.stats} data-sliding-panels>
        <div className={s.topC}>
          <div className={s.titleC}>
            <h3 className={s.title}>Biraz rakamlardan bahsedelim.</h3>
            <h4 className={s.text}>Sürekli hareket halindeki dijital dünya için, kreatif sonuçlar elde ediyoruz.</h4>
          </div>
          <div className={s.imgC}>
            <img className={s.img} src={smartPhone} alt="Smartphone Doodle" />
          </div>
        </div>
        <div className={cx(s.oWrapper, s.blue)} data-sliding-panel>
          <div className={cx(s.screen, s.blue)}>
            <h1 className={s.stat}>LOL</h1>
          </div>
        </div>
        <div className={cx(s.oWrapper, s.pink)} data-sliding-panel>
          <div className={cx(s.screen, s.pink)}>
            <h1 className={s.stat}>LOL</h1>
          </div>
        </div>
        <div className={cx(s.oWrapper, s.black)} data-sliding-panel>
          <div className={cx(s.screen, s.black)}>
            <h1 className={s.stat}>LOL</h1>
          </div>
        </div>
      </section>
      <section className={s.references}>
        <div className={s.titleC}>
          <div className={s.imgC}>
            <img className={s.img} src={portal} alt="Smartphone Doodle" />
          </div>
          <h2 className={s.title}>
            Partneri olduğumuz <span>global</span> markalar.
          </h2>
          <p className={s.text}>
            Yeni çağ üretici endüstrisini şekillendiren, global markalar ve firmalarla çalışıyoruz.
          </p>
        </div>
        <div className={s.logoGrid}>
          <div className={s.logoC}>
            <img className={s.img} src={disney} alt="Smartphone Doodle" />
          </div>
          <div className={s.logoC}>
            <img className={s.img} src={disney} alt="Smartphone Doodle" />
          </div>
          <div className={s.logoC}>
            <img className={s.img} src={disney} alt="Smartphone Doodle" />
          </div>
          <div className={s.logoC}>
            <img className={s.img} src={disney} alt="Smartphone Doodle" />
          </div>
          <div className={s.logoC}>
            <img className={s.img} src={disney} alt="Smartphone Doodle" />
          </div>
          <div className={s.logoC}>
            <img className={s.img} src={disney} alt="Smartphone Doodle" />
          </div>
          <div className={s.logoC}>
            <img className={s.img} src={disney} alt="Smartphone Doodle" />
          </div>
          <div className={s.logoC}>
            <img className={s.img} src={disney} alt="Smartphone Doodle" />
          </div>
          <div className={s.logoC}>
            <img className={s.img} src={disney} alt="Smartphone Doodle" />
          </div>
        </div>
      </section>
      <section className={s.moveOn}>
        <div className={s.titleC}>
          <div className={s.imgC}>
            <img className={s.img} src={portal} alt="Smartphone Doodle" />
          </div>
          <h2 className={s.title}>
            <span>İncelemeye</span> devam etmek
          </h2>
          <h2 className={s.title}>ister misiniz?</h2>
        </div>

        <div className={s.buttons}>
          <Link to="/partners">Partnerlerimiz</Link>
          <Link to="/services">Hizmetlerimiz</Link>
        </div>
      </section>
    </main>
  )
}

export default Home
