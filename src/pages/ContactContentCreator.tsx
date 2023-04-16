import { FormEvent, useEffect, useState } from "react"
import s from "~/assets/scss/pages/ContactContentCreator.module.scss"

import axios from "axios"
import cx from "classnames"
import { useFormik } from "formik"
import { useTranslation } from "react-i18next"

import dta from "~/assets/img/digital-talent-agency.png"
import lychee from "~/assets/img/logo.png"

import api from "~/api"
import IconPlus from "~/components/Icons/IconPlus"
import { uIdGenerator } from "~/utils"
import contentCreatorSchema from "~/validations/ContentCreatorForm/contentCreatorSchema"
import { ISocialPlatform } from "~/validations/ContentCreatorForm/initialValues"
import { platform } from "os"
import { useNavigate } from "react-router"

interface IContentCreatorForm {
  name: string
  email: string
  message: string
  socialPlatforms: string[]
}

interface IContentCreatorFormUi {
  name: string
  email: string
  message: string
  socialPlatforms: ISocialPlatform[]
}

const ContactContentCreator = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/${t("menu.contact.path")}/${t("menu.contact.children.creator.path")}`)
  }, [i18n.language])

  const [confirmation1, setConfirmation1] = useState(false)
  const [confirmation2, setConfirmation2] = useState(false)
  const [confirmation3, setConfirmation3] = useState(false)

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

  const maxPlatforms = 10

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      socialPlatforms: [{ id: uIdGenerator(), value: "" }],
    },
    validationSchema: contentCreatorSchema,
    onSubmit: (values: IContentCreatorFormUi) => {
      prepareAndSubmit(values)
    },
  })

  function prepareAndSubmit(values: IContentCreatorFormUi) {
    let toBackend: IContentCreatorForm
    const filteredSocial = filterSocialPlatforms(values)

    toBackend = { ...values, socialPlatforms: filteredSocial }
    console.log({ ...toBackend, language: i18n.language })

    // submitForm({ ...toBackend, language: i18n.language }).then((res) => {
    //   if (res.success) {
    //     console.log(res)
    //   } else {
    //     console.log(res)
    //   }
    // })
  }

  function filterSocialPlatforms(values: IContentCreatorFormUi): string[] {
    let filtered: any[] = []

    values.socialPlatforms.map((platform) => {
      filtered = [...filtered, platform.value]
    })

    return filtered
  }

  function handleFocus(e: FormEvent | any) {
    e.preventDefault()

    if (e.type === "focus" && e) {
      e.target.labels[0].style.opacity = "0"
    } else if (e.type === "blur" && e) {
      e.target.labels[0].style.opacity = "1"
    }
  }

  function addField() {
    const field: ISocialPlatform = { id: uIdGenerator(), value: "" }
    formik.setFieldValue("socialPlatforms", [...formik.values.socialPlatforms, field])
  }

  function removeField(platform: ISocialPlatform) {
    const items = formik.values.socialPlatforms as ISocialPlatform[]
    const filtered = items.filter((item) => {
      return item.id !== platform.id
    })

    formik.setFieldValue("socialPlatforms", filtered)
  }

  const handleMultipleInput = (value: string, i: number) => {
    formik.setFieldValue(`socialPlatforms[${i}].value`, value)
  }

  useEffect(() => {
    console.log(formik.values)
    console.log(formik.errors)
  }, [formik.values, formik.errors])

  return (
    <main className={s.contactContentCreator}>
      <h2 className={s.title}>{t("contact.contentCreator.title")}</h2>
      <form className={s.formC} onSubmit={formik.handleSubmit} id="contentCreatorForm">
        <div className={cx(s.inputC, { [s.required]: formik.errors.name && formik.touched.name })}>
          <label
            className={cx(s.label, {
              [s.hidden]: formik.values.name,
            })}
            htmlFor="name"
          >
            {t("contact.contentCreator.name")}*
          </label>
          <input
            className={s.input}
            id="name"
            name="name"
            type="text"
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div
          className={cx(s.inputC, s.email, {
            [s.required]: formik.errors.email && formik.touched.email,
          })}
        >
          <label
            className={cx(s.label, {
              [s.hidden]: formik.values.email,
            })}
            htmlFor="email"
          >
            {t("contact.contentCreator.email")}*
          </label>
          <input
            className={s.input}
            id="email"
            name="email"
            type="text"
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className={s.multipleInputC}>
          <small className={s.smallTop}>{t("contact.contentCreator.social")}*</small>

          {formik.values.socialPlatforms.map((platform, i) => {
            return (
              <div
                className={cx(s.inputC, s.socialPlatforms, {
                  [s.required]: formik.errors.socialPlatforms && formik.touched.socialPlatforms,
                })}
                key={uIdGenerator()}
              >
                <label
                  className={cx(s.label, {
                    [s.hidden]: platform.value,
                  })}
                  htmlFor={`social_${i}`}
                >
                  https://www.instagram.com/lycheedigital/
                </label>
                <input
                  className={s.input}
                  id={`social_${i}`}
                  name={`social_${i}`}
                  type="text"
                  // onFocus={handleFocus}
                  // onBlur={handleFocus}
                  onChange={(e) => handleMultipleInput(e.target.value, i)}
                  value={formik.values.socialPlatforms[i].value}
                />
                {i > 0 && (
                  <button
                    className={cx(s.deleteBtn)}
                    type="button"
                    onClick={() => {
                      i > 0 && removeField(platform)
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
            {t("contact.contentCreator.addNew")}
          </button>
        </div>

        <div className={s.textareaC}>
          <small className={s.smallTop}>{t("contact.contentCreator.addInfo")}</small>
          <textarea
            className={s.textarea}
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>

        <div className={s.confirmations}>
          <div className={s.confirmation} onClick={() => setConfirmation1((prev) => !prev)}>
            <div className={s.checkbox}>
              <div className={cx(s.inner, { [s.enabled]: confirmation1 })}></div>
            </div>
            <div className={s.legalText}>
              <small className={s.small}>
                Hizmetlerden ve kampanyalardan haberdar olmak için{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer noopener"
                  className={s.link}
                  onClick={(e) => e.stopPropagation()}
                >
                  Ticari Elektronik İleti Onay Formu
                </a>{" "}
                kapsamında elektronik ileti almak istiyorum.{" "}
              </small>
            </div>
          </div>

          <div className={s.confirmation} onClick={() => setConfirmation2((prev) => !prev)}>
            <div className={s.checkbox}>
              <div className={cx(s.inner, { [s.enabled]: confirmation2 })}></div>
            </div>
            <div className={s.legalText}>
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
            </div>{" "}
          </div>

          <div className={s.confirmation} onClick={() => setConfirmation3((prev) => !prev)}>
            <div className={s.checkbox}>
              <div className={cx(s.inner, { [s.enabled]: confirmation3 })}></div>
            </div>
            <div className={s.legalText}>
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
            </div>
          </div>
        </div>

        <button
          type="submit"
          form="contentCreatorForm"
          className={cx(s.submitButton, { [s.disabled]: !confirmation2 })}
        >
          {t("contact.contentCreator.sendBtn")}
        </button>
      </form>

      <div className={cx(s.imgC, s.left)}>
        <img src={dta} alt="Brand Visual" className={s.img} />
      </div>

      <div className={cx(s.imgC, s.right)}>
        <img src={lychee} alt="Brand Visual" className={s.img} />
      </div>
    </main>
  )
}

export default ContactContentCreator
