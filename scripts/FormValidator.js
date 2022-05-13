export class FormValidator{
    constructor(object, formElement){
        this._object = object;
        this._formElement = formElement;
    }

    _showInputError(inputElement, errorMessage){
        const errorElement = document.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.add(this._object.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._object.errorClass);
    }

    _hideInputError(inputElement){
        const errorElement = document.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.remove(this._object.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._object.errorClass);
    }

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      };

    _toggleButtonState(inputList, buttonElement){
    if(this._hasInvalidInput(inputList)){
        buttonElement.classList.add(this._object.inactiveButtonClass);
        buttonElement.disabled = true;
    }else{
        buttonElement.classList.remove(this._object.inactiveButtonClass);
        buttonElement.disabled = false; 
    }
    }

    _isValid(inputElement){
        if(!inputElement.validity.valid){
            this._showInputError(inputElement, inputElement.validationMessage)
        } else{
            this._hideInputError(inputElement)
        }
    }

    _setEventListeners(){
        const inputList = Array.from(this._formElement.querySelectorAll(this._object.inputSelector));

        const buttonElement = this._formElement.querySelector(this._object.submitButtonSelector);

        this._toggleButtonState(inputList, buttonElement);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState(inputList, buttonElement)
            })
        })
    }

    enableValidation(){
        const formList = Array.from(document.querySelectorAll(this._object.formSelector));

        formList.forEach((_formElement) => {
            this._formElement.addEventListener("submit", (evt) => {
                evt.preventDefault();
              });
              this._setEventListeners()
        })
    }
}
