import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['codigo', 'nome', 'preco', 'categoria'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


export interface PeriodicElement {
  codigo: number;
  nome:  string;
  preco:  number;
  categoria:  string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, nome:  'Hydrogen', preco:  1.0079, categoria:  'H'},
  {codigo: 2, nome:  'Helium', preco:  4.0026, categoria:  'He'},
  {codigo: 3, nome:  'Lithium', preco:  6.941, categoria:  'Li'},
  {codigo: 4, nome:  'Beryllium', preco:  9.0122, categoria:  'Be'},
  {codigo: 5, nome:  'Boron', preco:  10.811, categoria:  'B'},
  {codigo: 6, nome:  'Carbon', preco:  12.0107, categoria:  'C'},
  {codigo: 7, nome:  'Nitrogen', preco:  14.0067, categoria:  'N'},
  {codigo: 8, nome:  'Oxygen', preco:  15.9994, categoria:  'O'},
  {codigo: 9, nome:  'Fluorine', preco:  18.9984, categoria:  'F'},
  {codigo: 10, nome:  'Neon', preco:  20.1797, categoria:  'Ne'},
  {codigo: 11, nome:  'Sodium', preco:  22.9897, categoria:  'Na'},
  {codigo: 12, nome:  'Magnesium', preco:  24.305, categoria:  'Mg'},
  {codigo: 13, nome:  'Aluminum', preco:  26.9815, categoria:  'Al'},
  {codigo: 14, nome:  'Silicon', preco:  28.0855, categoria:  'Si'},
  {codigo: 15, nome:  'Phosphorus', preco:  30.9738, categoria:  'P'},
  {codigo: 16, nome:  'Sulfur', preco:  32.065, categoria:  'S'},
  {codigo: 17, nome:  'Chlorine', preco:  35.453, categoria:  'Cl'},
  {codigo: 18, nome:  'Argon', preco:  39.948, categoria:  'Ar'},
  {codigo: 19, nome:  'Potassium', preco:  39.0983, categoria:  'K'},
  {codigo: 20, nome:  'Calcium', preco:  40.078, categoria:  'Ca'},
];
