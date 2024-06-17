import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ProdutoComponent } from './produto/produto.component';
import { NovProdComponent } from './nov-prod/nov-prod.component';

export const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'contatos', component: ContatosComponent},
  {path:"", redirectTo:'/home',pathMatch:'full'},
  {path:'produto', component: ProdutoComponent},
  {path:'novoprod',component:NovProdComponent}
];
