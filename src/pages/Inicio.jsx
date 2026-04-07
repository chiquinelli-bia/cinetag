import Rodape from "../components/rodape/rodape.jsx";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Banner from "../components/banner/banner.jsx";
import Titulo from "../components/titulo/titulo.jsx";
import videos from "./db.json";
import styles from "./inicio.module.css";
import Card from "../components/card/card.jsx";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Rodape />
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id}></Card>;
        })}
      </section>
    </>
  );
}

export default Inicio;
