import styles from './CiabattaBody.module.css'
import MemoizedSprite from './Sprite'

export default function CiabattaBody({ frameCoord, yTranslate }) {
  return (
    <div className={styles.ciabatta}>
      <div
        className={styles.ciabattaBody}
        style={{
          transform: `translateY(${yTranslate}px)`,
        }}
      >
        <MemoizedSprite frameCoord={frameCoord} size={48} />
      </div>
    </div>
  )
}
