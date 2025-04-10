//Componentes
import Header from "../Layout/header"
import ProcessHeader from "./sections/ProcessHeader"
import OurJob from "./sections/OurJob"
import Footer from "../Layout/footer"



const NuestroTrabajo = () =>{
    return(
        <>
            <Header style={{ backgroundColor: ' #f0f0f0' }} />
            <ProcessHeader/>
            <OurJob/>
            <Footer/>
        </>
    )
}

export default NuestroTrabajo