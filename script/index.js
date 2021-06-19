import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
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
  titleAdd,
  linkAdd,
  cardList,
  //popupPreview,
  //popupPreviewImg,
  //popupPreviewTitle,
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



// function submitAddCardForm(evt) {
//   evt.preventDefault();
//   const card = new Card(`${titleAdd.value}`, `${linkAdd.value}`, '#card-templete', openCardPopup);
//   cardSection.addItem(card.render());
//   closePopup(popupAddCard);
// }
// formPopupAdd.addEventListener("submit", submitAddCardForm);

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

// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closeEscape);
// }
openEditProfilePopupButton.addEventListener("click", function () {
  formPopupProfile.reset();
  removeValidationErrors(popupEditProfile);
  editProfilePopup.open();
  openPopupEdit.getUserInfo()

  // nameInput.value = title.textContent;
  // jobInput.value = subtitle.textContent;
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

//formPopupProfile.addEventListener("submit", submitEditProfileForm);

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

// [/*popupEditProfile*/, popupPreview, /*popupAddCard*/].forEach((popup) => {
//   popup.addEventListener("click", (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(popup);
//     }
//   });
// });

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




