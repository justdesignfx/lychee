import { create } from "zustand"

interface CursorState {
  default: boolean
  visible: boolean
  hidden: boolean
  lamped: boolean
  toggleDefault: () => void
  toggleHide: () => void
  toggleVisibility: () => void
  toggleLamp: () => void
}

const useStore = create<CursorState>((set, get) => ({
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
}))

export const useCursorStore = useStore
