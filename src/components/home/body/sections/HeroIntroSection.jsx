import abstrac from "../../../../assets/Abstract.png";

const HeroIntroSection = () => {
return (
    <div className="hero-intro">
        <div className="hero-intro__content">
        <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            className="hero-intro__highlight"
        />
        <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            className="hero-intro__text"
        >
        NO HACEMOS MAGIA. HACEMOS SOFTWARE.<br/>
        Y LO HACEMOS BIEN: ENTENDEMOS TU IDEA,<br/>
        LA CONVERTIMOS EN ESTRATEGIA Y EN UNA HERRAMIENTA QUE IMPACTA Y CRECE.
        </h2>
        </div>
        <img
        className="hero-intro__image"
        src={abstrac}
        alt="Decorativo abstracto"
        />
    </div>
);
};

export default HeroIntroSection;
