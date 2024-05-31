import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/services/API/api.service';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-movie-card', // metadados
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie; // propriedade de entrada -  Adicione o operador "!" para indicar que será inicializado

//  movieList: any[] = []; // Inicializando como array vazio

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    // Lógica adicional, se necessário
  }
}

  /* 
  ngOnInit(): void {
    this.listar(); // lógica para puxar
  }

  listar(): void {
    this.apiService.getMovies().subscribe(
      (data: Movie[]) => {
        console.log('Dados recebidos da API:', data);
        this.movie = data;
      },
      (error) => {
        console.error('Erro ao buscar filmes:', error);
      }
    );
  }
}*/