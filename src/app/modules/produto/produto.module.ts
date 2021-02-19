import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { ItemComponent } from './item/item.component';
import { ProdutoComponent } from './produto.component';
import { FormCategoriaComponent } from './categoria/form-categoria/form-categoria.component';
import { GridCategoriaComponent } from './categoria/grid-categoria/grid-categoria.component';


@NgModule({
  declarations: [
    CategoriaComponent,
    FormCategoriaComponent,
    GridCategoriaComponent,
    ItemComponent,
    ProdutoComponent,
    FormCategoriaComponent,
    GridCategoriaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MaterialModule
  ]
})
export class ProdutoModule { }
