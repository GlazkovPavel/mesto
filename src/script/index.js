import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  openEditProfilePopupButton,
  closeEditProfilePopupButton,
  openAddCardPopupButton,
  popupAddCard,
  popupEditProfile,
  closeAddCardPopupButton,
  closePopupPreviewButton,
  formPopupProfile,
  formPopupAdd,
  nameInput,
  jobInput,
  title,
  subtitle,
} from "./data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const initialCards = [
  {
    title: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const openCardPopup = new PopupWithImage('.popup_type_preview');
openCardPopup.setEventListeners();
const openPopupEdit = new UserInfo({title, subtitle}, {nameInput, jobInput});

const cardSection = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = new Card(data.title, data.link, "#card-templete", ()=>{
      openCardPopup.open(data);

    });
    return card.render();
  }
}, '.element__grid');

cardSection.rendererAll();

const addCardPopup = new PopupWithForm('.popup_type_add', (cardData) => {
  cardSection.addItem(cardData);
  addCardPopup.close();
})

addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_type_profile', (data) => {
  openPopupEdit.setUserInfo(data);
  editProfilePopup.close();
})

editProfilePopup.setEventListeners();

openEditProfilePopupButton.addEventListener("click", function () {
  formPopupProfile.reset();
  removeValidationErrors(popupEditProfile);
  editProfilePopup.open();
  openPopupEdit.getUserInfo()
  profileEditFormValidator.toggleButtonState();
});

openAddCardPopupButton.addEventListener("click", function () {
  formPopupAdd.reset();
  addCardPopup.open();
  removeValidationErrors(popupAddCard);
  profileAddFormValidator.toggleButtonState();
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscape);
}

function closeEscape(evt) {
  if (evt.key === "Escape") {
    const popupElement = document.querySelector(".popup_opened");
    closePopup(popupElement);
  }
}

closeAddCardPopupButton.addEventListener("click", function () {
  addCardPopup.close();
  removeValidationErrors(popupAddCard);
  formPopupAdd.reset();
});

closePopupPreviewButton.addEventListener("click", () =>
  openCardPopup.close()
);

closeEditProfilePopupButton.addEventListener("click", function () {
  editProfilePopup.close();
});

const removeValidationErrors = (popup) => {
  const formList = Array.from(popup.querySelectorAll(".popup__input-error"));
  const itemList = Array.from(popup.querySelectorAll(".popup__item"));
  formList.forEach((spanElement) => {
    spanElement.textContent = " ";
  });
  itemList.forEach((itemElement) => {
    itemElement.classList.remove("popup__item_type_error");
  });
};
const configValidator = {
  formSelector: ".form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__save",
  inputErrorClass: "popup__item_type_error",
  errorClass: "popup__input-error_active",
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




