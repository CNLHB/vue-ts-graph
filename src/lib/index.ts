import Handler from './Handler';
import Storage from './Storage';
import { createCanvas } from './utils';

interface IGraph {
  root: HTMLDivElement;
}

export default class Graph {
  private canvas: HTMLCanvasElement;
  dom: HTMLElement;
  public handler;
  public storage;
  _needsRefresh = false;
  _needsRefreshHover = false;
  id;
  constructor(opts: IGraph) {
    this.dom = opts.root;
    this.canvas = createCanvas();
    this.dom.appendChild(this.canvas);
    this.storage = new Storage();
    this.handler = new Handler(this.storage, 1, 1, opts.root);
  }
}
