const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');

function openPopup(){
    popup.classList.add('popup_opened');
}
function closePopup(){
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

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
    closePopup()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('click', formSubmitHandler);