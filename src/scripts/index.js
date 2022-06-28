// import "../pages/index.css"
// export class FormValidator
import FormValidator from "../components/FormValidator.js";
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

const userInfo = new UserInfo(title, subtitle);


const openImage = (name, link) => {
  const popupImage = new PopupWithImage('.popup_image-scale');
  popupImage.open(name, link);
  popupImage.setEventListeners()
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
  popupSelector: '.popup_edit-info',
  submitForm: (cardData) => {
    userInfo.setUserInfo(cardData);
  },
});

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_add-item',
  submitForm: (cardData) => {
    section.addItem(createCard(cardData.name, cardData.value));
  },
});

popupEdtiProfile.setEventListeners();
popupAddCard.setEventListeners();

// Открытие попапов
buttonEditProfile.addEventListener("click", function () {
  const infoAboutUser = userInfo.getUserInfo();
  nameInput.value = infoAboutUser.userName;
  jobInput.value = infoAboutUser.infoAboutUser;
  editformValidator.resetValidator();
  popupEdtiProfile.open()
});
buttonAddProfile.addEventListener("click", function () {
  addformValidator.resetValidator();
  popupAddCard.open()
});