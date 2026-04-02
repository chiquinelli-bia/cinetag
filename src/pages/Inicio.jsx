import Rodape from "../components/rodape/rodape.jsx";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Banner from "../components/banner/banner.jsx";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Rodape />
    </>
  );
}

export default Inicio;
