import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './layout/movie-card/movie-card.component';
import { APIService } from './shared/services/API/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppMovieListComponent } from './layout/app-movie-list/app-movie-list.component';
import { AppHomeComponent } from './layout/app-home/app-home.component';

@NgModule({ // decoretors fazem parte do pacote angular/core
  declarations: [ // metadados
    AppComponent,
    MovieCardComponent,
    AppMovieListComponent,
    AppHomeComponent
  ],
  imports: [ // metadados, os módulos importados se utilizam aqui ou dentro de um componente acima
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [APIService], //serviços que vão ficar disponíveis nos componentes declarados nesse módulo ou poderia deixar vazio pra pegar o escopo geral?
  bootstrap: [AppComponent] //componente container pra se instanciar, tudo fica aqui, page principal: rotas, declarar ou chamar o meu na aplicação.
})
export class AppModule { }
