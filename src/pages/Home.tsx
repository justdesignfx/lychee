import s from "~/assets/scss/pages/Home.module.scss"

import cx from "classnames"
import { Link } from "react-router-dom"

import digitalTalentAgency from "~/assets/img/digital-talent-agency.png"
import instax from "~/assets/img/instax.png"
import portal from "~/assets/img/portal.svg"
import reels from "~/assets/img/reels.png"
import skaterTube from "~/assets/img/skater-tube.svg"
import smartPhone from "~/assets/img/smartphone.svg"

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

import influencer1 from "~/assets/img/influencer-1.jpg"
import influencer2 from "~/assets/img/influencer-2.jpg"
import influencer3 from "~/assets/img/influencer-3.jpg"

import { useContext, useEffect } from "react"
import { ScrollStatus } from "smooth-scrollbar/interfaces"
import Footer from "~/components/Footer"
import MarqueeSimple from "~/components/MarqueeSimple"
import { SmoothContext } from "~/hocs/WithSmooth"
import SplitText from "~/components/SplitText"
import Img from "~/components/Img"
import ButtonText from "~/components/ButtonText"

const Home = () => {
  const textRevealContent = [
    {
      word: "Yeni",
      font: "normal",
    },
    {
      word: "medya",
      font: "normal",
    },
    {
      word: "platformlarında",
      font: "normal",
    },
    {
      word: "kreatif",
      font: "italic",
    },
    {
      word: "içerikler",
      font: "normal",
    },
    {
      word: "üretiyoruz.",
      font: "normal",
    },
  ]

  const influencers = [
    { pic: influencer1, brandLogo: logoDysonBlack },
    { pic: influencer2, brandLogo: logoAbdiBlack },
    { pic: influencer3, brandLogo: logoObsessoBlack },
  ]

  // const smoothCtx = useContext(SmoothContext)

  // useEffect(() => {
  //   smoothCtx?.smooth.current.addListener((status: ScrollStatus) => {
  //     console.log(status.offset.y)
  //   })
  // }, [])

  return (
    <>
      <main className={s.home}>
        <section className={s.hero}>
          <div className={s.bgVideoC}>
            <video className={s.video} loop autoPlay muted playsInline>
              <source
                src="https://player.vimeo.com/progressive_redirect/playback/811194868/rendition/1080p/file.mp4?loc=external&signature=7dc29827ae3db3dfd80474b36b296892ecc96340075b64bbb83f266d886ff389"
                type="video/mp4"
              />
            </video>
          </div>

          <div className={s.textC}>
            <h1 className={s.title}>
              Markanız için en etkili <span className={s.inner}>influencer marketing</span> kampanyalarını yürütmeye
              hazırız.
            </h1>

            <div className={s.buttons}>
              <Link to="/contact/brand" className={s.button}>
                Markam Var
              </Link>

              <Link to="/contact/content-creator" className={s.button}>
                İçerik Üreticisiyim
              </Link>
            </div>
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
            <h2 className={s.text}>
              Lychee <span className={s.italic}>global ölçekte</span> ikonik <br />
              <span className={cx(s.text, s.brands, s.margin1)}>markaların </span>
              <span className={s.text}>çözüm ortağı olan</span> <br />
              <span className={cx(s.text, s.margin2, s.margin4)}>dijital </span>
              <span className={s.text}>
                <span className={s.italic}>influencer</span> marketing <br />
              </span>
              <span className={cx(s.text, s.margin5)}> ajansıdır.</span>
            </h2>
            <div className={s.imgC}>
              <Img src={skaterTube} alt="Skating Tube Tv" objectFit="contain" />
            </div>
          </div>
        </section>
        <section className={s.horizontalScroll} data-h-scroll>
          <div className={s.hScrollContent} data-h-scroll-section>
            <div className={s.textC}>
              <SplitText content={textRevealContent} />
            </div>
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
        <section className={s.marquee}>
          <div className={s.transformC}>
            <MarqueeSimple direction={-1}>
              <h2 className={s.mText}>
                Neler yapıyoruz. <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          <div className={s.transformC}>
            <MarqueeSimple direction={-1}>
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
            {influencers.map((item, i) => {
              return (
                <div className={s.gridItemC} key={i}>
                  <div className={s.infoC}>
                    <div className={s.info}>
                      <small className={s.label}>Marka</small>
                      <div className={s.logoC}>
                        <img src={item.brandLogo} alt="Brand Logo" className={s.logo} />
                      </div>
                    </div>
                    <div className={s.info}>
                      <small className={s.label}>Talent</small>
                      <p className={s.text}>Dilara Aydın</p>
                    </div>
                  </div>
                  <img className={s.img} src={item.pic} alt="Influencer" />
                </div>
              )
            })}
          </div>
          <ButtonText text="Daha fazlasını incelemek için" link={{ path: "works", ui: "işlerimize göz atın" }} />
          {/* <small className={s.lookUp}>
            Daha fazlasını incelemek için{" "}
            <Link to="/works" className={s.link}>
              işlerimize göz atın
            </Link>
          </small> */}
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
              <Img src={smartPhone} alt="Smartphone Doodle" objectFit="contain" />
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
              Partneri olduğumuz <span className={s.italic}>global</span> markalar.
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
              <span className={s.italic}>İncelemeye</span> devam <br /> etmek ister misiniz?
            </h2>
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
