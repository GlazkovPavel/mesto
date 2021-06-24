export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._element = document.querySelector(containerSelector);
  }
  rendererAll(items){
    items.forEach(cardData => {
      this.addItem(cardData)
    });
  }

  addItem(cardData) {
    this._element.prepend(this._renderer(cardData));
  }
}
