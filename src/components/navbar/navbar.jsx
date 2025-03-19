import { Link } from "react-router-dom"
import MenuNav from "../../assets/menuNav.png"
import "./navBar.css"

const NavBar = () => {
    return(
        <>
        <nav>
            <button className="estilosMenu"> <img src={MenuNav} alt="Menu"/></button>
        </nav>
        </>
    )
}

export default NavBar;