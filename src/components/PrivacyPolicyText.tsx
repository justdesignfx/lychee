import s from "~/assets/scss/components/PrivacyPolicyText.module.scss"

type Props = {
  setConfirmation: (status: any) => void
  path?: string
}

const PrivacyPolicyText = ({ setConfirmation, path = "/" }: Props) => {
  const handleConfirmation = () => {
    setConfirmation((prev: boolean) => !prev)
  }

  return (
    // <>
    //   {i18n.language === "EN" ? (
    //     <div className={s.privacyPolicyText}>
    //       <small className={s.small} onClick={handleConfirmation}>
    //         {/* {t("privacyPolicy.text")}{" "} */}
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, nisi.
    //       </small>
    //       <a className={s.link} href={path} rel="noreferrer" target="_blank">
    //         {/* {t("privacyPolicy.link.text")} */}
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, nisi.
    //       </a>
    //     </div>
    //   ) : (
    //     <div className={s.privacyPolicyText}>
    //       <a className={s.link} href={path} rel="noreferrer" target="_blank">
    //         {/* {t("privacyPolicy.link.text")} */}
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, nisi.
    //       </a>
    //       <small className={s.small} onClick={handleConfirmation}>
    //         {" "}
    //         {/* {t("privacyPolicy.text")} */}
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, nisi.
    //       </small>
    //     </div>
    //   )}
    // </>

    <>
      <div className={s.privacyPolicyText}>
        {/* <a className={s.link} href={path} rel="noreferrer" target="_blank">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, nisi.
        </a> */}
        <small className={s.small} onClick={handleConfirmation}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, nisi. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit.
        </small>
      </div>
    </>
  )
}

export default PrivacyPolicyText
