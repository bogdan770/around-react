import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [isEditProfilePopupOpen, setStateForProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setStateAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setStateEditAvatarPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [isImagePopupIsOpen, setStateImagePopup] = useState(false);

  function handleEditAvatarClick() {
    setStateForProfilePopup(true);
  }
  function handleAddPlaceClick() {
    setStateAddPlacePopup(true);
  }
  function handleEditProfileClick() {
    setStateEditAvatarPopup(true);
  }

  function handleCardClick(props) {
    setSelectedCard(props);
    setStateImagePopup(true);
  }

  function closeAllPopups() {
    setStateForProfilePopup(false);
    setStateAddPlacePopup(false);
    setStateEditAvatarPopup(false);
    setStateImagePopup(false);
  }

  return (
    <div className="shell">
      <Header />
      <Main
        onAddPlaceClick={handleAddPlaceClick}
        onEditProfileClick={handleEditProfileClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        isEditPopupOpen={isEditAvatarPopupOpen}
        isAddCardOpen={isAddPlacePopupOpen}
        isEditProfilePicOpen={isEditProfilePopupOpen}
        closeThePopups={closeAllPopups}
        selectedCard={selectedCard}
        isImagePopupIsOpen={isImagePopupIsOpen}
      />
      <Footer />
    </div>
  );
}

export default App;
