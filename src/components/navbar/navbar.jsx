import { Link } from "react-router-dom"

import imgContactanos from "../../assets/menuNav/imgContactanos.jpg";
import imgNuestroTrabajo from "../../assets/menuNav/imgNuestroTrabajo.jpg";
import imgPortfolio from "../../assets/menuNav/imgPortfolio.jpg";
import imgServicios from "../../assets/menuNav/imgServicios.jpg";
import imgSobreNosotros from "../../assets/menuNav/imgSobreNosotros.jpg"
import cruz from "../../assets/cruz.png"

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="navbar__logo-container">
                <button className="navbar__close-button">
                    <img className="navbar__close-icon" src={cruz} />
                </button>
            </div>
            <nav className="navbar__nav">
                <div className="navbar__group--left">
                    <div className="navbar__item navbar__item--sobre" style={{backgroundImage:`url(${imgSobreNosotros})`}}>
                        <Link to="/SobreNosotros" className="navbar__link">Sobre Nosotros</Link>
                    </div>
                    <div className="navbar__item navbar__item--serv" style={{backgroundImage:`url(${imgServicios})`}}>
                        <Link className="navbar__link">Servicios</Link>
                    </div>
                </div>
                <div className="navbar__group--center">
                    <div className="navbar__item navbar__item--trabajo" style={{backgroundImage:`url(${imgNuestroTrabajo})`}}>
                        <Link to="/NuestroTrabajo" className="navbar__link">Nuestro Trabajo</Link>
                    </div>
                </div>
                <div className="navbar__group--right">
                    <div className="navbar__item navbar__item--port" style={{backgroundImage:`url(${imgPortfolio})`}}>
                        <Link className="navbar__link">Portfolio</Link>
                    </div>
                    <div className="navbar__item navbar__item--contacto" style={{backgroundImage:`url(${imgContactanos})`}}>
                        <Link className="navbar__link">Contactanos</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
