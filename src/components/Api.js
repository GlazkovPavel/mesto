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
      headers: {
        authorization: 'df3e4aab-6899-4784-852c-de3c6ef6b3bc'
      }
    })
      .then(this._getResponse)
  }


  getUserInfoStart() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: 'df3e4aab-6899-4784-852c-de3c6ef6b3bc'
      }
    })
      .then(this._getResponse)
  }

  setUserInfoData(data) {
    fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: 'df3e4aab-6899-4784-852c-de3c6ef6b3bc',
        'Content-Type': 'application/json'
      },
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
      headers: {
        authorization: 'df3e4aab-6899-4784-852c-de3c6ef6b3bc',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._getResponse)
  }
}
