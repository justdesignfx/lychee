import s from "~/assets/scss/pages/Services.module.scss"
import { useEffect } from "react"

import { useTranslation } from "react-i18next"
import cx from "classnames"
import { Link, useNavigate } from "react-router-dom"

import doodleLaying from "~/assets/img/doodle-laying.png"
import nescafe from "~/assets/img/nescafe.jpg"
import nikes from "~/assets/img/nikes.jpg"
import smoothie from "~/assets/img/smoothie.jpg"

import ButtonGlitch from "~/components/ButtonGlitch"
import FloatingCard from "~/components/FloatingCard"
import FooterBasic from "~/components/FooterBasic"
import Img from "~/components/Img"
import List from "~/components/List"
import MarqueeSimple from "~/components/MarqueeSimple"
import WhyLycheeMobile from "~/components/WhyLycheeMobile"
import { useWindowSize } from "~/hooks"
import { breakpoints, lngs } from "~/variables"

const Services = () => {
  const size = useWindowSize()
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  useEffect(() => {
    navigate(`/${t("menu.services.path")}`)
  }, [i18n.language])

  const theWay = [
    {
      title: t("services.list1.i1.title"),
      text: t("services.list1.i1.desc"),
    },
    {
      title: t("services.list1.i2.title"),
      text: t("services.list1.i2.desc"),
    },
    {
      title: t("services.list1.i3.title"),
      text: t("services.list1.i3.desc"),
    },
    {
      title: t("services.list1.i4.title"),
      text: t("services.list1.i4.desc"),
    },
  ]

  const pros = [
    {
      title: t("services.list2.i1.title"),
      text: t("services.list2.i1.desc"),
    },
    {
      title: t("services.list2.i2.title"),
      text: t("services.list2.i2.desc"),
    },
    {
      title: t("services.list2.i3.title"),
      text: t("services.list2.i3.desc"),
    },
    {
      title: t("services.list2.i4.title"),
      text: t("services.list2.i4.desc"),
    },
  ]

  const cards = [
    {
      title: (
        <h5 className={s.floatingCardTitle}>
          <span className={s.normal}>Creative</span>
          <span className={s.italic}>Copyrwrite</span>
        </h5>
      ),
      text: t("services.sideServices.cards.c1.desc"),
      type: "blue",
    },
    {
      title: (
        <h5 className={s.floatingCardTitle}>
          <span className={s.normal}>Creative</span>
          <span className={s.italic}>Illustration</span>
        </h5>
      ),
      text: t("services.sideServices.cards.c2.desc"),
      type: "transparent",
    },
    {
      title: (
        <h5 className={s.floatingCardTitle}>
          <span className={s.normal}>360°</span>
          <span className={s.italic}>Production</span>
        </h5>
      ),
      text: t("services.sideServices.cards.c3.desc"),
      type: "white",
    },
    {
      title: (
        <h5 className={s.floatingCardTitle}>
          <span className={s.normal}>Event Planning</span>
          <span className={s.italic}>& Management</span>
        </h5>
      ),
      text: t("services.sideServices.cards.c4.desc"),
      type: "white",
    },
    {
      title: (
        <h5 className={s.floatingCardTitle}>
          <span className={s.normal}>Digital Design</span>
          <span className={s.italic}>Services</span>
        </h5>
      ),
      text: t("services.sideServices.cards.c5.desc"),
      type: "blue",
    },
  ]

  return (
    <>
      <main className={s.services}>
        <section className={s.titleC}>
          {i18n.language === lngs.en.nativeName ? (
            <h1 className={s.title}>
              <span className={cx(s.line, s.resetMargin)} style={{ marginRight: "6vw" }}>
                <span className={s.resetMargin} style={{ marginRight: "14vw" }}>
                  We meet
                </span>
                <span> all your </span> <br />
              </span>
              <span className={s.line}>
                <span className={cx(s.italic, s.resetMargin)} style={{ marginLeft: "6vw" }}>
                  <span className={s.resetMargin} style={{ marginRight: "22vw" }}>
                    creative
                  </span>
                  <span> marketing </span>
                </span>
                <span className={s.small}>and</span>
                <br />
              </span>
              <span className={cx(s.line, s.resetMargin)} style={{ marginRight: "12vw" }}>
                <span className={cx(s.italic, s.resetMargin)} style={{ marginRight: "18vw" }}>
                  {" "}
                  new media
                </span>
                <span> needs.</span>
              </span>
            </h1>
          ) : (
            <h1 className={s.title}>
              <span className={s.line}>
                <span>Tüm</span>
                <span className={s.italic}> yaratıcı marketing </span>
                <span className={s.small}>ve</span>
              </span>
              <span className={s.line}>
                <span className={s.italic} style={{ marginRight: "20vw" }}>
                  {" "}
                  yeni medya
                </span>
                <span> ihtiyaçlarınızı </span>
              </span>
              <span className={s.line} style={{ marginRight: "54vw" }}>
                karşılıyoruz.
              </span>
            </h1>
          )}

          <p className={s.floatingText}>{t("services.intro.subtitle")}</p>

          <div className={s.bgImgC} data-parallax data-speed-y="0.2" data-direction-y="-1">
            <div className={s.rotateC}>
              <Img src={nescafe} objectFit="cover" />
            </div>
          </div>
        </section>

        <section className={s.misc}>
          <div className={s.imgC} data-parallax data-speed-y="0.1" data-direction-y="-1">
            <Img src={nikes} objectFit="cover" />
          </div>
          <div className={s.imgC} data-parallax data-speed-y="0.5" data-direction-y="1">
            <Img src={doodleLaying} objectFit="contain" />
          </div>
          <div className={s.imgC} data-parallax data-speed-y="0.15" data-direction-y="-1">
            <Img src={smoothie} objectFit="cover" />
          </div>
        </section>

        <section className={s.theWay}>
          <List
            title={
              i18n.language === lngs.en.nativeName ? (
                <h2 className={s.stickyText}>
                  Our working <span className={s.italic}>method.</span>
                </h2>
              ) : (
                <h2 className={s.stickyText}>
                  Çalışma <span className={s.italic}>şeklimiz.</span>
                </h2>
              )
            }
            items={theWay}
          />
        </section>

        <section className={s.sideServices}>
          <div className={s.sideServicesTitleC}>
            <h2 className={s.title}>{t("services.sideServices.small")}</h2>
            {i18n.language === lngs.en.nativeName ? (
              <p className={s.text}>
                We work with the best teams to make it happen in just one-click,{" "}
                <span className={s.italic}>under one-roof.</span>
              </p>
            ) : (
              <p className={s.text}>
                Tüm işlerin <span className={s.italic}>tek çatı altında</span> gerçekleşebilmesi için en iyi ekiplerle
                çalışıyoruz.
              </p>
            )}
          </div>

          {size.width > breakpoints.mobile ? (
            <div className={s.cards}>
              {cards.map((card, i) => {
                return (
                  <div className={s.cardC} key={i}>
                    <div data-parallax data-speed-y={`${0.05 * (i + 1)}`} data-direction-y="-1">
                      <FloatingCard {...card} />
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className={s.whyMobile}>
              <WhyLycheeMobile items={cards} />
            </div>
          )}
        </section>

        {/* <section className={s.singleTitleC}>
          {i18n.language === lngs.en.nativeName ? (
            <h1 className={s.title}>
              The World is our
              <span className={s.italic}> digital </span>
              playground.
            </h1>
          ) : (
            <h1 className={s.title}>
              Dünya bizim
              <span className={s.italic}> dijital </span>
              oyun alanımız.
            </h1>
          )}
        </section> */}

        <section className={s.pros}>
          <List
            title={
              i18n.language === lngs.en.nativeName ? (
                <h2 className={s.stickyText}>
                  What sets us <span className={s.italic}>apart?</span>
                </h2>
              ) : (
                <h2 className={s.stickyText}>
                  Bizi diğerlerinden <span className={s.italic}>ayıran</span> özellikler.
                </h2>
              )
            }
            items={pros}
          />
        </section>

        <section className={s.dare}>
          <div className={s.marqueeC}>
            <MarqueeSimple>
              <h2 className={s.mText}>
                {t("services.marquee.mText")} <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          <h1 className={s.text}>{t("services.marquee.desc")}</h1>
          <Link to={`${t("services.marquee.button.path")}`} className={s.contactBtn}>
            <ButtonGlitch text={`${t("services.marquee.button.ui")}`} size="lg" />
          </Link>
        </section>
      </main>
      <FooterBasic />
    </>
  )
}

export default Services
