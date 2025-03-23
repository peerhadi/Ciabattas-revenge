import { DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, PLACEMENT_TYPE_CLOWN_DEFENSE_PICKUP } from "@/helpers/consts";
import { TILES } from "@/helpers/tiles";
import Body from "@/components/object-graphics/Body";
import { BodyPlacement } from "./BodyPlacement";

export default class GroundEnemyPlacement extends BodyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInInterval = 28;
    this.ticksUntilNextMove = this.tickBetweenMovesInInterval;
    this.turnsAroundAtWater = true;
    this.interactsWithGround = true;
    this.movingPixelsDirection = properties.initialDirection ?? DIRECTION_RIGHT;
  }
  tickAttemptAiMove() {
    this.checkForOverlapWithHero();

    if (this.ticksUntilNextMove > 0) {
      this.ticksUntilNextMove -= 1;
      return;
    }
    this.internalMoveRequested(this.movingPixelsDirection)
  }

  checkForOverlapWithHero() {
    const [myX, myY] = this.displayXY();
    const [heroX, heroY] = this.level.heroRef.displayXY();
    const xDiff = Math.abs(myX - heroX)
    const yDiff = Math.abs(myY - heroY)
    if (xDiff <= 2 && yDiff <= 2) {
      if (this.type === 'ROAMING_ENEMY') {
        if (this.level.inventory.has(PLACEMENT_TYPE_CLOWN_DEFENSE_PICKUP)) {
          if(xDiff === 0 && yDiff === 0){
            this.handleEnemyCollideWithHero()
          }
          return;
        }
      }
      this.level.setDeathOutcome(this.type)
    }
  }

  internalMoveRequested(direction) {
    if (this.movingPixelsRemaining > 0) {
      return;
    }

    if (this.isSolidAtNextPosition(direction)) {
      this.switchDirection()
      return;
    }

    this.ticksUntilNextMove = this.tickBetweenMovesInInterval
    this.movingPixelsRemaining = 16;
    this.movingPixelsDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFrame()
  }

  onAutoMovement(direction) {
    this.internalMoveRequested(direction)
  }

  switchDirection() {
    if (this.type === "ROAMING_ENEMY") {
      const directions = [DIRECTION_UP, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT];
      const availableDirections = directions.filter(dir => !this.isSolidAtNextPosition(dir));


      if (availableDirections.length > 0) {
        this.movingPixelsDirection = availableDirections[Math.floor(Math.random() * availableDirections.length)];
      }
    } else {
      const currentDir = this.movingPixelsDirection;
      if (currentDir === DIRECTION_LEFT || currentDir === DIRECTION_RIGHT) {
        this.movingPixelsDirection = currentDir === DIRECTION_LEFT
          ? DIRECTION_RIGHT
          : DIRECTION_LEFT
        return
      }
      this.movingPixelsDirection = currentDir === DIRECTION_UP
        ? DIRECTION_DOWN
        : DIRECTION_UP
    }
  }

  renderComponent() {
    const frameCoord =
      this.spriteFacingDirection === DIRECTION_LEFT
        ? TILES.ENEMY_LEFT
        : TILES.ENEMY_RIGHT
    return <Body frameCoord={frameCoord} yTranslate={this.getYTranslate()} showShadow={true} />
  }
}
