import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import {
  openEditProfilePopupButton,
  openAddCardPopupButton,
  popupAddCard,
  popupEditProfile,
  formPopupProfile,
  formPopupAdd,
  formPopupAvatar,
  nameInput,
  jobInput,
  userAvatar,
  title,
  subtitle,
  popupAvatar,
  openPopupAvatar,
} from "../script/data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-25',
  headers: {
    authorization: 'df3e4aab-6899-4784-852c-de3c6ef6b3bc',
    'Content-Type': 'application/json'
  }
});

const openCardPopup = new PopupWithImage('.popup_type_preview');
openCardPopup.setEventListeners();
const openPopupEdit = new UserInfo({title, subtitle, userAvatar});

let myUserId = null;

api.getUserInfoStart()
  .then(data => {
    myUserId = data._id;
    title.textContent = data.name;
    subtitle.textContent = data.about;
    openPopupEdit.setUserAvatar(data);
  })
  .then(() => {
    api.getInitialCards()
      .then(data => {
        cardSection.rendererAll(data);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

const cardSection = new Section({
  renderer: (data) => {
    const card = new Card({
      data: {...data, myUserId}
    }, "#card-templete", ()=>{
      openCardPopup.open(data);

    }, handleCardDelete, api);
    return card.render();
  }
}, '.element__grid');



function handleCardDelete(cardId) {
  const removeCardPopup = new PopupWithSubmit('.popup_type_remove')
  removeCardPopup.open();
  removeCardPopup.setEventListeners();
  removeCardPopup.setSubmitAction(() => {
    api.deleteCard(cardId)
      .then(() => {
        this._cardElement.remove();
        this._cardElement = null;
        removeCardPopup.close();
      })
      .catch((err) => {
        console.error(err);
      });
  })

  // document.querySelector('.popup__save_type_remove').addEventListener('click', (e) => {
  //   e.preventDefault();
  //   this._cardElement.remove();
  //   this._cardElement = null
  //   removeCardPopup.close();
  // })
}

const addCardPopup = new PopupWithForm('.popup_type_add', (cardData) => {
  api.setCardServer(cardData)
    .then(data => {cardSection.addItem(data);
    })
    .catch((err) => {
      console.error(err);
    })

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


const formAvatar= new PopupWithForm('.popup_type_avatar', (data) => {
  api.changeAvatar(data)
    .then(data => {userAvatar.setAttribute('src', data.avatar);
    })
    .catch((err) => {
      console.error(err);
    })
  formAvatar.close();
  })
formAvatar.setEventListeners();

openPopupAvatar.addEventListener('click', () => {
  formPopupAvatar.reset();
  formAvatar.open();
  profileAvatarFormValidator.removeValidationErrors();
  profileAvatarFormValidator.toggleButtonState();
})


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

const profileAvatarFormValidator = new FormValidator(
  configValidator,
  document.querySelector('.popup__form_type_avatar')
);

profileAvatarFormValidator.enableValidation();
