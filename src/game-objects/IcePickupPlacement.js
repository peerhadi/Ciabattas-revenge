import MemoizedSprite from "@/components/object-graphics/Sprite";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";

export class IcePickupPlacement extends Placement {
  addsItemToInventoryOnCollide(){
    return this.type
  }
  renderComponent() {
    return <MemoizedSprite frameCoord={TILES.ICE_PICKUP} />
  }
}
