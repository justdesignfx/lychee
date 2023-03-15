import React from "react"
import s from "~/assets/scss/components/FloatingCard.module.scss"

import cx from "classnames"

type Props = {
  title: { p1: string; p2: string }
  text?: string
  type: "blue" | "transparent" | "white" | string
}

const FloatingCard = (props: Props) => {
  return (
    <div className={cx(s.floatingCard, [s[props.type]])}>
      <h5 className={s.title}>
        <span className={s.normal}>{props.title.p1}</span>
        <span className={s.italic}>{props.title.p2}</span>
      </h5>
      <p className={s.text}>{props.text}</p>
    </div>
  )
}

export default FloatingCard
