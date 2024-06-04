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
  // Adicionei propriedades para controlar a paginação (`currentPage` e `totalPages`).
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private apiService: APIService) { }

  // Ajustei o método `ngOnInit` para inicializar a paginação e carregar os filmes da primeira página
  ngOnInit(): void {
    this.loadMovies(this.currentPage);
  }

// Adicionei um método `loadMovies` para carregar os filmes com base na página selecionada.

  loadMovies(page:number): void{
    this.apiService.getMovies({ filters: { page } }).subscribe( // informando o parâmetro
      (response) => { // O `subscribe` espera um objeto que contém `metaData` e `movies`,
        this.movies = response.movies;
        this.totalPages = response.metaData.pagination.totalPages;
      },
      (error) => {
        console.error('Erro ao buscar filmes:', error);
      }
    );
  }

  // Adicionei um método `onPageSelect` para lidar com a seleção de uma nova página e chamar `loadMovies`.

  onPageSelect(page: number): void {
    this.currentPage = page;
    this.loadMovies(this.currentPage);
  }
}

