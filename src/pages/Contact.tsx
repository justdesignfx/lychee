import s from "~/assets/scss/pages/Contact.module.scss"
import { useEffect } from "react"

import cx from "classnames"
import { Outlet, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

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
