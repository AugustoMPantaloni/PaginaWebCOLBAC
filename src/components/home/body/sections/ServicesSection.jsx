//Dependencias directas
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
//Dependencias externas (librerias, etc.)

//Componentes
import Cards from "../../cards/cards";
import CardsData from "../../../../data/servicios";

const ServicesSection = () => {
  const [cards, setCards] = useState([]); 
  const [activeVideo, setActiveVideo] = useState(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);



  useEffect(() => {
    setCards(CardsData);
  }, []);
  return (
    <section className="services-section" data-aos="fade-up">
      <video
        className={`services-section__background-video ${
          activeVideo ? "visible" : ""
        }`}
        src={activeVideo || ""}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="services-section__header">
        <div className="services-section__text-wrapper">
          <h2
            className={`services-section__title ${
              isHoveringCard ? "hovered" : ""
            }`}
          >
            SOLUCIONES COLBAC
          </h2>
          <h2
            className={`services-section__titleTwo ${
              isHoveringCard ? "hovered" : ""
            }`}
          >
            QUE HACEMOS
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
            video={card.video}
            onHover={(video) => {
              setActiveVideo(video);
              setIsHoveringCard(true);
            }}
            onLeave={() => {
              setActiveVideo(null);
              setIsHoveringCard(false);
            }}
          />
        ))}
      </div>

      <div className="services-section__container-cta">
        <Link to="Servicios" className="services-section__cta"> Más sobre lo que hacemos</Link>
      </div>
    </section>
  );
};

export default ServicesSection;
