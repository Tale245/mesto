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
  profileForm,
  nameInput,
  jobInput,
  buttonAddProfile,
  formAddItem,
  imageContainer,
  formChangeAvatar,
  profileImage,
} from "../utils/constants.js";
// Импорт объектов для валидации
import { enableValidation } from "../utils/enableValidation.js";
// Сюда запишем айди пользователя
let userId;

const user = {
  headers: {
    authorization: "5ef57d1b-1ea7-434a-b183-6df5295fe05d",
    "Content-Type": "application/json",
  },
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49'
};


const api = new Api(user);
// Для каждой проверяемой формы создали экземпляр класса FormValidator
const editformValidator = new FormValidator(enableValidation, profileForm);
const addformValidator = new FormValidator(enableValidation, formAddItem);
const changeAvatarValidator = new FormValidator(
  enableValidation,
  formChangeAvatar
);
editformValidator.enableValidation();
addformValidator.enableValidation();
changeAvatarValidator.enableValidation();

const userInfo = new UserInfo({
  userName: ".profile__title",
  infoAboutUser: ".profile__paragraph",
  userAvatar: ".profile__image",
});

Promise.all([api.userName(), api.getCards()]).then(([userData, cardsData]) => {
  userInfo.setUserInfo({
    name: userData.name,
    job: userData.about,
  });
  userInfo.changeAvatar({ avatar: userData.avatar });
  userId = userData._id;

  section.rendererItems(cardsData);
}).catch((error) => console.log(error));

const popupImage = new PopupWithImage(".popup_image-scale");
popupImage.setEventListeners();

const openImage = (name, link) => {
  popupImage.open(name, link);
};

const popupConfirm = new PopupWithDelete({
  popupSelector: ".popup_confirm",
});

popupConfirm.setEventListeners();

const handleDeleteCard = (data) => {
  popupConfirm.open();
  popupConfirm.setSubmitAction(() => {
    api
      .deleteCard(data)
      .then(() => {
        data.handleDeleteCard();
        popupConfirm.close();
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const handleLike = async (data) => {
  try {
    const like = await api.likeCard(data);
    data.likeCard(like.likes.length);
  } catch (error) {
    console.log(error);
  }
};
const handleDislike = async (data) => {
  try {
    const dislike = await api.dislikeCard(data);
    data.likeCard(dislike.likes.length);
  } catch (error) {
    console.log(error);
  }
};

// создаем карточку
const createCard = (data) => {
  const card = new Card(
    {
      handleClickDeleteIcon: handleDeleteCard,
      handleLikeCard: handleLike,
      handleDislikeCard: handleDislike,
      userId: userId,
    },
    data,
    "#template",
    openImage,
    "element__like"
  );
  const cardElement = card.generateCard();
  return cardElement;
};

// Добавляем карточик из массива

const section = new Section(
  {
    renderer: (data) => {
      section.addItem(createCard(data));
    },
  },
  ".elements"
);

const popupEdtiProfile = new PopupWithForm({
  popupSelector: ".popup_edit-info",
  submitForm: async (data) => {
    popupEdtiProfile.isLoading(true);
    try {
      const saveUserName = await api.saveUserName(data);
      userInfo.setUserInfo({
        name: saveUserName.name,
        job: saveUserName.about,
        
      })
      popupEdtiProfile.close();;
    } catch (e) {
      console.log(error);
    } finally {
      popupEdtiProfile.isLoading(false);
    }
  },
});

const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_add-item",
  submitForm: async (data) => {
    popupAddCard.isLoading(true);
    try {
      const card = await api.uploadCard(data);
      section.prependItem(createCard(card));
      popupAddCard.close();
    } catch (error) {
      console.log(error);
    } finally {
      popupAddCard.isLoading(false);
    }
  },
});

const popupAvatar = new PopupWithForm({
  popupSelector: ".popup_change-avatar",
  submitForm: async (data) => {
    popupAvatar.isLoading(true);
    try {
      const apiAvatar = await api.changeAvatar(data);
      userInfo.changeAvatar({ avatar: apiAvatar.avatar });
      popupAvatar.close();
    } catch (error) {
      console.log(error);
    } finally {
      popupAvatar.isLoading(false);
    }
  },
});

popupEdtiProfile.setEventListeners();
popupAddCard.setEventListeners();
popupAvatar.setEventListeners();

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
imageContainer.addEventListener("click", function () {
  changeAvatarValidator.resetValidator();
  popupAvatar.open();
});
