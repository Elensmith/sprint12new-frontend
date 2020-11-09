import React from 'react';
import close from "../images/close.svg";

class ImagePopup extends React.Component {
  render() {
    return (
      <div className="popup" id="popup-image">
        <div className="popup__image-container">
          {/* <img src="" id="popup-image-big" style="max-width: 80vw; max-height: 80vh;" /> */}
          <img src={close} alt="" id="popup__close_image" className="popup__close" />
        </div>
      </div>
    );
  }
}

export default ImagePopup;