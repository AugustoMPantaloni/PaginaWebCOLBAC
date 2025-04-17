//Dependencias directas
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
//Dependencias externas (librerias, etc.)

//Componentes
import Cards from "../../cards/cards";
import CardsData from "../../../../data/servicios";

const ServicesSection = () => {
  const services = useRef(); //Solucionar esto
  const location = useLocation() //Solucionar esto

  const [redirect, setRedirect] = useState(location.hash); //Solucionar esto
  const [cards, setCards] = useState([]); 
  const [activeVideo, setActiveVideo] = useState(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);


  useEffect(()=>{ //Averiguar para que sirve esto... //Solucionar esto
    setRedirect(location.hash)
    if(location.hash === "#servicios"){
      const {current} = services;
      if(current){
        current.scrollIntoView({behavior: "smooth" })
      }
    }
    setRedirect(null);
  },[redirect])

  useEffect(() => {
    setCards(CardsData);
  }, []);
  return (
    <section className="services-section" data-aos="fade-up" ref={services}>
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
    </section>
  );
};

export default ServicesSection;
