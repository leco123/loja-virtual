import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CategoriaItem } from './../../../models/categoriaItem';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-grid-categoria',
  templateUrl: './grid-categoria.component.html',
  styleUrls: ['./grid-categoria.component.css']
})
export class GridCategoriaComponent implements OnInit, AfterViewInit  {
  public displayedColumns: string[] = ['codigo', 'nome', 'ordem', 'editar', 'deletar'];
  //public dataSource: CategoriaItem[] = [];
  public dataSource = new MatTableDataSource<CategoriaItem>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.addItemGrid();
  }

  ngOnInit(): void {
  }

  addItemGrid() {

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


const ELEMENT_DATA:  CategoriaItem[] = [
  { codigo: 1,
    nome: 'VolksWagen',
    ordem: 0
  },
  { codigo: 2,
    nome: 'FIAT',
    ordem: 1
  },
  { codigo: 3,
    nome: 'Peugeot',
    ordem: 2
  },
  { codigo: 4,
    nome: 'Audi',
    ordem: 3
  },
  { codigo: 5,
    nome: 'Ford',
    ordem: 4
  },
  { codigo: 6,
    nome: 'Chevrolet',
    ordem: 5
  },
  { codigo: 5,
    nome: 'Ford',
    ordem: 4
  },
  { codigo: 6,
    nome: 'Chevrolet',
    ordem: 5
  }
];
