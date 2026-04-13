import Banner from "@/components/banner/banner.jsx";
import Titulo from "@/components/titulo/titulo.jsx";
import styles from "./inicio.module.css";
import Card from "@/components/card/card.jsx";
import { useEffect, useState } from "react";

function Inicio() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/chiquinelli-bia/cinetag-api/videos",
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id}></Card>;
        })}
      </section>
    </>
  );
}

export default Inicio;
