import React from 'react';
import close from "../images/close.svg";
import PopupWithForm from "./PopupWithForm";


function Main() {
  return (
    <>
      <div className="places-list root__section"></div>
      <PopupWithForm popup_id="newplace" title="Новое место" form_id="" form_name="new" input_one_name="name" input_one_placeholder="Название" input_two_name="link" input_two_placeholder="Ссылка на картинку" error_id="popup__form_error-link" button_id="new-place" button="+" />
      <PopupWithForm popup_id="edit" title="Редактировать профиль" form_id="popup__form-edit" form_name="edit" input_one_name="yourname" input_one_placeholder="Имя" input_two_name="about" input_two_placeholder="О себе" error_id="popup__form_error-about" button_id="edit-save" button="Сохранить" />
      <div className="popup" id="popup-image">
        <div className="popup__image-container">
          {/* <img src="" id="popup-image-big" style="max-width: 80vw; max-height: 80vh;" /> */}
          <img src={close} alt="" id="popup__close_image" className="popup__close" />
        </div>
      </div>
    </>
  );
}

export default Main;