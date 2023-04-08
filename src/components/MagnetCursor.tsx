import { useEffect, useRef } from "react"
import s from "~/assets/scss/components/MagnetCursor.module.scss"
import useMousePosition from "~/hooks/useMousePosition"

import cx from "classnames"
import gsap from "gsap"
import { useCursorStore } from "~/store/cursorStore"

const MagnetCursor = () => {
  const cursorDefaultRef = useRef(null)
  const magnetCursorRef = useRef(null)
  const cursorStore = useCursorStore()
  const { clientX, clientY } = useMousePosition()

  // control screen display
  useEffect(() => {
    const handleMouseEnter = () => {
      if (!cursorStore.visible) cursorStore.toggleVisibility()
    }

    const handleMouseLeave = () => {
      if (cursorStore.visible) cursorStore.toggleVisibility()
    }

    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorStore.visible])

  useEffect(() => {
    if (cursorStore.visible) {
      magnetCursorRef.current &&
        gsap.to(magnetCursorRef.current, {
          x: () => clientX - 9,
          y: () => clientY - 9,
          duration: 0,
        })
    }
  }, [clientX, clientY, cursorStore.visible])

  return (
    <div
      className={cx(s.magnetCursor, [s[cursorStore.type]], {
        [s.visible]: cursorStore.visible,
      })}
      ref={magnetCursorRef}
    >
      <div className={cx(s.cursor, [s[cursorStore.type]])} ref={cursorDefaultRef}></div>
    </div>
  )
}

export default MagnetCursor
