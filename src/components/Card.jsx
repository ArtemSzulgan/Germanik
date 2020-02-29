import React from "react";

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
            <p><i className="fas fa-phone"></i>{tel}</p>
            <p><i className="fas fa-envelope"></i>{email}</p>
            <p><i className="fab fa-skype"></i>{skype}</p>
        </div>
    );
}

export default Card;
