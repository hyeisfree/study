import { Hill } from "./hill.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(
      this.canvas
    ); /* 캔버스를 생성하고 body에 추가함. */

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize(); /* 스크린 사이즈를 가져오기 위해서 리사이즈이벤트를 걸어줌. */

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(
      2,
      2
    ); /* 리사이즈 이벤트에는 캔버스의 사이즈를 두 배로 해줌. -> 레티나 디스플레이에서도 선명하게 보이도록 설정. */

    for (let i = 0; i < this.hills.length; i++) {
      this.hills[i].resize(this.stageWidth, this.stageHeight);
    }
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(
      0,
      0,
      this.stageWidth,
      this.stageHeight
    ); /* requestAnimationFrame()을 걸어주고, 캔버스를 꺠끗하게 지워주는 코드를 추가. */

    let dots;
    for (let i = 0; i < this.hills.length; i++) {
      dots = this.hills[i].draw(this.ctx);
    }
  }
}

window.onload = () => {
  new App();
};
