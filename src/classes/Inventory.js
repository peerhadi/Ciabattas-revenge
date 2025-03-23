export class Inventory {
  constructor() {
    this.inventoryMap = new Map();
  }

  has(key) {
    return Boolean(this.inventoryMap.get(key))
  }
  remove(key) {
    if (!key) {
      console.warn("WARNING! TRYING TO REMOVE FALSY KEY TO INVENTORY", key);
      return
    }
    this.inventoryMap.set(key, false)
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
