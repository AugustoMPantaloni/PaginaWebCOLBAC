import { Link } from "react-router-dom"
//Componentes
import logo1 from "../../assets/logo1.png";
import imgContactanos from "../../assets/menuNav/imgContactanos.jpg";
import imgNuestroTrabajo from "../../assets/menuNav/imgNuestroTrabajo.jpg";
import imgPortfolio from "../../assets/menuNav/imgPortfolio.jpg";
import imgServicios from "../../assets/menuNav/imgServicios.jpg";
import imgSobreNosotros from "../../assets/menuNav/imgSobreNosotros.jpg"
import cruz from "../../assets/cruz.png"
//Css
import "./navBar.css"

const NavBar = () => {
    return(
        <div className="contenedorMenuNav">
            <div className="contenedorLogoMarcaCrux">
                <button className="buttonCruz"> <img className="cruzNavBar" src={cruz}/> </button>
            </div>
            <nav className="navNavBar">
                <div className="posicionIzquierda">
                    <div className="contenedorSobreNosotros" style={{backgroundImage:`url(${imgSobreNosotros})`}}>
                        <Link to="/SobreNosotros"className="sobreNosotros"> Sobre Nosotros </Link>
                    </div>
                    <div className="contenedorServicios" style={{backgroundImage:`url(${imgServicios})`}}>
                        <Link className="servicios"> Servicios </Link>
                    </div>
                </div>
                <div className="posicionCentro">
                    <div className="contenedorNuestroTrabajo" style={{backgroundImage:`url(${imgNuestroTrabajo})`}}>
                        <Link to="/NuestroTrabajo" className="nuestroTrabajo"> Nuestro Trabajo </Link>
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