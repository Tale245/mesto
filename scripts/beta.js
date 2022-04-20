
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

const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
};

const toggleButtonState = (inputList, buttonElement) =>{
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button__disabled')
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('button__disabled')
    buttonElement.disabled = false;
  }
}
const isValid = (formElement, inputElement) => {
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
  
  const buttonElement = formElement.querySelector('.popup__submit-button');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement);
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