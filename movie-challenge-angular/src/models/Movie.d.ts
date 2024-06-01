// definições de modelos de dados usados na api

// O tipo Movie foi definido dentro do arquivo .d.ts, incluindo as propriedades para a renderização da UI e a lógica de negócios.
export type Movie = {
    id: number;
    title: string;
    poster_path: string; // Sugiro renomear para posterUrl para manter consistência com o formato de URL.
    release_date: string; // Sugiro renomear para releaseYear para manter consistência com o nome das propriedades.
    overview: string;
    vote_average: number; // Sugiro renomear para rating para manter consistência com o nome das propriedades.
    genre_ids: number[]; // Sugiro renomear para genreIds para manter consistência com o nome das propriedades.
}
