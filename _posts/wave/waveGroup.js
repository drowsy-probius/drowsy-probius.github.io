import {Wave} from './wave.js';
import {WaveRectangle} from './waveRectangle.js';

export class WaveGroup{
  constructor(color, number=7, points=7){
    this.centerColor = color;
    this.waves = [];
    this.numberOfWaves = number;
    this.numberOfPoints = points;
    this.boatWaveIdx = Math.floor(number/2);

    for(let i=0; i<this.numberOfWaves; i++)
    {
      if(i == this.boatWaveIdx)
      {
        this.waves[i] = new WaveRectangle(this.centerColor, this.numberOfPoints);
      }
      else
      {
        this.waves[i] = new Wave(this.centerColor, this.numberOfPoints);
      }
    }
  }

  resize(stageWidth, stageHeight)
  {
    for(let i=0; i<this.numberOfWaves; i++)
    {
      this.waves[i].resize(stageWidth, stageHeight);
    }
  }

  draw(ctx)
  {
    for(let i=0; i<this.numberOfWaves; i++)
    {
      this.waves[i].draw(ctx);
    }
  }
}