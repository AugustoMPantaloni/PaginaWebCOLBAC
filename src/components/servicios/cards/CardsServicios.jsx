import React from 'react';

const CardsServicios = ({ title, description, icono, video }) => {
return (
<div 
    className="service-card"
    data-aos="fade-right"
>
    <div className="service-card-header" >
        <img src={icono} alt="icono servicio" className="service-icon" />
        {video && (
            <video
            src={video}
            autoPlay
            loop
            muted
            className="service-video"
            />
        )}
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
</div>
);
};

export default CardsServicios;
