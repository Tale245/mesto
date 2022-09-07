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
  subtitle,
  imageContainer,
  formChangeAvatar,
  changeAvatarField,
  profileImage
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
const changeAvatarValidator = new FormValidator(enableValidation, formChangeAvatar)
editformValidator.enableValidation();
addformValidator.enableValidation();
changeAvatarValidator.enableValidation();


const userInfo = new UserInfo({
  userName: ".profile__title",
  infoAboutUser: ".profile__paragraph",
});


api
  .userName()
  .then((result) => {
    userInfo.setUserInfo(result.name, result.about);
    profileImage.src = result.avatar
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

const handleDeleteCard = (data) => {
  popupConfirm.open()
  popupConfirm.setSubmitAction(() => {
    console.log(data)
    api.deleteCard(data).then(() => {
      data.handleDeleteCard()
      popupConfirm.close()
    }).catch((error) => {
      console.log(error);
    })
  })
}

const handleLike = async (data) => {
  try{
    const like = await api.likeCard(data)
    data.likeCard(like.likes.length)
  } catch(error){
    console.log(error)
  }
}
const handleDislike = async (data) => {
  try{
    const dislike = await api.dislikeCard(data)
    data.likeCard(dislike.likes.length)
  } catch(error){
    console.log(error)
  }

}

// создаем карточку
const createCard = (data) => {
  const card = new Card(
    {handleClickDeleteIcon: handleDeleteCard,
    handleLikeCard: handleLike,
    handleDislikeCard: handleDislike},
    data,
    "#template",
    openImage);
  const cardElement = card.generateCard();
  return cardElement;
};

// Добавляем карточик из массива
const section = new Section(
  { renderer: api.getCards()
    .then((res) => {
      return res.forEach((data) => {
        section.addItem(createCard(data));
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
    editformValidator.isLoadingEdit(true)
    api.saveUserName(data)
      .then((data) => {
        userInfo.setUserInfo(data.name, data.about);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editformValidator.isLoadingEdit(false)
      })
  },
});


const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_add-item",
  submitForm:  async (data) => {
    addformValidator.isLoadingAdd(true)
    try{
     const card = await api.uploadCard(data)
     section.addItem(createCard(card));
    } catch(error){
      console.log(error)
    };
    addformValidator.isLoadingAdd(false)
  },
});

const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_change-avatar',
  submitForm: async (data) => {
    changeAvatarValidator.isLoadingEdit(true)
    try{
      const apiAvatar = await api.changeAvatar(data)
      profileImage.src = apiAvatar.avatar
    } catch(error){
      console.log(error)
    }
    changeAvatarValidator.isLoadingEdit(false)
  }
})

popupEdtiProfile.setEventListeners();
popupAddCard.setEventListeners();
popupAvatar.setEventListeners()

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
imageContainer.addEventListener('click', function () {
  changeAvatarValidator.resetValidator()
  popupAvatar.open()
})
