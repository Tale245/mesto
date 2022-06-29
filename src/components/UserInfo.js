export default class UserInfo {
  constructor({userName, infoAboutUser}) {
    this._userName = document.querySelector(userName);
    this._infoAboutUser = document.querySelector(infoAboutUser);
  }

  getUserInfo() {
    const user = {
      userName: this._userName.textContent,
      infoAboutUser: this._infoAboutUser.textContent,
    };
    return user;
  }

  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._infoAboutUser.textContent = job;
  }
}
