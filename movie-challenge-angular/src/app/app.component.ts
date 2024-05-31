import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/services/API/api.service';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.getMovies().subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      (error) => {
        console.error('Erro ao buscar filmes:', error);
      }
    );
  }
}
