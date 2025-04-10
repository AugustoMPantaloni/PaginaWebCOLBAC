import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const VantaBackground = () => {
const vantaRef = useRef(null);

useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";
    script.async = true;
    script.onload = () => {
        if (window.VANTA) {
        window.VANTA.GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xF2F2F2,
        color2: 0x2d2d2d,
        backgroundColor:  0xff6b00,
        size: 1,
        });
        0xff6b00
    }
    };
    document.body.appendChild(script);

    return () => {
        if (vantaRef.current && vantaRef.current.vantaEffect) {
        vantaRef.current.vantaEffect.destroy();
        }
    };
}, []);

return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }} />;
};

export default VantaBackground;
