import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/services/API/api.service';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movieList: any[] = []; // Inicializando como array vazio

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.apiService.getMovies().subscribe(
      (data: Movie[]) => {
        console.log('Dados recebidos da API:', data);
        this.movieList = data;
      },
      (error) => {
        console.error('Erro ao buscar filmes:', error);
      }
    );
  }
}