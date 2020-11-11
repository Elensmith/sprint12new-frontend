import React from 'react';
import { api } from "../utils/api";
import Header from './Header';
import PopupWithForm from "./PopupWithForm";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import InputPopup from "./InputPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cardData, setCardData] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(cardId) {
    setSelectedCard(true);
    setCardData(cardId);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        console.log(userInfo);
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }, []);

  // получить все карточки
  React.useEffect(() => {
    api.getCards()
      .then((cardsArr) => {
        setCards(cardsArr);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }, []);

  return (
    <>
      <div className="root">
        <Header />
        <Main
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          userAvatar={currentUser.avatar}
          userName={currentUser.name}
          userDescription={currentUser.about}
          cards={cards}
        />
        {/* попап новое место */}
        <PopupWithForm
          popup_id="newplace"
          title="Новое место"
          form_name="new"
          button_id="new-place"
          button="+"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          input_first={
            <InputPopup
              input_name="name"
              input_placeholder="Название" />
          }
          input_second={
            <InputPopup
              input_name="link"
              input_placeholder="Ссылка на картинку"
              error_id="link" />
          } />
        {/* попап редактировать профиль */}
        <PopupWithForm
          popup_id="edit"
          title="Редактировать профиль"
          form_id="popup__form-edit"
          form_name="edit"
          button_id="edit-save"
          button="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          input_first={
            <InputPopup
              input_name="yourname"
              input_placeholder="Имя" />
          }
          input_second={
            <InputPopup
              input_name="about"
              input_placeholder="О себе"
              error_id="about" />
          } />
        {/* попап новый аватар */}
        <PopupWithForm
          popup_id="newavatar"
          title="Обновить аватар"
          form_name="avatar"
          button_id="edit-avatar"
          button="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          input_first={
            <InputPopup
              input_name="name"
              input_placeholder="Ссылка на аватар" />
          } />
        {/* попап увеличить изображение */}
        <ImagePopup
          isOpen={selectedCard}
          card={cardData}
          onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
