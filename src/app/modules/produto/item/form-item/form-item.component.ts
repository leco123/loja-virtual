import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

  public categorias: string[] = [];
  public select = 'option2';

  constructor() { }

  ngOnInit(): void {
  }

}
