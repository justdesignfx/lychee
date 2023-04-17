import s from "~/assets/scss/components/FormEndScreen.module.scss"

import { AnimatePresence, motion } from "framer-motion"
import cx from "classnames"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { lngs } from "~/variables"

type Props = {
  end: boolean
}

const FormEndScreen = (props: Props) => {
  const { t, i18n } = useTranslation()

  return (
    <AnimatePresence>
      {props.end && (
        <motion.div
          className={s.formEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {i18n.language === lngs.en.nativeName ? (
            <>
              <h1 className={s.title}>
                Your form has been <span className={s.italic}> successfully</span> received by our team.
              </h1>
              <p className={s.text}>
                Congratulations! You are now one step closer to your dream follower community. We will contact you as
                soon as possible.{" "}
              </p>
              <Link to="/" className={s.button}>
                Back to Homepage
              </Link>
            </>
          ) : (
            <>
              <h1 className={s.title}>
                Formunuz başarıyla ekibimize <span className={s.italic}> ulaştı.</span>
              </h1>
              <p className={s.text}>
                Artık hayalinizdeki kampanyaya daha da yakınsınız. En kısa sürede sizinle iletişime geçeceğiz.
              </p>
              <Link to="/" className={s.button}>
                Anasayfaya Dön
              </Link>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FormEndScreen
