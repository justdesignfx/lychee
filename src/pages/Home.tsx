import s from "~/assets/scss/pages/Home.module.scss"

import cx from "classnames"
import { Link } from "react-router-dom"

import instax from "~/assets/img/instax.png"
import portal from "~/assets/img/portal.svg"
import reels from "~/assets/img/reels.png"
import digitalTalentAgency from "~/assets/img/digital-talent-agency.png"
import smartPhone from "~/assets/img/smartphone.svg"
import skaterTube from "~/assets/img/skater-tube.svg"

import logoAdidas from "~/assets/img/logo-adidas.svg"
import logoDisney from "~/assets/img/logo-disney.svg"
import logoDyson from "~/assets/img/logo-dyson.svg"
import logoEsteeLauder from "~/assets/img/logo-estee-lauder.svg"
import logoLoreal from "~/assets/img/logo-loreal.svg"
import logoNestle from "~/assets/img/logo-nestle.svg"
import logoNike from "~/assets/img/logo-nike.svg"
import logoPhilips from "~/assets/img/logo-philips.svg"
import logoStarbucks from "~/assets/img/logo-starbucks.svg"

import MarqueeSimple from "~/components/MarqueeSimple"
import { useContext, useEffect, useRef } from "react"
import { SmoothContext } from "~/hocs/WithSmooth"
import { ScrollStatus } from "smooth-scrollbar/interfaces"
import Footer from "~/components/Footer"

const Home = () => {
  const hScrollText = "Yeni medya platformlarında kreatif içerikler üretiyoruz."

  const smoothCtx = useContext(SmoothContext)
  useEffect(() => {
    smoothCtx?.smooth.current.addListener((status: ScrollStatus) => {
      console.log(status.offset.y)
    })
  }, [])

  return (
    <>
      {" "}
      <main className={s.home}>
        <section className={s.hero}>
          <div className={s.textWrapper}>
            <h1 className={s.text}>
              Markanız için en etkili <span className={s.inner}>influencer marketing</span> kampanyalarını yürütmeye
              hazırız.
            </h1>

            <div className={s.buttons}>
              <Link to="/contact" className={s.button}>
                Markam Var
              </Link>

              <Link to="/contact" className={s.button}>
                İçerik Üreticisiyim
              </Link>
            </div>
          </div>

          <div className={s.marqueeC}>
            <MarqueeSimple direction={-1}>
              <h2 className={s.mText}>
                Digital talent agency. <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
        </section>
        <section className={s.greeting}>
          <div className={s.textC}>
            <div className={s.imgC}>
              <img src={skaterTube} alt="Skating Tube Tv" className={s.img} />
            </div>
            <div className={s.line}>
              <h1 className={s.text}>
                Lychee <span className={s.italic}>global ölçekte</span> ikonik
              </h1>
            </div>
            <div className={s.line}>
              <h1 className={cx(s.text, s.brands)}>markaların</h1>
              <h1 className={s.text}>çözüm ortağı olan</h1>
            </div>
            <div className={s.line}>
              <h1 className={s.text}>dijital</h1>
              <h1 className={s.text}>
                <span className={s.italic}>influencer</span> marketing
              </h1>
            </div>
            <div className={s.line}>
              <h1 className={s.text}>ajansıdır.</h1>
            </div>
          </div>
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
            <div className={s.reels}>
              <Link to="/contact" className={s.button}>
                Kampanyanı Oluştur
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
        <section className={s.marqueeC}>
          <div className={s.transformC}>
            <MarqueeSimple>
              <h2 className={s.mText}>
                Neler yapıyoruz. <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          <div className={s.transformC}>
            <MarqueeSimple>
              <h2 className={s.mText}>Neler yapıyoruz.</h2>
            </MarqueeSimple>
          </div>
        </section>
        <section className={s.works}>
          <div className={s.titleC}>
            <h2 className={s.title}>
              Yaptığımız işler <br /> <span className={s.italic}>yaratıcılığımızı</span> yanstıyor.
            </h2>
            <p className={s.text}>
              En büyük motivasyonumuz dijital medya için <br /> özgün içerikler yaratma dürtüsüdür.
            </p>
          </div>
          <div className={s.worksGrid}>
            {Array.from(Array(9).keys()).map((item, i) => {
              return (
                <div className={s.gridItemC} key={i}>
                  <img className={s.img} src="" alt="" />
                </div>
              )
            })}
          </div>
          <small className={s.lookUp}>
            Daha fazlasını incelemek için{" "}
            <Link to="/works" className={s.link}>
              işlerimize göz atın
            </Link>
          </small>
        </section>
        <section className={s.stats} data-sliding-panels>
          <div className={s.topC}>
            <div className={s.titleC}>
              <h3 className={s.title}>
                Biraz <span className={s.italic}>rakamlardan</span> <br /> bahsedelim.
              </h3>
              <h4 className={s.text}>Sürekli hareket halindeki dijital dünya için, kreatif sonuçlar elde ediyoruz.</h4>
            </div>
            <div className={s.imgC}>
              <img className={s.img} src={smartPhone} alt="Smartphone Doodle" />
            </div>
          </div>
          <div className={cx(s.oWrapper, s.blue)} data-sliding-panel>
            <div className={cx(s.screen, s.blue)}>
              <div className={cx(s.statC, s.blue)}>
                <h1 className={s.statText}>
                  60 <span className={s.million}>milyon</span> <span className={s.asterisk}>*</span>
                </h1>
                <p className={s.desc}>Organik görüntülenme sağlandı.</p>
              </div>
            </div>
          </div>
          <div className={cx(s.oWrapper, s.pink)} data-sliding-panel>
            <div className={cx(s.screen, s.pink)}>
              <div className={cx(s.statC, s.pink)}>
                <h1 className={s.statText}>
                  7000<span className={s.asterisk}>*</span>
                </h1>
                <p className={s.desc}>Özgün içerik üretildi.</p>
              </div>
            </div>
          </div>
          <div className={cx(s.oWrapper, s.black)} data-sliding-panel>
            <div className={cx(s.screen, s.black)}>
              <div className={cx(s.statC, s.black)}>
                <h1 className={s.statText}>
                  20,25<span className={s.percent}>%</span>
                  <span className={s.asterisk}>*</span>
                </h1>
                <p className={s.desc}>Ortalama görüntüleme başına takipçi sayısı artışı.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={s.references}>
          <div className={s.titleC}>
            <div className={s.imgC}>
              <img className={s.img} src={portal} alt="Smartphone Doodle" />
            </div>
            <h2 className={s.title}>
              Partneri olduğumuz <br /> <span className={s.italic}>global</span> markalar.
            </h2>
            <p className={s.text}>
              Yeni çağ üretici endüstrisini şekillendiren, <br /> global markalar ve firmalarla çalışıyoruz.
            </p>
          </div>
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
        <section className={s.moveOn}>
          <div className={s.titleC}>
            <h2 className={s.title}>
              <span className={s.italic}>İncelemeye</span> devam etmek
            </h2>
            <h2 className={s.title}>ister misiniz?</h2>
          </div>

          <div className={s.buttons}>
            <Link className={s.button} to="/partners">
              Partnerlerimiz
            </Link>
            <Link className={s.button} to="/services">
              Hizmetlerimiz
            </Link>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home
