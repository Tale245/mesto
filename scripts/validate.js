// валидация формы

const addForm = document.forms.addForm;
const editForm = document.forms.editForm;

const validateInput = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`)

  // validate input
  errorElement.textContent = input.validationMessage;

}

const enableButton = (button, inactiveButtonClass) => {
  button.disabled = false;
  button.classList.remove(inactiveButtonClass)
}
const disableButton = (button, inactiveButtonClass) => {
  button.disabled = true;
  button.classList.add(inactiveButtonClass)
}

const setButtonState = (button, isValid) => {
  if (isValid){
    enableButton(button, "button__disabled")
  }else{
    disableButton(button, "button__disabled")
  }
}


const handleInput = (event) => {
  const currentForm = event.currentTarget;
  const input = event.target;
  const submitButton = currentForm.querySelector('.popup__submit-button')


  validateInput(input)

  setButtonState(submitButton, currentForm.checkValidity())
}

const handleSubmit = (event) => {
  event.preventDefault();

  const currentForm = event.target;

  if (event.target.checkValidity()){
    currentForm.reset();
  }
}


addForm.addEventListener('submit', handleSubmit);
editForm.addEventListener('submit', handleSubmit);

addForm.addEventListener('input', handleInput);
editForm.addEventListener('input', handleInput);