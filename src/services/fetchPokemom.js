

export async function fetchPokemon() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  const data = await response.json();
  return data.results;
}