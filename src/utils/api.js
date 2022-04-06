const customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText)
  );

export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return customFetch(`${this._baseUrl}/cards`, { headers: this._headers });
  }

  getUserInfo() {
    return customFetch(`${this._baseUrl}/users/me`, { headers: this._headers });
  }

  createCard(name, link) {
    const data = { name, link };
    return customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/${cardId} `, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  editProfile(name, about) {
    const data = { name, about };
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  updatingProfilePic(data) {
    return customFetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  likeCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/likes/${cardId} `, {
      headers: this._headers,
      method: "PUT",
    });
  }

  dislikeCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/likes/${cardId} `, {
      headers: this._headers,
      method: "DELETE",
    });
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",

  headers: {
    authorization: "433f6e92-8eab-41fc-9b11-52559de1ddbb",
    "Content-Type": "application/json",
  },
});
