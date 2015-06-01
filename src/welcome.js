import {computedFrom} from 'aurelia-framework';

export class Welcome{
  heading = 'Welcome to the Aurelia Navigation App!';
  previousValue = this.fullName;
  buildings = [{
      id: 1,
      name: "Building 1"
    },  {
      id: 2,
      name: "Building 2"
    },  {
      id: 3,
      name: "Building 3"
    }
  ];

  buildingId = 2;
  count = 0;

  filter() {
    this.count++;
  }


  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get filterCount(){
    return `filter() called ${this.count} times`;
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
