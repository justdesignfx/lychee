import s from "~/assets/scss/components/Img.module.scss"

import cx from "classnames"

type Props = {
  src: string
  objectFit?: any
  objectPosition?: string
  zIndex?: string
  alt?: string
}

const Img = ({ src = "", objectFit = "cover", objectPosition = "center", zIndex = "-1", alt = "Visual" }: Props) => {
  return (
    <img
      src={src}
      className={cx(s.img)}
      style={{
        objectFit,
        objectPosition,
        zIndex,
      }}
      alt={alt}
    />
  )
}

export default Img
