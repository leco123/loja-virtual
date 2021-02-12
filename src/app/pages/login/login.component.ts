import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    senha: new FormControl(),
  });

  ngOnInit(): void {
  }

}