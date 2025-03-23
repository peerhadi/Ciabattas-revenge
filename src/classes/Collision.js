import { PLACEMENT_TYPE_CLOWN_DEFENSE_PICKUP, PLACEMENT_TYPE_CONVEYOR, PLACEMENT_TYPE_ICE, PLACEMENT_TYPE_ROAMING_ENEMY } from "@/helpers/consts";

export class Collision {
  constructor(forBody, level, position = null) {
    this.forBody = forBody;
    this.level = level;
    this.placementsAtPosition = [];
    this.x = position ? position.x : forBody.x
    this.y = position ? position.y : forBody.y;
    this.scanPlacementsAtPosition();
  }
  scanPlacementsAtPosition() {
    this.placementsAtPosition = this.level.placements.filter(p => {
      const isSelf = p.id === this.forBody.id;
      return !isSelf && p.x === this.x && p.y === this.y
    })
  }
  withSolidPlacement() {
    return this.placementsAtPosition.find(p => {
      return p.isSolidForBody(this.forBody)
    })
  }

  withPlacementAddsToInventory() {
    if (this.forBody.canCollectItems) {
      return this.placementsAtPosition.find(p => {
        return !p.hasBeenCollected && p.addsItemToInventoryOnCollide(this.forBody)
      })
    }
    return null
  }

  withLock() {
    return this.placementsAtPosition.find((p) => {
      return p.canBeUnlocked();
    })
  }
  withCompletesLevel() {
    if (this.forBody.canCompleteLevel) {
      return this.placementsAtPosition.find((p) => {
        return p.completesLevelOnCollide();
      })
    }
    return null
  }

  withSelfGetsDamaged() {
    return this.placementsAtPosition.find((p) => {
      return p.damagesBodyOnCollide(this.forBody)
    })
  }

  withChangesHeroSkin() {
    return this.placementsAtPosition.find((p) => {
      return p.changesHeroSkinOnCollide();
    })
  }

  withPlacementMovesBody() {
    if (this.forBody.interactsWithGround && this.forBody.type != 'CIABATTA') {
      return this.placementsAtPosition.find((p) => {
        return p.autoMovesBodyOnCollide(this.forBody);
      })
    }
    return null
  }
  withIceCorner() {
    return this.placementsAtPosition.find((p) => {
      return p.type === PLACEMENT_TYPE_ICE && p.corner
    })
  }

  withDoorSwitch() {
    return this.placementsAtPosition.find((p) => {
      return p.switchesDoorsOnCollide(this.forBody);
    })
  }

  withTeleport() {
    return this.placementsAtPosition.find((p) => {
      const teleportPos = p.teleportsToPositionOnCollide(this.forBody);
      return Boolean(teleportPos)
    })
  }

  withStealsInventory() {
    return this.placementsAtPosition.find((p) => {
      return p.stealsInventoryOnCollide(this.forBody)
    })
  }
}
