import s from "~/assets/scss/components/ProjectsSlider.module.scss"
import React, { useEffect, useRef, useState } from "react"

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

type SlideItem = {
  mediaType: "image" | "video" | string
  mediaSrc: string
  name: string
  thumbnail?: string
}

const VideoSlide = (item: SlideItem) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  function handleVideo() {
    setIsPlaying((prev) => !prev)
    console.log("lol")
  }

  useEffect(() => {
    if (!videoRef.current) {
      return
    }

    videoRef.current.pause()

    if (isPlaying) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isPlaying])

  return (
    <div className={cx(s.videoC, { [s.active]: isPlaying })} onMouseEnter={handleVideo} onMouseLeave={handleVideo}>
      {item.thumbnail && (
        <div className={s.thumbnail}>
          <Img src={item.thumbnail} />
        </div>
      )}
      <video className={s.video} playsInline ref={videoRef} preload="metadata" loop>
        <source src={item.mediaSrc} type="video/mp4" />
      </video>
    </div>
  )
}

type Props = {
  items: SlideItem[]
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
              <React.Fragment key={i}>
                <SwiperSlide>
                  <div className={s.slide}>
                    <div className={s.account}>
                      <div className={s.imgC}>
                        <Img src={lycheeSocial} />
                      </div>
                      <small className={s.small}>{item.name}</small>
                    </div>
                    <div className={s.mediaC}>
                      {item.mediaType === "image" ? (
                        <div className={s.imgC}>
                          <Img src={sample} />
                        </div>
                      ) : (
                        <VideoSlide {...item} />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              </React.Fragment>
            )
          })}
      </Swiper>

      {/* <div className={s.navigation}>
        {props.items.map(() => {
          return <div className={s.navItem}></div>
        })}
      </div> */}
    </div>
  )
}

export default ProjectsSlider
