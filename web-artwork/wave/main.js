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
    
    this.wave = new WaveGroup('#42bff530', 5, 7);
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
    this.set_stars();
  }

  animate(t){
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.draw_background();
    this.draw_moon();
    this.draw_stars();

    this.wave.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  draw_background()
  {
    this.ctx.fillStyle = "#00181f";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw_moon()
  {
    this.ctx.save();
    let moon = new Image();
    moon.src = "https://www.svgrepo.com/show/45926/moon-phases.svg";
    this.ctx.translate(this.canvas.width/100, this.canvas.height/200);
    this.ctx.rotate(25 * Math.PI/180);
    this.ctx.drawImage(moon, this.canvas.width/70, 0, 100, 100);
    this.ctx.restore();
  }

  set_stars(numOfStars=500)
  {
    this.numOfStars = numOfStars;
    this.starsX = [];
    this.starsY = [];

    console.log(this.canvas.width/1.5, this.canvas.height/1.5);
    for(let i=0; i<this.numOfStars; i++)
    {
      this.starsX[i] = Math.floor(Math.random() * this.canvas.width);
      this.starsY[i] = Math.floor(Math.random() * (this.canvas.height/1.5));
    }
    console.log(this.starsX, this.starsY);
  }

  draw_stars()
  {
    this.ctx.save();
    this.ctx.fillStyle = "#bfb900";
    for(let i=0; i<this.numOfStars; i++)
    {
      this.ctx.fillRect(this.starsX[i], this.starsY[i], 1.5, 1.5);
    }
    this.ctx.restore();
  }

}

window.onload = () => {
  var before = performance.now();
  new App();
  var after = performance.now();
  console.log("canves rendering took " + (after - before) + "ms to execute.");
};