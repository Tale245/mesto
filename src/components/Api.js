export default class Api {
  constructor(userData) {
    this.userData = userData;
    this._headers = userData.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  // Загрузка данных о пользователе с сервера
  userName() {
    return fetch(
      `https://nomoreparties.co/v1/${this.userData.cohort}/users/me`,
      {
        headers: this._headers,
      }
    ).then((res) => {
      return this._checkResponse(res);
    });
  }

  // Загрузка карточек с сервера
  getCards() {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this.userData.cohort}/cards`,
      {
        headers: this._headers,
      }
    ).then((res) => {
      return this._checkResponse(res);
    });
  }

  // Сохранение измененных данных профиля
  saveUserName(data) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this.userData.cohort}/users/me`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.job,
        }),
      }
    ).then((res) => {
      return this._checkResponse(res);
    });
  }

  uploadCard(data) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this.userData.cohort}/cards`,
      {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      }
    ).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteCard(data) {
    this._id = data._data._id;
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this.userData.cohort}/cards/${this._id}`,
      {
        method: "DELETE",
        headers: this._headers,
        body: JSON.stringify({
          _id: this._id,
        }),
      }
    ).then((res) => {
      return this._checkResponse(res);
    });
  }

  likeCard(data) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this.userData.cohort}/cards/${data._data._id}/likes`,
      {
        method: "PUT",
        headers: this._headers,
        body: JSON.stringify({
          likes: data._data.likes,
        }),
      }
    ).then((res) => {
      return this._checkResponse(res);
    });
  }

  dislikeCard(data) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this.userData.cohort}/cards/${data._data._id}/likes`,
      {
        method: "DELETE",
        headers: this._headers,
        body: JSON.stringify({
          likes: data._data.likes,
        }),
      }
    ).then((res) => {
      return this._checkResponse(res);
    });
  }

  changeAvatar(data) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this.userData.cohort}/users/me/avatar`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      }
    ).then((res) => {
      return this._checkResponse(res);
    });
  }
}
