import MemoizedSprite from "@/components/object-graphics/Sprite";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";
import { PLACEMENT_TYPE_FLOUR } from "@/helpers/consts";

export class GoalPlacement extends Placement {
  get isDisabled(){
    const nonCollectedFlour = this.level.placements.find(p => {
      return p.type === PLACEMENT_TYPE_FLOUR && !p.hasBeenCollected;
    })
    return Boolean(nonCollectedFlour)
  }
 
  completesLevelOnCollide(){
    return !this.isDisabled
  }

  renderComponent(){
    return <MemoizedSprite frameCoord={this.isDisabled ? TILES.GOAL_DISABLED : TILES.GOAL_ENABLED}/>
  }
}
