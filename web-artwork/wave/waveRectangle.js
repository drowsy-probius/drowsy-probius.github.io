import {Wave} from './wave.js';
import {Rectangle} from './rectangle.js';

export class WaveRectangle{
  constructor(color, points, recWidth=100, recHeight=30){
    this.wave = new Wave(color, points);
    this.boatPoint = Math.floor(points / 2);
    this.recWidth = recWidth;
    this.recHeight = recHeight;
    this.rectangle = new Rectangle(recWidth, recHeight);
  }

  resize(stageWidth, stageHeight){
    this.wave.resize(stageWidth, stageHeight);
    this.rectangle.resize();
  }

  draw(ctx){
    this.wave.draw(ctx);
    this.rectangle.draw(
      ctx, 
      this.wave.surfaceX[this.boatPoint], 
      this.wave.surfaceY[this.boatPoint],
      this.wave.gradient[this.boatPoint],
    );
  }
}