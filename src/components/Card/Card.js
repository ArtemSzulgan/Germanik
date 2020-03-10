import React from 'react';
import './card.scss';

function Card({
  textClass,
  avatar,
  className,
  name,
  position,
  tel,
  email,
  skype
}) {
  return (
    <div className={textClass}>
      <img src={avatar} className={className} alt="Avatar"/>
      <h3>{name}</h3>
      <h5>{position}</h5>
      <a className="card_ref" href={`tel:${tel}`}><i className="fas fa-phone"></i>{tel}</a>
      <a className="card_ref" href={`mailto:${email}`}><i className="fas fa-envelope"></i>{email}</a>
      <a className="card_ref" href={`skype:${skype}`}><i className="fab fa-skype"></i>{skype}</a>
    </div>
  );
}

export default Card;
