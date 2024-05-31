import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/services/API/api.service';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

movies!: Movie[];
isLoading: boolean = true;

constructor(private apiService: APIService) { }

//O método ngOnInit() é um dos métodos do ciclo de vida do Angular que é chamado após a
//inicialização do componente. É um bom lugar para chamar o método getMovies() para buscar
//os dados dos filmes.
ngOnInit(): void {
  this.getMovies();
}

getMovies(): void {
  this.apiService.getMovies()
    .subscribe(movies => {
      this.movies = movies;
    this.isLoading = false; // Marca o carregamento como completo
        },
        error => {
          console.error('Erro ao obter os filmes:', error);
          this.isLoading = false; // Marca o carregamento como completo em caso de erro
        }
      );
    }
  }