const editPopupButton = document.querySelector('.profile__button-edit');
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
const heading = document.querySelector('.popup__heading');
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
  cardElement.querySelector('.element__description-text').textContent = element.name;
  cardElement.querySelector('.element__foto').src = element.link;
  cardList.prepend(cardElement)
}

initialCards.forEach(function(elem) {
  createCard(elem);
});

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  const linkValue = {name: `${titleAdd.value}`, link: `${linkAdd.value}`};
  initialCards.unshift(`${linkValue}`);
  createCard(linkValue);
  closePopupAdd(evt);  
}
formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

// button.addEventListener('click', function() {
//   const taskValue = input.value;

//   tasksContainer.append(createTodo(taskValue));
//   recalculateCount();
// });

for (let button of document.querySelectorAll('.element__description-like')) {
  button.addEventListener("click", function () {
    this.classList.toggle('element__description-like_active');
  })
}

editPopupButton.addEventListener('click', function(openPopun) {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  nameInput.placeholder = 'Ваше имя';
  jobInput.placeholder = 'Ваше призвание';
  heading.textContent = 'Редактировать профиль';
  popup.classList.add('popup_opened');

  function formSubmitHandler (evt) {
    evt.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup(evt);  
  }
  formElement.addEventListener('submit', formSubmitHandler);
  
});

addPopupButton.addEventListener('click', function(openPopun) {
  nameInput.value = '';
  jobInput.src = '';
  nameInput.placeholder = 'Название';
  jobInput.placeholder = 'Ссылка на катинку';
  heading.textContent = 'Новое место';
  popup.classList.add('popup_opened');

  function formSubmitCard (evet) {
    evet.preventDefault();
    nameInput.value = initialCards.unshift(nameInput.value);
    jobInput.src = '';
    closePopup(evet);  
  }
  formElement.addEventListener('submit', formSubmitCard);
  
});


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

// function formSubmitHandlerAdd (evt) {
//   evt.preventDefault();
//   createCard(evt);
//   closePopupAdd(evt);  
// }
// formElementAdd.addEventListener('submit', formSubmitHandlerAdd);
