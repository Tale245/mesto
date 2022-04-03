// Открытие popup редактирования информации
const editButton = document.querySelector('.profile__edit-button');
const profileCloseBtn = document.querySelector('.popup__close-button');
const popupEditInfo = document.querySelector('.popup_edit-info');
const popupFormd = document.querySelector('.popup__form_add-image');
const profileForm = popupEditInfo.querySelector('.popup__form_info_edit');
const nameInput = document.querySelector('.popup__field_name');
const jobInput = document.querySelector('.popup__field_job');
const addButton = document.querySelector('.profile__add-button');
const insertCloseBtn = document.querySelector('.popup__close-button_add');
const popupAddItem = document.querySelector('.popup_add-item');
const addItemForm = popupAddItem.querySelector('.popup__form');
const imageField = popupAddItem.querySelector('.popup__field_image');
const imageTitle = popupAddItem.querySelector('.popup__field_title-image');
const elements = document.querySelector('.elements');
const imagePopup = document.querySelector('.popup__image');
const popupImg = document.querySelector('.popup_image-scale');
const popupParagraph = document.querySelector('.popup__paragraph');
const popupCloseImage = document.querySelector('.popup__close-button-image');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__paragraph');

function openPopup(popup){
  popup.classList.add('popup_opened')
}
function closePopup(popup){
  popup.classList.remove('popup_opened')
}

// Открытие попапов
editButton.addEventListener('click', function(){
  openPopup(popupEditInfo)
});
addButton.addEventListener('click', function(){
  openPopup(popupAddItem)
});
// Закрытие попапов
profileCloseBtn.addEventListener('click', function(){
  closePopup(popupEditInfo)
});
insertCloseBtn.addEventListener('click', function(){
  closePopup(popupAddItem)
});
popupCloseImage.addEventListener('click', function (){
  closePopup(popupImg)
})

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup(popupEditInfo)
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', handleProfileFormSubmit);

// 6 карточек

const initialCards = [
    {
      name: 'GTR',
      link: 'https://images.unsplash.com/photo-1595527137281-3cb1fd8968ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Индонезия',
      link: 'https://images.unsplash.com/photo-1648426230909-e99ce0a4a133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
    },
    {
      name: 'Лос-Анджелес',
      link: 'https://images.unsplash.com/photo-1646285105405-8f1c6cbb6d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Cafe Racer',
      link: 'https://images.unsplash.com/photo-1645023925869-a5e4b5ebdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80'
    },
    {
      name: '70s',
      link: 'https://images.unsplash.com/photo-1581956214240-5b4e182889ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Винес-Бич',
      link: 'https://images.unsplash.com/photo-1584305161484-a959768b7614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
  ]; 

// создание карточки


function createCard(inputTitle, inputField){

    const cardTemplate = document.querySelector('#template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const elementImage = cardElement.querySelector('.element__img');
   
    cardElement.querySelector('.element__title').textContent = inputTitle;
    elementImage.src = inputField;
    elementImage.alt = inputTitle;

  // Удаление карточки  
  cardElement.querySelector('.element__trash-button').addEventListener('click', function(){
    cardElement.remove();
    })
    // Лайк карточки 
    cardElement.querySelector('.element__button').addEventListener('click', function(event){
        event.target.classList.toggle('element__button_active');
    })
    // Открытие попапа с изображением
    elementImage.addEventListener('click', function (){
      openPopup(popupImg)
      imagePopup.src = inputField;
      imagePopup.alt = inputTitle;
      popupParagraph.textContent = inputTitle; 
    })

    return cardElement
}
function createItem(inputTitle, inputField){
  const cardItem = createCard(inputTitle, inputField)
  elements.prepend(cardItem);
}

function addItem(event){
    event.preventDefault();
    const inputField = imageField.value;
    const inputTitle = imageTitle.value;
    createItem(inputTitle, inputField);
    closePopup(popupAddItem)
    addItemForm.reset()
}

// функция перебора массива
  initialCards.forEach(function (item){
    createItem(item.name, item.link);
    })

addItemForm.addEventListener('submit', addItem)