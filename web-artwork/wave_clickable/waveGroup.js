import {Wave} from './wave.js';

export class WaveGroup{
  constructor(color, number, points=6){
    this.centerColor = color;
    this.waves = [];
    this.numberOfWaves = number;
    this.numberOfPoints = points;

    for(let i=0; i<this.numberOfWaves; i++)
    {
      this.waves[i] = new Wave(this.centerColor, this.numberOfPoints);
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