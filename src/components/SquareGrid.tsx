import React, { useState } from "react"
import s from "~/assets/scss/components/SquareGrid.module.scss"

import { AnimatePresence, motion, Variants } from "framer-motion"
import { Link } from "react-router-dom"

import IconInstagram from "~/components/Icons/IconInstagram"
import { useWindowSize } from "~/hooks"
import { breakpoints } from "~/variables"
import IconTiktok from "./Icons/IconTiktok"

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

type Props = {
  items: any[]
}

const SquareGrid = (props: Props) => {
  const size = useWindowSize()

  const [maxItems, setMaxItems] = useState(1)

  const handleReadMore = () => {
    if (maxItems > 1) {
      setMaxItems(1)
    } else {
      setMaxItems(props.items.length)
    }
  }

  return (
    <div className={s.grid}>
      {props.items.map((item, i) => {
        return (
          <React.Fragment key={i}>
            {size.width > breakpoints.mobile ? (
              <>
                <div className={s.gridItemC} key={i}>
                  <div className={s.infoC}>
                    <p className={s.text}>{item.name}</p>
                    <div className={s.social}>
                      <Link to="." className={s.iconC}>
                        <IconInstagram fill="#fff" />
                      </Link>
                      <Link to="." className={s.iconC}>
                        <IconTiktok fill="#fff" />
                      </Link>
                    </div>
                  </div>
                  <img className={s.img} src={item.pic} alt="Influencer" />
                </div>
              </>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  {i < maxItems && (
                    <motion.div
                      layout
                      key={maxItems}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <div className={s.gridItemC} key={i}>
                        <div className={s.infoC}>
                          <p className={s.text}>{item.name}</p>
                          <div className={s.social}>
                            <Link to="." className={s.iconC}>
                              <IconInstagram fill="#fff" />
                            </Link>
                            <Link to="." className={s.iconC}>
                              <IconTiktok fill="#fff" />
                            </Link>
                          </div>
                        </div>
                        <img className={s.img} src={item.pic} alt="Influencer" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </React.Fragment>
        )
      })}
      {size.width <= breakpoints.mobile && (
        <button className={s.seeMoreBtn} onClick={handleReadMore}>
          {maxItems === 1 ? <>Daha Fazla Göster</> : <>Daha Az Göster</>}
        </button>
      )}
    </div>
  )
}

export default SquareGrid
