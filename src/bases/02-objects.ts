export const pokemonIds = [1,20,30,34,55];



interface Pokemon {
    id: number;
    name: string;
    age: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 3
}

export const charmander:Pokemon = {
    id: 4,
    name: "Charmander",
    age: 5
}

export const pokemons:Pokemon[] = [];

pokemons.push(bulbasaur, charmander);

console.log(pokemons);