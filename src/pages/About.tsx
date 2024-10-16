import { useEffect } from "react"
import s from "~/assets/scss/pages/About.module.scss"

import cx from "classnames"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

import floating1 from "~/assets/img/about-floating-1.jpg"
import floating2 from "~/assets/img/about-floating-2.jpg"
import floating3 from "~/assets/img/about-floating-3.jpg"
import floating4 from "~/assets/img/about-floating-4.jpg"
import playBtnText from "~/assets/img/btn-play-text.svg"
import playBtnTri from "~/assets/img/btn-play-tri.svg"
import logoAdidas from "~/assets/img/logo-adidas.svg"
import logoDisney from "~/assets/img/logo-disney.svg"
import logoDyson from "~/assets/img/logo-dyson.svg"
import logoEsteeLauder from "~/assets/img/logo-estee-lauder.svg"
import logoLoreal from "~/assets/img/logo-loreal.svg"
import logoNestle from "~/assets/img/logo-nestle.svg"
import logoNike from "~/assets/img/logo-nike.svg"
import logoPhilips from "~/assets/img/logo-philips.svg"
import logoStarbucks from "~/assets/img/logo-starbucks.svg"
import fruit from "~/assets/img/lychee-fruit.png"
import peel from "~/assets/img/lychee-peel.png"

import ButtonGlitch from "~/components/ButtonGlitch"
import ButtonText from "~/components/ButtonText"
import FooterBasic from "~/components/FooterBasic"
import Img from "~/components/Img"
import SplitText from "~/components/SplitText"
import { useWindowSize } from "~/hooks"
import { useModalStore } from "~/store/modalStore"
import { lngs, showreelVideo } from "~/variables"
import { Helmet } from "react-helmet-async"

const About = () => {
  const modalStore = useModalStore()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const size = useWindowSize()

  useEffect(() => {
    navigate(`/${t("menu.about.path")}`)
  }, [i18n.language])

  function handleModal() {
    modalStore.setContent(
      <div className={s.modalContent}>
        <video className={s.video} width="1920" height="1080" controls autoPlay playsInline>
          <source src={showreelVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
    modalStore.toggle()
  }

  const textRevealContent = [
    {
      word: t("about.textReveal.w1"),
      font: "normal",
    },
    {
      word: t("about.textReveal.w2"),
      font: "normal",
    },
    {
      word: t("about.textReveal.w3"),
      font: "italic",
    },
    {
      word: t("about.textReveal.w4"),
      font: "italic",
    },
    {
      word: t("about.textReveal.w5"),
      font: "normal",
    },
  ]

  return (
    <>
      <Helmet>
        <title>{`${t("titleAndDesc.preTitle")}${t("titleAndDesc.about.title")}`}</title>
        <meta name="description" content={`${t("titleAndDesc.about.desc")}`}></meta>
        <link rel="canonical" href={`${t("titleAndDesc.about.canonical")}`} />
      </Helmet>
      <main className={s.about}>
        <section className={s.intro}>
          <h1 className={s.title}>
            {i18n.language === lngs.en.nativeName ? (
              <>
                We are a <span className={s.italic}>digital marketing </span> <br /> agency that houses creative <br />{" "}
                and strategic talents.
              </>
            ) : (
              <>
                Yaratıcı ve stratejik yetenekleri <br /> bünyesinde barındıran <br />
                <span className={s.italic}>dijital marketing </span> ajansıyız.
              </>
            )}
            <button className={s.playBtn} onClick={handleModal}>
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
            <p className={s.text}>{t("about.texts.t1")}</p>
            <div className={s.imgC} data-framed-parallax-frame>
              <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
                <Img src={floating2} />
              </div>
            </div>
          </div>
          <div className={s.partTeam}>
            <div className={s.imgC} data-framed-parallax-frame>
              <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
                <Img src={floating4} />
              </div>
            </div>
            <p className={s.text}>{t("about.texts.t2")}</p>
          </div>
        </section>
        <section className={s.fruit}>
          <div className={s.lychee}>
            <div className={cx(s.imgC, s.fruit, s.small)} data-parallax data-speed-y="0.5" data-direction-y="-1">
              <Img src={fruit} objectFit="contain" />
            </div>
            <div className={cx(s.imgC, s.fruit)} data-parallax data-speed-y="0.6" data-direction-y="-1">
              <Img src={fruit} objectFit="contain" />
            </div>
            <div className={cx(s.imgC, s.peel)} data-parallax data-speed-y="0.2" data-direction-y="-1">
              <Img src={peel} objectFit="contain" />
            </div>
          </div>
        </section>
        <section className={s.growth}>
          <h2 className={s.title}>{t("about.texts.t3.title")}</h2>
          <p className={s.text}>{t("about.texts.t3.desc")}</p>
        </section>
        <section className={s.advertisement}>
          <div className={s.partAdvertisement}>
            <p className={s.title}>{t("about.texts.t4.title")} </p>
            <p className={s.text}>{t("about.texts.t4.desc")}</p>
          </div>
          <div className={s.partAdvertisement}>
            <div className={s.imgC} data-framed-parallax-frame>
              <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
                <Img src={floating3} />
              </div>
            </div>
            <div className={s.imgC} data-framed-parallax-frame>
              <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
                <Img src={floating1} />
              </div>
            </div>
          </div>
        </section>
        <section className={s.everyTime}>
          <h2 className={s.title}>{t("about.texts.t5")}</h2>
        </section>
        <section className={s.horizontalScroll} data-h-scroll>
          <div className={s.hScrollContent} data-h-scroll-section>
            <div className={s.textC}>
              <SplitText content={textRevealContent} />
            </div>
          </div>
        </section>
        <section className={s.partners}>
          <h2 className={s.title}>{t("about.partnership.title")}</h2>
          <p className={s.text}>{t("about.partnership.desc")}</p>

          <ButtonText
            text={t("about.partnership.button.text")}
            link={{ ui: t("about.partnership.button.link.ui"), path: t("about.partnership.button.link.path") }}
          />
          <div className={s.oHiddenC}>
            <div className={s.logoGrid}>
              <div className={s.row}>
                <div className={cx(s.logoC, s.logoDisney)} data-logo-parallax data-speed-y="0.4" data-direction-y="-1">
                  <img className={s.img} src={logoDisney} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoAdidas)} data-logo-parallax data-speed-y="0.3" data-direction-y="-1">
                  <img className={s.img} src={logoAdidas} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoPhilips)} data-logo-parallax data-speed-y="0.5" data-direction-y="-1">
                  <img className={s.img} src={logoPhilips} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoNike)} data-logo-parallax data-speed-y="0.3" data-direction-y="-1">
                  <img className={s.img} src={logoNike} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoNestle)} data-logo-parallax data-speed-y="0.5" data-direction-y="-1">
                  <img className={s.img} src={logoNestle} alt="Company Logo" />
                </div>
                <div
                  className={cx(s.logoC, s.logoEsteeLauder)}
                  data-logo-parallax
                  data-speed-y="0.3"
                  data-direction-y="-1"
                >
                  <img className={s.img} src={logoEsteeLauder} alt="Company Logo" />
                </div>
              </div>
              <div className={s.row}>
                <div className={cx(s.logoC, s.logoLoreal)} data-logo-parallax data-speed-y="0.4" data-direction-y="-1">
                  <img className={s.img} src={logoLoreal} alt="Company Logo" />
                </div>
                <div className={cx(s.logoC, s.logoDyson)} data-logo-parallax data-speed-y="0.4" data-direction-y="-1">
                  <img className={s.img} src={logoDyson} alt="Company Logo" />
                </div>
                <div
                  className={cx(s.logoC, s.logoStarbucks)}
                  data-logo-parallax
                  data-speed-y="0.3"
                  data-direction-y="-1"
                >
                  <img className={s.img} src={logoStarbucks} alt="Company Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.dare}>
          <h1 className={s.text}>{t("about.ready.title")}</h1>
          <Link to={`/${t("about.ready.button.path")}`} className={s.btnC}>
            <ButtonGlitch text={t("about.ready.button.ui")} size="lg" />
          </Link>
        </section>
      </main>
      <FooterBasic />
    </>
  )
}

export default About
