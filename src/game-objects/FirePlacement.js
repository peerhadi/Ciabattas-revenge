import MemoizedSprite from "@/components/object-graphics/Sprite";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";
import { BODY_SKINS, PLACEMENT_TYPE_CIABATTA, PLACEMENT_TYPE_FIRE_PICKUP, PLACEMENT_TYPE_HERO } from "@/helpers/consts";

export class FirePlacement extends Placement {
  damagesBodyOnCollide(body) {
    const { inventory } = this.level
    if (body.type === PLACEMENT_TYPE_HERO &&
      !inventory.has(PLACEMENT_TYPE_FIRE_PICKUP)){
      return this.type
    }
    if(body.type === PLACEMENT_TYPE_CIABATTA){
      return this.type
    }
    return null

  }
  changesHeroSkinOnCollide(){
    return BODY_SKINS.FIRE
  }
  renderComponent() {
    const fireFrame = this.level.animatedFrames.fireFrame;
    return <MemoizedSprite frameCoord={fireFrame} />
  }
}
