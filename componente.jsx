import { Link } from "react-router-dom";

const BrandMessage = () => {
return (
    <div className="estilosBody3">
        <div className="contenedorComun3">
            <div className="contenedorRN1">
                <div
                    className="rectanguloNegro1"
                    data-aos="flip-left"
                    data-aos-duration="900"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                >
                    <p className="estilosTexto3">
                    TU PRESENCIA DIGITAL NECESITA <br/>
                    <span className="colorFuncionalidad">RENDIMIENTO</span>,
                    <span className="colorEstetica"> DISEÑO </span> Y
                    <span className="colorExperiencia"> ESTRATEGIA.<br/> </span> 
                    NOSOTROS LO HACEMOS REALIDAD.
                    </p>
                </div>
            </div>
            <div className="contenedorCN1">
            <div className="cuadradoNegro1">
                <div className="cuadradoNegro1">
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                <div className="circulo-punteado"></div>
                </div>
            </div>
            </div>
            <div className="contenedorRO1">
                <div className="rectanguloOrang">
                    <div className="estilosContactanos">
                        <Link className="estilosTextoContactanos">
                            ¡CONTACTANOS Y CONOCENOS!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="contenedorComun4">
            <div className="contenedorRN2">
                <div 
                    className="rectanguloNegro2"
                    data-aos="flip-right"
                    data-aos-duration="900"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                >
                    <p className="estilosTexto4">
                        SI TE 
                        <span className="colorConstruyamos"> APASIONA </span>
                        LA TECNOLOGÍA Y <br /> EL DISEÑO, <br />
                        TE ESTAMOS BUSCANDO. <br />
                        <span className="colorSumate"> SUMATE </span> 
                        A NUESTRO 
                        <span className="colorEquipo"> EQUIPO </span>
                    </p>
                </div>
            </div>
            <div className="contenedorCN2">
            <div className="cuadradoNegro2">
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
                <div className="circulo-punteado2"></div>
            </div>
            </div>
            <div className="contenedorRR1">
            <div className="rectanguloRojo">
                <div className="estilosTrabaja">
                <Link className="estilosTextoTrabaja">
                    ¡TE ESTAMOS ESPERANDO!
                </Link>
                </div>
            </div>
            </div>
        </div>
    </div>
);
};

export default BrandMessage;
