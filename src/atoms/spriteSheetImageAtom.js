import { create } from 'zustand';

const useStore = create((set) => ({
  spriteSheetImage: null,
  setSpriteSheetImage: (image) => set({ spriteSheetImage: image }),
}));

export default useStore;
