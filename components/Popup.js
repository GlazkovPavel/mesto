
export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const popupElement = document.querySelector(".popup_opened");
      this.close(popupElement);
    }}

  open() {
    this.popupElement.classList.add("popup_opened");
    this.popupElement.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this.popupElement.classList.remove("popup_opened");
    this.popupElement.removeEventListener("keydown", this._handleEscClose);
  }
  setEventListeners(){
    console.log('privet')
    // this.popupElement.querySelector('.popup__close').addEventListener("click", () =>
    //   this.close()
    // );
  }
}
