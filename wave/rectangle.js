export class Rectangle {
  constructor(width, height)
  {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.angle = 0;
  }

  resize(){
    
  }

  draw(ctx, x, y, gradient){
    ctx.save();
    // 이전 캔버스상태 저장

    ctx.beginPath();
    
    ctx.fillStyle = '#5c2500';

    ctx.translate(x+this.width/2, y - this.height/1.6);
    // 해당 직사각형 회전을 위해서 원점 이동
    this.angle = Math.atan(gradient) * 50 * Math.PI/180;
    // 적절한 값: 50을 곱해서 자연스러운 기울기 연출
    ctx.rotate(this.angle);
    // console.log(Math.atan(gradient), this.angle);
    ctx.fillRect(-this.width/2, 0, this.width, this.height);
    // 원점보다 너비/2만큼 왼쪽으로 이동해서 채우므로
    // 더 자연스러운 직사각형 움직임

    ctx.closePath();

    ctx.restore();
    // 이전 캔버스 상태로 돌아가기
  }
}