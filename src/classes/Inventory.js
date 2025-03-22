export class Inventory {
  constructor() {
    this.inventoryMap = new Map();
  }

  has(key) {
    return Boolean(this.inventoryMap.has(key))
  }

  add(key) {
    if (!key) {
      console.warn("WARNING! TRYING TO ADD FALSY KEY TO INVENTORY", key);
      return
    }
    this.inventoryMap.set(key, true)
  }

  clear(){
    this.inventoryMap = new Map();
  }
}
