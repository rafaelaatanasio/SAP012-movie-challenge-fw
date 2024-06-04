import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/models/Movie';
import { formatMovie } from 'src/utils/transformers';
import { environment } from 'src/environments/environment.development';

// Classe com métodos onde vai realizar a lógica

// INJEÇÃO DE DEPENDÊNCIA via construtor
@Injectable({ //decoretor, a classe pode ser injetada em outra classe pra poder usar
  providedIn: 'root'
})
export class APIService { // classe definida

  apiUrl = environment.BASE_URL; // criei uma variável pra puxar o link da API no enviroment

  // com Injeção de dependência via construtor
  constructor(private http: HttpClient) { } // Construtor da classe API. Ele recebe uma instância de HttpClient como um parâmetro privado
// notificadores de acesso public ou private (melhor pra economizar nas declarações)
  // propriedade de instancia http pra usar no método abaixo

  // método getMovie // Modificar o método `getMovies` para aceitar um objeto como parâmetro
  getMovies(params: { filters: { page: number } }): Observable<{ metaData: 
    { pagination: { currentPage: number; totalPages: number; } }, movies: Movie[] }> { // O método deve retornar um Observable que emite um array de objetos de filme do modelo de negócios
   // Ajustar a requisição API para incluir o parâmetro `page`
      const page = params.filters.page || 1; // Definir valor padrão para page

// Ajustar a requisição API para incluir o parâmetro `page`
    // Incluir o token da API nos cabeçalhos da requisição HEADERS, recuperado do carregador de configuração de ambiente.
    const headers = new HttpHeaders().set('Authorization', `Bearer ${environment.TOKEN_API}`);
    // aqui faço uma requisição HTTP GET para a URL da API e retorna um Observable de um array de Movie
    //  Utilizar o cliente HTTP para realizar uma requisição/método GET para /discover/movie do The Movie DB.
    return this.http.get<{ results: any[], page: number, total_pages: number }>(`${this.apiUrl}/discover/movie`, { headers,
       params: { page: page.toString() } // Incluir o parâmetro page na requisição
       //  ajuste a URL da requisição para incluir o parâmetro `page` que é convertido para string
  }).pipe(
        map(response => ({
          metaData: {
            pagination: { //Mude a estrutura de retorno do método `getMovies` para incluir informações de paginação.
              currentPage: response.page, 
              totalPages: response.total_pages
            }
          },
          movies: response.results.map(rawData => formatMovie(rawData))
    }))
  );
  }
} 