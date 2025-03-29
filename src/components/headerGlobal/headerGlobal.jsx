import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Componentes
import NavBar from "../navbar/navbar";
import logo1 from "../../assets/logo1.png";
import MenuNav from "../../assets/menuNav.png"
//Css
import "./HeaderGlobal.css"

const HeaderGlobal = ()=>{
    const [menu, setMenu] = useState(false)
    const mostrarMenu = () => setMenu (NavBar)
    return(
            <div className="contenedorSuperior">
                <div className="contenedorLogoMarca">
                    <img className="Logo" src={logo1} alt="Logo" />
                    <p className="marca">&lt;colbac&gt; </p>
                </div>
                <Link to="/navBar">
                <button className="estilosBotonNav" > <img src={MenuNav} alt="Menu"/>  </button>
                </Link>
            </div>
    )
}

export default HeaderGlobal;