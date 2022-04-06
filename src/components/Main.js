import React from "react";
import { PopupWithForm } from "./PopupWithForm";
import { ImagePopup } from "./ImagePopup";
import { api } from "../utils/api";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import profilePicSrcByDefault from "../images/kermit.jpg";

function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState(profilePicSrcByDefault);
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserDescription(res.about);
        setUserName(res.name);
      })
      .catch(console.log);
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log());
  }, []);

  return (
    <main className="page">
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <button
            className="profile__avatar-btn"
            onClick={props.onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__username">{userName}</h1>
          <button
            className="profile__edit-button"
            onClick={props.onEditProfileClick}
            type="button"
          ></button>
          <p className="profile__userprof">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlaceClick}
          type="button"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                onCardClick={props.onCardClick}
                key={card._id}
                link={card.link}
                title={card.name}
                likes={`${card.likes.length}`}
              />
            );
          })}
        </ul>
      </section>

      <PopupWithForm
        name="edit-profile"
        title="Edit Profile"
        isOpen={props.isEditPopupOpen}
        onClose={props.closeThePopups}
      >
        <input
          type="text"
          className="input"
          id="userName"
          name="userName"
          placeholder="Name"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="userName-error" className="popup__error"></span>
        <input
          type="text"
          className="input"
          id="userJob"
          name="userJob"
          placeholder="About Me"
          required
          minLength="2"
          maxLength="200"
        />
        <span id="userJob-error" className="popup__error"></span>
        <button
          className="popup__button popup__button_change-profile"
          type="submit"
        >
          Save
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="New place"
        isOpen={props.isAddCardOpen}
        onClose={props.closeThePopups}
      >
        <input
          type="text"
          className="input"
          id="cardNameId"
          name="name"
          placeholder="Title"
          required
          minLength="1"
          maxLength="30"
        />
        <span id="cardNameId-error" className="popup__error"></span>
        <input
          type="url"
          className="input"
          id="cardLinkId"
          name="link"
          placeholder="Image URL"
          required
        />
        <span id="cardLinkId-error" className="popup__error"></span>
        <button
          className="popup__button popup__button_create-card"
          type="submit"
        >
          Create
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Change profile picture"
        isOpen={props.isEditProfilePicOpen}
        onClose={props.closeThePopups}
      >
        <input
          type="url"
          className="input"
          id="avatatLinkId"
          name="avatar"
          placeholder="Image link"
          required
        />
        <span id="avatatLinkId-error" className="popup__error"></span>
        <button
          className="popup__button popup__button_change-avarat"
          type="submit"
        >
          Save
        </button>
      </PopupWithForm>

      <ImagePopup
        selectedCard={props.selectedCard}
        isOpen={props.isImagePopupIsOpen}
        isClose={props.closeThePopups}
      />
    </main>
  );
}

export default Main;
