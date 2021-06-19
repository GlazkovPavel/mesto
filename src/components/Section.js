export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;

    this._element = document.querySelector(containerSelector);
  }
  rendererAll(){
    this._items.forEach(cardData => {
      this.addItem(cardData)
    });
  }

  addItem(cardData) {
    this._element.prepend(this._renderer(cardData));
  }
}
