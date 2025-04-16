import React from "react";
import Header from "../../../Layout/header";
import AnimatedCircles from "../../../../assets/Animaciones/AnimateCircles";

const IntroIndex = () => {
    return (
        <div className="intro">
            <div className="intro__circle-container">
                <div className="intro__animated-circles">
                    <AnimatedCircles />
                </div>
                <Header />
                <div className="intro__text-container">
                    <h1 className="intro__title">
                        DEL PRESENTE AL FUTURO, <br />
                        SIN ESCALAS.<br />
                        <span className="intro__highlight">DISEÑAMOS TECNOLOGÍA</span> <br />
                        HECHA PARA DURAR.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default IntroIndex;
