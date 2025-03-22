import MemoizedSprite from "@/components/object-graphics/Sprite";
import { Placement } from "./Placement";
import { THEME_TILES_MAP } from "@/helpers/consts";

export class WallPlacement extends Placement {
  isSolidForBody(_body){
    return true;
  }
  renderComponent(){
    const wallTileCoord = THEME_TILES_MAP[this.level.theme].WALL;
    return <MemoizedSprite frameCoord={wallTileCoord}/>
  }
}
