import abstrac from "../../../../assets/Abstract.png";

const HeroIntroSection = () => {
return (
    <div className="hero-intro">
        <div className="hero-intro__content">
            <div className="hero-intro__highlight"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-easing="ease-in-out"
            />
            <h2 className="hero-intro__text"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-easing="ease-in-out"
                
            >
            NO HACEMOS MAGIA. HACEMOS SOFTWARE.<br/>
            Y LO HACEMOS BIEN:<br/> ENTENDEMOS TU IDEA,
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
