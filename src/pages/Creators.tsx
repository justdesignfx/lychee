import s from "~/assets/scss/pages/Creators.module.scss"
import Img from "~/components/Img"

import cx from "classnames"
import { useEffect } from "react"
import { Trans, useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"

import creator1 from "~/assets/img/creator-1.jpg"
import creator2 from "~/assets/img/creator-2.jpg"
import creator3 from "~/assets/img/creator-3.jpg"
import gridInf1 from "~/assets/img/grid-inf-1.jpg"
import gridInf2 from "~/assets/img/grid-inf-2.jpg"
import gridInf3 from "~/assets/img/grid-inf-3.jpg"
import gridInf4 from "~/assets/img/grid-inf-4.jpg"
import gridInf5 from "~/assets/img/grid-inf-5.jpg"
import gridInf6 from "~/assets/img/grid-inf-6.jpg"
import gridInf7 from "~/assets/img/grid-inf-7.jpg"
import gridInf8 from "~/assets/img/grid-inf-8.jpg"
import slider1 from "~/assets/img/slider-1.jpg"
import slider2 from "~/assets/img/slider-2.jpg"
import slider3 from "~/assets/img/slider-3.jpg"
import visitor from "~/assets/img/smartphone-portal.svg"

import { Helmet } from "react-helmet"
import ButtonGlitch from "~/components/ButtonGlitch"
import ButtonText from "~/components/ButtonText"
import FloatingCard from "~/components/FloatingCard"
import FooterBasic from "~/components/FooterBasic"
import IconArrowSquare from "~/components/Icons/IconArrowSquare"
import MarqueeSimple from "~/components/MarqueeSimple"
import ProjectsSlider from "~/components/ProjectsSlider"
import SquareGrid from "~/components/SquareGrid"
import WhyLycheeMobile from "~/components/WhyLycheeMobile"
import { useWindowSize } from "~/hooks"
import { breakpoints, lngs, ogedayDysonVideo } from "~/variables"

const Creators = () => {
  const size = useWindowSize()
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  useEffect(() => {
    navigate(`/${t("menu.creators.path")}`)
  }, [i18n.language])

  const cards =
    i18n.language === lngs.en.nativeName
      ? [
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>Non-Exclusive</span>
                <span className={s.italic}>Partnership</span>
              </h5>
            ),
            type: "blue",
          },
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>Special</span>
                <span className={s.normal}>
                  <span className={s.italic}>Marketing</span> Team
                </span>
              </h5>
            ),
            type: "transparent",
          },
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>Professional</span>
                <span className={s.normal}>
                  <span className={s.italic}>Production</span> Team
                </span>
              </h5>
            ),
            type: "white",
          },
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>Direct</span>
                <span className={s.italic}>Payment</span>
              </h5>
            ),
            type: "blue",
          },
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>No Costs</span>
                <span className={s.normal}>
                  or <span className={s.italic}>Fees</span>
                </span>
              </h5>
            ),
            type: "transparent",
          },
        ]
      : [
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>Eşit</span>
                <span className={s.italic}>Partnerlik</span>
              </h5>
            ),
            type: "blue",
          },
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>Özel</span>
                <span className={s.normal}>
                  <span className={s.italic}>Marketing</span> Ekibi
                </span>
              </h5>
            ),
            type: "transparent",
          },
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>Profesyonel</span>
                <span className={s.normal}>
                  <span className={s.italic}>Prodüksiyon</span> Ekibi
                </span>
              </h5>
            ),
            type: "white",
          },
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>Direkt</span>
                <span className={s.italic}>Ödeme</span>
              </h5>
            ),
            type: "blue",
          },
          {
            title: (
              <h5 className={s.floatingCardTitle}>
                <span className={s.normal}>Hiçbir</span>
                <span className={s.normal}>
                  <span className={s.italic}>Masraf</span> Yok
                </span>
              </h5>
            ),
            type: "transparent",
          },
        ]

  const sliderItems = [
    {
      thumbnail: slider1,
      name: "ogedaygirisken",
      mediaType: "video",
      mediaSrc:
        "https://player.vimeo.com/progressive_redirect/playback/812355311/rendition/1080p/file.mp4?loc=external&signature=06206f8516a1cbd270440dcc40597243b943b9b7fc3fda677b3425da5cf60f26",
    },
    {
      thumbnail: slider2,
      name: "dilaraaydin",
      mediaType: "image",
      mediaSrc: slider2,
    },
    {
      thumbnail: slider3,
      name: "elifbaldann",
      mediaType: "video",
      mediaSrc:
        "https://player.vimeo.com/progressive_redirect/playback/812370122/rendition/1080p/file.mp4?loc=external&signature=675471875abdbc9f7c3865e151f34b85e8c794e24199132b40a24ac63e9ceb0d",
    },
  ]

  const influencers = [
    {
      img: gridInf1,
      name: "Ogeday Girişken",
      social: {
        instagram: "https://www.instagram.com/ogedaygirisken/",
        tiktok: "https://www.tiktok.com/@ogedaygirisken",
      },
    },
    {
      img: gridInf2,
      name: "Dilara Aydın",
      social: {
        instagram: "https://www.instagram.com/dilaraaydin/",
        tiktok: "https://www.tiktok.com/@dlaraaydinn",
        youtube: "https://youtube.com/@dilaraaydin",
      },
    },
    {
      img: gridInf3,
      name: "Melisa Aslı Pamuk",
      social: {
        instagram: "https://www.instagram.com/melisapamuk/",
      },
    },
    {
      img: gridInf4,
      name: "Buçe Buse Kahraman",
      social: {
        instagram: "https://www.instagram.com/bucekahraman/",
      },
    },
    {
      img: gridInf5,
      name: "Zeynep Aleyna Şen",
      social: {
        instagram: "https://instagram.com/zaleynasen",
        youtube: "https://youtube.com/@Aleynasen",
        tiktok: "https://www.tiktok.com/@zaleynasen",
      },
    },
    {
      img: gridInf6,
      name: "Aylin Engör",
      social: {
        instagram: "https://www.instagram.com/aylinengr/",
        tiktok: "https://www.tiktok.com/@aylinengr",
      },
    },
    {
      img: gridInf7,
      name: "Elif Baldan",
      social: {
        instagram: "https://www.instagram.com/elifbaldann/",
        tiktok: "https://www.tiktok.com/@elifbaldann",
      },
    },
    {
      img: gridInf8,
      name: "Esra Koçhan",
      social: {
        instagram: "https://www.instagram.com/esrakochaan/",
        tiktok: "https://www.tiktok.com/@esrakochan",
      },
    },
  ]

  return (
    <>
      <Helmet>
        <title>{`${t("titleAndDesc.preTitle")}${t("titleAndDesc.creators.title")}`}</title>
        <meta name="description" content={`${t("titleAndDesc.creators.desc")}`}></meta>
        <link rel="canonical" href={`${t("titleAndDesc.creators.canonical")}`} />
      </Helmet>
      <main className={s.creators} data-sticky-item-c>
        <section className={s.intro}>
          <div className={s.textC}>
            <small className={s.small}>DIGITAL TALENT AGENCY</small>
            {i18n.language === lngs.en.nativeName ? (
              <h1 className={s.title}>
                Join Lychee's
                <br /> team of creative
                <br /> content creators.
              </h1>
            ) : (
              <h1 className={s.title}>
                Lychee’nin kreatif <br /> içerik üreticileri ekibine <br /> katılın.
              </h1>
            )}
            <h2 className={s.subtitle}>{t("creators.intro.subtitle")}</h2>
            <Link className={s.btnC} to={`/${t("creators.intro.button.path")}`}>
              <ButtonGlitch size="sm" text={t("creators.intro.button.ui")} />
            </Link>
          </div>
          <div className={s.statsC}>
            <div className={s.videoC}>
              <video autoPlay loop muted playsInline className={s.video} src={ogedayDysonVideo}></video>
            </div>
            <ul className={s.statC}>
              <li className={s.stat}>
                <small className={s.label}>{t("creators.intro.stats.likes")}</small>
                <p className={s.data}>7,254</p>
              </li>
              <li className={s.stat}>
                <small className={s.label}>{t("creators.intro.stats.interaction")}</small>
                <p className={s.data}>110k</p>
              </li>
              <li className={s.stat}>
                <small className={s.label}>{t("creators.intro.stats.sales")}</small>
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
                <small className={s.label}>{t("creators.intro.influencerDetail.influencer")}:</small>
                <p className={s.data}>@ogedaygirisken</p>
              </li>
              <li className={s.info}>
                <small className={s.label}>{t("creators.intro.influencerDetail.brand")}:</small>
                <p className={s.data}>@dyson</p>
              </li>
            </ul>
          </div>
        </section>
        <section className={s.foundations}>
          {i18n.language === lngs.en.nativeName ? (
            <h2 className={s.title}>
              <span className={s.line}>
                <span className={s.resetMargin} style={{ marginRight: "16vw" }}>
                  Lychee,
                </span>
                <span className={s.italic}> was founded</span>
              </span>
              <span className={s.line}>
                <span className={s.italic}>with a passion</span> for
                <span className={s.italic}> pursuing</span> the
              </span>
              <span className={s.line}>
                <span>extraordinary creativity of </span>
                producers,
              </span>
              <span className={cx(s.line, s.resetMargin)} style={{ marginLeft: "14vw" }}>
                influencers, and artists.
              </span>
            </h2>
          ) : (
            <h2 className={s.title}>
              <span className={s.line}>
                <span className={s.resetMargin} style={{ marginRight: "16vw" }}>
                  Lychee,
                </span>
                <span className={s.italic}>üreticilerin,</span>
              </span>
              <span className={s.line}>
                <span className={s.italic}>influencerların</span> ve
                <span className={s.italic}> sanatçıların</span>
              </span>
              <span className={s.line}>
                <span>olağanüstü yaratıcılığının</span> peşinden
              </span>
              <span className={cx(s.line, s.resetMargin)} style={{ marginLeft: "14vw" }}>
                gitme tutkusuyla kuruldu.
              </span>
            </h2>
          )}

          <small className={s.small}>{t("creators.foundations.small")}</small>

          <div className={cx(s.imgC, s.left)} data-framed-parallax-frame>
            <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
              <Img src={creator2} />
            </div>
          </div>

          <div className={cx(s.imgC, s.mid)} data-framed-parallax-frame>
            <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
              <Img src={creator3} />
            </div>
          </div>

          <div className={cx(s.imgC, s.right)} data-framed-parallax-frame>
            <div data-framed-parallax-sliding data-speed-y="0.05" data-direction-y="-1">
              <Img src={creator1} />
            </div>
          </div>
        </section>
        <section className={s.conclusion}>
          <div className={s.marqueeC}>
            <MarqueeSimple>
              <h2 className={s.mText}>
                {t("creators.marquee.mText")} <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          <h5 className={s.text}>{t("creators.marquee.desc")}</h5>
          <div className={s.imgC}>
            <Img src={visitor} />
          </div>
        </section>
        <section className={s.featuredProjects}>
          <div className={s.textC}>
            <small className={s.small}>{t("creators.featuredProjects.small")}</small>
            <h1 className={s.title}>
              <Trans key={"creators.featuredProjects.title"} components={{ br: <br /> }}>
                {t("creators.featuredProjects.title")}
              </Trans>
            </h1>
            <h2 className={s.subtitle}>
              <Trans key={"creators.featuredProjects.subtitle"} components={{ br: <br /> }}>
                {t("creators.featuredProjects.subtitle")}
              </Trans>
            </h2>
          </div>
          <div className={s.sliderC}>
            <ProjectsSlider items={sliderItems} />
          </div>
          <div className={s.buttonC}>
            <ButtonText
              text={t("creators.featuredProjects.button.text")}
              link={{
                ui: t("creators.featuredProjects.button.link.ui"),
                path: t("creators.featuredProjects.button.link.path"),
              }}
            />
          </div>
        </section>
        <section className={s.faces}>
          <div className={s.singleTitleC}>
            {i18n.language === lngs.en.nativeName ? (
              <h1 className={s.title}>
                Explore the
                <span className={s.italic}> potential faces </span>
                of your brand in the future...
              </h1>
            ) : (
              <h1 className={s.title}>
                Markanızın gelecekteki
                <span className={s.italic}> potansiyel yüzlerini </span>
                inceleyin...
              </h1>
            )}
          </div>
          <SquareGrid items={influencers} />

          <ButtonText
            text={t("creators.faces.button.text")}
            link={{ ui: t("creators.faces.button.link.ui"), path: t("creators.faces.button.link.path") }}
            external
          />
        </section>

        <section className={s.why} data-floating-items-c>
          {i18n.language === lngs.en.nativeName ? (
            <h2 className={s.title}>
              Why you should work with <span className={s.italic}>Lychee?</span>
            </h2>
          ) : (
            <h2 className={s.title}>
              Neden <span className={s.italic}>Lychee</span> ile çalışmalısınız?
            </h2>
          )}

          {size.width > breakpoints.tablet ? (
            <div className={s.horizontalScrollContent} data-floating-items>
              {cards.map((card, i) => {
                return (
                  <div data-floating-item key={i}>
                    <FloatingCard {...card} />
                  </div>
                )
              })}
            </div>
          ) : (
            <>
              <section className={s.whyTouchscreen}>
                <WhyLycheeMobile items={cards} />
              </section>
            </>
          )}
        </section>

        <section className={s.waitingForYou}>
          <div className={s.marqueeC}>
            <MarqueeSimple>
              <h2 className={s.mText}>
                {t("creators.waiting.marquee")} <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          {i18n.language === lngs.en.nativeName ? (
            <ButtonText
              size="lg"
              text={t("creators.waiting.button.text")}
              link={{ ui: t("creators.waiting.button.link.ui"), path: t("creators.waiting.button.link.path") }}
              leftAligned
            />
          ) : (
            <ButtonText
              size="lg"
              text={t("creators.waiting.button.text")}
              link={{ ui: t("creators.waiting.button.link.ui"), path: t("creators.waiting.button.link.path") }}
            />
          )}
        </section>
      </main>
      <FooterBasic />
    </>
  )
}

export default Creators
