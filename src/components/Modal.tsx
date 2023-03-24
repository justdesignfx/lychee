import React, { useCallback, useEffect, useRef } from "react"
import s from "~/assets/scss/components/Modal.module.scss"

import cx from "classnames"
import gsap from "gsap"
import { useLocation } from "react-router-dom"

import { useLockedBody } from "~/hooks"
// import { useModalStore } from "store/modalStore"
import { SmoothContext } from "~/hocs/WithSmooth"
import { useModalStore } from "~/store/modalStore"

// import close from "assets/img/cross-black.svg"
import Img from "~/components/Img"

const Modal = () => {
  const scrollbarRef = useRef<any>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const sContext = React.useContext(SmoothContext)

  const modalStore = useModalStore()
  const [locked, setLocked] = useLockedBody(false, "root")

  useEffect(() => {
    if (modalStore.open) modalStore.toggle()
  }, [location])

  useEffect(() => {
    if (modalStore.open) {
      // mobile and tablet
      setLocked(true)
      sContext.lockScrollbar()

      gsap.to(backdropRef.current, {
        autoAlpha: 1,
        duration: 0.2,
        pointerEvents: "auto",
      })
    } else {
      // mobile and tablet
      setLocked(false)
      sContext.unlockScrollbar()

      gsap.to(backdropRef.current, {
        autoAlpha: 0,
        duration: 0.4,
        delay: 0.4,
        pointerEvents: "none",
        onComplete: () => {
          modalStore.setContent(null)
        },
      })
    }
  }, [modalStore.open])

  const stopPropagation = (e: any) => {
    e.stopPropagation()
  }

  const handleModal = () => {
    modalStore.toggle()
  }

  // Close on esc
  const escFunction = useCallback((event: any) => {
    if (event.key === "Escape") {
      if (modalStore.open) modalStore.toggle()
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [])

  return (
    <div className={cx(s.modal, { [s.open]: modalStore.open })} ref={modalRef}>
      <div className={s.close} onClick={handleModal}>
        {/* <Img src={close} objectFit="contain" /> */}CLOSE
      </div>
      <div className={s.backdrop} ref={backdropRef} onClick={handleModal}></div>
      <div className={s.content} ref={contentRef} onClick={stopPropagation}>
        {modalStore.content}
      </div>
    </div>
  )
}

export default Modal
