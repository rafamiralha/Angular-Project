import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';

export const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'contatos', component: ContatosComponent},
  {path:"", redirectTo:'/home',pathMatch:'full'}
];
