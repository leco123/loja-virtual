import { Empresa } from './../models/empresa';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public form: FormGroup;
  public empresa: Empresa;

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit() {
  }

  public criarForm(): void {
    this.form = this.fb.group({ // retorna um FormGroup
      razaosocial: [null, Validators.compose([Validators.required])],
      nomefantasia: [null, Validators.compose([Validators.required])],
      cnpj: [null, Validators.compose([Validators.required])],
      tipo: [null, Validators.compose([Validators.required])],
      inscricaofederal: [null,Validators.compose([Validators.required])],
      inscricaoestadual: [null,Validators.compose([Validators.required])],
      incsricaomuniciapl: [null,Validators.compose([Validators.required])],
      telefones: new FormArray([new FormControl()]),
      enderecos: this.fb.array([ // retorna um FormArray
        this.criarFormEndereco()
      ])
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
