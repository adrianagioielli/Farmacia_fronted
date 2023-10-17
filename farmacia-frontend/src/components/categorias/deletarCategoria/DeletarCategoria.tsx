import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, deletar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';

function DeletarCategoria() {

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  let navigate = useNavigate()
  const{id} = useParams<{id: string}>()

  async function buscarPorId(id:string) {
    try{
      await buscar('/categoria/${id}', setCategoria, { })
    }catch(error: any){}    
  }

  useEffect(() => {
    if (id !== undefined) {
        buscarPorId(id)
    }
  }, [id])

  function retornar(){
    navigate("/ListaCategorias")
  }

  async function deletarCategoria() {
    try{
      await deletar('/ListaCategoria/${id}')
      alert("Categoria apagada com sucesso")
    } catch(error){
      alert("Erro ao apagar a categoria")
    }
  }
  
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>categoria</p>
      <div className="flex">
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' >Não</button>
        <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center'>
          Sim </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarCategoria;