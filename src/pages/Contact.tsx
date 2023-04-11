import s from "~/assets/scss/pages/Contact.module.scss"

import cx from "classnames"
import { Outlet } from "react-router-dom"

import nescafe from "~/assets/img/nescafe.jpg"
import pink from "~/assets/img/sample.png"

const Contact = () => {
  return (
    <div className={s.contact}>
      <Outlet></Outlet>

      <div className={cx(s.imgC, s.left)} data-hide-on-form-start>
        <img src={pink} alt="Background Visual" className={s.img} />
      </div>

      <div className={cx(s.imgC, s.right)} data-hide-on-form-start>
        <img src={nescafe} alt="Background Visual" className={s.img} />
      </div>
    </div>
  )
}

export default Contact
