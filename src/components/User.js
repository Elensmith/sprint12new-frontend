import React from 'react';

class User extends React.Component {

  handleEditProfileClick = () => {
    document.getElementById("popup-edit").classList.add("popup_is-opened");
  }

  handleAddPlaceClick = () => {
    document.getElementById("popup-newplace").classList.add("popup_is-opened");
  }

  render() {
    return (
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo"></div>
          <div className="user-info__data">
            <h1 className="user-info__name">Жак Кусто</h1>
            <p className="user-info__job">Исследователь</p>
            <button className="user-info__edit-button" onClick={this.handleEditProfileClick}>Edit</button>
          </div>
          <button className="button user-info__button" onClick={this.handleAddPlaceClick}>+</button>
        </div>
      </div>
    );
  }
}

export default User;