document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_img');
const popupAddForm = document.querySelector('.popup-add-form');
const formElement = document.querySelector('.popup-edit-form');
const openPopupBtn = document.querySelector('.profile__change');
const openPopupAdd = document.querySelector('.profile__button');
const popupContainer = document.querySelector('.popup__container');
const closePopupBtn = popupEdit.querySelector('.popup__close-button');
const closePopupAdd = popupAdd.querySelector('.popup__close-button');
const closePopupImg = popupImg.querySelector('.popup__close-button');
const popupNameInput = popupContainer.querySelector('.form__input_type_name');
const popupDescrInput = popupContainer.querySelector('.form__input_type_descr');
const popupPlaceInput = popupContainer.querySelector('.form__input_type_place');
const popupLinkInput = popupContainer.querySelector('.form__input_type_link');
const profile = document.querySelector('.profile');
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__title');
const profileDescr = profileInfo.querySelector('.profile__subtitle');
const popupImgPhoto = popupImg.querySelector('.popup__img-ph');
const popupImgTitle = popupImg.querySelector('.popup__img-name')

const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.elements-item-template').content.querySelector('.elements__item');

const popups = Array.from(document.querySelectorAll('.popup'));

//Открытие и закрытие попапов
openPopupBtn.addEventListener('click', function () {
  openPopup(popupEdit);
  popupNameInput.value = profileName.textContent;
  popupDescrInput.value = profileDescr.textContent;
});
openPopupAdd.addEventListener('click', function () {
  openPopup(popupAdd);
});
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

closePopupAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});
closePopupBtn.addEventListener('click', function () {
  closePopup(popupEdit);
});
closePopupImg.addEventListener('click', function () {
  closePopup(popupImg);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileDescr.textContent = popupDescrInput.value;
  closePopup(popup);
}
formElement.addEventListener('submit', handleFormSubmit);

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



function handlerFormSubmitAdd(evt) {
  evt.preventDefault();
  addCardList({ name: document.querySelector('.form__input_type_place').value, link: document.querySelector('.form__input_type_link').value });
  popupAddForm.reset();
  closePopup(popupAdd);
}


function handlerDelCard(evt) {
  evt.target.closest('.elements__item').remove();
}

function handlerlikeBtn(evt) {
  evt.target.classList.toggle('elements__like_active');
}

function handlerImgPrv(link, name) {
  popupImgPhoto.src = link;
  popupImgPhoto.alt = name;
  popupImgTitle.textContent = name;
  openPopup(popupImg);
};

const elementItemList = document.querySelector('.elements__list');

initialCards.forEach(item => {
  addCardList(item);
});

function addCardList(item) {
  const elementItem = createElement(item);
  cardsContainer.prepend(elementItem);
}

function createElement(item) {
  const elementItem = cardTemplate.cloneNode(true);
  const elementItemName = elementItem.querySelector('.elements__title');
  elementItemName.textContent = item.name;
  const elementItemImg = elementItem.querySelector('.elements__img');
  elementItemImg.src = item.link;
  elementItemImg.alt = item.name;
  const elementDelBtn = elementItem.querySelector('.elements__button');
  const elementLikeBtn = elementItem.querySelector('.elements__like');

  elementDelBtn.addEventListener('click', handlerDelCard);
  elementLikeBtn.addEventListener('click', handlerlikeBtn);
  elementItemImg.addEventListener('click', () => handlerImgPrv(item.link, item.name));
  return elementItem;
}
})