import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  validade: string;
  categoria: Categoria | null;
}