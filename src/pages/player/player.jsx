import styles from "./player.module.css";
import Banner from "@/components/banner/banner.jsx";
import Titulo from "@/components/titulo/titulo.jsx";
import { useParams } from "react-router-dom";
import videos from "@/pages/db.json";

function Player() {
  const param = useParams();
  const video = videos.find((video) => video.id === Number(param.id));

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
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>{" "}
    </>
  );
}

export default Player;
