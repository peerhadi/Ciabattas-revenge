import { TILES } from '@/helpers/tiles'
import LevelFailedSvg from '../object-graphics/LevelFailedSvg'
import MemoizedSprite from '../object-graphics/Sprite'
import styles from './PopupMessage.module.css'
import { DEATH_TYPE_CLOCK, PLACEMENT_TYPE_CIABATTA, PLACEMENT_TYPE_FIRE, PLACEMENT_TYPE_FLYING_ENEMY, PLACEMENT_TYPE_GROUND_ENEMY, PLACEMENT_TYPE_ROAMING_ENEMY, PLACEMENT_TYPE_WATER } from '@/helpers/consts'
import { useKeyPress } from '@/hooks/useKeyPress'
import RestartButton from './RestartButton'
const showDeathType = (deathType) => {
  switch (deathType) {
    case PLACEMENT_TYPE_FIRE:
      return <MemoizedSprite frameCoord={TILES.FIRE1} />
    case PLACEMENT_TYPE_WATER:
      return <MemoizedSprite frameCoord={TILES.WATER1} />
    case DEATH_TYPE_CLOCK:
      return <MemoizedSprite frameCoord={TILES.CLOCK} />
    case PLACEMENT_TYPE_GROUND_ENEMY:
      return (
        <div style={{
          paddingBottom: 12,
        }}>
          <MemoizedSprite frameCoord={TILES.ENEMY_RIGHT} size={32} />
        </div>
      )

    case PLACEMENT_TYPE_ROAMING_ENEMY:
      return (
        <div style={{
          paddingBottom: 12,
        }}>
          <MemoizedSprite frameCoord={TILES.ENEMY_ROAMING} size={32} />
        </div>
      )
    case PLACEMENT_TYPE_FLYING_ENEMY:
      return (
        <div style={{
          paddingBottom: 12,
        }}>
          <MemoizedSprite frameCoord={TILES.ENEMY_FLYING_RIGHT} size={32} />
        </div>
      )
    case PLACEMENT_TYPE_CIABATTA:
      return (
        <div style={{
          paddingBottom: 4,
        }}>
          <MemoizedSprite frameCoord={TILES.CIABATTA2} size={48} />
        </div>
      )
  }
}
export default function DeathMessage({ level }) {
  const handleRestartLevel = () => {
    level.restart();
  }
  useKeyPress("Enter", () => {
    handleRestartLevel();
  })
  return (
    <div className={styles.outerContainer}>

      <div className={styles.popupContainer}>
        <button className={styles.quietButton} onClick={handleRestartLevel}>
          <LevelFailedSvg />
          <div className={styles.deathTypeContainer}>
            {showDeathType(level.deathOutcome)}
          </div>
        </button>
      </div>
      <div style={{ height: "68px", display: 'flex', alignItems: 'start', justifyContent: 'start' }}>
        <RestartButton level={level} />
      </div>
    </div>
  )
}
