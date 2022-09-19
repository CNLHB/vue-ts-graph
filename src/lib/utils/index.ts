export const createCanvas = function () {
  return document.createElement('canvas');
};

/**
 * 创建dom
 *
 * @inner
 * @param {string} id dom id 待用
 * @param {Painter} painter painter instance
 * @param {number} number
 */
export function createDom(id, painter, dpr) {
  var newDom = createCanvas();
  var width = painter.getWidth();
  var height = painter.getHeight();

  var newDomStyle: any = newDom.style;
  if (newDomStyle) {
    // In node or some other non-browser environment
    newDomStyle.position = 'absolute';
    newDomStyle.left = 0;
    newDomStyle.top = 0;
    newDomStyle.width = width + 'px';
    newDomStyle.height = height + 'px';

    newDom.setAttribute('data-g-dom-id', id);
  }

  newDom.width = width * dpr;
  newDom.height = height * dpr;

  return newDom;
}
