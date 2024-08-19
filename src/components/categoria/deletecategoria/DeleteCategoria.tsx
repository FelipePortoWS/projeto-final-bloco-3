import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeleteCategoria() {

    let navigate = useNavigate()

    function retornar() {
        navigate("/categorias")
    }

    async function deletarTema() {     

    toastAlerta('Tema apagado com sucesso', 'sucesso')
    retornar()

    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>Descrição da Categoria</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarTema}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCategoria