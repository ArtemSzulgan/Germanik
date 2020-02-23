import React from "react";

function Card(props) {
    return(
        <div className='contact-card'>
            <img src={props.avatar} className={props.class} alt="Avatar"/>
            <h3>{props.name}</h3>
            <p>{props.tel}</p>
        </div>
    )
}

export default Card;
