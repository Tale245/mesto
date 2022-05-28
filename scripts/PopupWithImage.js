import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._popupSrc = this._popupSelector.querySelector('.popup__image')
    this._popupParagraph = this._popupSelector.querySelector('.popup__paragraph')
  }

  open(name, link){
    super.open() 
    this._popupSrc.src = link;
    this._popupParagraph.alt = name;
    this._popupParagraph = name;
  }
}