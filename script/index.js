const openPopupButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopunButton = document.querySelector('.popup__close');

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');  // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('#name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('#job'); // Воспользуйтесь инструментом .querySelector()
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');



for (let button of document.querySelectorAll('.element__description-like')) {
  button.addEventListener("click", function () {
    this.classList.toggle('element__description-like_active');
  })
}


function openPopup(event) {
  event.preventDefault();
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  popup.classList.add('popup_opened');
}

openPopupButton.addEventListener('click', openPopup);

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
