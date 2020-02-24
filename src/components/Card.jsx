import React from "react";

function Card(props) {
    return(
        <div className={props.textClass}>
            <img src={props.avatar} className={props.class} alt="Avatar"/>
            <h3>{props.name}</h3>
            <h5>{props.position}</h5>
            <p><i className="fas fa-phone"></i>{props.tel}</p>
            <p><i className="fas fa-envelope"></i>{props.email}</p>
            <p><i className="fab fa-skype"></i>{props.skype}</p>
        </div>
    )
}

export default Card;
