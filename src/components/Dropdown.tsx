import { useEffect, useRef, useState } from "react"
import s from "~/assets/scss/components/Dropdown.module.scss"

import cx from "classnames"

import { useOnClickOutside } from "~/hooks"
import { truncateString } from "~/utils"
import IconArrow from "./Icons/IconArrow"

interface Option {
  id?: string
  title: string
}

interface Props {
  options?: Option[]
  defaultValue?: Option
  onChange: any
  label?: string
  selectedOption?: any
}

const Dropdown = ({ options, onChange, label, defaultValue, selectedOption }: Props) => {
  const selectInputRef = useRef(null)
  const optionsRef = useRef(null)

  const [isOpen, setOpen] = useState(false)

  const handleClickOutside = () => {
    if (isOpen) setOpen(false)
  }

  useOnClickOutside(selectInputRef, handleClickOutside)

  useEffect(() => {
    console.log(selectedOption)
  }, [selectedOption])

  return (
    <div className={s.selectInput} onClick={() => setOpen(!isOpen)} ref={selectInputRef}>
      {<label className={s.label}>{selectedOption ? selectedOption : label}</label>}
      {isOpen && (
        <ul className={cx(s.options, { [s.option]: isOpen })} ref={optionsRef}>
          {options &&
            options.length > 0 &&
            options.map((option: Option, i) => (
              <li
                key={i}
                className={cx(s.option)}
                onClick={() => {
                  setOpen(false)
                  onChange(option.title)
                }}
              >
                {option.title.replace("<br> ", "")}
              </li>
            ))}
        </ul>
      )}
      <div className={s.iconW}>
        <IconArrow fill={"#6C6C79"} />
      </div>
    </div>
  )
}

export default Dropdown
