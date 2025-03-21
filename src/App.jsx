import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importacion de componentes
import Header from './components/header/header';
import Body from "./components/body/body";
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Body/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
