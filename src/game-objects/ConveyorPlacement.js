import MemoizedSprite from "@/components/object-graphics/Sprite"
import { Placement } from "./Placement"
import { TILES } from "@/helpers/tiles"
import { BODY_SKINS, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP } from "@/helpers/consts"
const directionFrameMap = {
  [DIRECTION_LEFT]: TILES.CONVEYOR_LEFT,
  [DIRECTION_RIGHT]: TILES.CONVEYOR_RIGHT,
  [DIRECTION_UP]: TILES.CONVEYOR_UP,
  [DIRECTION_DOWN]: TILES.CONVEYOR_DOWN
}

export class ConveyorPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.direction = properties.direction
  }
  autoMovesBodyOnCollide(){
    return this.direction;
  }
  changesHeroSkinOnCollide() {
    return BODY_SKINS.CONVEYOR
  }
  renderComponent() {
    return <MemoizedSprite frameCoord={directionFrameMap[this.direction]} />
  }
}
