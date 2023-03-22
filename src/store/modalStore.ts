import { ReactElement } from "react"
import { create } from "zustand"

interface ModalState {
  scrollToTop: boolean
  open: boolean
  content: ReactElement | null
  toggle: () => void
  setContent: (content: ReactElement | null) => void
  toggleScrollToTop: () => void
}

const useStore = create<ModalState>((set, get) => ({
  scrollToTop: false,
  open: false,
  content: null,
  toggle: () => set({ open: !get().open }),
  setContent: (content) => set({ content }),
  toggleScrollToTop: () => set({ scrollToTop: !get().scrollToTop }),
}))

export const useModalStore = useStore
