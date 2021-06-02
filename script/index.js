import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const openEditProfilePopupButton = document.querySelector('.profile__button-edit');
const closeEditProfilePopupButton = document.querySelector('.popup__close');
const openAddCardPopupButton = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_type_add');
const popupEditProfile = document.querySelector('.popup_type_profile');
const closeAddCardPopupButton = document.querySelector('.popup__close_type_add');
export const popupPreview = document.querySelector('.popup_type_preview');
export const popupPreviewImg = document.querySelector('.popup__preview-img');
export const popupPreviewTitle = document.querySelector('.popup__preview-subtitle');
const closePopupPreviewButton = document.querySelector('.popup__close_type_preview');
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
const popupProfileSave = document.querySelector('.popup__save_type_profile');
const popupAddSaveButton = document.querySelector('.popup__save_type_add');
const popupAddCardArray= Array.from(popupAddCard.querySelectorAll('.popup__item'));
const popupEditProfileArray= Array.from(popupEditProfile.querySelectorAll('.popup__item'));



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



function createCard(data){
  const card = new Card(data.name, data.link, '#card-templete')

  return card.render();
}

initialCards.forEach(function(elem) {
  const newCard = createCard(elem);
  cardList.append(newCard);
})

function submitAddCardForm (evt){
  evt.preventDefault();
  const linkValue = {name: `${titleAdd.value}`, link: `${linkAdd.value}`};
  cardList.prepend(createCard(linkValue));
  closePopup(popupAddCard);
}
formPopupAdd.addEventListener('submit', submitAddCardForm);

export function openPopup(popup) {
	popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEscape)
}
openEditProfilePopupButton.addEventListener('click', function(){
  formPopupProfile.reset();
  removeValidationErrors(popupEditProfile);
  openPopup(popupEditProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  profileEditFormValidator.toggleButtonState();
})

openAddCardPopupButton.addEventListener('click', function(){

  formPopupAdd.reset();
  openPopup(popupAddCard);
  removeValidationErrors(popupAddCard);
  profileAddFormValidator.toggleButtonState();
})
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEscape);

}

function submitEditProfileForm (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function closeEscape (evt){
  if(evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  }
}

formPopupProfile.addEventListener('submit', submitEditProfileForm);

closeAddCardPopupButton.addEventListener('click', function(){
  closePopup(popupAddCard);
  removeValidationErrors(popupAddCard);
  formPopupAdd.reset();

})
popupAddCard.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
         closePopup(popupAddCard);
       }
})

closePopupPreviewButton.addEventListener('click', () => closePopup(popupPreview));

popupPreview.addEventListener('click', evt => {
   if(evt.target.classList.contains('popup_opened')) {
     closePopup(popupPreview);
   }
 });

 closeEditProfilePopupButton.addEventListener('click', function(){
     closePopup(popupEditProfile);
 })

 popupEditProfile.addEventListener('click', evt => {
   if(evt.target.classList.contains('popup_opened')) {
     closePopup(popupEditProfile);
   }
 });
const removeValidationErrors = (popup) => {
  const formList = Array.from(popup.querySelectorAll('.popup__input-error'));
  const itemList = Array.from(popup.querySelectorAll('.popup__item'))
  formList.forEach((spanElement) => {
    spanElement.textContent = ' ';
  });
  itemList.forEach((itemElement) => {
    itemElement.classList.remove('popup__item_type_error')
  })

};

 const profileEditFormValidator = new FormValidator({
   formSelector: '.form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__input-error_active'
 }, document.querySelector('form[name="profile-name"]'))

profileEditFormValidator.enableValidation();

const profileAddFormValidator = new FormValidator({
  formSelector: '.form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__input-error_active'
}, document.querySelector('.popup__form_type_add'))

profileAddFormValidator.enableValidation();




