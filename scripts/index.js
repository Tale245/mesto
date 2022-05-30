// export class FormValidator
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
// Импортируем константы
import {
  buttonEditProfile,
  popupAddItem,
  popupEditInfo,
  profileForm,
  nameInput,
  jobInput,
  buttonAddProfile,
  formAddItem,
  imageField,
  imageTitle,
  popupImg,
  title,
  subtitle,
} from "../utils/constants.js";
// Импортируем карточки
import { initialCards } from "../utils/initialCards.js";
// Импорт объектов для валидации
import { enableValidation } from "../utils/enableValidation.js";

// Для каждой проверяемой формы создали экземпляр класса FormValidator
const editformValidator = new FormValidator(enableValidation, profileForm);
const addformValidator = new FormValidator(enableValidation, formAddItem);
editformValidator.enableValidation();
addformValidator.enableValidation();

// функция открытие попапа
const openPopup = (popup) => {
  const popupOpen = new Popup(popup);
  popupOpen.open();
};

const setEventListeners = (popup) => {
  const popupWithSetEventListeners = new Popup(popup);
  popupWithSetEventListeners.setEventListeners();
};

const userInfo = new UserInfo(title, subtitle);

// Открытие попапов
buttonEditProfile.addEventListener("click", function () {
  const infoAboutUser = userInfo.getUserInfo();
  nameInput.value = infoAboutUser.userName;
  jobInput.value = infoAboutUser.infoAboutUser;

  openPopup(popupEditInfo);
  setEventListeners(popupEditInfo);
  editformValidator.resetValidator();
});
buttonAddProfile.addEventListener("click", function () {
  addformValidator.resetValidator();
  openPopup(popupAddItem);
  setEventListeners(popupAddItem);
});

const openImage = (name, link) => {
  const PopupImage = new PopupWithImage(popupImg);
  PopupImage.open(name, link);
  setEventListeners(popupImg);
};
// создаем карточку
const createCard = (name, link) => {
  const card = new Card(name, link, "#template", openImage);
  const cardElement = card.generateCard();
  return cardElement;
};

// Добавляем карточик из массива
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      createCard(item.name, item.link, "#template", openImage);
      section.addItem(createCard(item.name, item.link));
    },
  },
  ".elements"
);

section.rendererItems();

const popupEdtiProfile = new PopupWithForm({
  popupSelector: popupEditInfo,
  submitForm: () => {
    userInfo.setUserInfo(nameInput, jobInput);
  },
});

const popupAddCard = new PopupWithForm({
  popupSelector: popupAddItem,
  submitForm: () => {
    const inputField = imageField.value;
    const inputTitle = imageTitle.value;
    section.addItem(createCard(inputTitle, inputField));
  },
});

popupEdtiProfile.setEventListeners();
popupAddCard.setEventListeners();
