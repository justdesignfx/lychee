import React, { FormEvent, useEffect, useRef, useState } from "react"
import s from "~/assets/scss/components/BrandForm.module.scss"

import cx from "classnames"
import gsap from "gsap"
import Dropdown from "./Dropdown"

const BrandForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [company, setCompany] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [role, setRole] = useState<string | null>(null)
  const [socialPlatforms, setSocialPlatforms] = useState<string[]>([])

  const budgetRanges = [
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
  ]

  const handleFocus = (e: FormEvent | any) => {
    e.preventDefault()

    if (e.type === "focus" && e) {
      e.target.labels[0].style.opacity = "0"
    } else if (e.type === "blur" && e) {
      e.target.labels[0].style.opacity = "1"
    }
  }

  const social = [
    { ui: "Twitter", type: "TWITTER" },
    { ui: "Youtube", type: "YOUTUBE" },
    { ui: "Tiktok", type: "TIKTOK" },
    { ui: "Instagram", type: "INSTAGRAM" },
    { ui: "Facebook", type: "FACEBOOK" },
    { ui: "Diğer", type: "OTHER" },
  ]

  const steps = [
    {
      question: "Öncelikle sizi tanımak istiyoruz. Aşağıdaki bilgileri doldurabilir misiniz?",
      ui: (
        <>
          <div className={s.inputC}>
            <label
              className={cx(s.label, {
                [s.hidden]: name,
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
              onChange={(e) => {
                setName(e.currentTarget.value)
              }}
              required
            />
          </div>
          <div className={s.inputC}>
            <label
              className={cx(s.label, {
                [s.hidden]: email,
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
              onChange={(e) => {
                setEmail(e.currentTarget.value)
              }}
              required
            />
          </div>
        </>
      ),
    },
    {
      question: "Şirketiniz / markanız hakkında bilgi verebilir misiniz?",
      ui: (
        <>
          <div className={s.inputC}>
            <label
              className={cx(s.label, {
                [s.hidden]: company,
              })}
              htmlFor="company"
            >
              Şirket
            </label>
            <input
              className={s.input}
              id="company"
              type="text"
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={(e) => {
                setCompany(e.currentTarget.value)
              }}
              required
            />
          </div>
          <div className={s.inputC}>
            <label
              className={cx(s.label, {
                [s.hidden]: website,
              })}
              htmlFor="website"
            >
              Eposta Adresi
            </label>
            <input
              className={s.input}
              id="website"
              type="text"
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={(e) => {
                setWebsite(e.currentTarget.value)
              }}
              required
            />
          </div>
          <div className={s.inputC}>
            <label
              className={cx(s.label, {
                [s.hidden]: role,
              })}
              htmlFor="role"
            >
              Role
            </label>
            <input
              className={s.input}
              id="role"
              type="text"
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={(e) => {
                setRole(e.currentTarget.value)
              }}
              required
            />
          </div>
        </>
      ),
    },
    {
      question: "Şirketiniz / markanız için oluşturmak istediğiniz kampanyayı kısaca anlatınız.",
      ui: (
        <>
          <div className={s.textareaC}>
            <label className={s.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={s.textarea}
              id="message"
              onChange={(e) => {
                setMessage(e.currentTarget.value)
              }}
              required
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
              {social.map((platform) => {
                return (
                  <div
                    className={cx(s.radio, { [s.active]: socialPlatforms.includes(platform.type) })}
                    onClick={() => handleSocial(platform.type)}
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
          <div className={s.inputC}>
            {/* <label
              className={cx(s.label, {
                [s.hidden]: company,
              })}
              htmlFor="company"
            >
              Şirket
            </label> */}

            <Dropdown
              defaultValue={budgetRanges[0]}
              options={budgetRanges}
              onChange={handleRange}
              selectedOption={budgetRanges[0]}
            />
          </div>
        </>
      ),
    },
  ]

  const handleSocial = (type: string) => {
    setSocialPlatforms((prev) => [...prev, type])
  }

  const handleQuestions = (direction: "NEXT" | "PREV") => {
    gsap.to(formRef.current, {
      autoAlpha: 0,
      duration: 0.4,
      onComplete: () => {
        switch (direction) {
          case "NEXT":
            if (currentStep < steps.length) {
              setCurrentStep((prev) => prev + 1)
            }
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
          duration: 0.4,
          delay: 0.8,
        })
      },
    })
  }

  function handleRange() {
    console.log("lol")
  }

  return (
    <div className={s.brandForm}>
      <h2 className={s.title}>MARKA BAŞVURU FORMU</h2>

      <div className={s.formC}>
        <form className={s.form} ref={formRef}>
          <p className={s.question}>
            {currentStep + 1}. {steps[currentStep].question}
          </p>
          <>{steps[currentStep].ui}</>
        </form>
      </div>

      <div className={s.buttons}>
        <button className={cx(s.button, s.next)} onClick={() => handleQuestions("NEXT")}>
          Sonraki adım
        </button>

        <button className={cx(s.button, s.prev)} onClick={() => handleQuestions("PREV")}>
          Önceki Adım
        </button>
      </div>

      <div className={s.progressBar}>
        <div className={s.progress} style={{ transform: `scaleX(${(1 / steps.length) * (currentStep + 1)})` }}></div>
      </div>
    </div>
  )
}

export default BrandForm
