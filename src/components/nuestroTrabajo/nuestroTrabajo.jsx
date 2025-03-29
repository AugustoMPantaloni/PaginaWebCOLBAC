//Componentes
import Header from "./header/header"
import Planificacion from "./planificacion/planificacion"
import Diseño from "./diseño/diseño"
import Desarrollo from "./desarrollo/desarrollo"
import Pruebas from "./pruebas/pruebas"
import Despliegue from "./despliegue/despliegue"
import Mantenimiento from "./mantenimiento/mantenimiento"
import Footer from "../footer/footer"
//Css
import "./nuestroTrabajo.css"


const NuestroTrabajo = () =>{
    return(
        <>
            <Header/>
            <Planificacion/>
            <Diseño/>
            <Desarrollo/>
            <Pruebas/>
            <Despliegue/>
            <Mantenimiento/>
            <Footer/>
        </>
    )
}

export default NuestroTrabajo