import { Login } from './login';
import { Endereco } from './endereco';

export interface Pessoa {
    id?: string;
    nome?: string;
    idade?: number;
    olho?: string;
    cabelo?: string;
    telefones?: string[];
    enderecos?: Endereco[];
    login?: Login;
}
