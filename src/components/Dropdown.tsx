import { useRef, useState } from "react"
import s from "~/assets/scss/components/Dropdown.module.scss"

import cx from "classnames"

import { useOnClickOutside } from "~/hooks"
import { truncateString } from "~/utils"

interface Option {
  id?: string
  title: string
}

interface Props {
  options?: Option[]
  defaultValue: Option
  onChange: any
  label?: string
  selectedOption?: any
}

const Dropdown = ({ options, onChange, label, defaultValue, selectedOption = defaultValue }: Props) => {
  const selectInputRef = useRef(null)
  const optionsRef = useRef(null)

  const [isOpen, setOpen] = useState(false)

  const handleClickOutside = () => {
    if (isOpen) setOpen(false)
  }

  useOnClickOutside(selectInputRef, handleClickOutside)

  return (
    <div className={s.selectInput} onClick={() => setOpen(!isOpen)} ref={selectInputRef}>
      {label ||
        (defaultValue && (
          <label className={s.label}>
            {truncateString(`${selectedOption ? selectedOption.title.replace("<br> ", "") : label}`, 26)}
          </label>
        ))}
      {isOpen && (
        <ul className={cx(s.options, { [s.option]: isOpen })} ref={optionsRef}>
          <li
            key={defaultValue.id}
            className={cx(s.option)}
            onClick={() => {
              setOpen(false)
              onChange(defaultValue.id)
            }}
          >
            {defaultValue.title}
          </li>
          {options &&
            options.length > 0 &&
            options.map((option: Option) => (
              <li
                key={option.id}
                className={cx(s.option)}
                onClick={() => {
                  setOpen(false)
                  onChange(option.id)
                }}
              >
                {option.title.replace("<br> ", "")}
              </li>
            ))}
        </ul>
      )}
      <div className={s.iconW}></div>
    </div>
  )
}

export default Dropdown
