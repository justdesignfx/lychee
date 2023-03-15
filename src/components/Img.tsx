import { useState } from "react"
import s from "~/assets/scss/components/Img.module.scss"

import cx from "classnames"

type Props = {
  src: string
  objectFit?: any
  objectPosition?: string
  alt?: string
}

const Img = ({ src = "", objectFit = "cover", objectPosition = "center", alt = "Visual" }: Props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  return (
    <img
      src={src}
      onLoad={() => {
        setIsLoaded(true)
      }}
      className={cx(s.img, { [s.visible]: isLoaded })}
      style={{
        objectFit,
        objectPosition,
      }}
      alt={alt}
    />
  )
}

export default Img
