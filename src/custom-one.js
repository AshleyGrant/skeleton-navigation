import {Behavior} from 'aurelia-framework';

export class CustomOne {
  static metadata(){ return Behavior.withProperty('value').and(x => x.bindingIsTwoWay()); }

  constructor() {
    this.items = [];
  }

  valueChanged(value) {
    this.value = value;
  }

  addChild() {
    this.items.push(this.items.length);
  }
}
