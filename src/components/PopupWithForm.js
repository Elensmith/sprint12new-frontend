import React from 'react';
import close from "../images/close.svg";

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="popup" id={`popup-${this.props.popup_id}`}>
        <div className="popup__content">
          <img src={close} alt="" className="popup__close" />
          <h3 className="popup__title">{this.props.title}</h3>
          <form className="popup__form" id={this.props.form_id} name={this.props.form_name}>
            <input type="text" name={this.props.input_one_name} className="popup__input popup__input_type_name" placeholder={this.props.input_one_placeholder} />
            <div className='popup__form_error' id='popup__form_error-name'></div>
            <input type="text" name={this.props.input_two_name} className="popup__input popup__input_type_link-url" placeholder={this.props.input_two_placeholder} />
            <div className='popup__form_error' id={this.props.error_id}></div>
            <button className="button popup__button" id={`popup__button-${this.props.button_id}`} disabled>{this.props.button}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupWithForm;