import React, { useEffect, useState } from "react";
import Cards from "../../cards/cards";
import CardsData from "../../../data/servicios"; 
import "./section2.css"



const Section2 = () =>{
    const [cards, setCards] = useState([]);

    useEffect(() => {
    setCards(CardsData);
    }, []);
    
    return(
        <div className="estilosBody2">
            <div className="contenedorComun2">
                <div className="contenedorRecuadroRojo2">
                    <div className="recuadroRojo2"></div>
                </div>
                <div className="contenedorTexto2">
                    <h2 className="estilosTexto2">SERVICIOS DE DESARROLLO DE SOFTWARE,<br/> ADAPTANDO CADA PROYECTO A LAS NECESIDADES DEL CLIENTE.
                    </h2>
                </div>
            </div>
            <div className="card-list">
                {cards.map((card, index) => (
                    <Cards
                    key={index}
                    title={card.title}
                    description={card.description}
                    icono={card.icono}
                    backgroundColor={card.backgroundColor}
                    borderColor={card.borderColor}
                    shadowColor={card.shadowColor}
                    />
                ))}
            </div>
        </div>
    )
}

export default Section2