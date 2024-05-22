import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './layout/movie-card/movie-card.component';
import { APIService } from './shared/services/API/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent
  ],
  imports: [ //os módulos importados se utilizam aqui
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [APIService], //serviços que vão ver verificações, autenticações, tipo logins
  bootstrap: [AppComponent] //componente container pra se instanciar. Componente principal
})
export class AppModule { }
