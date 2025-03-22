import ElevatedSprite from "@/components/object-graphics/ElevatedSprite";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";
import { PLACEMENT_TYPE_FLOUR } from "@/helpers/consts";

export class FlourPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.canBeStolen = false;
    this.ticksBetweenInterval = 20;
    this.ticksUntilNextMove = this.ticksBetweenInterval;
    this.yTranslate = 1;
    this.direction = 1;
  }
  addsItemToInventoryOnCollide() {
    return PLACEMENT_TYPE_FLOUR;
  }
  zIndex() {
    return 2
  }
  
  renderComponent() {
    return <ElevatedSprite frameCoord={TILES.FLOUR} hover={true} />;
  }
}
