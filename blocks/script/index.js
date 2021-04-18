const openPopupButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopunButton = document.querySelector('.popup__close')

function togglePopup(event) {
  event.preventDefault();
  popup.classList.toggle('popup_opened');
}

openPopupButton.addEventListener('click', togglePopup);

closePopunButton.addEventListener('click', togglePopup);

function handleOverlayClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    togglePopup(event);
  }
}
popup.addEventListener('click', handleOverlayClick);



// Находим форму в DOM
let formElement = document.querySelector('.popup__form');  // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item-name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__item-job'); // Воспользуйтесь инструментом .querySelector()
let title = document.querySelector('.profile__title');
let description = document.querySelector('.profile__subtitle');
function formSubmitHandler (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  description.textContent = jobInput.value;
  
}
formElement.addEventListener('submit', formSubmitHandler); 