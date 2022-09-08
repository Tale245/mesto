import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
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
