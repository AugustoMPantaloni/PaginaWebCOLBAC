import { Link } from "react-router-dom";

const BrandMessage = () => {
    return (
        <div className="brand-message">
            <h2 className="brand-message__title" data-aos="fade-down">UN NUEVO FUTURO, JUNTOS.</h2>

            <div className="brand-message__card brand-message__card--one">
                <div className="brand-message__content" data-aos="fade-right">
                    <div className="brand-message__number" data-aos="fade-down"></div>
                    <p className="brand-message__description">
                        SI TU NEGOCIO NO ESTÁ EN INTERNET, TU NEGOCIO NO EXISTE.
                        <br />
                        EL MUNDO CAMBIÓ, Y NOSOTROS TE AYUDAMOS A CAMBIAR CON ÉL.
                    </p>
                    <div className="brand-message__divider"></div>
                    <p className="brand-message__description">
                        TENÉS UNA GRAN IDEA. NOSOTROS LA LLEVAMOS AL MUNDO DIGITAL.
                        <br />
                        PORQUE HOY, SI TU NEGOCIO NO ESTÁ EN INTERNET...
                        <br /> BUENO, YA SABÉS.
                    </p>
                </div>
                <div className="brand-message__cta-container" data-aos="flip-left">
                    <Link className="brand-message__cta-button" to="/Contactanos">
                        ¡HABLEMOS!
                    </Link>
                </div>
            </div>

            <div className="brand-message__card brand-message__card--two">
                <div className="brand-message__cta-container" data-aos="flip-left">
                <Link className="brand-message__cta-button" to="/Contactanos">
                    ¡SUMATE!
                </Link>
                </div>
                <div className="brand-message__content" data-aos="fade-left">
                <div className="brand-message__number" data-aos="fade-down"></div>
                <p className="brand-message__description">
                    SI TE APASIONA LA TECNOLOGÍA Y EL DISEÑO, TE ESTAMOS BUSCANDO.
                    SUMATE A NUESTRO EQUIPO.
                </p>
                <div className="brand-message__divider"></div>
                <p className="brand-message__description">
                    UNITE A UNA EMPRESA QUE VALORA EL TALENTO, EL CRECIMIENTO Y EL TRABAJO
                    EN CONJUNTO. JUNTOS LOGRAMOS MÁS.
                </p>
                </div>
            </div>
        </div>
    );
};

export default BrandMessage;
