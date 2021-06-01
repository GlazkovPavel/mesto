import {openPopup, popupPreviewImg, popupPreviewTitle, popupPreview} from "./index";

export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._makeElements();
    this._setEventListener();
  }
  _makeElements(){
    const cardTemplate = document.querySelector(this._templateSelector);
    this._cardElement = cardTemplate.content.cloneNode(true);

    this._trashButton = this._cardElement.querySelector('.element__trash');
    this._likeButton = this._cardElement.querySelector('.element__description-like');
    this._previewImg = this._cardElement.querySelector('.element__foto');

    this._cardElement.querySelector('.element__description-text').textContent = this._name;
    this._previewImg.src = this._link;
  }
  _setEventListener(){
    this._trashButton.addEventListener('click', (e) => this._handleRemoveClick(e))
    this._likeButton.addEventListener('click', () => this._handleLikeClick())
    this._previewImg.addEventListener('click', (e) => this._handleOpenPreview(e))
  }
  _handleLikeClick(){
    this._likeButton.classList.toggle('element__description-like_active');
  }
  _handleRemoveClick(e){
    e.target.closest('.element__container').remove()
  }
  _handleOpenPreview(eve){
    eve.preventDefault();
    popupPreviewImg.src = this._link;
    popupPreviewImg.alt = this._name;
    popupPreviewTitle.textContent = this._name;
    openPopup(popupPreview);
  }

  render() {
    return this._cardElement;
  }
}

