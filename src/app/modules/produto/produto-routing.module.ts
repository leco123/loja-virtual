import { ItemComponent } from './item/item.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProdutoComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'item', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
