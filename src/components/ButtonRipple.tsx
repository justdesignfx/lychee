import { useEffect, useRef, useState } from "react"
import s from "~/assets/scss/components/ButtonRipple.module.scss"

import { gsap } from "gsap"
import useMousePosition from "~/hooks/useMousePosition"

type Props = {
  bgColor?: string
  borderColor?: string
  textColor?: string
}

const ButtonRipple = ({ bgColor = "#fff" }: Props) => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const rippleRef = useRef<HTMLSpanElement>(null)
  const { clientX, clientY } = useMousePosition()
  const [hover, setHover] = useState(false)

  useEffect(() => {
    gsap.set(rippleRef.current, {
      scale: 0,
      background: bgColor,
      xPercent: -50,
      yPercent: -50,
    })
  }, [])

  useEffect(() => {
    if (!btnRef.current || !hover) {
      return
    }

    let x = clientX - btnRef.current.getBoundingClientRect().left
    let y = clientY - btnRef.current.getBoundingClientRect().top

    gsap.set(rippleRef.current, {
      left: `${x}px`,
      top: `${y}px`,
    })
  }, [clientX, clientY, hover])

  function handleIn() {
    if (!rippleRef || !btnRef.current) {
      return
    }

    setHover(true)
    gsap.to(rippleRef.current, {
      scale: 2,
      height: btnRef.current.getBoundingClientRect().width * 2,
      width: btnRef.current.getBoundingClientRect().width * 2,
      duration: 0.4,
    })
  }

  function handleOut() {
    setHover(false)
    gsap.to(rippleRef.current, {
      scale: 0,
      duration: 0.4,
    })
  }

  return (
    <button className={s.buttonRipple} ref={btnRef} onMouseEnter={handleIn} onMouseLeave={handleOut}>
      <span className={s.ripple} ref={rippleRef}></span>
      <span className={s.btnText}>Button</span>
    </button>
  )
}

export default ButtonRipple
