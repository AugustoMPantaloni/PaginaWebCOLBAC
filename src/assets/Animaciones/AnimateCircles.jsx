import React, { useRef, useEffect, memo } from 'react';


const getRandomSpeed = (base, variation) => (base + (Math.random() * variation * 2 - variation)) * (Math.random() > 0.5 ? 1 : -1);

const defaultCirclesConfig = [
  { id: 1, size: 90, color: "#dc0108", speedX: getRandomSpeed(2, 1), speedY: getRandomSpeed(1.5, 0.8) },
  { id: 2, size: 130, color: "#dc0108", speedX: getRandomSpeed(2, 1.2), speedY: getRandomSpeed(2, 1) },
  { id: 3, size: 100, color: "#dc0108", speedX: getRandomSpeed(2.5, 1.5), speedY: getRandomSpeed(1.5, 1) },
  { id: 4, size: 140, color: "#dc0108", speedX: getRandomSpeed(2, 1), speedY: getRandomSpeed(3, 1.2) },
  { id: 5, size: 80, color: "#dc0108", speedX: getRandomSpeed(2, 1.5), speedY: getRandomSpeed(2, 1.5) },
  { id: 6, size: 190, color: "#dc0108", speedX: getRandomSpeed(2.5, 1), speedY: getRandomSpeed(2, 1.3) },
  { id: 7, size: 105, color: "#dc0108", speedX: getRandomSpeed(2, 1.8), speedY: getRandomSpeed(1.5, 1) },
  { id: 8, size: 135, color: "#dc0108", speedX: getRandomSpeed(2, 1), speedY: getRandomSpeed(2.5, 1.5) },
  { id: 9, size: 95, color: "#dc0108", speedX: getRandomSpeed(2.5, 1.2), speedY: getRandomSpeed(2, 1) },
  { id: 10, size: 210, color: "#dc0108", speedX: getRandomSpeed(2, 1.5), speedY: getRandomSpeed(2, 1.8) },
  { id: 11, size: 250, color: "#dc0108", speedX: getRandomSpeed(2, 1), speedY: getRandomSpeed(1.5, 1.2) },
  { id: 12, size: 160, color: "#dc0108", speedX: getRandomSpeed(3, 2), speedY: getRandomSpeed(1.1, 0.9) },
];


const AnimatedCircles = memo(
  ({ 
    circles = defaultCirclesConfig,
    containerStyle = {},
    circleStyle = {}
  }) => {
    const containerRef = useRef(null);
  
  
    const baseStyles = {
      container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        minHeight: '100vh',
        ...containerStyle
      },
      circle: {
        position: 'absolute',
        borderRadius: '50%',
        opacity: 0.7,
        border: '2px dashed',
        ...circleStyle
      }
    };
  
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
  
      const circleElements = container.querySelectorAll('[data-circle]');
  
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
    }, []);
  
    return (
      <div ref={containerRef} style={baseStyles.container}>
        {circles.map((circle) => (
          <div
            key={circle.id}
            data-circle="true"
            style={{
              ...baseStyles.circle,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              borderColor: circle.color,
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
            }}
            data-speed-x={circle.speedX}
            data-speed-y={circle.speedY}
          />
        ))}
      </div>
    );
  }
)

export default AnimatedCircles;