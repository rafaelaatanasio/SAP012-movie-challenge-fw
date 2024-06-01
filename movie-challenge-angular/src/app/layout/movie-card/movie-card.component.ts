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

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    // Lógica, se necessário
  }
}