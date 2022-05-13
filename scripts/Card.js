import { openImage } from './index.js';

export class Card {
    constructor(cardName, cardLink, templateSelector){
        this._cardName = cardName;
        this._cardLink = cardLink;
        this._templateSelector = templateSelector;
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
        this._element.querySelector('.element__button').addEventListener('click', () => {
            this._handleLikeClick()
        })
        //Обработчик события удаления карточки
        this._element.querySelector('.element__trash-button').addEventListener('click', () => {
            this._handleTrashClick();
        });
        // // Обработчик открытия попапа карточки
        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._handleOpenImagePopupClick()
        })
    }
       // Поиск кнопки лайка и добавление ей класса Active
    _handleLikeClick(){
        this._element.querySelector('.element__button').classList.toggle('element__button_active');
    }
    // Удаление карточки
    _handleTrashClick(){
        this._element.remove();
    }
    //открытие попапа карточки
    _handleOpenImagePopupClick(){
        openImage(this._cardName, this._cardLink);
    }

    generateCard(){
    // Запишем разметку в приватное поле _element
    // Чтобы у других элементов появился доступ к ней
    this._element = this._getTemplate();
    // Добавим слушатели
    this._setEventListeners()

    // Добавим данные в карточку
    this._element.querySelector('.element__img').src = this._cardLink;
    this._element.querySelector('.element__img').alt = this._cardName;
    this._element.querySelector('.element__title').textContent = this._cardName;
    return this._element;
    }
}
