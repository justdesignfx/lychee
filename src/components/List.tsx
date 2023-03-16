import React from "react"
import s from "~/assets/scss/components/List.module.scss"

type Props = {
  items: { title: string; text: string }[]
}

const List = (props: Props) => {
  return (
    <div className={s.listC}>
      <div className={s.stickyC} data-sticky-title-c>
        <h2 className={s.stickyText} data-sticky-title>
          Çalışma <span className={s.italic}>şeklimiz.</span>
        </h2>
      </div>

      <ul className={s.list}>
        {props.items.map((item, i) => {
          return (
            <li className={s.listItem} key={i}>
              <h3 className={s.itemTitleC}>
                <span className={s.index}>0{i + 1}</span>
                <span className={s.title}>{item.title}</span>
              </h3>
              <p className={s.text}>{item.text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List
