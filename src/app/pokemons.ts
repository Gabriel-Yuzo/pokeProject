import { PokemonsInfo } from "./pokemons-name"

export interface Pokemon {
    count: number,
    next: string,
    provious?: null,
    results: PokemonsInfo[]

}
