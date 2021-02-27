import { Pessoa } from './../models/pessoa';
import { PessoaService } from './pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  public form: FormGroup;
  public pessoa: Pessoa = <Pessoa>{};

  constructor(
      private fb: FormBuilder,
      private pessoaService: PessoaService
    ) {
      this.criarForm();
  }

  ngOnInit() {
  }

  public criarForm(): void {
    this.form = this.fb.group({ // retorna um FormGroup
      nome: [null, Validators.compose([Validators.required])],
      idade: [null],
      olho: [],
      cabelo: [],
      telefones:  this.fb.array([
        this.criarFormTelefone()
      ]),
      enderecos: this.fb.array([
        this.criarFormEndereco()
      ]),
      login: this.fb.group({
        email: [null],
        senha: [null]
      })
    });
  }

  get enderecos(): FormArray {
    return this.form.get('enderecos') as FormArray;
  }

  get telefones(): FormArray {
    return this.form.get('telefones') as FormArray;
  }

  public novoTelefone() {
    this.telefones.push(this.criarFormTelefone());
  }

  public criarFormTelefone(): FormControl {
    return new FormControl();
  }

  public novoEndereco() {
    this.enderecos.push(this.criarFormEndereco());
  }

  public criarFormEndereco(): FormGroup {
    return this.fb.group({
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      bairro: [null],
      rua: [],
      numero: []
    });
  }

  public salvar(): void {
      this.pessoa = this.form.value;
      this.pessoa.id = '0245245sdasddas';

      if (!this.form.valid) {
        console.error('validação pessoa', this.form.valid);
        console.log('pessoa: ', this.pessoa);
      } else {
        console.log(this.pessoaService.inserir(this.pessoa));
      }
  }

  public carregarDadosPessoa() {

  }

  public pesquisarPessoa() {

  }

}
