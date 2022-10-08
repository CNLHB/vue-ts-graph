import { createDom } from './utils';
interface IWh extends WheelEvent {
  wheelDelta: number;
}
export default class Layer {
  level;
  ctx: any;
  dom: HTMLCanvasElement;
  dpr: any;
  painter: any;
  zoom = 1;
  constructor(id, painter, dpr) {
    var dom;
    dpr = dpr || devicePixelRatio;
    if (typeof id === 'string') {
      dom = createDom(id, painter, dpr);
    }
    this.dom = dom;
    this.dpr = dpr;
    this.painter = painter;
    window.addEventListener('wheelDelta', (event: IWh) => {
      let wheelDelta = event.wheelDelta || event.detail;
      console.log('wheelDelta', wheelDelta);
      if (event.wheelDelta < 0) {
        this.zoom -= 0.1;
      } else {
        this.zoom += 0.1;
      }
      this.refresh();
    });
  }
  initContext() {
    this.ctx = this.dom.getContext('2d');
    this.ctx.dpr = this.dpr;
  }
  refresh() {
    const ctx: CanvasRenderingContext2D = this.ctx;
    ctx.fillRect(0, 0, 100, 100);
    const w = this.painter.getWidth();
    const h = this.painter.getHeight();
    let l = 10 * this.zoom;
    console.log(l, this.zoom);

    let count = 0;
    ctx.fillStyle = 'red';
    while (count < w) {
      ctx.fillRect(count, 0, 1, 10);
      ctx.fillRect(0, count, 10, 1);
      count += l;
    }
  }
}
