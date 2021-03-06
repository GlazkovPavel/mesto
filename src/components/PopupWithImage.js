import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPreviewImg = this.popupElement.querySelector('.popup__preview-img');
    this._popupPreviewTitle = this.popupElement.querySelector('.popup__preview-subtitle');
  }
    open(data) {
      this._popupPreviewImg.src = data.link;
      this._popupPreviewImg.alt = data.name;
      this._popupPreviewTitle.textContent = data.name;
      super.open()
    }
}
