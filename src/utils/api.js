class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => {
        return Promise.reject(new Error(`Ошибка: ${err.message}`));
      });
  }

  editUserInfo(name, info) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: info,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // return Promise.reject(res)
      })

      .catch((err) => {
        return Promise.reject(new Error(`Ошибка: ${err.message}`));
      });
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => {
        return Promise.reject(new Error(`Ошибка: ${err.message}`));
      });
  }

  addNewCard(nameNew, linkNew) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: nameNew,
        link: linkNew,
      }),
    })
      .then((res) => {
        return res.json();
      })

      .catch((err) => {
        return Promise.reject(new Error(`Ошибка: ${err.message}`));
      });
  }
}

export const api = new Api({
  baseUrl: 'https://nomoreparties.co/cohort10',
  headers: {
    authorization: "20aa37b8-af35-4444-8adb-a17a8be26cc2",
    "Content-Type": "application/json",
  },
});
