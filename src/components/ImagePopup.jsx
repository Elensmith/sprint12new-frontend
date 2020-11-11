import React from 'react';
import close from "../images/close.svg";

function ImagePopup(props) {

  return (
    <div className={`popup ${props.isOpen ? "popup_is-opened" : ""}`} id="popup-image">
      <div className="popup__image-container">
        <img src={props.card} alt="" id="popup-image-big" style={{ maxWidth: '80vw', maxHeight: '80vh' }} />
        <img src={close} alt="" id="popup__close_image" className="popup__close" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default ImagePopup;