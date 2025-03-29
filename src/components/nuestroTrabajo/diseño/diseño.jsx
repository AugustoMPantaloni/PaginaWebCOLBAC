import iconoDiseño from "../../../assets/iconosNuestroTrabajo/iconoDiseño.png"
//Css
import "./diseño.css"


const Diseño = ()=>{
    return(
        <div className="contenedorDiseño">
            <div className="contenedorTextoDiseño"> 
                <h2> Diseño </h2>
                <p> Aquí empieza la magia visual. Diseñamos la estructura del sistema, la experiencia de usuario (UX) y la interfaz (UI), asegurándonos de que todo sea intuitivo, atractivo y funcional. También definimos la arquitectura técnica para que el software sea sólido desde adentro hacia afuera. </p>
            </div>
            <div className="contendorIconoDiseño"> 
                <img  className="iconoDiseño" src={iconoDiseño}/> 
            </div>
        </div>
    )
}

export default Diseño