const VisionMission = () => {
    return (
        <div className="about-section">
        {/* Rectángulo Naranja */}
        <div className="about-section__orange-position">
            <div className="about-section__orange-bar"/> 
        </div>
        
        {/* Texto Visión */}
        <div className="about-section__vision-box">
            <h2 className="about-section__vision-heading">Nuestra vision</h2>
            <p className="about-section__vision-text">
            Aspiramos a ser referentes en diseño y desarrollo web,<br/> transformando ideas en experiencias digitales.
            Queremos brindar soluciones innovadoras, accesibles y personalizadas que reflejen la esencia
            de cada marca y potencien su presencia en el mundo digital.
            </p>
        </div>

        {/* Rectángulo Turquesa */}
        <div className="about-section__teal-position">
            <div className="about-section__teal-bar"/> 
        </div>
        
        {/* Texto Misión */}
        <div className="about-section__mission-box">
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