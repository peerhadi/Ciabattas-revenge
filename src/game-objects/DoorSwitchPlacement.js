import MemoizedSprite from "@/components/object-graphics/Sprite";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";

export class DoorSwitchPlacement extends Placement {
  switchesDoorsOnCollide(body){
    return body.interactsWithGround
  }
  renderComponent() {
    return <MemoizedSprite frameCoord={TILES.PURPLE_BUTTON} />
  }
}
