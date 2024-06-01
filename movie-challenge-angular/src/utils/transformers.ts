// funções de utilidade compartilhadas

import { Movie } from '../models/Movie';

// A função deve receber um objeto de dados de filme da API como parâmetro e retornar um objeto do modelo de negócios Movie.
const formatMovie =  (rawData: any): Movie => { // Esta função será responsável pela transformação dos dados do filme da API para o modelo de negócios Movie.
// criando um dado bruto. Como converter um dado bruto 'rawmoviedata' em objeto movie no formato js ou ts?
//A função deve receber um objeto de dados de filme da API como parâmetro e retornar um objeto do modelo de negócios Movie.
  const formattedMovie: Movie = { // Atribuir as propriedades relevantes dos dados da API às propriedades correspondentes no modelo de negócios Movie.
    id: rawData.id,
    title: rawData.title,
    release_date: rawData.release_date, // Sugiro renomear para releaseYear para manter consistência com o tipo Movie
    overview: rawData.overview,
    vote_average: rawData.vote_average, // Sugiro renomear para rating para manter consistência com o tipo Movie
    genre_ids: rawData.genre_ids, // Sugiro renomear para genreIds para manter consistência com o tipo Movie
    poster_path: `https://image.tmdb.org/t/p/w500${rawData.poster_path}`
};

return formattedMovie;
};
export {formatMovie}


