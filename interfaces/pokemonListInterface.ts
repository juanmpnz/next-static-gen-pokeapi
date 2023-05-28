export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemons[];
}

export interface SmallPokemons {
    name: string;
    url:  string;
    img?: string;
    id?: number
}
