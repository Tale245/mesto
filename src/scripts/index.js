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
  subtitle,
  profileImage,
  elements
} from "../utils/constants.js";
// Импорт объектов для валидации
import { enableValidation } from "../utils/enableValidation.js";

const options = {
  url: 'https://nomoreparties.co/v1/cohort-45',
  authorization: '0461d828-cc38-4a4a-b920-219e98ca54de'
};

const api = new Api(options);
api.userInfo()
.then(res => res.json())
.then((result) => {
    console.log(result)
    title.textContent = result.name;
    subtitle.textContent = result.about;
    profileImage.src = result.avatar;
  })
.catch(err => console.log(err))

// Для каждой проверяемой формы создали экземпляр класса FormValidator
const editformValidator = new FormValidator(enableValidation, profileForm);
const addformValidator = new FormValidator(enableValidation, formAddItem);
editformValidator.enableValidation();
addformValidator.enableValidation();

// функция открытие попапа

const userInfo = new UserInfo({userName:'.profile__title', infoAboutUser: '.profile__paragraph'});
const popupImage = new PopupWithImage('.popup_image-scale');
popupImage.setEventListeners()


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
    renderer: (item) => {
      section.addItem(createCard(item.name, item.link));
    },
  },
  ".elements"
)

api.getPhoto()
.then(res => res.json())
.then((result) => {
  result.forEach((item) => {
    section.addItem(createCard(item.name, item.link))
  })
})
.catch((err) => {
 console.log(err)
})


const popupEdtiProfile = new PopupWithForm({
  popupSelector: '.popup_edit-info',
  submitForm: (data) => {
    api.updateUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data.name, data.job);
    })
    .catch((err) => {
      console.log(err)
     })
  },
});

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_add-item',
  submitForm: (data) => {
    api.addPhoto(data)
  .then(res => res.json())
  .then(result => console.log(result))
  .catch((err) => console.log(err))

    section.addItem(createCard(data.imageTitle,  data.imageLink))
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