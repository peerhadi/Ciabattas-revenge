import { CreateButtonSvg, ElevatorButtonDown, ElevatorButtonSvg, ElevatorButtonUp, FloorTextSvg, JobTitle_CeoSvg, JobTitle_DirectorSvg, JobTitle_InternSvg, JobTitle_JuniorSvg, TitleButtonSvg } from "./ElevatorTextsvgs"
import styles from './ElevatorHud.module.css'
import React from "react"
import useStore from "@/atoms/currentLevelidAtom"
import soundsManager, { SFX } from "@/classes/Sounds"
import Levels from "@/levels/LevelsMap"

export function ElevatorStructure() {
  return (

    <svg style={{ display: "block", width: "calc(58px * var(--elevator-menu-pixel-size)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 58 124" shapeRendering="crispEdges"><path stroke="#0b1d3e" d="M1 0h56M0 1h1M57 1h1M0 2h1M57 2h1M0 3h1M57 3h1M0 4h1M57 4h1M0 5h1M57 5h1M0 6h1M57 6h1M0 7h1M57 7h1M0 8h1M57 8h1M0 9h1M57 9h1M0 10h1M57 10h1M0 11h1M57 11h1M0 12h1M57 12h1M0 13h1M57 13h1M0 14h1M57 14h1M0 15h1M57 15h1M0 16h1M57 16h1M0 17h1M57 17h1M0 18h1M57 18h1M0 19h1M57 19h1M0 20h1M57 20h1M0 21h1M57 21h1M0 22h1M57 22h1M1 23h56M0 24h1M57 24h1M0 25h1M57 25h1M0 26h1M57 26h1M0 27h1M57 27h1M0 28h1M57 28h1M0 29h1M57 29h1M0 30h1M57 30h1M0 31h1M57 31h1M0 32h1M57 32h1M0 33h1M57 33h1M0 34h1M57 34h1M0 35h1M57 35h1M0 36h1M57 36h1M0 37h1M57 37h1M0 38h1M57 38h1M0 39h1M57 39h1M0 40h1M57 40h1M0 41h1M57 41h1M0 42h1M57 42h1M0 43h1M57 43h1M0 44h1M57 44h1M0 45h1M57 45h1M0 46h1M57 46h1M0 47h1M57 47h1M0 48h1M57 48h1M0 49h1M57 49h1M0 50h1M57 50h1M0 51h1M57 51h1M0 52h1M57 52h1M0 53h1M57 53h1M0 54h1M57 54h1M0 55h1M57 55h1M0 56h1M57 56h1M0 57h1M57 57h1M0 58h1M57 58h1M0 59h1M57 59h1M0 60h1M57 60h1M0 61h1M57 61h1M0 62h1M57 62h1M0 63h1M57 63h1M0 64h1M57 64h1M0 65h1M57 65h1M0 66h1M57 66h1M0 67h1M57 67h1M0 68h1M57 68h1M0 69h1M57 69h1M0 70h1M57 70h1M0 71h1M57 71h1M0 72h1M57 72h1M0 73h1M57 73h1M0 74h1M57 74h1M0 75h1M57 75h1M0 76h1M57 76h1M0 77h1M57 77h1M0 78h1M57 78h1M0 79h1M57 79h1M0 80h1M57 80h1M0 81h1M57 81h1M0 82h1M57 82h1M0 83h1M57 83h1M0 84h1M57 84h1M0 85h1M57 85h1M0 86h1M57 86h1M0 87h1M57 87h1M0 88h1M57 88h1M0 89h1M57 89h1M0 90h1M57 90h1M0 91h1M57 91h1M0 92h1M57 92h1M0 93h1M57 93h1M0 94h1M57 94h1M0 95h1M57 95h1M0 96h1M57 96h1M0 97h1M57 97h1M0 98h1M57 98h1M0 99h1M57 99h1M0 100h1M57 100h1M0 101h1M57 101h1M0 102h1M57 102h1M0 103h1M57 103h1M0 104h1M57 104h1M0 105h1M57 105h1M0 106h1M57 106h1M0 107h1M57 107h1M0 108h1M57 108h1M0 109h1M57 109h1M0 110h1M57 110h1M0 111h1M57 111h1M0 112h1M57 112h1M0 113h1M57 113h1M0 114h1M57 114h1M0 115h1M57 115h1M0 116h1M57 116h1M0 117h1M57 117h1M0 118h1M57 118h1M0 119h1M57 119h1M0 120h1M57 120h1M0 121h1M57 121h1M0 122h1M57 122h1M1 123h56"></path><path stroke="#533d73" d="M1 1h56M1 2h1M1 3h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1M1 10h1M1 11h1M1 12h1M1 13h1M1 14h1M1 15h1M1 16h1M1 17h1M1 18h1M1 19h1M1 20h1M1 21h1M1 24h56M1 25h1M1 26h1M1 27h1M1 28h1M1 29h1M1 30h1M1 31h1M1 32h1M1 33h1M1 34h1M1 35h1M1 36h1M1 37h1M1 38h1M1 39h1M1 40h1M1 41h1M1 42h1M1 43h1M1 44h1M1 45h1M1 46h1M1 47h1M1 48h1M1 49h1M1 50h1M1 51h1M1 52h1M1 53h1M1 54h1M1 55h1M1 56h1M1 57h1M1 58h1M1 59h1M1 60h1M1 61h1M1 62h1M1 63h1M1 64h1M1 65h1M1 66h1M1 67h1M1 68h1M1 69h1M1 70h1M1 71h1M1 72h1M1 73h1M1 74h1M1 75h1M1 76h1M1 77h1M1 78h1M1 79h1M1 80h1M1 81h1M1 82h1M1 83h1M1 84h1M1 85h1M1 86h1M1 87h1M1 88h1M1 89h1M1 90h1M1 91h1M1 92h1M1 93h1M1 94h1M1 95h1M1 96h1M1 97h1M1 98h1M1 99h1M1 100h1M1 101h1M1 102h1M1 103h1M1 104h1M1 105h1M1 106h1M1 107h1M1 108h1M1 109h1M1 110h1M1 111h1M1 112h1M1 113h1M1 114h1M1 115h1M1 116h1M1 117h1M1 118h1M1 119h1M1 120h1M1 121h1"></path><path stroke="#64567a" d="M2 2h55M2 3h55M2 4h2M20 4h37M2 5h1M21 5h2M26 5h1M28 5h1M32 5h1M34 5h2M38 5h19M2 6h1M21 6h3M25 6h2M28 6h2M31 6h2M34 6h2M38 6h19M2 7h1M21 7h3M25 7h2M28 7h2M31 7h2M35 7h1M38 7h19M2 8h1M21 8h36M2 9h1M21 9h36M2 10h1M21 10h36M2 11h1M21 11h36M2 12h1M21 12h36M2 13h1M21 13h36M2 14h1M21 14h36M2 15h1M21 15h36M2 16h1M21 16h36M2 17h1M21 17h2M55 17h2M2 18h1M21 18h2M55 18h2M2 19h2M20 19h37M2 20h55M2 21h55M2 25h55M2 26h55M2 27h55M2 28h55M2 29h55M2 30h55M2 31h55M2 32h55M2 33h55M2 34h55M2 35h55M2 36h55M2 37h55M2 38h55M2 39h55M2 40h55M2 41h55M2 42h55M2 43h55M2 44h55M2 45h55M2 46h55M2 47h55M2 48h55M2 49h55M2 50h55M2 51h55M2 52h55M2 53h55M2 54h55M2 55h55M2 56h55M2 57h55M2 58h55M2 59h55M2 60h55M2 61h55M2 62h55M2 63h55M2 64h55M2 65h55M2 66h55M2 67h55M2 68h55M2 69h55M2 70h55M2 71h55M2 72h55M2 73h55M2 74h55M2 75h55M2 76h55M2 77h55M2 78h55M2 79h55M2 80h55M2 81h55M2 82h55M2 83h55M2 84h55M2 85h55M2 86h55M2 87h55M2 88h55M2 89h55M2 90h55M2 91h55M2 92h55M2 93h55M2 94h55M2 95h4M52 95h5M2 96h3M53 96h4M2 97h3M53 97h4M2 98h3M53 98h4M2 99h3M53 99h4M2 100h3M53 100h4M2 101h3M53 101h4M2 102h3M53 102h4M2 103h3M53 103h4M2 104h3M53 104h4M2 105h4M52 105h5M2 106h55M2 107h55M2 108h4M52 108h5M2 109h3M53 109h4M2 110h3M53 110h4M2 111h3M53 111h4M2 112h3M53 112h4M2 113h3M53 113h4M2 114h3M53 114h4M2 115h3M53 115h4M2 116h3M53 116h4M2 117h3M53 117h4M2 118h4M52 118h5M2 119h55M2 120h55M2 121h55"></path><path stroke="#2d0400" d="M4 4h16M3 5h1M20 5h1M3 6h1M7 6h2M10 6h2M13 6h2M16 6h2M20 6h1M3 7h1M6 7h1M9 7h1M12 7h1M15 7h1M18 7h1M20 7h1M3 8h1M6 8h1M17 8h1M20 8h1M3 9h1M6 9h1M17 9h1M20 9h1M3 10h1M5 10h1M18 10h1M20 10h1M3 11h1M20 11h1M3 12h1M20 12h1M3 13h1M20 13h1M3 14h1M20 14h1M3 15h1M20 15h1M3 16h1M20 16h1M3 17h1M20 17h1M3 18h1M20 18h1M4 19h16"></path><path stroke="#e2f0b2" d="M4 5h16M4 6h3M9 6h1M12 6h1M15 6h1M18 6h2M4 7h2M19 7h1M4 8h2M18 8h2M4 9h2M18 9h2M4 10h1M19 10h1M4 11h1M19 11h1M4 12h1M19 12h1M4 13h1M19 13h1M4 14h1M18 14h2M4 15h1M18 15h2M4 16h2M18 16h2M4 17h3M17 17h3M4 18h4M16 18h4"></path><path stroke="#000000" d="M23 5h3M27 5h1M29 5h3M33 5h1M36 5h2M24 6h1M27 6h1M30 6h1M33 6h1M36 6h1M24 7h1M27 7h1M30 7h1M33 7h2M36 7h2"></path><path stroke="#5d2822" d="M37 6h1"></path><path stroke="#85261c" d="M7 7h1M7 8h2M7 9h1M6 10h1M6 11h1M6 12h1M6 13h1M6 14h1M6 15h1"></path><path stroke="#ae4f46" d="M8 7h1M10 7h2M13 7h2M16 7h2M11 8h3M15 8h2"></path><path stroke="#8c3a31" d="M9 8h2M14 8h1M8 9h9M8 10h8M17 10h1M7 11h3M15 11h3M7 12h1M17 12h1"></path><path stroke="#eeff61" d="M7 10h1M16 10h1M13 11h1"></path><path stroke="#000101" d="M5 11h1M18 11h1M5 12h1M18 12h1M5 13h1M18 13h1M5 14h1M7 14h1M5 15h1"></path><path stroke="#700e05" d="M10 11h2M14 11h1M8 12h2M15 12h2M7 13h1"></path><path stroke="#fffcfd" d="M12 11h1"></path><path stroke="#c28b63" d="M10 12h5M8 13h2M15 13h2M16 14h1M16 15h1M16 16h1M10 18h2"></path><path stroke="#f4d4b5" d="M10 13h1M12 13h2M8 14h3M12 14h2M15 14h1M8 15h2M12 15h2M8 16h8M8 17h8"></path><path stroke="#0c0834" d="M11 13h1M14 13h1M11 14h1M14 14h1"></path><path stroke="#393603" d="M17 13h1M6 16h1"></path><path stroke="#341b08" d="M17 14h1M17 15h1M17 16h1M7 17h1M16 17h1M8 18h2M14 18h2"></path><path stroke="#e8c18e" d="M7 15h1M7 16h1"></path><path stroke="#fffcf9" d="M10 15h1M15 15h1"></path><path stroke="#2819be" d="M11 15h1M14 15h1"></path><path stroke="#21273d" d="M23 17h32"></path><path stroke="#810000" d="M12 18h2"></path><path stroke="#2c303f" d="M23 18h32"></path><path stroke="#736589" d="M1 22h56M1 122h56"></path><path stroke="#6e5d8a" d="M6 95h46M5 96h48M5 97h48M5 98h48M5 99h48M5 100h48M5 101h48M5 102h48M5 103h48M5 104h48M6 105h46M6 108h46M5 109h48M5 110h48M5 111h48M5 112h48M5 113h48M5 114h48M5 115h48M5 116h48M5 117h48M6 118h46"></path></svg>
  )
}
export default function ElevatorHud({ level }) {
  const [setCurrentId] = useStore((state) => [state.setCurrentLevelId]);
  const isActive = (id) => id === level.title.substring(6, 9);
  const [floor, setFloor] = React.useState('F' + level.title[6]);

  const handleLevelChange = (direction) => {
    const currentFloor = parseInt(floor[1]);
    const newFloor = direction === 'up' ? (currentFloor >= 5 ? 1 : currentFloor + 1) : (currentFloor <= 1 ? 5 : currentFloor - 1);
    setFloor('F' + newFloor);
  };

  const handleButtonClick = (buttonNumber) => {
    const levelId = "Level" + ((parseInt(floor[1]) - 1) * 9 + buttonNumber);
    if (floor != 'F' + level.title[6] || (
      level.music === SFX.MUSIC_BATTLE &&
      Levels[levelId].musicTrack != SFX.MUSIC_BATTLE 
    ) || (
      level.music != SFX.MUSIC_BATTLE &&
      Levels[levelId].musicTrack === SFX.MUSIC_BATTLE 
    ))
      soundsManager.stopSfx(level.music)
    setCurrentId(levelId);
  };
  const isCompleted = (buttonNumber) => {
    const completedLevels = JSON.parse(window.localStorage.getItem('completedLevels'));
    const levelId = "Level" + ((parseInt(floor[1]) - 1) * 9 + buttonNumber);
    console.log(JSON.parse(window.localStorage.getItem('completedLevels')).length,)
    return completedLevels.includes(levelId);
  }
  const progress = `${(JSON.parse(window.localStorage.getItem('completedLevels')).length / 45) * 100}`
  let jobTitle;
  if (progress < 25) {
    jobTitle = <JobTitle_InternSvg />
  } else if (progress < 50) {
    jobTitle = <JobTitle_JuniorSvg />
  } else if (progress < 100) {
    jobTitle = <JobTitle_DirectorSvg />
  } else {
    jobTitle = <JobTitle_CeoSvg />
  }
  return (
    <div className={styles.elevatorHud}>
      <ElevatorStructure />
      <div className={styles.elevatorHead}>
        <div className={styles.title}>
          {jobTitle}
        </div>
        <div className={styles.progressBar}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: `${progress}%`, bottom: "0px", borderTop: "calc(1px * var(--elevator-menu-pixel-size)) solid #8cff9b", background: "rgb(0, 242, 32)" }}>
          </div>
        </div>
      </div>
      <div className={styles.elevatorBody}>
        <div className={styles.floorSVG}>
          <FloorTextSvg floor={floor} />
        </div>
        <button className={`${styles.elevatorButtonUp} ${styles.button}`} disabled={floor[1] === '5'} style={{
          opacity: `${floor[1] === '5' ? '0.1' : '1'}`
        }} onClick={() => handleLevelChange('up')}>
          <ElevatorButtonUp />
        </button>
        <button className={`${styles.elevatorButtonDown} ${styles.button}`} disabled={floor[1] === '1'} style={{
          opacity: `${floor[1] === '1' ? '0.1' : '1'}`
        }} onClick={() => handleLevelChange('down')}>
          <ElevatorButtonDown />
        </button>

        <RenderElevatorMinimap floor={floor} />
        {[...Array(9)].map((_, index) => {
          const buttonNumber = index + 1;
          return (
            <button key={buttonNumber} className={`${styles[`button${buttonNumber}`]} ${styles.button}`} onClick={() => handleButtonClick(buttonNumber)}>
              <ElevatorButtonSvg floor={floor} number={buttonNumber} isActive={isActive(`${floor[1]}-${buttonNumber}`)} isCompleted={isCompleted(buttonNumber)} />
            </button>
          );
        })}
        <button className={`${styles.createButton} ${styles.button}`}>
          <CreateButtonSvg />
        </button>
        <button className={`${styles.titleButton} ${styles.button}`}>
          <TitleButtonSvg />
        </button>
      </div>
    </div>
  );
}

const RenderElevatorMinimap = ({ floor }) => {
  return (
    <div className={styles.elevatorMiniMap}>
      <svg
        style={{
          display: "block",
          width: `calc(1px * var(--elevator-menu-pixel-size)`,

        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -0.5 1 12"
        shapeRendering="crispEdges"
      >
        <path stroke={floor === "F5" ? "#3baaff" : "#000"} d="M0 0h1" />
        <path stroke={floor === "F4" ? "#3baaff" : "#000"} d="M0 2h1" />
        <path stroke={floor === "F3" ? "#3baaff" : "#000"} d="M0 4h1" />
        <path stroke={floor === "F2" ? "#3baaff" : "#000"} d="M0 6h1" />
        <path stroke={floor === "F1" ? "#3baaff" : "#000"} d="M0 8h1" />
        <path stroke={floor === "F_CUSTOM" ? "#fff" : "#000"} d="M0 11h1" />
      </svg>
    </div>
  );
};
