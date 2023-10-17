import './App.css';
import Home from './paginas/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import CadastrarCategoria from './components/categorias/cadastrarCategoria/CadastrarCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/listaCategorias" element={<ListaCategorias />} />
                <Route path="/cadastrarCategoria" element={<CadastrarCategoria />} />
                <Route path="/editarCategoria/:id" element={<CadastrarCategoria />} />
                <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              </Routes>
            </div>
          <Footer />
      </BrowserRouter>  
    </AuthProvider>
);
}
export default App;