import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importacion de componentes
import NavBar from './components/navbar/navbar';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/navBar" element={<NavBar />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
