import React from "react";
import "./Cards.css"; 

const Cards = ({title, description, icono, backgroundColor}) => {
    return (
        <div className="card">
            <img src={icono} alt="icono" className="card-icon" />
            <div  style={{ backgroundColor }} className="color-title">
                <h5 className="card-title">{title}</h5>
            </div>
            <p className="card-text"> {description}</p>
        </div>
    );
};

export default Cards;