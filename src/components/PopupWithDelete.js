import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this.popup = document.querySelector(popupSelector);
  }

  open() {
    super.open();
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this.button = document.querySelector(".popup__submit-confirm");
    this.button.addEventListener("click", () => {
      this._handleSubmitCallback();
    });
  }
}
