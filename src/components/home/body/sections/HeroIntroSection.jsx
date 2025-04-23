import React from "react";
import logoClaro from "../../../../assets/logos/logoClaro.png";
import { Link } from "react-router-dom";

const HeroIntroSection = () => {
return (
    <section className="hero-intro">
        <div className="hero-intro__content">
            <img className="hero-intro__logo" src={logoClaro} alt="Logo" data-aos="fade-down"/>

            <div data-aos="fade-up">            
                <div className="hero-intro__text-container" data-aos="fade-up">
                    <p className="hero-intro__text hero-intro__text--primary">
                    NO HACEMOS MAGIA. HACEMOS SOFTWARE
                    </p>
                    <p className="hero-intro__text hero-intro__text--secondary">
                    Y LO HACEMOS BIEN.
                    </p>
                    <p className="hero-intro__text hero-intro__text--tertiary">
                    ENTENDEMOS TU IDEA, LA CONVERTIMOS EN ESTRATEGIA Y EN UNA
                    HERRAMIENTA QUE IMPACTA Y CRECE.
                    </p>
                </div>

                <div className="hero-intro__cta-container" data-aos="fade-up">
                    <p className="hero-intro__cta-text">
                    ¿Curioso por saber cómo lo hacemos? ¡Ven a ver!
                    </p>
                    <Link to="/NuestroProceso" className="hero-intro__cta-button">
                    Click acá
                    </Link>
                </div>
            </div>
        </div>
    </section>
);
};

export default HeroIntroSection;
