const editPopupButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopunButton = document.querySelector('.popup__close');
const addPopupButton = document.querySelector('.profile__button-add');
// Находим форму в DOM
const formElement = document.querySelector('.popup__form');  // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('#name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('#job'); // Воспользуйтесь инструментом .querySelector()
const heading = document.querySelector('.popup__heading');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');


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

initialCards.forEach(function(element) {
  const cardElement = cardTemplate.content.cloneNode(true);

  cardElement.querySelector('.element__description-text').textContent = element.name;
  
  cardElement.querySelector('#foto').src = element.link;

  cardList.append(cardElement)

});


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


 