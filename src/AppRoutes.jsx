import Inicio from "@/pages/inicio/inicio.jsx";
import Cabecalho from "@/components/cabecalho/cabecalho.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "@/components/rodape/rodape.jsx";
import Container from "@/components/container/container.jsx";
import Favoritos from "@/pages/favoritos/favoritos";
import FavoritosProvider from "@/context/favoritosContext.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritosProvider>
        <Cabecalho />
        <Container>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </Container>
        <Rodape />
      </FavoritosProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
