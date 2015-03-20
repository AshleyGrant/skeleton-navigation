import {Behavior} from 'aurelia-framework';

export class Slave {
  static metadata(){
    return Behavior.withProperty('subtitle').and(x => x.bindingIsTwoWay())
                   .withProperty('compareString')
                   .withProperty('number');
  }

  constructor() {
    this.compareString = 'I\'m awesome';
  }
}
