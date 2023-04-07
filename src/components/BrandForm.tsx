import { FormEvent, useEffect, useRef, useState } from "react"
import s from "~/assets/scss/components/BrandForm.module.scss"

import axios from "axios"
import cx from "classnames"
import { useFormik } from "formik"
import gsap from "gsap"

import Dropdown from "./Dropdown"
import PrivacyPolicyText from "./PrivacyPolicyText"

import brandFormModel from "~/validations/BrandForm/brandFormModel"
import { IBrandForm, initialValues } from "~/validations/BrandForm/initialValues"

const { formId, formField } = brandFormModel

import api from "~/api"
import brandFormSchema from "~/validations/BrandForm/brandFormSchema"

// interface Values {
//   name: string
//   email: string
//   company: string
//   websiteUrl: string
//   role: string
//   message: string
//   socialPlatforms: string[]
//   range: string
// }

// const BrandFormSchema = yup.object().shape({
//   name: yup.string().required("REQUIRED"),
//   email: yup.string().email("INVALID_EMAIL").required("REQUIRED"),
//   company: yup.string().required("REQUIRED"),
//   websiteUrl: yup.string().required("REQUIRED"),
//   role: yup.string().required("REQUIRED"),
//   message: yup.string().required("REQUIRED"),
//   socialPlatforms: yup.array().of(yup.string()).required("REQUIRED"),
//   privacyConfirmation: yup.boolean().required("REQUIRED"),
// })

const BrandForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const brandFormRef = useRef<HTMLDivElement>(null)

  const initial: IBrandForm = initialValues

  const [started, setStarted] = useState(false)

  function handleFocus(e: FormEvent | any) {
    e.preventDefault()

    if (e.type === "focus" && e) {
      e.target.labels[0].style.opacity = "0"
    } else if (e.type === "blur" && e) {
      e.target.labels[0].style.opacity = "1"
    }
  }

  function handleConfirmation() {
    formik.setFieldValue("privacyConfirmation", !formik.values.privacyConfirmation, true)
  }

  function handleSocial(type: string) {
    if (formik.values.socialPlatforms.includes(type)) {
      const platforms = formik.values.socialPlatforms as Array<string>
      const filtered = platforms.filter((platform) => {
        return platform !== type
      })
      console.log(filtered)

      formik.setFieldValue("socialPlatforms", [...filtered], true)
    } else {
      formik.setFieldValue("socialPlatforms", [...formik.values.socialPlatforms, type], true)
    }

    console.log(type, formik.values.socialPlatforms)
  }

  function handleNavigation(direction: "NEXT" | "PREV") {
    // if (currentStep === 0) {
    //   if (formik.values.name === "" || formik.values.email === "") {
    //     alert("first")
    //     return
    //   }
    // }

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

  function handleRange() {
    console.log("lol")
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

  const submitForm = async (values: any) => {
    try {
      // 👇️ const data: CreateUserResponse
      const { data } = await api.post<any>("brandsForm/brandsForm", values, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      // feedbackStore.toggleFeedback()
      // feedbackStore.setText(data.message)
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

  function handleSubmit(values: any) {
    if (currentStep === steps.length - 1) {
      submitForm(values)
    } else {
      handleNavigation("NEXT")
    }
  }

  function handleValidation(field: string) {
    // @ts-ignore
    return formik.errors[field] === "REQUIRED" && formik.touched[field]
  }

  const budgetRanges = [
    { id: "1", title: "0-10" },
    { id: "2", title: "10-20" },
    { id: "3", title: "20-30" },
  ]

  const social = [
    { ui: "Twitter", type: "TWITTER" },
    { ui: "Youtube", type: "YOUTUBE" },
    { ui: "Tiktok", type: "TIKTOK" },
    { ui: "Instagram", type: "INSTAGRAM" },
    { ui: "Facebook", type: "FACEBOOK" },
    { ui: "Diğer", type: "OTHER" },
  ]

  const formik = useFormik({
    initialValues,
    validationSchema: brandFormSchema[currentStep],
    onSubmit: (values) => {
      console.log(values)
      handleSubmit(values)
      // submitForm(values).then((res: { mesage: string; success: boolean }) => {
      //   if (res.success) {
      //   }
      // })
    },
  })

  const steps = [
    {
      question: "Öncelikle sizi tanımak istiyoruz. Aşağıdaki bilgileri doldurabilir misiniz?",
      ui: (
        <>
          <div className={cx(s.inputC, { [s.required]: formik.errors.name && formik.touched.name })}>
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.name,
              })}
              htmlFor={formField.name.name}
            >
              Ad Soyad
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
              Eposta Adresi
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
      question: "Şirketiniz / markanız hakkında bilgi verebilir misiniz?",
      ui: (
        <>
          <div className={cx(s.inputC, { [s.required]: formik.errors.company && formik.touched.company })}>
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.company,
              })}
              htmlFor={formField.company.name}
            >
              {formField.company.label}
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
            className={cx(s.inputC, {
              [s.required]: formik.errors.websiteUrl && formik.touched.websiteUrl,
            })}
          >
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.websiteUrl,
              })}
              htmlFor={formField.websiteUrl.name}
            >
              {formField.websiteUrl.label}
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
          </div>
          <div className={cx(s.inputC, { [s.required]: formik.errors.role && formik.touched.role })}>
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.role,
              })}
              htmlFor={formField.role.name}
            >
              {formField.role.label}
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
      question: "Şirketiniz / markanız için oluşturmak istediğiniz kampanyayı kısaca anlatınız.",
      ui: (
        <>
          <div
            className={cx(s.textareaC, {
              [s.required]: formik.errors.message,
            })}
          >
            <label className={s.label} htmlFor={formField.message.name}>
              Message
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
      question: "Bitirmek üzereyiz. Kampanyanızın yayınlanmasını istediğiniz sosyal medya platformlarını seçiniz.",
      ui: (
        <>
          <div className={s.socialC}>
            <label className={s.label} htmlFor="message">
              Birden fazla seçebilirsiniz
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
      question: "Son olarak kampanyanız için planladığınız bütçenizi belirtiniz.",
      ui: (
        <>
          <div className={cx(s.inputC, s.dropdownC)}>
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.range,
              })}
              htmlFor="budgetRange"
            >
              Aralık Seçiniz
            </label>

            <Dropdown
              defaultValue={budgetRanges[0]}
              options={budgetRanges}
              onChange={formik.handleChange}
              selectedOption={formik.values.range}
            />
          </div>
          <div className={s.confirmation}>
            <div className={s.checkbox} onClick={handleConfirmation}>
              <div className={cx(s.inner, { [s.enabled]: formik.values.privacyConfirmation })}></div>
            </div>
            <PrivacyPolicyText setConfirmation={handleConfirmation} />
          </div>
        </>
      ),
    },
  ]

  return (
    <div className={s.brandForm} ref={brandFormRef}>
      {!started ? (
        <div className={s.formIntro}>
          <h1 className={s.title}>Dijital reklamcılığın geleceğine hoş geldiniz.</h1>
          <p className={s.text}>Şimdi marka vizyonunuzu, kampanyanızı ve hayallerinizi öğrenme zamanı.</p>
          <div className={s.buttons}>
            <button className={cx(s.button, s.next)} onClick={handleFormStart}>
              Şimdi Başlayın
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className={s.title}>MARKA BAŞVURU FORMU</h2>
          <div className={s.formC}>
            <form id={formId} className={s.form} ref={formRef} onSubmit={formik.handleSubmit}>
              {steps[currentStep].question && (
                <p className={s.question}>
                  {currentStep + 1}. {steps[currentStep].question}
                </p>
              )}
              <>{steps[currentStep].ui}</>
            </form>
          </div>

          <>
            <div className={s.buttons}>
              <button className={cx(s.button, s.next)} type={"submit"} form="brandForm">
                {currentStep === steps.length - 1 ? "Formu Gönder" : "Sonraki Adım"}
              </button>

              <button
                type="button"
                className={cx(s.button, s.prev, { [s.show]: currentStep > 0 })}
                onClick={() => handleNavigation("PREV")}
              >
                Önceki Adım
              </button>
            </div>
            <div className={s.progressBar}>
              <div
                className={s.progress}
                style={{ transform: `scaleX(${(1 / steps.length) * (currentStep + 1)})` }}
              ></div>
            </div>
          </>
        </>
      )}
    </div>
  )
}

export default BrandForm
