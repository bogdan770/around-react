import React from "react";
import { ImagePopup } from "./ImagePopup";
import { api } from "../utils/api";
import { useState } from "react";
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
                likes={card.likes.length}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
