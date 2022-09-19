import { createDom } from './utils';

export default class Layer {
  level;
  ctx: any;
  dom: any;
  dpr: any;
  constructor(id, painter, dpr) {
    var dom;
    dpr = dpr || devicePixelRatio;
    if (typeof id === 'string') {
      dom = createDom(id, painter, dpr);
    }
    this.dom = dom;
    this.dpr = dpr;
  }
  initContext() {
    this.ctx = this.dom.getContext('2d');
    this.ctx.dpr = this.dpr;
  }
}
