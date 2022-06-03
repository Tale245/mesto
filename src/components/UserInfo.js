export default class UserInfo {
  constructor(userName, infoAboutUser) {
    this._userName = userName;
    this._infoAboutUser = infoAboutUser;
  }

  getUserInfo() {
    const user = {
      userName: this._userName.textContent,
      infoAboutUser: this._infoAboutUser.textContent,
    };
    return user;
  }

  setUserInfo(userName, aboutUser) {
    this._userName.textContent = userName.value;
    this._infoAboutUser.textContent = aboutUser.value;
  }
}
