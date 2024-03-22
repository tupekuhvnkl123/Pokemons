import axios from "axios";

const { VITE_API_ENDPOINT } = import.meta.env;

export const fetchPokemonDetails = async (pokemon) => {
  const { data } = await axios.get(`${VITE_API_ENDPOINT}/pokemon/${pokemon}`);
  const { sprites, id, name, base_experience } = data;

  const types = data.types.map(({ type }) => type.name);
  const image = sprites.front_default;
  const stats = data.stats.map(({ stat, base_stat }) => ({
    name: stat.name,
    value: base_stat,
  }));
  const dimensions = { height: data.height, weight: data.weight };
  const abilities = data.abilities.map(({ ability }) => ability.name);
  const gif = sprites.other.showdown.front_default;

  const extraImages = [
    sprites.other.dream_world.front_default,
    sprites.other.home.front_default,
    sprites.other["official-artwork"].front_default,
    sprites.back_default,
    sprites.front_default,
  ];

  return {
    id,
    name,
    experience: base_experience,
    dimensions,
    types,
    stats,
    image,
    gif,
    abilities,
    extraImages,
  };
};
