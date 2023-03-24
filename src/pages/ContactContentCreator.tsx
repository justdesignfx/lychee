import { FormEvent } from "react"
import s from "~/assets/scss/pages/ContactContentCreator.module.scss"

import dta from "~/assets/img/digital-talent-agency.png"
import iconPlus from "~/assets/img/icon-plus.svg"
import lychee from "~/assets/img/logo.png"

import axios from "axios"
import cx from "classnames"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"

import api from "~/api"
import PrivacyPolicyText from "~/components/PrivacyPolicyText"

const ContentCreatorFormSchema = Yup.object({
  name: Yup.string().required("REQUIRED"),
  email: Yup.string().email("INVALID_EMAIL").required("REQUIRED"),
  message: Yup.string().required("REQUIRED"),
  socialPlatforms: Yup.array().of(Yup.string()).required("REQUIRED"),
  privacyConfirmation: Yup.boolean().required("REQUIRED"),
})

const ContactContentCreator = () => {
  const submitForm = async (values: any) => {
    try {
      // 👇️ const data: CreateUserResponse
      const { data } = await api.post<any>("brandsForm", values, {
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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      socialPlatforms: [""],
      privacyConfirmation: false,
    },
    onSubmit: (values) => {
      console.log(values)
      submitForm(values)
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

  function handleConfirmation() {
    formik.setFieldValue("privacyConfirmation", !formik.values.privacyConfirmation, true)
  }

  return (
    <main className={s.contactContentCreator}>
      <h2 className={s.title}>İÇERİK ÜRETİCİ BAŞVURU FORMU</h2>

      <form className={s.formC} onSubmit={formik.handleSubmit} id="contentCreatorForm">
        <div className={cx(s.inputC, { [s.required]: formik.errors.name === "REQUIRED" && formik.touched.name })}>
          <label
            className={cx(s.label, {
              [s.hidden]: formik.values.name,
            })}
            htmlFor="name"
          >
            Ad Soyad
          </label>
          <input
            className={s.input}
            id="name"
            type="text"
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
        </div>

        <div
          className={cx(s.inputC, s.email, {
            [s.required]: formik.errors.email === "REQUIRED" && formik.touched.email,
          })}
        >
          <label
            className={cx(s.label, {
              [s.hidden]: formik.values.email,
            })}
            htmlFor="email"
          >
            Eposta Adresi
          </label>
          <input
            className={s.input}
            id="email"
            type="text"
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </div>

        <div className={s.multipleInputC}>
          <small className={s.smallTop}>Sosyal Medya Linkleri</small>

          <div
            className={cx(s.inputC, s.socialPlatforms, {
              [s.required]: formik.errors.email === "REQUIRED" && formik.touched.email,
            })}
          >
            <label
              className={cx(s.label, {
                [s.hidden]: formik.values.socialPlatforms,
              })}
              htmlFor="socialPlatforms"
            >
              https://www.instagram.com/lycheedigital/
            </label>
            <input
              className={s.input}
              id="socialPlatforms"
              type="text"
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={formik.handleChange}
              value={formik.values.socialPlatforms}
              required
            />
          </div>

          <button type="button" className={s.addButton}>
            <div className={s.plusC}>
              <img src={iconPlus} alt="Icon Plus" />
            </div>
            Yeni ekleyin
          </button>
        </div>

        <div
          className={cx(s.textareaC, {
            [s.required]: formik.errors.message === "REQUIRED" && formik.touched.message,
          })}
        >
          <small className={s.smallTop}>Eklemek İstediğiniz Bilgi Var mı?</small>
          <textarea
            className={s.textarea}
            id="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            required
          />
        </div>

        <div className={s.confirmation}>
          <div className={s.checkbox} onClick={handleConfirmation}>
            <div className={cx(s.inner, { [s.enabled]: formik.values.privacyConfirmation })}></div>
          </div>
          <PrivacyPolicyText setConfirmation={handleConfirmation} />
        </div>

        <button type="submit" form="contentCreatorForm" className={s.button}>
          Gönder
        </button>
      </form>

      <div className={cx(s.imgC, s.left)}>
        <img src={dta} alt="Brand Visual" className={s.img} />
      </div>

      <div className={cx(s.imgC, s.right)}>
        <img src={lychee} alt="Brand Visual" className={s.img} />
      </div>

      <small className={s.linkC}>
        Markanız mı var?{" "}
        <Link className={s.link} to="/contact/content-creator">
          Hemen başlayın.
        </Link>{" "}
      </small>
    </main>
  )
}

export default ContactContentCreator
