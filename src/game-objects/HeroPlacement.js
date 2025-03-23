import Body from "@/components/object-graphics/Body";
import { BODY_SKINS, DIRECTION_LEFT, HERO_RUN_1, HERO_RUN_2, Z_INDEX_LAYER_SIZE } from "@/helpers/consts";
import { TILES } from "@/helpers/tiles";
import { BodyPlacement } from "./BodyPlacement";

const heroSkinMap = {
  [BODY_SKINS.NORMAL]: [TILES.HERO_LEFT, TILES.HERO_RIGHT],
  [BODY_SKINS.WATER]: [TILES.HERO_WATER_LEFT, TILES.HERO_WATER_RIGHT],
  [BODY_SKINS.DEATH]: [TILES.HERO_DEATH_LEFT, TILES.HERO_DEATH_RIGHT],
  [BODY_SKINS.SCARED]: [TILES.HERO_DEATH_LEFT, TILES.HERO_DEATH_RIGHT],
  [BODY_SKINS.FIRE]: [TILES.HERO_FIRE_LEFT, TILES.HERO_FIRE_RIGHT],
  [BODY_SKINS.ICE]: [TILES.HERO_ICE_LEFT, TILES.HERO_ICE_RIGHT],
  [BODY_SKINS.CONVEYOR]: [TILES.HERO_CONVEYOR_LEFT, TILES.HERO_CONVEYOR_RIGHT],
  [BODY_SKINS.TELEPORT]: [TILES.HERO_TELEPORT_LEFT, TILES.HERO_TELEPORT_RIGHT],
  [HERO_RUN_1]: [TILES.HERO_RUN_1_LEFT, TILES.HERO_RUN_1_RIGHT],
  [HERO_RUN_2]: [TILES.HERO_RUN_2_LEFT, TILES.HERO_RUN_2_RIGHT]
}

export class HeroPlacement extends BodyPlacement {
  constructor(properties, level) {
    super(properties, level);

    this.canCollectItems = true;
    this.canCompleteLevel = true;
    this.interactsWithGround = true;
  }
  controllerMoveRequested(direction) {
    if (this.movingPixelsRemaining > 0) {
      return;
    }

    const possibleLock = this.getLockAtNetPosition(direction);
    if (possibleLock) {
      possibleLock.unlock()
      return
    }
    if (this.isSolidAtNextPosition(direction)) {
      return;
    }

    if (this.skin === BODY_SKINS.WATER) {

      const collision = this.getCollisionAtNextPosition(direction);
      if (!collision.withChangesHeroSkin()) {
        this.skin = BODY_SKINS.NORMAL
      }
    }

    this.movingPixelsRemaining = 16;
    this.movingPixelsDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFrame()
  }

  takesDamage(deathType) {
    return this.level.setDeathOutcome(deathType)
  }

  getFrame() {
    const index = this.spriteFacingDirection === DIRECTION_LEFT ? 0 : 1;

    if (this.level.deathOutcome) {
      return heroSkinMap[BODY_SKINS.DEATH][index]
    }

    if (this.movingPixelsRemaining > 0 && this.skin === BODY_SKINS.NORMAL) {
      const walkKey = this.spriteWalkFrame === 0 ? HERO_RUN_1 : HERO_RUN_2;
      return heroSkinMap[walkKey][index]
    }
    return heroSkinMap[this.skin][index]
  }
  onAutoMovement(direction) {
    this.controllerMoveRequested(direction)
  }
  zIndex() {
    return this.y * Z_INDEX_LAYER_SIZE + 1;
  }

  renderComponent() {
    const shouldShowShadow = this.skin !== BODY_SKINS.WATER;
    return <Body frameCoord={this.getFrame()} yTranslate={this.getYTranslate()} showShadow={shouldShowShadow} />
  }


}
