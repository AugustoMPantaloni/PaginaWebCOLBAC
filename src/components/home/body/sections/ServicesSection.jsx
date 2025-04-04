// ServicesSection.jsx
import React, { useEffect, useState } from "react";
import Cards from "../../cards/cards";
import CardsData from "../../../../data/servicios";


const ServicesSection = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(CardsData);
    }, []);

    return (
        <section className="services-section">
            <div className="services-section__header">
                <div className="services-section__highlight-wrapper">
                    <div className="services-section__highlight" />
                </div>
                <div className="services-section__text-wrapper">
                    <h2 className="services-section__title">
                        SERVICIOS DE DESARROLLO DE SOFTWARE,<br />
                        ADAPTANDO CADA PROYECTO A LAS NECESIDADES DEL CLIENTE.
                    </h2>
                </div>
            </div>

            <div className="services-section__cards">
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
        </section>
    );
};

export default ServicesSection;
