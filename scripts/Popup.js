export default class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector;
    }

    open(){
    this._popupSelector.classList.add("popup_opened");
    // document.addEventListener("keyup", onDocumentKeyUp);
    }

    close(){
    this._popupSelector.classList.remove("popup_opened");
    }

    _handleEscClose(event){
        if (event.key === "Escape") {
            const popupOpened = document.querySelector(".popup_opened");
            closePopup(popupOpened);
          }
    }

    setEventListeners(popupCloseButton, popupOverlay){
        popupCloseButton.addEventListener('click', () => {
            close()
        })
        popupOverlay.addEventListener('click', () => {
            close()
        })
    }
}