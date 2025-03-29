import iconoPlanificacion from "../../../assets/iconosNuestroTrabajo/iconoPlanificacion.png"
//Css
import "./planificacion.css"


const Planificacion = ()=>{
    return(
        <div className="contenedorPlanificacion">
            <div className="contendorIconoPlanificacion"> 
                <img  className="iconoPlanificacion" src={iconoPlanificacion}/> 
            </div>
            <div className="contenedorTextoPlanificacion"> 
                <h2> Planificación y análisis </h2>
                <p> Todo empieza con una charla. Queremos conocer tu idea,<br/>  entender qué  necesitas y para quién será el producto.<br/>  Analizamos los requisitos y definimos los objetivos y funcionalidades clave.<br/>  En esta etapa, trazamos el plan que guiará todo el desarrollo.</p>
            </div>
        </div>
    )
}

export default Planificacion