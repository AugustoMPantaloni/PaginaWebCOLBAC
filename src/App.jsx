import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importacion de componentes
import NavBar from './components/Layout/navbar';
import Home from './components/home/Home';
import NuestroTrabajo from './components/nuestroTrabajo/nuestroTrabajo';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
//SCss
import './sass/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/navBar" element={<NavBar/>} />
        <Route path="/NuestroTrabajo" element={<NuestroTrabajo/>}/>
        <Route path="/SobreNosotros" element={<SobreNosotros/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
