import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSrc = this._popup.querySelector(".popup__image");
    this._popupParagraph = this._popup.querySelector(".popup__paragraph");
  }

  open(name, link) {
    super.open();
    this._popupSrc.src = link;
    this._popupSrc.alt = name;
    this._popupParagraph.textContent = name;
  }
}
