import React, { useEffect, useState } from "react";
import Cards from "../carts/cards";
import CardsData from "../../data/servicios.json"; //Problemas con la importacion de los iconos

const Body = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
    setCards(CardsData);
    }, []);

    return (
        <>
        <div className="recuadroRojo"></div>
        <h2>Servicios de desarrollo de software, adaptando cada proyecto desde su concepto inicial hasta el código final. </h2>
            <div className="card-list">
                {cards.map((card, index) => (
                    <Cards
                    key={index}
                    title={card.title}
                    description={card.description}
                    icono={card.icono}
                    backgroundColor={card.backgroundColor}
                    />
                ))}
            </div>
        </>
    );
};

export default Body;