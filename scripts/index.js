// Открытие popup редактирования информации
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileCloseBtn = document.querySelector(".popup__close-button");
const popupAddItem = document.querySelector(".popup_add-item");
const popupEditInfo = document.querySelector(".popup_edit-info");
const popupForm = popupAddItem.querySelector(".popup__form_add-image");
const profileForm = popupEditInfo.querySelector(".popup__form_info_edit");
const nameInput = document.querySelector(".popup__field_name");
const jobInput = document.querySelector(".popup__field_job");
const buttonAddProfile = document.querySelector(".profile__add-button");
const btnInsertClose = document.querySelector(".popup__close-button_add");
const FormAddItem = popupAddItem.querySelector(".popup__form");
const imageField = popupAddItem.querySelector(".popup__field_image");
const imageTitle = popupAddItem.querySelector(".popup__field_title-image");
const elements = document.querySelector(".elements");
const imagePopup = document.querySelector(".popup__image");
const popupImg = document.querySelector(".popup_image-scale");
const popupParagraph = document.querySelector(".popup__paragraph");
const popupCloseImage = document.querySelector(".popup__close-button-image");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__paragraph");
const buttonSubmitAdd = document.querySelector(".popup__submit-button_add");
const buttonSubmitEdit = document.querySelector(".popup__submit-button_edit");
const ESC_KEY = "Escape";
const overlayAdd = document.querySelector(".popup__overlay-add");
const overlayEdit = document.querySelector(".popup__overlay-edit");
const overlayImg = document.querySelector(".popup__overlay-img");

const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "button__disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// export class FormValidator
import { FormValidator } from './FormValidator.js'

// Для каждой проверяемой формы создали экземпляр класса FormValidator
const EditformValidator = new FormValidator(enableValidation, profileForm);
const AddformValidator = new FormValidator(enableValidation, popupForm);
EditformValidator.enableValidation();
AddformValidator.enableValidation();

// функция открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", onDocumentKeyUp);
}


// функция проверки данных профиля
function checkProfile() {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  openPopup(popupEditInfo);
}

// функция закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", onDocumentKeyUp);
}

// закрытие попапа на ESC
function onDocumentKeyUp(event) {
  if (event.key === ESC_KEY) {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

// Открытие попапов
buttonEditProfile.addEventListener("click", function () {
  checkProfile();
  buttonSubmitEdit.disabled = false;
  buttonSubmitEdit.classList.remove("button__disabled");
});
buttonAddProfile.addEventListener("click", function () {
  openPopup(popupAddItem);
});
// Закрытие попапов
profileCloseBtn.addEventListener("click", function () {
  closePopup(popupEditInfo);
});
btnInsertClose.addEventListener("click", function () {
  closePopup(popupAddItem);
});
popupCloseImage.addEventListener("click", function () {
  closePopup(popupImg);
});
overlayAdd.addEventListener("click", function () {
  closePopup(popupAddItem);
});
overlayEdit.addEventListener("click", function () {
  closePopup(popupEditInfo);
});
overlayImg.addEventListener("click", function () {
  closePopup(popupImg);
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupEditInfo);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener("submit", handleProfileFormSubmit);
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

// Импортируем класс Card 
import { Card } from './Card.js';

// Проходимся по массиву при помощи класса Card
initialCards.forEach((item) => {
  const card = new Card (item.name, item.link, '#template')
  const cardElement = card.generateCard();
  elements.prepend(cardElement)
})

// Экспортируем функцию открытия изображения в Card.js
export function openImage (name, link){
  openPopup(popupImg);
  imagePopup.src = link;
  imagePopup.alt = name;
  popupParagraph.textContent = name;
}

// Функция создание карточки
const createCard = (inputField, inputTitle, templateSelector) => {
  const card = new Card(inputTitle, inputField, templateSelector);
  const cardElement = card.generateCard()
  elements.prepend(cardElement);
}
// функция блокировки кнопки
function disabledSubmit() {
  buttonSubmitAdd.classList.add("button__disabled");
  buttonSubmitAdd.disabled = true;
}
// Функция добавление карточки на страницу
function addItem(event) {
  event.preventDefault();
  const inputField = imageField.value;
  const inputTitle = imageTitle.value;
  createCard(inputField, inputTitle, '#template')
  closePopup(popupAddItem);
  FormAddItem.reset();
  disabledSubmit();
}

// Добавляем карточку
FormAddItem.addEventListener("submit", addItem);
