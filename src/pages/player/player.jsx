import styles from "./player.module.css";
import Banner from "@/components/banner/banner.jsx";
import Titulo from "@/components/titulo/titulo.jsx";
import { useParams } from "react-router-dom";
import NaoEncontrada from "@/pages/naoEncontrada/naoEncontrada";
import { useEffect, useState } from "react";

function Player() {
  const param = useParams();
  const [video, setVideo] = useState(null);
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/chiquinelli-bia/cinetag-api/videos?id=${param.id}`,
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(dados[0]);
      });
  }, []);
  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>{" "}
    </>
  );
}

export default Player;
