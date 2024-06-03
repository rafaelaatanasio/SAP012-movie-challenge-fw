import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // pacote router
import { AppHomeComponent } from './layout/app-home/app-home.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent }, // definindo as rotas básicas
]; // valor da constante não muda. Tipagem Routes

@NgModule({
  imports: [RouterModule.forRoot(routes)], // definição das rotas
  exports: [RouterModule]
})
export class AppRoutingModule { }
