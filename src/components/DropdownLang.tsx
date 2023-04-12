import s from "~/assets/scss/components/DropdownLang.module.scss"

import cx from "classnames"
import gsap from "gsap"
import { useTranslation } from "react-i18next"

const lngs: any = {
  en: { nativeName: "EN" },
  tr: { nativeName: "TR" },
}

const DropdownLang = () => {
  const { i18n } = useTranslation()

  const handleLang = (selected: string) => {
    gsap.to("body", {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        i18n.changeLanguage(selected)
        gsap.to("body", {
          opacity: 1,
          duration: 0.8,
          delay: 0.8,
        })
      },
    })
  }

  const handleSelect = (lng: string) => {
    console.log("lol")

    handleLang(lng)
  }

  return (
    <div
      className={cx(s.selectWrapper)}
      onClick={() => handleSelect(i18n.language === lngs.en.nativeName ? lngs.tr.nativeName : lngs.en.nativeName)}
    >
      <p className={cx(s.lngText, { [s.enabled]: i18n.language === lngs.tr.nativeName })}>en</p>
      <p className={cx(s.lngText, { [s.enabled]: i18n.language === lngs.en.nativeName })}>tr</p>
    </div>
  )
}

export default DropdownLang
