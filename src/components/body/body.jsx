import React, { useEffect, useState } from "react";
import Cards from "../cards/cards";
import CardsData from "../../data/servicios.json"; //Problemas con la importacion de los iconos
import "./body.css"
import { Link } from "react-router-dom";

const Body = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
    setCards(CardsData);
    }, []);

    return (
        <>
            <div className="estilosBody1">
                <div className="contenedorComun1">
                    <div className="contenedorRecuadroRojo1">
                        <div className="recuadroRojo1"></div>
                    </div>
                    <div className="contenedorTexto1">
                        <h2 className="estilosTexto1">LLEVAMOS TU VISIÓN AL MUNDO DIGITAL<br/>CON SOLUCIONES DE DESARROLLO A MEDIDA,<br/> DESDE LA IDEA INICIAL HASTA UN <br/> PRODUCTO FUNCIONAL Y SÓLIDO.</h2>
                    </div>
                    <div className="contenedorCirculosBody1">
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>
                                <div className="circulo-punteado0"></div>  
                            </div>
                </div>
            </div>
            <div className="estilosBody2">
                <div className="contenedorComun2">
                    <div className="contenedorRecuadroRojo2">
                        <div className="recuadroRojo2"></div>
                    </div>
                    <div className="contenedorTexto2">
                        <h2 className="estilosTexto2">SERVICIOS DE DESARROLLO DE SOFTWARE,<br/> ADAPTANDO CADA PROYECTO A LAS NECESIDADES DEL CLIENTE.
                        </h2>
                    </div>
                </div>
                        <div className="card-list">
                            {cards.map((card, index) => (
                                <Cards
                                key={index}
                                title={card.title}
                                description={card.description}
                                icono={card.icono}
                                backgroundColor={card.backgroundColor}
                                borderColor={card.borderColor}
                                shadowColor={card.shadowColor}
                                />
                            ))}
                        </div>
            </div>
            <div className="estilosBody3">
                <div className="contenedorComun3">
                    <div className="contenedorRN1">
                        <div className="rectanguloNegro1"> 
                        <p className="estilosTexto3"> EN COLBAC FUSIONAMOS <span className="colorEstetica">ESTETICA</span> <br/> Y <span className="colorFuncionalidad">FUNCIONALIDAD</span> PARA  TRANSFORMAR <br/> TU IDENTIDAD DIGITAL <br/> EN UNA <span className="colorExperiencia">EXPERIENCIA INNOVADORA</span>.</p>
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
                                <Link className="estilosTextoContactanos">¡CONTACTANOS Y CONOCENOS!</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contenedorComun4">
                    <div className="contenedorRN2">
                        <div className="rectanguloNegro2"> 
                            <p className="estilosTexto4"> QUEREMOS CONOCERTE,<br/> <span className="colorSumate">SUMATE</span> A NUESTRO <span className="colorEquipo">EQUIPO</span> Y <br/> <span className="colorConstruyamos">CONSTRUYAMOS JUNTOS</span> EL <br/> FUTURO DIGITAL.</p>
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
                                <Link className="estilosTextoTrabaja">¡TE ESTAMOS ESPERANDO!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;