import { create } from "zustand"

export type CursorType = "default" | "lamp" | "lampSmall"

interface CursorState {
  default: boolean
  visible: boolean
  hidden: boolean
  type: CursorType
  lamped: boolean
  toggleDefault: () => void
  toggleHide: () => void
  toggleVisibility: () => void
  toggleLamp: () => void
  setCursor: (type: CursorType) => void
}

const useStore = create<CursorState>((set, get) => ({
  type: "default",
  default: true,
  visible: false,
  hidden: false,
  lamped: false,
  toggleDefault: () =>
    set(() => ({
      default: true,
      lamped: false,
    })),
  toggleHide: () =>
    set(() => ({
      hidden: !get().hidden,
    })),
  toggleVisibility: () => set(() => ({ visible: !get().visible })),
  toggleLamp: () => set((state) => ({ lamped: !state.lamped, default: !state.default })),
  setCursor: (type) => set(() => ({ type })),
}))

export const useCursorStore = useStore
