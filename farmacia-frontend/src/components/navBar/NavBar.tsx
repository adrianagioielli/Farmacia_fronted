import React from 'react'


function Navbar() {

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia</div>

            <div className='flex gap-4'>
                <div className='hover:underline'>Pesquisar</div>
                <div className='hover:underline'>Categorias</div>
                <div className='hover:underline'>Cadastrar Categoria</div>
                <div className='hover:underline'>Perfil</div>
                <div className='hover:underline'>Carrinho</div>
                <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar