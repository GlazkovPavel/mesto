export class Card {
  constructor({data}, templateSelector, handleCardClick, handleRemoveClick) {
    this._data = data;
    this._title = data.name;
    this._link = data.link;
    this._likes = this._data.likes;
    this._currentUserId = data.myUserId;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this.handleRemoveClick = handleRemoveClick;
  }
  _makeElements(){
    const cardTemplate = document.querySelector(this._templateSelector);
    this._cardElement = cardTemplate.content.querySelector('.element__container').cloneNode(true);
    return this._cardElement;

  }
  _setEventListener(){
    this._trashButton = this._cardElement.querySelector('.element__trash');
    this._likeButton = this._cardElement.querySelector('.element__description-like');
    this._previewImg = this._cardElement.querySelector('.element__foto');
    this._trashButton.addEventListener('click', () => this.handleRemoveClick())
    this._likeButton.addEventListener('click', () => this._handleLikeClick())
    this._previewImg.addEventListener('click', () => this.handleCardClick())
  }
  _handleLikeClick(){
    let like = true,
      likeCount = this._likes.length;
    like = likeCount;
    if(this._likeButton.classList.contains('element__description-like_active')){
      this._likeButton.classList.remove('element__description-like_active');
      like -= 1;
    }else{
      like = like + 1;
      this._likeButton.classList.add('element__description-like_active');
    }
    likeCount = like;
    this._cardElement.querySelector('.element__likes').textContent = likeCount;

  }


  render() {
    this._cardElement = this._makeElements();
    this._setEventListener();

    this._cardElement.querySelector('.element__description-text').textContent = this._title;
    this._previewImg.src = this._link;
    this._previewImg.alt = this._title;
    this._cardElement.querySelector('.element__likes').textContent = this._likes.length;

    if(!(this._data.owner._id === this._currentUserId)) {
      this._trashButton.remove();
    }

    return this._cardElement;
  }
}

