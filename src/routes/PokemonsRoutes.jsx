import { Routes, Route, Navigate } from "react-router-dom";
import Pokemons from "../pages/Pokemons";
import PokemonDetails from "../pages/PokemonDetails";

const PokemonsRoutes = () => (
  <Routes>
    <Route path="/" element={<Pokemons />} />
    <Route path=":pokemon" element={<PokemonDetails />} />
    <Route path="*" element={<Navigate to="/pokemons" />} />
  </Routes>
);

export default PokemonsRoutes;
