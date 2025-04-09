//Componentes
import IntroIndex from "./body/sections/IntroIndex";
import Body from "./body/body";
import Footer from "../Layout/footer";
import React, { useRef, useEffect, useState } from "react";
import PantallaCarga from "../Layout/pantallaCarga";
const Home = () =>{
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const yaMostroPantallaCarga = localStorage.getItem("pantallaCargaMostrada");

        if (yaMostroPantallaCarga) {
            setCargando(false);
        } else {
        const timer = setTimeout(() => {
            setCargando(false);
            localStorage.setItem("pantallaCargaMostrada", "true");
        }, 15000);
        return () => clearTimeout(timer);
        }
    }, []);

    if (cargando) return <PantallaCarga />;
    return(
        <>
            <IntroIndex/>
            <Body/>
            <Footer/>
        </>
    )
}

export default Home;