const VisionMission = () => {
    return (
        <div className="about-section">
            <div className="about-section__orange-position" data-aos="fade-up">
                <div 
                className="about-section__orange-bar"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                /> 
            </div>
            <div className="about-section__vision-box" data-aos="fade-up">
                <h2 className="about-section__vision-heading">Nuestra vision</h2>
                <p className="about-section__vision-text">
                Impulsamos la evolución digital creando soluciones de software que marquen la diferencia.
                No buscamos ser uno más: redefinimos los estándares de calidad, innovación y
                estilo en cada proyecto que llevamos adelante.
                </p>
            </div>
            <div className="about-section__teal-position" data-aos="fade-up">
                <div
                className="about-section__teal-bar"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                /> 
            </div>
            <div className="about-section__mission-box" data-aos="fade-up">
                <h2 className="about-section__mission-heading">Nuestra mision</h2>
                <p className="about-section__mission-text"> 
                Facilitar el crecimiento de emprendedores, empresas y marcas a través de soluciones de software eficientes, escalables y alineadas con sus objetivos.
                Acompañamos a nuestros clientes en el proceso de fortalecer su presencia digital.
                </p>
            </div>
        </div>
    )
}

export default VisionMission;