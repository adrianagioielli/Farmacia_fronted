import Categoria from "./Categoria";

export default interface Produto {
  id: number;
  titulo: string;
  texto: string;
  valor: number;
  categoria: Categoria | null;
}