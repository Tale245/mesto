// import "../pages/index.css"
// export class FormValidator
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
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
  subtitle
} from "../utils/constants.js";
// Импорт объектов для валидации
import { enableValidation } from "../utils/enableValidation.js";

const user = {
  cohort: "cohort-49",
  authorization: "5ef57d1b-1ea7-434a-b183-6df5295fe05d",
};

const api = new Api(user);


// Для каждой проверяемой формы создали экземпляр класса FormValidator
const editformValidator = new FormValidator(enableValidation, profileForm);
const addformValidator = new FormValidator(enableValidation, formAddItem);
editformValidator.enableValidation();
addformValidator.enableValidation();

// функция открытие попапа

const userInfo = new UserInfo({
  userName: ".profile__title",
  infoAboutUser: ".profile__paragraph",
});

api
  .userName()
  .then((result) => {
    userInfo.setUserInfo(result.name, result.about);
  })
  .catch((error) => {
    console.log(error);
  });

const popupImage = new PopupWithImage(".popup_image-scale");
popupImage.setEventListeners();

const openImage = (name, link) => {
  popupImage.open(name, link);
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
    renderer: api
      .getCards()
      .then((res) => {
        return res.forEach((item) => {
          console.log(item.likes.length)
          createCard(item.name, item.link, "#template", openImage);
          section.addItem(createCard(item.name, item.link));
          const like = document.querySelector('.element__like')
          like.textContent = item.likes.length
        });
      })
      .catch((error) => {
        console.log(error);
      }),
  },
  ".elements"
);

// const popupEdtiProfile = new PopupWithForm({
//   popupSelector: ".popup_edit-info",
//   submitForm: api.saveUserName(data).then((data) => {
//     userInfo.setUserInfo(data.name, data.about);
//   }),
// });
const popupEdtiProfile = new PopupWithForm({
  popupSelector: ".popup_edit-info",
  submitForm: (data) => {
    api.saveUserName(data)
      .then((data) => {
        console.log(data);
        userInfo.setUserInfo(data.name, data.about);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_add-item",
  submitForm: (data) => {
    api.uploadCard(data).then(() => {
      section.addItem(createCard(data.imageTitle, data.imageLink));
    }).catch((err) => {
      console.log(err)
    })
  },
});
// const popupAddCard = new PopupWithForm({
//   popupSelector: ".popup_add-item",
//   submitForm: (data) => {
//       section.addItem(createCard(data.imageTitle, data.imageLink));
//   },
// });

popupEdtiProfile.setEventListeners();
popupAddCard.setEventListeners();

// Открытие попапов
buttonEditProfile.addEventListener("click", function () {
  const infoAboutUser = userInfo.getUserInfo();
  nameInput.value = infoAboutUser.userName;
  jobInput.value = infoAboutUser.infoAboutUser;
  editformValidator.resetValidator();
  popupEdtiProfile.open();
});
buttonAddProfile.addEventListener("click", function () {
  addformValidator.resetValidator();
  popupAddCard.open();
});
