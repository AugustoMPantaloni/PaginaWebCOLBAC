import abstrac from "../../../../assets/Abstract.png";

const HeroIntroSection = () => {
    return (
        <div className="hero-intro">
            <div className="hero-intro__content">
                <div className="hero-intro__highlight" />
                <h2 className="hero-intro__text">
                    EN COLBAC LLEVAMOS TU VISIÓN AL MUNDO DIGITAL <br />
                    CON SOLUCIONES DE DESARROLLO A MEDIDA,<br />
                    DESDE LA IDEA INICIAL HASTA UN PRODUCTO FUNCIONAL Y SÓLIDO.
                </h2>
            </div>
            <img className="hero-intro__image" src={abstrac} alt="Decorativo abstracto" />
        </div>
    );
};

export default HeroIntroSection;