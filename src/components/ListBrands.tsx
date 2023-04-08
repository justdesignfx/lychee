import { useState } from "react"
import s from "~/assets/scss/components/ListBrands.module.scss"

import cx from "classnames"
import IconMinus from "./Icons/IconMinus"
import IconPlus from "./Icons/IconPlus"

const ListBrands = () => {
  const items = [
    {
      title: "Hedeflerinizi Tanımlamak",
      text: "Satış huninizde daha fazla müşteri adayı, daha düşük CPM, artan marka bilinirliği, pazarlama kampanyalarınızda benzersiz ve yeni içerik arıyorsanız, sizin için buradayız. Hedef kitlenizi, temel hedeflerinizi, tercih ettiğiniz sosyal kanalları ve kampanyanız için başarıya eşit olan diğer her şeyi tam olarak tanımlamak için deneyimli stratejistlerden oluşan ekibimizle işbirliği yapacaksınız.",
    },
    {
      title: "Kampanya Stratejinizi İnşa Etmek",
      text: "Biz mümkün olan en iyi kampanya stratejinizi oluştururken kahvenizden bir yudum alın. Hedeflerinizi öğrendikten ve kurumsal kimliğinizi analiz ettikten sonra, ekibimiz bütçeniz ve parametreleriniz dahilinde mükemmel stratejiyi oluşturacaktır. Kampanyanızı yürütmek, beyin fırtınası yapmak ve projenin nihai onayını almak için uygulayabileceğimiz eksiksiz bir senaryonlar menüsü hazırlıyoruz.",
    },
    {
      title: "Hayallerinizi Şekillendirecek İçerik Üreticinizi Seçmek",
      text: "        Yaratıcı, kreatif içerik üreticileri ve influencer ekibimizin içinden markanızı en iyi şekilde tanıtacak yeteceği buluyoruz. Ekibimiz seçtiğiniz platformda markanız için yaratıcı reklam kampanyaları oluşturur.",
    },
    {
      title: "Gerçek Zamanlı Sonuçları Görmek",
      text: " Veri analistlerinden oluşan ekibimiz, bir sonraki kampanya lansmanınızın temelini oluşturan kampanya içgörülerinizi belirler. Bu verilere dayanarak kampanyanızın bir öncekinden daha iyi olması için en etkili yol haritalarını çizer.",
    },
  ]

  const [activeItems, setActiveItems] = useState<number[]>([])

  const handleAccordion = (i: number) => {
    if (!activeItems.includes(i)) {
      setActiveItems((prev) => [...prev, i])
    } else {
      const filtered = activeItems.filter((item) => {
        return item !== i
      })

      setActiveItems(filtered)
    }
  }

  return (
    <div className={s.methodsList}>
      <div className={s.scrollbar} data-sticky-title-c>
        <div className={s.thumb} data-sticky-title></div>
      </div>

      <ul className={s.list}>
        {items.map((item, i) => {
          return (
            <li
              className={cx(s.listItem, { [s.active]: activeItems.includes(i) })}
              key={i}
              onClick={() => handleAccordion(i)}
            >
              <small className={s.index}>0{i + 1}</small>
              <div className={s.info}>
                <h5 className={s.title}>
                  <div className={s.toggleMobile}>
                    <div className={cx(s.icon, s.minus)}>
                      <IconMinus fill="#C8C8C8" />
                    </div>
                    <div className={cx(s.icon, s.plus)}>
                      <IconPlus fill="#C8C8C8" />
                    </div>
                  </div>
                  {item.title}
                </h5>
                <div className={s.oHiddenC}>
                  <p className={s.text}>{item.text}</p>
                </div>
              </div>
            </li>
          )
        })}
        {/* <li className={s.listItem}>
          <small className={s.index}>01</small>
          <div className={s.info}>
            <h5 className={s.title}>Hedeflerinizi Tanımlamak</h5>
            <div className={s.oHiddenC}>
              <p className={s.text}>
                Satış huninizde daha fazla müşteri adayı, daha düşük CPM, artan marka bilinirliği, pazarlama
                kampanyalarınızda benzersiz ve yeni içerik arıyorsanız, sizin için buradayız. Hedef kitlenizi, temel
                hedeflerinizi, tercih ettiğiniz sosyal kanalları ve kampanyanız için başarıya eşit olan diğer her şeyi
                tam olarak tanımlamak için deneyimli stratejistlerden oluşan ekibimizle işbirliği yapacaksınız.
              </p>
            </div>
          </div>
        </li>
        <li className={s.listItem}>
          <small className={s.index}>02</small>
          <div className={s.info}>
            <h5 className={s.title}>Kampanya Stratejinizi İnşa Etmek</h5>
            <div className={s.oHiddenC}>
              <p className={s.text}>
                Biz mümkün olan en iyi kampanya stratejinizi oluştururken kahvenizden bir yudum alın. Hedeflerinizi
                öğrendikten ve kurumsal kimliğinizi analiz ettikten sonra, ekibimiz bütçeniz ve parametreleriniz
                dahilinde mükemmel stratejiyi oluşturacaktır. Kampanyanızı yürütmek, beyin fırtınası yapmak ve projenin
                nihai onayını almak için uygulayabileceğimiz eksiksiz bir senaryonlar menüsü hazırlıyoruz.
              </p>
            </div>
          </div>
        </li>
        <li className={s.listItem}>
          <small className={s.index}>03</small>
          <div className={s.info}>
            <h5 className={s.title}>Hayallerinizi Şekillendirecek İçerik Üreticinizi Seçmek</h5>
            <div className={s.oHiddenC}>
              <p className={s.text}>
                Yaratıcı, kreatif içerik üreticileri ve influencer ekibimizin içinden markanızı en iyi şekilde tanıtacak
                yeteceği buluyoruz. Ekibimiz seçtiğiniz platformda markanız için yaratıcı reklam kampanyaları oluşturur.
              </p>
            </div>
          </div>
        </li>
        <li className={s.listItem}>
          <small className={s.index}>04</small>
          <div className={s.info}>
            <h5 className={s.title}>Gerçek Zamanlı Sonuçları Görmek</h5>
            <div className={s.oHiddenC}>
              <p className={s.text}>
                Veri analistlerinden oluşan ekibimiz, bir sonraki kampanya lansmanınızın temelini oluşturan kampanya
                içgörülerinizi belirler. Bu verilere dayanarak kampanyanızın bir öncekinden daha iyi olması için en
                etkili yol haritalarını çizer.
              </p>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  )
}

export default ListBrands
