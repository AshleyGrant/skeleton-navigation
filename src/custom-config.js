import {inject, dynamicOptions, Optional} from 'aurelia-framework';
import {SayHello} from "./say-hello-one";

@dynamicOptions
@inject(Optional.of(SayHello))
export class CustomConfigCustomAttribute {
  constructor(sayHello) {
    if( sayHello !== null ) {
      this.elementVM = sayHello;
    }
    else {
      throw new Error( 'Invalid Element. Must use say-hello.');
    }
  }

  bind(bindingContext) {
    console.log(bindingContext);
  }

  propertyChanged(name, value) {
    this.elementVM[name] = value;
  }
}