import { Link } from "react-router-dom"
import "./navBar.css"
import logo1 from "../../assets/logo1.png";
import imgContactanos from "../../assets/menuNav/imgContactanos.jpg";
import imgNuestroTrabajo from "../../assets/menuNav/imgNuestroTrabajo.jpg";
import imgPortfolio from "../../assets/menuNav/imgPortfolio.jpg";
import imgServicios from "../../assets/menuNav/imgServicios.jpg";
import imgSobreNosotros from "../../assets/menuNav/imgSobreNosotros.jpg"


const NavBar = () => {
    return(
        <div className="contenedorMenuNav">
            <div className="contenedorLogoMarcaNav">
                <img className="logoNav" src={logo1} alt="logo1"/>
                <p className="marcaNav">&lt;colbac&gt;</p>
            </div>
            <nav className="navNavBar">
                <div className="posicionIzquierda">
                    <div className="contenedorSobreNosotros" style={{backgroundImage:`url(${imgSobreNosotros})`}}>
                        <div className="noFiltro">
                            <Link className="sobreNosotros"> Sobre Nosotros </Link>
                        </div>
                    </div>
                    <div className="contenedorServicios" style={{backgroundImage:`url(${imgServicios})`}}>
                        <Link className="servicios"> Servicios </Link>
                    </div>
                </div>
                <div className="posicionCentro">
                    <div className="contenedorNuestroTrabajo" style={{backgroundImage:`url(${imgNuestroTrabajo})`}}>
                        <Link className="nuestroTrabajo"> Nuestro Trabajo </Link>
                    </div>
                </div>
                <div className="posicionDerecha">
                    <div className="contenedorPortfolio" style={{backgroundImage:`url(${imgPortfolio})`}}>
                        <Link className="portfolio"> Portfolio </Link>
                    </div>
                    <div className="contenedorContactanos" style={{backgroundImage:`url(${imgContactanos})`}}>
                        <Link className="contactanos"> Contactanos </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;