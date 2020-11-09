import React from 'react';
import Header from './Header';
import PopupWithForm from "./PopupWithForm";
import Main from "./Main";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <div className="root">
        <Header />
        <Main
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick} />
        <PopupWithForm popup_id="newplace" title="Новое место" form_name="new" input_one_name="name" input_one_placeholder="Название" input_two_name="link" input_two_placeholder="Ссылка на картинку" error_id="link" button_id="new-place" button="+" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
        <PopupWithForm popup_id="edit" title="Редактировать профиль" form_id="popup__form-edit" form_name="edit" input_one_name="yourname" input_one_placeholder="Имя" input_two_name="about" input_two_placeholder="О себе" error_id="about" button_id="edit-save" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
        <ImagePopup />
      </div>
    </>
  );
}

export default App;
