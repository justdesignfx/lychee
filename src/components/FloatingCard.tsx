import React from "react"
import s from "~/assets/scss/components/FloatingCard.module.scss"

import cx from "classnames"

type Props = {
  title: JSX.Element
  text?: string
  type: "blue" | "transparent" | "white" | string
}

const FloatingCard = (props: Props) => {
  return (
    <div className={cx(s.floatingCard, [s[props.type]])}>
      {props.title}
      <p className={s.text}>{props.text}</p>
    </div>
  )
}

export default FloatingCard
