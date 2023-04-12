import s from "~/assets/scss/pages/Brands.module.scss"

import { Link, useNavigate } from "react-router-dom"

import ButtonGlitch from "~/components/ButtonGlitch"
import FooterBasic from "~/components/FooterBasic"
import Img from "~/components/Img"

import playBtnText from "~/assets/img/btn-play-text.svg"
import playBtnTri from "~/assets/img/btn-play-tri.svg"

import portalDiamond from "~/assets/img/portal-diamond.png"
import sample from "~/assets/img/sample.png"
import stickerBans from "~/assets/img/sticker-bans.svg"
import stickerPeace from "~/assets/img/sticker-peace.svg"
import ListBrands from "~/components/ListBrands"
import MarqueeSimple from "~/components/MarqueeSimple"
import { useWindowSize } from "~/hooks"
import { useModalStore } from "~/store/modalStore"
import { breakpoints, lngs } from "~/variables"
import { Trans, useTranslation } from "react-i18next"
import { useEffect } from "react"

const Brands = () => {
  const modalStore = useModalStore()
  const size = useWindowSize()
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  useEffect(() => {
    navigate(`/${t("menu.brands.path")}`)
  }, [i18n.language])

  const listItems = [
    {
      title: t("brands.methods.list.l1.title"),
      text: t("brands.methods.list.l1.text"),
    },
    {
      title: t("brands.methods.list.l2.title"),
      text: t("brands.methods.list.l2.text"),
    },
    {
      title: t("brands.methods.list.l3.title"),
      text: t("brands.methods.list.l3.text"),
    },
    {
      title: t("brands.methods.list.l4.title"),
      text: t("brands.methods.list.l4.text"),
    },
  ]

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
              <Trans key={"brands.intro.title"} components={{ br: <br /> }}>
                {t("brands.intro.title")}
              </Trans>
            </h1>
            <h2 className={s.subtitle}>{t("brands.intro.subtitle")}</h2>
            <p className={s.par}>{t("brands.intro.desc")}</p>
            <Link className={s.btnC} to={`${t("brands.intro.button.path")}`}>
              <ButtonGlitch size="sm" text={t("brands.intro.button.ui")} />
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
          {i18n.language === lngs.en.nativeName ? (
            <h2 className={s.text}>
              To create a successful campaign, we follow some predetermined steps that will help us define your KPIs{" "}
              <span className={s.small}>(Key Performance Indicators)</span> and target audience. Once we identify your
              target audience, we then determine the influencers you can collaborate with to achieve your goals.
            </h2>
          ) : (
            <h2 className={s.text}>
              Başarılı bir kampanya oluşturmak için, KPI’larınızı{" "}
              <span className={s.small}>(Key Performance Indicator)</span> ve hedef kitlenizi tanımlamamıza yardımcı
              olacak önceden belirlenmiş bazı adımları izliyoruz. Hedef kitlenizi belirledikten sonra, hedeflerinize
              ulaşmak için birlikte çalışabileceğiniz influencerları belirliyoruz.
            </h2>
          )}
        </section>
        <section className={s.methods}>
          <div className={s.methodsIntro}>
            <h2 className={s.text}>{t("brands.methods.title")}</h2>
            <div className={s.imgC}>
              <Img src={portalDiamond} objectFit="contain" />
            </div>
          </div>
          <ListBrands items={listItems} />
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
            <h2 className={s.title}>{t("brands.platforms.title")}</h2>
            <p className={s.text}>{t("brands.platforms.text")}</p>
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
                {t("brands.marquee.mText")} <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          <h1 className={s.text}> {t("brands.marquee.desc")}</h1>
          <Link to={`${t("brands.marquee.button.path")}`} className={s.contactBtn}>
            <ButtonGlitch text={`${t("brands.marquee.button.ui")}`} size="lg" />
          </Link>
        </section>
      </main>
      <FooterBasic />
    </>
  )
}

export default Brands
