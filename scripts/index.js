// Открытие popup редактирования информации
const buttonEditProfile = document.querySelector(".profile__edit-button");
const profileCloseBtn = document.querySelector(".popup__close-button");
const popupAddItem = document.querySelector(".popup_add-item");
const popupEditInfo = document.querySelector(".popup_edit-info");
const profileForm = popupEditInfo.querySelector(".popup__form_info_edit");
const nameInput = document.querySelector(".popup__field_name");
const jobInput = document.querySelector(".popup__field_job");
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
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__paragraph");
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


// функция проверки данных профиля
function checkProfile() {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  // открываем попап
  openPopup(popupEditInfo);
}

// // функция закрытие попапа
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keyup", onDocumentKeyUp);
// }

// // закрытие попапа на ESC
// function onDocumentKeyUp(event) {
//   if (event.key === "Escape") {
//     const popupOpened = document.querySelector(".popup_opened");
//     closePopup(popupOpened);
//   }
// }

// Функция открытие попапа при помощи класса Popup
const openPopup = ((popup) => {
  const popupOpen = new Popup(popup);
  popupOpen.open();
})

const popupClose = (popup, button, overlay) => {
      const popupClose = new Popup(popup)
      popupClose.setEventListeners(button, overlay);
}

// Открытие попапов
buttonEditProfile.addEventListener("click", function () {
  openPopup(popupEditInfo)
  popupClose(popupEditInfo, profileCloseBtn, overlayEdit)
  checkProfile();
  editformValidator.resetValidator();

});
buttonAddProfile.addEventListener("click", function () {
  openPopup(popupAddItem)
  addformValidator.resetValidator();
});
// // Закрытие попапов
// profileCloseBtn.addEventListener("click", function () {
//   closePopup(popupEditInfo);
// });
// btnInsertClose.addEventListener("click", function () {
//   closePopup(popupAddItem);
// });
// popupCloseImage.addEventListener("click", function () {
//   closePopup(popupImg);
// });
// overlayAdd.addEventListener("click", function () {
//   closePopup(popupAddItem);
// });
// overlayEdit.addEventListener("click", function () {
//   closePopup(popupEditInfo);
// });
// overlayImg.addEventListener("click", function () {
//   closePopup(popupImg);
// });

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


// Импортируем класс Section
import Section from './Section.js';

// Импортируем класс Card 
import Card from './Card.js';

// Создаем новый класс на основе Section
const section = new Section({
  items: initialCards,
  renderer: (cardItem) =>{
    const card = new Card (cardItem.name, cardItem.link, '#template', openImage)
    const cardElement = card.generateCard()

    section.addItem(cardElement)
  }
}, 
'.elements'
);

section.rendererItems()

// Экспортируем функцию открытия изображения в Card.js
export function openImage (name, link){
  imagePopup.src = link;
  imagePopup.alt = name;
  popupParagraph.textContent = name;
  openPopup(popupImg);
}
// // Функция добавление карточки на страницу
// function addItem(event) {
//   event.preventDefault();
//   const inputField = imageField.value;
//   const inputTitle = imageTitle.value;
//   addCard(inputField, inputTitle)
//   closePopup(popupAddItem);
//   formAddItem.reset();
// }

// // Добавляем карточку
// formAddItem.addEventListener("submit", addItem);
