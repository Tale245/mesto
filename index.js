let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');

function openPopup(){
    popup.classList.add('popup_opened');
}
function closePopup(){
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__submit-button');
let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();
    let title = document.querySelector('.profile__title');
    let subtitle = document.querySelector('.profile__paragraph');
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('click', formSubmitHandler);