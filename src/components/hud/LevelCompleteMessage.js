import styles from './PopupMessage.module.css'
import LevelCompletedSvg from "../object-graphics/LevelCompletedSvg"

export default function LevelCompleteMessage() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.popupContainer}>
        <button
          className={styles.quietButton}
        >
          <LevelCompletedSvg />
        </button>
      </div>
    </div>
  )
}
