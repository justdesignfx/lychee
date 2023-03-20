import s from "~/assets/scss/components/ProjectsSlider.module.scss"
import React, { useState } from "react"

import cx from "classnames"

// import Swiper core and required modules
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import { useSwiperRef } from "~/hooks"

import "swiper/css"
import "swiper/css/navigation"

import sample from "~/assets/img/sample.png"
import lycheeSocial from "~/assets/img/lychee-social.png"
import Img from "./Img"
import { Link } from "react-router-dom"

type Props = {
  items: any
}

const ProjectsSlider = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>()
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>()

  return (
    <div className={s.slider}>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        modules={[Navigation]}
        onSlideChange={(e: any) => setCurrentSlide(e.activeIndex)}
        slidesPerView={3}
        spaceBetween={50}
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
              <React.Fragment key={item.id}>
                <SwiperSlide>
                  <div className={s.slide}>
                    <div className={s.account}>
                      <div className={s.imgC}>
                        <Img src={lycheeSocial} />
                      </div>
                      <small className={s.small}>{item.name}</small>
                    </div>
                    {item.mediaType === "image" ? <Img src={sample} /> : <Img src={sample} />}
                  </div>
                </SwiperSlide>
              </React.Fragment>
            )
          })}
      </Swiper>

      {/* <button className={cx(s.btnWrapper, s.btnPrev, { [s.disabled]: currentSlide === 0 })} ref={prevElRef}>
        <div className={s.btnInner}>
          <RightArrow className={cx(s.btnArrow, s.prev)} />
        </div>
      </button>

      <button
        className={cx(s.btnWrapper, s.btnNext, { [s.disabled]: currentSlide === items.length - 1 })}
        ref={nextElRef}
      >
        <div className={s.btnInner}>
          <RightArrow className={cx(s.btnArrow, s.next)} />
        </div>
      </button> */}
    </div>
  )
}

export default ProjectsSlider
