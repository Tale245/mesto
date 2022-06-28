import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitForm }) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector)
    this._submitForm = submitForm;
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._popupSelector.querySelectorAll(".popup__field");
  
  }
  _getInputValues() {

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._submitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
