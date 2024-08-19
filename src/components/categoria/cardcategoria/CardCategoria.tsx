import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import "../deletecategoria/DeleteCategoria"
import PostPutCategoria from "../postputcategoria/PostPutCategoria"

function CardCategoria() {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Descrição da categoria</p>
      <div className="flex">
      <Link to="/PostPutCategoria" className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Editar</button>
        </Link>
        <div className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
        <Link to="/DeleteCategoria" className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default CardCategoria