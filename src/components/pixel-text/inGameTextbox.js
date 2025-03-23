import { useEffect, useState } from "react";
import MemoizedSprite from "../object-graphics/Sprite";
import { TILES } from "@/helpers/tiles";
import PixelSentence from "./PixelSentence";
import styles from './inGameTextbox.module.css'

export default function InGameTextbox({ level, isAnimatingOut, setIsAnimatingOut }) {

  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setIsDone(false);
  }, [level]);
  useEffect(() => {
    setTimeout(() => {
      setIsAnimatingOut(false)
    }, 1000)
  }, [level.title, setIsAnimatingOut])
  return (
    <div className={`${styles.textbox} ${isAnimatingOut ? styles.out : ""}`}>
      <div className={styles.textboxInner}>
        <div className={styles.characterAvatar}>
          <div className={styles.scaledSprite}>
            <MemoizedSprite frameCoord={TILES.CIABATTA_RIGHT} size={48} />
          </div>
        </div>
        <div>
          <PixelSentence
            preDelayMs={
              1000
            }
            textString={level.story}
            onDone={() => {
              setIsAnimatingOut(true)
              setIsDone(true)
              setTimeout(() => {
                level.closeStory();
              }, 300);

            }}
    isDone={isDone}
          />
        </div>
      </div>
    </div>
  )
}
