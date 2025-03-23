import { Placement } from "./Placement";
import { BODY_SKINS, DIRECTION_LEFT, DIRECTION_RIGHT, directionUpdateMap, PLACEMENT_TYPE_CELEBRATION, PLACEMENT_TYPE_ICE, Z_INDEX_LAYER_SIZE } from "@/helpers/consts";
import { Collision } from "@/classes/Collision";
import soundsManager, { SFX } from "@/classes/Sounds";
export class BodyPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level)
  }
  updateFacingDirection() {
    if (this.movingPixelsDirection === DIRECTION_LEFT || this.movingPixelsDirection === DIRECTION_RIGHT) {
      this.spriteFacingDirection = this.movingPixelsDirection
    }
  }

  getCollisionAtNextPosition(direction) {
    const { x, y } = directionUpdateMap[direction];
    const nextX = this.x + x;
    const nextY = this.y + y;

    return new Collision(this, this.level, {
      x: nextX,
      y: nextY
    })
  }

  getLockAtNetPosition(direction) {
    const collision = this.getCollisionAtNextPosition(direction);
    return collision.withLock()
  }

  isSolidAtNextPosition(direction) {
    const onIceCorner = new Collision(this, this.level).withIceCorner()
    if (onIceCorner?.blocksMovementDirection(direction)) {
      return true;
    }
    const collision = this.getCollisionAtNextPosition(direction);
    const isOutOfBounds = this.level.isPositionOutOfBounds(
      collision.x,
      collision.y,
    )
    if (isOutOfBounds) {
      return true;
    }

    return Boolean(collision.withSolidPlacement())
  }

  updateWalkFrame() {
    this.spriteWalkFrame = this.spriteWalkFrame === 1 ? 0 : 1
  }

  tick() {
    this.tickMovingPixelProgress();
    this.tickAttemptAiMove();
  }
  handleEnemyCollideWithHero() {
    return null
  }
  tickMovingPixelProgress() {

    if (this.movingPixelsRemaining === 0) {
      return;
    }
    this.movingPixelsRemaining -= this.travelPixelPerFrame;


    if (this.movingPixelsRemaining <= 0) {
      this.movingPixelsRemaining = 0;
      this.onDoneMoving();
    }
  }

  onDoneMoving() {
    const { x, y } = directionUpdateMap[this.movingPixelsDirection];
    this.x += x;
    this.y += y;
    this.handleCollisions()
    this.onPostMove()
  }

  onPostMove() {
    return null
  }

  onAutoMovement(_direction) {
    return null
  }

  handleCollisions() {
    const collision = new Collision(this, this.level);

    this.skin = BODY_SKINS.NORMAL;
    const changesHeroSkin = collision.withChangesHeroSkin();
    if (changesHeroSkin) {
      this.skin = changesHeroSkin.changesHeroSkinOnCollide();
    }

    const collideThatAddsToInventory = collision.withPlacementAddsToInventory();

    if (collideThatAddsToInventory) {
      collideThatAddsToInventory.collect();
      this.level.addPlacement({
        type: PLACEMENT_TYPE_CELEBRATION,
        x: this.x,
        y: this.y,
      })
      soundsManager.playSfx(SFX.COLLECT);
    }

    const autoMovePlacement = collision.withPlacementMovesBody();
    if (autoMovePlacement) {
      if (autoMovePlacement.type === PLACEMENT_TYPE_ICE) {
        soundsManager.playSfx('ICE')
      }
      this.onAutoMovement(autoMovePlacement.autoMovesBodyOnCollide(this))
    }

    if (collision.withDoorSwitch()) {
      this.level.switchAllDoors();
    }

    if (collision.withStealsInventory()) {
      soundsManager.playSfx('THUMP')
      this.level.stealInventory();
    }

    const teleport = collision.withTeleport();
    if (teleport) {
      const pos = teleport.teleportsToPositionOnCollide(this);
      this.x = pos.x;
      this.y = pos.y;
      soundsManager.playSfx(SFX.TELEPORT);
    }

    const takesDamages = collision.withSelfGetsDamaged();
    if (takesDamages) {
      this.takesDamage(takesDamages.type)
    }

    const completesLevel = collision.withCompletesLevel();
    if (completesLevel) {
      this.level.completeLevel();
      soundsManager.playSfx(SFX.WIN)
    }
  }

  takesDamage() {
    return null
  }


  getYTranslate(PIXELS_TO_JUMP = 0) {
    if (this.movingPixelsRemaining === 0 || this.skin !== BODY_SKINS.NORMAL) {
      return PIXELS_TO_JUMP
    }
    const PIXELS_FROM_END = 2;
    if (
      this.movingPixelsRemaining < PIXELS_FROM_END ||
      this.movingPixelsRemaining > 16 - PIXELS_FROM_END
    )
      return -1
  }

  zIndex() {
    return this.y * Z_INDEX_LAYER_SIZE
  }
}
