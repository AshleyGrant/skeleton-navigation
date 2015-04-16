
export class Welcome{
  constructor() {
    let items = [];

    for(let i = 0; i < 5; i++) {
      items.push(new Item());
    }

    this.items = items;
  }
}

class Item {
  constructor(enabled) {
    this.enabled = false;
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
  }
}
