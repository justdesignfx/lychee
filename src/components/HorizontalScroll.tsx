import s from "../assets/scss/HorizontalScroll.module.scss"
import { ReactElement } from "react"

type Props = {
  children: ReactElement
}

export default function HorizontalScroll({ children }: Props) {
  return (
    <>
      <div className={s.horizontalScroll} data-h-scroll>
        {children}
      </div>
    </>
  )
}
