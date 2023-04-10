import s from "~/assets/scss/pages/Brands.module.scss"

import { Link } from "react-router-dom"

import ButtonGlitch from "~/components/ButtonGlitch"
import Img from "~/components/Img"
import FooterBasic from "~/components/FooterBasic"

import playBtnText from "~/assets/img/btn-play-text.svg"
import playBtnTri from "~/assets/img/btn-play-tri.svg"

import portalDiamond from "~/assets/img/portal-diamond.png"
import sample from "~/assets/img/sample.png"
import stickerBans from "~/assets/img/sticker-bans.svg"
import stickerPeace from "~/assets/img/sticker-peace.svg"
import MarqueeSimple from "~/components/MarqueeSimple"
import IconArrowSquare from "~/components/Icons/IconArrowSquare"
import StickyNav from "~/components/StickyNav"
import { useModalStore } from "~/store/modalStore"
import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"
import { useState } from "react"
import ListBrands from "~/components/ListBrands"

const Brands = () => {
  const modalStore = useModalStore()
  const size = useWindowSize()

  function handleModal() {
    modalStore.setContent(
      <div className={s.modalContent}>
        <video className={s.video} width="1920" height="1080" controls autoPlay playsInline>
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/812374325/rendition/1080p/file.mp4?loc=external&signature=a3848ab31075a23e420bf6ef7f04e9e518c2abf377cd67194e57b1d98e9ca61d"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    )
    modalStore.toggle()
  }

  return (
    <>
      <main className={s.brands} data-sticky-item-c>
        <section className={s.intro}>
          <div className={s.textC}>
            <small className={s.small}>LETS GET SCROLLING</small>
            <h1 className={s.title}>
              Olağanüstü yaratıcılık, <br /> küresel bakış açısı.
            </h1>
            <h2 className={s.subtitle}>Hayallerinizdeki kampanyayı en kreatif şekilde inşa ediyoruz.</h2>
            <p className={s.par}>
              Lychee, global markaların sosyal medya ve pazarlama kampanyalarına güç veriyor. Deneyimli içerik
              üreticileri ve tasarımcılardan oluşan ekibimiz aracılığıyla hedeflerinize ulaşmanıza yardımcı oluyoruz.
              Markanız için en efektif ve en başarılı influencer marketing kampanyalarınızı yürütmeye hazırız.
            </p>
            <Link className={s.btnC} to="/contact">
              <ButtonGlitch size="sm" text="Hemen başlayın" />
            </Link>
          </div>

          <div className={s.bgVideoC}>
            <video className={s.video} loop autoPlay muted playsInline>
              <source
                src={
                  size.width > breakpoints.tablet
                    ? "https://player.vimeo.com/progressive_redirect/playback/811194868/rendition/1080p/file.mp4?loc=external&signature=7dc29827ae3db3dfd80474b36b296892ecc96340075b64bbb83f266d886ff389"
                    : "https://player.vimeo.com/progressive_redirect/playback/812352429/rendition/1080p/file.mp4?loc=external&signature=04e2f212839943887df5ccb86b16f0fa7c834e86d233a063420a92919b34311e"
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <button className={s.playBtn} onClick={handleModal}>
              <div className={s.iconTri}>
                <Img src={playBtnTri} objectFit="contain" />
              </div>
              <div className={s.text}>
                <Img src={playBtnText} objectFit="contain" />
              </div>
            </button>
          </div>
        </section>
        <section className={s.misc}>
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
          <div
            className={s.imgC}
            data-parallax={() => (size.width > breakpoints.mobile ? true : false)}
            data-speed-y="0.5"
            data-direction-y="-1"
          >
            <Img src={sample} />
          </div>
        </section>
        <section className={s.kpi}>
          <h2 className={s.text}>
            Başarılı bir kampanya oluşturmak için, KPI’larınızı{" "}
            <span className={s.small}>(Key Performance Indicator)</span> ve hedef kitlenizi tanımlamamıza yardımcı
            olacak önceden belirlenmiş bazı adımları izliyoruz. Hedef kitlenizi belirledikten sonra, hedeflerinize
            ulaşmak için birlikte çalışabileceğiniz influencerları belirliyoruz.
          </h2>
        </section>
        <section className={s.methods}>
          <div className={s.methodsIntro}>
            <h2 className={s.text}>
              Bir sonraki influencer kampanyanızda başarıya ulaşmak için Lychee çalışma metodlarına göz atın…
            </h2>
            <div className={s.imgC}>
              <Img src={portalDiamond} />
            </div>
          </div>

          <ListBrands />
        </section>
        <section className={s.platforms}>
          <div className={s.stickerC}>
            <div className={s.imgC} data-parallax data-speed-y="0.35" data-direction-y="-1">
              <Img src={stickerBans} objectFit="contain" />
            </div>
            <div className={s.imgC} data-parallax data-speed-y="0.25" data-direction-y="-1">
              <Img src={stickerPeace} objectFit="contain" />
            </div>
          </div>
          <div className={s.platformsTextC}>
            <h2 className={s.title}>Kampanyalarınızda markanız için en doğru platformları belirliyoruz.</h2>
            <p className={s.text}>
              Ürününüzün tanımını yapmak için en efektif sosyal medya platformlarını belirlemenizde size rehberlik
              ediyoruz.
            </p>
          </div>
        </section>
        <section className={s.social}>
          <div className={s.buttons}>
            <a className={s.button} href="https://www.tiktok.com/@lycheenewmedia" target="_blank" rel="noreferrer">
              Tiktok
            </a>
            <a className={s.button} href="https://www.youtube.com/@lycheedigital" target="_blank" rel="noreferrer">
              Youtube
            </a>
            <a className={s.button} href="https://www.twitter.com/lycheenewmedia" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </section>
        <section className={s.dare}>
          <div className={s.marqueeC}>
            <MarqueeSimple direction={-1}>
              <h2 className={s.mText}>
                Hazırsan başlayalım. <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          <h1 className={s.text}>Markanız için en etkili influencer marketing kampanyalarını yürütmeye hazırız.</h1>
          <Link to="/contact" className={s.contactBtn}>
            <ButtonGlitch text="Kampanya oluşturun" size="lg" />
          </Link>
        </section>
      </main>
      <FooterBasic />
    </>
  )
}

export default Brands
