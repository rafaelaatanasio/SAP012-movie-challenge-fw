// funções de utilidade compartilhadas

import { Movie } from '../models/Movie';

// A função deve receber um objeto de dados de filme da API como parâmetro e retornar um objeto do modelo de negócios Movie.
const formatMovie =  (rawData: any): Movie => { // Esta função será responsável pela transformação dos dados do filme da API para o modelo de negócios Movie.
// criando um dado bruto. Como converter um dado bruto 'rawmoviedata' em objeto movie no formato js ou ts?
//A função deve receber um objeto de dados de filme da API como parâmetro e retornar um objeto do modelo de negócios Movie.
return { //  Atribuir as propriedades relevantes dos dados da API às propriedades correspondentes no modelo de negócios Movie.
    id: rawData.id, 
    title: rawData.title,
    release_year: rawData.release_date,
    overview: rawData.overview,
    vote_average: rawData.vote_average,
    genre_ids: rawData.genre_ids,
    poster_path: `https://image.tmdb.org/t/p/w500${rawData.poster_path}`
  };
};

export {formatMovie}


