import React from "react"
import s from "~/assets/scss/components/Footer.module.scss"
import FooterNavigation from "~/components/FooterNavigation"

const FooterBasic = () => {
  return (
    <footer className={s.footer}>
      <FooterNavigation />
    </footer>
  )
}

export default FooterBasic
