const openPopupButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopunButton = document.querySelector('.popup__close');
const openPopupButtonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add');
const closePopupButtonAdd = document.querySelector('.popup__close_type_add');
const popupPreview = document.querySelector('.popup_type_preview');
const popupPreviewImg = document.querySelector('.popup__preview-img');
const popupPreviewTitle = document.querySelector('.popup__preview-subtitle');
const popupPreviewClose = document.querySelector('.popup__close_type_preview');

// Находим форму в DOM
const formPopupProfile = document.querySelector('.popup__form');  // Воспользуйтесь методом querySelector()
const formPopupAdd = document.querySelector('.popup__form_type_add');
// Находим поля формы в DOM
const nameInput = document.querySelector('#name'); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('#job'); // Воспользуйтесь инструментом .querySelector()
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

const titleAdd = document.querySelector('#title');
const linkAdd = document.querySelector('#foto');


const cardList = document.querySelector('.element__grid');
const cardTemplate = document.querySelector('#card-templete');

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
    popupPreview.classList.add('popup_opened');
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
  closePopup(evt);
}
formPopupAdd.addEventListener('submit', handlerFormSubmitAdd);

function openPopup(event) {
  event.preventDefault();
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  popup.classList.add('popup_opened');
}

function closePopup(event) { 
	const closedPopup = event.target.closest('.popup');
	closedPopup.classList.remove('popup_opened');
}

 function handlerFormSubmit (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(evt);  
}

formPopupProfile.addEventListener('submit', handlerFormSubmit);
closePopunButton.addEventListener('click', closePopup);
closePopupButtonAdd.addEventListener('click', closePopup);
popupPreviewClose.addEventListener('click', closePopup);
openPopupButton.addEventListener('click', openPopup);
openPopupButtonAdd.addEventListener('click', openPopup);

