export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(this._getResponse)
  }

  getUserInfoStart() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then(this._getResponse)
  }

  setUserInfoData(data) {
    fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
      .then(this._getResponse)
  }

  setCardServer(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._getResponse)
  }

  putLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._getResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._getResponse)
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._getResponse)
  }

  changeAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link,
      })
    })
      .then(this._getResponse)
  }
}


