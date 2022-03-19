import {Point} from './point.js'

export class Wave {
  constructor(color, points){
    this.color = color;
    this.points = [];
    this.surfaceX = [];
    this.surfaceY = [];
    this.gradient = [];
    this.numberOfPoints = points;
  }

  resize(stageWidth, stageHeight){
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 1.5;
    this.centerY = stageHeight / 1.5;

    this.pointGap = this.stageWidth / (this.numberOfPoints - 1);

    this.init();
  }

  init(){
    for(let i=0; i<this.numberOfPoints; i++)
    {
      this.points[i] = new Point(i, this.pointGap * i, this.centerY);
    }
  }


  draw(ctx){
    ctx.beginPath();
    
    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for(let i=0; i<this.numberOfPoints; i++)
    {
      let cx = (prevX + this.points[i].x) / 2;
      let cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);
      prevX = this.points[i].x;
      prevY = this.points[i].y;
      
      this.gradient[i] = (cy - prevY) / (cx - prevX);
      this.surfaceX[i] = cx;
      this.surfaceY[i] = cy;

      if(i != 0 && i != this.numberOfPoints-1)
      {
        this.points[i].update();
      }
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(0, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.points[0].y);

    ctx.fillStyle = this.color;
    ctx.fill();
    // ctx.stroke(); // 윤곽선 칠하기
    ctx.closePath();
  }
}