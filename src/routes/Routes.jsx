import { Routes, Route, Navigate } from "react-router-dom";
import PokemonsRoutes from "./PokemonsRoutes";

const AppRoutes = () => (
  <Routes>
    <Route path="/*" element={<PokemonsRoutes />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
