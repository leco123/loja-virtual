import { CategoriaItem } from './../../../models/categoriaItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-categoria',
  templateUrl: './grid-categoria.component.html',
  styleUrls: ['./grid-categoria.component.css']
})
export class GridCategoriaComponent implements OnInit {
  public displayedColumns: string[] = ['codigo', 'nome', 'ordem', 'editar', 'deletar'];
  public dataSource: CategoriaItem[] = [];

  constructor() {
    this.addItemGrid();
  }

  ngOnInit(): void {
  }

  addItemGrid() {
    this.dataSource = [
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
  }
}
