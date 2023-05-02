import s from "~/assets/scss/pages/Contact.module.scss"

import cx from "classnames"
import { Outlet } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

import nescafe from "~/assets/img/nescafe.jpg"
import pink from "~/assets/img/sample.png"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{`${t("titleAndDesc.preTitle")}${t("titleAndDesc.contact.title")}`}</title>
        <meta name="description" content={`${t("titleAndDesc.contact.desc")}`}></meta>
        <link rel="canonical" href={`${t("titleAndDesc.contact.canonical")}`} />
      </Helmet>
      <div className={s.contact}>
        <Outlet></Outlet>

        <div className={cx(s.imgC, s.left)} data-hide-on-form-start>
          <img src={pink} alt="Background Visual" className={s.img} />
        </div>

        <div className={cx(s.imgC, s.right)} data-hide-on-form-start>
          <img src={nescafe} alt="Background Visual" className={s.img} />
        </div>
      </div>
    </>
  )
}

export default Contact
