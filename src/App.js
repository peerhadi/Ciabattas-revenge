
'use client';
import { useEffect } from 'react';
import { SPRITE_SHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";
import useStore from './atoms/spriteSheetImageAtom';
import soundsManager from './classes/Sounds';
soundsManager.init()

export default function App() {
  const { spriteSheetImage, setSpriteSheetImage } = useStore();

  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, [setSpriteSheetImage]);

  if (!spriteSheetImage) return null;

  return (
    <RenderLevel/>
  );
}

