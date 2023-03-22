import { Link } from "react-router-dom"
import s from "~/assets/scss/components/SquareGrid.module.scss"

import IconInstagram from "~/components/Icons/IconInstagram"
import IconTiktok from "./Icons/IconTiktok"
import Img from "./Img"

type Props = {
  items: any[]
}

const SquareGrid = (props: Props) => {
  return (
    <div className={s.grid}>
      {props.items.map((item, i) => {
        return (
          <div className={s.gridItemC} key={i}>
            <div className={s.infoC}>
              <p className={s.text}>{item.name}</p>
              <div className={s.social}>
                <Link to="." className={s.iconC}>
                  <IconInstagram fill="#fff" />
                </Link>
                <Link to="." className={s.iconC}>
                  <IconTiktok fill="#fff" />
                </Link>
              </div>
            </div>
            <img className={s.img} src={item.pic} alt="Influencer" />
          </div>
        )
      })}
    </div>
  )
}

export default SquareGrid
