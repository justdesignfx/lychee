import s from "~/assets/scss/components/SplitText.module.scss"

import cx from "classnames"

type Props = {
  content: { word: string; font: "normal" | "italic" | string }[]
}

const SplitText = (props: Props) => {
  return (
    <>
      {props.content.map((content, i) => {
        return (
          <h2 className={s.text} key={i}>
            <p className={cx(s.word, [s[content.font]])}>
              {content.word.split("").map((letter, j) => {
                return (
                  <span key={j} className={s.letter} data-letter>
                    {letter}
                  </span>
                )
              })}
            </p>
          </h2>
        )
      })}
    </>
  )
}

export default SplitText
