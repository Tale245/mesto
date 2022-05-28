export default class UserInfo {
  constructor(userName, infoAboutUser){
    this._userName = userName;
    this._infoAboutUser = infoAboutUser;
  }

  getUserInfo(){
    const user ={
      userName: this._userName.textContent,
      infoAboutUser: this._infoAboutUser.textContent
    }
    return user
  }

  setUserInfo(){
    this._userName.textContent = this._userName;
    this._infoAboutUser.textContent = this._infoAboutUser;
  }
}