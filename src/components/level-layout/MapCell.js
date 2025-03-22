import { CELL_SIZE } from "@/helpers/consts";
import MemoizedSprite from "../object-graphics/Sprite";

export default function MapCell({ x, y, frameCoord }) {
  return (
    <div style={{
      position: 'absolute',
      left: x * CELL_SIZE,
      top: y * CELL_SIZE,
        width: 16,
        height: 16
    }}>
      <MemoizedSprite frameCoord={frameCoord} />
    </div>
  )
}
