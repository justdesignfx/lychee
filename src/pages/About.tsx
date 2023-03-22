import React, { useEffect } from "react"
import s from "~/assets/scss/pages/About.module.scss"
import Img from "~/components/Img"

import cx from "classnames"
import { Link } from "react-router-dom"

import sample from "~/assets/img/sample.png"
import peel from "~/assets/img/lychee-peel.png"
import fruit from "~/assets/img/lychee-fruit.png"

import playBtnTri from "~/assets/img/btn-play-tri.svg"
import playBtnText from "~/assets/img/btn-play-text.svg"

import logoAdidas from "~/assets/img/logo-adidas.svg"
import logoDisney from "~/assets/img/logo-disney.svg"
import logoDyson from "~/assets/img/logo-dyson.svg"
import logoEsteeLauder from "~/assets/img/logo-estee-lauder.svg"
import logoLoreal from "~/assets/img/logo-loreal.svg"
import logoNestle from "~/assets/img/logo-nestle.svg"
import logoNike from "~/assets/img/logo-nike.svg"
import logoPhilips from "~/assets/img/logo-philips.svg"
import logoStarbucks from "~/assets/img/logo-starbucks.svg"
import logoDysonBlack from "~/assets/img/logo-dyson-black.svg"
import logoAbdiBlack from "~/assets/img/logo-abdiibrahim-black.svg"
import logoObsessoBlack from "~/assets/img/logo-obsesso-black.svg"
import FooterBasic from "~/components/FooterBasic"
import IconArrowSquare from "~/components/Icons/IconArrowSquare"
import ButtonGlitch from "~/components/ButtonGlitch"
import { useModalStore } from "~/store/modalStore"

const About = () => {
  const hScrollText = "Her zaman daha iyisini hedefliyoruz."

  const modalStore = useModalStore()

  useEffect(() => {
    console.log(modalStore.open)
  }, [modalStore.open])

  return (
    <>
      <main className={s.about}>
        <section className={s.intro}>
          <h1 className={s.title}>
            Yaratıcı ve stratejik yetenekleri <br /> bünyesinde barındıran <br />
            <span className={s.italic}>dijital marketing </span> ajansıyız.
            <button className={s.playBtn} onClick={modalStore.toggle}>
              <div className={s.iconTri}>
                <Img src={playBtnTri} objectFit="contain" />
              </div>
              <div className={s.text}>
                <Img src={playBtnText} objectFit="contain" />
              </div>
            </button>
          </h1>
        </section>
        <section className={s.team}>
          <div className={s.partTeam}>
            <p className={s.text}>
              Lychee, içerik üreticilerden ve stratejistlerden oluşan kreatif bir ekibe sahip global bir influencer
              marketing ajansıdır.
            </p>
            <div className={s.imgC} data-framed-parallax-frame>
              <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
                <Img src={sample} />
              </div>
            </div>
          </div>
          <div className={s.partTeam}>
            <div className={s.imgC} data-framed-parallax-frame>
              <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
                <Img src={sample} />
              </div>
            </div>
            <p className={s.text}>Her şey çok çabuk gerçeğe dönüşen bir hayalle başladı…</p>
          </div>
        </section>
        <section className={s.fruit}>
          <div className={s.lychee}>
            <div className={cx(s.imgC, s.fruit, s.small)} data-parallax data-speed-y="0.5" data-direction-y="-1">
              <Img src={fruit} objectFit="contain" />
            </div>
            <div className={cx(s.imgC, s.fruit)} data-parallax data-speed-y="0.5" data-direction-y="-1">
              <Img src={fruit} objectFit="contain" />
            </div>
            <div className={cx(s.imgC, s.peel)} data-parallax data-speed-y="0.5" data-direction-y="-1">
              <Img src={peel} objectFit="contain" />
            </div>
          </div>
        </section>
        <section className={s.growth}>
          <h2 className={s.title}>
            Lychee ekibi, yaratıcı içerik üreticileri, stratejistler ve yetenekli tasarımcıların eklenmesiyle birkaç
            haftadan daha kısa sürede büyüdü.
          </h2>
          <p className={s.text}>
            İçerik üreticilerden oluşan ekip, yarattıkları zengin bir influencer ekosisteminde bir araya geldi.
          </p>
        </section>
        <section className={s.advertisement}>
          <div className={s.partAdvertisement}>
            <p className={s.title}>
              Lychee’de, yaratıcı reklamcılığın ne olması gerektiğine dair önyargılı fikirlere meydan okumak istiyoruz.
            </p>
            <p className={s.text}>
              Influencerların gücüne ve markaların vizyonuna odaklanan ezber bozan marketing ajansı iş modeline
              yöneliyoruz.
            </p>
          </div>
          <div className={s.partAdvertisement}>
            <div className={s.imgC} data-framed-parallax-frame>
              <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
                <Img src={sample} />
              </div>
            </div>
            <div className={s.imgC} data-framed-parallax-frame>
              <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
                <Img src={sample} />
              </div>
            </div>
          </div>
        </section>
        <section className={s.everyTime}>
          <h2 className={s.title}>
            Her defasında daha etkili pazarlama stratejisi oluşturabilmek için çıtamızı sürekli yükseltiyor ve trend
            yaratmaya çalışıyoruz.
          </h2>
        </section>
        <section className={s.horizontalScroll} data-h-scroll>
          <div className={s.hSection} data-h-scroll-section>
            {hScrollText.split(" ").map((word: any, i) => {
              return (
                <h2 className={s.text} key={i}>
                  <p className={s.word}>
                    {word.split("").map((letter: any, iInner: number) => {
                      return (
                        <span key={iInner} className={s.letter} data-letter>
                          {letter}
                        </span>
                      )
                    })}
                  </p>
                </h2>
              )
            })}
          </div>
        </section>
        <section className={s.partners}>
          <h2 className={s.title}>En iyi markaların partnerliğini yapıyoruz.</h2>
          <p className={s.text}>Ezber bozan projeler yaratmak için global markalarla çalışıyoruz. </p>
          <small className={s.lookUp}>
            Daha fazlasını incelemek mi istiyorsunuz?{" "}
            <Link to="/works" className={s.link}>
              Tüm müşterilerimizi inceleyin.
            </Link>
          </small>
          <div className={s.oHiddenC}>
            <div className={s.logoGrid}>
              <div className={s.row}>
                <div className={cx(s.logoC, s.logoDisney)}>
                  <img className={s.img} src={logoDisney} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoAdidas)}>
                  <img className={s.img} src={logoAdidas} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoPhilips)}>
                  <img className={s.img} src={logoPhilips} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoNike)}>
                  <img className={s.img} src={logoNike} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoNestle)}>
                  <img className={s.img} src={logoNestle} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoEsteeLauder)}>
                  <img className={s.img} src={logoEsteeLauder} alt="Company Logo" />
                </div>
              </div>
              <div className={s.row}>
                <div className={cx(s.logoC, s.logoLoreal)}>
                  <img className={s.img} src={logoLoreal} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoDyson)}>
                  <img className={s.img} src={logoDyson} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoStarbucks)}>
                  <img className={s.img} src={logoStarbucks} alt="Company Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.dare}>
          <h1 className={s.text}>Kampanyanızı oluşturmaya hazır mısınız?</h1>
          <div className={s.btnC}>
            <ButtonGlitch text="İletişime geçin" size="lg" />
          </div>
        </section>
      </main>
      <FooterBasic />
    </>
  )
}

export default About
