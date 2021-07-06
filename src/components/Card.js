export class Card {
  constructor({data}, templateSelector, handleCardClick, handleRemoveClick, api) {
    this._data = data;
    this._title = data.name;
    this._link = data.link;
    this._likes = this._data.likes;
    this._id = data._id;
    this._currentUserId = data.myUserId;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this.handleRemoveClick = handleRemoveClick;
    this._api = api;
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
  _handleLikeClick(){                                                              //like function
    if(this._likeButton.classList.contains('element__description-like_active')){
      this._api.deleteLike(this._id)
        .then((data) => {
          this._likeButton.classList.remove('element__description-like_active');
          this._cardElement.querySelector('.element__likes').textContent = data.likes.length;
        })
    }else{
      this._api.putLike(this._id)
        .then((data) => {
          this._likeButton.classList.add('element__description-like_active');
          this._cardElement.querySelector('.element__likes').textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }
  }

  _checkMyLike(){                                                                    //checking my like
    this._likes.some((item) => {
      if(item._id === this._currentUserId) {
      this._likeButton.classList.add('element__description-like_active');
    }
  })
  }


  render() {                                                                         //card drawing
    this._cardElement = this._makeElements();
    this._setEventListener();

    this._checkMyLike();
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

