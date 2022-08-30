// import "../pages/index.css"
// export class FormValidator
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
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

const popupConfirm = new PopupWithDelete({
  popupSelector: ".popup_confirm"
})

popupConfirm.setEventListeners()

const handleDeleteCard = (card) => {
  popupConfirm.open()
  popupConfirm.setSubmitAction(() => {
    api.deleteCard(card.id).then(() => {
      card.handleDeleteCard()
      popupConfirm.close()
    })
  })
}

// создаем карточку
const createCard = ({name, link, id}) => {

  const card = new Card(
    {handleClickDeleteIcon: handleDeleteCard,
    id: id},
    name,
    link,
    "#template",
    openImage);

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
          section.addItem(createCard({name: item.name, link: item.link, id: item._id}));
          const like = document.querySelector('.element__like')
          like.textContent = item.likes.length;
          const trashButton = document.querySelector('.element__trash-button')
          if(item.owner._id !== 'd5672d92285eb30f8077412e'){
            trashButton.remove()
          }
        });
      })
      .catch((error) => {
        console.log(error);
      }),
  },
  ".elements"
);

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
      section.addItem(createCard({name: data.imageTitle, link: data.imageLink}));
    }).catch((err) => {
      console.log(err)
    })
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
  popupEdtiProfile.open();
});
buttonAddProfile.addEventListener("click", function () {
  addformValidator.resetValidator();
  popupAddCard.open();
});

