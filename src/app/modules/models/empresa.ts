import { Endereco } from './endereco';
import { Telefone } from './telefone';
export interface Empresa {
  razaSocial?: string;
  nomefantasia?: string;
  tipo?: string;
  cnpj?: string;
  inscricaoFederal?: string;
  inscricaoEstadual?: string;
  inscricaoMunicipal?: string;
  telefones?: Telefone[];
  enderecos?: Endereco[];
}
