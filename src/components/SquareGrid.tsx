import React from "react"
import s from "~/assets/scss/components/SquareGrid.module.scss"
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
              <p className={s.text}>Dilara Aydın</p>
              <div className={s.social}>
                <div className={s.iconC}>
                  <Img src="#" />
                </div>
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
