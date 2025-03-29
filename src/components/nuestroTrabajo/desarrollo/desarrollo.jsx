import iconoDesarrollo from "../../../assets/iconosNuestroTrabajo/iconoDesarrollo.png"
//Css
import "./desarrollo.css"


const Desarrollo = ()=>{
    return(
        <div className="contenedorDesarrollo">
            <div className="contendorIconoDesarrollo"> 
                <img  className="iconoDesarrollo" src={iconoDesarrollo}/> 
            </div>
            <div className="contenedorTextoDesarrollo"> 
                <h2> Desarrollo </h2>
                <p> Redactando el código. Nuestros desarrolladores crean cada funcionalidad planificada, construyendo el backend, el frontend y asegurando que todo fluya en perfecta armonía. Trabajamos en fases para garantizar estabilidad y cumplir con lo acordado. </p>
            </div>
        </div>
    )
}

export default Desarrollo