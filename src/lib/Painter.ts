import Layer from './Layer';
var HOVER_LAYER_ZLEVEL = 1e5;
var CANVAS_LEVEL = 314159;

var EL_AFTER_INCREMENTAL_INC = 0.01;
var INCREMENTAL_INC = 0.001;
function parseInt10(val) {
  return parseInt(val, 10);
}
function createRoot(width, height) {
  var domRoot = document.createElement('div');

  // domRoot.onselectstart = returnFalse; // Avoid page selected
  domRoot.style.cssText =
    [
      'position:relative',
      // IOS13 safari probably has a compositing bug (z order of the canvas and the consequent
      // dom does not act as expected) when some of the parent dom has
      // `-webkit-overflow-scrolling: touch;` and the webpage is longer than one screen and
      // the canvas is not at the top part of the page.
      // Check `https://bugs.webkit.org/show_bug.cgi?id=203681` for more details. We remove
      // this `overflow:hidden` to avoid the bug.
      // 'overflow:hidden',
      'width:' + width + 'px',
      'height:' + height + 'px',
      'padding:0',
      'margin:0',
      'border-width:0',
    ].join(';') + ';';

  return domRoot;
}
export default class Painter {
  type: string;
  dpr: any;
  root: any;
  _layers: any;
  storage: any;
  _levelList: any;
  _layerConfig: any;
  _width;
  private _height: any;
  private _domRoot: any;
  private _opts: any;
  private _backgroundColor: any;
  constructor(root, storage, opts) {
    this.type = 'canvas';
    /**
     * @type {number}
     */
    this.dpr = opts.devicePixelRatio || devicePixelRatio;
    /**
     * @type {boolean}
     * @private
     */
    /**
     * 绘图容器
     * @type {HTMLElement}
     */
    this.root = root;
    var rootStyle = root.style;
    this._opts = opts;
    if (rootStyle) {
      rootStyle['-webkit-tap-highlight-color'] = 'transparent';
      rootStyle['-webkit-user-select'] =
        rootStyle['user-select'] =
        rootStyle['-webkit-touch-callout'] =
          'none';

      root.innerHTML = '';
    }
    /**
     * @type {module:zrender/Storage}
     */
    this.storage = storage;

    /**
     * @type {Array.<number>}
     * @private
     */
    var levelList = (this._levelList = []);

    /**
     * @type {Object.<string, module:zrender/Layer>}
     * @private
     */
    var layers = (this._layers = {});

    /**
     * @type {Object.<string, Object>}
     * @private
     */
    this._layerConfig = {};
    var width = root.width;
    var height = root.height;

    if (opts.width != null) {
      width = opts.width;
    }
    if (opts.height != null) {
      height = opts.height;
    }
    this.dpr = opts.devicePixelRatio || 1;

    // Use canvas width and height directly
    root.width = width * this.dpr;
    root.height = height * this.dpr;

    this._width = width;
    this._height = height;
    this._width = this._getSize(0);
    this._height = this._getSize(1);

    var domRoot = (this._domRoot = createRoot(this._width, this._height));
    root.appendChild(domRoot);
    // Create layer if only one given canvas
    // Device can be specified to create a high dpi image.
    var mainLayer = new Layer('g_1', this, this.dpr);
    domRoot.appendChild(mainLayer.dom);
    mainLayer.initContext();
    // mainLayer.resize(width, height);
    layers[CANVAS_LEVEL] = mainLayer;
    // mainLayer.level = CANVAS_LEVEL;
    // Not use common level.
    levelList.push(CANVAS_LEVEL);
  }
  /**
   * @return {HTMLDivElement}
   */
  getViewportRoot() {
    return this._domRoot;
  }
  getViewportRootOffset() {
    var viewportRoot = this.getViewportRoot();
    if (viewportRoot) {
      return {
        offsetLeft: viewportRoot.offsetLeft || 0,
        offsetTop: viewportRoot.offsetTop || 0,
      };
    }
  }
  getWidth() {
    return this._width;
  }
  getHeight() {
    return this._height;
  }
  _getSize(whIdx) {
    var opts = this._opts;
    var wh = ['width', 'height'][whIdx];
    var cwh = ['clientWidth', 'clientHeight'][whIdx];
    var plt = ['paddingLeft', 'paddingTop'][whIdx];
    var prb = ['paddingRight', 'paddingBottom'][whIdx];

    if (opts[wh] != null && opts[wh] !== 'auto') {
      return parseFloat(opts[wh]);
    }

    var root = this.root;
    // IE8 does not support getComputedStyle, but it use VML.
    var stl = document.defaultView.getComputedStyle(root);

    return (
      ((root[cwh] || parseInt10(stl[wh]) || parseInt10(root.style[wh])) -
        (parseInt10(stl[plt]) || 0) -
        (parseInt10(stl[prb]) || 0)) |
      0
    );
  }
  refresh() {
    // var list = this.storage.getDisplayList(true);

    var levelList = this._levelList;

    // this._redrawId = Math.random();

    // this._paintList(list, paintAll, this._redrawId);

    // Paint custum layers
    for (var i = 0; i < levelList.length; i++) {
      var z = levelList[i];
      var layer = this._layers[z];
      if (layer.refresh) {
        var clearColor = i === 0 ? this._backgroundColor : null;
        layer.refresh(clearColor);
      }
    }

    this.refreshHover();

    return this;
  }
  refreshHover() {}
}
