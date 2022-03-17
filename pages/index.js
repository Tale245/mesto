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

let cardElement = document.querySelectorAll('.element');
let buttonLike = document.querySelectorAll('.element__button');
console.log(cardElement)
let i = cardElement.length;

function like_1(){
    buttonLike[0].classList.toggle('element__button_active');
}
function like_2(){
    buttonLike[1].classList.toggle('element__button_active');
}
function like_3(){
    buttonLike[2].classList.toggle('element__button_active');
}
function like_4(){
    buttonLike[3].classList.toggle('element__button_active');
}
function like_5(){
    buttonLike[4].classList.toggle('element__button_active');
}
function like_6(){
    buttonLike[5].classList.toggle('element__button_active');
}
buttonLike[0].addEventListener('click', like_1);
buttonLike[1].addEventListener('click', like_2);
buttonLike[2].addEventListener('click', like_3);
buttonLike[3].addEventListener('click', like_4);
buttonLike[4].addEventListener('click', like_5);
buttonLike[5].addEventListener('click', like_6);

