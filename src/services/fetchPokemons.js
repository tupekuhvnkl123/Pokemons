import axios from "axios";

const { VITE_API_ENDPOINT } = import.meta.env;

export const fetchPokemons = async ({ pageParam = 0 }) => {
  const response = await axios.get(VITE_API_ENDPOINT, {
    params: { limit: "20", offset: pageParam * 20 },
  });

  const pokemonPromises = response.data.results.map(async (pokemon) => {
    const pokemonResponse = await axios.get(pokemon.url);
    const pokemonData = pokemonResponse.data;
    const types = pokemonData.types.map((type) => type.type.name);
    const image = pokemonData.sprites.front_default;
    console.log(pokemonData.sprites);
    const gif = pokemonData.sprites.other.showdown.front_default;
    const stats = pokemonData.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));
    return {
      name: pokemon.name,
      id: pokemonData.id,
      types: types,
      stats,
      image,
      gif,
    };
  });

  return Promise.all(pokemonPromises);
};
