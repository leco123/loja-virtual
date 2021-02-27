import { Api } from './../../services/api';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudComponent implements OnInit {

  @Input() public form: FormGroup;

  @Input() public titulo: string;

  @Input() public api: Api<any>;

  constructor() { }

  ngOnInit(): void {
  }

  public criar() {

  }

}
