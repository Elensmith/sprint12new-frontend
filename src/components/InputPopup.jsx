import React from 'react';

function InputPopup(props) {

  return (
    <>
      <input type="text" name={props.input_name} className="popup__input popup__input_type_name" placeholder={props.input_placeholder} />
      <div className='popup__form_error' id={`popup__form_error-${props.error_id}`}></div>
    </>
  );
}

export default InputPopup;