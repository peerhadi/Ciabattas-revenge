import styles from "./ScreenWipe.module.css";
import { useEffect, useState } from "react";
import PixelNumber from "../hud/PixelNumber";
import Levels from "@/levels/LevelsMap";
import soundsManager from "@/classes/Sounds";
import useStore from "@/atoms/currentLevelidAtom";

export default function ScreenWipe({ onDone, level }) {
  const [animationPhase, setAnimationPhase] = useState("initial");
  const [showLevelNumber, setShowLevelNumber] = useState(false);
  const [currentLevelId, setCurrentLevelId] = useStore((state) => [state.currentLevelId, state.setCurrentLevelId]);
  const [nextLevelId, setNextLevelId] = useState(currentLevelId);
  useEffect(() => {
    const effect = async () => {
      setTimeout(() => {
        setAnimationPhase("in");
      }, 200);
    };
    void effect();
  }, []);

  const handleGoToNextLevel = () => {
    const levelsArray = Object.keys(Levels);
    const currentIndex = levelsArray.findIndex((id) => {
      return id === currentLevelId
    })
    setNextLevelId(levelsArray[currentIndex + 1] ?? levelsArray[0])
  }


  return (
    <div
      onTransitionEnd={async () => {
        //Only fire the first time
        if (animationPhase === "in") {
          // Display current Level Number after a delay
          setTimeout(() => {
            setShowLevelNumber(true);
          }, 200);

          // Show the number change after a delay
          setTimeout(() => {
            handleGoToNextLevel()
          }, 800);

          // Transition out after a delay
          setTimeout(() => {
            setAnimationPhase("out");

            const levelsArray = Object.keys(Levels);
            const currentIndex = levelsArray.findIndex((id) => {
              return id === currentLevelId
            })
            if (Math.floor((currentIndex + 1) / 9) != Math.floor((currentIndex) / 9)) {
              soundsManager.stopSfx(level.music)
            }
            setCurrentLevelId(levelsArray[currentIndex + 1] ?? levelsArray[0])
            window.localStorage.setItem('currentLevelId', levelsArray[currentIndex + 1] ?? levelsArray[0])
          }, 2000)

          return;
        }

        if (animationPhase === "out") {
          onDone();
        }
      }}
      className={`${styles.screenWipe} ${styles[animationPhase]}`}
    >
      <div className={styles.levelNumberContainer}>
        {showLevelNumber && <PixelNumber number={Levels[nextLevelId].title.substring(6, 9)} />}
      </div>
    </div>
  );
}
