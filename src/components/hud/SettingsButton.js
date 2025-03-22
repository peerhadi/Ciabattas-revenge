import { TILES } from '@/helpers/tiles';
import MemoizedSprite from '../object-graphics/Sprite';
import styles from './SettingsButton.module.css';
import React from 'react';
export default function SettingsButton({ handleToggle }) {
  return (
    <div className={styles.settingsButton}>
      <button className={styles.quietButton} onClick={handleToggle}>
        <MemoizedSprite frameCoord={TILES.SETTINGS} />
      </button>
    </div>
  )
}
