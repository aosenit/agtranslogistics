import { create } from "zustand";

interface initialState {
  showMobileNav: boolean;
  setShowMobileNav: (show: boolean) => void;
}

const useStore = create<initialState>((set) => ({
  showMobileNav: false,
  setShowMobileNav: (show) => set(() => ({ showMobileNav: show })),
}));

export default useStore;
