import { Outlet } from "react-router-dom"
import s from "~/assets/scss/pages/Contact.module.scss"

import cx from "classnames"

import floating from "~/assets/img/contact/floating.png"

const Contact = () => {
  return (
    <div className={s.contact}>
      <Outlet></Outlet>
      <div className={cx(s.imgC, s.left)}>
        <img src={floating} alt="Brand Visual" className={s.img} />
      </div>

      <div className={cx(s.imgC, s.right)}>
        <img src={floating} alt="Brand Visual" className={s.img} />
      </div>
    </div>
  )
}

export default Contact
