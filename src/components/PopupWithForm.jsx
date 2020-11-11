import React from 'react';
import close from "../images/close.svg";

function PopupWithForm(props) {

  return (
    <div className={`popup ${props.isOpen ? "popup_is-opened" : ""}`} id={`popup-${props.popup_id}`}>
      <div className="popup__content">
        <img src={close} alt="" className="popup__close" onClick={props.onClose} />
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" id={props.form_id} name={props.form_name}>
          {props.input_first}
          {props.input_second}
          <button className="button popup__button" id={`popup__button-${props.button_id}`} disabled>{props.button}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;