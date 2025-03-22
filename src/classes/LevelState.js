import { PLACEMENT_TYPE_HERO } from "@/helpers/consts";
import { placementFactory } from "./PlacementFactory";
import { GameLoop } from "./gameLoop";
import { DirectionControls } from "./DirectionControls";
import Levels from "@/levels/LevelsMap";
import { Inventory } from "./Inventory";
import { LevelAnimatedFrames } from "./LevelAnimatedFrames";
import { Camera } from "./Camera";
import { Clock } from "./Clock";
import useStore from "@/atoms/spriteSheetImageAtom";
import soundsManager, { SFX } from "./Sounds";

export class LevelState {
  constructor(levelId, onEmit) {
    this.id = levelId;
    this.onEmit = onEmit;


    this.directionControls = new DirectionControls();
    this.music = Levels[this.id].musicTrack
    console.log(this.music)
    document.addEventListener('click', soundsManager.playSfx(this.music))

    this.start()
  }

  start() {
    this.isCompleted = false;
    this.deathOutcome = null;
    const levelData = Levels[this.id];
    this.theme = levelData.theme;
    this.tilesWidth = levelData.tilesWidth;
    this.tilesHeight = levelData.tilesHeight;
    this.placements = levelData.placements.map((config) => {
      return placementFactory.createPlacement(config, this)
    })
    this.inventory = new Inventory();
    this.animatedFrames = new LevelAnimatedFrames();
    this.heroRef = this.placements.find(p => p.type === PLACEMENT_TYPE_HERO)

    this.camera = new Camera(this)
    this.clock = new Clock(90, this)
    this.startGameLoop()
  }
  startGameLoop() {
    this.gameLoop?.stop();
    this.gameLoop = new GameLoop(() => {
      this.tick();
    })
  }

  addPlacement(config) {
    this.placements.push(placementFactory.createPlacement(config, this))
  }

  deletePlacement(placementToRemove) {
    this.placements = this.placements.filter((p) => {
      return p.id !== placementToRemove.id;
    })
  }


  tick() {
    if (this.directionControls.direction) {
      this.heroRef.controllerMoveRequested(this.directionControls.direction)
    }

    this.placements.forEach(placement => {
      placement.tick();
    })

    this.animatedFrames.tick()

    this.camera.tick();
    this.clock.tick()

    this.onEmit(this.getState());
  }

  isPositionOutOfBounds(x, y) {
    return (
      x === 0 ||
      y === 0 ||
      x >= this.tilesWidth + 1 ||
      y >= this.tilesHeight + 1
    )
  }
  switchAllDoors() {
    this.placements.forEach((placement) => {
      if (placement.toggleIsRaised) {
        placement.toggleIsRaised()
      }
    })
  }

  stealInventory() {
    this.placements.forEach((p) => {
      p.resetHasBeenCollected();
    })
    this.inventory.clear();
  }
  setDeathOutcome(causeOfDeath) {
    this.deathOutcome = causeOfDeath;
    this.gameLoop.stop()
  }

  completeLevel() {
    if (!window.localStorage.getItem("completedLevels")) {
      window.localStorage.setItem("completedLevels", JSON.stringify([]))
    }
    const completedLevels = [...JSON.parse(window.localStorage.getItem("completedLevels")), this.id];
    window.localStorage.setItem('completedLevels', JSON.stringify(completedLevels))
    this.isCompleted = true;
    this.gameLoop.stop()
  }

  getState() {
    return {
      theme: this.theme,
      tilesWidth: this.tilesWidth,
      tilesHeight: this.tilesHeight,
      placements: this.placements,
      deathOutcome: this.deathOutcome,
      isCompleted: this.isCompleted,
      cameraTransformX: this.camera.transformX,
      cameraTransformY: this.camera.transformY,
      secondsRemaining: this.clock.secondsRemaining,
      inventory: this.inventory,
      title: Levels[this.id].title,
      music: this.music,
      restart: () => {

        this.start()
      }
    }
  }

  destroy() {
    this.gameLoop.stop();
    this.directionControls.unbind()
  }
}
