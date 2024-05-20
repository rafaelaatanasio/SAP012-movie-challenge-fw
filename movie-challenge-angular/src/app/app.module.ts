import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './layout/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent
  ],
  imports: [ //os módulos importados se utilizam aqui
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //serviços que vão ver verificações, autenticações, tipo logins
  bootstrap: [AppComponent] //componente container pra se instanciar. Componente principal
})
export class AppModule { }
