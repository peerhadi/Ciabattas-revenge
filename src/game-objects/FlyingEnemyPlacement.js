import { DIRECTION_LEFT } from "@/helpers/consts";
import GroundEnemyPlacement from "./GroundEnemyPlacement";
import { TILES } from "@/helpers/tiles";
import Body from "@/components/object-graphics/Body";

export class FlyingEnemyPlacement extends GroundEnemyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInInterval = 20;
    this.ticksUntilNextMove = this.tickBetweenMovesInInterval;
    this.turnsAroundAtWater = false;
    this.interactsWithGround = false;
  }

  renderComponent() {
    const frameCoord =
      this.spriteFacingDirection === DIRECTION_LEFT ?
        TILES.ENEMY_FLYING_LEFT :
        TILES.ENEMY_FLYING_RIGHT;

    return <Body frameCoord={frameCoord} yTranslate={-3} showShadow={true} />
  }
}
