import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';
import { APIService } from './shared/services/API/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: Movie[] = []; // defina a propriedade `movies` na sua classe `AppComponent`.

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.getMovies({ filters: { page: 1 } }).subscribe( // informando o parâmetro
    (response) => {  // O `subscribe` espera um objeto que contém `metaData` e `movies`,
        this.movies;
      },
      (error) => {
        console.error('Erro ao buscar filmes:', error);
      }
    );
  }
}