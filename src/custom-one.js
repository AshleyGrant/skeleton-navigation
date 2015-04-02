import {Behavior} from 'aurelia-framework';

export class CustomOne {
  static metadata(){ return Behavior.withProperty('value').and(x => x.bindingIsTwoWay()); }

  valueChanged(value) {
    this.value = value;
  }

  toggleValue() {
    this.value = this.value !== true;
  }
}
