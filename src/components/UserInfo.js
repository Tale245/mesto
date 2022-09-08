export default class UserInfo {
  constructor({userName, infoAboutUser, userAvatar}) {
    this._userName = document.querySelector(userName);
    this._infoAboutUser = document.querySelector(infoAboutUser);
    this._userAvatar = document.querySelector(userAvatar)
  }

  getUserInfo() {
    const user = {
      userName: this._userName.textContent,
      infoAboutUser: this._infoAboutUser.textContent,
    };
    return user;
  }

  changeAvatar({avatar}) {
    this._userAvatar.src = avatar
  }

  setUserInfo({name, job}) {
    this._userName.textContent = name;
    this._infoAboutUser.textContent = job;
  }
}
