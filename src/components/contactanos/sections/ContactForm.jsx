import { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from "../../Layout/header";

import iconoUbicacion from "../../../assets/contactanos/iconoUbicacion.png"
import backgroundContact from "../../../assets/contactanos/backgroundContactanos.png"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    company: '',
    position: '',
    social: '',
    subject: '',
    message: '',
    newsletter: false,
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xrls49p', // Reemplaza con tu ID de servicio
        'template_a6y2saq', // Reemplaza con tu ID de plantilla
        e.target, 
        'LANuyeTkytDVVG4Dk' // Reemplaza con tu ID de usuario
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('Mensaje enviado correctamente. ¡Gracias por contactarnos!');
          setFormData({
            name: '',
            lastname: '',
            email: '',
            phone: '',
            country: '',
            city: '',
            company: '',
            position: '',
            social: '',
            subject: '',
            message: '',
            newsletter: false,
          });
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('Hubo un error. Intenta de nuevo más tarde.');
        }
      );
  };

  return (
    <div
    style={{
      backgroundImage: `url(${backgroundContact})`,
      backgroundSize: 'cover',    
      backgroundPosition: 'center', 
  }}>
      <Header/>
      <div className="contact-info">
        <div className="contact-info__location">
          <img className="contact-info__icon" src={iconoUbicacion} alt="Ubicación" />
        </div>
        <div className="contact-info__details">
          <div className="contact-info__address">
            <p className="contact-info__city">Córdoba / Argentina</p>
          </div>
          <p className="contact-info__email">Colbac.contacto@gmail.com</p>
        </div>  
      </div>

      <section className="contact">
        <h1 className="contact__title">¡HABLEMOS!</h1>
        <p className="contact__description">
        ¡Queremos saber de ti! Ya sea una idea, una consulta o una propuesta para trabajar juntos,<br/>
        estamos completamente disponibles para escucharte.<br/> Llena el formulario a continuación y te 
        responderemos lo antes posible para seguir la conversación.
        </p>

        <form className="contact__form" id="contact-form" onSubmit={handleSubmit}>
          <div className='contact__form-info'>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="name">Nombre:</label>
              <input
                className="contact__input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="lastname">Apellido:</label>
              <input
                className="contact__input"
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className='contact__form-info'>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="email">Correo electrónico:</label>
              <input
                className="contact__input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="phone">Teléfono:</label>
              <input
                className="contact__input"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__form-group">
            <label className="contact__label" htmlFor="country">País:</label>
            <input
              className="contact__input"
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="contact__form-group">
            <label className="contact__label" htmlFor="city">Ciudad:</label>
            <input
              className="contact__input"
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          
          <div className='contact__form-info'>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="company">Empresa u organización:</label>
              <input
                className="contact__input"
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="position">Cargo o rol:</label>
              <input
                className="contact__input"
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__form-group">
            <label className="contact__label" htmlFor="social">Sitio web o redes sociales:</label>
            <input
              className="contact__input"
              type="url"
              id="social"
              name="social"
              value={formData.social}
              onChange={handleChange}
            />
          </div>

          <div className="contact__form-group">
            <label className="contact__label" htmlFor="subject">Motivo del mensaje:</label>
            <select
              className="contact__input"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Seleccioná una opción</option>
              <option value="consulta">Consulta general</option>
              <option value="soporte">Soporte técnico</option>
              <option value="colaboracion">Quiero trabajar con ustedes</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="contact__form-group">
            <label className="contact__label" htmlFor="message">Mensaje:</label>
            <textarea
              className="contact__input"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="contact__form-group contact__form-group--checkbox">
            <input
              className="contact__checkbox"
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label className="contact__label contact__label--checkbox" htmlFor="newsletter">
              Quiero recibir novedades por correo
            </label>
          </div>

          <button className="contact__submit" type="submit">Enviar mensaje</button>
          <p className="contact__status">{statusMessage}</p>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
