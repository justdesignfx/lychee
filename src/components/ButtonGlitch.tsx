import React from "react"
import s from "~/assets/scss/components/ButtonGlitch.module.scss"
import IconArrowSquare from "./Icons/IconArrowSquare"

import cx from "classnames"

type Props = {
  text: string
  size: "sm" | "md" | "lg"
}

const ButtonGlitch = (props: Props) => {
  return (
    <div className={cx(s.contactBtn, [s[props.size]])}>
      {props.text}
      <span className={s.iconC}>
        <div className={s.oWrapper}>
          <IconArrowSquare fill="#ce1953"></IconArrowSquare>
          <div className={s.tuple}>
            <IconArrowSquare fill="#ce1953"></IconArrowSquare>
          </div>
        </div>
      </span>
    </div>
  )
}

export default ButtonGlitch
