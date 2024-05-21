// funções de utilidade compartilhadas

import { Movie } from '../models/Movie';

type RawMovieData = { //dados brutos
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  genre_ids: number[];
}

const formatMovie =  (rawData: RawMovieData): Movie => { // Esta função será responsável pela transformação dos dados do filme da API para o modelo de negócios Movie.
// criando um dado bruto. Como converter um dado bruto em movie no formato js ou ts?
return {
    id: rawData.id,
    title: rawData.title,
    poster_path: rawData.poster_path,
    release_year: rawData.release_date,
    overview: rawData.overview,
    vote_average: rawData.vote_average,
    genre_ids: rawData.genre_ids,
  };
};

export {formatMovie}