import Header from "../../Layout/header";
import VantaBackground from "./VantaBackground";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__background-wrapper">
        <VantaBackground />
      </div>
      <div className="about-us__content">
        <Header/>
        <div className="about-us__conteiner">
          <h1 className="about-us__title" data-aos="fade-down">¿QUIÉNES SOMOS?</h1>
          <p className="about-us__text" data-aos="fade-right">
            En COLBAC no seguimos tendencias: las creamos.<br />
            Combinamos diseño de alto nivel, tecnología precisa y estrategia que funciona.<br />
            Diseñamos experiencias, desarrollamos productos que rinden<br />
            y construimos marcas que se diferencian desde el primer clic.<br />
            Si tu proyecto busca impacto, escalabilidad y estilo, hablás con el equipo correcto.
          </p>
        </div>
      </div>
    </div>
  );
};


export default AboutUs;
