import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mensagemError: string = '';
  public form: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      senha: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }


  public login() {
    this.auth.logar(this.form.value).subscribe((resposta:  any) =>{
        console.log(resposta);
        this.auth.token = resposta.data.token;
        this.mensagemError = '';
        this.router.navigateByUrl('admin');
        return;
    },
    error =>{
      console.log(error);
      this.mensagemError = error.error.message;
      setTimeout(() => {
        this.mensagemError = '';
      }, 5000);
    });
  }

  public cadastrar(): void {
    this.router.navigateByUrl('cadastrar');
  }

}
