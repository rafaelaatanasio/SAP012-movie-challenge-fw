import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/models/Movie';
import { formatMovie } from 'src/utils/transformers';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class APIService { // classe definida

  apiUrl = environment.BASE_URL; // criei uma variável pra puxar o link da API no enviroment

  constructor(private http: HttpClient) { } // Construtor da classe API. Ele recebe uma instância de HttpClient como um parâmetro privado
  // propriedade de instancia http pra usar no método abaixo
  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`) // buscando array de objeto, qlqr coisa
  }

  getMovies(): Observable<Movie[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${environment.TOKEN_API}`);
    return this.http.get<{ results: any[] }>(`${this.apiUrl}/discover/movie`, { headers })
      .pipe(
        map(response => response.results.map(rawData => formatMovie(rawData)))
      );
  }
}
