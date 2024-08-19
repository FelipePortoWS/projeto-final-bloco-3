import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toastAlerta } from '../../../utils/toastAlerta'

function PostPutCategoria() {
  const [id, setId] = useState('');
  const [descricao, setDescricao] = useState(''); 
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleDescricaoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescricao(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (id) {
      console.log(`Editando a categoria com ID ${id} e descrição ${descricao}`);
    } else {
      console.log(`Criando uma nova categoria com descrição ${descricao}`);
    }

    navigate('/categorias');
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <form className="w-1/2 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="ID">
          Digite o id, na falta de um, uma nova categoria será criada
        </label>
        <input
          type="text"
          placeholder="id"
          name="id"
          value={id}
          onChange={handleInputChange}
          className="border-2 border-slate-700 rounded p-2"
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            value={descricao}
            onChange={handleDescricaoChange}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
          onSubmit={() => toastAlerta('Banco de dados atualizado', 'sucesso')}
        >Atualizar/Adicionar
        </button>
      </form>
    </div>
  );
}

export default PostPutCategoria;
