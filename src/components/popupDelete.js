import Popup from "./Popup.js";
export default class PopupDelete extends Popup{
  constructor({popupSelector, btnConfirm}){
    super(popupSelector)
    this.popup = document.querySelector(popupSelector)
    this.buttonConfirm = document.querySelector(btnConfirm)
  } 

  setSubmit(callback){
    this._submit = callback;
    
  }

  close(){
    super.close()
  }
  setEventListeners(){
    super.setEventListeners();
    this.popup.addEventListener('submit', (evt) =>{
      evt.preventDefault();
      this._submit
      console.log('Я работаю!')
      this.close()
    })
  }

}