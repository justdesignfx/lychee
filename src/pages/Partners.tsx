import s from "~/assets/scss/pages/Partners.module.scss"

import cx from "classnames"

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
import MarqueeSimple from "~/components/MarqueeSimple"
import { Link } from "react-router-dom"
import ButtonGlitch from "~/components/ButtonGlitch"
import FooterBasic from "~/components/FooterBasic"

const Partners = () => {
  return (
    <>
      <main className={s.partners}>
        <section className={s.intro}>
          <div className={s.titleC}>
            <small className={s.small}>PARTNERLERİMİZ</small>
            <h1 className={s.title}>
              En iyi markaların <br /> partnerliğini yapıyoruz.
            </h1>
            <p className={s.subtitle}>Ezber bozan projeler yaratmak için global markalarla çalışıyoruz.</p>
          </div>
        </section>
        <section className={s.brands}>
          <div className={s.logoGrid}>
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

export default Partners
