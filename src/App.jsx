import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importación de componentes
import NavBar from './components/Layout/navbar';
import Home from './components/home/Home';
import NuestroTrabajo from './components/nuestroTrabajo/nuestroTrabajo';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import Contactanos from './components/contactanos/contactanos';
import PantallaCarga from './components/Layout/pantallaCarga';
// SCSS
import './sass/main.scss';

// Componente wrapper para refrescar AOS en cada cambio de ruta
function AOSWrapper() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/navBar' element={<NavBar />} />
      <Route path='/NuestroTrabajo' element={<NuestroTrabajo />} />
      <Route path='/SobreNosotros' element={<SobreNosotros />} />
      <Route path="/Contactanos" element={<Contactanos/>}/>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AOSWrapper />
    </BrowserRouter>
  );
}

export default App;
