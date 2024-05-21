// definições de modelos de dados usados na api

export type Movie = { // o que quero mostrar em tela / renderização
    id: number;
    title: string;
    poster_path: string;
    release_year: string;
    overview: string;
    vote_average: number;
    genre_ids: number[];
}