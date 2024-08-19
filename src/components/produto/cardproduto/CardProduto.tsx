import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import produtoicon from '../../../assets/produtoicon.png'
import { SelectionBackground } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom';


function CardProduto() {

  const navigate = useNavigate();

  function editProduto(){
    navigate("/PostPutProduto");
  }

  function deleteProduto(){
    navigate("/deleteProduto");
  }

  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={produtoicon} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>Nome do produto</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>R$99,99</h4>
          <p>Descrição do produto</p>
          <p>Categoria: - - - </p>
          <p>Data de validade: - - - </p>
        </div>
      </div>
      <div className="flex">
      <div className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button onClick={() => editProduto()} >Editar</button>
        </div>
        <div className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button onClick={() => deleteProduto()} >Deletar</button>
        </div>
      </div>
    </div>
  )
}

export default CardProduto