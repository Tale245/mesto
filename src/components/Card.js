export default class Card {
  constructor({ handleClickDeleteIcon, handleLikeCard, handleDislikeCard }, data, templateSelector, handleCardClick) {
    this._data = data;
    this._cardName = data.name;
    this._cardLink = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleClickDeleteIcon = handleClickDeleteIcon;
    this._handleLikeCard = handleLikeCard;
    this._handleDislikeCard = handleDislikeCard;
    this._userId = "d5672d92285eb30f8077412e";
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }
  _setEventListeners() {
    //Обработчик события лайка
    this.elementButton = this._element.querySelector(".element__button");
    this.elementButton.addEventListener("click", () => {
      this._handleLikeClick();
    });
    //Обработчик события удаления карточки
    this._trashBtn = this._element.querySelector(".element__trash-button");
    this._trashBtn.addEventListener("click", () => {
      this._handleClickDeleteIcon(this);
    });
    // // Обработчик открытия попапа карточки
    this.cardImage.addEventListener("click", () => {
      this._handleOpenImagePopupClick();
    });
  }

  likeCard(likes) {
    this.elementButton.classList.toggle("element__button_active");
    this._element.querySelector(".element__like").textContent = likes;
  }
  _handleLikeOnCard() {
     if(this._isLiked == false){
        this._handleLikeCard(this)
     } else{
        this._handleDislikeCard(this)
     }
  }

  // Поиск кнопки лайка и добавление ей класса Active
  _handleLikeClick() {
    this._handleLikeOnCard();
  }
  // Удаление карточки
  handleDeleteCard() {
    this._element.remove();
  }
  //открытие попапа карточки
  _handleOpenImagePopupClick() {
    this._handleCardClick(this._cardName, this._cardLink);
  }
  // поставим в карточку обработчик, который покажет, ставил ли пользователь лайк, или нет.
  _isLiked(){
    return Boolean(this._data.likes.find( (item) => {
      return item._id === this._userId
    }))
  }
  generateCard() {
    // Запишем разметку в приватное поле _element
    // Чтобы у других элементов появился доступ к ней
    this._element = this._getTemplate();

    // Добавим слушатели
    this.cardImage = this._element.querySelector(".element__img");

    this._setEventListeners();

    this._isLiked();

    // Добавим данные в карточку
    this.cardImage.src = this._cardLink;
    this.cardImage.alt = this._cardName;
    this._element.querySelector(".element__title").textContent = this._cardName;

    // Удаляем корзинку удаления, если айди не совпадает
    if (this._data.owner._id !== this._userId) {
      this._trashBtn.remove();
    }
    // показываем кол-во лайков на карточке
    this._element.querySelector(".element__like").textContent =
      this._data.likes.length;

    return this._element;
  }
}
