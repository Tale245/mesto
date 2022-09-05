import Popup from "./Popup.js";
export default class PopupWithAvatar extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector)
  }

  open() {
    super.open();
  }

  handleSubmitBtn(callback){
    this._callback = callback
  }

  setEventListeners(){
    super.setEventListeners()

    this.submitBtn = this._popup.querySelector(".popup__submit-change-avatar")
    this.submitBtn.addEventListener('submit', () => {
      // event.preventDefault();
      console.log('im work!')
    })
  }
}
