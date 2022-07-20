const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupAddItem = document.querySelector(".popup_add-item");
const popupEditInfo = document.querySelector(".popup_edit-info");
const profileForm = popupEditInfo.querySelector(".popup__form_info_edit");
const nameInput = document.querySelector(".popup__field_name");
const jobInput = document.querySelector(".popup__field_job");
const buttonAddProfile = document.querySelector(".profile__add-button");
const formAddItem = popupAddItem.querySelector(".popup__form_add-image");
const imageField = popupAddItem.querySelector(".popup__field_image");
const imageTitle = popupAddItem.querySelector(".popup__field_title-image");
const popupImg = document.querySelector(".popup_image-scale");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__paragraph");
const profileImage = document.querySelector('.profile__image');
const elements = document.querySelector('.elements')
export {buttonEditProfile, popupAddItem, popupEditInfo, profileForm, nameInput, jobInput, 
  buttonAddProfile, formAddItem, imageField, 
  imageTitle, popupImg, title, subtitle, profileImage, elements}