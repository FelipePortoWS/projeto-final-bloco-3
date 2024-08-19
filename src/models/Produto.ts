import Categoria from './Categoria';

export default interface Produto {
  id: number;
  titulo: string;
  texto: string;
  validade: string;
  categoria: Categoria | null;
}