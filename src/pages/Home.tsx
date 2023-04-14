import s from "~/assets/scss/pages/Home.module.scss"

import cx from "classnames"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import digitalTalentAgency from "~/assets/img/digital-talent-agency.png"
import instax from "~/assets/img/instax.png"
import portal from "~/assets/img/portal.svg"
import reels from "~/assets/img/reels.png"
import skaterTube from "~/assets/img/skater-tube.svg"
import smartPhone from "~/assets/img/smartphone.svg"
import logoAbdiBlack from "~/assets/img/logo-abdiibrahim-black.svg"
import logoAdidas from "~/assets/img/logo-adidas.svg"
import logoDisney from "~/assets/img/logo-disney.svg"
import logoDysonBlack from "~/assets/img/logo-dyson-black.svg"
import logoDyson from "~/assets/img/logo-dyson.svg"
import logoEsteeLauder from "~/assets/img/logo-estee-lauder.svg"
import logoLoreal from "~/assets/img/logo-loreal.svg"
import logoNestle from "~/assets/img/logo-nestle.svg"
import logoNike from "~/assets/img/logo-nike.svg"
import logoObsessoBlack from "~/assets/img/logo-obsesso-black.svg"
import logoPhilips from "~/assets/img/logo-philips.svg"
import logoStarbucks from "~/assets/img/logo-starbucks.svg"
import influencer1 from "~/assets/img/influencer-1.jpg"
import influencer2 from "~/assets/img/influencer-2.jpg"
import influencer3 from "~/assets/img/influencer-3.jpg"
import playBtnText from "~/assets/img/btn-play-text.svg"
import playBtnTri from "~/assets/img/btn-play-tri.svg"

import ButtonText from "~/components/ButtonText"
import Footer from "~/components/Footer"
import Img from "~/components/Img"
import MarqueeSimple from "~/components/MarqueeSimple"
import SplitText from "~/components/SplitText"
import { useWindowSize } from "~/hooks"
import { useCursorStore } from "~/store/cursorStore"
import { useModalStore } from "~/store/modalStore"
import { breakpoints, lngs, showreelVideo } from "~/variables"

const Home = () => {
  const { t, i18n } = useTranslation()
  const size = useWindowSize()
  const cursorStore = useCursorStore()
  const modalStore = useModalStore()

  const textRevealContent = () =>
    i18n.language === lngs.en.nativeName
      ? [
          {
            word: t("home.textReveal.text.w1.word"),
            font: t("home.textReveal.text.w1.font"),
          },
          {
            word: t("home.textReveal.text.w2.word"),
            font: t("home.textReveal.text.w2.font"),
          },
          {
            word: t("home.textReveal.text.w3.word"),
            font: t("home.textReveal.text.w3.font"),
          },
          {
            word: t("home.textReveal.text.w4.word"),
            font: t("home.textReveal.text.w4.font"),
          },
          {
            word: t("home.textReveal.text.w5.word"),
            font: t("home.textReveal.text.w5.font"),
          },
          {
            word: t("home.textReveal.text.w6.word"),
            font: t("home.textReveal.text.w6.font"),
          },
          {
            word: t("home.textReveal.text.w7.word"),
            font: t("home.textReveal.text.w7.font"),
          },
          {
            word: t("home.textReveal.text.w8.word"),
            font: t("home.textReveal.text.w8.font"),
          },
          {
            word: t("home.textReveal.text.w9.word"),
            font: t("home.textReveal.text.w9.font"),
          },
        ]
      : [
          {
            word: t("home.textReveal.text.w1.word"),
            font: t("home.textReveal.text.w1.font"),
          },
          {
            word: t("home.textReveal.text.w2.word"),
            font: t("home.textReveal.text.w2.font"),
          },
          {
            word: t("home.textReveal.text.w3.word"),
            font: t("home.textReveal.text.w3.font"),
          },
          {
            word: t("home.textReveal.text.w4.word"),
            font: t("home.textReveal.text.w4.font"),
          },
          {
            word: t("home.textReveal.text.w5.word"),
            font: t("home.textReveal.text.w5.font"),
          },
          {
            word: t("home.textReveal.text.w6.word"),
            font: t("home.textReveal.text.w6.font"),
          },
        ]

  const influencers = [
    { pic: influencer1, brandLogo: logoDysonBlack, name: "Ogeday Girişken" },
    { pic: influencer2, brandLogo: logoAbdiBlack, name: "Dilara Aydın" },
    { pic: influencer3, brandLogo: logoObsessoBlack, name: "Elif Baldan" },
  ]

  const cursorHandlers = {
    enter: {
      ...(size.width > breakpoints.tablet && {
        onMouseEnter: () => {
          cursorStore.setCursor("lampSmall")
        },
      }),
    },
    leave: {
      ...(size.width > breakpoints.tablet && {
        onMouseLeave: () => {
          cursorStore.setCursor("default")
        },
      }),
    },
  }

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

  return (
    <>
      <main className={s.home}>
        <section className={s.hero}>
          <div className={s.textC}>
            {i18n.language === lngs.en.nativeName ? (
              <h1 className={s.title}>
                We are ready to run the most effective <span className={s.inner}>influencer marketing</span> campaigns
                for your brand.
              </h1>
            ) : (
              <h1 className={s.title}>
                Markanız için en etkili <span className={s.inner}>influencer marketing</span> kampanyalarını yürütmeye
                hazırız.
              </h1>
            )}

            <div className={s.buttons}>
              <Link to={`${t("home.intro.buttons.b1.path")}`} className={s.button}>
                {t("home.intro.buttons.b1.ui")}
              </Link>

              <Link to={`${t("home.intro.buttons.b2.path")}`} className={s.button}>
                {t("home.intro.buttons.b2.ui")}
              </Link>
            </div>
          </div>

          <div className={s.bgVideoC}>
            <video className={s.video} loop autoPlay muted playsInline>
              {size.width > breakpoints.tablet ? (
                <source
                  width="1920"
                  height="1080"
                  src="https://player.vimeo.com/progressive_redirect/playback/811194868/rendition/1080p/file.mp4?loc=external&signature=7dc29827ae3db3dfd80474b36b296892ecc96340075b64bbb83f266d886ff389"
                  type="video/mp4"
                />
              ) : (
                <source
                  width="1080"
                  height="1214"
                  src="https://player.vimeo.com/progressive_redirect/playback/812352429/rendition/1080p/file.mp4?loc=external&signature=04e2f212839943887df5ccb86b16f0fa7c834e86d233a063420a92919b34311e"
                  type="video/mp4"
                />
              )}
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

          <div className={s.marqueeC}>
            <MarqueeSimple direction={-1}>
              <h2 className={s.mText}>
                <span className={s.italic}>Digital&nbsp;</span> talent agency.<span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
        </section>
        <section className={s.greeting}>
          <div className={s.textC}>
            {i18n.language === lngs.en.nativeName ? (
              <h2 className={s.text}>
                <span className={s.line}>
                  Lychee is a digital <span className={s.italic}>influencer</span> marketing
                </span>
                <span className={cx(s.line, s.resetMargin)} style={{ marginLeft: "2vw" }}>
                  <span className={cx(s.resetMargin)} style={{ marginRight: "20vw" }}>
                    {" "}
                    agency that{" "}
                  </span>
                  is a solution partner{" "}
                </span>
                <span className={cx(s.line, s.resetMargin)} style={{ marginRight: "10vw" }}>
                  <span className={cx(s.resetMargin)} style={{ marginRight: "25vw" }}>
                    for iconic
                  </span>{" "}
                  brands on a{" "}
                </span>
                <span className={cx(s.line, s.resetMargin)} style={{ marginLeft: "25vw" }}>
                  <span className={s.italic}>global scale.</span>
                </span>
              </h2>
            ) : (
              <h2 className={s.text}>
                <span className={s.line}>
                  Lychee <span className={s.italic}>global ölçekte</span> ikonik
                </span>
                <span className={cx(s.line, s.resetMargin)} style={{ marginLeft: "6vw" }}>
                  <span className={cx(s.resetMargin)} style={{ marginRight: "15vw" }}>
                    {" "}
                    markaların{" "}
                  </span>
                  çözüm ortağı olan{" "}
                </span>
                <span className={cx(s.line, s.resetMargin)} style={{ marginLeft: "7vw" }}>
                  <span className={cx(s.resetMargin)} style={{ marginRight: "20vw" }}>
                    dijital{" "}
                  </span>
                  <span className={s.italic}>influencer</span> marketing
                </span>
                <span className={s.line}>
                  <span className={cx(s.resetMargin)} style={{ marginLeft: "18vw" }}>
                    {" "}
                    ajansıdır.
                  </span>
                </span>
              </h2>
            )}

            <div className={s.imgC}>
              <Img src={skaterTube} alt="Skating Tube Tv" objectFit="contain" />
            </div>
          </div>
        </section>
        <section className={s.horizontalScroll} data-h-scroll>
          <div className={s.hScrollContent} data-h-scroll-section>
            <div className={s.textC}>
              <SplitText content={textRevealContent()} />
            </div>
            <div className={s.reels}>
              <Link to={`${t("home.textReveal.button.path")}`} className={s.button}>
                {t("home.textReveal.button.ui")}
              </Link>
              <div className={s.instaxC}>
                <img className={s.img} src={instax} alt="Influencer Reels" />
              </div>
              <div className={s.agencyC}>
                <img className={s.img} src={digitalTalentAgency} alt="Influencer Reels" />
              </div>
              <div className={s.imgC}>
                <img className={s.img} src={reels} alt="Influencer Reels" />
              </div>
            </div>
          </div>
        </section>
        <section className={s.marquee}>
          <div className={s.transformC}>
            <MarqueeSimple direction={-1}>
              <h2 className={s.mText}>
                {t("home.marquee.text")} <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          <div className={s.transformC}>
            <MarqueeSimple direction={-1}>
              <h2 className={s.mText}>{t("home.marquee.text")}</h2>
            </MarqueeSimple>
          </div>
        </section>
        <section className={s.works}>
          {i18n.language === lngs.en.nativeName ? (
            <div className={s.titleC}>
              <h2 className={s.title}>
                The works we do <br />
                reflects <span className={s.italic}>our creativity</span>.
              </h2>
              <p className={s.text}>
                Our greatest motivation is the urge to <br /> create original content for digital media.
              </p>
            </div>
          ) : (
            <div className={s.titleC}>
              <h2 className={s.title}>
                Yaptığımız işler <br /> <span className={s.italic}>yaratıcılığımızı</span> yanstıyor.
              </h2>
              <p className={s.text}>
                En büyük motivasyonumuz dijital medya için <br /> özgün içerikler yaratma dürtüsüdür.
              </p>
            </div>
          )}
          <div className={s.worksGrid}>
            {influencers.map((item, i) => {
              return (
                <div className={s.gridItemC} key={i} {...cursorHandlers.enter} {...cursorHandlers.leave}>
                  <div className={s.infoC}>
                    <div className={s.info}>
                      <small className={s.label}>Marka</small>
                      <div className={s.logoC}>
                        <img src={item.brandLogo} alt="Brand Logo" className={s.logo} />
                      </div>
                    </div>
                    <div className={s.info}>
                      <small className={s.label}>Talent</small>
                      <p className={s.text}>{item.name}</p>
                    </div>
                  </div>
                  <img className={s.img} src={item.pic} alt="Influencer" />
                </div>
              )
            })}
          </div>
          <ButtonText
            text={t("home.works.button.text")}
            link={{ path: `${t("home.works.button.link.path")}`, ui: `${t("home.works.button.link.ui")}` }}
          />
        </section>
        <section className={s.stats} data-sliding-panels>
          <div className={s.topC}>
            {i18n.language === lngs.en.nativeName ? (
              <div className={s.titleC}>
                <h3 className={s.title}>
                  Let's talk <br /> <span className={s.italic}>numbers.</span>
                </h3>
                <h4 className={s.text}>We achieve creative results for the constantly moving digital world.</h4>
              </div>
            ) : (
              <div className={s.titleC}>
                <h3 className={s.title}>
                  Biraz <span className={s.italic}>rakamlardan</span> <br /> bahsedelim.
                </h3>
                <h4 className={s.text}>
                  Sürekli hareket halindeki dijital dünya için, kreatif sonuçlar elde ediyoruz.
                </h4>
              </div>
            )}
            <div className={s.imgC}>
              <Img src={smartPhone} alt="Smartphone Doodle" objectFit="contain" />
            </div>
            <small className={s.small}>{t("home.stats.small")}</small>
          </div>
          <div className={cx(s.oWrapper, s.blue)} data-sliding-panel>
            <div className={s.screen} data-sliding-panel-unskew>
              <div className={cx(s.statC, s.blue)}>
                <h3 className={s.statText}>
                  <span className={s.num60}>60 </span>
                  <span className={s.million}>{t("home.stats.blue.stat")}</span>
                  <span className={s.asterisk}>*</span>
                </h3>
                <p className={s.desc}>{t("home.stats.blue.text")}</p>
              </div>

              <div className={s.indexC}>
                <span className={s.index}>1 - 3</span>
              </div>
            </div>
          </div>

          <div className={cx(s.oWrapper, s.pink)} data-sliding-panel>
            <div className={s.screen} data-sliding-panel-unskew>
              <div className={cx(s.statC, s.pink)}>
                <h3 className={s.statText}>
                  <span className={s.num7}>7</span>
                  <span className={s.thousand}>{t("home.stats.pink.stat")}</span>
                  <span className={s.asterisk}>*</span>
                </h3>
                <p className={s.desc}>{t("home.stats.pink.text")}</p>
              </div>

              <div className={s.indexC}>
                <span className={s.index}>2 - 3</span>
              </div>
            </div>
          </div>

          <div className={cx(s.oWrapper, s.black)} data-sliding-panel>
            <div className={s.screen} data-sliding-panel-unskew>
              <div className={cx(s.statC, s.black)}>
                <h3 className={s.statText}>
                  <span className={s.num20}>20,25</span>
                  <span className={s.percent}>%</span>
                  <span className={s.asterisk}>*</span>
                </h3>
                <p className={s.desc}>{t("home.stats.black.text")}</p>
              </div>

              <div className={s.indexC}>
                <span className={s.index}>3 - 3</span>
              </div>
            </div>
          </div>
        </section>
        <section className={s.references}>
          <div className={s.titleC}>
            <div className={s.imgC}>
              <img className={s.img} src={portal} alt="Smartphone Doodle" />
            </div>
            {i18n.language === lngs.en.nativeName ? (
              <>
                <h2 className={s.title}>
                  A selection of <span className={s.italic}>global</span> partnerships.
                </h2>
                <p className={s.text}>
                  We work with globally acknowledged brands and firms <br /> that shape the new-age creator industry.
                </p>
              </>
            ) : (
              <>
                <h2 className={s.title}>
                  Partneri olduğumuz <span className={s.italic}>global</span> markalar.
                </h2>
                <p className={s.text}>
                  Yeni çağ üretici endüstrisini şekillendiren, <br /> global markalar ve firmalarla çalışıyoruz.
                </p>
              </>
            )}
          </div>
          <div className={s.oHiddenC}>
            <div className={s.logoGrid}>
              <div className={s.row}>
                <div
                  className={cx(s.logoC, s.logoDisney)}
                  data-parallax
                  data-speed-y="0.2"
                  data-direction-y="-1"
                  data-parallax-inactive-on-mobile={`${() => (size.width > breakpoints.mobile ? "false" : "true")}`}
                >
                  <img className={s.img} src={logoDisney} alt="Company Logo" />
                </div>
                <div
                  className={cx(s.logoC, s.logoAdidas)}
                  data-parallax
                  data-speed-y="0.4"
                  data-direction-y="-1"
                  data-parallax-inactive-on-mobile={`${() => (size.width > breakpoints.mobile ? "false" : "true")}`}
                >
                  <img className={s.img} src={logoAdidas} alt="Company Logo" />
                </div>
                <div
                  className={cx(s.logoC, s.logoPhilips)}
                  data-parallax
                  data-speed-y="0.4"
                  data-direction-y="-1"
                  data-parallax-inactive-on-mobile={`${() => (size.width > breakpoints.mobile ? "false" : "true")}`}
                >
                  <img className={s.img} src={logoPhilips} alt="Company Logo" />
                </div>
                <div
                  className={cx(s.logoC, s.logoNike)}
                  data-parallax
                  data-speed-y="0.3"
                  data-direction-y="-1"
                  data-parallax-inactive-on-mobile={`${() => (size.width > breakpoints.mobile ? "false" : "true")}`}
                >
                  <img className={s.img} src={logoNike} alt="Company Logo" />
                </div>
                <div
                  className={cx(s.logoC, s.logoNestle)}
                  data-parallax
                  data-speed-y="0.2"
                  data-direction-y="-1"
                  data-parallax-inactive-on-mobile={`${() => (size.width > breakpoints.mobile ? "false" : "true")}`}
                >
                  <img className={s.img} src={logoNestle} alt="Company Logo" />
                </div>
                <div
                  className={cx(s.logoC, s.logoEsteeLauder)}
                  data-parallax
                  data-speed-y="0.4"
                  data-direction-y="-1"
                  data-parallax-inactive-on-mobile={`${() => (size.width > breakpoints.mobile ? "false" : "true")}`}
                >
                  <img className={s.img} src={logoEsteeLauder} alt="Company Logo" />
                </div>
              </div>
              <div className={s.row}>
                <div
                  className={cx(s.logoC, s.logoLoreal)}
                  data-parallax
                  data-speed-y="0.5"
                  data-direction-y="-1"
                  data-parallax-inactive-on-mobile={`${() => (size.width > breakpoints.mobile ? "false" : "true")}`}
                >
                  <img className={s.img} src={logoLoreal} alt="Company Logo" />
                </div>
                <div
                  className={cx(s.logoC, s.logoDyson)}
                  data-parallax
                  data-speed-y="0.4"
                  data-direction-y="-1"
                  data-parallax-inactive-on-mobile={`${() => (size.width > breakpoints.mobile ? "false" : "true")}`}
                >
                  <img className={s.img} src={logoDyson} alt="Company Logo" />
                </div>
                <div
                  className={cx(s.logoC, s.logoStarbucks)}
                  data-parallax
                  data-speed-y="0.3"
                  data-direction-y="-1"
                  data-parallax-inactive-on-mobile={`${() => (size.width > breakpoints.mobile ? "false" : "true")}`}
                >
                  <img className={s.img} src={logoStarbucks} alt="Company Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.moveOn}>
          {i18n.language === lngs.en.nativeName ? (
            <div className={s.titleC}>
              <h2 className={s.title}>
                Would you like to
                <br /> <span className={s.italic}>see more?</span>
              </h2>
            </div>
          ) : (
            <div className={s.titleC}>
              <h2 className={s.title}>
                <span className={s.italic}>İncelemeye</span> devam <br /> etmek ister misiniz?
              </h2>
            </div>
          )}

          <div className={s.buttons}>
            <Link className={s.button} to={`${t("home.moveOn.buttons.b1.path")}`}>
              {t("home.moveOn.buttons.b1.ui")}
            </Link>
            <Link className={s.button} to={`${t("home.moveOn.buttons.b2.path")}`}>
              {t("home.moveOn.buttons.b2.ui")}
            </Link>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home
