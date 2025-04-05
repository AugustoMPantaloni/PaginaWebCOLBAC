import Header from "../Layout/header";
import Footer from "../Layout/footer";
import AboutUs from "./Sections/AboutUs";
import VisionMission from "./Sections/VisionMission";
import AboutProcess from "./Sections/AboutProcess";

const SobreNosotros = () =>{
    return(
        <>
        <div className="fondoHeader">
            <Header/>
        </div>
            <AboutUs/>
            <VisionMission/>
            <AboutProcess/>
            <Footer/>
        </>
    )
}
export default SobreNosotros;