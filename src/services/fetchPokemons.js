import axios from "axios";

const { VITE_API_ENDPOINT } = import.meta.env;

export const fetchPokemons = async ({ pageParam = 0 }) => {
  const response = await axios.get(`${VITE_API_ENDPOINT}/pokemon`, {
    params: { limit: "20", offset: pageParam * 20 },
  });

  const pokemonPromises = response.data.results.map(async ({ url, name }) => {
    const { data } = await axios.get(url);

    const { sprites, id } = data;

    const types = data.types.map(({ type }) => type.name);
    const image =
      sprites.front_default || sprites.other["official-artwork"].front_default;
    const gif = sprites.other.showdown.front_default;
    const stats = data.stats.map(({ stat, base_stat }) => ({
      name: stat.name,
      value: base_stat,
    }));

    return {
      name,
      id,
      types,
      stats,
      image,
      gif,
    };
  });

  return Promise.all(pokemonPromises);
};
