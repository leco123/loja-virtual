import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

export interface Mensagem {
  from?:string;
  subject?:string;
  content?:string;
}

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];

  sortedData: Dessert[];

  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  messages: Mensagem[]=[
    {from: 'Alex de Carvalho', subject: 'Dúvidas', content: 'aqui vai a descrição do conteúdo..'},
    {from: 'Alex de Carvalho', subject: 'Sugestão', content: 'aqui vai a descrição do conteúdo..'},
    {from: 'Alex de Carvalho', subject: 'Problema Pedido', content: 'aqui vai a descrição do conteúdo..'},
    {from: 'Alex de Carvalho', subject: 'Devolução', content: 'Agora que comentei sobre os eixos, você <br>pode estar se perguntando: Por que eu não só chamei de eixo X e eixo Y, pra que esse nomes todos aí? Vamos à resposta'}
  ]

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  constructor() {
    this.sortedData = this.desserts.slice();
   }

  ngOnInit(): void {
  }

  sortData(sort: any) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'calories': return this.compare(a.calories, b.calories, isAsc);
        case 'fat': return this.compare(a.fat, b.fat, isAsc);
        case 'carbs': return this.compare(a.carbs, b.carbs, isAsc);
        case 'protein': return this.compare(a.protein, b.protein, isAsc);
        default: return 0;
      }
    });
  }

    compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

}
