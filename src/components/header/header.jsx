import { Link } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import MenuNav from "../../assets/menuNav.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src={logo1} alt="Logo" />
        </Link>
        <p className="header__brand">&lt;colbac&gt;</p>
      </div>
      <button className="header__menu-button">
        <Link to="/navBar">
          <img className="header__menu-img" src={MenuNav} alt="Menu" />
        </Link>
      </button>
    </header>
  );
};

export default Header;
