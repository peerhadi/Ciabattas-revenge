import { Z_INDEX_LAYER_SIZE } from "@/helpers/consts";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";
import MemoizedSprite from "@/components/object-graphics/Sprite";

export class CelebrationPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level)
    this.frame = 1;
  }

  tick() {
    if (this.frame <= 8) {
      this.frame += 0.5
      return;
    }

    this.level.deletePlacement(this)
  }

  zIndex() {
    return this.y * Z_INDEX_LAYER_SIZE + 2
  }

  renderComponent() {
    const frameCoord = `PARTICLE_${Math.ceil(this.frame)}`
    return <MemoizedSprite frameCoord={TILES[frameCoord]} />
  }
}
