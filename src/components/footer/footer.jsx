import "./footer.css";
import logo from "../../assets/logo2.png";
import logoInstagram from "../../assets/logoInstagram.png";
import logoContacto from "../../assets/logoContacto.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="contenedorLogo">
                <img src={logo} alt="Logo" />
            </div>
            
            <div className="contenedorTexto">
                <p>© 2025 COLBAC. Todos los derechos reservados.</p>
            </div>
            
            <div className="contenedorLogoRedes">
                <div className="logoInstagram">
                    <Link to="#">
                        <img src={logoInstagram} alt="Instagram" />
                    </Link>
                </div>
                <div className="logoContacto">
                    <Link to="#">
                        <img src={logoContacto} alt="Contacto" />
                    </Link>
                </div>
            </div>
            
            <div className="contenedorEnlaces">
                <Link to="/" className="enlaces">Inicio</Link>
                <Link to="/servicios" className="enlaces">Servicios</Link>
                <Link to="/portfolio" className="enlaces">Portfolio</Link>
                <Link to="/nosotros" className="enlaces">Sobre nosotros</Link>
                <Link to="/contacto" className="enlaces">Contacto</Link>
            </div>
        </div>
    ) 
}

export default Footer;