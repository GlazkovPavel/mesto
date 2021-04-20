const openPopupButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopunButton = document.querySelector('.popup__close')

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');  // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__item_job'); // Воспользуйтесь инструментом .querySelector()
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');



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
  popup.classList.remove('popup_opened');  
}
formElement.addEventListener('submit', formSubmitHandler);