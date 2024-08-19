import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toastAlerta } from '../../../utils/toastAlerta';


function PostProduto() {
  let navigate = useNavigate();


  function retornar() {
    navigate('/produtos');
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">Cadastrar produto</h1>

      <form  className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do produto</label>
          <input
            type="text"
            placeholder="Nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Descrição</label>
          <input
            type="text"
            placeholder="descrição"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="categoria">Categoria do produto</label>
          <input
            type="text"
            placeholder="Categoria"
            required
            className="border-2 border-slate-700 rounded p-2">
            </input>

        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            type="text"
            placeholder="R$"
            required
            className="border-2 border-slate-700 rounded p-2">
            </input>

        </div>

        <button type='submit' onClick={() => { retornar(); toastAlerta('Banco de dados atualizado', 'sucesso')}} className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 
        mx-auto block py-2'>
        Cadastrar
        </button>

      </form>
    </div>
  );
}

export default PostProduto;