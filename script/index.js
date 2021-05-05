const openPopupButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopunButton = document.querySelector('.popup__close');
const openPopupButtonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add');
const closePopupBut = document.querySelector('.popup_close_add');



// Находим форму в DOM
let formElement = document.querySelector('.popup__form');  // Воспользуйтесь методом querySelector()
let formElementAdd = document.querySelector('.popup_form_add');
// Находим поля формы в DOM
let nameInput = document.querySelector('#name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('#job'); // Воспользуйтесь инструментом .querySelector()
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');

let titleAdd = document.querySelector('#title');
let linkAdd = document.querySelector('#foto');


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
  cardElement.querySelector('.element__description-text').textContent = element.name;
  cardElement.querySelector('.element__foto').src = element.link;

  trashButton.addEventListener('click', function(e){
    e.target.closest('.element__container').remove();


  }); 

  return cardElement;
  
}

initialCards.forEach(function(elem) {
  const newCard = createCard(elem);
  cardList.append(newCard);
});

function formSubmitHandlerAdd (evt){
  evt.preventDefault();
  const linkValue = {name: `${titleAdd.value}`, link: `${linkAdd.value}`};
  cardList.prepend(createCard(linkValue));
  closePopupAdd(evt);
};
formElementAdd.addEventListener('submit', formSubmitHandlerAdd);


// for (let button of document.querySelectorAll('.element__description-like')) {
//   button.addEventListener("click", function () {
//     this.classList.toggle('element__description-like_active');
//   })
// }


function openPopup(event) {
  event.preventDefault();
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  popup.classList.add('popup_opened');
}

openPopupButton.addEventListener('click', openPopup);

//ПОПАП
function closePopup(event) {
  event.preventDefault();
  popup.classList.remove('popup_opened');
}
closePopunButton.addEventListener('click', closePopup);

 function formSubmitHandler (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(evt);  
}
formElement.addEventListener('submit', formSubmitHandler);

openPopupButtonAdd.addEventListener('click', function openPopupAdd(event) {
  event.preventDefault();
  
  popupAdd.classList.add('popup_opened');
});

function closePopupAdd(event) {
  event.preventDefault();
  popupAdd.classList.remove('popup_opened');
}
closePopupBut.addEventListener('click', closePopupAdd);


//
// function formSubmitHandlerAdd (evt) {
//   evt.preventDefault();
//   createCard(evt);
//   closePopupAdd(evt);  
// }
// formElementAdd.addEventListener('submit', formSubmitHandlerAdd);