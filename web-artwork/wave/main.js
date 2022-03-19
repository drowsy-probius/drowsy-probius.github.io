import {WaveGroup} from './waveGroup.js';

class App {
  constructor(){
    this.canvas = document.createElement('canvas');

    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), {
      once: false,
      passive: false,
      capture: false,
    });
    
    this.wave = new WaveGroup('#42bff530', 3);
    this.resize();
    requestAnimationFrame(this.animate.bind(this));
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);

    this.wave.resize(this.stageWidth, this.stageHeight);
  }

  animate(t){
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.ctx.fillStyle = "#00181f";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.wave.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};