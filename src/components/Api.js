export default class Api {
  constructor(options) {
    this.url = options.url;
    this.authorization = options.authorization;
  }

  userInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: `${this.authorization}`,
      },
    });
  }
  updateUserInfo(data) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `${this.authorization}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      }),
    });
  }

  getPhoto() {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: `${this.authorization}`,
      },
    });
  }

  addPhoto(data) {
    console.log(data)
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: {
        authorization: `${this.authorization}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.imageTitle,
        link: data.imageLink,
      })
    })
  }
  deleteCard(cardId){
    return fetch(`${this.url}/cards/${cardId}`,{
      method: 'DELETE',
      headers: {
        authorization: `${this.authorization}`,
        "Content-Type": "application/json"
      },
      body: {
        _id: `${cardId}`
      }
    }
    )
  }
}
