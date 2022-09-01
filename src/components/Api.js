export default class Api {
  constructor (userData){
    this.userData = userData;
  }

  res(res){
    if(res.ok){

      return res.json()
      
    } else {

      return console.log(res.status)
    }
  }

  // Загрузка данных о пользователе с сервера
  userName(){
    return fetch(`https://nomoreparties.co/v1/${this.userData.cohort}/users/me`, {
      headers: {
        authorization: `${this.userData.authorization}`
      } 
    })
    .then(res => {
      return this.res(res)
    })
  }

  // Загрузка карточек с сервера
  getCards(){
    return fetch(`https://mesto.nomoreparties.co/v1/${this.userData.cohort}/cards`, {
      headers: {
        authorization: `${this.userData.authorization}`
      }
    })
    .then(res => {
      return this.res(res)
    })
  }

  // Сохранение измененных данных профиля
  saveUserName(data){
    return fetch(`https://mesto.nomoreparties.co/v1/${this.userData.cohort}/users/me`, {
      method: 'PATCH',
      headers:{
        authorization: `${this.userData.authorization}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(res => {
      return this.res(res)
    })
  }

   uploadCard(data){
    return fetch(`https://mesto.nomoreparties.co/v1/${this.userData.cohort}/cards`, {
      method: 'POST',
      headers:{
        authorization: `${this.userData.authorization}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
        
      })
    })
    .then(res => {
      return this.res(res)
    })
  }


  deleteCard(data){
    const id = data._data._id
    return fetch(`https://mesto.nomoreparties.co/v1/${this.userData.cohort}/cards/${id}`,{
      method: 'DELETE',
      headers: {
        authorization: `${this.userData.authorization}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: id
      })
    }
    )
    .then(res => {
      return this.res(res)
    })
  }

}
