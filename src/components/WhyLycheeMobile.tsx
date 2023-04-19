import { useState } from "react"
import s from "~/assets/scss/components/WhyLycheeMobile.module.scss"

import cx from "classnames"

// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { useSwiperRef } from "~/hooks"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import FloatingCard from "./FloatingCard"

type Props = {
  items: any[]
}

const WhyLycheeMobile = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>()
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>()

  return (
    <div className={s.slider}>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        modules={[Navigation, Autoplay]}
        onSlideChange={(e: any) => {
          setCurrentSlide(e.realIndex)
        }}
        autoplay={{ delay: 1000, disableOnInteraction: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2.8,
            spaceBetween: 30,
            slidesOffsetBefore: 50,
            slidesOffsetAfter: 50,
            autoplay: false,
            loop: false,
            centeredSlides: false,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        slidesPerView={1}
        speed={600}
        navigation={{
          prevEl,
          nextEl,
          disabledClass: "hidden",
        }}
      >
        {Array.isArray(props.items) &&
          props.items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <FloatingCard {...item} />
              </SwiperSlide>
            )
          })}
      </Swiper>

      {/* 
      <button className={cx(s.btnWrapper, s.btnPrev, { [s.disabled]: currentSlide === 0 })} ref={prevElRef}>
        <div className={s.btnInner}>
          <div className={cx(s.btnArrow, s.prev)}>
            <IconArrowSquare fill="#ce1953" />
          </div>
        </div>
      </button>

      <button
        className={cx(s.btnWrapper, s.btnNext, { [s.disabled]: currentSlide === props.items.length - 1 })}
        ref={nextElRef}
      >
        <div className={s.btnInner}>
          <div className={cx(s.btnArrow, s.next)}>
            <IconArrowSquare fill="#ce1953" />
          </div>
        </div>
      </button> */}

      <div className={s.navigation}>
        {props.items.map((item, i) => {
          return <div className={cx(s.navItem, { [s.active]: currentSlide === i })} key={i}></div>
        })}
      </div>
    </div>
  )
}

export default WhyLycheeMobile
