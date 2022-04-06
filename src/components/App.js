import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { PopupWithForm } from "./PopupWithForm";
import { ImagePopup } from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsStateForProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setIsStateAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setIsStateEditAvatarPopup] = useState(false);
  const [selectedCard, setIsSelectedCard] = useState([]);
  const [isImagePopupIsOpen, setIsStateImagePopup] = useState(false);

  function handleEditAvatarClick() {
    setIsStateForProfilePopup(true);
  }
  function handleAddPlaceClick() {
    setIsStateAddPlacePopup(true);
  }
  function handleEditProfileClick() {
    setIsStateEditAvatarPopup(true);
  }

  function handleCardClick(props) {
    setIsSelectedCard(props);
    setIsStateImagePopup(true);
  }

  function closeAllPopups() {
    setIsStateForProfilePopup(false);
    setIsStateAddPlacePopup(false);
    setIsStateEditAvatarPopup(false);
    setIsStateImagePopup(null);
  }

  return (
    <div className="shell">
      <Header />
      <Main
        onAddPlaceClick={handleAddPlaceClick}
        onEditProfileClick={handleEditProfileClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        isEditPopupOpen={isEditProfilePopupOpen}
        isAddCardOpen={isAddPlacePopupOpen}
        isEditProfilePicOpen={isEditAvatarPopupOpen}
        closeThePopups={closeAllPopups}
        selectedCard={selectedCard}
        isImagePopupIsOpen={isImagePopupIsOpen}
      />

      <PopupWithForm
        name="edit-profile"
        title="Edit Profile"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Save"
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
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="New place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Create"
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
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Change profile picture"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Save"
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
      </PopupWithForm>
      <ImagePopup
        selectedCard={selectedCard}
        isOpen={isImagePopupIsOpen}
        isClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
