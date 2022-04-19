
function showInputError(formElement, inputElement, errorMessage){

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

  // показываем сообщение об ошибке
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
}
function hideInputError(formElement, inputElement){
  // находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

// скрываем сообщение об ошибке
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
}
const isValid = (formElement, inputElement) => {
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// formElement.addEventListener('submit', function(evt){
//   evt.preventDefault();
// })

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    });
    setEventListeners(formElement);
  });
};
enableValidation();
// formInput.addEventListener('input', isValid)