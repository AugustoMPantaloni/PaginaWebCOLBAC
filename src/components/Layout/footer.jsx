import logoClaro from "../../assets/logos/logoClaro.png";
import logoInstagram from "../../assets/iconosSociales/logoInstagram.png";
import logoWsp from "../../assets/iconosSociales/logoWsp.png";
import logoFacebook from "../../assets/iconosSociales/logoFacebook.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src={logoClaro} alt="Logo" />
            </div>
            
            <div className="footer__text">
                <p>© 2025 COLBAC. Todos los derechos reservados.</p>
            </div>
            
            <div className="footer__social">
                <div className="footer__social-icon--instagram">
                    <Link to="#">
                        <img src={logoInstagram} alt="Instagram" />
                    </Link>
                </div>
                <div className="footer__social-icon--contact">
                    <Link to="#">
                        <img src={logoWsp} alt="Wsp" />
                    </Link>
                </div>
                <div className="footer__social-icon--facebook">
                    <Link to="#">
                        <img src={logoFacebook} alt="Contacto" />
                    </Link>
                </div>
            </div>
            
            <div className="footer__links">
                <Link to="/" className="footer__links-item">Inicio</Link>
                <Link to="/NuestroProceso" className="footer__links-item">Nuestro Proceso</Link>
                <Link to="/Servicios" className="footer__links-item">Servicios</Link>
                <Link to="/SobreNosotros" className="footer__links-item">Sobre nosotros</Link>
                <Link to="/Contactanos" className="footer__links-item">Contacto</Link>
            </div>
        </div>
    ) 
}

export default Footer;
