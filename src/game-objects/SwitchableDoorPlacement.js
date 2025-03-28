import MemoizedSprite from "@/components/object-graphics/Sprite";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";

export class SwitchableDoorPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.isRaised = properties.isRaised ?? false;
  }
  
  toggleIsRaised(){
    this.isRaised = !this.isRaised;
  }

  isSolidForBody() {
    return this.isRaised;
  }
  renderComponent() {
    const frameCoord = this.isRaised ? TILES.PURPLE_DOOR_SOLID : TILES.PURPLE_DOOR_OUTLINE
    return <MemoizedSprite frameCoord={frameCoord} />
  }
}
