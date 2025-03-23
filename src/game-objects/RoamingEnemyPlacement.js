import Body from "@/components/object-graphics/Body"
import GroundEnemyPlacement from "./GroundEnemyPlacement"
import { TILES } from "@/helpers/tiles"
import { DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, PLACEMENT_TYPE_CLOWN_DEFENSE_PICKUP, PLACEMENT_TYPE_DEAD_CLOWN } from "@/helpers/consts";
import { Collision } from "@/classes/Collision";
import soundsManager, { SFX } from "@/classes/Sounds";

export class RoamingEnemyPlacement extends GroundEnemyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInInterval = 48;
    this.ticksUntilNextMove = this.tickBetweenMovesInInterval;
    this.turnsAroundAtWater = true;
    this.interactsWithGround= true;
  }
  onPostMove() {
    const collision = new Collision(this,this.level);
    if(collision.withPlacementMovesBody()){
      return;
    }

    const directions = [
      DIRECTION_UP,
      DIRECTION_DOWN,
      DIRECTION_LEFT,
      DIRECTION_RIGHT,
    ];

    this.movingPixelsDirection =
      directions[Math.floor(Math.random() * directions.length)]
  }
  handleEnemyCollideWithHero(){
    if(this.level.inventory.has(PLACEMENT_TYPE_CLOWN_DEFENSE_PICKUP)){
      this.level.addPlacement({
        type: PLACEMENT_TYPE_DEAD_CLOWN,
        x: this.x,
        y: this.y
      })
      this.level.deletePlacement(this);
      this.level.inventory.remove(PLACEMENT_TYPE_CLOWN_DEFENSE_PICKUP)
      soundsManager.playSfx(SFX.ICE)
      return;
    }
  }
  renderComponent() {
    return <Body frameCoord={TILES.ENEMY_ROAMING} yTranslate={this.getYTranslate(1)} showShadow={true}/>
  }
}
