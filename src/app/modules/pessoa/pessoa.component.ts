import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
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
      telefones: new FormArray([new FormControl()]),
      enderecos: this.fb.array([ // retorna um FormArray
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
    this.telefones.push(new FormControl());
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

}
