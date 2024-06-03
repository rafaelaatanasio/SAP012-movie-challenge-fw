import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/services/API/api.service'; // importando pra usar o método getMovies
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

movies!: Movie[];
isLoading: boolean = true; // só uma variável pra mostrar que está sendo carregado
error: string = "";

constructor(private apiService: APIService) { }

// o método ngOnInit para chamar o método getMovies assim que o componente é inicializado
ngOnInit(): void {
  this.getMovies();
}

// Implemente a lógica para chamar o método `getMovies` do serviço `APIService` para obter os dados dos filmes.
getMovies(): void {
  this.isLoading = true; // Garantindo. Define isLoading como true assim que a solicitação for feita  this.apiService.getMovies()
  this.apiService.getMovies({ filters: { page: 1 } }) // passando o argumento pra dentro do método
  .subscribe(movies => {
      this.movies = movies.movies; // acessando a propriedade 'movies' dentro do objeto
    this.isLoading = false; // Marca o carregamento como completo
        },
        error => { // Exiba um indicador (isLoading) de carregamento enquanto os dados estão sendo obtidos e trate os erros caso ocorram.
          console.error('Erro ao obter os filmes:', error);
          this.isLoading = false; // Marca o carregamento como completo em caso de erro
        }
      );
    }
  }