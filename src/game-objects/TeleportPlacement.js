import MemoizedSprite from "@/components/object-graphics/Sprite";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";
import { BODY_SKINS, PLACEMENT_TYPE_TELEPORT } from "@/helpers/consts";

export class TeleportPlacement extends Placement {
  changesHeroSkinOnCollide() {
    return BODY_SKINS.TELEPORT
  }
  teleportsToPositionOnCollide(body) {
    if (body.interactsWithGround) {
      const allTeleports = this.level.placements.filter((p) => {
        return p.type === PLACEMENT_TYPE_TELEPORT
      });

      if (allTeleports.length > 1) {
        const myIndex = allTeleports.findIndex(p => p.id === this.id);
        const next = allTeleports[myIndex + 1] ?? allTeleports[0];
        return {
          x: next.x,
          y: next.y
        }
      }
    }
    return null
  }
  renderComponent() {
    return <MemoizedSprite frameCoord={TILES.TELEPORT1} />
  }
}
