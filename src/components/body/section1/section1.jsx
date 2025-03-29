import "./section1.css"
import abstrac from "../../../assets/Abstract.png"

const Section1 = () =>{
    return(
        <div className="estilosSection1">
            <div className="contenedorComun1">
                <div className="recuadroRojo1"/>
                <h2 className="estilosTexto1"> EN COLBAC LLEVAMOS TU VISIÓN AL MUNDO DIGITAL <br/> CON SOLUCIONES DE DESARROLLO A MEDIDA,<br/> DESDE LA IDEA INICIAL HASTA UN PRODUCTO FUNCIONAL Y SÓLIDO.</h2>
            </div>
            <img className="estilosAbstract" src={abstrac}/>
        </div>
    )
}
export default Section1;