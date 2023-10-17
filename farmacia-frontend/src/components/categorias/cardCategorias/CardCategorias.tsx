import { Link } from 'react-router-dom'


function CardCategorias() {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-betweem'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Descricao: </p>
      <div className="flex">
        <Link to={'/atualizarCategoria/${categoria.id}'} 
          className='w-full text-slate-600 bg-indigo-800 hover:bg-indigo-900 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={'/deletarCategoria/${categoria.id}'} className='text-slate-600 bg-red-400 hover:bg-red-800 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias