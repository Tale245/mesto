import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__field");
    this._submitBtn = this._popupForm.querySelector(".popup__submit-button");
    this._submitBtnText = this._submitBtn.textContent
  }
  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  isLoading(isLoading, loadingText = 'Сoхранение...'){
    if(isLoading){
      this._submitBtn.textContent = loadingText
    } else{
      this._submitBtn.textContent = this._submitBtnText
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._submitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
