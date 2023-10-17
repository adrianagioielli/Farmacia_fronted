import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import { AuthProvider } from './contexts/AuthContext';
import CardCategorias from './components/categorias/cardCategorias/CardCategorias';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/categoria" element={<CardCategorias/>} />
              </Routes>
            </div>
          <Footer />
      </BrowserRouter>  
    </AuthProvider>
);
}
export default App;