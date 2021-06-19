import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector ,onSubmitCb) {
    super(popupSelector);
    this._onSubmitCb = onSubmitCb;

    this._formElement = this.popupElement.querySelector('.popup__form');
  }
  _getInputValues() {
    const result = {};
    const inputs = Array.from(this._formElement.querySelectorAll('.popup__item'));

    inputs.forEach(input => {
      result[input.name] = input.value;
    })
    return result;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault()
      const cardData = this._getInputValues();
      this._onSubmitCb(cardData);
    })
  }
}
