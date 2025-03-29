import iconoDespliegue from "../../../assets/iconosNuestroTrabajo/iconoDespliegue.png"
//Css
import "./Despliegue.css"


const Despliegue = ()=>{
    return(
        <div className="contenedorDespliegue">
            <div className="contendorIconoDespliegue"> 
                <img  className="iconoDespliegue" src={iconoDespliegue}/> 
            </div>
            <div className="contenedorTextoDespliegue"> 
                <h2> Despliegue </h2>
                <p>Cuando todo está listo, es momento de ponerlo en marcha.<br/> Subimos el software a servidores, lo distribuimos <br/> y nos aseguramos de que esté accesible  <br/> y funcionando sin problemas.</p>
            </div>
        </div>
    )
}

export default Despliegue