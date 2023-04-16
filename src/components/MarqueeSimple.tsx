import { ReactElement, useState, memo } from "react"
import s from "~/assets/scss/components/MarqueeSimple.module.scss"

import cx from "classnames"
import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"

type Props = {
  children: ReactElement
  direction?: number
  speed?: number
}

const MarqueeSimple = ({ children, direction = 1, speed = 1 }: Props) => {
  //   const marqueeRef = useRef<HTMLDivElement>()
  const [animate, setAnimate] = useState(true)

  const size = useWindowSize()

  //   useEffect(() => {
  //     marqueeRef.current &&
  //       gsap.fromTo(
  //         marqueeRef.current,
  //         { xPercent: 40 },
  //         {
  //           xPercent: 0,
  //           duration: () => (size.width > 1024 ? 10 : 5),
  //           ease: "none",
  //           onComplete: () => {
  //             setAnimate(true)
  //           },
  //         }
  //       )
  //   }, [size.width])

  return (
    <div className={s.marquee}>
      <div
        className={cx(s.marqueeGroup, { [s.animate]: animate, [s.reversed]: direction === 1 })}
        // style={{ animationDuration: `${(size.width > breakpoints.mobile ? 60 : 20) / speed}s` }}
      >
        <div className={s.mInner}>{children}</div>
        <div className={s.mInner} aria-hidden="true">
          {children}
        </div>
      </div>

      <div
        aria-hidden="true"
        className={cx(s.marqueeGroup, { [s.animate]: animate, [s.reversed]: direction === 1 })}
        // style={{ animationDuration: `${(size.width > breakpoints.mobile ? 60 : 20) / speed}s` }}
      >
        <div className={s.mInner}>{children}</div>
        <div className={s.mInner} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

export default memo(MarqueeSimple)
