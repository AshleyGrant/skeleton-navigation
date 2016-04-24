import {bindable, customElement} from 'aurelia-framework';

@customElement('say-hello-two')
export class SayHello {
  @bindable firstName = '';
  @bindable lastName = '';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}