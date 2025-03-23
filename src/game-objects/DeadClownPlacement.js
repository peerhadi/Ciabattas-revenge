import { Z_INDEX_LAYER_SIZE } from "@/helpers/consts";
import { Placement } from "./Placement";
import MemoizedSprite from "@/components/object-graphics/Sprite";
import { TILES } from "@/helpers/tiles";

const ANIMATION_SPEED = 4;

export class DeadClownPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.frame = 1;
    this.waitUntilNextFrame = ANIMATION_SPEED;
  }
  tick() {
    if (this.waitUntilNextFrame > 0) {
      this.waitUntilNextFrame -= 1;
      return;
    }

    if (this.frame <= 4) {
      this.frame += 1;
      this.waitUntilNextFrame = ANIMATION_SPEED
    } else {
      this.level.deletePlacement(this)
    }
  }

  getZIndex() {
    return this.y * Z_INDEX_LAYER_SIZE + 2;
  }

  renderComponent() {
    const frameCoord = `DEAD_CLOWN_${this.frame}`;
    return (
      <div
        style={{
          position: 'relative',
          left: '-7px',
          top: '-17px'
        }}> <MemoizedSprite frameCoord={TILES[frameCoord]} size={32} />

      </div >
    )
  }
}
