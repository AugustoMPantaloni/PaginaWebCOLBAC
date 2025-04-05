//Componentes
import Header from "../Layout/header"
import ProcessHeader from "./sections/ProcessHeader"
import OurJob from "./sections/OurJob"
import Footer from "../Layout/footer"



const NuestroTrabajo = () =>{
    return(
        <>
        <div className="fondoHeader">
            <Header/>
        </div>
            <ProcessHeader/>
            <OurJob/>
            <Footer/>
        </>
    )
}

export default NuestroTrabajo