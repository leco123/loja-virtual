import { SenhaValidator } from './../../validators/senha-validator';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { ConfirmarSenhaValidator } from './../../validators/confirmar-senha-validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  public mensagemError: string = '';
  public form: FormGroup;
  public loading: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      senha: [
        null,
        Validators.compose([Validators.required, SenhaValidator]),
      ],
      confirmarSenha: [null],
    });

    this.form.controls.confirmarSenha.setValidators(
      ConfirmarSenhaValidator.validar(this.form.controls.senha)
    );
  }

  ngOnInit() {}

  public get senha() {
    return this.form.get('senha');
  }

  public get nome() {
    return this.form.get('nome');
  }

  public get email() {
    return this.form.get('email');
  }

  public get confirmarSenha() {
    return this.form.get('confirmarSenha');
  }

  public cadastrar() {
    const usuario = this.form.value;
    // TODO: Adicionar a propriedade confirmarSenha na API
    delete usuario.corfirmarSenha;
    this.loading = true;
    this.auth.cadastrar(usuario).subscribe(
      () => {
        this.loading = true;
        this.router.navigateByUrl('login');
      },
      () => {
        this.loading = false;
        this.mensagemError = 'Ocorreu algum erro ao cadastrar';
      }
    );
  }
}
