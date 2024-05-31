// definições de modelos de dados usados na api

// O tipo Movie foi definido dentro do arquivo .d.ts, incluindo as propriedades para a renderização da UI e a lógica de negócios.
export type Movie = { // o que quero mostrar em tela / renderização / O tipo Movie foi exportado corretamente a partir do arquivo .d.ts.
    id: number;
    title: string;
    poster_path: string;
    release_year: string;
    overview: string;
    vote_average: number;
    genre_ids: number[];
}

