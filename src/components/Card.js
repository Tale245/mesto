export default class Card {
    constructor(cardName, cardLink, templateSelector, handleCardClick){
        this._cardName = cardName;
        this._cardLink = cardLink;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        
    }
    _getTemplate(){
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }
    _setEventListeners(){
        //Обработчик события лайка
        this.elementButton = this._element.querySelector('.element__button');
        this.elementButton.addEventListener('click', () => {
            this._handleLikeClick()
        })
        //Обработчик события удаления карточки
        this._element.querySelector('.element__trash-button').addEventListener('click', () => {
            this._handleTrashClick();
        });
        // // Обработчик открытия попапа карточки
        this.cardImage.addEventListener('click', () => {
            this._handleOpenImagePopupClick()
        })
    }
       // Поиск кнопки лайка и добавление ей класса Active
    _handleLikeClick(){
        this.elementButton.classList.toggle('element__button_active');
    }
    // Удаление карточки
    _handleTrashClick(){
        this._element.remove();
    }
    //открытие попапа карточки
    _handleOpenImagePopupClick(){
        this._handleCardClick(this._cardName, this._cardLink);
    }

    generateCard(){
    // Запишем разметку в приватное поле _element
    // Чтобы у других элементов появился доступ к ней
    this._element = this._getTemplate();
    // Добавим слушатели
    this.cardImage = this._element.querySelector('.element__img')
    this._setEventListeners()

    // Добавим данные в карточку
    this.cardImage.src = this._cardLink;
    this.cardImage.alt = this._cardName;
    this._element.querySelector('.element__title').textContent = this._cardName;
    return this._element;
    }
}
