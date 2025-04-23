// Cards.jsx
import React from "react";

const Cards = ({
    title,
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
        onMouseEnter={() => onHover(video)}   
        onMouseLeave={onLeave}                
    >
        <img src={icono} alt="icono" className="card-icon" />
        <div>
            <h5
                className="card-title"
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </div> 
    </div>
);
};

export default Cards;
