import React from 'react';
import close from "../images/close.svg";

function PopupWithForm(props) {

  return (
    <div className={`popup ${props.isOpen ? "popup_is-opened" : ""}`} id={`popup-${props.popup_id}`}>
      <div className="popup__content">
        <img src={close} alt="" className="popup__close" onClick={props.onClose}/>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" id={props.form_id} name={props.form_name}>
          <input type="text" name={props.input_one_name} className="popup__input popup__input_type_name" placeholder={props.input_one_placeholder} />
          <div className='popup__form_error' id='popup__form_error-name'></div>
          <input type="text" name={props.input_two_name} className="popup__input popup__input_type_link-url" placeholder={props.input_two_placeholder} />
          <div className='popup__form_error' id={`popup__form_error-${props.error_id}`}></div>
          <button className="button popup__button" id={`popup__button-${props.button_id}`} disabled>{props.button}</button>
        </form> 
      </div>
    </div>
  );
}

export default PopupWithForm;