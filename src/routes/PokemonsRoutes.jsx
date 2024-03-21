import { Routes, Route } from "react-router-dom";
import Pokemons from "../pages/Pokemons";
import PokemonDetails from "../pages/PokemonDetails";

const PokemonsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />} />
      <Route path=":pokemon" element={<PokemonDetails />} />
    </Routes>
  );
};

export default PokemonsRoutes;
