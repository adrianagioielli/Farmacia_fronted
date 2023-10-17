import React from 'react'
import homeLogo from '../../assets/home.png'
import logoFarmacia from '../../assets/logo_farmacia.png'
import userImage from '../../assets/userLogo.png'
import logoCart from '../../assets/shoppingCart.png'


function Navbar() {

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='flex justify-center'>
                <img src={logoFarmacia} alt="" className="w-2/3"/>
            </div>
            <div className='flex gap-4'>
                <div className='hover:underline'>Categorias</div>
                <div className='hover:underline'>Cadastrar Categoria</div>
                <div className="flex justify-center ">
                    <img src={userImage} alt=""/>
                </div>
                <div className="flex justify-center ">
                    <img src={logoCart} alt=""/>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar