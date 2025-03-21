import "./footer.css";
import logo from "../../assets/logo2.png";
import logoInstagram from "../../assets/logoInstagram.png";
import logoContacto from "../../assets/logoContacto.png";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div>
                <div className="logoFooter">
                    <img src={logo}/>
                </div>
            </div>
            <div className="contenedorLogosRedes">
                <div className="logoInstagram">
                    <Link>
                        <img src={logoInstagram}/>
                    </Link>
                </div>
                <div className="logoContacto">
                    <Link>
                        <img src={logoContacto}/>
                    </Link>
                </div>
            </div>
            <div className="contenedorEnlaces">
                <Link className="enlaces">Inicio</Link>
                <Link className="enlaces">Servicios</Link>
                <Link className="enlaces">Portfolio</Link>
                <Link className="enlaces">Sobre nosotros</Link>
                <Link className="enlaces">Contaco</Link>
            </div>
            <div className="contenedorTexto">
                <p>© 2025 COLBAC. Todos los derechos reservados.</p>
            </div>
        </div>
        </>
    ) 
}

export default Footer