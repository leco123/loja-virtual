import { Imagem } from './imagem';
import { CategoriaItem } from './categoriaItem';
export interface Item {
  codigo?: number;
  nome?: string;
  descricao?: string;
  categoria?: CategoriaItem;
  imagem?: Imagem[];
}
