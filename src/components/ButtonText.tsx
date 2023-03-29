import s from "~/assets/scss/components/ButtonText.module.scss"

import { Link } from "react-router-dom"
import cx from "classnames"

type Props = {
  text: string
  link: { path: string; ui: string }
  size?: "sm" | "md" | "lg"
}

const ButtonText = (props: Props) => {
  return (
    <small
      className={cx(s.buttonText, {
        [s.sm]: props.size === "sm",
        [s.md]: props.size === "md",
        [s.lg]: props.size === "lg",
      })}
    >
      {props.text}{" "}
      <Link to={`/${props.link.path}`} className={s.link}>
        {props.link.ui}
      </Link>
    </small>
  )
}

export default ButtonText
