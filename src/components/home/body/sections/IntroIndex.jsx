import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Componentes
import Header from "../../../Layout/header";


const IntroIndex = () => {
    const containerRef = useRef(null);

  // Configuración de los círculos
    const circles = [
    { id: 1, size: 60, color: "#dc0108", speedX: 1, speedY: 0.5 },  // Más grande y más lento
    { id: 2, size: 100, color: "#dc0108", speedX: 1, speedY: 1 },   // Más grande y más lento
    { id: 3, size: 70, color: "#dc0108", speedX: 1.5, speedY: 0.5 }, // Más grande y más lento
    { id: 4, size: 110, color: "#dc0108", speedX: 1, speedY: 2 },    // Más grande y más lento
    { id: 5, size: 50, color: "#dc0108", speedX: 1, speedY: 1 },     // Más grande y más lento
    { id: 6, size: 160, color: "#dc0108", speedX: 0.5, speedY: 1 },  // Más grande y más lento
    { id: 7, size: 75, color: "#dc0108", speedX: 1, speedY: 0.5 },   // Más grande y más lento
    { id: 8, size: 105, color: "#dc0108", speedX: 1, speedY: 1.5 },  // Más grande y más lento
    { id: 9, size: 65, color: "#dc0108", speedX: 1.5, speedY: 1 },   // Más grande y más lento
    { id: 10, size: 180, color: "#dc0108", speedX: 1, speedY: 1 },   // Más grande y más lento
    { id: 11, size: 220, color: "#dc0108", speedX: 1, speedY: 0.5 }, // Más grande y más lento
    { id: 12, size: 130, color: "#dc0108", speedX: 2, speedY: 0.1 }, // Más grande y más lento
    ];

  // Lógica de animación
    useEffect(() => {
    const container = containerRef.current;
    const circleElements = container.querySelectorAll(".circle");

    const moveCircles = () => {
        circleElements.forEach((circle) => {
        const rect = circle.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Obtener la posición actual
        let x = parseFloat(circle.style.left) || 0;
        let y = parseFloat(circle.style.top) || 0;

        // Obtener la velocidad
        const speedX = parseFloat(circle.dataset.speedX);
        const speedY = parseFloat(circle.dataset.speedY);

        // Calcular nueva posición
        x += speedX;
        y += speedY;

        // Rebotar en los límites del contenedor
        if (x + rect.width > containerRect.width || x < 0) {
            circle.dataset.speedX = -speedX;
        }
        if (y + rect.height > containerRect.height || y < 0) {
            circle.dataset.speedY = -speedY;
        }

        // Actualizar posición
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        });

        requestAnimationFrame(moveCircles);
    };

    moveCircles();
    }, []);

    return (
    <div className="fondoHeader">
        <div className="contenedorCircular" ref={containerRef}>
            <Header/>
            <div className="contenedorInferior">
                <h1 className="titulo">
                    DEL PRESENTE AL FUTURO, <br />
                    SIN ESCALAS.<br />
                    <span className="color">DISEÑAMOS TECNOLOGÍA</span> <br/>
                    HECHA PARA DURAR.
                </h1>
            </div>
            {circles.map((circle) => (
                <div
                key={circle.id}
                className="circle"
                style={{
                    width: `${circle.size}px`,
                    height: `${circle.size}px`,
                    border: `2px dashed ${circle.color}`,
                }}
                data-speed-x={circle.speedX}
                data-speed-y={circle.speedY}
                ></div>
            ))}
        </div>
    </div>
    );
};

export default IntroIndex;