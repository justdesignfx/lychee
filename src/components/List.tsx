import { ReactElement, useEffect, useState } from "react"
import s from "~/assets/scss/components/List.module.scss"

import cx from "classnames"

import minus from "~/assets/icon/minus.svg"
import plus from "~/assets/icon/plus.svg"
import Img from "./Img"
import IconMinus from "./Icons/IconMinus"
import IconPlus from "./Icons/IconPlus"

type Props = {
  title: ReactElement
  items: { title: string; text: string }[]
}

const List = (props: Props) => {
  const [activeItems, setActiveItems] = useState<number[]>([0])

  const handleAccordion = (i: number) => {
    if (!activeItems.includes(i)) {
      setActiveItems((prev) => [...prev, i])
    } else {
      const filtered = activeItems.filter((item) => {
        return item !== i
      })

      setActiveItems(filtered)
    }
  }

  return (
    <div className={s.listC}>
      <div className={s.stickyC} data-sticky-title-c>
        <div className={s.stickyTextC} data-sticky-title>
          {props.title}
        </div>
      </div>

      <ul className={s.list}>
        {props.items.map((item, i) => {
          return (
            <li
              className={cx(s.listItem, { [s.active]: activeItems.includes(i) })}
              key={i}
              onClick={() => handleAccordion(i)}
            >
              <h3 className={s.itemTitleC}>
                <div className={s.toggleMobile}>
                  <div className={cx(s.icon, s.minus)}>
                    <IconMinus fill="#ce1953" />
                  </div>
                  <div className={cx(s.icon, s.plus)}>
                    <IconPlus fill="#ce1953" />
                  </div>
                </div>
                <span className={s.index}>0{i + 1}</span>
                <span className={s.title}>{item.title}</span>
              </h3>
              <div className={s.oHidden}>
                <p className={s.text}>{item.text}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List
