import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../Layout/header";
import CardsData from "../../../data/servicios";
import CardsServicios from "../cards/CardsServicios";

const IntroServicios = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(CardsData);
    }, []);

    return (
        <>
            <Header />
            <div className="intro-servicios">
                <h1 className="intro-servicios__titulo" data-aos="fade-down">
                    COMO DIJIMOS ANTES, NO HACEMOS MAGIA, HACEMOS SOFTWARE.
                </h1>
                <h2 className="intro-servicios__subtitulo" data-aos="fade-down">
                    Pero lo hacemos tan bien, que a veces se confunden. Creamos soluciones digitales a medida, con tecnología de alto nivel,<br />
                    diseño estratégico y un enfoque obsesivo en la calidad.
                </h2>
                <h2 className="intro-servicios__descripcion" data-aos="fade-down">
                    Te dejamos a mano todos los servicios que ofrecemos,<br/> para que salgas de dudas y veas de lo que somos capaces.
                </h2>

                <div className="intro-servicios__cards">
                    {cards.map((card, index) => {
                        return (
                            <CardsServicios
                                key={index}
                                title={card.title}
                                description={card.description}
                                icono={card.icono}
                                video={card.video}
                            />
                        );
                    })}
                </div>

                <div className="intro-servicios__container-cta">
                    <Link to="/Contactanos" className="intro-servicios__cta">
                        ¿Listo para empezar?
                    </Link>
                </div>
            </div>
        </>
    );
};

export default IntroServicios;
