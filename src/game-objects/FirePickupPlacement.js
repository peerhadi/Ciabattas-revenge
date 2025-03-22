import MemoizedSprite from "@/components/object-graphics/Sprite";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";

export class FirePickupPlacement extends Placement {
  addsItemToInventoryOnCollide(){
    return this.type
  }
  renderComponent() {
    return <MemoizedSprite frameCoord={TILES.FIRE_PICKUP} />
  }
}
