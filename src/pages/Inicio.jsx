import Rodape from "../components/rodape/rodape.jsx";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Banner from "../components/banner/banner.jsx";
import Titulo from "../components/titulo/titulo.jsx";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Rodape />
    </>
  );
}

export default Inicio;
