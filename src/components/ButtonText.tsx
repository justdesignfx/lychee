import s from "~/assets/scss/components/ButtonText.module.scss"

import { Link } from "react-router-dom"
import cx from "classnames"

type Props = {
  text: string
  link: { path: string; ui: string }
  size?: "sm" | "md" | "lg"
  external?: boolean
  leftAligned?: boolean
}

const ButtonText = (props: Props) => {
  return (
    <small
      className={cx(s.buttonText, {
        [s.leftAligned]: props.leftAligned,
        [s.sm]: props.size === "sm",
        [s.md]: props.size === "md",
        [s.lg]: props.size === "lg",
      })}
    >
      <span>{props.text}</span>
      {props.external ? (
        <Link to={`/${props.link.path}`} target="_blank" rel="noreferrer noopener" className={s.link}>
          {props.link.ui}
        </Link>
      ) : (
        <Link to={`/${props.link.path}`} className={s.link}>
          {props.link.ui}
        </Link>
      )}
    </small>
  )
}

export default ButtonText
