import { create } from 'zustand'

type State = {
  isOpen: boolean
}

type Action = {
  toggleModal: () => void
}

export const useModalStore = create<State & Action>((set) => ({
  isOpen: false,
  toggleModal: () => set((state) => ({isOpen: !state.isOpen})),
}))