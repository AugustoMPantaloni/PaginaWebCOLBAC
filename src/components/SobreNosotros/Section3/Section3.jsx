import "./Section3.css"
import photos from "../../../assets/sobreNosotros/photos.png"
const Section3 = ()=>{
    return(
        <div className="styleSection3">
            <div className="containerText4">
                <h2 className="stylesText4">Transformamos ideas en productos digitales <br/> que conectan, inspiran y generan impacto.</h2>
            </div>
            <div className="containerContent">
                <h2 className="styleTitle5"> <span className="styleSymbol">✦</span> Diseño con <span className="styleProposito">propósito</span></h2>
                <p className="styleText5">
                    Nos gusta trabajar de la mano con nuestros clientes, entendiendo sus necesidades y manteniendo una comunicación
                    clara en cada etapa del proceso.<br/>
                    Buscamos crear experiencias que realmente conecten con las personas.<br/>
                    Cada decisión visual tiene un propósito, y cada interacción está pensada para ser intuitiva y fluida.<br/>
                    Creemos que la mejor creatividad surge del trabajo en equipo.
                </p>
                <img className="stylePhotos" src={photos}></img>
                <h2 className="styleTitle6">
                    <span className="styleFuncionalidad">Funcionalidad</span>, Colaboración y <br/> 
                    <span className="styleTransparencia">Transparencia</span>
                    <span className="styleSymbol2">✦</span>
                </h2>
                <p className="styleText6">
                    El mundo digital cambia todos los días, y nosotros evolucionamos con él. Nos mantenemos en constante <br/> aprendizaje,
                    explorando nuevas herramientas, tendencias y tecnologías para ofrecer soluciones siempre actuales y efectivas.
                    Porque al final del día, lo más importante es que las personas disfruten usando lo que creamos.
                </p>
            </div>
        </div>
    )
}

export default Section3