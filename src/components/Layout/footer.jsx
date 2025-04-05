import logo from "../../assets/logo2.png";
import logoInstagram from "../../assets/logoInstagram.png";
import logoContacto from "../../assets/logoContacto.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src={logo} alt="Logo" />
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
                        <img src={logoContacto} alt="Contacto" />
                    </Link>
                </div>
            </div>
            
            <div className="footer__links">
                <Link to="/" className="footer__links-item">Inicio</Link>
                <Link to="/servicios" className="footer__links-item">Servicios</Link>
                <Link to="/portfolio" className="footer__links-item">Portfolio</Link>
                <Link to="/nosotros" className="footer__links-item">Sobre nosotros</Link>
                <Link to="/contacto" className="footer__links-item">Contacto</Link>
            </div>
        </div>
    ) 
}

export default Footer;
