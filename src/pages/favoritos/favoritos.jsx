import styles from "./favoritos.module.css";
import Banner from "@/components/banner/banner.jsx";
import Titulo from "@/components/titulo/titulo.jsx";
import { useFavoritoContext } from "@/context/favoritosContext";
import Card from "../../components/card/card";

function Favoritos() {
  const { Favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {Favorito.map((fav) => {
          <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
