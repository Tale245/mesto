// Открытие popup редактирования информации
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popupEditInfo = document.querySelector('.popup__edit-info');

function openPopupEdit(){
    popupEditInfo.classList.add('popup_opened');
}
function closePopupEdit(){
    popupEditInfo.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopupEdit);
closeButton.addEventListener('click', closePopupEdit);

// Находим форму в DOM
const formElement = document.querySelector('.popup__submit-button');
const nameInput = document.querySelector('.popup__field_name');
const jobInput = document.querySelector('.popup__field_job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();
    const title = document.querySelector('.profile__title');
    const subtitle = document.querySelector('.profile__paragraph');
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopupEdit()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('click', formSubmitHandler);

// Открытие popup добавления карточки
const addButton = document.querySelector('.profile__add-button');
const closeButtonAdd = document.querySelector('.popup__close-button_add');
const popupAddItem = document.querySelector('.popup__add-item');

function openPopupAdd(){
    popupAddItem.classList.add('popup_opened');
}
function closePopupAdd(){
    popupAddItem.classList.remove('popup_opened');
}

addButton.addEventListener('click', openPopupAdd);
closeButtonAdd.addEventListener('click', closePopupAdd);



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

const addItemButton = document.querySelector('.popup__submit-button_add');
let imageField = popupAddItem.querySelector('.popup__field_image');
let imageTitle = popupAddItem.querySelector('.popup__field_title-image');
const elements = document.querySelector('.elements');
const imagePopup = document.querySelector('.popup__image');
const elementImg = document.querySelector('.element__img');
const popupImg = document.querySelector('.popup__image-scale');
const popupParagraph = document.querySelector('.popup__paragraph');
const popupCloseImage = document.querySelector('.popup__close-button-image');

function creatItem(inputTitle, inputField){

    const cardTemplate = document.querySelector('#template').content;
    
    const cardItem = cardTemplate.querySelector('.element').cloneNode(true);
   
    cardItem.querySelector('.element__title').textContent = inputTitle;
    cardItem.querySelector('.element__img').src = inputField;
    cardItem.querySelector('.element__img').alt = inputTitle;

  // Удаление карточки  
    cardItem.querySelector('.element__trash-button').addEventListener('click', function(){
        cardItem.remove();
    })
    // Лайк карточки 
    cardItem.querySelector('.element__button').addEventListener('click', function(event){
        event.target.classList.toggle('element__button_active');
    })
    // Открытие попапа с изображением
    cardItem.querySelector('.element__img').addEventListener('click', function (){
      popupImg.classList.add('popup_opened');
      imagePopup.src = inputField;
      popupParagraph.textContent = inputTitle; 
    })
  // Закрытие попапа с изображением
    popupCloseImage.addEventListener('click', function (){
      popupImg.classList.remove('popup_opened');
    })

    elements.prepend(cardItem);
}


function addItem(event){
    event.preventDefault();
    let inputField = imageField.value;
    let inputTitle = imageTitle.value;
    creatItem(inputTitle, inputField);
    closePopupAdd()
    imageField.value = '';
    imageTitle.value = '';
}

// функция перебора массива
  initialCards.forEach(function (item){
    creatItem(item.name, item.link);
    })

addItemButton.addEventListener('click', addItem)