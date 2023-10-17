import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar/NavBar';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
);
}
export default App;