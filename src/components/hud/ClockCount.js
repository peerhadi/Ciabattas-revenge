import { TILES } from '@/helpers/tiles';
import MemoizedSprite from '../object-graphics/Sprite';
import styles from './ClockCount.module.css';
import PixelNumber from './PixelNumber';
export default function ClockCount({ level }) {
  return (
    <div className={styles.clockCount} >
      <MemoizedSprite frameCoord={TILES.CLOCK} />
    <PixelNumber number={level.secondsRemaining}/>
    </div>
  )
}
