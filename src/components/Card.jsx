import React from 'react';


function Card(props) {

  function handleClick() {
    props.onCardClick(props.card.link);
  }

  return (
    <div className="place-card" id={props.card.name}>
      <div className="place-card__image" style={{
        backgroundImage: `url(${props.card.link})`
      }} onClick={handleClick}>
        <button className="place-card__delete-icon" id='delete-icon'></button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name" >{props.card.name}</h3>
        <div className="place-card__like">
          <button className="place-card__like-icon"></button></div>
      </div>
    </div >
  )
}
export default Card;