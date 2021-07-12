import Popup from './Popup.js';

export default class popupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this.popupElement.querySelector('.popup__form');
  }

  setSubmitAction(submitHandler) {
    this._handleFormSubmit = submitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault()
      this._handleFormSubmit();
    })
  }

}


