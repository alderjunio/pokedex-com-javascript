
const pokeapi = {}

pokeapi.getPokemonDetail = (pokemon) => {
   return fetch(pokemon.url).then((response) => response.json())
}

pokeapi.getPokemons = (offset = 0, limit = 5) => {  
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
}

