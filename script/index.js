const openPopupButton = document.querySelector('.profile__button-edit');
const closePopunButton = document.querySelector('.popup__close');
const openPopupButtonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add');
const popupProfile = document.querySelector('.popup_type_profile');
const closePopupButtonAdd = document.querySelector('.popup__close_type_add');
const popupPreview = document.querySelector('.popup_type_preview');
const popupPreviewImg = document.querySelector('.popup__preview-img');
const popupPreviewTitle = document.querySelector('.popup__preview-subtitle');
const popupPreviewClose = document.querySelector('.popup__close_type_preview');
const formPopupProfile = document.querySelector('.popup__form');
const formPopupAdd = document.querySelector('.popup__form_type_add');
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job'); 
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const titleAdd = document.querySelector('.popup__item_title_add');
const linkAdd = document.querySelector('.popup__item_type_foto');
const cardList = document.querySelector('.element__grid');
const cardTemplate = document.querySelector('#card-templete');
const popupProfileSave = document.querySelector('.popup__save');


function createCard(element){
  const cardElement = cardTemplate.content.cloneNode(true);
  const trashButton = cardElement.querySelector('.element__trash');
  const likeButton = cardElement.querySelector('.element__description-like');
  const previewImg = cardElement.querySelector('.element__foto');
  cardElement.querySelector('.element__description-text').textContent = element.name;
  previewImg.src = element.link;
  previewImg.alt = element.name;

  trashButton.addEventListener('click', function(e){
    e.target.closest('.element__container').remove();
  })

  likeButton.addEventListener('click', function(ev){
    ev.target.classList.toggle('element__description-like_active');
  })
  previewImg.addEventListener('click', function openPopupPreview(eve) {
    eve.preventDefault();
    popupPreviewImg.src = element.link;
    popupPreviewTitle.textContent = element.name; 
    openPopup(popupPreview);
  })
  return cardElement;  
}

initialCards.forEach(function(elem) {
  const newCard = createCard(elem);
  cardList.append(newCard);
})

function handlerFormSubmitAdd (evt){
  evt.preventDefault();
  const linkValue = {name: `${titleAdd.value}`, link: `${linkAdd.value}`};
  cardList.prepend(createCard(linkValue));
  closePopup(popupAdd);
}
formPopupAdd.addEventListener('submit', handlerFormSubmitAdd);

function openPopup(popup) { 
	popup.classList.add('popup_opened');
}
openPopupButton.addEventListener('click', function(){
  openPopup(popupProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  toggleButtonState(Array.from(popupProfile.querySelectorAll('popup__input-text')), popupProfileSave);

})

openPopupButtonAdd.addEventListener('click', function(){
  openPopup(popupAdd)
})
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handlerFormProfile (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupProfile);  
}
document.addEventListener('keydown', evt => {
  if(evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  }
});

formPopupProfile.addEventListener('submit', handlerFormProfile);

closePopupButtonAdd.addEventListener('click', function(){
  closePopup(popupAdd);
})
popupAdd.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
         closePopup(popupAdd);
       }
})

popupPreviewClose.addEventListener('click', () => closePopup(popupPreview));

popupPreview.addEventListener('click', evt => {
   if(evt.target.classList.contains('popup_opened')) {
     closePopup(popupPreview);
   }
 });

closePopunButton.addEventListener('click', () => closePopup(popupProfile));

popupProfile.addEventListener('click', evt => {
   if(evt.target.classList.contains('popup_opened')) {
     closePopup(popupProfile);
   }
 });