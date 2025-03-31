import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importacion de componentes
import NavBar from './components/navbar/navbar';
import Home from './components/home/Home';
import NuestroTrabajo from './components/nuestroTrabajo/nuestroTrabajo';
//Css
import './App.css';
import Footer from './components/footer/footer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/navBar" element={<NavBar />} />
        <Route path="/NuestroTrabajo" element={<NuestroTrabajo/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
