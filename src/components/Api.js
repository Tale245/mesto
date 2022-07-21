export default class Api {
  constructor(options) {
    this.url = options.url;
    this.authorization = options.authorization;
    this.urlName = document.querySelector("#name");
    this.urlJob = document.querySelector("#job");
    this.nameProfile = document.querySelector(".profile__title");
    this.nameJob = document.querySelector(".profile__paragraph");
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
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: {
        authorization: `${this.authorization}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
  }
}
