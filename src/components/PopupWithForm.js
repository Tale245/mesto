import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__field");
    this._btnText = this._popupForm.querySelector(".popup__text-button");
  }
  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  isLoadingEditProfile = (isLoading) => {
    this._btnText.textContent = isLoading ? "Сохранение..." : "Сохранить";
  };

  isLoadingAddCard = (isLoading) => {
    this._btnText.textContent = isLoading ? "Сохранение..." : "Создать";
  };

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
