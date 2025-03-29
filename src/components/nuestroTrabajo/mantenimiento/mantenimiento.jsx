import iconoMantenimiento from "../../../assets/iconosNuestroTrabajo/iconoMantenimiento.png"
//Css
import "./Mantenimiento.css"


const Mantenimiento = ()=>{
    return(
        <div className="contenedorMantenimiento">
            <div className="contenedorTextoMantenimiento"> 
                <h2> Mantenimiento y actualizaciones </h2>
                <p> Nada se lanza sin asegurarnos de que funcione a la perfección. Probamos cada rincón del sistema, corregimos errores y optimizamos el rendimiento, la seguridad y la usabilidad. Queremos que la experiencia final sea impecable. </p>
            </div>
            <div className="contendorIconoMantenimiento"> 
                <img  className="iconoMantenimiento" src={iconoMantenimiento}/> 
            </div>
        </div>
    )
}

export default Mantenimiento