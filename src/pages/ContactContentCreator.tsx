import { FormEvent } from "react"
import s from "~/assets/scss/pages/ContactContentCreator.module.scss"

import dta from "~/assets/img/digital-talent-agency.png"
import lychee from "~/assets/img/logo.png"

import { filter, find } from "lodash"

import axios from "axios"
import cx from "classnames"
import { useFormik } from "formik"
import { Link } from "react-router-dom"

import api from "~/api"
import IconPlus from "~/components/Icons/IconPlus"
import PrivacyPolicyText from "~/components/PrivacyPolicyText"
import contentCreatorSchema from "~/validations/ContentCreatorForm/contentCreatorSchema"
import { ISocialPlatform, initialValues } from "~/validations/ContentCreatorForm/initialValues"

const ContactContentCreator = () => {
  const submitForm = async (values: any) => {
    try {
      // 👇️ const data: CreateUserResponse
      const { data } = await api.post<any>("influencersForm/influencersForm", values, {
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

  function uIdGenerator() {
    return Math.random().toString(16).slice(2)
  }

  const maxPlatforms = 10

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: contentCreatorSchema,
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

  function addField() {
    const id = uIdGenerator()

    const socialPlatform = { id, label: uIdGenerator(), value: uIdGenerator() }
    formik.setFieldValue("socialPlatforms", [...formik.values.socialPlatforms, socialPlatform])
    console.log(formik.values.socialPlatforms)
  }

  function removeField(id: string) {
    const platforms = formik.values.socialPlatforms as Array<any>
    const filtered = platforms.filter((platform) => {
      return platform.id !== id
    })

    formik.setFieldValue("socialPlatforms", filtered)
  }

  const handleFieldChange = (field: any, fieldValue: any) => {
    console.log(field, fieldValue)

    const { socialPlatforms } = formik.values
    const updatedFieldValues = {
      ...socialPlatforms,
      field,
    }
    formik.setFieldValue("fieldValues", updatedFieldValues)
  }

  function handleSocial(platform: ISocialPlatform) {
    if (formik.values.socialPlatforms.find(platform.id)) {
      const platforms = formik.values.socialPlatforms

      const filtered = filter(platforms, { id: platform.id })

      formik.setFieldValue("socialPlatforms", [...filtered], true)
    } else {
      formik.setFieldValue("socialPlatforms", [...formik.values.socialPlatforms, platform], true)
    }
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
          />
        </div>

        <div className={s.multipleInputC}>
          <small className={s.smallTop}>Sosyal Medya Linkleri</small>

          {formik.values.socialPlatforms.map((platform: any, i: number) => {
            return (
              <div
                className={cx(s.inputC, s.socialPlatforms, {
                  [s.required]: formik.errors.socialPlatforms && formik.touched.socialPlatforms,
                })}
                key={i}
              >
                <label
                  className={cx(s.label, {
                    [s.hidden]: formik.values.socialPlatforms,
                  })}
                  htmlFor={platform.id}
                >
                  https://www.instagram.com/lycheedigital/
                </label>
                <input
                  className={s.input}
                  id={platform.id}
                  name={`social_${platform.id}`}
                  type="text"
                  onFocus={handleFocus}
                  onBlur={handleFocus}
                  onChange={() => handleFieldChange}
                  value={formik.values.socialPlatforms[i].value}
                />
                {i > 0 && (
                  <button
                    className={cx(s.deleteBtn)}
                    type="button"
                    onClick={() => {
                      i > 0 && removeField(platform.id)
                    }}
                  >
                    <div className={s.iconC}>
                      <IconPlus fill="#c8c8c8" />
                    </div>
                  </button>
                )}
              </div>
            )
          })}

          <button
            type="button"
            className={cx(s.addButton, { [s.disabled]: formik.values.socialPlatforms.length == maxPlatforms })}
            onClick={() => formik.values.socialPlatforms.length <= maxPlatforms && addField()}
          >
            <div className={s.plusC}>
              <div className={s.iconW}>
                <IconPlus fill="#c8c8c8" />
              </div>
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
          <textarea className={s.textarea} id="message" onChange={formik.handleChange} value={formik.values.message} />
        </div>

        <div className={s.confirmation}>
          <div className={s.checkbox} onClick={handleConfirmation}>
            <div className={cx(s.inner, { [s.enabled]: formik.values.privacyConfirmation })}></div>
          </div>
          <PrivacyPolicyText setConfirmation={handleConfirmation} />
        </div>

        <button type="submit" form="contentCreatorForm" className={s.submitButton}>
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
        <Link className={s.link} to="/contact/brand">
          Hemen başlayın.
        </Link>{" "}
      </small>
    </main>
  )
}

export default ContactContentCreator
