import React from 'react'
import ClockCount from './ClockCount'
import FlourCount from './FlourCount'
import InventoryList from './InventoryList'
import RestartButton from './RestartButton'
import SettingsButton from './SettingsButton'
import styles from './TopHud.module.css'
import FloorButton from './FloorButton'
import useStore from "@/atoms/currentLevelidAtom"
import ElevatorHud from './ElevatorHud'
import soundsManager from '@/classes/Sounds';

export default function TopHud({ level }) {
  const [showSettings, setShowSettings] = React.useState(false);
  const [showElevatorHud, setShowElevatorHud] = React.useState(false);

  const [currentId] = useStore((state) => [state.currentLevelId]);
  React.useEffect(() => {
    setShowElevatorHud(false)
    }, [currentId])
  return (
    <div className={styles.topHud}>
      <div className={styles.topHudLeft}>
        <FloorButton onToggle={() => setShowElevatorHud(!showElevatorHud)}/>
        <FlourCount level={level} />
        <ClockCount level={level} />
        <InventoryList level={level} />
      </div>
  {showElevatorHud && <ElevatorHud level={level}/>}

      <div className={styles.topHudRight}>
        <SettingsButton handleToggle={() => setShowSettings(!showSettings)} />
        <RestartButton level={level} />
      </div>
      {showSettings && (
        <div className={styles.settings}>
          <h2 style={{ margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif", fontWeight: '500', fontSize: '1.6rem' }}>Settings</h2>
          <label style={{ display: 'flex', flexDirection: 'column', width: '160px' }}>
            <span className={styles.labelText}>Music Volume</span>
            <input type="range" max='0.5' step="0.05" defaultValue="0.5" onChange={(e) => soundsManager.changeMusicVolume(e.target.value)}/>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', width: '160px' }}>
            <span className={styles.labelText}>SFX Volume</span>
            <input type="range" max='0.5' step="0.05" defaultValue="0.5" onChange={(e) => soundsManager.changeSfxVolume(e.target.value)}/>
          </label>
        </div>
      )}
    </div>
  )
}
