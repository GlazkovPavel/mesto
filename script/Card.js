// function createCard(element){
//   //const cardElement = cardTemplate.content.cloneNode(true);
//   const trashButton = cardElement.querySelector('.element__trash');
//   const likeButton = cardElement.querySelector('.element__description-like');
//   const previewImg = cardElement.querySelector('.element__foto');
//   //cardElement.querySelector('.element__description-text').textContent = element.name;
//   previewImg.src = element.link;
//   previewImg.alt = element.name;

  // trashButton.addEventListener('click', function(e){
  //   e.target.closest('.element__container').remove();
  // })

  // likeButton.addEventListener('click', function(ev){
  //   ev.target.classList.toggle('element__description-like_active');
  // })
  // previewImg.addEventListener('click', function openPopupPreview(eve) {
  //   eve.preventDefault();
  //   popupPreviewImg.src = element.link;
  //   popupPreviewImg.alt = element.name;
  //   popupPreviewTitle.textContent = element.name; 
  //   openPopup(popupPreview);
  //})
  //return cardElement;  
//}

// class Card {
//   cardElement = document.querySelector(this._cardSelector).content.querySelector('#card-templete').cloneNode(true);

//   constructor(data, cardSelector) {
//     this._cardSelector = cardSelector;
//     this._title = data.title;
//     this._image = data.image;
//     this._alt = data.alt;
//   }
  
//   _addListeners = () => {
//    this._cardElement.querySelector('.element__description-like').addEventListener('click', function(ev){
//        ev.target.classList.toggle('element__description-like_active');
//   })
//    this._cardElement.querySelector('.element__foto').addEventListener('click', function openPopupPreview(eve) {
//        eve.preventDefault();
//        popupPreviewImg.src = element.link;
//        popupPreviewImg.alt = element.name;
//        popupPreviewTitle.textContent = element.name; 
//        openPopup(popupPreview);
//     }) 
//   }
//   createCard = () => {
//     this._cardElement.querySelector('.element__description-text').textContent = this._title;
//     this._cardElement.querySelector('.element__foto').src = this._image;
//     this._cardElement.querySelector('.element__foto').alt = this._title;

//     return createCard; 
//   }
// }
// export default Card 