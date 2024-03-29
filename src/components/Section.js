export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  rendererItems(items) {
    items.forEach((item) => this._renderer(item));
  }
  prependItem(element) {
    this._container.prepend(element);
  }
  addItem(element) {
    this._container.append(element);
  }
}
