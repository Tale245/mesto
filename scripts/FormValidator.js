class FormValidator{
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

    toggleButtonState(inputList, buttonElement){
    if(this._hasInvalidInput(inputList)){
        buttonElement.classList.add(this._object.inactiveButtonClass);
        buttonElement.disabled = true;
    }else{
        buttonElement.classList.remove(this._object.inactiveButtonClass);
        buttonElement.disabled = false; 
    }
    }

    resetValidator(){
        this.toggleButtonState(this._inputList, this._buttonElement)

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        })
    }

    _isValid(inputElement){
        if(!inputElement.validity.valid){
            this._showInputError(inputElement, inputElement.validationMessage)
        } else{
            this._hideInputError(inputElement)
        }
    }

    _setEventListeners(){
        this._inputList = Array.from(this._formElement.querySelectorAll(this._object.inputSelector));

        this._buttonElement = this._formElement.querySelector(this._object.submitButtonSelector);

        this.toggleButtonState(this._inputList, this._buttonElement);

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState(this._inputList, this._buttonElement)
            })
        })
    }

    enableValidation(){
        this._formElement.addEventListener("sumbit", (evt) => {
            evt.preventDefault();
        })
        this._setEventListeners()
    }
}
