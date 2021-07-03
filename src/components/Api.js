export default class Api {
  constructor(config) {
    //this.url = config.url;
    //this.headers = config.headers;
  }
  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
      headers: {
        authorization: 'df3e4aab-6899-4784-852c-de3c6ef6b3bc'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  getUserInfoStart() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me', {
      headers: {
        authorization: 'df3e4aab-6899-4784-852c-de3c6ef6b3bc'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  setUserInfoData(data) {
    fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me', {
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  setCardServer(data) {
    fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

}
