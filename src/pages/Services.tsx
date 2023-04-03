import s from "~/assets/scss/pages/Services.module.scss"

import cx from "classnames"
import { Link } from "react-router-dom"

import doodleLaying from "~/assets/img/doodle-laying.png"
import sample from "~/assets/img/sample.png"

import FloatingCard from "~/components/FloatingCard"
import FooterBasic from "~/components/FooterBasic"
import IconArrowSquare from "~/components/Icons/IconArrowSquare"
import List from "~/components/List"
import MarqueeSimple from "~/components/MarqueeSimple"
import Img from "~/components/Img"
import ButtonGlitch from "~/components/ButtonGlitch"
import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"
import WhyLycheeMobile from "~/components/WhyLycheeMobile"

const Services = () => {
  const size = useWindowSize()

  const theWay = [
    {
      title: "Mükemmel yönetim için adım adım ilerliyoruz.",
      text: "Markalarımız ve dijital yeteneklerimiz için bütün süreçleri eksiksiz bir şekilde planlıyor, çizginin dışında benzersiz işlere imza atmak için tutkulu ekibimizle birlikte çalışıyoruz.",
    },
    {
      title: "Bizim için tek yol: Yaratıcılık",
      text: "Ortaya koyduğumuz işlerin en büyük ölçeği yaratıcılık! Dijital yeteneklerimizi markalarımızla buluştururken ortaya çıkan her işi yaratıcılık ölçeğinden geçiriyoruz.",
    },
    {
      title: "Etkileşim anahtardır!",
      text: "Tutkulu ekibimiz, dijital yeteneklerin, toplulukların ve markaların doğru bir şekilde dijital diyaloğa dahil olması için gerekli bütün adımları baştan sona planlar.",
    },
    {
      title: "Verileri seviyoruz.",
      text: "İşimizin en sevdiğimiz kısmı burada başlıyor. Sosyal dinleme, erişim raporu ve yönlendirme metriklerini detaylıca inceliyor, üzerine bol bol konuşuyoruz. Bu sayede dijital içerik üreticilerimizle ve markalarımızla çok daha sağlıklı, uzun soluklu ilişkiler yürütebiliyoruz.",
    },
  ]

  const pros = [
    {
      title: "A’dan Z’ye yönetim.",
      text: "A’dan Z’ye yönetilen, yenilikçi, iletişimi güçlü ve etkileyici marketing kampanyaları sunmak için markalarla partnerlik yapıyoruz.",
    },
    {
      title: "Toplulukları yönetiyoruz.",
      text: "Dijital yeteneklerimizin topluluklarıyla olan iletişimine dikkat ediyor, marka iş birliklerini bu iletişimin ve hikayenin bir uzantısı olarak ele alıyoruz.",
    },
    {
      title: "Lychee çekirdekleri gibi..",
      text: "Dijital trendleri yaratıcı ekibimizle yeniden yorumlamaya bayılıyoruz! Bu nedenle projelerimizi oluştururken bir topluluk olarak hareket ediyor ve eğlenmeyi ihmal etmiyoruz.",
    },
    {
      title: "Yetenek yönetiminin diğer yöntemi.",
      text: "Dijital yeteneklerimizi en doğru şekilde yönlendirmek için çalışan bir ekibiz. Bu nedenle dijital yeteneklerimizin, topluluklarını, marka iş birlikleri dışındaki süreçlerini ve projelerini de çok ciddiye alıyoruz.",
    },
  ]

  const cards = [
    {
      title: { p1: "Creative", p2: "Copyright" },
      text: "Sıra dışı ve yenilikçi içerikleri seviyoruz. Bu doğrultuda sınırların dışına çıkarak markanız için dinamik, özgün ve yaratıcı metinler yazıyoruz.",
      type: "blue",
    },
    {
      title: { p1: "Creative", p2: "Illustration" },
      text: "Yaratıcı ruhunuzdan ilham alarak sizlere eşsiz dijital bir dünya yaratıyoruz.",
      type: "transparent",
    },
    {
      title: { p1: "C360o", p2: "Production" },
      text: "Son teknoloji ekipmanlarımız ve donanımlı ekibimiz ile hayalinizdeki projeyi gerçekleştiriyoruz.",
      type: "white",
    },
    {
      title: { p1: "Event Planning", p2: "Management" },
      text: "İhtiyaçlarınızı belirlenen içerikler doğrultusunda tüm hatlarıyla tasarlayarak süreci baştan sona yönetiyoruz.",
      type: "white",
    },

    {
      title: { p1: "Digital Design", p2: "Services" },
      text: "Tüm partnerlerimize iyi bir deneyim sunabilmek için alışılmışın dışına çıkarak yeni bir dijital dünya tasarlıyoruz.",
      type: "blue",
    },
  ]

  return (
    <>
      <main className={s.services}>
        <section className={s.titleC}>
          <h1 className={s.title}>
            <span className={s.line}>
              Tüm
              <span className={s.italic}> yaratıcı marketing </span>
              <span className={s.small}>ve</span>
            </span>
            <span className={s.line}>
              <span className={cx(s.italic, s.margin2)}> yeni medya</span>
              <span> ihtiyaçlarınızı </span>
            </span>
            <span className={cx(s.line, s.margin1)}>karşılıyoruz.</span>
          </h1>

          <p className={s.floatingText}>
            Sürekli hareket eden görüntüler dünyasında bir dizi temel dijital çözümler sunuyoruz.
          </p>

          <div className={s.bgImgC} data-parallax data-speed-y="0.2" data-direction-y="-1">
            <div className={s.rotateC}>
              <Img src={sample} objectFit="cover" />
            </div>
          </div>
        </section>

        <section className={s.misc}>
          <div className={s.imgC} data-parallax data-speed-y="0.1" data-direction-y="-1">
            <Img src={sample} objectFit="cover" />
          </div>
          <div className={s.imgC} data-parallax data-speed-y="0.5" data-direction-y="1">
            <Img src={doodleLaying} objectFit="contain" />
          </div>
          <div className={s.imgC} data-parallax data-speed-y="0.15" data-direction-y="-1">
            <Img src={sample} objectFit="cover" />
          </div>
        </section>

        <section className={s.theWay}>
          <List
            title={
              <h2 className={s.stickyText}>
                Çalışma <span className={s.italic}>şeklimiz.</span>
              </h2>
            }
            items={theWay}
          />
        </section>

        <section className={s.sideServices}>
          <div className={s.sideServicesTitleC}>
            <h2 className={s.title}>YAN HİZMETLERİMİZ</h2>
            <p className={s.text}>
              Tüm işlerin <span className={s.italic}>tek çatı altında</span> gerçekleşebilmesi için en iyi ekiplerle
              çalışıyoruz.
            </p>
          </div>

          {size.width > breakpoints.mobile ? (
            <div className={s.cards}>
              {cards.map((card, i) => {
                return (
                  <div className={s.cardC} key={i}>
                    <FloatingCard {...card} />
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

        <section className={s.singleTitleC}>
          <h1 className={s.title}>
            Dünya bizim
            <span className={s.italic}> dijital </span>
            oyun alanımız.
          </h1>
        </section>

        <section className={s.pros}>
          <List
            title={
              <h2 className={s.stickyText}>
                Bizi diğerlerinden <span className={s.italic}>ayıran</span> özellikler.
              </h2>
            }
            items={pros}
          />
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

export default Services
