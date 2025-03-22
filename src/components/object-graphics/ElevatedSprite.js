import { TILES } from "@/helpers/tiles";
import MemoizedSprite from "./Sprite";
import { CELL_SIZE } from "@/helpers/consts";
import styles from './ElevatedSprite.module.css'
export default function ElevatedSprite({
  frameCoord,
  size = CELL_SIZE,
  pxAboveGround = 3,
  hover
}) {
  return (
    <div className={styles.elevatedSprite}>
      <MemoizedSprite frameCoord={TILES.SHADOW} />
      <div
        className={`${styles.bodyContainer} ${hover ? styles.hover : ""}`}
        style={{
          transform: `translateY(${-pxAboveGround}px)`,
        }}>
        <MemoizedSprite frameCoord={frameCoord} size={size} />
      </div>
    </div >
  )
}
