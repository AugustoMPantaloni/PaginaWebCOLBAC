//Componentes
import HeaderGlobal from "../../header/header"
//Css
import "./header.scss"


const Header = () =>{
    return(
        <>
            <HeaderGlobal className="headerGlobal"/>
            <div className="contenedorTextos">
                <h1 className="tituloNuestroTrabajo"> NUESTRO PROCESO DE TRABAJO</h1>
                <p className="textoNuestoTrabajo">Cada proyecto es único, pero todos siguen un camino pensado para garantizar calidad, eficiencia y resultados increíbles.<br/> Te contamos cómo trabajamos:</p>
            </div>
        </>
    )
}


export default Header;