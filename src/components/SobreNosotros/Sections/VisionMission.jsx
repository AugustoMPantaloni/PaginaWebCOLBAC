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
                Impulsar la evolución digital creando soluciones de software que marquen la diferencia.
                No buscamos ser uno más: aspiramos a redefinir los estándares de calidad, innovación y
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
                Nos comprometemos a crear sitios web atractivos,<br/> intuitivos y eficaces que impulsen el crecimiento de
                emprendedores, empresas y marcas. Acompañamos a nuestros clientes en el proceso de fortalecer su identidad digital 
                con pasión, creatividad y profesionalismo. Cada proyecto es una oportunidad para innovar, inspirar y trascender.
                </p>
            </div>
        </div>
    )
}

export default VisionMission;