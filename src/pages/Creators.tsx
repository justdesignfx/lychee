import s from "~/assets/scss/pages/Creators.module.scss"
import Img from "~/components/Img"

import cx from "classnames"
import { Link } from "react-router-dom"

import sample from "~/assets/img/sample.png"
import visitor from "~/assets/img/smartphone-portal.svg"

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
import { breakpoints } from "~/variables"

const Creators = () => {
  const size = useWindowSize()

  const cards = [
    { title: { p1: "Non-Exclusive", p2: "Partnership" }, type: "blue" },
    { title: { p1: "Özel", p2: "Pazarlama Ekibi" }, type: "transparent" },
    { title: { p1: "Profesyonel", p2: "Prodüksiyon Ekibi" }, type: "white" },
    { title: { p1: "Direct Payment", p2: "Partnership" }, type: "blue" },
    { title: { p1: "No Costs or Fees", p2: "Partnership" }, type: "transparent" },
  ]

  const sliderItems = [
    {
      name: "ogedaygirisken",
      mediaType: "image",
      mediaSrc: sample,
      thumbnail: sample,
    },
    {
      thumbnail: sample,
      name: "dilaraaydin",
      mediaType: "video",
      mediaSrc:
        "https://player.vimeo.com/progressive_redirect/playback/812354380/rendition/1080p/file.mp4?loc=external&signature=b06db44e4e76dcc874a9080d44dc607f32c7d2398eb5a93043e9e5f92b9b0f3f",
    },
    {
      thumbnail: sample,
      name: "elifbaldann",
      mediaType: "video",
      mediaSrc:
        "https://player.vimeo.com/progressive_redirect/playback/812370122/rendition/1080p/file.mp4?loc=external&signature=675471875abdbc9f7c3865e151f34b85e8c794e24199132b40a24ac63e9ceb0d",
    },
  ]

  const influencers = [
    {
      pic: gridInf1,
      name: "Ogeday Girişken",
      social: {
        tiktok: "tiktok",
        instagram: "instagram",
      },
    },
    {
      pic: gridInf2,
      name: "Dilara Aydın",
      social: {
        tiktok: "tiktok",
        instagram: "instagram",
      },
    },
    {
      pic: gridInf3,
      name: "Melisa Aslı Pamuk",
      social: {
        tiktok: "tiktok",
        instagram: "instagram",
      },
    },
    {
      pic: gridInf4,
      name: "Buçe Buse Kahraman",
      social: {
        tiktok: "tiktok",
        instagram: "instagram",
      },
    },
    {
      pic: gridInf5,
      name: "Zeynep Aleyna Şen",
      social: {
        tiktok: "tiktok",
        instagram: "instagram",
      },
    },
    {
      pic: gridInf6,
      name: "Aylin Engör",
      social: {
        tiktok: "tiktok",
        instagram: "instagram",
      },
    },
    {
      pic: gridInf7,
      name: "Elif Baldan",
      social: {
        tiktok: "tiktok",
        instagram: "instagram",
      },
    },
    {
      pic: gridInf8,
      name: "Esra Koçhan",
      social: {
        tiktok: "tiktok",
        instagram: "instagram",
      },
    },
  ]

  return (
    <>
      <main className={s.creators}>
        <section className={s.intro}>
          <div className={s.textC}>
            <small className={s.small}>DIGITAL TALENT AGENCY</small>
            <h1 className={s.title}>
              Lychee’nin kreatif <br /> içerik üreticileri ekibine <br /> katılın.
            </h1>
            <h2 className={s.subtitle}>Influencer’ları en iyi eşleşeceği global markalarla buluşturuyoruz.</h2>
            <Link className={s.btnC} to="/contact">
              <ButtonGlitch size="sm" text="Üretmeye başlayın" />
            </Link>
          </div>
          <div className={s.statsC}>
            <div className={s.videoC}>
              {/* <Img src={bag} objectFit="cover" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className={s.video}
                src="https://player.vimeo.com/progressive_redirect/playback/812355311/rendition/1080p/file.mp4?loc=external&signature=06206f8516a1cbd270440dcc40597243b943b9b7fc3fda677b3425da5cf60f26"
              ></video>
            </div>
            <ul className={s.statC}>
              <li className={s.stat}>
                <small className={s.label}>Beğeni</small>
                <p className={s.data}>7,254</p>
              </li>
              <li className={s.stat}>
                <small className={s.label}>Özgün Etkileşim</small>
                <p className={s.data}>110k</p>
              </li>
              <li className={s.stat}>
                <small className={s.label}>Satış Artışı</small>
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
                <small className={s.label}>Influencer:</small>
                <p className={s.data}>@ogedaygirisken</p>
              </li>
              <li className={s.info}>
                <small className={s.label}>Marka:</small>
                <p className={s.data}>@dyson</p>
              </li>
            </ul>
          </div>
        </section>
        <section className={s.foundations}>
          <h2 className={s.title}>
            Lychee, <span className={s.margin1}></span>
            <span className={s.italic}>üreticilerin,</span> <br /> <span className={s.italic}>influencerların</span> ve
            <span className={s.italic}> sanatçıların</span> <br /> olağanüstü yaratıcılığının{" "}
            <span className={s.margin2}></span> peşinden <br /> <span className={s.margin3}></span>gitme tutkusuyla
            kuruldu.
          </h2>
          <small className={s.small}>
            Talent ekibimizle global marka ve kuruluşlarla partnerlik yapan bir influencer ağı oluşturduk.
            Talentlarımızı içeriklerine en uygun global markalarla buluşturuyoruz.
          </small>

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
            <MarqueeSimple direction={-1}>
              <h2 className={s.mText}>
                Peki ya sonuç.. ? <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          <h5 className={s.text}>
            Efektif, yaratıcı ve yenilikçi influencer marketing kampanyaları yürütüyoruz. Global influencer
            topluluğundaki en yaratıcı yetenekleri Lychee Digital topluluğu arasında bulundurmaktan gurur duyuyoruz.
          </h5>
          <div className={s.imgC}>
            <Img src={visitor} />
          </div>
        </section>
        <section className={s.featuredProjects}>
          <div className={s.textC}>
            <small className={s.small}>ÖNE ÇIKAN PROJELERİMİZ</small>
            <h1 className={s.title}>
              Global trend belirleyicilerle <br /> çalışmaya başlayın.
            </h1>
            <h2 className={s.subtitle}>
              Lychee içerik oluşturucu topluluğu, markanıza özel marketing <br /> ihtiyaçlarını karşılayacak micro ve
              macro influencerlardan oluşur.
            </h2>
          </div>
          <div className={s.sliderC}>
            <ProjectsSlider items={sliderItems} />
          </div>
          <div className={s.buttonC}>
            <ButtonText text="Daha fazlasını incelemek için" link={{ ui: "işlerimize göz atın", path: "/partners" }} />
          </div>
        </section>
        <section className={s.faces}>
          <div className={s.singleTitleC}>
            <h1 className={s.title}>
              Markanızın gelecekteki
              <span className={s.italic}> potansiyel yüzlerini </span>
              inceleyin...
            </h1>
          </div>
          <div className={s.gridC}>
            <SquareGrid items={influencers} />
          </div>

          <ButtonText
            text="Tüm içerik üreticilerimizi görmek için"
            link={{ ui: "bizimle iletişime geçin.", path: "/contact" }}
          />
        </section>
        {size.width > breakpoints.mobile ? (
          <section className={s.why} data-floating-items-c>
            <h2 className={s.title}>
              Neden <span className={s.italic}>Lychee</span> ile çalışmalısınız.
            </h2>
            <div className={s.horizontalScrollContent} data-floating-items>
              {cards.map((card, i) => {
                return (
                  <div data-floating-item key={i}>
                    <FloatingCard {...card} />
                  </div>
                )
              })}
            </div>
          </section>
        ) : (
          <>
            <section className={s.whyMobile}>
              <WhyLycheeMobile items={cards} />
            </section>
          </>
        )}

        <section className={s.waitingForYou}>
          <div className={s.marqueeC}>
            <MarqueeSimple direction={-1}>
              <h2 className={s.mText}>
                Sizi bekliyoruz. <span className={s.seperator}></span>
              </h2>
            </MarqueeSimple>
          </div>
          <ButtonText size="lg" text="Lychee'nin seçkin ekosistemine" link={{ ui: "katılın.", path: "/contact" }} />
        </section>
      </main>

      <FooterBasic />
    </>
  )
}

export default Creators
