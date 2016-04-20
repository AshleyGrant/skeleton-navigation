import {bindable} from 'aurelia-framework';

export class SayHello {
  @bindable firstName;
  @bindable lastName;
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}