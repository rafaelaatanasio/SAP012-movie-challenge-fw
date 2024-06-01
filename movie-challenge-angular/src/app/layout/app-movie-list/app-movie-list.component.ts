import { Component, Input } from '@angular/core';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-app-movie-list',
  templateUrl: './app-movie-list.component.html',
  styleUrls: ['./app-movie-list.component.css']
})
export class AppMovieListComponent {

@Input() movies!: Movie[];// Propriedade de entrada chamada movies. Declaração do input movies do tipo Movie[]

}
