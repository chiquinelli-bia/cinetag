import Cabecalho from "@/components/cabecalho/cabecalho.jsx";
import { Outlet } from "react-router-dom";
import Rodape from "@/components/rodape/rodape.jsx";
import Container from "@/components/container/container.jsx";
import { FavoritosProvider } from "@/context/favoritosContext.jsx";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
