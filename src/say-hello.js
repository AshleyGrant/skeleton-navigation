import {bindable, customElement} from 'aurelia-framework';

@customElement('say-hello')
export class SayHello {
  @bindable firstName = '';
  @bindable lastName = '';
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}