export class Point {
  constructor(index, x, y){
    this.x = x;
    this.y = y;

    this.filedY = y;
    this.speed = 0.05;
    this.cur = index;
    this.max = Math.random() * 100;

  }

  update(){
    this.cur += this.speed;
    this.y = this.filedY + Math.sin(this.cur) * this.max;
  }
}