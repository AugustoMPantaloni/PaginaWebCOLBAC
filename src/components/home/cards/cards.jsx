// Cards.jsx
import React from "react";

const Cards = ({
    title,
    description,
    icono,
    backgroundColor,
    borderColor,
    shadowColor,
    onHover,       
    onLeave,        
    video           
}) => {
    return (
    <div
        className="card"
        style={{ border: `1px solid ${borderColor}` }}
        onMouseEnter={() => onHover(video)}   
        onMouseLeave={onLeave}                
    >
        <img src={icono} alt="icono" className="card-icon" />
        <div
        style={{
            backgroundColor,
            boxShadow: `0px 2px 4px 1px ${shadowColor}`,
            WebkitBoxShadow: `0px 2px 4px 1px ${shadowColor}`,
            MozBoxShadow: `0px 2px 4px 1px ${shadowColor}`,
        }}
        >
        <h5
            className="card-title"
            dangerouslySetInnerHTML={{ __html: title }}
        />
        </div>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
);
};

export default Cards;
