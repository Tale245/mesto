// Открытие popup редактирования информации
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileCloseBtn = document.querySelector(".popup__close-button");
const popupAddItem = document.querySelector(".popup_add-item");
const popupEditInfo = document.querySelector(".popup_edit-info");
const profileForm = popupEditInfo.querySelector(".popup__form_info_edit");
export const nameInput = document.querySelector(".popup__field_name");
export const jobInput = document.querySelector(".popup__field_job");
const buttonAddProfile = document.querySelector(".profile__add-button");
const btnInsertClose = document.querySelector(".popup__close-button_add");
const formAddItem = popupAddItem.querySelector(".popup__form_add-image");
const imageField = popupAddItem.querySelector(".popup__field_image");
const imageTitle = popupAddItem.querySelector(".popup__field_title-image");
const elements = document.querySelector(".elements");
const imagePopup = document.querySelector(".popup__image");
const popupImg = document.querySelector(".popup_image-scale");
const popupParagraph = document.querySelector(".popup__paragraph");
const popupCloseImage = document.querySelector(".popup__close-button-image");
export const title = document.querySelector(".profile__title");
export const subtitle = document.querySelector(".profile__paragraph");
const overlayAdd = document.querySelector(".popup__overlay-add");
const overlayEdit = document.querySelector(".popup__overlay-edit");
const overlayImg = document.querySelector(".popup__overlay-img");
const overlay = document.querySelector(".popup__overlay");
const element = document.querySelector('.element')

const enableValidation = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "button__disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// import class FormValidator
import FormValidator from './FormValidator.js'

// import class Popup
import Popup from './Popup.js';

// Для каждой проверяемой формы создали экземпляр класса FormValidator
const editformValidator = new FormValidator(enableValidation, profileForm);
const addformValidator = new FormValidator(enableValidation, formAddItem);
editformValidator.enableValidation();
addformValidator.enableValidation();

// // функция открытие попапа
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keyup", onDocumentKeyUp);
// }

const enableValidation = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "button__disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// export class FormValidator
import { FormValidator } from './FormValidator.js'

// Для каждой проверяемой формы создали экземпляр класса FormValidator
const editformValidator = new FormValidator(enableValidation, profileForm);
const addformValidator = new FormValidator(enableValidation, formAddItem);
editformValidator.enableValidation();
addformValidator.enableValidation();

import Popup from './Popup.js';

// функция открытие попапа
const openPopup = (popup) => {
  const popupOpen = new Popup(popup);
  popupOpen.open()
}

// функция закрытие попапа
const closePopup = (popup) => {
  const popupClose = new Popup(popup);
  popupClose.close()
  popupClose.setEventListeners()
}

const setEventListeners = (popup) => {
  const popupWithSetEventListeners = new Popup(popup);
  popupWithSetEventListeners.setEventListeners()
}


// Импортируем класс UserInfo
import UserInfo from './UserInfo.js';

const userInfo = new UserInfo(title, subtitle)


// Открытие попапов

// Открытия попап редактирования профиля
buttonEditProfile.addEventListener("click", function () {
  const user = userInfo.getUserInfo()

  nameInput.value = user.userName;
  jobInput.value = user.infoAboutUser;

  openPopup(popupEditInfo);
  setEventListeners(popupEditInfo)
  editformValidator.resetValidator();

});

// Кнопка открытия попап добавления карточки
buttonAddProfile.addEventListener("click", function () {
  addformValidator.resetValidator();
  openPopup(popupAddItem);
  setEventListeners(popupAddItem)
});

// 6 карточек

const initialCards = [
  {
    name: "GTR",
    link: "https://images.unsplash.com/photo-1595527137281-3cb1fd8968ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Индонезия",
    link: "https://images.unsplash.com/photo-1648426230909-e99ce0a4a133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    name: "Лос-Анджелес",
    link: "https://images.unsplash.com/photo-1646285105405-8f1c6cbb6d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Cafe Racer",
    link: "https://images.unsplash.com/photo-1645023925869-a5e4b5ebdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80",
  },
  {
    name: "70s",
    link: "https://images.unsplash.com/photo-1581956214240-5b4e182889ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Винес-Бич",
    link: "https://images.unsplash.com/photo-1584305161484-a959768b7614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];


// Импортируем класс PopupWithImage
import PopupWithImage from './PopupWithImage.js';

const openImage = (name, link) => {
  const PopupImage = new PopupWithImage(popupImg)
  PopupImage.open(name, link);
  setEventListeners(popupImg)
}
// Импортируем класс Card 
import { Card } from './Card.js';

// создаем карточку
const createCard = (name, link) => {
  const card = new Card (name, link, '#template', openImage)
  const cardElement = card.generateCard()
  return cardElement
}

// Импортируем класс Section
import Section from './Section.js';

// Добавляем карточик из массива
const section = new Section({
  items: initialCards,
  renderer: (item) =>{
    createCard(item.name, item.link, '#template', openImage)
    section.addItem(createCard(item.name, item.link))
  },
},
'.elements'
)

section.rendererItems()

// Имортируем класс PopupWithForm
import PopupWithForm from './PopupWithForm.js';

const popupEdtiProfile = new PopupWithForm({popupSelector: popupEditInfo, submitForm: () => {
    userInfo.setUserInfo(title, subtitle)
}})

const popupAddCard = new PopupWithForm({popupSelector: popupAddItem, submitForm: () => {
  const inputField = imageField.value;
  const inputTitle = imageTitle.value;
  section.addItem(createCard(inputTitle, inputField))
}})

popupEdtiProfile.setEventListeners()
popupAddCard.setEventListeners()

