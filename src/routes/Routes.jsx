import { Routes, Route, Navigate } from "react-router-dom";
import PokemonsRoutes from "./PokemonsRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pokemons" element={<PokemonsRoutes />} />
      <Route path="*" element={<Navigate to="/pokemons" />} />
    </Routes>
  );
};

export default AppRoutes;
