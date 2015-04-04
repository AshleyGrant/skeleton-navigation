export class SVG{
  constructor(){
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 50;
    this.y2 = 0;
    this.width = 40;
    this.style = 'stroke:rgb(0,0,0);stroke-width:${width}';

    let goForward = true;

    setInterval(() => {
      if(goForward === true) {
        if(this.x1 < 250) {
          this.x1++;
          this.x2++;
        }
        else {
          goForward = false;
        }
      }
      else {
        if( this.x1 > 0 ) {
          this.x1--;
          this.x2--;
        }
        else {
          goForward = true;
        }
      }
    }, 33);
  }
}
