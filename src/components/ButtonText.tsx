import { Link } from "react-router-dom"
import s from "~/assets/scss/components/ButtonText.module.scss"

type Props = {
  text: string
  link: { path: string; ui: string }
}

const ButtonText = (props: Props) => {
  return (
    <small className={s.buttonText}>
      {props.text}{" "}
      <Link to={`/${props.link.path}`} className={s.link}>
        {props.link.ui}
      </Link>
    </small>
  )
}

export default ButtonText
