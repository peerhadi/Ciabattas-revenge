import CiabattaBody from "@/components/object-graphics/CiabattaBody";
import GroundEnemyPlacement from "./GroundEnemyPlacement";
import { TILES } from "@/helpers/tiles";
import { CELL_SIZE, PLACEMENT_TYPE_ROAMING_ENEMY } from "@/helpers/consts";

const ATTACKS = {
  TACKLE: "TACKLE",
  SPAWN: "SPAWN"
}
const PAIN_FRAMES_LENGTH = 20;
const DEATH_FRAMES_LENGTH = 140;

export class CiabattaPlacement extends GroundEnemyPlacement {
  constructor(properties, level) {
    super(properties, level)
    this.tickBetweenMovesInInterval = 40;
    this.ticksUntilNextMove = this.tickBetweenMovesInInterval;
    this.turnsAroundAtWater = true;
    this.interactsWithGround = true;
    this.normalMovesRemaining = 4;
    this.hp = 3;
    this.painFramesRemaining = 0;
    this.currentAttack = null
    this.deathFramesUntilDisappear = 0;
  }

  tickAttemptAiMove() {
    this.checkForOverlapWithHero();
    if(this.deathFramesUntilDisappear > 0){
      this.deathFramesUntilDisappear -= 1;
      if(this.deathFramesUntilDisappear === 0){
        this.level.deletePlacement(this)
      }
      return;
    }
    if(this.painFramesRemaining > 0){
      this.painFramesRemaining -= 1;
      return;
    }
    if (this.ticksUntilNextMove > 0) {
      this.ticksUntilNextMove -= 1;
      return;
    }

    if (this.currentAttack) {
      this.workOnAttackFrame();
      return;
    }
    const direction = this.movingPixelsDirection;
    if (this.isSolidAtNextPosition(direction)) {
      this.switchDirection();
      return;
    }

    if (this.movingPixelsRemaining === 0) {
      this.ticksUntilNextMove = this.tickBetweenMovesInInterval;
      this.movingPixelsRemaining = CELL_SIZE;
      this.movingPixelsDirection = direction;
      this.updateFacingDirection();
      this.updateWalkFrame()
    }
  }

  onPostMove() {
    if (this.normalMovesRemaining === 0) {
      this.normalMovesRemaining = 4;
      this.startAttack();
      return;
    }
    this.normalMovesRemaining -= 1;
  }
  startAttack() {
    const possibleNextAttacks = [ATTACKS.SPAWN, ATTACKS.TACKLE];
    const next =
      possibleNextAttacks[
      Math.floor(Math.random() * possibleNextAttacks.length)
      ];
    if (next === ATTACKS.TACKLE) {
      this.currentAttack = {
        type: ATTACKS.TACKLE,
        framesRemaining: 120,
        returnToY: this.y
      }
    }
    if (next === ATTACKS.SPAWN) {
      this.currentAttack = {
        type: ATTACKS.SPAWN,
        framesRemaining: 220,
        returnToY: this.y
      }
    }
  }

  workOnAttackFrame() {
    this.currentAttack.framesRemaining -= 1;
    if (this.currentAttack.framesRemaining === 0) {
      this.currentAttack = null;
      return;
    }

    if (this.currentAttack.type === ATTACKS.TACKLE) {
      this.handleTackleAttackFrame();
    }

    if (this.currentAttack.type === ATTACKS.SPAWN) {
      this.handleSpawnAttackFrame();
    }
  }

  handleSpawnAttackFrame() {
    const { framesRemaining } = this.currentAttack;
    if (framesRemaining == 210) {
      [
        {
          type: PLACEMENT_TYPE_ROAMING_ENEMY,
          x: this.level.heroRef.x,
          y: this.level.heroRef.y + 2,
        },
        {
          type: PLACEMENT_TYPE_ROAMING_ENEMY,
          x: this.level.heroRef.x + 2,
          y: this.level.heroRef.y,
        },
        {
          type: PLACEMENT_TYPE_ROAMING_ENEMY,
          x: this.level.heroRef.x - 2,
          y: this.level.heroRef.y,
        },
      ].filter(p => {
        return p.x > 0 && p.x <= this.level.tilesWidth && p.y < this.level.tilesHeight && p.y > 0;
      }).forEach(enemyConfig => {
        this.level.addPlacement(enemyConfig);
      })
    }
    if (framesRemaining === 1) {
      this.level.placements.forEach(p => {
        if (p.type == PLACEMENT_TYPE_ROAMING_ENEMY) {
          this.level.deletePlacement(p)
        }
      })
    }
  }

  handleTackleAttackFrame() {
    const { framesRemaining, returnToY } = this.currentAttack;
    if (framesRemaining === 115) {
      this.x = this.level.heroRef.x;
      this.y = this.level.heroRef.y - 1;;
      if (this.y < 1) {
        this.y = 1;
      }
    }
    if (framesRemaining == 100) {
      this.y = this.y + 1;
    }

    if (framesRemaining === 50) {
      this.y = returnToY;
    }
  }
  takesDamage(){
    this.painFramesRemaining = PAIN_FRAMES_LENGTH;
    this.hp -= 1;
    if(this.hp <= 0){
      this.deathFramesUntilDisappear = DEATH_FRAMES_LENGTH
    }
  }

  getFrame() {

    if(this.hp <= 0){
      return TILES.CIABATTA_DEAD
    }
    if(this.painFramesRemaining > 0){
      return TILES.CIABATTA_PAIN
    }
    if (this.currentAttack?.type === ATTACKS.TACKLE) {
      return TILES.CIABATTA_TELEPORT;
    }
    if (this.currentAttack?.type === ATTACKS.SPAWN || this.movingPixelsRemaining > 0) {
      return TILES.CIABATTA1
    }
    return TILES.CIABATTA2
  }
  renderComponent() {
    return <CiabattaBody frameCoord={this.getFrame()} />
  }
}
