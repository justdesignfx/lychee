import { useState } from "react"
import s from "~/assets/scss/components/SquareGrid.module.scss"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import IconInstagram from "~/components/Icons/IconInstagram"
import IconTiktok from "./Icons/IconTiktok"

import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"
import IconYoutube from "./Icons/IconYoutube"

type IGridItem = {
  name: string
  img: string
  social?: {
    tiktok?: string
    instagram?: string
    youtube?: string
  }
}

const GridItem = (props: IGridItem) => {
  return (
    <div className={s.gridItemC}>
      <div className={s.infoC}>
        <p className={s.text}>{props.name}</p>
        {props.social && (
          <div className={s.social}>
            {props.social.instagram && (
              <Link target="_blank" rel="noreferrer noopener" to={props.social.instagram} className={s.iconC}>
                <IconInstagram fill="#fff" />
              </Link>
            )}
            {props.social.tiktok && (
              <Link target="_blank" rel="noreferrer noopener" to={props.social.tiktok} className={s.iconC}>
                <IconTiktok fill="#fff" />
              </Link>
            )}
            {props.social.youtube && (
              <Link target="_blank" rel="noreferrer noopener" to={props.social.youtube} className={s.iconC}>
                <IconYoutube fill="#fff" />
              </Link>
            )}
          </div>
        )}
      </div>
      <img className={s.img} src={props.img} alt="Influencer" />
    </div>
  )
}

type Props = {
  items: IGridItem[]
}

const SquareGrid = (props: Props) => {
  const size = useWindowSize()
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  const handleSeeMore = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className={s.gridC}>
      {size.width > breakpoints.mobile ? (
        <div className={s.grid}>
          {props.items.map((item, i) => {
            return <GridItem key={i} {...item} />
          })}
        </div>
      ) : (
        <motion.ul
          className={s.grid}
          layout
          animate={open ? "open" : "closed"}
          variants={{
            open: {
              transition: { staggerChildren: 0.02 },
            },
            closed: {
              transition: { staggerChildren: 0.02 },
            },
          }}
        >
          <GridItem {...props.items[0]} />
          <GridItem {...props.items[1]} />
          <GridItem {...props.items[2]} />

          {props.items.map((item, i) => {
            return (
              <>
                {i > 2 && (
                  <motion.li
                    key={i}
                    variants={{
                      open: {
                        opacity: 1,
                        display: "block",
                        transition: {
                          duration: 1,
                        },
                      },
                      closed: {
                        opacity: 0,
                        display: "none",
                        transition: {
                          duration: 1,
                        },
                      },
                    }}
                  >
                    <GridItem {...item} />
                  </motion.li>
                )}
              </>
            )
          })}
        </motion.ul>
      )}

      {size.width <= breakpoints.mobile && (
        <button className={s.seeMoreBtn} onClick={handleSeeMore}>
          {!open ? <>{t("creators.faces.buttonMobile.more")}</> : <>{t("creators.faces.buttonMobile.less")}</>}
        </button>
      )}
    </div>
  )
}

export default SquareGrid
