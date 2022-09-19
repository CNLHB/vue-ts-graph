import Handler from './Handler';
import Painter from './Painter';
import Storage from './Storage';
import { createCanvas } from './utils';
interface IGraph {
  root: HTMLDivElement;
}

export default class Graph {
  private canvas: HTMLCanvasElement;
  dom: HTMLElement;
  ctx: HTMLElement;
  public handler;
  public storage;
  public painter;
  _needsRefresh = false;
  _needsRefreshHover = false;
  id;
  constructor(opts: IGraph) {
    //  this.id = id;
    //  var self = this;
    //  var storage = new Storage();
    //  var rendererType = opts.renderer;
    //  // TODO WebGL
    //  if (useVML) {
    //      if (!painterCtors.vml) {
    //          throw new Error('You need to require \'zrender/vml/vml\' to support IE8');
    //      }
    //      rendererType = 'vml';
    //  }
    //  else if (!rendererType || !painterCtors[rendererType]) {
    //      rendererType = 'canvas';
    //  }
    //  var painter = new painterCtors[rendererType](dom, storage, opts, id);
    //  this.storage = storage;
    //  this.painter = painter;
    //  var handerProxy = (!env.node && !env.worker) ? new HandlerProxy(painter.getViewportRoot(), painter.root) : null;
    //  this.handler = new Handler(storage, painter, handerProxy, painter.root);
    const { root } = opts;
    this.dom = opts.root;
    this.painter = new Painter(root, 1, 1);
    this.storage = new Storage();
    this.handler = new Handler(this.storage, 1, 1, opts.root);
  }
  /**
   * 添加元素
   * @param  {module:/Element} el
   */
  add(el) {
    this.storage.addRoot(el);
    this._needsRefresh = true;
  }

  /**
   * 删除元素
   * @param  {module:/Element} el
   */
  remove(el) {
    this.storage.delRoot(el);
    this._needsRefresh = true;
  }
  /**
   * Refresh hover immediately
   */
  refreshHoverImmediately() {
    this._needsRefreshHover = false;
    this.painter.refreshHover && this.painter.refreshHover();
  }
  /**
   * Repaint the canvas immediately
   */
  refreshImmediately() {
    // var start = new Date();

    // Clear needsRefresh ahead to avoid something wrong happens in refresh
    // Or it will cause zrender refreshes again and again.
    this._needsRefresh = this._needsRefreshHover = false;
    this.painter.refresh();
    // Avoid trigger zr.refresh in Element#beforeUpdate hook
    this._needsRefresh = this._needsRefreshHover = false;

    // var end = new Date();
    // var log = document.getElementById('log');
    // if (log) {
    //     log.innerHTML = log.innerHTML + '<br>' + (end - start);
    // }
  }
  /**
   * Mark and repaint the canvas in the next frame of browser
   */
  refresh() {
    this._needsRefresh = true;
  }
  /**
   * Perform all refresh
   */
  flush() {
    var triggerRendered;

    if (this._needsRefresh) {
      triggerRendered = true;
      this.refreshImmediately();
    }
    if (this._needsRefreshHover) {
      triggerRendered = true;
      this.refreshHoverImmediately();
    }

    triggerRendered && this.trigger('rendered');
  }
  /**
   * Trigger event manually
   *
   * @param {string} eventName Event name
   * @param {event=} event Event object
   */
  trigger(eventName, event = {}) {
    this.handler.trigger(eventName, event);
  }
}
