import { TILES } from '@/helpers/tiles';
import MemoizedSprite from '../object-graphics/Sprite';
import styles from './FlourButton.module.css';
import PixelNumber from './PixelNumber';
import useStore from '@/atoms/currentLevelidAtom';
import Levels from '@/levels/LevelsMap';
export default function FloorButton({ onToggle }) {

  const currentLevelId = useStore((state) => state.currentLevelId)
  return (
    <div className={styles.floorButton} >
      <button className={styles.quietButton} onClick={onToggle}>
        <MemoizedSprite frameCoord={TILES.MAP_BUTTON} />
      </button>
      <PixelNumber number={Levels[currentLevelId].title} />
    </div>
  )
}
