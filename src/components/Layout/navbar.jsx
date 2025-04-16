import { useState } from "react";
import { Link } from "react-router-dom";

import imgContactanos from "../../assets/menuNav/imgContactanos.webp";
import imgNuestroTrabajo from "../../assets/menuNav/imgNuestroTrabajo.webp";
import imgPortfolio from "../../assets/menuNav/imgPortfolio.webp";
import imgServicios from "../../assets/menuNav/imgServicios.webp";
import imgSobreNosotros from "../../assets/menuNav/imgSobreNosotros.webp";
import cruz from "../../assets/cruz.png";

import LogoFacebook from "../../assets/logoFacebook.png"
import LogoInstagram from "../../assets/logoInstagram.png"
import LogoWsp from "../../assets/logoWsp.png"

const NavBar = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); 
    }, 500); 
  };

  return (
    <div className={`navbar ${isClosing ? "navbar--closing" : ""}`} data-aos="zoom-in">
      <div className="navbar__social">
        <div className="navbar__social-containerSocials">
          <div className="navbar__social-icon--instagram">
              <Link to="#">
                  <img src={LogoInstagram} alt="Instagram" />
              </Link>
          </div>
          <div className="navbar__social-icon--contact">
              <Link to="#">
                  <img src={LogoWsp} alt="Wsp" />
              </Link>
          </div>
          <div className="navbar__social-icon--facebook">
              <Link to="#">
                  <img src={LogoFacebook} alt="Facebook" />
              </Link>
          </div>
        </div>
        <div>
          <button onClick={handleClose} className="navbar__close-button">
            <img className="navbar__close-icon" src={cruz} />
          </button>
        </div>
      </div>
      <nav className="navbar__nav">
        <div className="navbar__group--left">
          <div
            data-aos="flip-left"
            className="navbar__item navbar__item--sobre"
            style={{ backgroundImage: `url(${imgSobreNosotros})` }}
          >
            <Link to="/SobreNosotros" className="navbar__link">
              Sobre Nosotros
            </Link>
          </div>
          <div
            data-aos="flip-left"
            className="navbar__item navbar__item--serv"
            style={{ backgroundImage: `url(${imgServicios})` }}
          >
            <Link className="navbar__link">Servicios</Link>
          </div>
        </div>
        <div className="navbar__group--center">
          <div
            data-aos="flip-up"
            className="navbar__item navbar__item--trabajo"
            style={{ backgroundImage: `url(${imgNuestroTrabajo})` }}
          >
            <Link to="/NuestroTrabajo" className="navbar__link">
              Nuestro proceso
            </Link>
          </div>
        </div>
        <div className="navbar__group--right">
          <div
            data-aos="flip-right"
            className="navbar__item navbar__item--port"
            style={{ backgroundImage: `url(${imgPortfolio})` }}
          >
            <Link className="navbar__link">Portfolio</Link>
          </div>
          <div
            data-aos="flip-right"
            className="navbar__item navbar__item--contacto"
            style={{ backgroundImage: `url(${imgContactanos})` }}
          >
            <Link to="/Contactanos" className="navbar__link">Contactanos</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
