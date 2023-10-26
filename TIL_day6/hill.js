export class Hill {
  constructor(color, speed, total) {
    this.color = color;
    this.speed = speed;
    this.total = total;
  }
  /* Hill이라는 클래스를 생성하고, 클래스 구조에는 리사이즈 함수와 언덕을 캔버스에 그리는 draw 함수 존재. */

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.points = [];
    this.gap = Math.ceil(this.stageWidth / (this.total - 2));

    for (let i = 0; i < this.total; i++) {
      this.points[i] = {
        x: i * this.gap,
        y: this.getY() /* 좌표의 y값은 getY() 함수를 사용해서 랜덤으로 정의함. */,
      };
    }
  }
  /* 스테이지 사이즈를 파라미터로 받아오고, 포인트 배열을 생성해서 포인트를 저장함. 각 좌표의 x값은 토탈 포인트 개수 만큼 띄우고, 
  포인트 개수를 스테이지 넓이로 딱 맞게 나누지 않고, Total 개수에서 2 정도를 뺀 값, 좀 더 넓게 간격을 정의해서 스테이자보다 크게 그려지도록 설정함.
  -> 화면 밖에서부터 자연스럽게 걸어오는 양을 만들기 위함. */

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    let cur = this.points[0];
    let prev = cur;

    let dots = [];

    ctx.moveTo(cur.x, cur.y);

    let prevCx = cur.x;
    let prevCy = cur.y;

    for (let i = 1; i < this.points.length; i++) {
      cur = this.points[i];

      const cx = (prev.x + cur.x) / 2;
      const cy = (prev.y + cur.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);

      dots.push({
        x1: prevCx,
        y1: prevCy,
        x2: prev.x,
        y2: prev.y,
        x3: cx,
        y3: cy,
      });

      prev = cur;
      prevCx = cx;
      prevCy = cy;
    }
    ctx.lineTo(prev.x, prex.y);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();

    return dots;
  }
  /* 포인트 배열을 가져와서 quadraticCurveTo 함수로 곡선을 그림. 나중에 이 곡선의 좌표를 양의 좌표를 찾는데 써야 하므로 dots 라는 배열에 저장해둠. 
  그리고 return 값으로 넘겨줌.*/

  getY() {
    const min =
      this.stageHeight /
      8; /* 스테이지 높이를 8 정도로 나눈 값을 기준으로 랜덤하게 높이를 리턴하는 함수 생성. */
    const max = this.stageHeight - min;
    return min + Math.random() * max;
  }
  /* 언덕의 y 값을 랜덤으로 주기 위해서 getY()라는 함수 만듦. 
    -> 언덕은 하나가 아니라 여러 개의 다양한 언덕을 만들 수 있도록 색상과 속도, 언덕에 포인트 개수를 파라미터로 받아오게 설정함. */
}
