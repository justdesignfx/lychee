import React from "react"
import s from "~/assets/scss/pages/Services.module.scss"
import Img from "~/components/Img"

import cx from "classnames"

import sample from "~/assets/img/sample.png"
import doodleLaying from "~/assets/img/doodle-laying.png"
import List from "~/assets/scss/components/List"
import Footer from "~/components/Footer"
import FloatingCard from "~/components/FloatingCard"

type Props = {}

const Services = (props: Props) => {
  const listContent = [
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
              <span className={cx(s.italic, s.marginR)}> yeni medya </span>
              ihtiyaçlarınızı
            </span>
            <span className={s.line}>karşılıyoruz.</span>
          </h1>

          <div className={s.bgImgC}>
            <Img src={sample} objectFit="cover" />
          </div>
        </section>

        <section className={s.misc}>
          <div className={s.imgC}>
            <Img src={sample} objectFit="cover" />
          </div>
          <div className={s.imgC}>
            <Img src={doodleLaying} objectFit="contain" />
          </div>
          <div className={s.imgC}>
            <Img src={sample} objectFit="cover" />
          </div>
        </section>

        <section className={s.theWay}>
          <List items={listContent} />
        </section>

        <section className={s.sideServices}>
          <div className={s.sideServicesTitleC}>
            <h2 className={s.title}>YAN HİZMETLERİMİZ</h2>
            <p className={s.text}>
              Tüm işlerin <span className={s.italic}>tek çatı altında</span> gerçekleşebilmesi için en iyi ekiplerle
              çalışıyoruz.
            </p>
          </div>
          <div className={s.cards}>
            {cards.map((card, i) => {
              return (
                <div className={s.cardC} key={i}>
                  <FloatingCard {...card} />
                </div>
              )
            })}
          </div>
        </section>
        <section className={s.singleTitleC}>
          <h1 className={s.title}>
            Dünya bizim
            <span className={s.italic}> dijital </span>
            oyun alanımız.
          </h1>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Services
