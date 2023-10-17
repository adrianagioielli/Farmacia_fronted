import logoFarmacia from '../../assets/logo_farmacia.png'
import userImage from '../../assets/userLogo.png'
import logoCart from '../../assets/shoppingCart.png'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='flex justify-center'>
                <img src={logoFarmacia} alt="" className="w-2/3"/>
            </div>
            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline text-white'>Home</Link>
              <Link to='/listaCategorias' className='hover:underline text-white'>Categorias</Link>
              <Link to='/cadastrarCategoria' className='hover:underline text-white'>Cadastrar categorias</Link>
              <div className="flex justify-center ">
            </div>
            <div className="flex justify-center ">
            <Link to='/login' className='hover:underline text-white'>
                <img src={userImage} alt=""/>
            </Link>
            <img src={logoCart} alt=""/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar