import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Componentes
import NavBar from './components/Layout/navbar';
import PantallaCarga from './components/Layout/pantallaCarga';
import './sass/main.scss';

import Home from './components/home/Home';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import Contactanos from './components/contactanos/contactanos';
import NuestroTrabajo1 from './components/nuestroTrabajo1/nuestroTrabajo1';
import Servicios from './components/servicios/Servicios';

function AOSWrapper() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, [location]);

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/NavBar' element={<NavBar/>}/>
      <Route path='/NuestroProceso' element={<NuestroTrabajo1/>} />
      <Route path='/SobreNosotros' element={<SobreNosotros/>} />
      <Route path="/Contactanos" element={<Contactanos/>}/>
      <Route path="/Servicios" element={<Servicios/>}/>
    </Routes>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <PantallaCarga />
      ) : (
        <AOSWrapper />
      )}
    </BrowserRouter>
  );
}

export default App;