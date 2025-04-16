// AnimatedCircles.jsx
import React, { useRef, useEffect } from 'react';

// Configuración de círculos 
const defaultCirclesConfig = [
  { id: 1, size: 90, color: "#dc0108", speedX: 2, speedY: 1.5 },  
    { id: 2, size: 130, color: "#dc0108", speedX: 2, speedY: 2 },   
    { id: 3, size: 100, color: "#dc0108", speedX: 2.5, speedY: 1.5 }, 
    { id: 4, size: 140, color: "#dc0108", speedX: 2, speedY: 3 },    
    { id: 5, size: 80, color: "#dc0108", speedX: 2, speedY: 2 },     
    { id: 6, size: 190, color: "#dc0108", speedX: 2.5, speedY: 2},  
    { id: 7, size: 105, color: "#dc0108", speedX: 2, speedY: 1.5 },   
    { id: 8, size: 135, color: "#dc0108", speedX: 2, speedY: 2.5 },  
    { id: 9, size: 95, color: "#dc0108", speedX: 2.5, speedY: 2 },   
    { id: 10, size: 210, color: "#dc0108", speedX: 2, speedY: 2 },   
    { id: 11, size: 250, color: "#dc0108", speedX: 2, speedY: 1.5 }, 
    { id: 12, size: 160, color: "#dc0108", speedX: 3, speedY: 1.1 }, 
];

const AnimatedCircles = ({ 
  circles = defaultCirclesConfig,
  circleClassName = 'animated-circle',
  containerClassName = 'circles-container',
  circleStyle = { border: '2px dashed #dc0108' },
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const circleElements = container.querySelectorAll(`.${circleClassName}`);

    const moveCircles = () => {
      circleElements.forEach((circle) => {
        const rect = circle.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        let x = parseFloat(circle.style.left) || 0;
        let y = parseFloat(circle.style.top) || 0;
        const speedX = parseFloat(circle.dataset.speedX);
        const speedY = parseFloat(circle.dataset.speedY);

        x += speedX;
        y += speedY;

        // Rebotar en bordes
        if (x + rect.width > containerRect.width || x < 0) {
          circle.dataset.speedX = -speedX;
        }
        if (y + rect.height > containerRect.height || y < 0) {
          circle.dataset.speedY = -speedY;
        }

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
      });

      requestAnimationFrame(moveCircles);
    };

    const animationId = requestAnimationFrame(moveCircles);

    return () => cancelAnimationFrame(animationId);
  }, [circleClassName]);

  return (
    <div className={containerClassName} ref={containerRef}>
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={circleClassName}
          style={{
            position: 'absolute',
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            ...circleStyle,
            ...circle.customStyle,
          }}
          data-speed-x={circle.speedX}
          data-speed-y={circle.speedY}
        />
      ))}
    </div>
  );
};

export default AnimatedCircles;