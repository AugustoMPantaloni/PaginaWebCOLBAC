import React from "react";
import "./Cards.css"; 

const Cards = ({title, description, icono, backgroundColor, borderColor, shadowColor}) => {
    return (
            <div className="card" style={{border: `1px solid ${borderColor}`,}}>
                <img src={icono} alt="icono" className="card-icon" />
                <div  
                    style={{ 
                        backgroundColor,
                        boxShadow: `0px 2px 4px 1px ${shadowColor}`,
                        WebkitBoxShadow: `0px 2px 4px 1px ${shadowColor}`,
                        MozBoxShadow: `0px 2px 4px 1px ${shadowColor}`
                    }}
                >
                    <h5 className="card-title" dangerouslySetInnerHTML={{ __html: title }}/>
                </div>
                <p  className="card-text" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
    );
};

export default Cards;