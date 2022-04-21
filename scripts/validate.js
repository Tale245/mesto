
function showInputError(formElement, inputElement, errorMessage,errorClass, inputErrorClass){

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

  // показываем сообщение об ошибке
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}
function hideInputError(formElement, inputElement,errorClass, inputErrorClass){
  // находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)

// скрываем сообщение об ошибке
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) =>{
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass)
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass)
    buttonElement.disabled = false;
  }
}
const isValid = (formElement, inputElement,errorClass, inputErrorClass) => {
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage,errorClass, inputErrorClass);
  } else {
    hideInputError(formElement, inputElement, errorClass, inputErrorClass);
  }
};

const setEventListeners = (formElement, { inputSelector, submitButtonSelector,inactiveButtonClass, errorClass, inputErrorClass }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement, inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement,errorClass, inputErrorClass)
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass,  errorClass, inputErrorClass}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    });
    setEventListeners(formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, errorClass, inputErrorClass});
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'button__disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}); 