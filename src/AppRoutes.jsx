import Inicio from "@/pages/inicio/inicio.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "@/pages/favoritos/favoritos";
import Player from "@/pages/player/player";
import NaoEncontrada from "@/pages/naoEncontrada/naoEncontrada";
import PaginaBase from "./pages/paginaBase/paginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
