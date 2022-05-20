export default class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open(){
    this._popupSelector.classList.add("popup_opened");
    this._popupSelector.addEventListener("keyup", this._handleEscClose)
    }

    close(){
    this._popupSelector.classList.remove("popup_opened");
    this._popupSelector.removeEventListener("keyup", this._handleEscClose)
    }

    _handleEscClose(event){
        if (event.key === "Escape") {
            this.close()
          }
    }

    setEventListeners(popupCloseButton, overlay){
        
        popupCloseButton.addEventListener('click', () => {
            this.close()
        })

        overlay.addEventListener('click', () => {
            this.close()
        })
    }
}