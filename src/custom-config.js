import {inject, dynamicOptions} from 'aurelia-framework';

@dynamicOptions
@inject(Element)
export class CustomConfigCustomAttribute {
  constructor(element) {
    if( typeof(element.au.controller) === "object" && typeof(element.au.controller.viewModel) === "object") {
      this.isCustomElement = true;
      this.elementVM = element.au.controller.viewModel;
    }
    else {
      this.isCustomElement = false;
      this.element = element;
    }
  }
  
  propertyChanged(name, value) {
    if(this.isCustomElement === true ) {
      this.elementVM[name] = value;      
    }
    else {
      this.element.setAttribute(name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase(), value);
    }
  }
}