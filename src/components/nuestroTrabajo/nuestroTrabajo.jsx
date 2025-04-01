//Componentes
import Header from "./header/header"
import ColumnOurJob from "./columnOurJob/columnOurJob.wrapper"
import Footer from "../footer/footer"

//Css
import "./nuestroTrabajo.css"

import { firstList } from "./constants/ourJobFirstList"
import { secondList } from "./constants/ourJobSecondList"

import ourWorkListImg from '../../assets/our-work-list.svg'

const NuestroTrabajo = () =>{
    return(
        <>
            <Header/>
            <div className="ourWorkContainer">
                {/* <img src={ourWorkListImg} alt="Our Work List" className="ourWorkListImg"/>
                <Planificacion/>
                <Diseño/>
                <Desarrollo/>
                <Pruebas/>
                <Despliegue/>
                <Mantenimiento/> */}
                <div className="ourWorkFirstListContainer">
                    {
                        firstList.map((item, idx) => (
                            <ColumnOurJob  
                                key={idx}
                                idx={idx}
                                imgSRC={item?.imgSRC}
                                tittle={item?.tittle}
                                content={item?.content}
                            />
                        ))
                    }
                </div>
                <div className="ourWorkListImgContainer">
                    <img 
                        src={ourWorkListImg} 
                        alt="ourWorkListImg" 
                        className="ourWorkListImg"
                        height={830}
                    />
                </div>
                <div className="ourWorkSecondListContainer">
                    {
                        secondList.map((item, idx) => (
                            <ColumnOurJob  
                                key={idx}
                                idx={idx}
                                imgSRC={item?.imgSRC}
                                tittle={item?.tittle}
                                content={item?.content}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default NuestroTrabajo