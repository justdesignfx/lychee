import { FormEvent, useEffect, useRef, useState } from "react"
import s from "~/assets/scss/components/BrandForm.module.scss"

import axios from "axios"
import cx from "classnames"
import { useFormik } from "formik"
import { AnimatePresence, motion } from "framer-motion"
import gsap from "gsap"
import { useTranslation } from "react-i18next"

import Dropdown from "./Dropdown"
import api from "~/api"
import { qAll } from "~/utils"
import brandFormModel from "~/validations/BrandForm/brandFormModel"
import brandFormSchema from "~/validations/BrandForm/brandFormSchema"
import { initialValues } from "~/validations/BrandForm/initialValues"
import { lngs } from "~/variables"
import FormEndScreen from "./FormEndScreen"

const { formId, formField } = brandFormModel

const BrandForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const brandFormRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const { t, i18n } = useTranslation()

  const [electronicMessage, setElectronicMessage] = useState(false)
  const [privacyNotice, setPrivacyNotice] = useState(false)
  const [explicitConsent, setExplicitConsent] = useState(false)
  const [started, setStarted] = useState(false)
  const [end, setEnd] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Form start animation
  useEffect(() => {
    const hiddenEls = qAll("[data-hide-on-form-start]")

    if (started) {
      gsap.to(hiddenEls, {
        autoAlpha: 0,
      })
    }

    return () => {
      gsap.to(hiddenEls, {
        autoAlpha: 1,
      })
    }
  }, [started])

  const budgetRanges = [
    { id: "1", title: t("contact.brandForm.form.inputs.budget.options.o1") },
    { id: "2", title: t("contact.brandForm.form.inputs.budget.options.o2") },
    { id: "3", title: t("contact.brandForm.form.inputs.budget.options.o3") },
    { id: "4", title: t("contact.brandForm.form.inputs.budget.options.o4") },
  ]

  const social = [
    { ui: "Twitter", type: "TWITTER" },
    { ui: "Youtube", type: "YOUTUBE" },
    { ui: "Tiktok", type: "TIKTOK" },
    { ui: "Instagram", type: "INSTAGRAM" },
    { ui: "Facebook", type: "FACEBOOK" },
    { ui: t("contact.brandForm.form.inputs.socialPlatform.other"), type: "OTHER" },
  ]

  const formik = useFormik({
    initialValues,
    validationSchema: brandFormSchema[currentStep],
    onSubmit: (values) => {
      const brandForm = {
        ...values,
        language: i18n.language,
        privacyNotice: `${privacyNotice}`,
        electronicMessage: `${electronicMessage}`,
        explicitConsent: `${explicitConsent}`,
      }
      handleSubmit(brandForm)
    },
  })

  function handleFocus(e: FormEvent | any) {
    e.preventDefault()

    if (e.type === "focus" && e) {
      e.target.labels[0].style.opacity = "0"
    } else if (e.type === "blur" && e) {
      e.target.labels[0].style.opacity = "1"
    }
  }

  function handleSocial(type: string) {
    if (formik.values.socialPlatforms.includes(type)) {
      const platforms = formik.values.socialPlatforms as Array<string>
      const filtered = platforms.filter((platform) => {
        return platform !== type
      })

      formik.setFieldValue("socialPlatforms", [...filtered], true)
    } else {
      formik.setFieldValue("socialPlatforms", [...formik.values.socialPlatforms, type], true)
    }
  }

  function handleNavigation(direction: "NEXT" | "PREV") {
    gsap.to(formRef.current, {
      autoAlpha: 0,
      duration: 0.2,
      onComplete: () => {
        switch (direction) {
          case "NEXT":
            setCurrentStep((prev) => prev + 1)
            break
          case "PREV":
            if (currentStep > 0) {
              setCurrentStep((prev) => prev - 1)
            }
            break
          default:
            break
        }
        gsap.to(formRef.current, {
          autoAlpha: 1,
          duration: 0.6,
          delay: 0.4,
        })
      },
    })
  }

  function handleRange(title: string) {
    formik.setFieldValue("budget", title, true)
  }

  function handleValidation(e: FormEvent<HTMLFormElement>) {
    formik.handleSubmit(e)
  }

  function handleFormStart() {
    gsap.to(brandFormRef.current, {
      autoAlpha: 0,
      duration: 0.4,
      onComplete: () => {
        setStarted((prev) => !prev)
        gsap.to(brandFormRef.current, {
          autoAlpha: 1,
          duration: 0.4,
          delay: 0.8,
        })
      },
    })
  }

  function handleSubmit(values: any) {
    if (currentStep === steps.length - 1) {
      if (!privacyNotice) return

      submitForm(values).then((res) => {
        if (res.success) {
          setEnd(true)
        } else {
          setError(res.message)
        }
      })
    } else {
      handleNavigation("NEXT")
    }
  }

  const submitForm = async (values: any) => {
    console.log("api", values)

    try {
      // 👇️ const data: CreateUserResponse
      const { data } = await api.post<any>("brandsForm/brandsForm", values, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message)
        // 👇️ error: AxiosError<any, any>
        return error.message
      } else {
        console.log("unexpected error: ", error)
        return "An unexpected error occurred"
      }
    }
  }

  useEffect(() => {
    console.log(formik.errors)
  }, [formik.errors])

  const steps = [
    {
      question: t("contact.brandForm.form.questions.q1"),
      ui: (
        <>
          <div className={cx(s.inputC, { [s.required]: formik.errors.name && formik.touched.name })}>
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.name,
              })}
              htmlFor={formField.name.name}
            >
              {t("contact.brandForm.form.inputs.name")}*
            </label>
            <input
              className={s.input}
              name={formField.name.name}
              id={formField.name.name}
              type="text"
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>

          <div className={cx(s.inputC, { [s.required]: formik.errors.email && formik.touched.email })}>
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.email,
              })}
              htmlFor={formField.email.name}
            >
              {t("contact.brandForm.form.inputs.email")}*
            </label>
            <input
              className={s.input}
              name={formField.email.name}
              id={formField.email.name}
              type="text"
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
        </>
      ),
    },
    {
      question: t("contact.brandForm.form.questions.q2"),
      ui: (
        <>
          <div className={cx(s.inputC, { [s.required]: formik.errors.company && formik.touched.company })}>
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.company,
              })}
              htmlFor={formField.company.name}
            >
              {t("contact.brandForm.form.inputs.company")}*
            </label>
            <input
              className={s.input}
              name={formField.company.name}
              id={formField.company.name}
              type="text"
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={formik.handleChange}
              value={formik.values.company}
            />
          </div>

          <div
            className={cx(s.inputC, s.website, {
              [s.required]: formik.errors.websiteUrl && formik.touched.websiteUrl,
            })}
          >
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.websiteUrl,
              })}
              htmlFor={formField.websiteUrl.name}
            >
              {t("contact.brandForm.form.inputs.website")}*
            </label>
            <input
              className={s.input}
              id={formField.websiteUrl.name}
              name={formField.websiteUrl.name}
              type="text"
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={formik.handleChange}
              value={formik.values.websiteUrl}
            />
            {/* <div className={s.withPre}>
              <p className={s.pre}>https://</p>
              <input
                className={s.input}
                id={formField.websiteUrl.name}
                name={formField.websiteUrl.name}
                type="text"
                onFocus={handleFocus}
                onBlur={handleFocus}
                onChange={formik.handleChange}
                value={formik.values.websiteUrl}
              />
            </div> */}
          </div>

          <div className={cx(s.inputC, { [s.required]: formik.errors.role && formik.touched.role })}>
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.role,
              })}
              htmlFor={formField.role.name}
            >
              {t("contact.brandForm.form.inputs.position")}*
            </label>
            <input
              className={s.input}
              id={formField.role.name}
              name={formField.role.name}
              type="text"
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={formik.handleChange}
              value={formik.values.role}
            />
          </div>
        </>
      ),
    },
    {
      question: t("contact.brandForm.form.questions.q3"),
      ui: (
        <>
          <div
            className={cx(s.textareaC, {
              [s.required]: formik.errors.message,
            })}
          >
            <label className={s.label} htmlFor={formField.message.name}>
              {t("contact.brandForm.form.inputs.message")}*
            </label>
            <textarea
              className={s.textarea}
              id={formField.message.name}
              name={formField.message.name}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
        </>
      ),
    },
    {
      question: t("contact.brandForm.form.questions.q4"),
      ui: (
        <>
          <div
            className={cx(s.socialC, { [s.required]: formik.errors.socialPlatforms && formik.touched.socialPlatforms })}
          >
            <label className={s.label} htmlFor="message">
              {t("contact.brandForm.form.inputs.socialPlatform.moreThanOne")}
            </label>
            <div className={s.radioC}>
              {social.map((platform, i) => {
                return (
                  <div
                    className={cx(s.radio, {
                      [s.active]:
                        formik.values.socialPlatforms &&
                        formik.values.socialPlatforms.length > 0 &&
                        formik.values.socialPlatforms.includes(platform.type),
                    })}
                    onClick={() => handleSocial(platform.type)}
                    key={i}
                  >
                    <div className={s.text}>{platform.ui}</div>
                    <div className={s.check}></div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      ),
    },
    {
      question: t("contact.brandForm.form.questions.q5"),
      ui: (
        <>
          <div className={cx(s.inputC, s.dropdownC, { [s.required]: formik.errors.budget && formik.touched.budget })}>
            <Dropdown
              defaultValue={budgetRanges[0]}
              options={budgetRanges}
              onChange={handleRange}
              selectedOption={formik.values.budget}
              label={`${t("contact.brandForm.form.inputs.budget.label")}*`}
            />
          </div>
          <div className={s.confirmations}>
            <div className={s.confirmation} onClick={() => setPrivacyNotice((prev) => !prev)}>
              <div className={s.checkbox}>
                <div className={cx(s.inner, { [s.enabled]: privacyNotice })}></div>
              </div>
              <div className={s.legalText}>
                {i18n.language === lngs.en.nativeName ? (
                  <small className={s.small}>
                    I’ve read and understood the{" "}
                    <a
                      href="https://lycheedigital.co/cdn/legal/content-creator/icerik-uretici-formu-kisisel-verilerin-islenmesi.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={s.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Privacy Notice
                    </a>
                    .
                  </small>
                ) : (
                  <small className={s.small}>
                    <a
                      href="https://lycheedigital.co/cdn/legal/content-creator/icerik-uretici-formu-kisisel-verilerin-islenmesi.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={s.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Aydınlatma Metni
                    </a>
                    ’ni okudum, anladım.{" "}
                  </small>
                )}
              </div>
            </div>

            <div className={s.confirmation} onClick={() => setElectronicMessage((prev) => !prev)}>
              <div className={s.checkbox}>
                <div className={cx(s.inner, { [s.enabled]: electronicMessage })}></div>
              </div>
              <div className={s.legalText}>
                {i18n.language === lngs.en.nativeName ? (
                  <small className={s.small}>
                    I want to receive commercial electronic messages within the scope of the{" "}
                    <a
                      href="https://lycheedigital.co/cdn/legal/ticari-elektronik-ileti-onay-formu.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={s.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Commercial Electronic Message Consent Form
                    </a>{" "}
                    to be informed about services and campaigns.{" "}
                  </small>
                ) : (
                  <small className={s.small}>
                    Hizmetlerden ve kampanyalardan haberdar olmak için{" "}
                    <a
                      href="https://lycheedigital.co/cdn/legal/ticari-elektronik-ileti-onay-formu.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={s.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Ticari Elektronik İleti Onay Formu
                    </a>{" "}
                    kapsamında elektronik ileti almak istiyorum.{" "}
                  </small>
                )}
              </div>
            </div>

            <div className={s.confirmation} onClick={() => setExplicitConsent((prev) => !prev)}>
              <div className={s.checkbox}>
                <div className={cx(s.inner, { [s.enabled]: explicitConsent })}></div>
              </div>
              <div className={s.legalText}>
                {i18n.language === lngs.en.nativeName ? (
                  <small className={s.small}>
                    I accept that my personal data may be transferred to third parties and abroad by Lychee Digital
                    within the scope of the{" "}
                    <a
                      href="https://lycheedigital.co/cdn/legal/content-creator/icerik-uretici-formu-acik-riza-metni.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={s.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Explicit Consent Statement
                    </a>
                    .
                  </small>
                ) : (
                  <small className={s.small}>
                    Kişisel Verilerimin Lychee Digital tarafından{" "}
                    <a
                      href="https://lycheedigital.co/cdn/legal/content-creator/icerik-uretici-formu-acik-riza-metni.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={s.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Açık Rıza Metni
                    </a>{" "}
                    kapsamında üçüncü kişilere ve yurt dışına aktarılabileceğini kabul ediyorum.
                  </small>
                )}
              </div>
            </div>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className={s.brandForm} ref={brandFormRef}>
      <AnimatePresence>
        {!started && (
          <motion.div
            className={s.formIntro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <h1 className={s.title}>{t("contact.brandForm.intro.title")}</h1>
            <p className={s.text}>{t("contact.brandForm.intro.text")}</p>
            <div className={s.buttons}>
              <button className={cx(s.button, s.next)} onClick={handleFormStart}>
                {t("contact.brandForm.intro.button")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {started && !end && (
        <>
          <div className={s.top}>
            <h2 className={s.title}>{t("contact.brandForm.form.title")}</h2>
            <div className={s.formC}>
              <form id={formId} className={s.form} ref={formRef} onSubmit={(e) => handleValidation(e)}>
                {steps[currentStep].question && (
                  <p className={s.question}>
                    {currentStep + 1}. {steps[currentStep].question}
                  </p>
                )}
                <>{steps[currentStep].ui}</>
              </form>
            </div>

            <div className={s.buttons}>
              {currentStep === steps.length - 1 ? (
                <button
                  className={cx(s.button, s.next, {
                    [s.disabled]: !privacyNotice,
                  })}
                  type="submit"
                  form="brandForm"
                >
                  {t("contact.brandForm.form.buttons.send")}
                </button>
              ) : (
                <button
                  className={cx(s.button, s.next, {
                    [s.sendBtn]: currentStep === steps.length - 1 && privacyNotice,
                  })}
                  type="submit"
                  form="brandForm"
                >
                  {t("contact.brandForm.form.buttons.nextStep")}
                </button>
              )}
            </div>
            <AnimatePresence>
              {error && (
                <motion.small
                  key={error}
                  className={s.responseMessage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  {error}
                </motion.small>
              )}
            </AnimatePresence>
          </div>

          <div className={s.bottom}>
            <div className={s.prevButton}>
              <button
                type="button"
                className={cx(s.button, s.prev, { [s.show]: currentStep > 0 })}
                onClick={() => handleNavigation("PREV")}
              >
                {t("contact.brandForm.form.buttons.prevStep")}
              </button>
            </div>

            <div className={s.progressBar}>
              <div
                className={s.progress}
                style={{ transform: `scaleX(${(1 / steps.length) * (currentStep + 1)})` }}
              ></div>
            </div>
          </div>
        </>
      )}

      <FormEndScreen end={end} />

      {/* <AnimatePresence>
        {end && (
          <motion.div
            className={s.formEnd}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <h1 className={s.title}>
              Formunuz başarıyla ekibimize <span className={s.italic}> ulaştı.</span>
            </h1>
            <p className={s.text}>
              Artık hayalinizdeki kampanyaya daha da yakınsınız. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <div className={s.buttons}>
              <Link to="/" className={cx(s.button, s.next)}>
                Anasayfaya Dön
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  )
}

export default BrandForm
