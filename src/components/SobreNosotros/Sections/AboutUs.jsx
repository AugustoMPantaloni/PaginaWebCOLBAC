import Header from "../../Layout/header";
import VantaBackground from "./VantaBackground";
import logoColor from "../../../assets/logos/logoColor.png"

const AboutUs = () => {
  return (
    <>
      <Header/>
      <div className="about-us">
          <div className="about-us__content">
              <div className="about-us__conteiner">
                <h1 className="about-us__title" data-aos="fade-down">¿QUIÉNES SOMOS?</h1>
                <p className="about-us__text" data-aos="fade-right">
                  En COLBAC no seguimos tendencias: las creamos.<br />
                  Combinamos diseño de alto nivel, tecnología precisa y <br />estrategia que funciona.<br />
                  Diseñamos experiencias, desarrollamos productos que rinden<br />
                  y construimos marcas que se diferencian desde el primer clic.<br />
                  Si tu proyecto busca impacto, escalabilidad y estilo<br/> hablás con el equipo correcto.
                </p>
              </div>
              <div className="about-us__cont-logo" data-aos="fade-down" data-aos-delay="700">
                <img className="about-us__logo" src={logoColor} alt="Logo" />
              </div>
          </div>
      </div>
    </>
  );
};


export default AboutUs;
