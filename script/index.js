import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
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
  popupPreview,
  popupPreviewImg,
  popupPreviewTitle,
} from "./data.js";

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function createCard(data) {
  const card = new Card(data.name, data.link, "#card-templete", openCardPopup);

  return card.render();
}

initialCards.forEach(function (elem) {
  const newCard = createCard(elem);
  cardList.append(newCard);
});

function submitAddCardForm(evt) {
  evt.preventDefault();
  const linkValue = { name: `${titleAdd.value}`, link: `${linkAdd.value}` };
  cardList.prepend(createCard(linkValue));
  closePopup(popupAddCard);
}
formPopupAdd.addEventListener("submit", submitAddCardForm);

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscape);
}
openEditProfilePopupButton.addEventListener("click", function () {
  formPopupProfile.reset();
  removeValidationErrors(popupEditProfile);
  openPopup(popupEditProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  profileEditFormValidator.toggleButtonState();
});

openAddCardPopupButton.addEventListener("click", function () {
  formPopupAdd.reset();
  openPopup(popupAddCard);
  removeValidationErrors(popupAddCard);
  profileAddFormValidator.toggleButtonState();
});
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscape);
}

function openCardPopup(eve) {
  eve.preventDefault();
  popupPreviewImg.src = this._link;
  popupPreviewImg.alt = this._name;
  popupPreviewTitle.textContent = this._name;
  openPopup(popupPreview);
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function closeEscape(evt) {
  if (evt.key === "Escape") {
    const popupElement = document.querySelector(".popup_opened");
    closePopup(popupElement);
  }
}

formPopupProfile.addEventListener("submit", submitEditProfileForm);

closeAddCardPopupButton.addEventListener("click", function () {
  closePopup(popupAddCard);
  removeValidationErrors(popupAddCard);
  formPopupAdd.reset();
});

closePopupPreviewButton.addEventListener("click", () =>
  closePopup(popupPreview)
);

closeEditProfilePopupButton.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

[popupEditProfile, popupPreview, popupAddCard].forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
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




