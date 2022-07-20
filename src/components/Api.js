export default class Api {
  constructor(options){
    this.url = options.url;
    this.authorization = options.authorization
  }
  
  userInfo(){
    return fetch(`${this.url}/users/me`,{
      headers: {
        authorization: `${this.authorization}`
      }
    })

  }

  addPhoto(){
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: `${this.authorization}`
      }
    })
  }
}