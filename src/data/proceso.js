import iconoDesarrollo from "../assets/iconosNuestroTrabajo/iconoDesarrollo.png"
import iconoDespliegue from "../assets/iconosNuestroTrabajo/iconoDespliegue.png"
import iconoDiseño from "../assets/iconosNuestroTrabajo/iconoDiseño.png"
import iconoMantenimiento from "../assets/iconosNuestroTrabajo/iconoMantenimiento.png"
import iconoPlanificacion from "../assets/iconosNuestroTrabajo/iconoPlanificacion.png"
import iconoPruebas from "../assets/iconosNuestroTrabajo/iconoPruebas.png"

const proceso = [
    {
        icon: iconoPlanificacion,
        title: "PLANIFICACIÓN Y ANÁLISIS",
        description :`Todo empieza con una charla. Queremos conocer tu idea, entender qué necesitás y para quién será el producto.
            Analizamos los requisitos y definimos los objetivos y funcionalidades clave. En esta etapa, trazamos el plan que guiará
            todo el desarrollo.`,
    },
    {
        icon: iconoDiseño,
        title: "DISEÑO",
        description: `Aquí empieza la magia visual. Diseñamos la estructura del sistema, la experiencia de usuario (UX) y la interfaz (UI),
            asegurándonos de que todo sea intuitivo, atractivo y funcional. También definimos la arquitectura técnica para que el software sea
            sólido desde adentro hacia afuera.`
    },
    {
        icon: iconoDesarrollo,
        title: "DESARROLLO",
        description: `Redactando el código. Nuestros desarrolladores crean cada funcionalidad planificada, construyendo el backend, el frontend y
            asegurándose de que todo fluya en perfecta armonía. Trabajamos en fases para garantizar estabilidad y cumplir con lo acordado.`
    },
    {
        icon: iconoPruebas,
        title: "PRUEBAS",
        description:`Nada se lanza sin asegurarnos de que funcione a la perfección. Probamos cada rincón del sistema, corregimos errores y optimizamos el 
            rendimiento, la seguridad y la usabilidad. Queremos que la experiencia final sea impecable.`
    },
    {
        icon:iconoDespliegue,
        title: "DESPLIEGUE",
        description:`Cuando todo está listo, es momento de ponerlo en marcha. Subimos el software a servidores, lo distribuimos y nos aseguramos de que esté accesible
            y funcionando sin problemas.`
    },
    {
        icon: iconoMantenimiento,
        title: "MANTENIMIENTO Y ACTUALIZACIONES",
        description: `El lanzamiento no es el final, sino el comienzo. Seguimos monitoreando el software, aplicamos mejoras y agregamos nuevas funciones según las necesidades.
            Así, tu producto sigue evolucionando con el tiempo.`
    }
]

export default proceso;