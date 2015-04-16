import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('high')
@inject(Element)
export class High {
    constructor(element) {
       this.element = element;
   }

   valueChanged(newValue){
     console.log(newValue);
     if (newValue === true) {
       this.element.classList.remove('highlight-yellow');
     } else {
       this.element.classList.add('highlight-yellow');
     }
   }
}
