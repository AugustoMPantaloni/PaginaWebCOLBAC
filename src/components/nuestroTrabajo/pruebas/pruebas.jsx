import iconoPruebas from "../../../assets/iconosNuestroTrabajo/iconoPruebas.png"
//Css
import "./Pruebas.css"


const Pruebas = ()=>{
    return(
        <div className="contenedorPruebas">
            <div className="contenedorTextoPruebas"> 
                <h2> Pruebas </h2>
                <p> Nada se lanza sin asegurarnos de que funcione a la perfección. Probamos cada rincón del sistema, corregimos errores y optimizamos el rendimiento, la seguridad y la usabilidad. Queremos que la experiencia final sea impecable. </p>
            </div>
            <div className="contendorIconoPruebas"> 
                <img  className="iconoPruebas" src={iconoPruebas}/> 
            </div>
        </div>
    )
}

export default Pruebas