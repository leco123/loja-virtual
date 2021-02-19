import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'cadastrar', component: CadastrarComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'pessoa', loadChildren: () => import('./modules/pessoa/pessoa.module').then(m => m.PessoaModule) },
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'empresa', loadChildren: () => import('./modules/empresa/empresa.module').then(m => m.EmpresaModule) },
      { path: 'produto', loadChildren: () => import('./modules/produto/produto.module').then(m => m.ProdutoModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
