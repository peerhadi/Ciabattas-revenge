import { create } from 'zustand';

const useStore = create((set) => ({
  currentLevelId: "Level1",
  setCurrentLevelId: (image) => set({ currentLevelId: image }),
}));

export default useStore;
