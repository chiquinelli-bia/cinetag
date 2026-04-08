import styles from "./favoritos.module.css";
import Banner from "@/components/banner/banner.jsx";
import Titulo from "@/components/titulo/titulo.jsx";
import { useFavoritoContext } from "@/context/favoritosContext";
import Card from "../../components/card/card";

function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
