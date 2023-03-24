import s from "~/assets/scss/pages/Brands.module.scss"

import { Link } from "react-router-dom"

import ButtonGlitch from "~/components/ButtonGlitch"
import Img from "~/components/Img"
import FooterBasic from "~/components/FooterBasic"

import portalDiamond from "~/assets/img/portal-diamond.png"
import sample from "~/assets/img/sample.png"
import stickerBans from "~/assets/img/sticker-bans.svg"
import stickerPeace from "~/assets/img/sticker-peace.svg"
import MarqueeSimple from "~/components/MarqueeSimple"
import IconArrowSquare from "~/components/Icons/IconArrowSquare"

const Brands = () => {
  return (
    <>
      <main className={s.brands}>
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
          <div className={s.imgC} data-parallax data-speed-y="0.5" data-direction-y="-1">
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

          <div className={s.methodsList}>
            <div className={s.scrollbar} data-sticky-title-c>
              <div className={s.thumb} data-sticky-title></div>
            </div>
            <ul className={s.list}>
              <li className={s.listItem}>
                <small className={s.index}>01</small>
                <h5 className={s.title}>Hedeflerinizi Tanımlamak</h5>
                <p className={s.text}>
                  Satış huninizde daha fazla müşteri adayı, daha düşük CPM, artan marka bilinirliği, pazarlama
                  kampanyalarınızda benzersiz ve yeni içerik arıyorsanız, sizin için buradayız. Hedef kitlenizi, temel
                  hedeflerinizi, tercih ettiğiniz sosyal kanalları ve kampanyanız için başarıya eşit olan diğer her şeyi
                  tam olarak tanımlamak için deneyimli stratejistlerden oluşan ekibimizle işbirliği yapacaksınız.
                </p>
              </li>
              <li className={s.listItem}>
                <small className={s.index}>02</small>
                <h5 className={s.title}>Kampanya Stratejinizi İnşa Etmek</h5>
                <p className={s.text}>
                  Biz mümkün olan en iyi kampanya stratejinizi oluştururken kahvenizden bir yudum alın. Hedeflerinizi
                  öğrendikten ve kurumsal kimliğinizi analiz ettikten sonra, ekibimiz bütçeniz ve parametreleriniz
                  dahilinde mükemmel stratejiyi oluşturacaktır. Kampanyanızı yürütmek, beyin fırtınası yapmak ve
                  projenin nihai onayını almak için uygulayabileceğimiz eksiksiz bir senaryonlar menüsü hazırlıyoruz.
                </p>
              </li>
              <li className={s.listItem}>
                <small className={s.index}>03</small>
                <h5 className={s.title}>Hayallerinizi Şekillendirecek İçerik Üreticinizi Seçmek</h5>
                <p className={s.text}>
                  Yaratıcı, kreatif içerik üreticileri ve influencer ekibimizin içinden markanızı en iyi şekilde
                  tanıtacak yeteceği buluyoruz. Ekibimiz seçtiğiniz platformda markanız için yaratıcı reklam
                  kampanyaları oluşturur.
                </p>
              </li>
              <li className={s.listItem}>
                <small className={s.index}>04</small>
                <h5 className={s.title}>Gerçek Zamanlı Sonuçları Görmek</h5>
                <p className={s.text}>
                  Veri analistlerinden oluşan ekibimiz, bir sonraki kampanya lansmanınızın temelini oluşturan kampanya
                  içgörülerinizi belirler. Bu verilere dayanarak kampanyanızın bir öncekinden daha iyi olması için en
                  etkili yol haritalarını çizer.
                </p>
              </li>
            </ul>
          </div>
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
