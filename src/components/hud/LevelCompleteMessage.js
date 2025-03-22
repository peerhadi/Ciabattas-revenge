import useStore from "@/atoms/currentLevelidAtom"
import Levels from "@/levels/LevelsMap"
import styles from './PopupMessage.module.css'
import { useKeyPress } from "@/hooks/useKeyPress"
import LevelCompletedSvg from "../object-graphics/LevelCompletedSvg"
import soundsManager from "@/classes/Sounds"

export default function LevelCompleteMessage({level }) {
  const [currentId, setCurrentId] = useStore((state) => [state.currentLevelId, state.setCurrentLevelId])

  const handleGoToNextLevel = () => {
    soundsManager.stopSfx(level.music)
    const levelsArray = Object.keys(Levels);
    const currentIndex = levelsArray.findIndex((id) => {
      return id === currentId
    })

    const nextLevelId = levelsArray[currentIndex + 1] ?? levelsArray[0]
    setCurrentId(nextLevelId)
  }

  useKeyPress("Enter", () => {
    handleGoToNextLevel()
  })
  return (
    <div className={styles.outerContainer}>
      <div className={styles.popupContainer}>
        <button
          className={styles.quietButton}
          onClick={handleGoToNextLevel}
        >
          <LevelCompletedSvg />
        </button>
      </div>
    </div>
  )
}
