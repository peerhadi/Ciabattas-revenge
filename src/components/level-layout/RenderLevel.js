import './RenderLevel.modules.css'
import { THEME_BACKGROUNDS } from '@/helpers/consts';
import LevelBackgroundTilesLayer from './LevelBackgroundTilesLayer';
import LevelPlacementsLayer from './LevelPlacementsLayer';
import { useEffect, useState } from 'react';
import { LevelState } from '@/classes/LevelState';
import LevelCompleteMessage from '../hud/LevelCompleteMessage'
import useStore from '@/atoms/currentLevelidAtom';
import DeathMessage from '../hud/DeathMessage';
import TopHud from '../hud/TopHud';

export default function RenderLevel() {
  const [level, setLevel] = useState(null);
  const currentLevelId = useStore((state) => state.currentLevelId)
  useEffect(() => {
    const levelState = new LevelState(currentLevelId, newState => {
      setLevel(newState)
    });

    setLevel(levelState.getState())

    return () => {
      levelState.destroy()
    }
  }, [currentLevelId])

  if (!level) {
    return null
  }

  const cameraTranslate = `translate3d(${level.cameraTransformX}, ${level.cameraTransformY}, 0)`

  return (
    <div className={'fullScreenContainer'} style={{
      background: THEME_BACKGROUNDS[level.theme]
    }}>
      <div className={'gameScreen'}>
        <div style={{
          transform: cameraTranslate
        }}>
          <LevelBackgroundTilesLayer level={level} />
          <LevelPlacementsLayer level={level} />
        </div>
        {level.isCompleted && <LevelCompleteMessage level={level}/>}
        {level.deathOutcome && <DeathMessage level={level} />}

      </div>
      <TopHud level={level} />
    </div>
  )
}
