import styles from './RenderLevel.module.css'
import { THEME_BACKGROUNDS } from '@/helpers/consts';
import LevelBackgroundTilesLayer from './LevelBackgroundTilesLayer';
import LevelPlacementsLayer from './LevelPlacementsLayer';
import { useEffect, useState } from 'react';
import { LevelState } from '@/classes/LevelState';
import LevelCompleteMessage from '../hud/LevelCompleteMessage'
import useStore from '@/atoms/currentLevelidAtom';
import DeathMessage from '../hud/DeathMessage';
import TopHud from '../hud/TopHud';
import ScreenWipe from './ScreenWipe';
import InGameTextbox from '../pixel-text/inGameTextbox';

export default function RenderLevel() {
  const [level, setLevel] = useState(null);

  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [currentLevelId, setCurrentLevelId] = useStore((state) => [state.currentLevelId, state.setCurrentLevelId]);
  useEffect(() => {
    if (window) {
      if (currentLevelId != window.localStorage.getItem('currentLevelId')) {
        if (window.localStorage.getItem('currentLevelId')) {
          setCurrentLevelId(window.localStorage.getItem('currentLevelId'))
        }
      }
    }

  }, [currentLevelId, setCurrentLevelId])

  useEffect(() => {
    if (window) {
      if (window.localStorage.getItem('currentLevelId')) {
        if (currentLevelId === window.localStorage.getItem('currentLevelId')) {
          const levelState = new LevelState(currentLevelId, newState => {
            setLevel(newState)
          });

          setLevel(levelState.getState())

          return () => {
            levelState.destroy()
          }
        }
      } else {
        const levelState = new LevelState(currentLevelId, newState => {
          setLevel(newState)
        });

        setLevel(levelState.getState())

        return () => {
          levelState.destroy()
        }
      }
    }
  }, [currentLevelId])

  if (!level) {
    return null
  }

  const cameraTranslate = `translate3d(${level.cameraTransformX}, ${level.cameraTransformY}, 0)`
  return (
    <div className={styles.fullScreenContainer} style={{
      background: THEME_BACKGROUNDS[level.theme]
    }}>
      <div className={styles.gameScreen}>

        <div style={{
          transform: cameraTranslate
        }}>
          <LevelBackgroundTilesLayer level={level} />
          <LevelPlacementsLayer level={level} />
        </div>
        {level.isCompleted && <LevelCompleteMessage level={level} />}
        {level.deathOutcome && <DeathMessage level={level} />}
      </div>
      {level.story && <InGameTextbox level={level} isAnimatingOut={isAnimatingOut} setIsAnimatingOut={setIsAnimatingOut}/>}
      {level.isCompleted && <ScreenWipe onDone={() => { }} level={level} />}
      <TopHud level={level} />
    </div >
  )
}
