import { Link } from "react-router-dom";
import logoColor from "../../assets/logos/logoColor.png";
import iconoNavBar from "../../assets/menuNav/menuNav.png";
import React, { useState, useEffect } from "react";
import NavBar from "./navbar";

const Header = ({ style }) => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mostrarMenu = () => setMenu(true);
  const ocultarMenu = () => setMenu(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={style}
      className={`header ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src={logoColor} alt="Logo" />
        </Link>
      </div>

      <button onClick={mostrarMenu} className="header__menu-button">
        <img className="header__menu-img" src={iconoNavBar} alt="Menu" />
      </button>

      {menu && (
        <div className="popup-overlay" onClick={ocultarMenu}>
          <div className="popup-menu" onClick={(e) => e.stopPropagation()}>
            <NavBar onClose={ocultarMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
