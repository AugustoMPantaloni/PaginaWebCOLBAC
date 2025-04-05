
import photos from "../../../assets/sobreNosotros/photos.png";

const AboutProcess = () => {
return (
    <div className="about-process">
    <div className="about-process__header">
        <h2 className="about-process__main-text">
        Transformamos ideas en productos digitales <br/> que conectan, inspiran y generan impacto.
        </h2>
    </div>

    <div className="about-process__content">
        <h2 className="about-process__design-title"> 
        <span className="about-process__symbol">✦</span> Diseño con <span className="about-process__purpose-highlight">propósito</span>
        </h2>
        
        <p className="about-process__design-text">
        Nos gusta trabajar de la mano con nuestros clientes, entendiendo sus necesidades y manteniendo una comunicación
        clara en cada etapa del proceso.<br/>
        Buscamos crear experiencias que realmente conecten con las personas.<br/>
        Cada decisión visual tiene un propósito, y cada interacción está pensada para ser intuitiva y fluida.<br/>
        Creemos que la mejor creatividad surge del trabajo en equipo.
        </p>

        <img className="about-process__team-photo" src={photos} alt="Equipo de trabajo COLBAC" />
        
        <h2 className="about-process__values-title">
        <span className="about-process__functionality-highlight">Funcionalidad</span>, Colaboración y <br/> 
        <span className="about-process__transparency-highlight">Transparencia</span>
        <span className="about-process__symbol--red">✦</span>
        </h2>
        
        <p className="about-process__values-text">
        El mundo digital cambia todos los días, y nosotros evolucionamos con él. Nos mantenemos en constante <br/> aprendizaje,
        explorando nuevas herramientas, tendencias y tecnologías para ofrecer soluciones siempre actuales y efectivas.
        Porque al final del día, lo más importante es que las personas disfruten usando lo que creamos.
        </p>
    </div>
    </div>
)
}

export default AboutProcess;