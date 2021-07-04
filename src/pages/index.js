import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import {
  openEditProfilePopupButton,
  openAddCardPopupButton,
  popupAddCard,
  popupEditProfile,
  formPopupProfile,
  formPopupAdd,
  nameInput,
  jobInput,
  title,
  subtitle,
} from "../script/data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"
const options = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
  headers: {
    authorization: 'df3e4aab-6899-4784-852c-de3c6ef6b3bc',
    'Content-Type': 'application/json'
  }
}

const api = new Api(options);

const openCardPopup = new PopupWithImage('.popup_type_preview');
openCardPopup.setEventListeners();
const openPopupEdit = new UserInfo({title, subtitle});

const cardSection = new Section({
  renderer: (data) => {
    const card = new Card(data.name, data.link, "#card-templete", ()=>{
      openCardPopup.open(data);

    }, handleCardDelete);
    return card.render();
  }
}, '.element__grid');

function handleCardDelete() {
  const removeCardPopup = new Popup('.popup_type_remove')
  removeCardPopup.open();
  removeCardPopup.setEventListeners();
  document.querySelector('.popup__save_type_remove').addEventListener('click', () => {
    this._cardElement.remove();
    this._cardElement = null
    removeCardPopup.close();
  })
}

api.getInitialCards()
  .then(data => {
    cardSection.rendererAll(data);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

api.getUserInfoStart()
  .then(data => {
    title.textContent = data.name;
    subtitle.textContent = data.about;
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

const addCardPopup = new PopupWithForm('.popup_type_add', (cardData) => {
  cardSection.addItem(cardData);
  api.setCardServer(cardData);
  addCardPopup.close();
})

addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_type_profile', (data) => {
  openPopupEdit.setUserInfo(data);
  api.setUserInfoData(data);
  editProfilePopup.close();
})

editProfilePopup.setEventListeners();

openEditProfilePopupButton.addEventListener("click", function () {
  formPopupProfile.reset();
  editProfilePopup.open();
  const data = openPopupEdit.getUserInfo();
  nameInput.value = data.nameSelector;
  jobInput.value = data.jobSelector;
  profileEditFormValidator.removeValidationErrors();
  profileEditFormValidator.toggleButtonState();
});

openAddCardPopupButton.addEventListener("click", function () {
  formPopupAdd.reset();
  addCardPopup.open();
  profileAddFormValidator.removeValidationErrors();
  profileAddFormValidator.toggleButtonState();
});


const configValidator = {
  formSelector: ".form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__save",
  inputErrorClass: "popup__item_type_error",
  errorClass: "popup__input-error_active",
  inputError: "popup__input-error"
};

const profileEditFormValidator = new FormValidator(
  configValidator,
  document.querySelector('form[name="profile-name"]')
);

profileEditFormValidator.enableValidation();

const profileAddFormValidator = new FormValidator(
  configValidator,
  document.querySelector(".popup__form_type_add")
);

profileAddFormValidator.enableValidation();




