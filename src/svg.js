export class SVG{
  constructor(){
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 50;
    this.y2 = 0;
    this.width = 40;
    this.style = 'stroke:rgb(0,0,0);stroke-width:${width}';

    setInterval(() => {
      if(this.x1 < 250) {
        this.x1++;
        this.x2++;
      }
      else {
        this.x1 = 0;
        this.x2 = 50;
      }
    }, 33);
  }
}
