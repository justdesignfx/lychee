import s from "~/assets/scss/components/FooterNavigation.module.scss"

import cx from "classnames"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const FooterNavigation = () => {
  const { t } = useTranslation()

  return (
    <div className={s.footerNavigation}>
      <nav className={s.navigation}>
        <div className={cx(s.col, s.address)}>
          <small className={s.label}>{t("footer.address")}:</small>
          <h5 className={s.text}>Suadiye Mah. Ersoy Sahil Sitesi Mehtap Apt. No:1 Kadıköy / İstanbul</h5>
        </div>
        <div className={s.linkC}>
          <div className={cx(s.col, s.links)}>
            <Link className={s.link} to={`${t("footer.links.creators.path")}`}>
              {t("footer.links.creators.ui")}
            </Link>
            <Link className={s.link} to={`${t("footer.links.brands.path")}`}>
              {t("footer.links.brands.ui")}
            </Link>
          </div>
          <div className={cx(s.col, s.links)}>
            <Link className={s.link} to={`${t("footer.links.partners.path")}`}>
              {t("footer.links.partners.ui")}
            </Link>
            <Link className={s.link} to={`${t("footer.links.services.path")}`}>
              {t("footer.links.services.ui")}
            </Link>
          </div>
          <div className={cx(s.col, s.links)}>
            <Link className={s.link} to={`${t("footer.links.about.path")}`}>
              {t("footer.links.about.ui")}
            </Link>
            <Link className={s.link} to={`${t("footer.links.contact.path")}`}>
              {t("footer.links.contact.ui")}
            </Link>
          </div>
        </div>
      </nav>

      <div className={s.copyright}>
        <small className={cx(s.item, s.rights)}>{t("footer.copyright.allRights")}</small>
        <Link
          to={`${t("footer.copyright.privacyAndCookie.path")}`}
          target="_blank"
          rel="noreferrer noopener"
          className={cx(s.item, s.privacy)}
        >
          {t("footer.copyright.privacyAndCookie.text")}
        </Link>
        <small className={cx(s.item, s.signature)}>
          Made by{" "}
          <a className={s.jdfx} target="_blank" rel="noreferrer noopener" href="https://justdesignfx.com">
            JUST DESIGN FX
          </a>
          <sup>®</sup>{" "}
        </small>
      </div>
    </div>
  )
}

export default FooterNavigation
