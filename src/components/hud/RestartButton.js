import { TILES } from '@/helpers/tiles';
import MemoizedSprite from '../object-graphics/Sprite';
import styles from './RestartButton.module.css';
export default function RestartButton({ level }) {
  return (
    <div className={styles.restartButton} >
      <button className={styles.quietButton} onClick={() => level.restart(true)}>
        <MemoizedSprite frameCoord={TILES.RESTART_BUTTON} />
      </button>
    </div>
  )
}
